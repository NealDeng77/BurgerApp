import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburgerapp-d9e7c.firebaseio.com/'
})

export default instance;