import React from 'react'
import {  FaPencilAlt, FaCogs, FaLaptopCode, FaLock, FaRocket, FaClock } from "react-icons/fa"

const Process = () => {
const steps = [
  {
    icon: <FaPencilAlt size={20} />, 
    title: 'Research & Planning',
    desc: 'Evaluate blockchain needs, select platform (Ethereum, Solana), design architecture, define consensus and specs.'
  },
  {
    icon: <FaCogs size={20} />, 
    title: 'Environment Setup',
    desc: 'Configure development tools, set up local nodes, create test wallets, install frameworks like Truffle, Hardhat or Foundry.'
  },
  {
    icon: <FaLaptopCode size={20} />, 
    title: 'Contract Development',
    desc: 'Write smart contracts in Solidity/Rust, implement business logic, develop token standards and interfaces.'
  },
  {
    icon: <FaLock size={20} />, 
    title: 'Testing & Security',
    desc: 'Create test suites, conduct security audits, perform static analysis, simulate attacks, optimize for gas efficiency.'
  },
  {
    icon: <FaRocket size={20} />, 
    title: 'Integration & Deployment',
    desc: 'Build frontend/API connections, implement wallet integration, deploy to testnet, verify code, launch on mainnet.'
  },
  {
    icon: <FaClock size={20} />, 
    title: 'Maintenance & Evolution',
    desc: 'Monitor contract activity, implement upgrades, stay current with security updates, contribute to the ecosystem.'
  }
];
  return (
    <div className=' p-10 w-full h-screen bg-[#F0F1F3] flex items-center  justify-center font-Inter gap-10'>
      <div className='w-[40%] space-y-6'>
        <h1 className=' text-3xl font-bold'>Work Process</h1>
        <p className='text-gray-500'>The work process is structured to ensure clarity, quality, and efficiency at every stage. We begin with thorough research to understand your goals and market needs. Next, we analyze data and challenges to define the best approach. In the design phase, we craft intuitive and engaging experiences tailored to your brand. Finally, we launch with precision, ensuring your solution is robust, user-ready, and scalable. This streamlined process ensures we deliver impactful digital products that meet both user expectations and business goals.</p>
      </div>
      <div className="grid grid-cols-2  gap-6 p-6 mt-20">
      {steps.map((step, index) => (
        <div key={index} className="group bg-white shadow-md rounded-2xl p-6 w-56 h-50 space-y-2 hover:scale-105">
          <div className="bg-cyan-200 w-8 h-8 flex items-center justify-center rounded-lg text-black group-hover:bg-cyan-500 group-hover:text-white">
            {step.icon}
          </div>
          <h3 className="text-[12px] font-bold">{index + 1}. {step.title}</h3>
          <p className="text-gray-500 text-xs">{step.desc}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Process