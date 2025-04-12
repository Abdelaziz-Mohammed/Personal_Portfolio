import SectionTitle from "../../components/layouts/SectionTitle"
// import certificates images
import {
    C_Sharp_Basic_Certificate_HackerRank_Img,
    CSS_Basic_Certificate_HackerRank_Img,
    DatabaseFundamentals_Course_Certificate_MaharaTech_En_Img,
    HTML_CSS_Course_Certificate_MaharaTech_En_Img,
    Idea_Factory_Program_Creativa_Hub_Menoufia_Certificate_Img,
    JavaScript_Basic_Certificate_HackerRank_Img,
    JavaScript_Course_Certificate_MaharaTech_En_Img,
    Modern_JavaScript_Course_Certificate_MaharaTech_En_Img,
    MongoDB_Course_Certificate_MaharaTech_En_Img,
    React_Basic_Certificate_HackerRank_Img,
    ReactJS_Course_Certificate_MaharaTech_En_Img,
    Web_Development_Program_Creativa_Hub_Menoufia_Certificate_Img
} from './../../assets/index';
// slider
import Slider from "react-slick";
// custom slider arrows
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import { useTranslation } from "react-i18next";

function Certificates() {
  const {t} = useTranslation();
  const certificates = [
    {
      id: 1,
      title: 'React Certificate',
      imageSrc: ReactJS_Course_Certificate_MaharaTech_En_Img, // from assets index
      link: '/certificates/ReactJS_Course_Certificate_MaharaTech_En.pdf', // from public folder
    },
    {
      id: 2,
      title: 'React Certificate',
      imageSrc: React_Basic_Certificate_HackerRank_Img,
      link: '/certificates/React_Basic_Certificate_HackerRank.pdf',
    },
    {
      id: 3,
      title: 'Web Development Certificate',
      imageSrc: Web_Development_Program_Creativa_Hub_Menoufia_Certificate_Img,
      link: '/certificates/Web_Development_Program_Creativa-Hub-Menoufia_Certificate.pdf',
    },
    {
      id: 4,
      title: 'JavaScript Certificate',
      imageSrc: JavaScript_Course_Certificate_MaharaTech_En_Img,
      link: '/certificates/JavaScript_Course_Certificate_MaharaTech_En.pdf',
    },
    {
      id: 5,
      title: 'JavaScript Certificate',
      imageSrc: JavaScript_Basic_Certificate_HackerRank_Img,
      link: '/certificates/JavaScript_Basic_Certificate_HackerRank.pdf',
    },
    {
     id: 6,
     title: 'Modern JavaScript Certificate',
     imageSrc: Modern_JavaScript_Course_Certificate_MaharaTech_En_Img,
     link: '/certificates/Modern_JavaScript_Course_Certificate_MaharaTech_En.pdf',
    },
    {
      id: 7,
      title: 'MongoDB Certificate',
      imageSrc: MongoDB_Course_Certificate_MaharaTech_En_Img,
      link: '/certificates/MongoDB_Course_Certificate_MaharaTech_En.pdf',
    },
    {
      id: 8,
      title: 'Database Fundamentals Certificate',
      imageSrc: DatabaseFundamentals_Course_Certificate_MaharaTech_En_Img,
      link: '/certificates/DatabaseFundamentals_Course_Certificate_MaharaTech_En.pdf',
    },
    {
      id: 9,
      title: 'HTML& CSS Certificate',
      imageSrc: HTML_CSS_Course_Certificate_MaharaTech_En_Img,
      link: '/certificates/HTML&CSS_Course_Certificate_MaharaTech_En.pdf',
    },
    {
      id: 10,
      title: 'CSS Certificate',
      imageSrc: CSS_Basic_Certificate_HackerRank_Img,
      link: '/certificates/CSS_Basic_Certificate_HackerRank.pdf',
    },
    {
      id: 11,
      title: 'C# Certificate',
      imageSrc: C_Sharp_Basic_Certificate_HackerRank_Img,
      link: '/certificates/C_Sharp_Basic_Certificate_HackerRank.pdf',
    },
    {
      id: 12,
      title: 'Ideation Certificate',
      imageSrc: Idea_Factory_Program_Creativa_Hub_Menoufia_Certificate_Img,
      link: '/certificates/Idea_Factory_Program_Creativa-Hub-Menoufia_Certificate.pdf',
    },
  ];
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <section id='certificates'
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont">
      <div>
        <SectionTitle title={t('certificates.title')} desc={t('certificates.desc')} />
        {/* certificates slider */}
        <Slider {...settings}>
          {
            certificates.map(certificate =>
              <div key={certificate.id}
                className="rounded-lg relative">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 text-xl text-lightColor bg-[#0c1821] h-10 w-24
                  flex items-center justify-center tracking-wide rounded-lg shadow-lg border border-neutral-700
                  font-bold hover:border-primaryColor transition-colors duration-500">
                  {certificate.id}{" / "}{certificates.length}
                </span>
                <img src={certificate.imageSrc} alt={certificate.title}
                  className="max-w-[600px] w-full h-auto rounded-lg object-contain mx-auto mt-16"/>
                <a
                  aria-label={`View ${certificate.title}`}
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={certificate.title}
                  className="text-center text-lg font-bold tracking-wider w-full max-w-[600px] mx-auto mt-3
                    flex items-center justify-center bg-black shadow-lg rounded-lg py-2 hover:text-primaryColor transition-colors duration-500">
                  {t('certificates.viewButton')}
                </a>
              </div>
            )
          }
        </Slider>
      </div>
    </section>
  )
}

export default Certificates