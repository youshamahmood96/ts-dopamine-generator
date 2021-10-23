import { IUserModel } from './../Interface/user.interface';
import cookie from 'js-cookie'
export const setCookies = (key: string, value: string) => {
        cookie.set(key, value, {
                expires: 1
        })
}

export const removeCookies = (key: string) => {
        cookie.remove(key, {
                expires: 1
        })
}

export const getCookies = (key: string) => {
        return cookie.get(key)
}

export const setLocalStorage = (key: string, value: object) => {
        localStorage.setItem(key, JSON.stringify(value))
}

export const removeLocalStorage = (key: string) => {
        localStorage.removeItem(key)
}
export const getLocalStorage = (key: string) => {
        localStorage.getItem(JSON.stringify(key))
}

export const authenticate = (token: string, userData: IUserModel, next: () => void) => {
        setCookies('token', token)
        setLocalStorage('user', userData)
        next()
}

export const isAuth = (): boolean | any => {
        const cookieChecked = getCookies('token')
        if (cookieChecked) {
                if (localStorage.getItem('user')) {
                        return JSON.parse(localStorage.getItem('user') || '{}')
                }
                else {
                        return false
                }
        }
        else {
                return false
        }

}
