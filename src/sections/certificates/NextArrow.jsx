import { HiArrowRight } from 'react-icons/hi';

function NextArrow({ onClick }) {
  return (
    <div
      className='absolute top-0 right-0 z-10 flex items-center justify-center cursor-pointer
        bg-[#0c1821] hover:bg-black text-2xl text-lightColor shadow-shadowOne rounded-lg h-10 w-14
        border border-gray-700 hover:border-primaryColor duration-500'
      onClick={onClick}
    >
      <HiArrowRight className='text-lightColor text-2xl' />
    </div>
  )
}

export default NextArrow