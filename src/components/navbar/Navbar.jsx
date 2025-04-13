import { useState } from 'react';
import { Link } from 'react-scroll';
import { logoImg } from '../../assets/index';
import { FiMenu } from "react-icons/fi";
import ProfileImage from './../common/ProfileImage';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const {t, i18n} = useTranslation();
  const navLinksData = [
    {
      id: 1,
      title: t('navbar.nav_links.home'),
      link: "home",
    },
    {
      id: 2,
      title: t('navbar.nav_links.features'),
      link: "features",
    },
    {
      id: 3,
      title: t('navbar.nav_links.projects'),
      link: "projects",
    },
    {
      id: 4,
      title: t('navbar.nav_links.resume'),
      link: "resume",
    },
    {
      id: 5,
      title: t('navbar.nav_links.certificates'),
      link: "certificates",
    },
    {
      id: 6,
      title: t('navbar.nav_links.contact'),
      link: "contact",
    }
  ];
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    // change text direction
    document.documentElement.dir = (newLang === 'ar') ? 'rtl' : 'ltr';
  }
  // menu for small screens
  const [showMenu, setShowMenu] = useState(false);
  // profile image show
  const [showImage, setShowImage] = useState(false);
  return (
    <div className='flex items-center justify-between gap-10 mx-auto w-full h-20 font-titleFont border-b-[1px] border-b-gray-600
      sticky top-0 z-50 bg-bodyBg'>
      {/* logo */}
      <div onClick={() => setShowImage(true)}
        className='flex items-center justify-center gap-2 cursor-pointer'>
        <img src={logoImg} alt="logo-img"
          className='w-12 h-12 rounded-full border-2 border-lightColor' />
        <span className='text-primaryColor text-base font-bold uppercase
          relative after:absolute after:w-0 after:h-[1px] after:bg-gray-600 after:left-1/2 after:-bottom-1
          hover:after:w-full hover:after:left-0 after:transition-all after:ease-in-out after:duration-500'>
          {t('navbar.logo_title')}
        </span>
      </div>
      {/* profile image overlay */}
      <ProfileImage showImage={showImage} setShowImage={setShowImage} />
      {/* nav links */}
      <ul className='hidden 2xl:flex items-center justify-center gap-5 text-white'>
        {
          navLinksData.map(linkItem =>
            <li key={linkItem.id}
              className='capitalize text-center text-base text-gray-400 font-normal tracking-wide cursor-pointer 
                active:text-primaryColor hover:text-primaryColor ease-linear duration-300'>
              <Link
                activeClass='active' // give active links primary color
                to={linkItem.link}
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className='relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-primaryColor
                after:transition-all after:duration-500 after:ease-in-out hover:after:w-full hover:after:left-0 pb-2'>
                {linkItem.title}
              </Link>
            </li>
          )
        }
        <li>
          <button onClick={toggleLanguage}
            className="capitalize text-center text-base text-gray-400 font-normal tracking-wide hover:text-primaryColor ease-linear duration-300
              relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-primaryColor
              after:transition-all after:duration-500 after:ease-in-out hover:after:w-full hover:after:left-0 pb-2
              h-6 flex items-center justify-center mt-2">
            {t('navbar.toggle_lang')}
          </button>
        </li>
      </ul>
      {/* menu icon for small screens */}
      <button onClick={() => setShowMenu(!showMenu)} className='2xl:hidden
        text-xl text-primaryColor cursor-pointer bg-black rounded-full h-10 w-10 inline-flex items-center justify-center'>
        <FiMenu />
      </button>
      {/* menu items list */}
      {
        showMenu
        &&
        (
          <ul className='absolute top-24 left-0 w-full rounded-md border border-gray-700 bg-black p-2 
            flex flex-col items-center justify-center gap-2'>
            {
              navLinksData.map(linkItem =>
                <li key={linkItem.id}
                  className='capitalize text-center text-base text-gray-400 font-normal tracking-wide cursor-pointer
                  active:text-primaryColor hover:text-primaryColor ease-linear duration-300 bg-[#23272b] w-full rounded-sm
                  border border-gray-700 h-7'>
                  <Link onClick={() => setShowMenu(false)}
                    activeClass='active' // give active links primary color
                    to={linkItem.link}
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    className='w-full h-full rounded-lg flex items-center justify-center'>
                    {linkItem.title}
                  </Link>
                </li>
              )
            }
            <li className='capitalize text-center text-base text-gray-400 font-normal tracking-wide cursor-pointer
              active:text-primaryColor hover:text-primaryColor ease-linear duration-300 bg-[#23272b] w-full rounded-sm
              border border-gray-700 h-7'>
              <button onClick={() => {toggleLanguage(); setShowMenu(false);}}
                className="w-full h-full rounded-lg flex items-center justify-center">
                {t('navbar.toggle_lang')}
              </button>
            </li>
          </ul>
        )
      }
    </div>
  )
}

export default Navbar