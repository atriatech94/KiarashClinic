angular.module('kiarash')
.controller('LipomaticController', function($scope) {

})
.directive('fancyBox', function (){
		return {
			link: function($scope) {
                $('.icon ,.service_popup').click(function(){
                    page = $(this).attr('page')
                   $.fancybox.open({
                        href : 'page/popupl/'+page+'.html',
                        type : 'iframe',
                        padding : 5
                    });
                });
               
                $('.fancybox-thumbs').fancybox({
                    prevEffect : 'none',
                    nextEffect : 'none',
                    padding : 0 ,

                    closeBtn  : true,
                    arrows    : false,
                    nextClick : true,

                    helpers : {
                        thumbs : {
                            width  : 50,
                            height : 50
                        }
                    },
                     onUpdate:function(){
                         /*========================================================*/
                          $('.fancybox-overlay').hammer().on("swiperight", function(event) {
                   
                               $.fancybox.next();
                              return false;
                            });
                            $('.fancybox-overlay').hammer().on("swipeleft", function(event) {
                               $.fancybox.prev();
                              
                                 return false;
                            });
                            /*========================================================*/
                     }
                });
				$(document).ready(function() {
				  $("*img").panzoom();
				});
                /*==========================================*/
                
                 swiper2 = new Swiper('.swiper-container',{
					 pagination: '.swiper-pagination',
       				 slidesPerView: 'auto',
                      followFinger : false,
				});
                
               /*==========================================*/
                didi = 1000; 
                $('div[data-role="collapsible"] h4').bind("click",function(){
                    if( didi != $(this).parent().index() )
                    {
                        $('div[data-role="collapsible"] p').slideUp(100);
                        $(this).next('p').slideDown(100);    
                        didi = $(this).parent().index() ;
                   
                    }else{
                        $('div[data-role="collapsible"] p').slideUp(100);
                        didi = 1000 ;
                     }
                   
                 });
                /*==========================================*/
			},//end link
		}
});