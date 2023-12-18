import { makeRequest } from '../requestConfig'

export const getFollowers = (user) => {
    return makeRequest({
        url: `/users/${user}/following`,
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}

export const putFollowing = (user) => {
    return makeRequest({
        url: `/user/following/${user}`,
        method: 'PUT',
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}

export const deleteFollowing = (user) => {
    return makeRequest({
        url: `/user/following/${user}`,
        method: 'DELETE',
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}
