(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ModeloFormController", ModeloFormController);

        ModeloFormController.$inject = [
        "ModeloService",
        "OpcionalService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ModeloFormController(
        ModeloService,
        OpcionalService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Modelo";
        vm.item = null;
        vm.salvar = salvar;

        vm.adicionarItem = adicionarItem;
        vm.salvarItem = salvarItem;
        vm.editarItem = editarItem;
        vm.removerItem = removerItem;
        var itemSelecionado = -1;

        activate();

        function activate() {
            if ($routeParams.id) {
                ModeloService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Modelo";
                });
            }
        }

        function salvar() {
            ModeloService.save(vm.cadastro).success(function () {
                $location.path("/modelo");
                alert("Modelo cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }



        function adicionarItem() {
            vm.item = {}
            vm.modalTitulo = 'Novo Item'
            itemSelecionado = (vm.cadastro.opcionais && vm.cadastro.opcionais.length) || 0;
        }

        function salvarItem() {
            OpcionalService.findById(vm.item.opcional.id).success(function(data) {
                vm.item = data;
                vm.cadastro.opcionais = vm.cadastro.opcionais || [];
                vm.cadastro.opcionais[itemSelecionado] = vm.item;
                itemSelecionado = -1;
                vm.item = null;
                $scope.$apply();
            });
        }

        function editarItem(item) {
            itemSelecionado = vm.cadastro.opcionais.indexOf(item);
            vm.modalTitulo = 'Editando Item'
            vm.item = angular.copy(item);
        }

        function removerItem(item) {
            let pos = vm.cadastro.opcionais.indexOf(item);
            vm.cadastro.opcionais.splice(pos, 1);
            $scope.$apply();
        }

    }
})();