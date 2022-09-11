import React from 'react'

const Step = ({title, body, image}) => {
  return (
    <div >
      <img src={image} className='mx-auto sm:mb-[40px] mb-[17px] ' alt="step1" />
      <div>
        <span className='font-bold text-[24px] block text-center mb-[19px]' >{title}</span>
        <span className='text-[16px] text-[#86898B] block text-center leading-6 mx-auto w-[80%]'>{body}</span>
      </div>
    </div>
  )
}

export default Step