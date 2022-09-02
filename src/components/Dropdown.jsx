import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { arrow, bitcoin } from '../assets'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({menuItems, icon=bitcoin, text="BTC"}) {
  return (
    <Menu as="div" className="relative inline-block w-max-[242px] text-left">
      <div>
        <Menu.Button className="inline-flex justify-between items-center w-full custom-border px-6 h-[52px] font-medium text-white  focus:outline-none">
          <span>20</span>
          <div className='flex items-center'>
          <div className='w-[1px] h-[24px] custom-border' ></div>
            <div className='flex items-center gap-1' >
              <img src={icon} className="mr-1 ml-2" alt="bitcoin" />
              <span> {text} </span>
            </div>
          </div>
          {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
          <img src={arrow} className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" alt="arrow-down" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-full right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menuItems.map(({ title, value }, index) => (
              <Menu.Item key={index} >
                {({ active }) => (
                  <a
                    
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}