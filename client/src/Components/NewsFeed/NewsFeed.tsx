import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import {isAuth} from '../../Helpers/userAuthHelper'

function NewsFeed() {
    const store = useSelector(state=>state)
    const history = useHistory()
    console.log(isAuth());
    
    useEffect(()=>{
        if(!isAuth()){
          history.push('/login')
        }
    },[history])
    return (
        <div>
            hello
        </div>
    )
}

export default NewsFeed
