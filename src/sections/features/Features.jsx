import SectionTitle from './../../components/layouts/SectionTitle';
import FeatureBox from './FeatureBox';
import { FaBolt, FaChartLine, FaCode, FaFigma , FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

function Features() {
  const {t} = useTranslation();
  const features = [
    {
      title: t('features.frontend_dev.title'),  // Use translation key
      desc: t('features.frontend_dev.desc'),
      icon: <FaCode className="text-primaryColor text-4xl" />,
    },
    {
      title: t('features.react_expertise.title'),
      desc: t('features.react_expertise.desc'),
      icon: <FaReact className="text-primaryColor text-4xl animate-spin" style={{ animationDuration: '3s' }} />,
    },
    {
      title: t('features.tailwind_css.title'),
      desc: t('features.tailwind_css.desc'),
      icon: <RiTailwindCssFill className="text-primaryColor text-4xl" />,
    },
    {
      title: t('features.api_integration.title'),
      desc: t('features.api_integration.desc'),
      icon: <FaBolt className="text-primaryColor text-4xl" />,
    },
    {
      title: t('features.performance_optimization.title'),
      desc: t('features.performance_optimization.desc'),
      icon: <FaChartLine className="text-primaryColor text-4xl" />,
    },
    {
      title: t('features.ui_ux.title'),
      desc: t('features.ui_ux.desc'),
      icon: <FaFigma className="text-primaryColor text-4xl" />,
    },
  ];
  return (
    <section id="features"
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont">
      <div className='flex flex-col'>
        <SectionTitle title={t('features.title')} desc={t('features.desc')} />
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