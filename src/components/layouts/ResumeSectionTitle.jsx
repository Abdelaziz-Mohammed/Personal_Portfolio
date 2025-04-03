import React from 'react'

function ResumeSectionTitle({title, icon}) {
  return (
    <div className='flex items-center justify-center gap-2'>
      {icon}
      <h3 className='text-xl text-lightColor tracking-wide font-bold capitalize'>{title}</h3>
    </div>
  )
}

export default ResumeSectionTitle