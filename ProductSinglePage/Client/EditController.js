﻿(function (app) {

    var EditController = function ($scope, productService) {



        $scope.save = function () {
            if ($scope.edit.product.Id) {
                //ürün var güncelleme
                productService.update($scope.edit.product).success(function () {
                    angular.extend($scope.products, $scope.edit.product);
                    $scope.edi.product = null;
                });
            }
            else {
                //ürün yok ekleme işlemi
                productService.create($scope.edit.product).success(function (product) {
                    $scope.products.push(product);
                    $scope.edit.product = null;
                });
            }
        };


        $scope.isShow = function () {

            return $scope.edit && $scope.edit.product;
        };
    };

    app.controller("EditController", EditController);

}(angular.module("ProductModul")))