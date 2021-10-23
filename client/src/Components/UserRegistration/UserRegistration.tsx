import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';
import './UserRegistration.css'
import { useMutation } from 'react-query';
import { userRegistrationApiCall } from '../../Api/userApiCalls';
import { IUserRegister, IRegistrationInput } from '../../Interface/user.interface';
import {Link} from 'react-router-dom'
function UserRegistration() {
    const mutation = useMutation((user:IUserRegister) => {
        return userRegistrationApiCall(user)
    })
    const onSubmit: SubmitHandler<IRegistrationInput> = data => {
       const {firstname,lastname,email,password} = data
       mutation.mutate({
           firstname,
           lastname,
           email,
           password
       })
    };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IRegistrationInput>({
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
                    <label>First Name</label>
                    <input
                        type="text"
                        {...register('firstname')}
                        className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.firstname?.message}</div>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        {...register('lastname')}
                        className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.lastname?.message}</div>
                </div>

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
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        {...register('confirmPassword')}
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''
                            }`}
                    />
                    <div className="invalid-feedback">
                        {errors.confirmPassword?.message}
                    </div>
                </div>


                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </div>
                <p>Already a User? <Link to="/login" >Login</Link> </p>
            </form>
                    </div>
                    <div className="col-sm-2">
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default UserRegistration
