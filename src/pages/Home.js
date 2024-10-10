import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../components/Sidebar'
import MainContainer from '../components/MainContainer'
import Header from "../components/Header";

const Home = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    return (
        <>
            <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <Header />
                </div>
            </nav>
            <Sidebar />
            <div className={`${isMenuOpen ? "sm:ml-56" : "sm:ml-4"} p-4 pt-20`}>
                <MainContainer />
            </div>

        </>
    )
}

export default Home
