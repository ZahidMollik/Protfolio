import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {


  return (
    <footer className='px-20 w-full h-50 flex justify-evenly  items-center pt-10 bg-slate-800'>
      <div className='logo font-Inter font-extrabold text-2xl'>
        <Link 
         to="nav" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
         className='flex items-center'
         >
          <h1 className='px-3.5 py-1.5 rounded-full bg-cyan-500 text-white hover:bg-teal-500'>Z</h1>
          <h1 className='px-2 text-gray-200'>Zahid</h1>
        </Link>
      </div>
      <ul className='font-Inter flex gap-5  font-light items-center text-gray-400'>
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
        <span className='text-gray-400'>Copyright © {new Date().getFullYear()}. All Rights Reserved.  </span>
      </div>
    </footer>
  );
};

export default Footer