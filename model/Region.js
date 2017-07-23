/**
 * Created by jagger on 2017/7/16.
 */
/**
 *
 * @type {Service}
 */
const service = require('core-service')
const Types = service.Types


const Region = service.list('Region', {
  label: '地区',
  singular: 'region',
  plural: 'regions',
  defaultFields: ['name', 'country', 'latitude'],
  keyPath: 'name',
  visible: true
})

Region.add('基本信息', [
  {name: 'name', label: '名字', type: Types.Text},
  {name: 'country', label: '国家', type: Types.Reference, ref: require('./Country')},
  {name: 'photo', label: '图片', type: Types.File, accept: 'image/*'}
])

module.exports = Region
