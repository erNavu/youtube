import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RelativeTime } from '../utils/common';

const Comment = ({ ...props }) => {
    const [showReply, setShowReply] = useState(false)
    const [imgError, setImgError] = useState(false);
    const { authorDisplayName, textDisplay, authorProfileImageUrl, updatedAt, replies, showReplySection } = props
    return (
        <div className='flex dark:text-gray-300 my-5 w-full'>
            <div className={`${showReplySection ? "min-w-10" : "min-w-14"} ml-1 mr-3`}>
                {!imgError ? <img
                    className={`${showReplySection ? "w-10" : "w-14"} rounded-full`}
                    src={authorProfileImageUrl} alt="user"
                    onError={() => setImgError(true)}
                /> : <div className="relative w-14 h-14 mr-2 rounded-full bg-slate-500 text-gray-100 flex items-center justify-center overflow-hidden">
                    <span className="text-2xl">{authorDisplayName.charAt(1).toUpperCase()}</span>
                </div>}

            </div>
            <div className='mr-4'>
                <div>
                    <span className="after:content-['•'] after:mr-2 after:ml-2">{authorDisplayName}</span>
                    <RelativeTime timestamp={updatedAt} />
                </div>
                <p className='text-sm mx-1 my-2 text-justify'>{textDisplay}</p>
                {replies?.comments?.length && <div>
                    <div onClick={() => setShowReply(!showReply)} className='flex items-center mt-3 mb-1 text-blue-700'>
                        <span className='mr-1'>{replies?.comments.length} replies</span>
                        {showReply ? <IoIosArrowUp className='mt-1 cursor-pointer' fontSize={20} /> :
                            <IoIosArrowDown className='mt-1 cursor-pointer' fontSize={20} />}

                    </div>
                    {showReply && replies?.comments.map(reply => <Comment
                        key={reply.id}
                        authorDisplayName={reply.snippet.authorDisplayName}
                        textDisplay={reply.snippet.textDisplay}
                        authorProfileImageUrl={reply.snippet.authorProfileImageUrl}
                        updatedAt={reply.snippet.updatedAt}
                        showReplySection={true}
                    />)}
                </div>}
            </div>
        </div>
    )
}

export default Comment