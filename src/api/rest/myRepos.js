import { makeRequest } from '../requestConfig'

export const getMyRepos = (owner) => {
    const paramsString = new URLSearchParams()
    paramsString.set('order', 'desc')
    paramsString.set('sort', 'start')
    // paramsString.set('per_page', '10')

    return makeRequest({
        url: `users/${owner}/repos?${paramsString}`
    })
}
