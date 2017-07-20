/**
 * Created by jagger on 2017/7/15.
 */

require('./model/User')
require('./model/Admin')
require('./model/Post')

/**
 * @type {Service}
 */
const service = require('core-service')

service.start()
  .catch(console.error)
