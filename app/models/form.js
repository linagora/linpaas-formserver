//
// Form schema. Do not set it to strict since schema is not defined for forms for now.
//
// Christophe Hamerling - chamerling@linagora.com
//

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var FormSchema = new Schema({
  name : String,
  created_at : { type : Date, default: Date.now }
  },
  {
    strict : false
  }
);

FormSchema.pre('save', function(next) {
  console.log('Saving form', this);
  next();
});

FormSchema.plugin(require('mongoose-lifecycle'));
module.exports = mongoose.model('Form', FormSchema);