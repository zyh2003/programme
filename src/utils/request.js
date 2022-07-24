import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: ''
})
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    // console.log(token)
    config.headers.token = token
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么

    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
// 统一了传参处理
// const request = (options) => {
//   if (options.method.toLowerCase() === 'get') {
//     options.params = options.data || {}
//   }
//   return service(options)
// }
export default service
