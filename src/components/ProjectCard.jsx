import React from 'react';

const ProjectCard = ({ data }) => {
  const { title, desc, tag, image } = data;
  console.log(title, desc, tag, image);
  

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-shadow duration-300 text-left">
      <img src={image} alt={title} className="w-full h-50 object-cover" />
      <div className="p-5">
        <p className="text-[10px] text-gray-500 font-semibold  mb-1">{tag}</p>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500 my-2">{desc}</p>
        <button className="mt-3 text-sm font-semibold text-cyan-500 border border-cyan-600 px-4 py-1 rounded hover:bg-cyan-600 hover:text-white transition">
          Case Study →
        </button>
      </div>
    </div>
    
  );
};

export default ProjectCard;
