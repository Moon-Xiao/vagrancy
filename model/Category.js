/**
 * Created by jagger on 2017/7/16.
 */
/**
 *
 * @type {Service}
 */
const service = require('core-service')
const Types = service.Types

const Category = service.list('Category', {
  label: '游记分类',
  singular: 'category',
  plural: 'categories',
  defaultFields: ['name'],
  keyPath: 'name',
  visible: true
})

Category.add([
  {name: 'name', label: '名字', type: Types.Text}
])

Category.inverse('posts', {
  list: 'Post',
  field: 'categories',
  label: '博客'
})

module.exports = Category

Category.group('基本信息')
