import React from 'react'
import { step1 } from '../assets'

const Step = ({title, body, image}) => {
  return (
    <div className='mb-[60px]' >
      <img src={image} className='mx-auto mb-[40px]' alt="step1" />
      <div>
        <span className='font-bold text-[24px] block text-center mb-[19px]' >{title}</span>
        <span className='text-[16px] text-[#86898B] block text-center leading-6 mx-auto w-[80%]'>{body}</span>
      </div>
    </div>
  )
}

export default Step