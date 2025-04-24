import React from 'react'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaDribbble,
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
const Contact = () => {
  return (
    <div className='contact h-full flex justify-center items-end mb-[-50px] '>
      <div className='p-12 md:p-20 bg-white shadow-xl w-[77%] h-full md:flex md:justify-between md:items-center rounded-md'>
        <div className='md:w-1/2'>
          <div className='pr-8'>
          <h1 className='md:text-lg lg:text-4xl pb-3 font-bold'>Let's discuss your project</h1>
          <p className='text-[10px] md:text-xs text-gray-500'>I'm a Blockchain Developer focused on building secure, decentralized applications using smart contracts,
          DAOs, NFTs, and DeFi protocols. Let’s collaborate to bring your vision to the blockchain.</p>
          </div>
          <div className='flex flex-wrap md:flex-col gap-2 py-3 pb-5 md:gap-5 lg:p-10 md:pb-20'>
            <div className='group flex items-center gap-2 hover:bg-[#ffffff] hover:shadow-2xl md:p-3 hover:rounded-md hover:scale-105'>
              <div className='w-8 h-8 md:w-10 md:h-10 bg-cyan-200 group-hover:bg-cyan-500 rounded-md pt-2'><FaMapMarkerAlt className='text-center mx-auto text-xs md:text-lg'/></div>
              <div className='text-[10px] md:text-sm'>
                <p>Address:</p>
                <p>Dhaka,Bangladesh</p>
              </div>
            </div>
            <div className='group flex items-center gap-2 hover:bg-[#ffffff] hover:shadow-2xl  md:p-3 hover:rounded-md hover:scale-105'>
              <div className='w-8 h-8 md:w-10 md:h-10 bg-cyan-200 group-hover:bg-cyan-500 rounded-md pt-2'><FaEnvelope className='text-center mx-auto text-xs md:text-xl' /></div>
              <div className='text-[10px] md:md:text-sm'>
                <p>My Email:</p>
                <p>zahidmollik@icloud.com</p>
              </div>
            </div>
            <div className='group flex items-center gap-2 hover:bg-[#ffffff] hover:shadow-2xl md:p-3 hover:rounded-md hover:scale-105'>
              <div className='w-8 h-8 md:w-10 md:h-10 bg-cyan-200 group-hover:bg-cyan-500 rounded-md pt-2'><FaPhoneAlt className='text-center mx-auto text-xs md:text-lg' /></div>
              <div className='text-[10px] md:md:text-sm'>
                <p>Call Me Now:</p>
                <p>+88017*******</p>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap gap-6 items-center'>
          <div className='w-10 h-10  hover:bg-cyan-500 rounded-md p-3'><FaFacebookF key={18}/></div>
          <div className='w-10 h-10  hover:bg-cyan-500 rounded-md p-3'><FaDribbble key={18}/></div>
          <div className='w-10 h-10  hover:bg-cyan-500 rounded-md p-3'><FaBehance key={18}/></div>
          <div className='w-10 h-10  hover:bg-cyan-500 rounded-md p-3'><FaInstagram key={18}/></div>
          <div className='w-10 h-10  hover:bg-cyan-500 rounded-md p-3'><FaLinkedinIn key={18}/></div>
          </div>
        </div>
        <div className="md:w-1/2">
          <p className='text-sm md:text-xl pb-5 text-gray-500'>
          Have a blockchain project in mind? Fill out the form with your project details.
          </p>
          <form >
            <input placeholder='Name*'  type="text" id="name" name="name" required className="w-full border-b-2 p-2 focus:outline-none focus:border-cyan-600" />
            <input placeholder='Email*'  type="email" id="email" name="email" required className="w-full border-b-2 p-2 focus:outline-none focus:border-cyan-600" />
            <input placeholder='Location' type="text" id="location" name="location" className="w-full border-b-2 p-2 focus:outline-none focus:border-cyan-600 " />
            <div className='flex gap-8'>
              <input placeholder='Budget*'  type="text" id="budget" name="budget" required className="w-full border-b-2 p-2 focus:outline-none focus:border-cyan-600 inline-block" />
              <input placeholder='Subject*'  type="text" id="subject" name="subject" required className="w-full border-b-2 p-2 focus:outline-none focus:border-cyan-600" />
            </div>
              <textarea  placeholder='Message*' id="message" name="message" rows="2" required className="w-full border-b-2 p-2 focus:outline-none focus:border-cyan-600"></textarea>
            <div className='mt-5'>
              <button type="submit" className="w-20 md:w-30 bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-700 transition-all duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
