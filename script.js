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
	hcApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Computing Location';
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
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

    // onSuccess Geolocation
    //
    function onSuccess(position) {
    //alert('here');
        var geoLocationString = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp          + '<br />';
    	alert geoLocationString;
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        $scope.geoMessage = 'code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n';
    }
