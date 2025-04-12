import ResumeSectionTitle from '../../components/layouts/ResumeSectionTitle'
import { useTranslation } from 'react-i18next';

function Education({title, icon}) {
  const {t} = useTranslation();
  return (
    <div className='bg-[#1e2024] flex flex-col items-start gap-5 rounded-lg p-5'>
      <ResumeSectionTitle title={title} icon={icon} />
      {/* uni-education */}
      <div className='w-full bg-[#23272b] p-5 rounded-lg shadow-lg flex flex-col gap-3'>
        <h3 className='text-lg font-bold'>
          {t('resume.education.university')} <span className='text-sm text-primaryColor'>{" | "}</span>
          <span className='text-sm text-gray-400 capitalize'>{t('resume.education.faculty')}</span>
        </h3>
        <p className='text-sm text-gray-400'>
          {t('resume.education.degree')}
        </p>
        <p className='text-sm text-gray-400 font-mono'>
          {t('resume.education.gpa')}
        </p>
        <span className='text-sm text-primaryColor'>{t('resume.education.duration')}</span>
      </div>
    </div>
  )
}

export default Education