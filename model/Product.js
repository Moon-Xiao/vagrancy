/**
 * Created by jagger on 2017/7/16.
 */
/**
 *
 * @type {Service}
 */
const service = require('core-service')
const Types = service.Types


const Product = service.list('Product', {
  label: '产品',
  singular: 'product',
  plural: 'products',
  defaultFields: ['description', 'label'],
  keyPath: 'description',
  // editable: '$creator',
  visible: true
})

const Country = require('./Country')
const Image = require('./Image')
const Seller = require('./Seller')

Product.add('基本信息', [
  {name: 'id', label: '产品编号', type: Types.Text},
  {name: 'label', label: '标签', type: Types.Text},
  {name: 'description', label: '标题', type: Types.Text},
  {name: 'photo', label: '封面图', type: Types.File, accept: 'image/*'}
])

Product.add('旅游信息', [
  {name: 'travelTime', label: '旅行时间', type: Types.Text},
  {name: 'departures', label: '出发地', type: Types.Text},
  {name: 'departureDates', label: '出发时间', type: Types.Text},
  {name: 'days', label: '旅游时长', type: Types.Text},
  {name: 'airline', label: '航空公司', type: Types.Text},
  {name: 'journal', label: '旅行日程', type: Types.Reference, ref: Image, many: true},
  {name: 'detail', label: '商品详情', type: Types.Reference, ref: Image, many: true},
  {name: 'country', label: '国家', type: Types.Reference, ref: Country, required: true}
])

Product.add('卖家信息', [
  {name: 'seller', label: '卖家', type: Types.Reference, ref: Seller, required: true},
  {name: 'price', label: '价格', type: Types.Number},
  {name: 'soldNum', label: '已售数量', type: Types.Number}
])

Product.group('卖家信息')

module.exports = Product
