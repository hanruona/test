import axios from 'axios';
import require from '../require/index';
export function login_fn(params) {
    return require.post("/login",params)
}

export function register_fn(params) {
    return axios.post("/register", params)
}