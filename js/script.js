$(document).on( "pagebeforeshow" ,function() {
$.mobile.defaultPageTransition = "flow";
 /*--------------------for Android 4.4.x ----------------------*/
		 $.event.special.swipe.horizontalDistanceThreshold =10;
		/*--------------------for other divice ----------------------*/
		  $('[data-role="page"]').on("swipeleft ",function(){
                    console.log('swipe');
                    $.mobile.activePage.find('#right-panel').panel("open");
                });
		/*--------------------for other divice ----------------------*/
	

/*----------------------------------*/	
//alert( $.mobile.activePage.attr('id') );
/*----------------------------------*/		
var wid = $(window).width();
$('*.my-simple-gallery figure').height( (wid) * (0.22) );
$(window).resize(function(){
    
    wid = $(window).width();
    $('*.my-simple-gallery figure').height( (wid) * (0.22) );

});
/*-----------------------------------*/
    $(document).bind( "pagechange", function( event ) { 
      
    var active_page =  $.mobile.activePage.attr('id');
     var $body = $(' html');
    if(active_page == "index" )
    {   
		$body.removeClass('background2');
        $body.addClass('background1');


    }
    else 
    {
        $body.removeClass('background1');
        $body.addClass('background2');
	}
        
        
});
/*----------------------------------*/			
	$("[data-role='collapsible']").collapsible({
	
			collapse: function( event, ui ) {
				$(this).children().next().slideUp(150);
			},
			expand: function( event, ui ) {
				$(this).children().next().hide();
				$(this).children().next().slideDown(150);
			}
	
		});
		
	});
	
	
	
	$(document).bind('panelopen', function (e, data) {
		 $('.logo_menu img').addClass('panel_trn');
        $('.logo_menu h3').addClass('h3_menu');
	});
	$(document).bind('panelclose', function (e, data) {
		 $('.logo_menu img').removeClass('panel_trn');
        $('.logo_menu h3').removeClass('h3_menu');
	});
	
	$( document ).bind( "pagebeforecreate", '[data-role="page"]', function() {
		var initPhotoSwipeFromDOM = function(gallerySelector) {
				
					// parse slide data (url, title, size ...) from DOM elements 
					// (children of gallerySelector)
					var parseThumbnailElements = function(el) {
						var thumbElements = el.childNodes,
							numNodes = thumbElements.length,
							items = [],
							figureEl,
							childElements,
							linkEl,
							size,
							item;
				
						for(var i = 0; i < numNodes; i++) {
				
				
							figureEl = thumbElements[i]; // <figure> element
				
							// include only element nodes 
							if(figureEl.nodeType !== 1) {
								continue;
							}
				
							linkEl = figureEl.children[0]; // <a> element
							
							size = linkEl.getAttribute('data-size').split('x');
				
							// create slide object
							item = {
								src: linkEl.getAttribute('href'),
								w: parseInt(size[0], 10),
								h: parseInt(size[1], 10)
							};
				
							
				
							if(figureEl.children.length > 1) {
								// <figcaption> content
								item.title = figureEl.children[1].innerHTML; 
							}
				 
							if(linkEl.children.length > 0) {
								// <img> thumbnail element, retrieving thumbnail url
								item.msrc = linkEl.children[0].getAttribute('src');
							} 
						   
							item.el = figureEl; // save link to element for getThumbBoundsFn
							items.push(item);
						}
				
						return items;
					};
				
					// find nearest parent element
					var closest = function closest(el, fn) {
						return el && ( fn(el) ? el : closest(el.parentNode, fn) );
					};
				
					// triggers when user clicks on thumbnail
					var onThumbnailsClick = function(e) {
						e = e || window.event;
						e.preventDefault ? e.preventDefault() : e.returnValue = false;
				
						var eTarget = e.target || e.srcElement;
				
						var clickedListItem = closest(eTarget, function(el) {
							return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
						});
				
						if(!clickedListItem) {
							return;
						}
				
				
						// find index of clicked item
						var clickedGallery = clickedListItem.parentNode,
							childNodes = clickedListItem.parentNode.childNodes,
							numChildNodes = childNodes.length,
							nodeIndex = 0,
							index;
				
						for (var i = 0; i < numChildNodes; i++) {
							if(childNodes[i].nodeType !== 1) { 
								continue; 
							}
				
							if(childNodes[i] === clickedListItem) {
								index = nodeIndex;
								break;
							}
							nodeIndex++;
						}
				
				
				
						if(index >= 0) {
							openPhotoSwipe( index, clickedGallery );
						}
						return false;
					};
				
					// parse picture index and gallery index from URL (#&pid=1&gid=2)
					var photoswipeParseHash = function() {
						var hash = window.location.hash.substring(1),
						params = {};
				
						if(hash.length < 5) {
							return params;
						}
				
						var vars = hash.split('&');
						for (var i = 0; i < vars.length; i++) {
							if(!vars[i]) {
								continue;
							}
							var pair = vars[i].split('=');  
							if(pair.length < 2) {
								continue;
							}           
							params[pair[0]] = pair[1];
						}
				
						if(params.gid) {
							params.gid = parseInt(params.gid, 10);
						}
				
						if(!params.hasOwnProperty('pid')) {
							return params;
						}
						params.pid = parseInt(params.pid, 10);
						return params;
					};
				
					var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
						var pswpElement = document.querySelectorAll('.pswp')[0],
							gallery,
							options,
							items;
				
						items = parseThumbnailElements(galleryElement);
				
						// define options (if needed)
						options = {
							index: index,
				
							// define gallery index (for URL)
							galleryUID: galleryElement.getAttribute('data-pswp-uid'),
				
							getThumbBoundsFn: function(index) {
								// See Options -> getThumbBoundsFn section of docs for more info
								var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
									pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
									rect = thumbnail.getBoundingClientRect(); 
				
								return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
							},
				
							// history & focus options are disabled on CodePen
							// remove these lines in real life: 
						   history: false,
						   focus: false	
				
						};
				
						if(disableAnimation) {
							options.showAnimationDuration = 0;
						}
				
						// Pass data to PhotoSwipe and initialize it
						gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
						gallery.init();
					};
				
					// loop through all gallery elements and bind events
					var galleryElements = document.querySelectorAll( gallerySelector );
				
					for(var i = 0, l = galleryElements.length; i < l; i++) {
						galleryElements[i].setAttribute('data-pswp-uid', i+1);
						galleryElements[i].onclick = onThumbnailsClick;
					}
				
					// Parse URL and open gallery if it contains #&pid=3&gid=1
					var hashData = photoswipeParseHash();
					if(hashData.pid > 0 && hashData.gid > 0) {
						openPhotoSwipe( hashData.pid - 1 ,  galleryElements[ hashData.gid - 1 ], true );
					}
				};
				
				// execute above function
				initPhotoSwipeFromDOM('.my-simple-gallery');
		
		
	

});
	/*===========================================================*/
var param = 'null' ;
function param_num(num){
	param = num;
}
function myTrim(x) {
    return $.trim(x);
}
function isNumberKey(evt)//???? ?? ready ????
{
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
}
$(function(){
    
    $('#contact_us').submit(function(event){
       event.preventDefault;
        /*Form validation*/
        name =  $("input[name='name']").val();
        tell = $("input[name='tell']").val();
        email = $("input[name='email']").val();
        text =  $("textarea[name='text']").val();
      
        if( name== "" || tell == "" || email == "" || text == "")
        {
			
            $.mobile.loading( "show", {
                text: "یک یا چند فیلد خالی است",
                  textVisible: true,theme: 'b',textonly: true,html: "",transtion:"popup"
             });
           return false;
        }

        if(name.length < 3)
        {
            $.mobile.loading( "show", {
                            text: "نام باید بیشتر از 3 کارکتر باشد",
                              textVisible: true,theme: 'b',textonly: true,html: "",transtion:"popup"
            });
            return false;
        }
        
        atpos = email.indexOf("@");
        dotpos = email.lastIndexOf(".");
        if (atpos < 1 || ( dotpos - atpos < 2 )) 
        {
            $.mobile.loading( "show", {
                    text: "فرمت ایمیل وارد شده صحیح نیست",
                  textVisible: true,theme: 'b',textonly: true,html: "",transtion:"popup"
            });
           return false;
        }
        if(text.length < 10 )
        {
            $.mobile.loading( "show", {
                              text: "متن پیام کوتاه است",
                              textVisible: true,theme: 'b',textonly: true,html: "",transtion:"popup"
            });
            return false;
        }
       
        
         /*end Form validation*/
        var form = $('form') ; 
        var  url = $('form').attr("action");
        var  form_data = form.serialize();
        $.ajax({
            url: url ,
            type: 'GET',
            data: form_data ,
            success: function (response) {
                if(response=="send"){
                     $.mobile.loading( "show", {
                            text: "پیام شما با موفقیت ارسال شد پس از بررسی دکتر قاسمی جواب پیام به ایمیل شما ارسال خواهد شد ",
                               textVisible: true,theme: 'b',textonly: true,html: "",transtion:"popup"
                      });
                    form.trigger('reset');
                }//end if
            },
            error: function () {
                  $.mobile.loading( "show", {
                            text: "مشکل در ارسال اطلاعات لطفا مجدد تلاش کنید",
                              textVisible: true,theme: 'b',textonly: true,html: "",transtion:"popup"
                      });
            }
        }); 
        return false;
    });// end contact_us
    
    $('body').bind("click",function(){
         $.mobile.loading('hide');
    });
});// end function
