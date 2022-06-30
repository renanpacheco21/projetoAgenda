(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ClienteListController", ClienteListController);

        ClienteListController.$inject = ["ClienteService"];

    function ClienteListController(ClienteService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ClienteService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ClienteService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();