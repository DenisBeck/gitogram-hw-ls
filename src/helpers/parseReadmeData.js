export const parseReadmeData = (data) => {
    const parser = new DOMParser()
    return parser.parseFromString(data, 'text/html').getElementsByTagName('article')[0]
}
