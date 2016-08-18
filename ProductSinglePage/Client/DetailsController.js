(function (app) {

    var DetailsController = function ($scope, productService, $routeParams) {

        var id = $routeParams.id;

        productService.getById(id).success(function (result) {
            $scope.products = result;
        });


        //$http.get("/api/Products/"+id).success(function (result) {
        //    $scope.products = result;
        //})

        $scope.edit = function () {

            $scope.edit.product = angular.copy($scope.products);



        };


    }

    app.controller("DetailsController", DetailsController);

}(angular.module("ProductModul")))