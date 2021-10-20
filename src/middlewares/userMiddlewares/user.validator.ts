import {check} from 'express-validator'
class Validation{
    firstname(){
        return check('firstname')
        .not()
        .isEmpty()
        .withMessage('First name is required')
    }
    lastname(){
        return check('lastname')
        .not()
        .isEmpty()
        .withMessage('Last name is required')
    }
    email(){
        return check('email')
        .isEmail()
        .withMessage('Email format invalid')
    }
    password(){
        return check('password')
        .isLength({min:6})
        .withMessage('Must be at least 6 characters long')
    }
}

const validator = new Validation()

export const userSignupValidator = [
    validator.firstname(),
    validator.lastname(),
    validator.email(),
    validator.password()
]
