import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

function LogoDesc({OnHandleInputChange, formData}) {
  return (
    <div className='mt-10'>
      <HeadingDescription 
      title={Lookup.LogoDescTitle}
      description={Lookup.LogoDescDesc}/>

      <input type='text' placeholder={Lookup.InputTitlePlaceholder} 
               className='p-4 border rounded-lg mt-5 w-full'
               // defaultValue={formData?.desc}
               value={formData?.desc}
               onChange={(e) => OnHandleInputChange(e.target.value)}
              />
      
    </div>
  )
}

export default LogoDesc