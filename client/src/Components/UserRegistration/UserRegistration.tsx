import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';
import './UserRegistration.css'

function UserRegistration() {
    type Inputs = {
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        confirmPassword: string,
    }
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(JSON.stringify(data, null, 2));
    };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>({
        resolver: yupResolver(validationSchema)
    });
    return (
        <div className="register-form">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        {...register('firstname')}
                        className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.firstname?.message}</div>
                </div>

                <div className="form-group">
                    <label>Username</label>
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
            </form>
                    </div>
                    <div className="col-2">
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default UserRegistration
