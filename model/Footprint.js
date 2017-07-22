const service = require('core-service')
const Types = service.Types
const Scene = require('./Scene')

const Footprint = service.list('Footprint', {
  label: '足迹',
  singular: 'footprint',
  plural: 'footprints',
  defaultFields: ['scene', 'photo'],
  keyPath: '',
  visible: true
})

Footprint.add([
  {name: 'scene', label: '景点', type: Types.Reference, ref: Scene},
  {name: 'photo', label: '照片', type: Types.File, accept: 'image/*'}
])

module.exports = Footprint
