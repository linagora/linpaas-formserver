//
// Form server: Provides REST API for store and retrieve forms as JSON.
//
// TODO : Better initialization with async in order to avoid nesting
//
// Christophe Hamerling - chamerling@linagora.com
//

var express = require('express')
  , mongoose = require('mongoose')
  , fs = require('fs')
  , path = require('path')
  , app = express()
  , conf = require('./app/config')

mongoose.set('debug', conf.mongo.debug)
mongoose.connect(conf.mongo.uri, function(err) {
  if (err) {
    console.log('MongoDB instance is required!')
    throw err;
  } else {
    console.log('Mongo OK, loading models');
    // load models
    var models_path = __dirname + '/app/models'
    fs.readdirSync(models_path).forEach(function (file) {
      require(models_path+'/'+file)
    });

    // express app should be configured somewhere...
    app.configure('all', function() {
      app.set('port', conf.port);
      app.use(express.logger('dev'));
      app.use(express.bodyParser());
      app.use(express.static(path.join(__dirname, 'public')));
    });

	require('./app/routes')(app);

    app.listen(app.get('port'), function(err) {
      if (err) {
        throw err;
      }
      console.log('HTTP Form server started on', app.get('port'))
    });
  }
});
