(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("MarcaListController", MarcaListController);

        MarcaListController.$inject = ["MarcaService"];

    function MarcaListController(MarcaService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            MarcaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            MarcaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();