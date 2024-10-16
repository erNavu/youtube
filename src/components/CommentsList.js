import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    return comments.map((comment) => {
        const { snippet: { topLevelComment: { snippet: { authorDisplayName, textDisplay, authorProfileImageUrl, updatedAt } } }, replies } = comment
        return (<Comment
            key={comment.id}
            authorDisplayName={authorDisplayName}
            textDisplay={textDisplay}
            authorProfileImageUrl={authorProfileImageUrl}
            updatedAt={updatedAt}
            replies={replies}
            showReplySection={false}
        />)
    })
}

export default CommentsList