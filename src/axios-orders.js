import axios from 'axios'

const instance = axios.create({
    baseURL:"https://react-foodcart.firebaseio.com/"
})

export default instance