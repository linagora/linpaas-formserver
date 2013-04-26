//
// Configuration settings
//
// Christophe Hamerling - chamerling@linagora.com
//

module.exports = {
  port : process.env.PORT || 3000,
  host : process.env.HOSTNAME || 'localhost',
  mongo : {
    uri : 'mongodb://localhost:27017/linpaas',
    debug : false
  }
}