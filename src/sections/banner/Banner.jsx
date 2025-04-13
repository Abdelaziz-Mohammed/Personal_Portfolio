import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedinIn, FaFacebookF, FaReact, FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { bannerImg } from './../../assets/index';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

function Banner() {
  const {t, i18n} = useTranslation();
  return (
    <section id="home"
      className="w-full py-10 lg:py-20 border-b-[1px] border-b-black font-titleFont">
      <div className='flex flex-col 4xl:flex-row items-center gap-10 4xl:gap-0 h-full'>
        {/* banner text - left banner */}
        <div className="w-full 4xl:w-1/2">
          {/* basic info */}
          <div className="flex flex-col gap-2 lg:gap-5">
            <h3 className="text-sm lg:text-base uppercase">
              {t('banner.welcome_message')}
            </h3>
            <h1 className="text-white text-xl lg:text-4xl font-bold">
              {t('banner.hi_im')} {" "} {window.innerWidth < 350 && <br /> }
              <span className="text-primaryColor capitalize">{t('banner.name')}</span>
            </h1>
            <h2 className="text-white text-lg lg:text-3xl font-bold">
              {
                i18n.language === 'en' && "a "
              }
              <span className='text-white text-xl lg:text-4xl font-bold'>
                <Typewriter
                  words={t('banner.typewriter_message').split(',')}
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
            <p className="text-sm lg:text-base font-bodyFont leading-6 tracking-wide">
              {t('banner.specialize')}
            </p>
            {/* hire me that navigates to contact-me */}
            <div className='h-8 lg:h-10 w-full flex items-center justify-center rounded-lg mt-3'>
              <Link
                to="contact"
                smooth={true}
                offset={-20}
                duration={500}
                className="text-green-500 text-base lg:text-2xl font-semibold text-center w-full h-full rounded-lg border border-gray-700 
                  flex items-center justify-center cursor-pointer tracking-wider
                  hover:text-primaryColor hover:bg-gray-800 transition duration-500 ease-in-out"
              >
                {t('banner.hire_me')}
              </Link>
            </div>
          </div>
          {/* find me + top skills */}
          <div className='flex flex-col md:flex-row lg:items-center lg:justify-between gap-5 lg:gap-10 mt-7 lg:mt-10'>
            {/* find me */}
            <div className='w-1/2 flex flex-col justify-center items-start gap-2 lg:gap-5'>
              <h4 className='text-sm lg:text-base font-normal font-titleFont uppercase'>{t('banner.find_me_in')}</h4>
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
            <div className='w-1/2 flex flex-col justify-center items-start gap-2 lg:gap-5'>
              <h4 className='text-sm lg:text-base font-normal font-titleFont uppercase'>{t('banner.top_skills')}</h4>
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
        <div className="w-full 4xl:w-1/2 hidden 4xl:block">
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