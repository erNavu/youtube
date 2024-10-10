import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from "../utils/appSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";

const Header = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <header className='grid grid-flow-col '>
            <div className='flex col-span-1 items-center'>
                <span className='mr-6 cursor-pointer dark:text-white'>
                    <GiHamburgerMenu onClick={() => toggleMenuHandler()} fontSize={24} />
                </span>
                <span className='mr-2 flex justify-center items-center'>
                    <BsYoutube className='mr-2' fontSize={32} color='red' />
                    <span className='text-lg dark:text-white'>Youtube</span>
                </span>
            </div>
            <div className='flex col-span-10 justify-center items-center'>
                <input className='x-5 w-2/3 border border-gray-400 p-2 px-4 rounded-l-full ' type='text' />
                <button className='w-12 rounded-r-full border border-gray-400 p-2 dark:text-white'><IoIosSearch fontSize={24} /></button>
            </div>
            <div className='flex items-center col-span-1 dark:text-white'>
                User
            </div>

        </header>
    )
}

export default Header