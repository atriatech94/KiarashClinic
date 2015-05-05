angular.module('kiarash')
.controller('HomeController', function($scope,$rootScope,News) {
    
    var online = navigator.onLine;
    if(online){
        News.all()
        .success(function(data){
            $rootScope.news= data;
            $rootScope.datt= 1;
			
		
        });
    }else{
         $rootScope.datt= 0;
    }

});


