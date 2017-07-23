const service = require('core-service')
const Types = service.Types
const User = require('./User')

const Album = service.list('Album', {
  label: '相册',
  singular: 'album',
  plural: 'albums',
  defaultFields: ['name', 'avatar', 'intro'],
  keyPath: 'name',
  visible: true,
  editable: '$creator',
  records: {
    date: {
      created: 'createdDate',
      modified: 'modifiedDate'
    }
  }
})

module.exports = Album

Album.add([
  {name: 'name', label: '名称', type: Types.Text, required: true},
  {name: 'avatar', label: '照片', type: Types.File, accept: 'image/*'},
  {name: 'owner', label: '所有者', type: Types.Reference, ref: User, cms: '$creator'},
  {name: 'intro', label: '介绍', type: Types.Text},
  {name: 'createdDate', label: '发布日期', type: Types.Date},
  {name: 'modifiedDate', label: '修改日期', type: Types.Date}
])
