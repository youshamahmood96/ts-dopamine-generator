import * as Yup from 'yup'
const validationSchema = Yup.object().shape({
    firstname: Yup.string()
        .required('firstname is required')
        .max(20, 'firstname must not exceed 20 characters'),
    lastname: Yup.string()
        .required('lastname is required')
        .max(20, 'lastname must not exceed 20 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
});
export default validationSchema