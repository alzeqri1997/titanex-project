import { useState } from "react";

import { close, menu } from '../assets';
import { navLinks, socialMedia } from "../constants"
import styles from "../styles";


const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <nav className="w-full py-9 navbar border-b-1 relative" >
      <div className="flex justify-between items-center " >
        <span className="text-2xl z-10 "> Titanex </span>
        
        <ul className="list-none z-10 sm:flex hidden justify-end items-center">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className={`cursor-pointer text-[18px]
              text-white
              ${index === navLinks.length - 1 ? "mr-0" : "mr-[46px]"}
              `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:flex hidden social-icons z-10 gap-2" >
          {
            socialMedia.map((item, index) => (
              <div key={index} className={`w-[26px] h-[26px] ${index === 0  ? 'bg-primary' : 'bg-black'} rounded-full ${styles.flexCenter}`}>
                <a href=""><img src={item.icon} alt="twitter" /></a>
              </div>
            ))
          }
          
        </div>
      <div className="sm:hidden z-20 relative flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-10"
          onClick={()=> setToggle(!toggle)}
        />

        <div className={`${
          !toggle ? "hidden" : "flex"
          } z-10 p-6 flex-col bg-white absolute top-20 right-0 mx-4 my-2 w-[80%] rounded-xl sidebar `} >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-medium cursor-pointer text-black text-[16px]
                ${index === navLinks.length -1 ? "mb-b" : "mb-4"}
                `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            </ul>
            
            <div className="sm:hidden mt-4  flex social-icons z-10 gap-2" >
          {
            socialMedia.map((item, index) => (
              <div key={index} className={`w-[26px] h-[26px] ${index === 0  ? 'bg-primary' : 'bg-black'} rounded-full ${styles.flexCenter}`}>
                <a href=""><img src={item.icon} alt="twitter" /></a>
              </div>
            ))
          }
          
        </div>
        </div>
      </div>
      </div>


      <div className=" md:w-[704px] w-[400px] z-0  md:h-[704px] h-[400px] absolute blur-[130px] md:top-[-298px] top-[-200px] md:right-[0] right-[-130px]   rounded-full bg-[#3B145D]" ></div>
      <div className=" md:w-[704px] w-[400px] z-0  md:h-[704px] h-[400px] absolute blur-[130px] md:top-[-298px] top-[-200px] lg:left-[100px] sm:left-[50px] left[-130px]  rounded-full bg-[#1F1C64]" ></div>
    </nav>
  )
}

export default Navbar;