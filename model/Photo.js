const service = require('core-service')
const Types = service.Types

const Photo = service.list('Photo', {
  label: '相片',
  singular: 'photo',
  plural: 'photos',
  defaultFields: ['name', 'photo'],
  keyPath: 'name',
  visible: true,
  records: {
    date: {
      created: 'createdDate',
      modified: 'modifiedDate'
    }
  }
})

module.exports = Photo

Photo.add([
  {name: 'name', label: '名称', type: Types.Text, required: true},
  {name: 'photo', label: '照片', type: Types.File, accept: 'image/*'},
  {name: 'album', label: '相册', type: Types.Reference, ref: require('./Album'), required: true},
  {name: 'intro', label: '介绍', type: Types.Text},
  {name: 'createdDate', label: '发布日期', type: Types.Date},
  {name: 'modifiedDate', label: '修改日期', type: Types.Date}
])
