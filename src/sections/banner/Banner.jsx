import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedinIn, FaFacebookF, FaReact, FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { bannerImg } from './../../assets/index';

function Banner() {
  return (
    <section id="home"
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont">
      <div className='flex items-center h-full'>
        {/* banner text - left banner */}
        <div className="w-1/2">
          {/* basic info */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base uppercase">WELCOME TO MY WORLD</h3>
            <h1 className="text-white text-4xl font-bold">
              Hi, I'm {" "}
              <span className="text-primaryColor capitalize">Abdelaziz Mohamed</span>
            </h1>
            <h2 className="text-white text-3xl font-bold">
              a {" "}
              <span className='text-white text-4xl font-bold'>
                <Typewriter
                  words={['Software Engineer.', 'React Developer.', 'Frontend Developer.', 'Node.js Developer.', 'Backend Developer.']}
                  loop={0} // infinite
                  cursor
                  cursorBlinking={true}
                  cursorStyle='|'
                  cursorColor='#ff014f'
                  typeSpeed={20}
                  deleteSpeed={20}
                  delaySpeed={1000}
                />  
              </span>
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
              I specialize in creating modern, interactive, and responsive web interfaces. <br />
              With expertise in React, Tailwind, and JavaScript,
              I focus on crafting seamless user experiences that bring ideas to life.
            </p>
          </div>
          {/* find me + top skills */}
          <div className='flex items-center justify-between gap-10 mt-20'>
            {/* find me */}
            <div className='w-1/2 flex flex-col justify-center items-start gap-5'>
              <h4 className='text-base font-normal font-titleFont uppercase'>Find Me In</h4>
              {/* icons */}
              <div className='flex gap-4'>
                <a className='bannerIcon' href='https://www.linkedin.com/in/abdelaziz' target='_blank'>
                  <FaLinkedinIn />
                </a>
                <a className='bannerIcon' href='https://github.com/Abdelaziz-Mohammed' target='_blank'>
                  <FaGithub />
                </a>
                <a className='bannerIcon' href='https://www.facebook.com/1abdelaziz.mohamed' target='_blank'>
                  <FaFacebookF />
                </a>
              </div>  
            </div>
            {/* top skills */}
            <div className='w-1/2 flex flex-col justify-center items-start gap-5'>
              <h4 className='text-base font-normal font-titleFont uppercase'>Top Skills</h4>
              {/* icons */}
              <div className='flex gap-4'>
                <span className='bannerIcon'>
                  <FaReact />
                </span>
                <span className='bannerIcon'>
                  <RiTailwindCssFill />
                </span>
                <span className='bannerIcon'>
                  <IoLogoJavascript />
                </span>
                <span className='bannerIcon'>
                  <FaNodeJs />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* banner image - right banner */}
        <div className="w-1/2">
          <div className='flex items-center justify-center relative'>
            <img src={bannerImg} alt="banner-img"
              className='w-[550px] z-10 drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)]'/>
            <div className='absolute w-[420px] h-[420px] bottom-0
              bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex items-center justify-center'
            ></div>
          </div>
        </div>
     </div>
    </section>
  )
}

export default Banner