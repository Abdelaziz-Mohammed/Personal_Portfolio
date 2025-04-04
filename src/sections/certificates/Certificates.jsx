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

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'React Certificate',
      imageSrc: ReactJS_Course_Certificate_MaharaTech_En_Img, // from assets index
      link: '/public/certificates/ReactJS_Course_Certificate_MaharaTech_En.pdf', // from public folder
    },
    {
      id: 2,
      title: 'React Certificate',
      imageSrc: React_Basic_Certificate_HackerRank_Img,
      link: '/public/certificates/React_Basic_Certificate_HackerRank.pdf',
    },
    {
      id: 3,
      title: 'Web Development Certificate',
      imageSrc: Web_Development_Program_Creativa_Hub_Menoufia_Certificate_Img,
      link: '/public/certificates/Web_Development_Program_Creativa-Hub-Menoufia_Certificate.pdf',
    },
    {
      id: 4,
      title: 'JavaScript Certificate',
      imageSrc: JavaScript_Course_Certificate_MaharaTech_En_Img,
      link: '/public/certificates/JavaScript_Course_Certificate_MaharaTech_En.pdf',
    },
    {
      id: 5,
      title: 'JavaScript Certificate',
      imageSrc: JavaScript_Basic_Certificate_HackerRank_Img,
      link: '/public/certificates/JavaScript_Basic_Certificate_HackerRank.pdf',
    },
    {
     id: 6,
     title: 'Modern JavaScript Certificate',
     imageSrc: Modern_JavaScript_Course_Certificate_MaharaTech_En_Img,
     link: '/public/certificates/Modern_JavaScript_Course_Certificate_MaharaTech_En.pdf',
    },
    {
      id: 7,
      title: 'MongoDB Certificate',
      imageSrc: MongoDB_Course_Certificate_MaharaTech_En_Img,
      link: '/public/certificates/MongoDB_Course_Certificate_MaharaTech_En.pdf',
    },
    {
      id: 8,
      title: 'Database Fundamentals Certificate',
      imageSrc: DatabaseFundamentals_Course_Certificate_MaharaTech_En_Img,
      link: '/public/certificates/DatabaseFundamentals_Course_Certificate_MaharaTech_En.pdf',
    },
    {
      id: 9,
      title: 'HTML& CSS Certificate',
      imageSrc: HTML_CSS_Course_Certificate_MaharaTech_En_Img,
      link: '/public/certificates/HTML&CSS_Course_Certificate_MaharaTech_En.pdf',
    },
    {
      id: 10,
      title: 'CSS Certificate',
      imageSrc: CSS_Basic_Certificate_HackerRank_Img,
      link: '/public/certificates/CSS_Basic_Certificate_HackerRank.pdf',
    },
    {
      id: 11,
      title: 'C# Certificate',
      imageSrc: C_Sharp_Basic_Certificate_HackerRank_Img,
      link: '/public/certificates/C_Sharp_Basic_Certificate_HackerRank.pdf',
    },
    {
      id: 12,
      title: 'Ideation Certificate',
      imageSrc: Idea_Factory_Program_Creativa_Hub_Menoufia_Certificate_Img,
      link: '/public/certificates/Idea_Factory_Program_Creativa-Hub-Menoufia_Certificate.pdf',
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
        <SectionTitle title='VERIFIED LEARNING' desc='My Certificates' />
        {/* certificates slider */}
        <Slider {...settings}>
          {
            certificates.map(certificate =>
              <div key={certificate.id}
                className="rounded-lg">
                <img src={certificate.imageSrc} alt={certificate.title}
                  className="max-w-[600px] w-full h-auto rounded-lg object-contain mx-auto"/>
                <a href={certificate.link} target="_blank" rel="noopener noreferrer"
                  className="text-center text-lg font-bold tracking-wider w-full max-w-[600px] mx-auto mt-3
                    flex items-center justify-center bg-black shadow-lg rounded-lg py-2 hover:text-primaryColor transition-colors duration-500">
                  View Certificate
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