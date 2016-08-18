(function () {

    var app = angular.module("ProductModul", ["ngRoute"]);

    var config = function($routeProvider)
    {
        $routeProvider.when("/List", { templateUrl: "/Client/views/List.html" })
        .when("/Details/:id", { templateUrl: "/Client/views/Details.html" })
        .otherwise({ redirectTo: "/List" })
    }
    app.constant("productUrl","/api/products/");
    app.config(config);

}())