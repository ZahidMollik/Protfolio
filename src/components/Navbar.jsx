import React,{useState} from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav className='w-full h-20 flex flex-row p-4 md:p-0 gap-2 md:justify-around  items-center justify-start shadow  bg-gray-50 nav'>
      <div className="md:hidden ">
        <button onClick={toggleMenu}>
          {isOpen ? <RxCross2 size={24} /> : <FaBars size={24} />}
        </button>
      </div>
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
      <ul className='hidden font-Inter md:flex gap-10  font-semibold items-center '>
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
      

      {isOpen && (
        <ul className="absolute top-20 left-0 w-30 bg-gray-50 flex flex-col items-center gap-6 py-6 font-Inter font-semibold md:hidden shadow">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="hover:text-cyan-500 cursor-pointer">
            <li>Home</li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="hover:text-cyan-500 cursor-pointer">
            <li>About</li>
          </Link>
          <Link to="process" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="hover:text-cyan-500 cursor-pointer">
            <li>Process</li>
          </Link>
          <Link to="project" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="hover:text-cyan-500 cursor-pointer">
            <li>Project</li>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="cursor-pointer">
            <li className="px-5 py-2 bg-cyan-500 rounded-md text-white hover:bg-teal-500">Contact</li>
          </Link>
        </ul>
      )}

    </nav>
  );
};

export default Navbar

