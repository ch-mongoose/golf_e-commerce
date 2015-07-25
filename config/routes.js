  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {

  // require customers.js controller
  var customers = require('./../server/controllers/customers.js');
  var products = require('./../server/controllers/products.js');
  var orders = require('./../server/controllers/orders.js');

  	//gets all customers
	app.get('/customers', function(req, res) {
	  customers.show(req, res);
	});
	// note how we are delegating to the controller and passing along req and res
	app.post('/customers', function(req, res) {
		customers.add(req, res);
	});
	app.post('/customers/delete', function(req, res) {
		// console.log(req.body);
		customers.remove(req, res);
	});
	// for view2 and second controller
	app.get('/products', function(req, res) {
	  products.show(req, res);
	});
	// note how we are delegating to the controller and passing along req and res
	app.post('/products', function(req, res) {
		products.add(req, res);
	});
	app.post('/products/delete', function(req, res) {
		products.remove(req, res);
	});
	// for view3 and third controller
	app.get('/orders', function(req, res) {
	  orders.show(req, res);
	});
	// note how we are delegating to the controller and passing along req and res
	app.post('/orders', function(req, res) {
		orders.add(req, res);
	});
	app.post('/orders/delete', function(req, res) {
		orders.remove(req, res);
	});
  };