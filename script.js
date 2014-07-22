// bootstrap application
	// Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

	// create the module and name it hcApp
	var hcApp = angular.module('hcApp', ['ngRoute']);

	// configure our routes
	hcApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});
 
 
	// create the controller and inject Angular's $scope
	hcApp.controller('mainController', function($scope,geolocation) {
		// create a message to display in our view
		$scope.message = 'Computing Location';
		geolocation.getCurrentPosition(function (position) {
    		alert('Latitude: '              + position.coords.latitude          + '\n' +
        	  'Longitude: '             + position.coords.longitude         + '\n' +
        	  'Altitude: '              + position.coords.altitude          + '\n' +
        	  'Accuracy: '              + position.coords.accuracy          + '\n' +
        	  'Altitude Accuracy: '     + position.coords.altitudeAccuracy  + '\n' +
        	  'Heading: '               + position.coords.heading           + '\n' +
        	  'Speed: '                 + position.coords.speed             + '\n' +
        	  'Timestamp: '             + position.timestamp                + '\n');
  		});
  	});

	hcApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	hcApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
	
	
    // Cordova is ready
    //
    function onDeviceReady() {
	    angular.bootstrap(document, ['hcApp']);
        
    }

    hcApp.factory('geolocation', function ($rootScope, cordovaReady) {
  return {
    getCurrentPosition: function (onSuccess, onError, options) {
      navigator.geolocation.getCurrentPosition(function () {
        var that = this,
          args = arguments;

        if (onSuccess) {
          $rootScope.$apply(function () {
            onSuccess.apply(that, args);
          });
        }
      }, function () {
        var that = this,
          args = arguments;

        if (onError) {
          $rootScope.$apply(function () {
            onError.apply(that, args);
          });
        }
      },
      options);
    }
  };
});
