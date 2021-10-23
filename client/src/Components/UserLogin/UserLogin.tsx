import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";


import {IGenericResponseObject} from '../../Interface/user.interface'
import { userLoginApiCall } from "../../Api/userApiCalls";
import { IUserLogin } from "../../Interface/user.interface";
import validationSchema from "./validationSchema";
import {authenticate, isAuth} from '../../Helpers/userAuthHelper'
import { loginUser } from "../../Redux/Actions/userActions";

function UserLogin() {
    const history = useHistory()
    if(isAuth()){
        history.push('/')
    }
    const dispatch = useDispatch()
    const mutation = useMutation((user: IUserLogin) => {
        return userLoginApiCall(user)
    })
    const onSubmit: SubmitHandler<IUserLogin> = data => {
        const { email, password } = data
        mutation.mutate({
            email,
            password
        })
        if (
            mutation &&
            mutation.data &&
            mutation.data.data) {
                const {data,accessToken} = mutation.data.data as IGenericResponseObject
                dispatch(loginUser(data))
                authenticate(accessToken,data,()=>{
                    history.push('/')
                })
            }
    };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IUserLogin>({
        resolver: yupResolver(validationSchema)
    });
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-8">
                        <h1 className="m-4" >Welcome !</h1>
                        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>


                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="text"
                                    {...register('email')}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    {...register('password')}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>


                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                            <p>Dont have an account? <Link to="/register" >Register</Link> </p>
                        </form>
                    </div>
                    <div className="col-sm-2">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserLogin
