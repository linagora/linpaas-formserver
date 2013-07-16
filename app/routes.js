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
      .findById(req.params.id, function(err, form) {
        if (err) return res.send(500, err);
        if (!form) return res.json(404, {error : 'Can not find form with ID:' + req.params.id});
        res.json(form);
      });
  });

  // create
	app.post('/forms', function(req, res) {

		//TODO remove trace
		console.log(req.body);

		Form.create(req.body, function(err, savedForm) {
			if (err) {
				res.send(500, err);
			}
			else {
				res.json(201, savedForm);
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

	// update a form
	app.post('/forms/:id', function(req, res) {
		Form.findByIdAndUpdate(req.params.id, req.body,function(err, form) {
      if (err) return res.send(500, err);
      if (!form) return res.json(404, {error : 'Can not find form with ID:' + req.params.id});
      res.send(200);
    });
	});

}
