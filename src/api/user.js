import request from '../utils/request'

/**
 * 登录接口
 * @param {*} model
 * @returns
 */
export const getLogin = (model) => request.post('/admin/login', model)
