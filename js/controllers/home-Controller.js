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
                        
    
    /*var online = navigator.onLine;
    if(online){
        
    }*/
    
})
.directive('swSwipe', function (){
		return {
			link: function($scope) {
                    swiper2 = new Swiper('.swiper-container',{
					 pagination: '.swiper-pagination',
       				 slidesPerView: 'auto',
                      followFinger : false,
				});
                
                
			},//end link
		}
});