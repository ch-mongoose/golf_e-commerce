// Customers Controller
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var object = {};

	object.show = function(req, res) {
	  Customer.find({}, function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      res.json(results);
	    }
	  });
	};

	object.add = function(req, res) {
		var new_customer = new Customer({ name: req.body.name, created_at: req.body.created_at});
		new_customer.save(function(err, response)
		{
			if(err) {
				console.log("there was an error creating a new customer");
				// customer.index(req, res, customer.err);
			}
			else {
				console.log("successfully created a customer");
				res.json(response);
			}
		});
	};
	object.remove = function(req, res) {
		console.log(req.body.name, 'was removed from the database');
		Customer.remove({_id: req.body._id}, function(err, customer){
			res.redirect("/");
		});
	};

module.exports = object;


