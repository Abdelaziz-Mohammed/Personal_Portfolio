import ResumeSectionTitle from '../../components/layouts/ResumeSectionTitle'

function Education({title, icon}) {
  return (
    <div className='bg-[#1e2024] flex flex-col items-start gap-5 rounded-lg p-5'>
      <ResumeSectionTitle title={title} icon={icon} />
      {/* uni-education */}
      <div className='w-full bg-[#23272b] p-5 rounded-lg shadow-lg flex flex-col gap-3'>
        <h3 className='text-lg font-bold'>
          Menofia University <span className='text-sm text-primaryColor'>{" | "}</span>
          <span className='text-sm text-gray-400 capitalize'>Faculty of electronic engineering</span>
        </h3>
        <p className='text-sm text-gray-400'>
          Bachelor of Computer Science and Engineering
        </p>
        <span className='text-sm text-primaryColor'>2022 - 2026</span>
      </div>
    </div>
  )
}

export default Education