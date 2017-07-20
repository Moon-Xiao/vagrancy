/**
 * Created by jagger on 2017/7/15.
 */
/**
 *
 * @type {Service}
 */
const service = require('core-service')
const Types = service.Types

const User = module.exports = service.list('User', {
  label: '用户',
  singular: 'user',
  plural: 'users',
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

const Post = require('./Post')

User.add('基本信息', [
  {name: 'nickname', label: '昵称', type: Types.Text, required: true, unique: 'true'},
  {name: 'password', label: '密码', type: Types.Password, secured: true},
  {name: 'avatar', label: '头像', type: Types.File, accept: 'image/*'}
])

User.add('社交信息', [
  {name: 'level', label: '等级', type: Types.Text},
  {name: 'follow', label: '关注', type: Types.Reference, ref: User, many: true},
  {name: 'collect', label: '收藏', type: Types.Reference, ref: Post, many: true},
  {name: 'like', label: '点赞', type: Types.Reference, ref: Post, many: true},
  {name: 'intro', label: '个性签名', type: Types.TextArea},
  {name: 'album', label: '相册', type: Types.Number},
  {name: 'visited', label: '主页访问人数', type: Types.Number}
])

User.add('其他信息', [
  {name: 'birth', label: '生日', type: Types.Date},
  {name: 'sex', label: '性别', type: Types.Enum, values: ['男', '女']}
])

User.inverse('posts', {
  list: 'Post',
  field: 'author',
  label: '博客'
})

User.inverse('fans', {
  list: 'User',
  field: 'follow',
  label: '真正的粉丝'
})
