import Sidebar from "../components/Sidebar"
import { Outlet, Navigate  } from "react-router-dom"
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import MobileSidebar from "../components/MobileSidebar";

const DashboardLayout = () => {
  const { isConnected } = useWeb3ModalAccount();

  return !isConnected ? (
    <Navigate to={"/"} />
  ) : (
    <div className="flex justify-between bg-[#EAEBFC]">
        <Sidebar />
        <div className="w-[100%] lg:w-[80%] md:w-[80%] flex flex-col h-[100vh] overflow-x-scroll">
        <MobileSidebar />
            <div className="ml-auto p-6 hidden lg:block md:block">
            <w3m-button />
            </div>
        <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout