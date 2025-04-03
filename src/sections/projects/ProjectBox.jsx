import React from 'react'
import { FaGithub, FaGlobe } from "react-icons/fa6";

function ProjectBox({ title, desc, image, github, demo }) {
  return (
    <div className="w-full h-auto px-12 py-10 rounded-lg shadow-shadowOne flex flex-col
      bg-gradient-to-r from-bodyBg to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900
      transition-colors duration-1000">
      <div>
        {/* image */}
        <div className='w-full h-[200px] rounded-lg overflow-hidden outline outline-[1px] outline-gray-700 outline-offset-2 group'>
          <img src={image} alt={title}
            className='object-cover cursor-pointer group-hover:scale-110 transition-transform duration-300' />
        </div>
        {/* text */}
        <div>
          <div className='flex items-center justify-between gap-10 py-4'>
            <h3 className='text-base font-normal text-primaryColor uppercase'>{title}</h3>
            <div className='flex items-center justify-center gap-3'>
              <a href={github} target='_blank'
                className='text-lightColor text-lg w-10 h-10 rounded-full bg-black flex items-center justify-center
                  hover:text-primaryColor transition-colors duration-500'>
                <FaGithub />
              </a>
              <a href={demo} target='_blank'
                className='text-lightColor text-lg w-10 h-10 rounded-full bg-black flex items-center justify-center
                  hover:text-primaryColor transition-colors duration-500'>
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className='text-[16px] font-bodyFont text-lightColor'>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox