import React from 'react'
import { dateConverter } from '../../Helpers/post.helper'
import { IPostModel } from '../../Interface/post.interface'

const SinglePost: React.FC<{ post: IPostModel }> = ({ post }) => {
    const { userId, title, body, createdAt, updatedAt, reactions, uuid } = post
    const {day,month,date} = dateConverter(createdAt)
    return (
        <div className="jumbotron">
            <h1 className="display-4">{title}</h1>
            <p className="lead">By {userId}</p>
            <p className="lead">{day},{month} {date}</p>
            <hr className="my-4" />
            <p>{body}</p>
        </div>
    )
}

export default SinglePost
