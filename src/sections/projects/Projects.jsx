import SectionTitle from "../../components/layouts/SectionTitle";
import ProjectBox from "./ProjectBox";
// projects images
import { shopyECommerceImg, coralECommerceImg, universityWebsiteImg, landingPageImg, quizAppImg, notesAppImg } from './../../assets/index';
import { useTranslation } from "react-i18next";

function Projects() {
  const {t} = useTranslation();
  const projects = [
    {
      title: t('projects.projectDetails.0.title'),
      status: t('projects.projectDetails.0.status'),
      desc: t('projects.projectDetails.0.desc'),
      image: shopyECommerceImg,
      github: 'https://github.com/Abdelaziz-Mohammed/Shopy-E-Commerce',
      demo: 'https://shopy-e-commerce-one.vercel.app/',
    },
    {
      title: t('projects.projectDetails.1.title'),
      status: t('projects.projectDetails.1.status'),
      desc: t('projects.projectDetails.1.desc'),
      image: coralECommerceImg,
      github: 'https://github.com/Abdelaziz-Mohammed/Coral-E-Commerce',
      demo: 'https://abdelaziz-mohammed.github.io/Coral-E-Commerce/',
    },
    {
      title: t('projects.projectDetails.2.title'),
      status: t('projects.projectDetails.2.status'),
      desc: t('projects.projectDetails.2.desc'),
      image: universityWebsiteImg,
      github: 'https://github.com/Abdelaziz-Mohammed/university-react-app',
      demo: 'https://abdelaziz-mohammed.github.io/university-react-app/',
    },
    {
      title: t('projects.projectDetails.3.title'),
      status: t('projects.projectDetails.3.status'),
      desc: t('projects.projectDetails.3.desc'),
      image: landingPageImg,
      github: 'https://github.com/Abdelaziz-Mohammed/Frontend-React-and-TailwindCss',
      demo: 'https://abdelaziz-mohammed.github.io/Frontend-React-and-TailwindCss/',
    },
    {
      title: t('projects.projectDetails.4.title'),
      status: t('projects.projectDetails.4.status'),
      desc: t('projects.projectDetails.4.desc'),
      image: quizAppImg,
      github: 'https://github.com/Abdelaziz-Mohammed/Quiz_App_JS',
      demo: 'https://abdelaziz-mohammed.github.io/Quiz_App_JS/',
    },
    {
      title: t('projects.projectDetails.5.title'),
      status: t('projects.projectDetails.5.status'),
      desc: t('projects.projectDetails.5.desc'),
      image: notesAppImg,
      github: 'https://github.com/Abdelaziz-Mohammed/Notes_App_JS',
      demo: 'https://abdelaziz-mohammed.github.io/Notes_App_JS/',
    },
  ];
  return (
    <section id='projects'
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont">
      <div className="flex flex-col">
        <SectionTitle title={t('projects.title')} desc={t('projects.desc')} />
        {/* projects boxes */}
        <div className="grid grid-cols-3 gap-20">
          {
            projects.map((project, index) => 
              <ProjectBox key={index}
                title={project.title}
                status={project.status}
                desc={project.desc}
                image={project.image}
                github={project.github}
                demo={project.demo}
              />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Projects