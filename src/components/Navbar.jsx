import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {


  return (
    <nav className='w-full h-20 flex justify-around items-center shadow'>
      <div className='logo font-sans font-extrabold text-2xl'>
        <Link to='/' className='flex items-center'>
          <h1 className='px-3.5 py-1.5 rounded-full bg-cyan-500 text-white hover:bg-teal-500'>Z</h1>
          <h1 >ahid</h1>
        </Link>
      </div>
      <ul className='font-sans flex gap-10  font-semibold items-center '>
        <Link className='hover:text-cyan-500' to="/">
          <li>Home</li>
        </Link>
        <Link className='hover:text-cyan-500' to="/about">
          <li>About</li>
        </Link>
        <Link className='hover:text-cyan-500' to="/process">
          <li>Process</li>
        </Link>
        <Link className='hover:text-cyan-500'  to="/project">
          <li>Project</li>
        </Link>
        <Link className='hover:text-cyan-500' to="/services">
          <li>Services</li>
        </Link>
        <Link  to="/contact">
          <li className='px-5 py-2 bg-cyan-500 rounded-md text-white hover:bg-teal-500'>Contact</li>
        </Link>
      </ul>

    </nav>
  );
};

export default Navbar

