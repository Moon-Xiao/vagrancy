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

module.exports = User

User.add('基本信息', [
  {name: 'nickname', label: '昵称', type: Types.Text, required: true, unique: true},
  {name: 'password', label: '密码', type: Types.Password, secured: true},
  {name: 'avatar', label: '头像', type: Types.File, accept: 'image/*'}
])

User.add('社交信息', [
  {name: 'level', label: '等级', type: Types.Text},
  {name: 'follow', label: '关注', type: Types.Reference, ref: User, many: true},
  {name: 'collect', label: '收藏', type: Types.Reference, ref: Post, many: true},
  {name: 'like', label: '点赞', type: Types.Reference, ref: Post, many: true},
  {name: 'intro', label: '个性签名', type: Types.TextArea},
  {name: 'tags', label: '标签', type: Types.Text},
  {name: 'visited', label: '主页访问人数', type: Types.Number}
])

User.add('其他信息', [
  {name: 'birth', label: '生日', type: Types.Date},
  {name: 'location', label: '居住城市', type: Types.Text},
  {name: 'sex', label: '性别', type: Types.Enum, values: ['男', '女', '保密']}
])

User.add('社交账户', [
  {name: 'wx_account', label: '微信账号', type: Types.Text},
  {name: 'wb_account', label: '微博账号', type: Types.Text}
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

User.inverse('albums', {
  list: 'Album',
  field: 'author',
  label: '相册'
})

User.get('all_fans', async function (req) {
  let data = await this.model.find({}).lean(true).select('follow')
  let result = {}
  for (let user of data) {
    if (user.follow) {
      for (let f of user.follow) {
        result[f] = (result[f] || 0) + 1
      }
    }
  }
  const resultArray = Object.keys(result).map(_id => ({_id, value: result[_id]}))
  const topN = topn(resultArray, req.query.size || 3, function (a, b) {
    return a.value < b.value
  })
    .map(n => n._id)
  let query = this.model.find({_id: topN}).lean()
  let docs = await this._configFindQuery(query, {single: false, req})
  for (let doc of docs) {
    doc.fansCount = result[doc._id]
  }
  return {data: docs}
})

User.virtual('fans_count', async function (req) {
  return {fansCount: await User.model.find({follow: this._id}).count()}
})
