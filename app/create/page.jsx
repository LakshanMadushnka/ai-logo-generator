"use client";
import React, {useState} from 'react'
import LogoTitle from './_components/LogoTitle'
import {Button} from '@/components/ui/button'
import {ArrowLeft, ArrowRight} from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoColorPallete from './_components/LogoColorPallete'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdea from './_components/LogoIdea'
import PricingModel from './_components/PricingModel'

function CreateLogo() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();

  const OnHandleInputChange = (field, value) => {

    setFormData(prev => ({...prev, [field]: value}))

    console.log(formData)
  }


  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
      {step==1 ? <LogoTitle OnHandleInputChange={(v) => OnHandleInputChange('title', v)} formData={formData}/> :
        step==2 ? <LogoDesc OnHandleInputChange={(v) => OnHandleInputChange('desc', v)} formData={formData}/>:
        step==3 ? <LogoColorPallete OnHandleInputChange={(v) => OnHandleInputChange('palette', v)} formData={formData}/>:
        step==4 ? <LogoDesigns OnHandleInputChange={(v) => OnHandleInputChange('design', v)} formData={formData}/>:
        step==5 ? <LogoIdea
        formData={formData}
        OnHandleInputChange={(v) => OnHandleInputChange('idea', v)}/>:
        step==6 ? <PricingModel
        formData={formData}
        OnHandleInputChange={(v) => OnHandleInputChange('pricing', v)}/>:

      null}
        
        <div className='flex items-center justify-between mt-10'>
         {step !==1 && <Button variant='outline' onClick={() => setStep(step-1)}> <ArrowLeft/> Previous</Button> }
          <Button onClick={() => setStep(step+1) }> <ArrowRight/> Continue</Button>
        </div>
    </div>
  )
}

export default CreateLogo