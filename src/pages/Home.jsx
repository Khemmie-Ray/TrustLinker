import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImg from '../assets/image.svg'
import bgImg2 from '../assets/image2.svg'

const Home = () => {
  return (
    <div>
      <Header />
      <main className=" w-[90%] mx-auto">
        <section className="flex justify-between my-16">
          <h1 className="w-[100%] lg:w-[60%] md:w-[60%] text-[28px] lg:text-[58px] md:text-[58px] font-[700]">
            <span className="text-[#222BAE]">TrustLinker</span> – Decentralized
            On-Chain Contract Signing.
          </h1>
          <div className="w-[100%] lg:w-[35%] md:w-[35%]">
            <p className="text-[20px] lg:text-[24px] md:text-[24px] mb-8">
              Create, sign, and manage contracts with absolute security and
              transparency using blockchain technology.
            </p>
            <button className="bg-[#222BAE] py-4 px-8 rounded-lg text-white w-[100%] lg:w-[50%] md:w-[50%]">
              Get Started
            </button>
          </div>
        </section>
        <section className="flex justify-between">
          <div className="w-[100%] lg:w-[70%] md:w-[70%]">
            <img src={bgImg} alt="" className="w-[100%]"/>
            <div className="flex justify-between mt-6">
            <div className="bg-[#222BAE] text-white rounded-2xl p-8 w-[100%] lg:w-[70%] md:w-[70%]">
                <p>TrustLinker: is a decentralized on-chain contract signing platform that ensures secure, transparent, and immutable agreements. By leveraging blockchain technology and AI-powered contract drafting, TrustLinker simplifies the creation, signing, and management of contracts, providing a trusted environment for individuals and businesses alike.</p>
            </div>
            <div className="w-[100%] lg:w-[28%] md:w-[28%] border border-[#222BAE] rounded-2xl p-8 flex justify-center items-center flex-col text-center">
              <h2 className="text-[28px] lg:text-[58px] md:text-[58px] font-[700]">80%</h2>
              <p className="font-[500]">Human errors fixed with smart contracts and AI</p>
            </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[27%] md:w-[27%]">
          <img src={bgImg2} alt="" className="w-[100%]" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
