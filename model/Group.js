/**
 * Created by jagger on 2017/7/15.
 */
/**
 *
 * @type {Service}
 */
const service = require('core-service')
const Types = service.Types

const Group = module.exports = service.list('Group', {
  label: '旅游团',
  singular: 'group',
  plural: 'groups',
  defaultFields: ['nickname', 'avatar', 'intro', 'level', 'birth', 'sex'],
  keyPath: 'nickname',
  visible: true
})

module.exports = Group

Group.add('基本信息',[
  {name: 'title', label: '标题', type: Types.Text, required: true},
  {name: 'price', label: '价格', type: Types.Number, required: true},
  {name: 'leader', label: '发起人', type: Types.Reference, ref: require('./User')},
  {name: 'mate', label: '驴友', type: Types.Reference, ref: require('./User')},
  {name: 'intro', label: '介绍', type: Types.TextArea},
  {name: 'photo', label: '图片', type: Types.File, accept: 'image/*'}
])

Group.group('用户信息')
