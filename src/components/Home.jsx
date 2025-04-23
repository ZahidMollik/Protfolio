import React from 'react'
import Process from './Process'
import Project from './Project'
import WorkTogether from './WorkTogether'

const Home = () => {
  return (
    <>
    <div className='w-screen h-screen flex justify-evenly items-center font-Inter'>
      <div className='flex flex-col gap-36'>
        <div className='w-[390px]'>
          <h1 className='text-3xl font-semibold pb-3'>Hello, I'm</h1>
          <h1 className='text-3xl font-semibold pb-3'>Md. Zahidul Islam Mollik</h1>
          <span className='text-xs text-gray-500'>I'm a Blockchain Developer based in Dhaka, Bangladesh, focused on building user-centric solutions across smart contracts, NFTs, and
          DeFi platforms.</span>
          <div className='mt-3 px-5 py-3 w-30 bg-cyan-500 rounded-md text-white font-semibold hover:bg-teal-500'>Say Hello!</div>
        </div>
        <div className='flex gap-1'>
          <div className='px-5 py-3 w-38 bg-cyan-100 text-center'>
            <h2 className='font-bold text-lg'>1 Y.</h2>
            <span className='text-xs text-gray-400'>Experience</span>
          </div>
          <div className='px-5 py-3 w-38 bg-cyan-100  text-center'>
            <h2 className='font-bold text-lg'>25+</h2>
            <span className='text-xs text-gray-400'>Project Completed</span>
          </div>
          <div className='px-5 py-3 w-38 bg-cyan-100  text-center'>
            <h2 className='font-bold text-lg'>19</h2>
            <span className='text-xs text-gray-400'>Happy Client</span>
          </div>
        </div>
      </div>
      <div >
        <img className='w-[350px] h-[500px] rounded-2xl object-cover' src="src/assets/images/zahid.jpg" alt="" />
      </div>
    </div>
    <Process/>
    <Project/>
    <WorkTogether/>
    </>
  )
}

export default Home