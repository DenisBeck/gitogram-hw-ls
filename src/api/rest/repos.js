import { makeRequest } from '../requestConfig'
import { getTwoDigitValue } from '@/helpers/getTwoDigitsValue'

export const getRepos = (lang = 'javascript') => {
    const date = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
    const formatDate = `${date.getFullYear()}-${getTwoDigitValue(date.getMonth() + 1)}-${getTwoDigitValue(date.getDate())}`

    const paramsString = new URLSearchParams()
    paramsString.set('order', 'desc')
    paramsString.set('sort', 'start')
    paramsString.set('q', `language:${lang} created:>${formatDate}`)
    paramsString.set('per_page', '10')

    return makeRequest({
        url: `/search/repositories?${paramsString.toString()}`
    })
}
