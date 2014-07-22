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
	hcApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Computing Location';
	});

	hcApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	hcApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
	
	// bootstrap application
	// Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
	    angular.bootstrap(document, ['YourAppName']);
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        $scope.geoMessage = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                   position.timestamp          + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        $scope.geoMessage = 'code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n';
    }
