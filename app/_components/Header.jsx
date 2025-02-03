import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

function Header() {
  return (
    
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
      <Link href={"/"}>
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </Link>
        
        <Button>Get Started</Button>
    </div>
  )
}

export default Header