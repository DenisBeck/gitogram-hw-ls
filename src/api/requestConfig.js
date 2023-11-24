import axios from 'axios'

const baseURL = 'https://api.github.com'

export const makeRequest = ({ url, method = 'get', data = {}, headers = {} }) => axios({
    method,
    baseURL,
    url,
    data,
    headers
})
