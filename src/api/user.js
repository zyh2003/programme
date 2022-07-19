import request from '../utils/request'

/**
 * 登录接口
 * @param {*} model
 * @returns
 */
export const getLogin = (model) => request.post('/login', model)
/**
 * 用户信息
 * @param {*} model
 * @returns
 */
export const getInfo = (model) => request.post('/getinfo', model)
