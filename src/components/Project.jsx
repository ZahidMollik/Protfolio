import React from 'react'
import ProjectCard from './ProjectCard.jsx'

const Project = () => {
  const projects = [
    {
      title: "ChainFund",
      desc: "A decentralized crowdfunding platform powered by smart contracts.",
      tag: "BLOCKCHAIN PROJECT",
      image: "src/assets/images/crowd.png",
    },
    {
      title: "MetaLease",
      desc: "Blockchain-based solution for secure digital leasing and asset rentals.",
      tag: "BLOCKCHAIN PROJECT",
      image: "src/assets/images/ethereum.png",
    },
    {
      title: "BlockCerts",
      desc: "Tamper-proof certificate issuance and verification on the blockchain.",
      tag: "BLOCKCHAIN PROJECT",
      image: "src/assets/images/blockcert.png",
    },
    {
      title: "DeTrust Vault",
      desc: "A non-custodial DeFi wallet with built-in trustless escrow services.",
      tag: "BLOCKCHAIN PROJECT",
      image: "src/assets/images/vault.png",
    },
    {
      title: "NFTicket",
      desc: "NFT-powered event ticketing system to prevent fraud and scalping.",
      tag: "BLOCKCHAIN PROJECT",
      image: "src/assets/images/nft.png",
    },
    {
      title: "DAOgenda",
      desc: "A governance platform enabling transparent DAO decision-making and voting.",
      tag: "BLOCKCHAIN PROJECT",
      image: "src/assets/images/Dao.png",
    },
  ];
  
  return (
    <div className='px-56 py-28 text-center'>
      <div className='font-Inter mb-10'>
        <h1 className='text-4xl font-bold'>Projects</h1>
        <p className="text-sm text-gray-500 mt-5">
          Explore a collection of real-world blockchain and Web3 projects that demonstrate my experience in decentralized application development, smart contract integration, and secure digital infrastructure. Each case study reflects a focus on innovation, scalability, and user-centric solutions.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-5 '>
        {
          projects.map((project,index)=>{
            return <ProjectCard key={index} data={project}/>;
          })
        }
      </div>
      <button className="mt-12 px-4 py-3 font-bold bg-cyan-500 text-white rounded-lg hover:bg-cyan-700 transition">
        More Project
      </button>
    </div>
  )
}

export default Project