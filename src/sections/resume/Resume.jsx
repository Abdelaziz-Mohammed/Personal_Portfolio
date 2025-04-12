import { useState } from 'react';
import SectionTitle from './../../components/layouts/SectionTitle';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import { useTranslation } from 'react-i18next';

function Resume() {
  const {t} = useTranslation();
  const navItems = [
    {
      id: 1,
      title: t('resume.nav.education'),
      icon: <FaGraduationCap className='text-3xl text-lightColor' />,
    },
    {
      id: 2,
      title: t('resume.nav.skills'),
      icon: <FaCode className='text-3xl text-lightColor' />,
    },
    {
      id: 3,
      title: t('resume.nav.experience'),
      icon: <FaBriefcase className='text-3xl text-lightColor' />,
    }
  ];
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <section id='resume'
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont">
      <div>
        <SectionTitle title={t('resume.title', { years: new Date().getFullYear() - 2023 })} desc={t('resume.desc')} />
        {/* download resume */}
        <div className="text-center mt-6">
          <a // download resume from google drive
            href="https://drive.google.com/uc?export=download&id=1Xc03_B_74nBhM5XPVKWeC89uWVBXlFxy"
            rel="noopener noreferrer"
            className="bg-boxBg text-white border border-gray-700 py-3 px-6 rounded-lg font-semibold font-bodyFont shadow-2xl
              hover:text-primaryColor hover:border-[#ff014d85] transition duration-300 flex items-center justify-center gap-2">
            <FaDownload /> {t('resume.download')}
          </a>
        </div>
        {/* resume content */}
        <div>
          {/* navigation ul */}
          <ul className='w-full flex items-center justify-center gap-0 rounded-lg bg-black my-10'>
            {
              navItems.map(item =>
                <li key={item.id} onClick={() => setSelectedItem(item.id)}
                  className={`w-1/3 h-16 flex items-center justify-center first:rounded-lg
                    ${item.id === selectedItem ? 'border border-[#ff014db0] text-primaryColor' : 'border border-black'}
                    uppercase tracking-wide hover:text-primaryColor rounded-lg cursor-pointer ease-linear duration-200`}>
                  {item.title}
                </li>
              )
            }
          </ul>
          {/* render components according to selection */}
          { selectedItem === 1 && <Education title={navItems[0].title} icon={navItems[0].icon} /> }
          { selectedItem === 2 && <Skills title={navItems[1].title} icon={navItems[1].icon} /> }
          { selectedItem === 3 && <Experience title={navItems[2].title} icon={navItems[2].icon} /> }
        </div>
      </div>
    </section>
  )
}

export default Resume