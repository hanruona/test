import axios from 'axios';

let instance = axios.create({})

instance.interceptors.request.use(
    response => {
        response.headers['token'] = '123456';
        response.headers['id'] = 'qwer'
        return response
    }
)

instance.interceptors.response.use(
    res => {
        return res
    },
    err => {
        window.location.href = 'http://localhost:3000'
    }
)
export default instance6+3.5