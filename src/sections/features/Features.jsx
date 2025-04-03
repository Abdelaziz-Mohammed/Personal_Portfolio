
import SectionTitle from './../../components/layouts/SectionTitle';
import FeatureBox from './FeatureBox';
import { FaBolt, FaChartLine, FaCode, FaFigma , FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Features() {
  const features = [
    {
      title: "Frontend Development",
      desc: "Developing modern, responsive, and interactive web applications using React.js, Tailwind CSS, Bootstrap, HTML, CSS, and JavaScript.",
      icon: <FaCode className="text-primaryColor text-4xl" />,
    },
    {
      title: "React.js Expertise",
      desc: "Building dynamic, reusable components while managing state efficiently with hooks, ensuring high performance and seamless user experience.",
      icon: <FaReact className="text-primaryColor text-4xl animate-spin" style={{ animationDuration: '3s' }} />,
    },
    {
      title: "Tailwind CSS & Styling",
      desc: "Creating sleek and fully responsive UI designs with Tailwind CSS, focusing on efficiency, scalability, and modern design principles.",
      icon: <RiTailwindCssFill className="text-primaryColor text-4xl" />,
    },
    {
      title: "API Integration" ,
      desc: "Fetching and displaying real-time data by integrating frontend applications with RESTful APIs, ensuring smooth and structured communication.",
      icon: <FaBolt className="text-primaryColor text-4xl" />,
    },
    {
      title: "Performance Optimization" ,
      desc: "Boosting website speed, reducing load times, and optimizing frontend performance using best coding practices and efficient asset management.",
      icon: <FaChartLine className="text-primaryColor text-4xl" />,
    },
    {
      title: "UI/UX Implementation",
      desc: "Designing visually appealing interfaces with a strong emphasis on usability, accessibility, and fluid animations for better user engagement.",
      icon: <FaFigma className="text-primaryColor text-4xl" />,
    },
  ];
  return (
    <section id="features"
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont">
      <div className='flex flex-col'>
        <SectionTitle title='Features' desc='What I Do' />
        {/* feature boxes */}
        <div className='grid grid-cols-3 gap-20'>
          {
            features.map((feature, index) =>
              <FeatureBox key={index}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
              />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Features