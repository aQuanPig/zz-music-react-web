import axios from 'axios'

const instance = axios.create({
  baseURL: "http://123.207.32.32:9001/"
})

instance.interceptors.request.use(config => {
  return config
}, err => {

})

instance.interceptors.response.use(result => {
  return result.data
}, err => {

})
export default instance