import request from '../utils/request'

/**
 * 商品管理
 * @param {*} model
 * @returns
 */
export const getGoods = (name) => request.get(`/goods/1?tab=${name}`)
/**
 * 商品分类
 * @param {*} model
 * @returns
 */
export const getCategory = (model) => request.get('/category', model)
