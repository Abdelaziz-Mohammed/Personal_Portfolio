import { HiArrowLeft } from "react-icons/hi";

function PrevArrow({ onClick }) {
  return (
    <div
      className='absolute top-0 left-0 z-10 flex items-center justify-center cursor-pointer
        bg-[#0c1821] hover:bg-black text-2xl text-lightColor shadow-shadowOne rounded-lg h-10 w-14
        border border-gray-700 hover:border-primaryColor duration-500'
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  )
}

export default PrevArrow