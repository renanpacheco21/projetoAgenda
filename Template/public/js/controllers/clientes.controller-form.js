(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ClienteFormController", ClienteFormController);

    ClienteFormController.$inject = [
        "ClienteService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ClienteFormController(
        ClienteService,
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
                ClienteService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Processo";
                });
            }
        }

        function salvar() {
            ClienteService.save(vm.cadastro).success(function () {
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