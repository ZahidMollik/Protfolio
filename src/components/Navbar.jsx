import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

  return (
    <nav className='w-full h-20 flex justify-around items-center shadow  bg-gray-50 nav'>
      <div className='logo font-Inter font-extrabold text-2xl'>
        <Link
        to="/" 
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={500} 
        className='flex items-center'
        >
          <h1 className='px-3.5 py-1.5 rounded-full bg-cyan-500 text-white hover:bg-teal-500'>Z</h1>
          <h1 className='px-2'>Zahid</h1>
        </Link>
      </div>
      <ul className='font-Inter flex gap-10  font-semibold items-center '>
        <Link
         to="home" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
         className='hover:text-cyan-500'>
          <li>Home</li>
        </Link>
        <Link
          to="about"
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500} 
        className='hover:text-cyan-500'>
          <li>About</li>
        </Link>
        <Link
         className='hover:text-cyan-500'
          to="process"
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500} 
        >
          <li>Process</li>
        </Link>
        <Link 
         to="project" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
         className='hover:text-cyan-500'>
          <li>Project</li>
        </Link>
        <Link  
          to="contact"
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500} 
        >
          <li className='px-5 py-2 bg-cyan-500 rounded-md text-white hover:bg-teal-500'>Contact</li>
        </Link>
      </ul>

    </nav>
  );
};

export default Navbar

