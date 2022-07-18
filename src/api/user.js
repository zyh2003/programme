import request from '../utils/request'

/**
 * 登录接口
 * @returns
 */
const getLogin = () => {
  return request({ url: '/login', mathod: 'POST' })
}
export default {
  getLogin
}
