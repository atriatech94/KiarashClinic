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


})
.directive('swSwipe', [ '$location', function ($location){
		return {
			link: function($scope) {
				
			    swiper2 = new Swiper('.swiper-container',{
						   pagination: '.swiper-pagination',
						   slidesPerView: 'auto',
						   followFinger : false,      	
					 });  
				  
				$(window).on('hashchange', function(e){
					  
						   swiper2 = new Swiper('.swiper-container',{
						   pagination: '.swiper-pagination',
						   slidesPerView: 'auto',
						   followFinger : false,
					   });
					 
                   
				});
				
               $('body').delegate(".header_page .fir","click",function(){
				     var flags = swiper2.progress;
                if(flags==0){swiper2.slideNext(); }else{swiper2.slidePrev();}
                });
				
				
                /*========================================*/
                $(window).on('hashchange', function(e){
                   var loc =  $location.path();
                   loc = loc.replace("/", "");
                   $('.navbar li a').removeClass('active');
                   $('#'+loc).children("a").addClass('active');
				 
		
				 
                });
                
                /*===========================================================*/
                $('.navbar li').on("click",function(){
                    $('.navbar li a').removeClass('active');
                    $(this).children("a").addClass('active');
				
					
					
					
                
                });
			},//end link
		}
}]);

