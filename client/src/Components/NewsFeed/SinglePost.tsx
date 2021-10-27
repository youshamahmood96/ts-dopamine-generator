import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getSingleUser } from '../../Api/userApiCalls'
import { dateConverter } from '../../Helpers/post.helper'
import { IPostModel } from '../../Interface/post.interface'

const SinglePost: React.FC<{ post: IPostModel,uId:number,token:string }> = (props) => {
    const [state, setState] = useState()
    const {post,uId,token} = props
    const { title, body, createdAt } = post
    const {day,month,date} = dateConverter(createdAt)
    const query = useQuery('singleUser', async () => {
        const data = await getSingleUser(uId,token)
        return data
    })
    useEffect(() => {
        if (query.data?.data) {
            const { data } = query.data?.data as any
            setState(data)
        }
        return () => {
        }
    }, [query])
    const {firstname, lastname} =  state ? state as any : 'waiting'
    return (
        <div className="jumbotron">
            <h1 className="display-4">{title}</h1>
            <p className="lead">By {firstname} {lastname}</p>
            <p className="lead">{day},{month} {date}</p>
            <hr className="my-4" />
            <p>{body}</p>
        </div>
    )
}

export default SinglePost
