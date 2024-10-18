import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import VideoCard from './VideoCard'
import { videosList } from "../utils/appSlice";
import { YOUTUBE_VIDEO_API } from '../utils/contants'
import { useDispatch, useSelector } from 'react-redux'

const VideoCardsContainer = () => {

    const videoData = useSelector(store => store.app.videosList)

    const dispatch = useDispatch()

    useEffect(() => {
        if (videoData.length === 0) {
            fetchVideoListData()
        }
    }, [videoData])

    const fetchVideoListData = async () => {
        const response = await fetch(YOUTUBE_VIDEO_API)
        const data = await response.json()
        dispatch(videosList(data?.items))
    }

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-8'>
            {videoData.length ? videoData.map((video) => {
                let id = typeof video.id === 'string' ? video.id : video.id.videoId
                return (
                    <Link to={'/watch?v=' + id} key={id} >
                        <VideoCard data={video} />
                    </Link>
                )
            })
                : null}

        </div>
    )
}

export default VideoCardsContainer

