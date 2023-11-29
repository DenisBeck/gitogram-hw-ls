import { makeRequest } from '../requestConfig'

export const getRepoReadme = (owner, repo) => {
    return makeRequest({
        url: `/repos/${owner}/${repo}/readme`,
        headers: {
            accept: 'application/vnd.github.v3.html+json'
        }
    })
}

// return axios({
//     method: 'GET',
//     baseURL: 'https://api.github.com',
//     url: `/repos/{${owner}}/{${repo}}/readme`
// })
