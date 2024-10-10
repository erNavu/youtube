import React from 'react'
import { useSelector } from "react-redux";
import { MdOutlineHome } from "react-icons/md";

const list = [
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
    { title: 'Home', icon: MdOutlineHome },
]

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    return (
        <aside className={`${isMenuOpen ? "block" : "hidden"} w-56 fixed top-0 left-0 z-40 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className='grid grid-flow-row gap-2'>
                    {list?.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <li key={index}>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <span>
                                        <Icon fontSize={32} />
                                    </span>
                                    <span className={`ml-2 transition-all duration-300 transform ${!isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>
                                        {item.title}
                                    </span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar
