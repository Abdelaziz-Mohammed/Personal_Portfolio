import { FaArrowRight } from "react-icons/fa";

function FeatureBox({ title, desc, icon }) {
  return (
    <div className="w-full h-80 px-12 py-10 rounded-lg shadow-shadowOne flex items-center
      bg-gradient-to-r from-bodyBg to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]
      transition-colors duration-100 overflow-hidden">
      <div className="flex flex-col gap-5 translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
        {icon}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-titleFont font-bold text-gray-300">{title}</h2>
          <p className="max-w-[280px] text-base font-bodyFont">
            {desc}
          </p>
        </div>
        <FaArrowRight className="text-primaryColor text-xl mt-8 cursor-pointer" />
      </div>
    </div>
  )
}

export default FeatureBox