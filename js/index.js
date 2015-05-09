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
                                           
       var r = confirm("آیا برای خروج اطمینان دارید ؟");
        if (r == true) {
        navigator.app.exitApp(); 
       }
    } 
	else if(loc == "gallery/2" || loc == "gallery/1" || loc == "gallery/3" || loc == "gallery/4")
	{
		window.location.hash = "#/gallery";
		
	}
	else if(res[0]=="blogdetail")
	{
         window.location.hash = "#/blog";
	}
    else
    {
	   								
         window.location.hash = "#/";
    }
    return false;
}



function onLoad()
 {
    document.addEventListener("deviceready", onDeviceReady, true);
   
 }
function onDeviceReady(){
	
	
    
}
				
function getDeviceProperty()
{
  
}
 function exitFromApp()
{
    var r = confirm("آیا برای خروج اطمینان دارید ؟");
    if (r == true) {
        navigator.app.exitApp(); 
    } else {
       
    }
 	 
}


