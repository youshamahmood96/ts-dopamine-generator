import { isAuth } from "../../Helpers/userAuthHelper"
import CreatePost from "../CreatePost/CreatePost";

function NewsFeed() {
    const user = isAuth()
    console.log(user);
    
    return (
        <div>
            <CreatePost/>
            hello
        </div>
    )
}

export default NewsFeed
