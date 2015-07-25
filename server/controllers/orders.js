// Orders Controller
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var object = {};

	object.show = function(req, res) {
	  Order.find({}, function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      res.json(results);
	    }
	  });
	};

	object.add = function(req, res) {
		var new_order = new Order({ name: req.body.name,
									product: req.body.product,
									quantity: req.body.quantity,
									brand: req.body.brand,
									total: req.body.total,
									created_at: req.body.created_at
								});
		console.log(new_order);
		new_order.save(function(err, response)
		{
			if(err) {
				console.log("there was an error creating a new customer");
				// customer.index(req, res, customer.err);
			}
			else {
				console.log("successfully created a order");
				res.json(response);
			}
		});
	};
	object.remove = function(req, res) {
		console.log(req.body.name, 'was removed from the database');
		Order.remove({_id: req.body._id}, function(err, customer){
			res.redirect("/");
		});
	};

module.exports = object;


