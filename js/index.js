
function onLoad()
 {
    document.addEventListener("deviceready", onDeviceReady, true);
   
 }
function onDeviceReady(){
	
	
	document.addEventListener("backbutton",amintest, false);
     $(document).on('touchmove',function(e){
          e.preventDefault();
     });
     $('body').on('touchstart','.scrollable',function(e) {
    if (e.currentTarget.scrollTop === 0) {
      e.currentTarget.scrollTop = 1;
    } else if (e.currentTarget.scrollHeight
              === e.currentTarget.scrollTop
                  + e.currentTarget.offsetHeight) {
      e.currentTarget.scrollTop -= 1;
    }
  });
  $('body').on('touchmove','.scrollable',function(e) {
    e.stopPropagation();
  }); 
}
    
document.addEventListener("backbutton",amintest, false);

function amintest(){
                        
    
    
    var loc =   window.location.hash;
    loc = loc.replace("#/", "");
    var res = loc.split("/");

    if($.fancybox.isOpen)
	{
		$.fancybox.close();
		return false;
	}
    if(loc == "home" || loc == "")
    {
                                           
         var r = confirm("Are you sure you want to exit ?");
          if (r == true) {
        navigator.app.exitApp(); 
         }
    }
    
    else if(res[0]=="blogdetail")
    {
	   	 window.location.hash = "#/blog";							
    }
    else if(loc=="gallery/2" || loc=="gallery/1" || loc== "gallery/3" || loc=="gallery/4")
    {
         window.location.hash = "#/gallery";
    }
	 else if(loc=="popupl/1" || loc=="popupl/2" || loc== "popupl/3" || loc=="popupl/4" || loc=="popupl/5" || loc=="popupl/6" )
    {
         window.location.hash = "#/lipomatic";
    }
	 else if(loc=="popupl/7" || loc=="popupl/8" )
    {
         window.location.hash = "#/service";
    }
                             
    else
    {
	   								
         window.location.hash = "#/home";
    }
    return false;
}
				
function getDeviceProperty()
{
 
}
 function exitFromApp()
{
    var r = confirm("Are you sure you want to exit ?");
    if (r == true) {
        navigator.app.exitApp(); 
    } else {
       
    }
 	 
}


