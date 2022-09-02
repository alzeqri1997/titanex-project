import React from 'react'

const Info = ({title, body, image}) => {
  return (
    <div className='mb-[60px]' >
      <div className='flex ss:flex-row ss:gap-0 gap-[24px] flex-col justify-between items-center my-[31px]' >
        <div className='lg:basis-1/3 basis-2/3'>
          <h2 className='text-[26px] font-bold mb-[28px]' >{title}</h2>
          <p className='text-[14px] text-[#86898B] space leading-6'>{body}</p>
        </div>
        <div className='w-[207.1px] h-auto mx-[40px] self-end ' >
          <img src={image} className="ss:mx-auto ml-auto " alt="" />
        </div>
      </div>
      <hr className="bg-[#717B8C] opacity-20" />
    </div>
  )
}

export default Info