import React from 'react'
import { parseTextToJSX, RelativeTime } from '../utils/common'
import ExpandableText from './ExpandableText'

const WatchVideoDetails = ({ data }) => {
    const { channelTitle, title, description, publishedAt } = data
    return (
        <div className='dark:text-gray-200'>
            <h2 className='text-lg sm:text-xl mt-4'>{title} </h2>
            <div className='flex items-center my-4'>
                <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-slate-500 text-gray-100 flex items-center justify-center overflow-hidden">
                    <span className="text-xl sm:text-2xl">{channelTitle.charAt(0).toUpperCase()}</span>
                </div>
                <div className="mx-3">
                    <span className="text-gray-300 from-neutral-500">
                        {channelTitle}
                    </span>
                    <span className="inline sm:after:content-['•'] sm:after:mx-2"></span>
                    <br className="sm:hidden" /> {/* Line break for smaller screens */}
                    <RelativeTime timestamp={publishedAt} />
                </div>
                <div className='sm:mx-3'>
                    <button className='dark:bg-slate-100 dark:text-gray-800 rounded-3xl mx-4  py-1 sm:py-2 px-3'>Subscribe</button>
                </div>
            </div>

            <div className='dark:bg-gray-800 bg-gray-300 p-3 my-2 sm:p-4 sm:my-4 rounded-3xl text-sm leading-6 sm:leading-7'>
                <ExpandableText text={parseTextToJSX(description)} />
            </div>

        </div>
    )
}

export default WatchVideoDetails   