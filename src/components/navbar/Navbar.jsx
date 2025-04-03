import { Link } from 'react-scroll';
import { logoImg } from '../../assets/index';
import { navLinksData } from '../../constants/index';

function Navbar() {
  return (
    <div className='flex items-center justify-between gap-10 mx-auto w-full h-20 font-titleFont border-b-[1px] border-b-gray-600
      sticky top-0 z-50 bg-bodyBg'>
      {/* logo */}
      <div className='flex items-center justify-center gap-2 cursor-pointer'>
        <img src={logoImg} alt="logo-img"
          className='w-12 h-12 rounded-full border-2 border-lightColor' />
        <span className='text-primaryColor text-base font-bold uppercase
          relative after:absolute after:w-0 after:h-[1px] after:bg-gray-600 after:left-1/2 after:-bottom-1
          hover:after:w-full hover:after:left-0 after:transition-all after:ease-in-out after:duration-500'>
          Abdelaziz
        </span>
      </div>
      {/* nav links */}
      <ul className='flex items-center justify-center gap-5 text-white'>
        {
          navLinksData.map(linkItem =>
            <li key={linkItem.id}
              className='capitalize text-center text-base text-gray-400 font-normal tracking-wide cursor-pointer active:text-primaryColor hover:text-primaryColor ease-linear duration-300'>
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
      </ul>
    </div>
  )
}

export default Navbar