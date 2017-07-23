/**
 * Created by jagger on 2017/7/15.
 */
/**
 *
 * @type {Service}
 */
const service = require('core-service')
const Types = service.Types

const Scene = require('./Scene')
const Category = require('./Category')

const Post = module.exports = service.list('Post', {
  label: '游记',
  singular: 'post',
  plural: 'posts',
  defaultFields: ['title', 'intro', 'tags', 'author', 'categories', 'top'],
  keyPath: 'title',
  visible: true,
  // editable: '$creator',
  records: {
    date: {
      created: 'createdDate',
      modified: 'modifiedDate'
    }
  }
})

const User = require('./User')

Post.add('基本信息', [
  {name: 'title', label: '标题', type: Types.Text, search: true},
  {name: 'intro', label: '简介', type: Types.TextArea, search: true},
  {name: 'author', label: '作者', type: Types.Reference, ref: User},
  {name: 'content', label: '内容', type: Types.TextArea, search: true},
  {name: 'photo', label: '封面图', type: Types.File, accept: 'image/*'}
])

Post.add('附加信息', [
  {name: 'fellow', label: '驴友', type: Types.Reference, ref: User, many: true},
  {name: 'footprint', label: '足迹', type: Types.Reference, ref: Scene, many: true},
  {name: 'categories', label: '分类', type: Types.Reference, ref: Category, many: true},
  {name: 'createdDate', label: '发布日期', type: Types.Date},
  {name: 'modifiedDate', label: '修改日期', type: Types.Date}
])

Post.add('其他', [
  {name: 'visited', label: '浏览次数', type: Types.Number},
  {name: 'favor_count', label: '点赞次数', type: Types.Number},
  {name: 'top', label: '置顶', type: Types.Boolean}
])

Post.schema.index({'$**': 'text'})
