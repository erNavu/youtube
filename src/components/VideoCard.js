import React, { useMemo } from 'react'
import { RelativeTime } from '../utils/common'

const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
        // Divide by 1M and format to one decimal place
        const millionCount = (viewCount / 1000000).toFixed(1);
        // Remove trailing '.0' if present
        return millionCount.endsWith('.0') ? `${parseInt(millionCount)}M` : `${millionCount}M`;
    } else if (viewCount >= 1000) {
        // Divide by 1K and format with no decimals
        return `${(viewCount / 1000).toFixed(0)}K`;
    } else {
        // Return the view count with commas
        return viewCount.toLocaleString();
    }
};

const VideoCard = ({ data, searchPage = false }) => {
    const { snippet: { thumbnails, title, channelTitle, publishedAt, description }, statistics } = data

    const formattedViewCount = useMemo(() => {
        if (statistics === undefined) return null
        else return formatViewCount(statistics.viewCount)
    }, [statistics]);

    return (
        <div className={`h-auto max-w-full sm:m-2 rounded-xl dark:text-gray-200 ${searchPage ? 'sm:flex' : ''}`}>
            <img className='cursor-pointer w-full max-w-lg rounded-xl' alt="img" src={thumbnails.medium.url} />
            <div className='flex gap-1 m-1 sm:gap-2 sm:m-2'>
                {!searchPage && <div className="max-w-24">
                    <span className="font-medium text-gray-600 dark:text-gray-200 w-7 h-7 sm:w-10 sm:h-10 inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-slate-600 border border-gray-300 dark:border-gray-500 shadow-md">
                        {channelTitle.charAt(0)}
                    </span>
                </div>}
                <div>
                    <h2 className={`${!searchPage ? " pb-1 text-sm sm:text-base font-bold !overflow-hidden text-ellipsis line-clamp-2 break-all" : ""}`}>
                        {title}
                    </h2>
                    {!searchPage && <p className="text-sm sm:text-base break-all">{channelTitle}</p>}

                    {formattedViewCount && <span className="sm:text-sm text-xs text-gray-500 from-neutral-500 after:content-['•'] after:mr-2 after:ml-2">{formattedViewCount} views</span>}
                    <RelativeTime timestamp={publishedAt} />
                    {searchPage ? (<div>
                        <div className='flex items-center sm:my-2'>
                            <div className="max-w-24">
                                <span className="font-medium text-gray-600 dark:text-gray-200 w-10 h-10 inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-slate-600 border border-gray-300 dark:border-gray-500 shadow-md">
                                    {channelTitle.charAt(0)}
                                </span>
                            </div>
                            <span className="text-gray-500 pl-4 sm:mr-0 mr-2 break-all">{channelTitle}</span>
                        </div>
                        <p className="text-gray-500 sm:text-sm text-xs sm:mr-0 mt-1 mr-2 break-all" >{description}</p>
                    </div>) : null}
                </div>
            </div>
        </div >
    )
}

export default VideoCard