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
				
				       
				      document.addEventListener("backbutton",amintest, false);
					  
				         function amintest(){
							 
								var loc =  $location.path();
								loc = loc.replace("/", "");
								var res = loc.split("/");
								if(loc == "home" || loc == "")
									 {
										 navigator.app.exitApp(); 
									 }
								
								else if(res[0]=="blogdetail")
									{
										window.location = "#/blog";
									}
								else if(loc=="gallery/2" || loc=="gallery/1" || loc== "gallery/3" || loc=="gallery/4")
									{
										window.location = "#/gallery";
									}
								else
									{
									
										window.location = "#/home";
									}
								return false;
					}
				
				$(window).on('hashchange', function(e){
					  
						   swiper2 = new Swiper('.swiper-container',{
						   pagination: '.swiper-pagination',
						   slidesPerView: 'auto',
						   followFinger : false,
					   });

				});
                var flags = 0
               $('body').delegate(".header_page .fir","click",function(){
                   if(flags==0){swiper2.slideNext();flags ++; }else{swiper2.slidePrev();flags-- ;}
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
                    swiper2.slidePrev();
                });
			},//end link
		}
}]);

