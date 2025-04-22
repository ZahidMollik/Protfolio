import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {


  return (
    <nav className='w-full h-20 flex justify-around items-center shadow'>
      <div className='logo font-sans font-extrabold text-2xl'>
        <Link to='/' className='flex items-center'>
          <h1 className=' w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center'>Z</h1>
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
          <li className='p-5 w-14'>Project</li>
        </Link>
        <Link className='hover:text-cyan-500' to="/services">
          <li className='p-5 w-14'>Services</li>
        </Link>
        <Link  to="/contact">
          <li className='w-20 h-8 bg-teal-500 text-center rounded-md text-white flex items-center justify-center hover:bg-cyan-500'>Contact</li>
        </Link>
      </ul>

    </nav>
  );
};

export default Navbar

