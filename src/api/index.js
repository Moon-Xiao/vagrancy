/**
 * Created by jagger on 2017/7/12.
 */
import Axios from 'axios'
// import {CoreServiceError} from 'core-service/common/error'

export const baseURL = 'http://10.25.19.193:3004'

const api = Axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 3000
})

const auth = Axios.create({
  baseURL: `${baseURL}/admin`,
  timeout: 3000
})

async function wrapper (method, url, ...options) {
  try {
    let req = this[method](url, ...options)
    return (await req).data
  } catch (error) {
    // let err = CoreServiceError.parse(error.response.data.error)
    throw error
  }
}

/**
 *
 * @param {...AxiosRequestConfig|object}options
 * @return {Promise.<Array>}
 */
api.getLists = async function (...options) {
  return wrapper.call(api, 'get', '/lists', ...options)
}

/**
 *
 * @param {object}list
 * @param {...AxiosRequestConfig|object}options
 * @return {Promise.<Array>}
 */
api.getListItems = async function (list, ...options) {
  return wrapper.call(api, 'get', list.url, ...options)
}

/**
 *
 * @param {object}list
 * @param {string}id
 * @param {...AxiosRequestConfig|object}options
 * @return {Promise.<Object>}
 */
api.getListItem = async function (list, id, ...options) {
  return wrapper.call(api, 'get', `${list.url}/${id}`, ...options)
}

api.getListItemField = async function (list, id, field, ...options) {
  console.log(options)
  return wrapper.call(api, 'get', `${list.url}/${id}/${field}`, ...options)
}

api.updateItem = async function (list, id, ...options) {
  return wrapper.call(api, 'put', `${list.url}/${id}`, ...options)
}

api.createItem = async function (list, ...options) {
  return wrapper.call(api, 'post', list.url, ...options)
}

api.deleteItem = async function (list, id, ...options) {
  return wrapper.call(api, 'delete', `${list.url}/${id}`, ...options)
}

api.getLoginTypes = async function (...options) {
  return wrapper.call(auth, 'get', 'types', ...options)
}

api.getUserState = async function (...options) {
  return wrapper.call(auth, 'get', 'state', ...options)
}

api.loginUser = async function (...options) {
  return wrapper.call(auth, 'post', 'login', ...options)
}

api.logoutUser = async function (...options) {
  return wrapper.call(auth, 'post', 'logout', ...options)
}

api.install = function (Vue, ...options) {
  Vue.prototype.$api = api
}

export default api
