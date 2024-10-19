import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../utils/useDebounce';
import { toggleMenu } from "../utils/appSlice";
import { searchSuggestionsCache } from '../utils/searchSlice'
import { YOUTUBE_SEARCH_SUGGESTIONS } from '../utils/contants';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [showSuggestions, setShowSuggestions] = useState(false)
    const debouncedSearch = useDebounce(search, 200);
    const searchQueryFromUrl = searchParams.get('search_query');
    const suggestionsCache = useSelector(store => store.search.suggestionsCache)

    // Effect to set initial search value from URL
    useEffect(() => {
        if (searchQueryFromUrl !== null) setSearch(searchQueryFromUrl)
    }, [searchQueryFromUrl])

    useEffect(() => {
        if (showSuggestions && !suggestionsCache[debouncedSearch]) {
            fetchSearchSuggestions(debouncedSearch)
        }
    }, [debouncedSearch, showSuggestions, suggestionsCache])

    const fetchSearchSuggestions = async (debouncedSearch) => {
        const response = await fetch(YOUTUBE_SEARCH_SUGGESTIONS + debouncedSearch)
        const data = await response.json()
        const result = { [debouncedSearch]: data[1], ...suggestionsCache }
        dispatch(searchSuggestionsCache(result))
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    const handleSearch = (e) => {
        setSearch(e.target.value)
        setShowSuggestions(true)
        if (e.target.value === '') {
            setShowSuggestions(false)
        }
    }

    const handleSuggestionsClick = (item) => {
        setSearch(item)
        setShowSuggestions(false)
        const id = item.replaceAll(' ', '+')
        navigate("/results?search_query=" + id);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        if (search !== '') {
            setShowSuggestions(false)
            const id = search.replaceAll(' ', '+')
            navigate("/results?search_query=" + id);
        }
    }


    const handleOnBlur = () => {
        setTimeout(() => setShowSuggestions(false), 200);
    }

    return (
        <header className='grid grid-flow-col dark:text-gray-200 '>
            <div className='flex col-span-1 items-center'>
                <span className='sm:mr-6 mr-2 cursor-pointer '>
                    <GiHamburgerMenu className='dark:text-gray-200 text-lg sm:text-3xl' onClick={() => toggleMenuHandler()} />
                </span>
                <Link to='/'>
                    <span className='sm:mr-2 mr-1 flex justify-center items-center'>
                        <BsYoutube className='sm:mr-2 mr-[2px] text-xl sm:text-3xl' color='red' />
                        <span className='sm:text-lg hidden sm:inline'>Youtube</span>
                    </span>
                </Link>
            </div>
            <form
                onSubmit={handleSearchSubmit}
                className=' relative flex col-span-10 justify-center items-center'>
                <input className='w-2/3 border border-gray-400 dark:border-gray-700 dark:bg-gray-950 p-1 px-2 sm:p-2 sm:px-4 rounded-l-full '
                    type='text'
                    value={search}
                    onChange={handleSearch}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={handleOnBlur}
                />
                <button className='w-12 rounded-r-full border border-gray-400 bg-gray-400 dark:border-gray-700 dark:bg-gray-700 sm:p-2 p-[6px]'>
                    <IoIosSearch className='text-xl sm:text-2xl' />
                </button>
                {suggestionsCache[debouncedSearch]?.length && showSuggestions ? <ul className='absolute sm:w-2/3 shadow-lg top-7 sm:top-10 py-2 sm:py-4 dark:bg-slate-800 m-2 rounded-lg bg-slate-400'>
                    {suggestionsCache[debouncedSearch].map((item, index) => (
                        <li
                            key={index + item}
                            className="p-2 px-6 hover:bg-gray-600 flex items-center"
                            onClick={() => handleSuggestionsClick(item)}
                        >
                            <CiSearch fontSize={20} />
                            <span className='px-3'>{item}</span>
                        </li>
                    ))} </ul> : null}
            </form>
            <div className='flex items-center col-span-1 '>
                <span className="mr-4 text-xl sm:inline hidden">Navpreet </span>
                <div className="relative sm:hidden w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-600 text-gray-100 flex items-center justify-center overflow-hidden">
                    <span className="text-xl sm:text-2xl">N</span>
                </div>
            </div>

        </header>
    )
}

export default Header