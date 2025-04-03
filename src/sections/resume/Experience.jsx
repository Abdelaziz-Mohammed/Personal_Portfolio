import ResumeSectionTitle from '../../components/layouts/ResumeSectionTitle'

function Experience({title, icon}) {
  return (
    <div className='bg-[#1e2024] flex flex-col items-start gap-5 rounded-lg p-5'>
    <ResumeSectionTitle title={title} icon={icon} />
    {/* experience */}
    <div className='w-full bg-[#23272b] p-5 rounded-lg shadow-lg flex flex-col gap-3'>
      experience
    </div>
  </div>
  )
}

export default Experience