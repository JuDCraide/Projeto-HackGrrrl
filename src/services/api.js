import axios from 'axios'

const api = axios.create({
    baseURL:'https://backend-hack-grrrl.herokuapp.com/'
})

export default api;
