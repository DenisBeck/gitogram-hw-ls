import { makeRequest } from '../requestConfig'

export const getIssues = (owner, repo) => {
    return makeRequest({
        url: `/repos/${owner}/${repo}/issues`
    })
}
