import { useEffect } from "react";
import { useQuery } from "react-query";
import { getAllPosts } from "../../Api/userApiCalls";
import { getCookies, isAuth } from "../../Helpers/userAuthHelper"
import CreatePost from "../CreatePost/CreatePost";

function NewsFeed() {
    const token:string = getCookies('token') as string    
    const user = isAuth()
    const {id,uuid} = user
    const query = useQuery('allPosts',async()=>{
        const data = await getAllPosts(id,uuid,token)
        return data
    })
    const {data} = query
    console.log(data);
    return (
        <div>
            <CreatePost/>
            hello
        </div>
    )
}

export default NewsFeed
