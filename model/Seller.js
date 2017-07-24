/**
 * Created by jagger on 2017/7/15.
 */
/**
 *
 * @type {Service}
 */
const service = require('core-service')
const Types = service.Types

const Seller = module.exports = service.list('Seller', {
  label: '卖家',
  singular: 'seller',
  plural: 'sellers',
  defaultFields: ['nickname', 'avatar', 'intro', 'level', 'birth', 'sex'],
  keyPath: 'nickname',
  visible: true,
  'free reg': true,
  'cms user': true,
  'cms grant': 'password',
  'cms grant username': 'nickname',
  'cms grant password': 'password',
  'editable': '$self'
})

module.exports = Seller

Seller.add('基本信息',[
  {name: 'nickname', label: '昵称', type: Types.Text, required: true},
  {name: 'password', label: '卖家', type: Types.Password, secured: true, required: true},
  {name: 'avatar', label: '头像', type: Types.File, accept: 'image/*'}
])

Seller.inverse('products', {
  list: 'Product',
  field: 'seller',
  label: '出售产品'
})

Seller.group('用户')
