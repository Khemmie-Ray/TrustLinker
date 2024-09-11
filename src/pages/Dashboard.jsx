import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import PropTypes from 'prop-types';
import { FaCircleCheck } from "react-icons/fa6";
import {ApolloClient, InMemoryCache, gql} from "@apollo/client";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { getContract } from "../constants/contract";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [value, setValue] = useState(0);
  

  const [data, setData] = useState()
  const [agreements, setAgreements] = useState()


  const {address} = useWeb3ModalAccount()
  console.log(address)

  const { walletProvider } = useWeb3ModalProvider();

  const [isPending, setIsPending] = useState(false)

  // subgraph implementaion
  const queryUrl = "https://api.studio.thegraph.com/query/57950/trustlinker/version/latest";

  const client = new ApolloClient({
    uri: queryUrl,
    cache: new InMemoryCache()
  });

  const getData = gql`
  query{
    agreementCreateds {
    id
    _agreement
    partyA
    partyB
  }
  partyBSigneds {
    id
    _agreement
    partyA
    partyB
  }
  }
  `;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await client.query({query: getData});

        setData(data)
        console.log(data)

      } catch (error) {
        console.log("unable to fetch data",error)
      }
    } 

    fetchData();

    return() => {}

  }, [client, getData]);

  // const breakdata = data?.agreementCreateds.map((item )=> {
  //   return item;
  // })

  // console.log(breakdata)

  // ----------------------------------------

  // sign contract function

   // interactiong with contract
   const signAgreement = async (e) => {

    e.preventDefault()

    let id = 1;
    const provider = new ethers.BrowserProvider(walletProvider);

    const signer = await provider.getSigner();

    const contract = await getContract(signer)

    try {

        const transaction = await contract.signAgreementPartyB(id)

        console.log("transaction: ", transaction);
        const receipt = await transaction.wait();

        // console.log("receipt: ", receipt);

        if (receipt.status) {
            return toast.success('successful')
        }

        toast.error(receipt)        
    } catch (error) {
        toast.error(error)
    }
}


  // ----------------------------------

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <main className=" py-6 px-10">
      <h2 className="text-[28px] lg:text-[48px] md:text-[48px] font-[700] my-6">
        Dashboard
      </h2>
      <section className="mb-16">
        <div className="bg-white rounded-2xl w-[100%] flex-col lg:flex-row md:flex-row  flex justify-between">
          <div className="p-6 flex flex-col items-center justify-center lg:border-r-2 md:border-r-2 border-b-2 lg:border-b-0 md:border-b-0  border-[#222BAE] w-[100%] lg:w-[32%] md:w-[32%] text-center">
            <h2 className="text-[28px] lg:text-[48px] md:text-[48px] font-[700]">
              {data && data.agreementCreateds.length}
            </h2>
            <p>Onchain Contracts</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center lg:border-r-2 md:border-r-2 border-b-2 border-[#222BAE] lg:border-b-0 md:border-b-0 w-[100%] lg:w-[32%] md:w-[32%] text-center">
            <h2 className="text-[28px] lg:text-[48px] md:text-[48px] font-[700]">
              20
            </h2>
            <p>Unsigned Contracts</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center w-[100%] lg:w-[32%] md:w-[32%] text-center">
            <h2 className="text-[28px] lg:text-[48px] md:text-[48px] font-[700]">
              {data && data.partyBSigneds.length}
            </h2>
            <p>Signed Contracts</p>
          </div>
        </div>
      </section>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            color: "#0D0042",
            fontWeight: "bold",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Contracts"
              {...a11yProps(0)}
              sx={{
                "&.Mui-selected": {
                  color: "white",
                  backgroundColor: "#222BAE",
                },
              }}
            />
            <Tab
              label="Unsigned"
              {...a11yProps(1)}
              sx={{
                "&.Mui-selected": {
                  color: "white",
                  backgroundColor: "#222BAE",
                },
              }}
            />
             <Tab
              label="signed"
              {...a11yProps(2)}
              sx={{
                "&.Mui-selected": {
                  color: "white",
                  backgroundColor: "#222BAE",
                },
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
        <section className="flex flex-wrap justify-between lg:flex-row md:flex-row flex-col">
          {data && data.agreementCreateds.length > 0 ? data.agreementCreateds.map((item) => ( 
              <div className="bg-white rounded-lg p-6 w-[100%] lg:w-[32%] md:w-[32%] mb-4 flex flex-col">
                  <div className="ml-auto"><FaCircleCheck className="text-[#222BAE] text-4xl"/></div>
                  <p>{item._agreement.slice(0, 200)}</p>
              </div>
          )) : <h4>You haven't created an agreement yet !</h4>}
          </section>

        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>          
            <section className="flex flex-wrap justify-between lg:flex-row md:flex-row flex-col">
        {data && data.agreementCreateds.length > 0 ? data.agreementCreateds.map((item, index) => (
            <div className="bg-white rounded-lg p-6 w-[100%] lg:w-[32%] md:w-[32%] mb-4 relative flex flex-wrap"  key={index}>
                <p>{item._agreement.slice(0, 200)}</p>
                <button onClick={signAgreement} type="button" className="text-white bg-[#222BAE] px-4 py-2 rounded-lg font-bold text-[16px] w-[100%] my-2 hover:bg-[#5a60b3] hover:text-white hover:font-bold mt-6 m">Sign Contract</button>
            </div>
         
        )) : <h4>No one has sent you an agreement yet!</h4>}
            </section>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
             <section className="flex flex-wrap justify-between lg:flex-row md:flex-row flex-col">
        {data && data.partyBSigneds.length > 0 ? data.agreementCreateds.map(() => (
             <div className="bg-white rounded-lg p-6 w-[100%] lg:w-[32%] md:w-[32%] mb-4 relative">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita sunt sequi tenetur temporibus inventore consectetur distinctio, hic aut labore!</p>
             </div>
          )) : <h4>No one has sent you an agreement yet!</h4>}
             </section>
        </CustomTabPanel>
      </Box>
    </main>
  );
};

export default Dashboard;
