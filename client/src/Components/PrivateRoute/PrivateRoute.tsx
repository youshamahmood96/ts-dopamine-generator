import React from 'react'
import { useEffect } from "react"
import { useHistory } from "react-router";
import {isAuth} from '../../Helpers/userAuthHelper'

const PrivateRoute:React.FC<React.ReactNode> = ({children}) => {
    const history = useHistory()    
    useEffect(()=>{
        if(!isAuth()){
          history.push('/login')
        }
    },[history])
    return (
       <React.Fragment>
           {children}
       </React.Fragment>
    )
}

export default PrivateRoute
