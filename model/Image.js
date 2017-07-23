const service = require('core-service')
const Types = service.Types

const Image = service.list('Image', {
  label: '图片',
  singular: 'image',
  plural: 'images',
  keyPath: 'name',
  defaultFields: ['name', 'photo'],
  visible: true
})

module.exports = Image

Image.add([
  {name: 'name', label: '描述', type: Types.Text},
  {name: 'photo', label: '照片', type: Types.File, accept: 'image/*'}
])
