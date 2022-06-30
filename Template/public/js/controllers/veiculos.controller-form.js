(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("VeiculoFormController", VeiculoFormController);

        VeiculoFormController.$inject = [
        "VeiculoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function VeiculoFormController(
        VeiculoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Veiculo";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                VeiculoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Veiculo";
                });
            }
        }

        function salvar() {
            VeiculoService.save(vm.cadastro).success(function () {
                $location.path("/veiculo");
                alert("Veiculo cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();