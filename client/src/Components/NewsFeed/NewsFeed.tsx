import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllPosts } from "../../Api/userApiCalls";
import { getCookies, isAuth } from "../../Helpers/userAuthHelper"
import { IPostModel } from "../../Interface/post.interface";
import CreatePost from "../CreatePost/CreatePost";
import SinglePost from "./SinglePost";

function NewsFeed() {
    const [state, setState] = useState([])
    let postArray: Array<IPostModel> = []
    const token: string = getCookies('token') as string
    const user = isAuth()
    const { id, uuid } = user
    const query = useQuery('allPosts', async () => {
        const data = await getAllPosts(id, uuid, token)
        return data
    })
    useEffect(() => {
        if (query.data?.data) {
            const { data } = query.data?.data as any
            setState(data)
        }
        return () => {
            console.log('ok');
        }
    }, [query])
    postArray = state.map(state => state[0])
    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-sm-0">
                       
                    </div>
                    <div className="col-lg-10 col-sm-12">
                        {
                            postArray.map((post, idx) => <SinglePost key={idx} post={post} />)
                        }
                    </div>
                    <div className="col-lg-1 col-sm-0">
                       
                    </div>
                </div>
            </div>
    )
}

export default NewsFeed
