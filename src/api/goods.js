import request from '../utils/request'

export const getGoods = (model) => request.get('/goods/1?tab=all', model)
