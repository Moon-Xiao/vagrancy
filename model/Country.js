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
  {name: 'en-name', label: '英文名', type: Types.Text},
  {name: 'photo1', label: '图片', type: Types.File, accept: 'image/*'},
  {name: 'photo2', label: '图片', type: Types.File, accept: 'image/*'},
  {name: 'photo3', label: '图片', type: Types.File, accept: 'image/*'},
  {name: 'guide1', label: '速览', type: Types.TextArea},
  {name: 'guide2', label: '活动', type: Types.TextArea},
  {name: 'guide3', label: '景点', type: Types.TextArea},
  {name: 'guide4', label: '餐饮', type: Types.TextArea},
  {name: 'guide5', label: '购物', type: Types.TextArea},


  //

])

module.exports = Country
