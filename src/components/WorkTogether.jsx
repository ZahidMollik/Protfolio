import React from "react";
import {Link} from 'react-scroll'
const WorkTogether = () => {
  return (
    <div className="bg-slate-900 px-20 py-16 md:px-58 md:py-20">
      <div className="font-Inter text-white text-center">
        <h1 className=" text-2xl md:text-4xl font-bold">Do you have project idea?</h1>
        <h1 className="text-2xl md:text-[38px] font-bold pb-4">Let's discuss your project!</h1>
        <p className="text-xs text-gray-400 pb-4">
          Looking to build innovative blockchain solutions? With expertise in
          smart contracts, DeFi, NFTs, and cross-chain applications, I can help
          transform your blockchain vision into reality. Whether you're
          launching a token, creating a decentralized platform, or integrating
          blockchain into existing systems, let's build something exceptional
          together.
        </p>
        <Link to="contact"
           spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
        >
        <button className="px-4 py-2 bg-cyan-500 font-bold rounded-md hover:bg-cyan-700">Let's work Together →</button>
        </Link>
      </div>
    </div>
  );
};

export default WorkTogether;
