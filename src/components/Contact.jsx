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
    <div className='contact h-screen flex justify-center items-end mb-[-50px] '>
      <div className='p-20 bg-white shadow-xl w-[77%] h-full flex justify-between items-center rounded-md'>
        <div className='w-1/2'>
          <div className='pr-8'>
          <h1 className='text-4xl pb-3 font-bold'>Let's discuss your project</h1>
          <p className='text-[10px] text-gray-500'>I'm a Blockchain Developer focused on building secure, decentralized applications using smart contracts,
          DAOs, NFTs, and DeFi protocols. Let’s collaborate to bring your vision to the blockchain.</p>
          </div>
          <div className='flex flex-col gap-10 p-10 pb-20'>
            <div className='group flex items-center gap-2 hover:bg-[#ffffff] hover:shadow-2xl p-3 hover:rounded-md hover:scale-105'>
              <div className='w-10 h-10 bg-cyan-200 group-hover:bg-cyan-500 rounded-md pt-2'><FaMapMarkerAlt className='text-center mx-auto' size={22}/></div>
              <div>
                <p>Address:</p>
                <p>Dhaka,Bangladesh</p>
              </div>
            </div>
            <div className='group flex items-center gap-2 hover:bg-[#ffffff] hover:shadow-2xl  p-3 hover:rounded-md hover:scale-105'>
              <div className='w-10 h-10 bg-cyan-200 group-hover:bg-cyan-500 rounded-md pt-2'><FaEnvelope className='text-center mx-auto' size={20}/></div>
              <div>
                <p>My Email:</p>
                <p>zahidmollik@icloud.com</p>
              </div>
            </div>
            <div className='group flex items-center gap-2 hover:bg-[#ffffff] hover:shadow-2xl p-3 hover:rounded-md hover:scale-105'>
              <div className='w-10 h-10 bg-cyan-200 group-hover:bg-cyan-500 rounded-md pt-2'><FaPhoneAlt className='text-center mx-auto' size={20}/></div>
              <div>
                <p>Call Me Now:</p>
                <p>+88017*******</p>
              </div>
            </div>
          </div>
          <div className='flex gap-6 items-center'>
          <div className='w-10 h-10  hover:bg-cyan-500 rounded-md p-2'><FaFacebookF key={18}/></div>
          <div className='w-10 h-10  hover:bg-cyan-500 rounded-md p-2'><FaDribbble key={18}/></div>
          <div className='w-10 h-10  hover:bg-cyan-500 rounded-md p-2'><FaBehance key={18}/></div>
          <div className='w-10 h-10  hover:bg-cyan-500 rounded-md p-2'><FaInstagram key={18}/></div>
          <div className='w-10 h-10  hover:bg-cyan-500 rounded-md p-2'><FaLinkedinIn key={18}/></div>
          </div>
        </div>
        <div className="w-1/2">
          <p className='text-xl pb-5'>
          Have a blockchain project in mind? Fill out the form with your project details.
          </p>
          <form className="grid grid-cols-1 gap-6">
            <div className="col-span-2">
              <input placeholder='Name*'  type="text" id="name" name="name" required className="w-full border-b-2 p-2 focus:outline-none focus:border-violet-600" />
            </div>

            <div className="col-span-2">
              <input placeholder='Email*'  type="email" id="email" name="email" required className="w-full border-b-2 p-2 focus:outline-none focus:border-violet-600" />
            </div>

            <div className="col-span-2">
              <input placeholder='Location' type="text" id="location" name="location" className="w-full border-b-2 p-2 focus:outline-none focus:border-violet-600 " />
            </div>
            <div>
              <input placeholder='Budget*'  type="text" id="budget" name="budget" required className="w-full border-b-2 p-2 focus:outline-none focus:border-violet-600" />
            </div>
            <div >
              <input placeholder='Subject*'  type="text" id="subject" name="subject" required className="w-full border-b-2 p-2 focus:outline-none focus:border-violet-600" />
            </div>
            <div className="col-span-2">
              <textarea  placeholder='Message*' id="message" name="message" rows="4" required className="w-full border-b-2 p-2 focus:outline-none focus:border-violet-600"></textarea>
            </div>

            <div className="col-span-2">
              <button type="submit" className="w-30 bg-violet-600 text-white py-3 rounded-md hover:bg-violet-700 transition-all duration-300">
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
