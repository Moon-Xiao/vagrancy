import Axios from 'axios'

/**
 * @typedef {Object}GetListOptions
 *
 * @property {Number} page       - 第几页数据
 * @property {Number} page_size  - 每页最多多少条数据
 * @property {String} select     - 'a b c d' 返回数据中应包括 a b c d四个域（类比SQL SELECT）
 * @property {String} sort       - 'a -b c -d' 按a（升序）b（降序）c（升序）d（降序）依次排列
 * @property {String} search     - 搜索的字符串
 */

/**
 *
 * @param {string}model
 * @param {GetListOptions}options
 * @return {Promise.<void>}
 */
export async function getList (model, options) {
  return (await Axios.get(`/api/lists/${model}`, {params: options})).data
}

export async function getItem (model, id) {
  return (await Axios.get(`/api/lists/${model}/${id}`)).data
}

export async function loginState () {
  return (await Axios.get('/admin/state')).data
}

export async function login (model, options) {
  return (await Axios.post(`/admin/login`)).data
}
