(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("LocacaoFormController", LocacaoFormController);

        LocacaoFormController.$inject = [
        "LocacaoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function LocacaoFormController(
        LocacaoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Nova Locação";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                LocacaoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Locação";
                });
            }
        }

        function salvar() {
            LocacaoService.save(vm.cadastro).success(function () {
                $location.path("/locacao");
                alert("Locação cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();