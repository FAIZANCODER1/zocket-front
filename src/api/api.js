//History
import { history } from '../history'

//Toaster
import { toast } from 'react-toastify'
import axios from 'axios'
import { BASE_API_URL } from '../constants/apiEndPoints'
import { Config } from '../configs/Config'
import { ADMIN_DETAILS_KEY } from '../constants/constants'
import { toastErrorMessage } from '../constants/message'

/**
 *
 * @param {apiEndpoint} endpoint
 * @param {value} data
 * @param {get,post,patch,delete,put} type
 */
const mainUrl = Config.apiBaseUrl
const adminUserLocalStorage = ADMIN_DETAILS_KEY
// const userData = JSON.parse(localStorage.getItem(ADMIN_DETAILS_KEY))

export const api = async (endpoint, data, type) => {
    let res
    const token = await ((JSON.parse(localStorage.getItem(ADMIN_DETAILS_KEY)) && JSON.parse(localStorage.getItem(ADMIN_DETAILS_KEY)).authToken) || '')
    switch (type) {
        case 'post':
            await axios({
                data,
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth': `${token}`
                },
                url: mainUrl + endpoint
            })
                .then(function (response) {
                    res = response
                })
                .catch((err) => {
                    if (
                        err.response.status === 401 ||
                        err.response.status === 403 ||
                        err.response.status === 503 ||
                        err.response.status === 500
                    ) {
                        localStorage.removeItem(adminUserLocalStorage)
                        history.push('/login')
                        if (err.response.status === 401 || err.response.status === 403) {
                            toast.error(toastErrorMessage.sessionExpired)
                        } else if (err.response.status === 500) {
                            toast.error(toastErrorMessage.internalServerError)
                        } else {
                            toast.error(toastErrorMessage.serviceUnavailable)
                        }
                        return false
                    } else {
                        res = err.response
                    }
                })
            break
        case 'get':
            await axios({
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth': `${token}`
                },
                url: mainUrl + endpoint
            })
                .then(function (response) {
                    res = response
                })
                .catch((err) => {
                    if (
                        err.response.status === 401 ||
                        err.response.status === 403 ||
                        err.response.status === 503 ||
                        err.response.status === 500
                    ) {
                        localStorage.removeItem(adminUserLocalStorage)
                        history.push('/login')
                        if (err.response.status === 401 || err.response.status === 403) {
                            toast.error(toastErrorMessage.sessionExpired)
                        } else if (err.response.status === 500) {
                            toast.error(toastErrorMessage.internalServerError)
                        } else {
                            toast.error(toastErrorMessage.serviceUnavailable)
                        }
                        return false
                    } else {
                        res = err.response
                    }
                })
            break
        case 'put':
            await axios({
                method: 'put',
                data,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                url: mainUrl + endpoint
            })
                .then(function (response) {
                    res = response
                })
                .catch((err) => {
                    if (
                        err.response.status === 401 ||
                        err.response.status === 403 ||
                        err.response.status === 503 ||
                        err.response.status === 500
                    ) {
                        localStorage.removeItem(adminUserLocalStorage)
                        history.push('/login')
                        if (err.response.status === 401 || err.response.status === 403) {
                            toast.error(toastErrorMessage.sessionExpired)
                        } else if (err.response.status === 500) {
                            toast.error(toastErrorMessage.internalServerError)
                        } else {
                            toast.error(toastErrorMessage.serviceUnavailable)
                        }
                        return false
                    } else {
                        res = err.response
                    }
                })
            break
        case 'patch':
            await axios({
                method: 'patch',
                data,
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth': `${token}`
                },
                url: mainUrl + endpoint
            })
                .then(function (response) {
                    res = response
                })
                .catch((err) => {
                    if (
                        err.response.status === 401 ||
                        err.response.status === 403 ||
                        err.response.status === 503 ||
                        err.response.status === 500
                    ) {
                        localStorage.removeItem(adminUserLocalStorage)
                        history.push('/login')
                        if (err.response.status === 401 || err.response.status === 403) {
                            toast.error(toastErrorMessage.sessionExpired)
                        } else if (err.response.status === 500) {
                            toast.error(toastErrorMessage.internalServerError)
                        } else {
                            toast.error(toastErrorMessage.serviceUnavailable)
                        }
                        return false
                    } else {
                        res = err.response
                    }
                })
            break
        case 'delete':
            await axios({
                data,
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                url: mainUrl + endpoint
            })
                .then(function (response) {
                    res = response
                })
                .catch((err) => {
                    if (
                        err.response.status === 401 ||
                        err.response.status === 403 ||
                        err.response.status === 503 ||
                        err.response.status === 500
                    ) {
                        localStorage.removeItem(adminUserLocalStorage)
                        history.push('/login')
                        if (err.response.status === 401 || err.response.status === 403) {
                            toast.error(toastErrorMessage.sessionExpired)
                        } else if (err.response.status === 500) {
                            toast.error(toastErrorMessage.internalServerError)
                        } else {
                            toast.error(toastErrorMessage.serviceUnavailable)
                        }
                        return false
                    } else {
                        res = err.response
                    }
                })
            break
        case 'postWithoutToken':
            await axios({
                method: 'post',
                data,
                headers: {
                    'Content-Type': 'application/json'
                },
                url: mainUrl + endpoint
            })
                .then(function (response) {
                    res = response
                })
                .catch((err) => {
                    if (
                        err.response.status === 401 ||
                        err.response.status === 403 ||
                        err.response.status === 503 ||
                        err.response.status === 500
                    ) {
                        localStorage.removeItem(adminUserLocalStorage)
                        history.push('/login')
                        if (err.response.status === 401 || err.response.status === 403) {
                            toast.error(toastErrorMessage.sessionExpired)
                        } else if (err.response.status === 500) {
                            toast.error(toastErrorMessage.internalServerError)
                        } else {
                            toast.error(toastErrorMessage.serviceUnavailable)
                        }
                        return false
                    } else {
                        res = err.response
                    }
                })
            break
        case 'postFormData':
            await axios({
                data,
                method: 'post',
                headers: {
                    'Content-Type': 'form-data',
                    Authorization: `Bearer ${token}`
                },
                url: mainUrl + endpoint
            })
                .then(function (response) {
                    res = response
                })
                .catch((err) => {
                    if (
                        err.response.status === 401 ||
                        err.response.status === 403 ||
                        err.response.status === 503 ||
                        err.response.status === 500
                    ) {
                        localStorage.removeItem(adminUserLocalStorage)
                        history.push('/login')
                        if (err.response.status === 401 || err.response.status === 403) {
                            toast.error(toastErrorMessage.sessionExpired)
                        } else if (err.response.status === 500) {
                            toast.error(toastErrorMessage.internalServerError)
                        } else {
                            toast.error(toastErrorMessage.serviceUnavailable)
                        }
                        return false
                    } else {
                        res = err.response
                    }
                })
            break
        case 'patchFormData':
            await axios({
                data,
                method: 'patch',
                headers: {
                    'Content-Type': 'form-data',
                    Authorization: `Bearer ${token}`
                },
                url: mainUrl + endpoint
            })
                .then(function (response) {
                    res = response
                })
                .catch((err) => {
                    if (
                        err.response.status === 401 ||
                        err.response.status === 403 ||
                        err.response.status === 503 ||
                        err.response.status === 500
                    ) {
                        localStorage.removeItem(adminUserLocalStorage)
                        history.push('/login')
                        if (err.response.status === 401 || err.response.status === 403) {
                            toast.error(toastErrorMessage.sessionExpired)
                        } else if (err.response.status === 500) {
                            toast.error(toastErrorMessage.internalServerError)
                        } else {
                            toast.error(toastErrorMessage.serviceUnavailable)
                        }
                        return false
                    } else {
                        res = err.response
                    }
                })
            break

        default:
            return true
    }
    return res
}
