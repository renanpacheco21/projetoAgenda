(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("LocacaoListController", LocacaoListController);

    LocacaoListController.$inject = ["LocacaoService"];

    function LocacaoListController(LocacaoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            LocacaoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            LocacaoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();