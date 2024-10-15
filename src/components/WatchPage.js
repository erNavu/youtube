import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoIdFromUrl = searchParams.get('v');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div>
            <iframe
                width="1000"
                height="600"
                src={`https://www.youtube.com/embed/` + videoIdFromUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>

    )
}

export default WatchPage