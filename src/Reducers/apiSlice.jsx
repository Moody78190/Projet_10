// apiSlice.jsx
export const login = (email, password) => {

    return fetch('http://localhost:3001/api/v1/user/login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data
        })
}

export const getUser = token => {
    return fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => data)
}

export const newUserName = async (newUsername, token) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'post',
        body: JSON.stringify({ newUsername }),
        headers: { 
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}`
        }
    });
    return await response.json();
};
