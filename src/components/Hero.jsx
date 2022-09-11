import React from 'react'
import styles from '../styles'
import {curveLine, repeatCircle, ethereum, bitcoin3d, nth3d, arrow} from '../assets'
import Dropdown from './Dropdown'
import { menuItems } from '../constants'
import Button from './Button'

const Hero = () => {
  return (  
    <section id='home' className={`z-10 relative xs:py-[60px] py-[50px]`}>
      <div className='relative w-max mx-auto mb-[60px]' >
        <h1 className='text-center md:text-[57px] ss:text-[40px] text-[34px] font-bold tracking-wide' >Exchange your <br className='xs:hidden'/> favorite <br  /> cryptos <br className='xs:hidden'/> without KYC</h1>
        <img src={curveLine} className="absolute xs:right-[4%] right-[20px] bottom-0 md:w-fit ss:w-[240px] w-[190px]    " alt="curve line" />
      </div>

      <div>
        <div className={`relative ${styles.gutter}`}>
          <div className='glass relative pt-8 ss:px-16 xs:px-8 px-4 z-10' >
            <div className='flex md:flex-row flex-col justify-between gap-2' >
              <div className='flex md:self-end self-auto  flex-col basis-1/2' >
                <span className='mb-3'> you send </span>
                <Dropdown menuItems={menuItems}  />
              </div>
                <img src={repeatCircle} className='translate-y-[15px] w-[31px] h-[31px] md:self-center self-end cursor-pointer' alt="repeat circle" />
              <div className='flex md:self-end self-auto  flex-col basis-1/2' >
                <span className='mb-3'> You receive </span>
                <Dropdown menuItems={menuItems} icon={ethereum} text="ETH"  />
              </div>
              <Button styles={'md:self-end self-auto md:mt-0 mt-2'} />
            </div>
            <div>
              <span className='block py-[22px] text-center text-[#8D98AA] text-[13px]'>Quote will refresh in 10:00</span>
            </div>
            

            {/* Floating Icons */}
          </div>
            <img src={bitcoin3d} className="absolute md:w-fit w-[100px]  xs:inline-block hidden z-20 md:left-[-90px] left-[-30px] md:top-[-90px] top-[-80px]"   alt="bitcoin 3d" />
            <img src={nth3d} className="absolute md:w-fit w-[100px] xs:inline-block hidden md:right-[-90px] right-[-30px]  md:top-[-90px] top-[-80px] z-0"   alt="ethereum 3d" />
        </div>
      </div>

      <button className=' sm:flex hidden w-[56px] h-[56px] bg-[#171821] justify-center items-center mx-auto mt-[37px] mb-[117px] rounded-full' >
        <img src={arrow} alt="arrow" className='' />
      </button>
    </section>
  )
}

export default Hero