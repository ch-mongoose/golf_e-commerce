 var customers_app = angular.module('customers_app', ['LocalStorageModule','ngRoute','ngAnimate'] );
    //  use the config method to set up routing:
    customers_app.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: './partials/products.html',
        })
        .when('/products',{
            templateUrl: './partials/products.html',
        })
        .when('/orders',{
            templateUrl: './partials/orders.html',
        })
        .when('/customers',{
            templateUrl: './partials/customers.html',
        })
        .when('/settings',{
            templateUrl: './partials/settings.html',
        })
        .when('/addProduct',{
            templateUrl: './partials/addProduct.html',
        })
        .when('/drivers',{
            templateUrl: './partials/Drivers.html',
        })
        .when('/putters',{
            templateUrl: './partials/Putters.html',
        })
        .when('/allProducts', {
            templateUrl: './partials/AllProducts.html',
        })
        .otherwise({
          redirectTo: '/'
        });


    });



// ---------------------------
// CustomerFactory
// ---------------------------
customers_app.factory('CustomerFactory', function($http) {
  var factory = {};
  var customers = [];
  factory.getCustomers = function(callback) {
    $http.get('/customers').success(function(output) {
        customers = output;
        callback(customers);
      });
    };
  // note the use of callbacks!
  factory.addCustomer = function(info, callback) {
    $http.post('/customers',info).success(function(output) {
        customers.push(output);
        callback(customers);
    });
  };
  factory.removeCustomer = function(data, callback) {
    // console.log(data);
    $http.post('/customers/delete', data).success(function(output) {
        customers = output;
        callback(customers);
    });
  };
  return factory;
});

// ---------------------------
// ProductFactory
// ---------------------------
customers_app.factory('ProductFactory', function($http) {
  var factory = {};
  var products = [];
  factory.getProducts = function(callback) {
    $http.get('/products').success(function(output) {
      // callback data
      for(var x in output) {
        // console.log("data here ",output[x].type)
        if(output[x].type !== "Irons") {
          output.splice(x, 1);
        }
      } // end loop
      for(var y in output) {
        if(output[y].type !== "Irons") {
          output.splice(y, 1);
        }
      } // end loop
      for(var z in output) {
        if(output[z].type !== "Irons") {
          output.splice(z, 1);
        }
      } // end loop
      for(var j in output) {
        if(output[j].type !== "Irons") {
          output.splice(j, 1);
        }
      } // end loop
      for(var i in output) {
        // console.log("data here ",output[x].type)
        if(output[i].type === "Drivers" || output[i].type === "Putters") {
          output.splice(i, 1);
        }
      } // end loop

          console.log("Irons Only", output);
          products = output;
          callback(products);
    });
  };// end getProducts

  // callback function
  factory.addProducts = function(info, callback) {
    $http.post('/products',info).success(function(output) {
        // products.push(output);
        products = output;
        callback(products);
    });
  };
  factory.removeProducts = function(data, callback) {
    // console.log(data);
    $http.post('/products/delete', data).success(function(output) {
        products = output;
        callback(products);
    });
  };
  factory.getAllProducts = function(callback) {
    $http.get('/products').success(function(output) {
        console.log("all products",output);
        products = output;
        callback(products);
    });
  };// end getProducts
  return factory;
});

// ---------------------------
// DriversFactory
// ---------------------------
customers_app.factory('DriversFactory', function($http) {
  var factory = {};
  var products = [];
  factory.getProducts = function(callback) {
    $http.get('/products').success(function(output) {
      // callback data
      for(var x in output) {
        if(output[x].type !== "Drivers") {
          output.splice(x, 1);
        }
      } // end loop
      for(var y in output) {
        if(output[y].type !== "Drivers") {
          output.splice(y, 1);
        }
      } // end loop
      for(var z in output) {
        if(output[z].type !== "Drivers") {
          output.splice(z, 1);
        }
      } // end loop
      for(var i in output) {
        if(output[i].type === "Irons" || output[i].type === "Putters") {
          output.splice(i, 1);
        }
      } // end loop
          console.log("Drivers Only", output);
          products = output;
          callback(products);
    });
  };// end getProducts
  // note the use of callbacks!
  factory.addProducts = function(info, callback) {
    $http.post('/Drivers',info).success(function(output) {
        // products.push(output);
        products = output;
        callback(products);
    });
  };
  factory.removeProducts = function(data, callback) {
    // console.log(data);
    $http.post('/products/delete', data).success(function(output) {
        products = output;
        callback(products);
    });
  };
  return factory;
});

// ---------------------------
//  PutterFactory
// ---------------------------
customers_app.factory('PutterFactory', function($http) {
  var factory = {};
  var products = [];
  factory.getProducts = function(callback) {
    $http.get('/products').success(function(output) {
      // callback data
      for(var x in output) {
        if(output[x].type !== "Putters") {
          output.splice(x, 1);
        }
      } // end loop
      for(var x in output) {
        if(output[x].type !== "Putters") {
          output.splice(x, 1);
        }
      } // end loop
      for(var x in output) {
        if(output[x].type !== "Putters") {
          output.splice(x, 1);
        }
      } // end loop
      for(var x in output) {
        if(output[x].type !== "Putters") {
          output.splice(x, 1);
        }
      } // end loop
          console.log("Putters Only", output);
          products = output;
          callback(products);
    });
  };// end getProducts
  // note the use of callbacks!
  factory.addProducts = function(info, callback) {
    $http.post('/products',info).success(function(output) {
        // products.push(output);
        products = output;
        callback(products);
    });
  };
  factory.removeProducts = function(data, callback) {
    // console.log(data);
    $http.post('/products/delete', data).success(function(output) {
        products = output;
        callback(products);
    });
  };
  return factory;
});

// ---------------------------
// create the OrderFactory
// ---------------------------
customers_app.factory('OrderFactory', function($http) {
  var factory = {};
  var orders = [];
  factory.getOrders = function(callback) {
    $http.get('/orders').success(function(output) {
        orders = output;
        // console.log(orders);
        callback(orders);
      });
    };
  // note the use of callbacks!
  factory.addOrders = function(info, callback) {
    $http.post('/orders',info).success(function(output) {
        // orders.push(output);
        orders = output;
        callback(orders);
    });
  };
  factory.removeOrders = function(data, callback) {
    // console.log(data);
    $http.post('/orders/delete', data).success(function(output) {
        orders = output;
        callback(orders);
    });
  };
  return factory;
});


// #########################
// Storage Controller
// #########################
customers_app.controller('StorageController', function($scope, localStorageService) {
      $scope.local_user = localStorageService.get('local_user');
      console.log('local_user', $scope.local_user);
      // localStorageService.clearAll();
});

// #########################
// Login Controller
// #########################
customers_app.controller('LoginController', function($scope, ProductFactory, CustomerFactory, localStorageService) {
    // get products from database
    ProductFactory.getAllProducts(function(data) {
      $scope.products = data;
      console.log('ProductsController data recieved from DB',data);
      });

    $scope.addCustomer = function() {

          promptUser();

            function promptUser() {
            var user = prompt("Please enter your name");
            localStorageService.set('local_user', user);
            user = {name:user};
            user.created_at = moment().format('MMMM Do, YYYY');
            console.log('current user',user.name);

            if(user.name !== "" && user.name !== null) {
                $scope.addUser = function() {
                  console.log('in front end controller', user.name);
                    // note the use of callbacks here
                  CustomerFactory.addCustomer(user, function(data) {
                    user = data;  // data goes into the callback function
                  });
                };
                $scope.addUser();
            } else {
              promptUser();
            }

        } // end promptUser function
    };


});

// #########################
// Prodcuts Controller
// #########################
customers_app.controller('ProductsController', function($scope, ProductFactory, CustomerFactory, localStorageService) {
  var current_product = {};
  $scope.local_user = localStorageService.get('local_user');

    ProductFactory.getProducts(function(data) {
      $scope.products = data;
      console.log('ProductsController data recieved from DB',data);
    });

  $scope.getProduct = function(data) {
    console.log("data", data);
    current_product = {};
    $('#myModal').modal('show');
    current_product = data;
    current = current_product;
    // current.product = data.name;
    current.brand = current_product.brand;
    // current.quantity = $scope.new_orders.quantity;
    current.created_at = moment().format('MMMM Do, YYYY');
    // current.name = $scope.local_user;
    console.log("updated order", current);
    $scope.current_product = current;
  };

  $scope.addProducts = function() {
    console.log('in front end controller', $scope.new_product);
  // callback function
    ProductFactory.addProducts($scope.new_product, function(data) {
      $scope.products = data;  // data goes into the callback function
      $scope.new_product = {};// this clears out the input fields
    ProductFactory.getProducts(function(data) {
      $scope.products = data;
      });
    });
  };


});


// #########################
// Drivers Controller
// #########################
customers_app.controller('DriversController', function($scope, DriversFactory, CustomerFactory, localStorageService) {
  var current_product = {};
  $scope.local_user = localStorageService.get('local_user');

    DriversFactory.getProducts(function(data) {
      $scope.products = data;
      console.log('DriversController data recieved from DB',data);
    });

  $scope.getProduct = function(data) {
    console.log("data", data);
    current_product = {};
    $('#myModal').modal('show');
    current_product = data;
    current = current_product;
    // current.product = data.name;
    current.brand = current_product.brand;
    // current.quantity = $scope.new_orders.quantity;
    current.created_at = moment().format('MMMM Do, YYYY');
    // current.name = $scope.local_user;
    console.log("updated order", current);
    $scope.current_product = current;
  };

  $scope.addProducts = function() {
    console.log('in front end controller', $scope.new_product);
  // note the use of callbacks here
    DriversFactory.addProducts($scope.new_product, function(data) {
      $scope.products = data;  // data goes into the callback function
      $scope.new_product = {};// this clears out the input fields
    DriversFactory.getProducts(function(data) {
      $scope.products = data;
      });
    });
  };


});


// #########################
// Putters Controller
// #########################
customers_app.controller('PuttersController', function($scope, PutterFactory, CustomerFactory, localStorageService) {

  var current_product = {};
  $scope.local_user = localStorageService.get('local_user');

    PutterFactory.getProducts(function(data) {
      $scope.products = data;
      console.log('PutterController data recieved from DB',data);
    });

  $scope.getProduct = function(data) {
    console.log("data", data);
    current_product = {};
    $('#myModal').modal('show');
    current_product = data;
    current = current_product;
    // current.product = data.name;
    current.brand = current_product.brand;
    // current.quantity = $scope.new_orders.quantity;
    current.created_at = moment().format('MMMM Do, YYYY');
    // current.name = $scope.local_user;
    console.log("updated order", current);
    $scope.current_product = current;
  };

  $scope.addProducts = function() {
    console.log('in front end controller', $scope.new_product);
  // note the use of callbacks here
    PutterFactory.addProducts($scope.new_product, function(data) {
      $scope.products = data;  // data goes into the callback function
      $scope.new_product = {};// this clears out the input fields
    PutterFactory.getProducts(function(data) {
      $scope.products = data;
      });
    });
  };


});

// #########################
// AllProdcuts Controller
// #########################
customers_app.controller('AllProductsController', function($scope, ProductFactory, CustomerFactory, localStorageService) {
  var current_product = {};
  $scope.local_user = localStorageService.get('local_user');

    ProductFactory.getAllProducts(function(data) {
      $scope.products = data;
      console.log('AllProductsController data recieved from DB',data);
    });

  $scope.getProduct = function(data) {
    console.log("data", data);
    current_product = {};
    $('#myModal').modal('show');
    current_product = data;
    current = current_product;
    // current.product = data.name;
    current.brand = current_product.brand;
    // current.quantity = $scope.new_orders.quantity;
    current.created_at = moment().format('MMMM Do, YYYY');
    // current.name = $scope.local_user;
    console.log("updated order", current);
    $scope.current_product = current;
  };

  $scope.addProducts = function() {
    console.log('in front end controller', $scope.new_product);
  // callback function
    ProductFactory.addProducts($scope.new_product, function(data) {
      $scope.products = data;  // data goes into the callback function
      $scope.new_product = {};// this clears out the input fields
    ProductFactory.getProducts(function(data) {
      $scope.products = data;
      });
    });
  };

  $scope.getAllProducts = function () {
     // callback function
     ProductFactory.getAllProducts(function(data){
      console.log("got here allProducts", data);
       $scope.allProducts = data;
     });
  };


});


 // #########################
 // Customer Controller
 // #########################
customers_app.controller('CustomersController', function($scope, $location, CustomerFactory, localStorageService) {

    CustomerFactory.getCustomers(function(data) {
      $scope.customers = data;
      // anything else that you want to happen after you getCustomers needs to be inside of this callback
      });

  $scope.countCustomers = function() {
    var number = $scope.customers.length;
    console.log("number here",number);
    return number;
  };

  $scope.addCustomer = function() {
    console.log('in front end controller', $scope.new_customer);
  // note the use of callbacks here
    localStorageService.set('local_user', $scope.new_customer.name);
    $scope.new_customer.created_at = moment().format('MMMM Do, YYYY');
    CustomerFactory.addCustomer($scope.new_customer, function(data) {
      $scope.customers = data;  // data goes into the callback function
      $scope.new_customer = {};// this clears out the input fields
    CustomerFactory.getCustomers(function(data) {
      $scope.customers = data;
      });
    });

  };

  $scope.removeCustomer = function (data) {
    // console.log(data);
    CustomerFactory.removeCustomer(data, function(data){
      $scope.customers = data;
    CustomerFactory.getCustomers(function(data) {
      $scope.customers = data;
      // anything else that you want to happen after you getCustomers needs to be inside of this callback
      });
    });
  };

});

 // #################################
 // Bootstrap Controller - modal
 // #################################
customers_app.controller('BootstrapController', function($scope, OrderFactory, localStorageService) {
  var current_product = {};
  $scope.local_user = localStorageService.get('local_user');
  var name = $scope.local_user;

$scope.addOrders = function() {
      // console.log("name",$scope.current_product.name);
      var current = $scope.current_product;
      console.log( "data here",current);
      current.product = current.name;
      current.quantity = $scope.new_orders.quantity;
      current.created_at = moment().format('MMMM Do, YYYY');
      current.name = name;
      current.total = (current.price * current.quantity);
      console.log("updated order", current);

      // handle callback issue
      setTimeout(fix, 1);
      function fix() {
          current.name = current.product;
      }

  // note the use of callbacks here
    OrderFactory.addOrders(current, function(data) {
      $scope.orders = data;  // data goes into the callback function
      $scope.new_orders = {};// this clears out the input fields
      $('#myModal').modal('hide');
    });

  };


});


 // #########################
 // Orders Controller
 // #########################
customers_app.controller('OrdersController', function($scope, OrderFactory) {

    OrderFactory.getOrders(function(data) {
      $scope.orders = data;
      // anything else that you want to happen after you getCustomers needs to be inside of this callback
      });

  $scope.getTotal = function(){
      var total = 0;
      for(var i = 0; i < $scope.orders.length; i++){
          var order = $scope.orders[i];
          total += order.total;
      }
      return total;
  };


  $scope.addOrders = function() {
    console.log('in front end controller', $scope.new_orders);
  // note the use of callbacks here
    $scope.new_orders .created_at = moment().format('MMMM Do, YYYY');
    OrderFactory.addOrders($scope.new_orders, function(data) {
      $scope.orders = data;  // data goes into the callback function
      $scope.new_orders = {};// this clears out the input fields
    OrderFactory.getOrders(function(data) {
      $scope.orders = data;
      });
    });
  };

  $scope.removeOrders = function (data) {
    // console.log(data);
    OrderFactory.removeOrders(data, function(data){
      $scope.orders = data;
    OrderFactory.getOrders(function(data) {
      $scope.orders = data;
      // anything else that you want to happen after you getCustomers needs to be inside of this callback
      });
    });
  };


});





// --------------------------------------------------------------------------------------------------------------------------------------------
// promises start here

// I control the root of the application.
  customers_app.controller("ModalController", function($scope, modals,  OrderFactory, localStorageService) {
    var current_product = {};
    current_product = {};

    $scope.local_user = localStorageService.get('local_user');

    $scope.getProduct = function(data) {
      var current_product = {};
      $('#myModal').modal('show');
      console.log(data, "data here");
      current_product = data;
      current_product.product = data.name;
      current_product.brand = data.brand;
      current_product.quantity = $scope.new_orders.quantity;
      current_product.created_at = moment().format('MMMM Do, YYYY');
      current_product.name = $scope.local_user;
      console.log("updated order", current_product);

      OrderFactory.addOrders(current_product, function(data) {
        $scope.orders = data;  // data goes into the callback function
        $scope.new_orders = {};// this clears out the input fields
      });
        current_product = {};
    };

    // I open a Prompt-type modal.
    $scope.promptSomething = function(data) {
      console.log("data after prompt", data);
      // The .open() method returns a promise that will be either
      // resolved or rejected when the modal window is closed.
      var promise = modals.open("prompt", {
          message: "Who rocks the party the rocks the body?",
          placeholder: "Buy Product"
        }
      );
      promise.then(
        function handleResolve(response) {
          console.log("Prompt resolved with [ %s ].", response);
        },
        function handleReject(error) {
          console.warn("Prompt rejected!");
        }
      );

    };

  });


// --------------------------------------------------------------------------------------------------------------------------------------------
  // I control the Prompt modal window.
  // --
  // NOTE: This controller gets "modals" injected; but, it is in no way
  // different than any other Controller in your entire AngularJS application.
  // It takes services, manages the view-model, and knows NOTHING about the DOM.
  customers_app.controller("OpenModalController", function($scope, modals) {
      // Setup defaults using the modal params.
      $scope.message = (modals.params().message || "Give me.");
      // Setup the form inputs (using modal params).
      $scope.form = {
        input: (modals.params().placeholder || "")
      };
      $scope.errorMessage = null;
      // ---
      // PUBLIC METHODS.
      // ---
      // Wire the modal buttons into modal resolution actions.
      $scope.cancel = modals.reject;
      // I process the form submission.
      $scope.submit = function() {
        // If no input was provided, show the user an error message.
        if (!$scope.form.input) {
          return ($scope.errorMessage = "Please provide something!");
        }
        modals.resolve($scope.form.input);
        data = $scope.form.input;
        console.log("here",data);
      };
    }
  );


// ####################################################################################################################################
  // I manage the modals within the application.
  customers_app.service("modals", function($rootScope, $q) {
      // I represent the currently active modal window instance.
      // console.log("q variable ",$q.defer());
      var modal = {
        deferred: null,
        params: null
      };
      // Return the public API.
      return ({
        open: open,
        params: params,
        proceedTo: proceedTo,
        reject: reject,
        resolve: resolve
      });
    // ---
    // PULBIC METHODS
    // ---
      // I open a modal of the given type, with the given params. If a modal
      // window is already open, you can optionally pipe the response of the
      // new modal window into the response of the current (cum previous) modal
      // window. Otherwise, the current modal will be rejected before the new
      // modal window is opened.
      function open(type, params, pipeResponse) {
        var previousDeferred = modal.deferred;
        // Setup the new modal instance properties.
        modal.deferred = $q.defer();
        modal.params = params;
        console.log(modal.params);
        // We're going to pipe the new window response into the previous
        // window's deferred value.
        if (previousDeferred && pipeResponse) {

          modal.deferred.promise
            .then(previousDeferred.resolve, previousDeferred.reject);

          // We're not going to pipe, so immediately reject the current window.
        } else if (previousDeferred) {

          previousDeferred.reject();

        }
        // Since the service object doesn't (and shouldn't) have any direct
        // reference to the DOM, we are going to use events to communicate
        // with a directive that will help manage the DOM elements that
        // render the modal windows.
        // --
        // NOTE: We could have accomplished this with a $watch() binding in
        // the directive; but, that would have been a poor choice since it
        // would require a chronic watching of acute application events.
        console.log("promise",modal.deferred.promise);
        $rootScope.$emit("modals.open", type);
        return (modal.deferred.promise);
      }
      // I return the params associated with the current params.
      function params() {
        return (modal.params || {});
      }
      // I open a modal window with the given type and pipe the new window's
      // response into the current window's response without rejecting it
      // outright.
      // --
      // This is just a convenience method for .open() that enables the
      // pipeResponse flag; it helps to make the workflow more intuitive.
      function proceedTo(type, params) {
        return (open(type, params, true));
      }
      // I reject the current modal with the given reason.
      function reject(reason) {
        if (!modal.deferred) {
          return;
        }
        modal.deferred.reject(reason);
        modal.deferred = modal.params = null;
        // Tell the modal directive to close the active modal window.
        $rootScope.$emit("modals.close");
      }
      // I resolve the current modal with the given response.
      function resolve(response) {
        if (!modal.deferred) {
          return;
        }
        modal.deferred.resolve(response);
        modal.deferred = modal.params = null;
        // Tell the modal directive to close the active modal window.
        $rootScope.$emit("modals.close");
      }
    }
  );
  // I manage the views that are required to render the modal windows. I don't
  // actually define the modals in anyway - I simply decide which DOM sub-tree
  // should be linked. The means by which the modal window is defined is
  // entirely up to the developer.

// ###########################################################################################################################################
  customers_app.directive("bnModals",function($rootScope, modals) {
      // Return the directive configuration.
      return (link);
      // I bind the JavaScript events to the scope.
      function link(scope, element, attributes) {
        // I define which modal window is being rendered. By convention,
        // the subview will be the same as the type emitted by the modals
        // service object.
        scope.subview = null;
        // If the user clicks directly on the backdrop (ie, the modals
        // container), consider that an escape out of the modal, and reject
        // it implicitly.
        element.on("click", function handleClickEvent(event) {
            if (element[0] !== event.target) {
              return;
            }
            scope.$apply(modals.reject);
          }
        );
        // Listen for "open" events emitted by the modals service object.
        $rootScope.$on("modals.open", function handleModalOpenEvent(event, modalType) {
            scope.subview = modalType;
          }
        );
        // Listen for "close" events emitted by the modals service object.
        $rootScope.$on("modals.close", function handleModalCloseEvent(event) {
            scope.subview = null;
          }
        );
      }
    });
//---- End ----

