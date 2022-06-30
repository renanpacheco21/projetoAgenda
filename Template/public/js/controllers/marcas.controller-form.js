(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("MarcaFormController", MarcaFormController);

        MarcaFormController.$inject = [
        "MarcaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function MarcaFormController(
        MarcaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Marca";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                MarcaService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Marca";
                });
            }
        }

        function salvar() {
            MarcaService.save(vm.cadastro).success(function () {
                $location.path("/marca");
                alert("Marca cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();