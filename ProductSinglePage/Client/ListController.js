(function (app) {

    var ListController = function ($scope, productService) {

        //$http.get("/api/Products").success(function (result) {
        //    $scope.products = result;
        //})


        productService.getAll().success(function (result) {
            $scope.products = result
        });


        $scope.create = function () {
            $scope.edit = {
                product: {
                    Name: "",
                    Price: 100,
                    Count: 10
                }
            };
        }


        $scope.delete = function (product) {

            productService.delete(product).success(function () {


                for (var i = 0; i < $scope.products.length; i++) {
                    if ($scope.products[i].Id == product.Id) {
                        $scope.products.splice(i, 1);
                        break;
                    }
                }

            });
           

        };

    }

    app.controller("ListController", ListController);

}(angular.module("ProductModul")))