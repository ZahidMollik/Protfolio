import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import image1 from '../assets/images/crowd.png'
import image2 from '../assets/images/ethereum.png'
import image3 from '../assets/images/blockcert.png'
import image4 from '../assets/images/vault.png'
import image5 from '../assets/images/nft.png'
import image6 from '../assets/images/Dao.png'
const Project = () => {
  const projects = [
    {
      title: "ChainFund",
      desc: "A decentralized crowdfunding platform powered by smart contracts.",
      tag: "BLOCKCHAIN PROJECT",
      image: image1,
    },
    {
      title: "MetaLease",
      desc: "Blockchain-based solution for secure digital leasing and asset rentals.",
      tag: "BLOCKCHAIN PROJECT",
      image: image2,
    },
    {
      title: "BlockCerts",
      desc: "Tamper-proof certificate issuance and verification on the blockchain.",
      tag: "BLOCKCHAIN PROJECT",
      image: image3,
    },
    {
      title: "DeTrust Vault",
      desc: "A non-custodial DeFi wallet with built-in trustless escrow services.",
      tag: "BLOCKCHAIN PROJECT",
      image: image4,
    },
    {
      title: "NFTicket",
      desc: "NFT-powered event ticketing system to prevent fraud and scalping.",
      tag: "BLOCKCHAIN PROJECT",
      image: image5,
    },
    {
      title: "DAOgenda",
      desc: "A governance platform enabling transparent DAO decision-making and voting.",
      tag: "BLOCKCHAIN PROJECT",
      image: image6,
    },
  ];
  
  return (
    <div className='p-3 md:p-10 lg:px-56 lg:py-28 text-center project'>
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