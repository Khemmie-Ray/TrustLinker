import React, { useState } from "react";
import CreateContract from "../components/CreateContract";
import { Box, Tabs, Tab } from "@mui/material";
import PropTypes from 'prop-types';

const Dashboard = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDay(newValue);
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
      <section className="flex justify-between items-center mb-16">
        <div className="bg-white rounded-2xl w-[100%] lg:w-[65%] md:w-[65%] flex justify-between">
          <div className="p-6 flex flex-col items-center justify-center border-r-2 border-[#222BAE] w-[100%] lg:w-[32%] md:w-[32%] text-center">
            <h2 className="text-[28px] lg:text-[48px] md:text-[48px] font-[700]">
              20
            </h2>
            <p>Onchain Contracts</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center border-r-2 border-[#222BAE] w-[100%] lg:w-[32%] md:w-[32%] text-center">
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
        <div className="w-[100%] lg:w-[32%] md:w-[32%]">
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
          <div >
              NFT
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div>
            Yet to sign
          </div>
        </CustomTabPanel>
      </Box>
    </main>
  );
};

export default Dashboard;
