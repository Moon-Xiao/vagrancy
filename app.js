process.env.NODE_ENV = 'dev'
process.env.MOCK_USER = 'dev'


const service = require('core-service')

const User = require('./model/User')

require('./model/Region')
require('./model/Product')
require('./model/Album')
require('./model/Photo')
require('./model/Post')
require('./model/Category')
require('./model/Scene')
const Admin = require('./model/Admin')
const Post = require('./model/Post')
// //
// //
// // const frontApp = require('./build/dev-server')
//
// service.pre('app:config', function (app) {
//   app.use('/', frontApp)
// })


const cms = require('/Users/jagger/WebstormProjects/core/cms')

service.use(cms)

service.start()
  .then(() => {
    User.model.find({}).then(docs => {
      docs.forEach(doc => {
        doc.balance = parseFloat((Math.random() * 100).toFixed(2))
        doc.v_balance = parseFloat((Math.random() * 1000).toFixed(2))
        doc.save()
      })
    })
    return Admin.model.count()
      .then(count => {
        if (count === 0) {
          return Admin.model.insertTopToBottom({
            email: 'test@jagger.tech',
            password: '1234'
          })
        }
      })
  })
  .catch(console.error)
