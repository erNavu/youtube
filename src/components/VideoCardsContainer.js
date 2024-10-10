import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEO_API } from '../utils/contants'

const VideoCardsContainer = () => {

    const [videoData, setVideoData] = useState([])

    useEffect(() => {

        const fetchCards = async () => {
            const response = await fetch(YOUTUBE_VIDEO_API)
            const data = await response.json()
            setVideoData(data?.items)
            console.log(data?.items)
        }


        fetchCards()
    }, [])

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8'>
            {videoData.length ? videoData.map((video) => (
                <VideoCard key={video.id} data={video} />
            ))
                : null}

        </div>
    )
}

export default VideoCardsContainer