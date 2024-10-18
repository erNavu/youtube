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

    const handleOnBlur = () => {
        setTimeout(() => setShowSuggestions(false), 200);
    }

    return (
        <header className='grid grid-flow-col dark:text-gray-200 '>
            <div className='flex col-span-1 items-center'>
                <span className='mr-6 cursor-pointer '>
                    <GiHamburgerMenu className='dark:text-gray-200' onClick={() => toggleMenuHandler()} fontSize={24} />
                </span>
                <Link to='/'>
                    <span className='mr-2 flex justify-center items-center'>
                        <BsYoutube className='mr-2' fontSize={32} color='red' />
                        <span className='text-lg'>Youtube</span>
                    </span>
                </Link>
            </div>
            <div className=' relative flex col-span-10 justify-center items-center'>
                <input className='x-5 w-2/3 border border-gray-400 dark:border-gray-700 dark:bg-gray-950 p-2 px-4 rounded-l-full '
                    type='text'
                    value={search}
                    onChange={handleSearch}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={handleOnBlur}
                />
                <button className='w-12 rounded-r-full border border-gray-400 bg-gray-400 dark:border-gray-700 dark:bg-gray-700 p-2 '>
                    <IoIosSearch fontSize={24} />
                </button>
                {suggestionsCache[debouncedSearch]?.length && showSuggestions ? <ul className='absolute w-2/3 shadow-lg top-10 py-4 dark:bg-slate-800 m-2 rounded-lg bg-slate-400'>
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
            </div>
            <div className='flex items-center col-span-1 '>
                User
            </div>

        </header>
    )
}

export default Header