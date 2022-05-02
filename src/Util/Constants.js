export function getUrl() {
    return 'https://localhost:44382/api'
}

export function getHeader(token) {
    const header = {
        headers: { "Authorization": `Bearer ${token}` }
    }
    return header
}