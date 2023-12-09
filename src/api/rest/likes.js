import { makeRequest } from '../requestConfig'

export const putLike = (owner, repo) => {
    return makeRequest({
        url: `/user/starred/${owner}/${repo}`,
        method: 'PUT',
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}

export const deleteLike = (owner, repo) => {
    return makeRequest({
        url: `/user/starred/${owner}/${repo}`,
        method: 'DELETE',
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}
