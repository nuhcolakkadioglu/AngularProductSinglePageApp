(function(app)
{
    var productService = function($http,productUrl)
    {
        var getAll = function () {
            return $http.get(productUrl);
        };

        var getById = function (id) {
            return $http.get(productUrl + id);
        };

        var update = function (product) {
            return $http.put(productUrl + product.Id, product);
        };

        var create = function (product) {
            return $http.post(productUrl, product);
        };

        var destroy = function (product) {
            return $http.delete(productUrl + product.Id);
        };

        return {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            delete: destroy
        };

    }

    app.factory("productService", productService);


}(angular.module("ProductModul")))