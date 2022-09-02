import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`h-[52px] px-[49px] font-poppins text-[18px] bg-primary rounded-[7px] outline-none ${styles} `} >
      Swap
    </button>
  )
}

export default Button