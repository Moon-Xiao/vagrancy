import item from './item'
import {multipleStore} from '../mixins'

let module = multipleStore('items', item)

export default {
  namespaced: true,
  ...module
}
