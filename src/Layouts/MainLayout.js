import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar'
import Header from "../components/Header";

const MainLayout = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-950 dark:border-gray-900">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <Header />
                </div>
            </nav>
            <Sidebar />
            <div className={`${isMenuOpen ? "sm:ml-56" : ""} p-4 pt-20  dark:bg-gray-950`}>
                <Outlet />
            </div>

        </>
    )
}

export default MainLayout
