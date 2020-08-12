import axios from 'axios'

const api = axios.create({
  baseURL: 'http://5v-vfq.anonymous.mobile.exp.direct:3333'
})

export default api