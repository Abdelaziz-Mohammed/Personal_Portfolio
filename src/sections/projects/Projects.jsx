import SectionTitle from "../../components/layouts/SectionTitle";
import ProjectBox from "./ProjectBox";
// projects images
import { shopyECommerceImg, coralECommerceImg, universityWebsiteImg, landingPageImg, quizAppImg, notesAppImg } from './../../assets/index';

function Projects() {
  const projects = [
    {
      title: 'Shopy E-Commerce',
      desc: 'A fully responsive e-commerce web app built with React, React Router, and Tailwind CSS, offering product browsing, cart management, checkout, and more.',
      image: shopyECommerceImg,
      github: 'https://github.com/Abdelaziz-Mohammed/Shopy-E-Commerce',
      demo: 'https://shopy-e-commerce-one.vercel.app/',
    },
    {
      title: 'Coral E-Commerce',
      desc: 'An interactive e-commerce app built with React and React Router, featuring a product catalog, cart functionality, and a mock JSON database.',
      image: coralECommerceImg,
      github: 'https://github.com/Abdelaziz-Mohammed/Coral-E-Commerce',
      demo: 'https://abdelaziz-mohammed.github.io/Coral-E-Commerce/',
    },
    {
      title: 'University Website',
      desc: 'A React-based university simulation app that allows users to explore academic schedules, courses, and campus-related activities interactively.',
      image: universityWebsiteImg,
      github: 'https://github.com/Abdelaziz-Mohammed/university-react-app',
      demo: 'https://abdelaziz-mohammed.github.io/university-react-app/',
    },
    {
      title: 'Landing Page',
      desc: 'A modern landing page built with React and Tailwind CSS, featuring interactive sections like testimonials, social links, and a responsive layout.',
      image: landingPageImg,
      github: 'https://github.com/Abdelaziz-Mohammed/Frontend-React-and-TailwindCss',
      demo: 'https://abdelaziz-mohammed.github.io/Frontend-React-and-TailwindCss/',
    },
    {
      title: 'Quiz App',
      desc: 'A simple quiz application using HTML, CSS, and JavaScript, featuring dynamic questions, a scoring system, and an engaging user interface.',
      image: quizAppImg,
      github: 'https://github.com/Abdelaziz-Mohammed/Quiz_App_JS',
      demo: 'https://abdelaziz-mohammed.github.io/Quiz_App_JS/',
    },
    {
      title: 'Notes App',
      desc: 'A note-taking application using HTML, CSS, and JavaScript, allowing users to create, edit, and delete notes with a clean and intuitive design.',
      image: notesAppImg,
      github: 'https://github.com/Abdelaziz-Mohammed/Notes_App_JS',
      demo: 'https://abdelaziz-mohammed.github.io/Notes_App_JS/',
    },
  ];
  return (
    <section id='projects'
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont">
      <div className="flex flex-col">
        <SectionTitle title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK' desc='My Projects' />
        {/* projects boxes */}
        <div className="grid grid-cols-3 gap-20">
          {
            projects.map((project, index) => 
              <ProjectBox key={index}
                title={project.title}
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