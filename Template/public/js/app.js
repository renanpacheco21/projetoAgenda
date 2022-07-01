angular
    .module("MyApp", ["ngRoute", "satellizer"])
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "partials/home.html",
            })
            .when("/home", {
                templateUrl: "partials/home.html",
            })
            .when("/processo", {
                templateUrl: "partials/processo.html",
            })
            .when("/processo/:id", {
                templateUrl: "partials/processo-form.html",
            })
            .when("/processo/new", {
                templateUrl: "partials/processo-form.html",
            })
            .otherwise({
                templateUrl: "partials/404.html",
            });
    })
    .run(function($rootScope, $window) {
        
    })
    .directive("ngConfirmClick", [
        function() {
            return {
                link: function(scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind("click", function(event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction);
                        }
                    });
                },
            };
        },
    ]);