/**
 * Created by jagger on 2017/7/15.
 */
/**
 *
 * @type {Service}
 */
const service = require('core-service')
const Types = service.Types

const Admin = service.list('Admin', {
  label: '管理员',
  singular: 'admin',
  plural: 'admins',
  defaultFields: ['nickname', 'email'],
  keyPath: 'nickname',
  visible: true,
  "cms user": true,
  "cms grant": 'password',
  "cms grant username": 'email',
  "cms grant password": 'password',
  "editable": "$self",
  "nocreate": true
})

Admin.add([
  {name: 'nickname', label: '昵称', type: Types.Text},
  {name: 'email', label: '邮箱', type: Types.Email, unique: true},
  {name: 'password', label: '密码', type: Types.Password, secured: true},
  {name: 'date_test', label: '日期测试', type: Types.Date},
  {name: 'daterange_test', label: '日期区间测试', type: Types.DateRange}
])

Admin.group('用户')

module.exports = Admin
