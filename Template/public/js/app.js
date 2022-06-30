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
            .when("/cidade", {
                templateUrl: "partials/cidade.html",
            })
            .when("/cidade/:id", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/cidade/new", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/estado", {
                templateUrl: "partials/estado.html",
            })
            .when("/estado/:id", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/estado/new", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/pais", {
                templateUrl: "partials/pais.html",
            })
            .when("/pais/:id", {
                templateUrl: "partials/pais-form.html",
            })
            .when("/pais/new", {
                templateUrl: "partials/pais-form.html",
            })
            .when("/marca", {
                templateUrl: "partials/marca.html",
            })
            .when("/marca/:id", {
                templateUrl: "partials/marca-form.html",
            })
            .when("/marca/new", {
                templateUrl: "partials/marca-form.html",
            })
            .when("/modelo", {
                templateUrl: "partials/modelo.html",
            })
            .when("/modelo/:id", {
                templateUrl: "partials/modelo-form.html",
            })
            .when("/modelo/new", {
                templateUrl: "partials/modelo-form.html",
            })
            .when("/opcional", {
                templateUrl: "partials/opcional.html",
            })
            .when("/opcional/:id", {
                templateUrl: "partials/opcional-form.html",
            })
            .when("/opcional/new", {
                templateUrl: "partials/opcional-form.html",
            })
            .when("/cliente", {
                templateUrl: "partials/cliente.html",
            })
            .when("/cliente/:id", {
                templateUrl: "partials/cliente-form.html",
            })
            .when("/cliente/new", {
                templateUrl: "partials/cliente-form.html",
            })
            .when("/veiculo", {
                templateUrl: "partials/veiculo.html",
            })
            .when("/veiculo/:id", {
                templateUrl: "partials/veiculo-form.html",
            })
            .when("/veiculo/new", {
                templateUrl: "partials/veiculo-form.html",
            })
            .when("/locacao", {
                templateUrl: "partials/locacao.html",
            })
            .when("/locacao/:id", {
                templateUrl: "partials/locacao-form.html",
            })
            .when("/locacao/new", {
                templateUrl: "partials/locacao-form.html",
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