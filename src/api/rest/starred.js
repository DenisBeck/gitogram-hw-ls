import { makeRequest } from '../requestConfig'

export const getStarred = () => {
    return makeRequest({
        url: '/user/starred',
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}
