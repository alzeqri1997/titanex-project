import React from 'react'
import { footerLinks, navLinks, socialMedia } from '../constants'
import styles from '../styles'

const Footer = () => {
    return (
        <footer className={` bg-[#15181D] py-[25px]  `} >
            <div className={`${styles.gutter} `} >
                <div className='flex justify-between items-center w-full mb-[29px]  ' >
                    <span className="text-2xl z-10 "> Titanex </span>
                    <ul className="list-none z-10 sm:flex hidden justify-end items-center">
                        {navLinks.map((nav, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer text-[12px]
                      text-white
                      ${index === navLinks.length - 1 ? "mr-0" : "mr-[46px]"}
                      `}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="sm:hidden flex social-icons z-10 gap-2" >
                        {
                            socialMedia.map((item, index) => (
                                <div key={index} className={`w-[26px] h-[26px] ${index === 0 ? 'bg-primary' : 'bg-black'} rounded-full ${styles.flexCenter}`}>
                                    <a href=""><img src={item.icon} alt="twitter" /></a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <hr className="bg-[#717B8C] opacity-20" />
                <div className='sm:hidden flex justify-around items-start py-[54px]'>
                <ul className="list-none z-10 flex gap-[28px] flex-col justify-center items-start">
                        {navLinks.map((nav, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer text-[12px] text-white`}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                    <ul className="list-none z-10 flex flex-col gap-[28px] justify-center items-start">
                        {footerLinks.map((nav, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer text-[12px]
                      text-white
                      ${index === footerLinks.length - 1 ? "mr-0" : "mr-[46px]"}
                      `}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr className="sm:hidden block bg-[#717B8C] opacity-20" />
                <div className='flex justify-between items-center mt-[21px] ' >
                    <div className='flex gap-[21px] items-center  ' >
                        <div className='sm:inline-block hidden h-[54px] border-r pr-[21px]  items-center border-opacity-20 border-[#717B8C]    ' >
                            <div className=" flex social-icons z-10 gap-2" >
                                {
                                    socialMedia.map((item, index) => (
                                        <div key={index} className={`w-[26px] h-[26px] ${index === 0 ? 'bg-primary' : 'bg-black'} rounded-full ${styles.flexCenter}`}>
                                            <a href="https//::www.facebook.com"><img src={item.icon} alt="twitter" /></a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <span className='text-[#86898B] text-[14px]  ' >7500 Bert Street, Euniceville 50001, Seychelles - Antallagi S.A.</span>
                    </div>
                    <ul className="list-none z-10 sm:flex hidden justify-end items-center">
                        {footerLinks.map((nav, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer text-[12px]
                      text-white
                      ${index === footerLinks.length - 1 ? "mr-0" : "mr-[46px]"}
                      `}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer