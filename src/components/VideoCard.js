import React, { useMemo } from 'react'
import { formatDistanceToNow, parseISO } from 'date-fns';

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

const RelativeTime = ({ timestamp }) => {
    // Convert the timestamp (ISO format) to a JavaScript Date object
    const date = parseISO(timestamp);

    // Calculate the distance from the current time to the given date
    const timeAgo = formatDistanceToNow(date, { addSuffix: true });

    return (
        <span className="text-gray-500 text-sm">{timeAgo}</span>
    );
};


const VideoCard = ({ data, searchPage = false }) => {
    const { snippet: { thumbnails, title, channelTitle, publishedAt, description }, statistics } = data

    const formattedViewCount = useMemo(() => {
        if (statistics === undefined) return null
        else return formatViewCount(statistics.viewCount)
    }, [statistics]);

    return (
        <div className={`h-auto max-w-full m-2 rounded-xl dark:text-gray-200 ${searchPage ? 'flex' : ''}`}>
            <img className='cursor-pointer w-full max-w-lg rounded-xl' alt="img" src={thumbnails.medium.url} />
            <div className='flex gap-2 m-2'>
                {!searchPage && <div className="max-w-24">
                    <span className="font-medium text-gray-600 dark:text-gray-200 w-10 h-10 inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-slate-600 border border-gray-300 dark:border-gray-500 shadow-md">
                        {channelTitle.charAt(0)}
                    </span>
                </div>}
                <div>
                    <h2 className={`${!searchPage ? " pb-1 font-bold !overflow-hidden text-ellipsis line-clamp-2" : ""}`}>
                        {title}
                    </h2>
                    {!searchPage && <p className="from-neutral-500">{channelTitle}</p>}


                    {formattedViewCount && <span className="text-sm text-gray-500 from-neutral-500 after:content-['•'] after:mr-2 after:ml-2">{formattedViewCount} views</span>}
                    <RelativeTime timestamp={publishedAt} />
                    {searchPage ? (<div>
                        <div className='flex items-center my-2'>
                            <div className="max-w-24">
                                <span className="font-medium text-gray-600 dark:text-gray-200 w-10 h-10 inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-slate-600 border border-gray-300 dark:border-gray-500 shadow-md">
                                    {channelTitle.charAt(0)}
                                </span>
                            </div>
                            <span className="text-gray-500 pl-4">{channelTitle}</span>
                        </div>
                        <p className="text-gray-500 text-sm">{description}</p>
                    </div>) : null}
                </div>
            </div>
        </div >
    )
}

export default VideoCard