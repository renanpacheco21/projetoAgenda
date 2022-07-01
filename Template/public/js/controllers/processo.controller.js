(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ProcessoListController", ProcessoListController);

        ProcessoListController.$inject = ["ProcessoService"];

    function ProcessoListController(ProcessoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ProcessoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ProcessoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();