import { CgHomeAlt } from "react-icons/cg";
import { TbSettings } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import { IoIosCreate } from "react-icons/io";
import { useDisconnect } from "@web3modal/ethers/react";

const Sidebar = () =>  {
  const { disconnect } = useDisconnect()

  const activeStyle = {
    borderLeft: '2px solid #222BAE',
    borderRight: '2px solid #222BAE',
    width: '100%',
    padding: '20px'
  };

  return (
    <div className='bg-white w-[20%] text-[rgb(15,22,15)] p-8 py-12 h-[100vh] hidden lg:flex md:flex flex-col'>
      <img src={logo} alt='logo'className="mb-20" />
      <NavLink to="/dashboard" className="text-[18px] flex items-center py-4 mb-4 px-4" style={({isActive}) => isActive ? activeStyle : null } end><CgHomeAlt className="mr-4" />Dashboard</NavLink>
      <NavLink to="create-event" className="text-[18px] flex items-center py-4 mb-4 px-4" style={({isActive}) => isActive ? activeStyle : null } end><IoIosCreate className="mr-4" />Create-contract</NavLink>
      <button className="text-[18px] flex items-center py-4 mb-4 px-6 mt-auto" onClick={() => disconnect()}><TbSettings className="mr-4"  /> Log out</button>
    </div>
  );
}

export default Sidebar;