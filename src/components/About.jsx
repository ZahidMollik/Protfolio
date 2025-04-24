import React from 'react'
import { FaRegFileCode,FaLink,FaCogs } from "react-icons/fa";

const About = () => {
  return (
    <div className='px-42 py-20 about font-Inter flex justify-center items-center gap-20 bg-[#F0F1F3]'>
      <div className='px-10'>
        <h1 className='text-4xl font-bold pb-2'>What I do?</h1>
        <p className='text-xs text-gray-500 pb-2'>As a blockchain developer, I specialize in building decentralized applications and smart contracts that leverage the power of distributed ledger technology. With expertise in multiple blockchain platforms including Ethereum, Solana, and Polkadot, I create secure, efficient, and innovative solutions for businesses looking to harness blockchain's transformative potential.</p>
        <button className='px-4 py-2 bg-cyan-400 text-white font-bold'>Say Hello!</button>
      </div>
      <div className='grid grid-cols-1 gap-5'>
        <div className='bg-white shadow-2xl p-6 rounded-md hover:border-l-4 hover:border-cyan-400'>
          <div className='w-12 h-11 bg-cyan-200 rounded-md p-2'><FaRegFileCode className='text-center mx-auto' size={26} /></div>
          <h1 className='text-lg py-2 rounded-md font-bold'>Smart Contract Development</h1>
          <p className='text-xs text-gray-600'>I design and implement secure, gas-optimized smart contracts using Solidity and Rust. My contracts undergo rigorous testing and security audits to ensure they're vulnerability-free and function exactly as intended. Whether you need ERC-20 tokens, NFT collections, or complex DeFi protocols, I build reliable blockchain logic that meets your business requirements.</p>
        </div>
        <div className='bg-white shadow-2xl p-6 rounded-md hover:border-l-4 hover:border-cyan-400'>
        <div className='w-12 h-10 bg-cyan-200 rounded-md p-2'>
          <FaCogs className='text-center mx-auto' size={26}/>
        </div>
          <h1 className='text-lg py-2 rounded-md font-bold'>DApp Development</h1>
          <p className='text-xs text-gray-600'>I create intuitive decentralized applications with seamless blockchain integration. My full-stack approach combines responsive front-end interfaces with robust back-end architecture that interacts efficiently with on-chain contracts. I implement wallet connections, transaction handling, and real-time blockchain updates for a smooth user experience.</p>
        </div>
        <div className='bg-white shadow-2xl p-6 rounded-md hover:border-l-4 hover:border-cyan-400'>
        <div className='w-12 h-12 bg-cyan-200 rounded-md p-2'>
          <FaLink className='text-center mx-auto' size={26} />
        </div>
          <h1 className='text-lg py-2 rounded-md font-bold'>Blockchain Integration</h1>
          <p className='text-xs text-gray-600'>I help businesses integrate blockchain solutions with existing systems and workflows. From payment processing and supply chain tracking to digital identity and governance systems, I bridge traditional architecture with blockchain technology, ensuring secure data handling and transparent transaction records.</p>
        </div>
      </div>
    </div>
  )
}

export default About