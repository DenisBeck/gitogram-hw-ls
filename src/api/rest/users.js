import { makeRequest } from '../requestConfig'

export const getUsers = () => {
    const paramsString = new URLSearchParams()
    paramsString.set('order', 'asc')
    paramsString.set('sort', 'start')
    paramsString.set('per_page', '20')

    return makeRequest({
        url: `/users?${paramsString.toString()}`
    })
}
