import axios from 'axios';

const login = (email, password) => {
    return axios
    .post('http://localhost:1337/auth/local', {
        identifier: email,
        password,
    })
    .then(res => {
        return {
            success: true,
            data: res.data
        };
    })
    .catch( error => {
        return {
            success: false,
            error : error,
        };
    })

}

const registration = (username, email, password) => {
    return axios
        .post('http://localhost:1337/auth/local/register', {
            username,
            email,
            password
        })
        .then(res => {
            return {
                success: false,
                data: res.data
            }
        })
        .catch(error => {
            return {
                success: false,
                error: error
            }
        })
}

export default {
    login,
    registration
};
