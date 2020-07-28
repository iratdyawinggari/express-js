export function getProduct() {
    return fetch(process.env.REACT_APP_WS_URL + '/main', {
        method: 'GET'
    })
}

export function addUser(email, password) {
    return fetch(process.env.REACT_APP_WS_URL + '/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    })
}