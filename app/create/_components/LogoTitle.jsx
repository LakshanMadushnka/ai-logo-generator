import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

function LogoTitle() {
  return (
    <div>
        <HeadingDescription 
          title={Lookup?.LogoTitle}
          description={Lookup?.LogoTitleDesc}
        />

        <input type='text' placeholder={Lookup.InputTitlePlaceholder} 
         className='p-4 border rounded-lg mt-5 w-full'
        />

    </div>
  )
}

export default LogoTitle