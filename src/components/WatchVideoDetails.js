import React from 'react'
import { parseTextToJSX, RelativeTime } from '../utils/common'
import ExpandableText from './ExpandableText'

const WatchVideoDetails = ({ data }) => {
    const { channelTitle, title, description, publishedAt } = data
    return (
        <div className='dark:text-gray-200'>
            <h2 className='text-xl mt-4'>{title} </h2>
            <div className='flex items-center my-4'>
                <div className="relative w-12 h-12 mr-2 rounded-full bg-slate-500 text-gray-100 flex items-center justify-center overflow-hidden">
                    <span className="text-2xl">{channelTitle.charAt(0).toUpperCase()}</span>
                </div>
                <div className='mx-3'>
                    <span className="text-gray-300 from-neutral-500 after:content-['•'] after:mr-2 after:ml-2">{channelTitle}</span>
                    <RelativeTime timestamp={publishedAt} />
                </div>
                <div className='mx-3'>
                    <button className='dark:bg-slate-100 dark:text-gray-800 rounded-3xl mx-4 py-2 px-3'>Subscribe</button>
                </div>
            </div>

            <div className='dark:bg-gray-800 bg-gray-300 p-4 my-4 rounded-3xl text-sm leading-7'>
                <ExpandableText text={parseTextToJSX(description)} />
            </div>

        </div>
    )
}

export default WatchVideoDetails   