//
// One shot form creation
//
// Christophe Hamerling - chamerling@linagora.com
//

var request = require('request')
  , config = require('../app/config');

var form = {
  name : 'My Form',
  model : {
    foo: 'bar',
    bar: 'baz'
  }
}

request({
    uri: 'http://' + config.host + ':' + config.port + '/forms',
    method: 'post',
    body: form,
    json: true
  }, function(err, res, body) {
    if (err) {
      console.log(err)
    } else {
      console.log(res.statusCode)
      if (res.statusCode == 201) {
        console.log('Created', body)
      } else {
        console.log('Bad return code')
      }
    }
  }
);