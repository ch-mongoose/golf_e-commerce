// Products Controller
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var object = {};

	object.show = function(req, res) {
	  Product.find({}, function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      // console.log("products",results);
	      res.json(results);
	    }
	  });
	};

	object.add = function(req, res) {
		var new_product = new Product({ name: req.body.name,
									    image: req.body.image,
									    product: req.body.product,
									    quantity: req.body.quantity,
									    price: req.body.price,
									    description: req.body.description,
									    brand: req.body.brand,
									    type: req.body.type,
									    created_at: req.body.created_at
									});
		console.log("new_product",new_product);
		new_product.save(function(err, response)
		{
			if(err) {
				console.log("there was an error creating a new product");
				customer.index(req, res, customer.err);
			}
			else {
				console.log("successfully created a product");
				res.json(response);
			}
		});
	};
	object.remove = function(req, res) {
		console.log(req.body.name, 'was removed from the database');
		Product.remove({_id: req.body._id}, function(err, customer){
			res.redirect("/");
		});
	};



module.exports = object;
