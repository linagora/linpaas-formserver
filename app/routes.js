//
// Routes
//
// Christophe Hamerling - chamerling@linagora.com
//

var mongoose = require('mongoose')
  , Form = mongoose.model('Form')

module.exports = function(app) {
  console.log('Initializing routes...')

  // redirect to forms
  app.get('/', function(req, res) {
    res.redirect('/forms');
  });

  // get forms
  // get all if no query parameters
  app.get('/forms', function(req, res) {

    var query = {};
    // name filter
    if (req.query.name) {
      query.name = req.query.name;
    }

    Form.find(query, function (err, forms) {
      if (err) {
        res.send(500, err);
      } else {
        res.json(forms);
      }
    })
  });

  // get a form
  app.get('/forms/:id', function(req, res) {
    Form
      .findOne({ _id : req.params.id }, function(err, form) {
        if (err) return res.send(500, err);
        if (!form) return res.json(404, {error : 'Can not find form with ID:' + req.params.id});
        res.json(form);
      });
  });

  // create
	app.post('/forms', function(req, res) {
		var form = new Form(req.body);
		form.save(function(err, saved) {
		 	if (err) {
			 	res.send(err);
		 	} else {
			 	res.json(201, saved);
		 	}
		});
	});

	// delete a form
	app.del('/forms/:id', function(req, res) {
		Form.findByIdAndRemove(req.params.id, function(err, form) {
      if (err) return res.send(500, err);
      if (!form) return res.json(404, {error : 'Can not find form with ID:' + req.params.id});
      res.send(200);
    });
	});

}
