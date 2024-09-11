import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImg from '../assets/image.svg'
import bgImg2 from '../assets/image2.svg'
import bgImg3 from '../assets/image3.svg'
import bgImg4 from '../assets/image4.svg'
import bgImg5 from '../assets/image5.svg'


const Home = () => {
  return (
    <div>
      <Header />
      <main className=" w-[90%] mx-auto">
        <section className="flex justify-between my-16 flex-col lg:flex-row md:flex-row">
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
        <section className="flex justify-between flex-col lg:flex-row md:flex-row mb-12">
          <div className="w-[100%] lg:w-[70%] md:w-[70%]">
            <img src={bgImg} alt="" className="w-[100%]"/>
            <div className="flex justify-between mt-6 flex-col lg:flex-row md:flex-row">
            <div className="bg-[#222BAE] text-white rounded-2xl p-8 w-[100%] lg:w-[70%] md:w-[70%] mb-4">
                <p>TrustLinker: is a decentralized on-chain contract signing platform that ensures secure, transparent, and immutable agreements. By leveraging blockchain technology and AI-powered contract drafting, TrustLinker simplifies the creation, signing, and management of contracts, providing a trusted environment for individuals and businesses alike.</p>
            </div>
            <div className="w-[100%] lg:w-[28%] md:w-[28%] border border-[#222BAE] rounded-2xl p-8 flex justify-center items-center flex-col text-center mb-4">
              <h2 className="text-[28px] lg:text-[58px] md:text-[58px] font-[700]">80%</h2>
              <p className="font-[500]">Human errors fixed with smart contracts and AI</p>
            </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[27%] md:w-[27%]">
          <img src={bgImg2} alt="" className="w-[100%]" />
          </div>
        </section>
        <section className="flex justify-between my-20 flex-col lg:flex-row md:flex-row">
            <div className="w-[100%] lg:w-[40%] md:w-[40%] self-center">
                <h2 className="text-[24px] lg:text-[48px] md:text-[48px] font-[700] mb-8">How it Works</h2>
                <ul>
                    <li className="mb-4 list-disc"><strong>Connect Your Wallet</strong>: Securely link your wallet to verify your identity.</li>
                    <li className="mb-4 list-disc"><strong>Create Your Contract</strong>: Leverage AI to draft your contract directly on the platform or upload an existing one. The AI tool helps you customize the contract with signer details, clauses, and other key information tailored to your needs.</li>
                    <li className="mb-4 list-disc"><strong>Invite Signers</strong>: Easily invite others to sign the contract by sharing a secure link. Each signer verifies their identity through their blockchain wallet for transparent, tamper-proof authentication.</li>
                    <li className="mb-4 list-disc"><strong>Sign and Record</strong>: Once all parties sign, the contract is securely recorded on the blockchain, ensuring it’s immutable and accessible at any time. This can also be minted as an NFT.</li>
                </ul>
            </div>
            <div className="w-[100%] lg:w-[55%] md:w-[55%] flex justify-between">
                <img src={bgImg3} alt="" className="w-[100%] lg:w-[50%] md:w-[50%]" />
                <div className="w-[100%] lg:w-[48%] md:w-[48%] flex flex-col">
                    <img src={bgImg4} alt="" className="mb-4"/>
                    <img src={bgImg5} alt="" className="mb-4" />
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
