// Customers Controller
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
var object = {};

	object.show = function(req, res) {
	// this code below creates variable which query's the database for only 3 most recent documents
	  var foo = Customer.find({}).sort({created_at:-1}).limit(3);
	  	foo.exec(function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      res.json(results);
	    }
	  });
	};

	object.show_orders = function(req, res) {
	// this code below creates variable which query's the database for only 3 most recent documents
	  var foo = Order.find({}).sort({created_at:-1}).limit(3);
	  	foo.exec(function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	    	console.log('got here with', results);
	      res.json(results);
	    }
	  });
	};

	object.show_products = function(req, res) {
	// this code below creates variable which query's the database for only 3 most recent documents
	  var foo = Product.find({}).sort({name:-1}).limit(5);
	  	foo.exec(function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      res.json(results);
	    }
	  });
	};




module.exports = object;


