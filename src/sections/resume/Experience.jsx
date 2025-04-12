import { useState } from 'react';
import ResumeSectionTitle from '../../components/layouts/ResumeSectionTitle'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTranslation } from 'react-i18next';

function Experience({title, icon}) {
  const {t} = useTranslation();
  const experiences = [
    {
      id: 1,
      role: t('resume.experience.0.role'),
      company: t('resume.experience.0.company'),
      period: t('resume.experience.0.period'),
      desc: t('resume.experience.0.desc')
    },
    {
      id: 2,
      role: t('resume.experience.1.role'),
      company: t('resume.experience.1.company'),
      period: t('resume.experience.1.period'),
      desc: t('resume.experience.1.desc')
    }
  ];
  const [openId, setOpenId] = useState(1); // the first is the default open
  const handleOpen = (id) => {
    if (openId === id) {
      setOpenId(0); // close it
    }
    else {
      setOpenId(Number(id)); // open it and close all others
    }
  }
  return (
    <div className='bg-[#1e2024] flex flex-col items-start gap-5 rounded-lg p-5'>
      <ResumeSectionTitle title={title} icon={icon} />
      {/* experience */}
      <div className='w-full bg-transparent rounded-lg flex flex-col gap-5'>
        {
          experiences.map(exp => 
            <div key={exp.id} className='bg-[#23272b] p-5 rounded-lg shadow-lg flex flex-col gap-3'>
              <div className='flex items-center justify-between gap-10'>
                <h3 className='text-lg font-bold text-lightColor'>{exp.role}</h3>
                <button onClick={() => handleOpen(exp.id)}
                  className='flex items-center justify-center w-10 h-6 rounded-lg bg-[#1e2024]'>
                  {
                    openId === exp.id ?
                    <IoIosArrowUp className='text-2xl text-lightColor
                      hover:text-primaryColor transition-colors duration-500'/> :
                    <IoIosArrowDown className='text-2xl text-lightColor
                      hover:text-primaryColor transition-colors duration-500'/>
                  }
                </button>
              </div>
              <p className='text-sm text-gray-400'>
                <span className='font-semibold text-base'>{exp.company}</span>
                <span className='text-sm text-primaryColor px-1'>{" | "}</span>
                <span className='text-gray-500 tracking-wide'>{exp.period}</span>
              </p>
              {
                (openId === exp.id)
                &&
                <p className='text-sm text-gray-400 max-w-[800px] leading-6'>{exp.desc}</p>
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Experience