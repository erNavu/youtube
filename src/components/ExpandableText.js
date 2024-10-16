import React, { useState } from 'react';

const ExpandableText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="">
            <div
                className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-full' : 'max-h-20'
                    }`}
            >
                <p className={`${!isExpanded ? 'line-clamp-4' : ''}`}>
                    {text}
                </p>
            </div>
            <button
                onClick={toggleExpand}
                className="text-blue-500 hover:underline mt-2"
            >
                {isExpanded ? 'Show Less' : 'Read More'}
            </button>
        </div>
    );
};

export default ExpandableText;
