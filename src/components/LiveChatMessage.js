import React from 'react'

const LiveChatMessage = ({ msg }) => {
    return (
        <div className='flex p-2 m-1 bg-slate-500 rounded-xl'>
            <div className="relative w-8 h-8 mr-2 rounded-full bg-slate-800 text-gray-100 flex items-center justify-center overflow-hidden">
                <span className="sm:text-lg text-sm">{msg.name.charAt(0).toUpperCase()}</span>
            </div>
            <div className='flex-1'>
                <p className='text-lg font-bold dark:text-gray-200'>{msg.name}</p>
                <p className='text-sm dark:text-gray-400'>{msg.message}</p>
            </div>
        </div>
    )
}

export default LiveChatMessage