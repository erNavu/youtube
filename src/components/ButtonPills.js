import React from 'react'

const ButtonPills = () => {
    const list = ['Home', 'Shorts', 'Subscriptions', 'History', 'Playlist', 'Your Videos', 'Watch Later', 'Liked Videos', 'Trending', 'Music', 'Shorts', 'Subscriptions']
    return (
        <div className='overflow-auto whitespace-nowrap scrollbar'>
            {list?.map((item, i) => (
                <button key={i}
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-[12px] px-5 py-2.5 m-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    {item}
                </button>
            ))}

        </div>
    )
}

export default ButtonPills