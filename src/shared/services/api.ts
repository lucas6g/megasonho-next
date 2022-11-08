import axios from 'axios'

const api = axios.create({
  baseURL: 'http://megasonho-env-1.eba-s723pugz.sa-east-1.elasticbeanstalk.com'
})

export default api
