import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { YOUTUBE_COMMENTS_LIST, YOUTUBE_VIDEO_DETAILS } from "../utils/contants"
import CommentsList from './CommentsList';
import WatchVideoDetails from './WatchVideoDetails';

const WatchPage = () => {
    const [commentData, setCommentData] = useState([])
    const [videoDetails, setVideoDetails] = useState([])
    const [searchParams] = useSearchParams();
    const videoIdFromUrl = searchParams.get('v');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    useEffect(() => {
        fetchComments(videoIdFromUrl)
        fetchVideoDetails(videoIdFromUrl)
    }, [videoIdFromUrl])

    const fetchComments = async (id) => {
        const response = await fetch(YOUTUBE_COMMENTS_LIST + id)
        const data = await response.json()
        setCommentData(data.items)
    }
    const fetchVideoDetails = async (id) => {
        const response = await fetch(YOUTUBE_VIDEO_DETAILS + id)
        const data = await response.json()
        setVideoDetails(data?.items)
    }

    return (
        <div className='flex-col sm:flex sm:flex-row dark:text-gray-400 justify-between'>
            <div className='w-full sm:w-8/12'>
                <div className="relative w-full pb-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/` + videoIdFromUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
                {videoDetails?.length && <WatchVideoDetails data={videoDetails[0].snippet} />}
                {commentData?.length && <div className='mx-1 w-full'>
                    <h2 className='sm:text-xl text-lg dark:text-gray-100 my-4'>Comments :</h2>
                    <CommentsList comments={commentData} />
                </div>}
            </div>
            <div className="w-full sm:w-3/12 mt-6 sm:mt-0">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    Side Window coming soon
                </div>
            </div>
        </div>

    )
}

export default WatchPage