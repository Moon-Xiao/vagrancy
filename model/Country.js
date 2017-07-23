/**
 * Created by jagger on 2017/7/16.
 */
/**
 *
 * @type {Service}
 */
const service = require('core-service')
const Types = service.Types


const Country = service.list('Country', {
  label: '国家',
  singular: 'country',
  plural: 'countries',
  defaultFields: ['name', 'latitude'],
  keyPath: 'name',
  visible: true
})

Country.add('基本信息', [
  {name: 'name', label: '名字', type: Types.Text},
  {name: 'photo', label: '图片', type: Types.File, accept: 'image/*'}
])

module.exports = Country
