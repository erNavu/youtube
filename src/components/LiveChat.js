import React, { useEffect, useState } from 'react'
import { generateRandomText } from '../utils/common'
import { SiLivechat } from "react-icons/si";
import { LIVE_MESSAGES, USERS_NAME } from '../utils/dummyData';
import { useDispatch, useSelector } from 'react-redux';
import { addLiveMessage } from '../utils/chatSlice';
import LiveChatMessage from './LiveChatMessage';

const LiveChat = () => {
    const [inputMessage, setInputMessage] = useState('')
    const dispatch = useDispatch()
    const liveMessage = useSelector(store => store.chat.liveMessages)

    useEffect(() => {
        const interval = setInterval(() => {
            const name = generateRandomText(USERS_NAME)
            const message = generateRandomText(LIVE_MESSAGES)
            dispatch(addLiveMessage({ name, message }))
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        dispatch(addLiveMessage({ name: 'Japnaaz', message: inputMessage }))
        setInputMessage('')
    }

    return (
        <div className="w-full h-[88vh] sm:relative sm:mx-4 sm:w-4/12 mt-6 sm:mt-0 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col">
            <div className='m-2 mx-3 flex items-center sm:text-xl'>
                <span className='mr-3'><SiLivechat /></span>
                <span >LIVE CHAT</span>
            </div>
            <div className="py-2 overflow-y-scroll flex-1 flex flex-col-reverse bg-white dark:bg-gray-700 shadow-inner">
                <div className="space-y-2">
                    {liveMessage?.length ? liveMessage.map((msg, index) => (
                        <LiveChatMessage key={index} msg={msg} />
                    )) : null}
                </div>
            </div>
            <form
                onSubmit={handleMessageSubmit}
                className="w-full p-4 bg-white dark:bg-gray-800 flex items-center space-x-2 rounded-b-lg">
                <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default LiveChat  