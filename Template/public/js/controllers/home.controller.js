(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.processoPage = processoPage;

        activate();

        function activate() {
        }

        function processoPage() {
            $location.path("/processo");
        }
    }
})();