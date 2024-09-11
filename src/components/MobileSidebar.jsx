import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { CgHomeAlt } from "react-icons/cg";
import { TbSettings } from "react-icons/tb";
import { IoIosCreate } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useDisconnect } from "@web3modal/ethers/react";
import logo from '../assets/logo.svg'

const MobileSidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const { disconnect } = useDisconnect()

  const activeStyle = {
    borderLeft: '2px solid #222BAE',
    borderRight: '2px solid #222BAE',
    width: '100%',
    padding: '20px'
  };

  return (
    <header className="lg:hidden md:hidden flex justify-between my-4 relative w-[90%] mx-auto border-b-2 border-[#dadada]">
      <img src={logo} alt="" className="w-[150px] my-4" />
      <Hamburger toggled={isOpen} toggle={setOpen} color="#427142" direction="right"/>
      {isOpen && (
          <div className='bg-white w-[100%] text-[rgb(15,22,15)] p-8 py-12 h-[100vh] flex flex-col absolute top-20 left-0 z-50'>
            <w3m-button />
          <NavLink to="/dashboard" className="text-[18px] flex items-center py-4 mb-4 px-4" style={({isActive}) => isActive ? activeStyle : null } end><CgHomeAlt className="mr-4" />Dashboard</NavLink>
          <NavLink to="create-event" className="text-[18px] flex items-center py-4 mb-4 px-4" style={({isActive}) => isActive ? activeStyle : null } end><IoIosCreate className="mr-4" />Create-contract</NavLink>
          <button className="text-[18px] flex items-center py-4 mb-4 px-6 mt-auto" onClick={() => disconnect()}><TbSettings className="mr-4"  /> Log out</button>
        </div>
      )}
    </header>
  );
};

export default MobileSidebar;
