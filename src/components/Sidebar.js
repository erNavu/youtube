import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { SIDEBAR_DATA } from '../utils/dummyData';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    return (
        <aside className={`${isMenuOpen ? "block" : "hidden"} w-56 fixed top-0 left-0 z-40 h-screen pt-16 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-950 dark:border-gray-900`} aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-950">
                <ul className='grid grid-flow-row gap-2'>
                    {SIDEBAR_DATA.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={sectionIndex < SIDEBAR_DATA.length - 1 ? 'border-b border-gray-600 pt-2 pb-4' : ''}>
                            <p className={`py-2 dark:text-gray-100 text-lg font-bold`}>
                                {section.section}
                            </p>
                            {section.items.map((item, itemIndex) => {
                                const Icon = item.icon;

                                return (
                                    <li className='' key={itemIndex + item.title}>
                                        <Link to="/">
                                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 group text-sm">
                                                <span>
                                                    <Icon fontSize={24} />
                                                </span>
                                                <span className={`ml-4 transition-all duration-300 transform ${!isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>
                                                    {item.title}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </div>
                    ))}
                </ul>
                <p className='dark:text-gray-600 text-xs mt-6 mb-2'>© 2024 Google LLC</p>
            </div>
        </aside>
    );
}

export default Sidebar
