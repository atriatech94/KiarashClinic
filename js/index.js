
function onLoad()
 {
    document.addEventListener("deviceready", onDeviceReady, true);
   
 }
function onDeviceReady(){
	
	
	document.addEventListener("backbutton",amintest, false);
	// getDeviceProperty();
    
}
    
document.addEventListener("backbutton",amintest, false);

function amintest(){
                        
    
    
    var loc =   window.location.hash;
    loc = loc.replace("#/", "");
    var res = loc.split("/");

    if(loc == "home" || loc == "")
    {
                                           
        navigator.app.exitApp(); 
    }
    
    else if(res[0]=="blogdetail")
    {
	   	 window.location.hash = "#/blog";							
    }
    else if(loc=="gallery/2" || loc=="gallery/1" || loc== "gallery/3" || loc=="gallery/4")
    {
         window.location.hash = "#/gallery";
    }
                             
    else
    {
	   								
         window.location.hash = "#/home";
    }
    return false;
}
				
function getDeviceProperty()
{
   // var deviceOS  = device.platform;  //fetch the device operating system
  //  var deviceOSVersion = device.version;  //fetch the device OS version
   // var  version = deviceOSVersion.split('.');
   
    /* if(deviceOS == 'Android' && version[0]=='4' && version[1]=='4') 
      {return 1 ;}
      else
      {return 0 ;} 
	*/
}
 function exitFromApp()
{
    var r = confirm("Are you sure you want to exit ?");
    if (r == true) {
        navigator.app.exitApp(); 
    } else {
       
    }
 	 
}


