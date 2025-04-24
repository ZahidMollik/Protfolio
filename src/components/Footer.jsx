import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {


  return (
    <footer className=' px-10 md:px-20 w-full h-50 flex flex-col items-center md:flex-row md:justify-evenly  md:items-center pt-10 bg-slate-800'>
      <div className='logo font-Inter font-extrabold text-lg md:text-2xl  mt-3 md:mt-0 '>
        <Link 
         to="nav" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
         className='flex items-center justify-center'
         >
          <h1 className='px-2 pt-0.5 md:px-3.5 md:py-1.5 rounded-full bg-cyan-500 text-white hover:bg-teal-500'>Z</h1>
          <h1 className='px-2 text-gray-200'>Zahid</h1>
        </Link>
      </div>
      <ul className='font-Inter text-xs flex flex-col items-center md:flex md:flex-row md:gap-5  font-light md:items-center text-gray-400'>
        <Link className='hover:text-cyan-500'
         to="home" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
        >
          <li>Home</li>
        </Link>
        <Link className='hover:text-cyan-500'
         to="about" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
        >
          <li>About</li>
        </Link>
        <Link className='hover:text-cyan-500'
         to="process" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
        >
          <li>Process</li>
        </Link>
        <Link className='hover:text-cyan-500'
         to="project" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
        >
          <li>Project</li>
        </Link>
        <Link 
         to="contact" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
        >
          <li className='hover:text-cyan-500'>Contact</li>
        </Link>
      </ul>
      <div>
        <span className='text-gray-400 text-xs md:text-lg'>Copyright © {new Date().getFullYear()}. All Rights Reserved.  </span>
      </div>
    </footer>
  );
};

export default Footer