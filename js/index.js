
function onLoad()
 {
    document.addEventListener("deviceready", onDeviceReady, true);
   
 }
function onDeviceReady(){
	
	
    
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


