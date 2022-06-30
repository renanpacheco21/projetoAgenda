(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("VeiculoListController", VeiculoListController);

        VeiculoListController.$inject = ["VeiculoService"];

    function VeiculoListController(VeiculoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            VeiculoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            VeiculoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();