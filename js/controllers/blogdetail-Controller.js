angular.module('kiarash')
.controller('BlogdetailController', function($scope,$rootScope,$routeParams,$filter,$sce) {
      $scope.detail = $filter('filter')($rootScope.news, {id:$routeParams.id});
     $scope.detail[0].description = $sce.trustAsHtml($scope.detail[0].description);
     $scope.detail[0].title = $sce.trustAsHtml($scope.detail[0].title);
    
})