import request from '../utils/request'

/**
 * 主控制台上
 * @param {*} model
 * @returns
 */
export const getStatistics1 = (model) => request.get('/statistics1', model)
/**
 * 主控制台中
 * @param {*} model
 * @returns
 */
export const getStatistics2 = (model) => request.get('/statistics2', model)
/**
 * 主控制台下
 * @param {*} model
 * @returns
 */
export const getStatistics3 = (model) => request.get('/statistics3', model)
