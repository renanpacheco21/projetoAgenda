(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ModeloListController", ModeloListController);

        ModeloListController.$inject = ["ModeloService"];

    function ModeloListController(ModeloService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ModeloService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ModeloService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();