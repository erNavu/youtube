import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { YOUTUBE_SEARCH_LIST } from '../utils/contants';
import { searchResults } from '../utils/searchSlice'
import VideoCard from './VideoCard'

const ResultsPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const videoData = useSelector(store => store.search.results)
    const searchQueryFromUrl = searchParams.get('search_query');
    const [showMessage, setShowMessage] = useState('')

    useEffect(() => {
        if (searchQueryFromUrl === null) navigate("/results?search_query=");

        if (searchQueryFromUrl !== '') {
            fetchSearchListData(searchQueryFromUrl)
        }
        else {
            setShowMessage('No Results Found')
            dispatch(searchResults([]))
        }
    }, [searchQueryFromUrl])

    const fetchSearchListData = async (searchedItem) => {
        const response = await fetch(YOUTUBE_SEARCH_LIST + searchedItem)
        const data = await response.json()
        dispatch(searchResults(data?.items))
    }

    if (showMessage) return (<div className='h-[88vh] flex justify-center items-center'><h1 className='dark:text-gray-200'>{showMessage}</h1></div>)

    return (
        <div>
            <div className='grid ml-16 mr-40 gap-y-6'>
                {videoData.length ? videoData.map((video) => {
                    let id = typeof video.id === 'string' ? video.id : (video.id.videoId)
                    if (id === undefined) return null
                    return (
                        <Link to={'/watch?v=' + id} key={id} >
                            <VideoCard data={video} searchPage />
                        </Link>
                    )
                })
                    : null}

            </div>
        </div>
    )
}

export default ResultsPage  