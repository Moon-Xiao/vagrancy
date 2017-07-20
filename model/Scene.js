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

Scene.add('基本信息', [
  {name: 'name', label: '名字', type: Types.Text},
  {name: 'latitude', label: '坐标', type: Types.Text},
  {name: 'country', label: '国家', type: Types.Text}
])

module.exports = Scene
