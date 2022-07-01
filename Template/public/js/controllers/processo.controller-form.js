(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ProcessoFormController", ProcessoFormController);

        ProcessoFormController.$inject = [
        "ProcessoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ProcessoFormController(
        ProcessoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Processo";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                ProcessoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Processo";
                });
            }
        }

        function salvar() {
            ProcessoService.save(vm.cadastro).success(function () {
                $location.path("/processo");
                alert("Processo cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();