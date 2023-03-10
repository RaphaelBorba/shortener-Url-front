import axios from "axios";

export const urlAxios = 'https://api-shortly-arw0.onrender.com'

export function postSingIn(path, body) {

    const promise = axios.post(`${urlAxios + path}`, body)
    return promise
}

export function postSingUp(path, body) {

    const promise = axios.post(`${urlAxios + path}`, body)
    return promise
}

export function getRanking() {

    const promise = axios.get(`${urlAxios}/ranking`)
    return promise
}

export function getUser(token) {

    const promise = axios.get(`${urlAxios}/users/me`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    return promise
}

export function deleteUrl(urlId, token) {

    const promise = axios.delete(`${urlAxios}/urls/${urlId}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    return promise
}

export function postUrl(body, token) {

    const promise = axios.post(`${urlAxios}/urls/shorten`, body, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    return promise
}