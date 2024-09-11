import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row md:flex-row justify-between items-start border-t-2 border-[#dadada] w-[90%] mx-auto py-12">
        <div className="w-[100%] lg:w-[30%] md:w-[30%]">
          <img src={logo} alt="" className='w-[180px] mb-8' />
          <p>
            Revolutionizing Contracts with Clarity, Innovation, Blockchain and
            AI Power.
          </p>
        </div>
        <div className="w-[100%] lg:w-[15%] md:w-[15%] mb-4">
          <p className="font-[700] mb-4">Follow Us</p>
          <div className="flex justify-between text-3xl text-[#222BAE]">
            <FaLinkedin />
            <AiFillInstagram />
            <FaFacebookSquare />
            <FaSquareXTwitter />
          </div>
          </div>
          <div className="w-[100%] lg:w-[15%] md:w-[15%] lg:text-right md:text-right text-center">
            <p className="mb-4">Policy</p>
            <p className="mb-4">View Contracts</p>
            <p className="mb-4">Terms & Conditions</p>
          </div>
          <div className="w-[100%] lg:w-[15%] md:w-[15%] lg:text-right md:text-right text-center">
            <p className="mb-4">Home</p>
            <p className="mb-4">About</p>
            <p className="mb-4">Getting Started</p>
          </div>
        </div>
      <p className="text-center">
        &copy; All Rights Reserved - TrustLinker 2024
      </p>
    </footer>
  );
};

export default Footer;
