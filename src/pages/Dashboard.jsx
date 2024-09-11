import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import PropTypes from 'prop-types';
import { FaCircleCheck } from "react-icons/fa6";

const Dashboard = () => {
  const [value, setValue] = useState(0);

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
          <div className="p-6 flex flex-col items-center justify-center lg:border-r-2 md:border-r-2 border-b-2 border-[#222BAE] w-[100%] lg:w-[32%] md:w-[32%] text-center">
            <h2 className="text-[28px] lg:text-[48px] md:text-[48px] font-[700]">
              20
            </h2>
            <p>Onchain Contracts</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center lg:border-r-2 md:border-r-2 border-b-2 border-[#222BAE] w-[100%] lg:w-[32%] md:w-[32%] text-center">
            <h2 className="text-[28px] lg:text-[48px] md:text-[48px] font-[700]">
              20
            </h2>
            <p>Unsigned Contracts</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center w-[100%] lg:w-[32%] md:w-[32%] text-center">
            <h2 className="text-[28px] lg:text-[48px] md:text-[48px] font-[700]">
              20
            </h2>
            <p>Created Contracts</p>
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
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <section className="flex flex-wrap justify-between lg:flex-row md:flex-row flex-col">
          <div className="bg-white rounded-lg p-6 w-[100%] lg:w-[32%] md:w-[32%] mb-4 relative">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita sunt sequi tenetur temporibus inventore consectetur distinctio, hic aut labore!</p>
              <div className="absolute top-5 right-5"><FaCircleCheck className="text-[#222BAE] text-4xl"/></div>
          </div>
          </section>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <section className="flex flex-wrap justify-between lg:flex-row md:flex-row flex-col">
          <div className="bg-white rounded-lg p-6 w-[100%] lg:w-[32%] md:w-[32%] mb-4 relative">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita sunt sequi tenetur temporibus inventore consectetur distinctio, hic aut labore!</p>
              <button className="text-white bg-[#222BAE] px-4 py-2 rounded-lg font-bold text-[16px] w-[100%] my-2 hover:bg-[#5a60b3] hover:text-white hover:font-bold mt-6 m">Sign Contract</button>
          </div>
          </section>
        </CustomTabPanel>
      </Box>
    </main>
  );
};

export default Dashboard;
