import React from 'react'
import {navLists} from '../constants';
import { appleImg, bagImg, searchImg } from '../utils'

function Navbar() {
    return (
        <header className=' border-red-500 sm:px-10 px-5 w-full py-5 flex justify-between items-center'>
            <nav className='flex justify-between w-full screen-max-width'>
                <img src={appleImg} alt="apple img" width={15} 
                height={18} />
                <div className='flex flex-1 justify-center max-sm:hidden '>
                {navLists.map((nav,
                    i) => (
                        <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                            {nav}
                        </div>
                    ))}
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 '>
                    <img src={searchImg} alt="search" width={18} height={18} />
                    <img src={bagImg} alt="bag" width={18} height={18} />
                </div>
            </nav>
            
        </header>
    )
}

export default Navbar
