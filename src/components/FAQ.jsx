import React from 'react'
import { Disclosure } from '@headlessui/react'
import { arrow } from '../assets'
import { faq } from '../constants'

const FAQ = () => {
    return (
        <div className="w-full">
            {faq.map(({ title, content }, index) => (
                <div className={`${faq.length - 1 !== index ? 'mb-[18px]' : ''} mx-auto w-full border-[#15181D] border text-white `}  >
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className={`${open ? 'bg-transparent' : 'bg-[#15181D]'} flex w-full justify-between bg-transparent px-[29px] py-[25px] text-left text-[20px] font-bold  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75`} >
                                    <span>{title}</span>
                                    <img src={arrow}
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 `}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className={`${open ? 'bg-transparent' : 'bg-[#15181D]'} px-[29px] text-[14px] text-[#CCCCCC] leading-[21px] pb-[33px]  `}  >
                                    {content}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            ))}
        </div>
    )
}

export default FAQ