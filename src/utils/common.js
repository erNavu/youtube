import { formatDistanceToNow, parseISO } from 'date-fns';
import React from 'react'

export const RelativeTime = ({ timestamp }) => {
    // Convert the timestamp (ISO format) to a JavaScript Date object
    const date = parseISO(timestamp);

    // Calculate the distance from the current time to the given date
    const timeAgo = formatDistanceToNow(date, { addSuffix: true });

    return (
        <span className="text-gray-500 text-sm">{timeAgo}</span>
    );
};


// Utility function to convert plain text into an array of JSX elements
export const parseTextToJSX = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

    const words = text.split(/\n/).map((line, index) => {
        const parts = line.split(' ').map((word, idx) => {
            if (urlRegex.test(word)) {
                return (
                    <a className='text-blue-500 mx-1' key={idx} href={word} target="_blank" rel="noopener noreferrer">
                        {word}
                    </a>
                );
            }
            if (emailRegex.test(word)) {
                return (
                    <a className='text-blue-500 mx-1' key={idx} href={`mailto:${word}`}>
                        {word}
                    </a>
                );
            }
            return <span key={idx}>{word} </span>;
        });

        return (
            <React.Fragment key={index}>
                {parts} <br />
            </React.Fragment>
        );
    });

    return words;
};
