/**
 * Created by jagger on 2017/7/16.
 */
/**
 *
 * @type {Service}
 */
const service = require('core-service')
const Types = service.Types


const Scene = service.list('Scene', {
  label: '景点',
  singular: 'scene',
  plural: 'scenes',
  defaultFields: ['name', 'latitude', 'country'],
  keyPath: 'name',
  visible: true
})

const Country = require('./Country')

Scene.add('基本信息', [
  {name: 'name', label: '名字', type: Types.Text, required: true, unique: true},
  {name: 'en-name', label: '英文名', type: Types.Text},
  {name: 'photo', label: '图片', type: Types.File, accept: 'image/*'},
  {name: 'region', label: '城市', type: Types.Reference, ref: require('./Region'), required: true},
  {name: 'tag', label: '标签', type: Types.Text}
])

Scene.group('基本信息')

module.exports = Scene
