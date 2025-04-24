import React from 'react'
import {Link} from 'react-scroll'
import zahid from '../assets/images/zahid.jpg'
const Home = () => {
  return (
    <div className='w-screen h-full p-15 sm:p-0 sm:h-screen  flex flex-col-reverse items-center justify-center gap-5 md:flex-row md:justify-evenly md:items-center font-Inter home'>
      <div className='flex flex-col items-center gap-10 md:gap-36'>
        <div className='w-[40%] md:w-[390px]'>
          <h1 className='text-xl md:text-3xl font-semibold pb-3'>Hello, I'm</h1>
          <h1 className=' text-xl md:text-3xl font-semibold pb-3'>Md. Zahidul Islam Mollik</h1>
          <span className='text-xs text-gray-500'>I'm a Blockchain Developer based in Dhaka, Bangladesh, focused on building user-centric solutions across smart contracts, NFTs, and
          DeFi platforms.</span>
          <Link to="contact"
           spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
          >
            <div className='mt-3 px-5 py-3 w-30 bg-cyan-500 rounded-md text-white font-semibold hover:bg-teal-500'>Say Hello!</div>
          </Link>
        </div>
        <div className='flex flex-wrap justify-center md:flex-nowrap gap-1'>
          <div className='px-5 py-3 w-38 bg-cyan-100 text-center rounded-md'>
            <h2 className='font-bold text-lg'>1 Y.</h2>
            <span className='text-xs text-gray-400'>Experience</span>
          </div>
          <div className='px-5 py-3 w-38 bg-cyan-100  text-center rounded-md'>
            <h2 className='font-bold text-lg'>25+</h2>
            <span className='text-xs text-gray-400'>Project Completed</span>
          </div>
          <div className='px-5 py-3 w-38 bg-cyan-100  text-center rounded-md'>
            <h2 className='font-bold text-lg'>19</h2>
            <span className='text-xs text-gray-400'>Happy Client</span>
          </div>
        </div>
      </div>
      <div >
        <img className='w-[150px] h-[200px] md:w-[350px] md:h-[500px] rounded-2xl object-cover' src={zahid} alt="" />
      </div>
    </div>
  )
}

export default Home