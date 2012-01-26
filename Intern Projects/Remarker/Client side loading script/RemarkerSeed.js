
var globalCodeLocation = "file:///C:/Program Files/Git/Github Projects/sandbox/Intern Projects/Remarker";

function RMCodeLoader(){

	var _shortcutPressed = false;
	var _loaderOverlay
	var _loaderStatus
	var _loaderPercent = 0;
	var _itemsToLoad = 0;
	var _loaderProgressContainer
	var _loaderProgressBar
	
	//Custom key combination check that waits for keys and then launches remarker
	function keyCheck(e){
		if(!_shortcutPressed){
			var ev=(!e)?window.event:e;				
			var kC = (window.event)?window.event.keyCode:e.which;
			
			var altPressed  	=	ev.altKey;
			var ctrlPressed 	=	ev.ctrlKey;
			
			if(ctrlPressed && altPressed && kC==82){
				startUp();
				_shortcutPressed = true;
			}
		}
	}
	
	
	function startUp(){					
		createOverlay();
		showOverlay();
		loadAllTheCode();
	}
	
	function loadExternalJavascript(){
	
	}
	
	function createOverlay(){
				
		_loaderOverlay = document.createElement('DIV');		
		_loaderOverlay.className = 'rm_loader_overlay rm_ignore';
		_loaderOverlay.style.cssText = 'width:100%; height:100%; position:fixed; top:0px; left:0px; right:0px; display:none; opacity: .90; filter: alpha(opacity=90);';
		_loaderOverlay.style.cssText+="background-color: #555555; background-image: -moz-linear-gradient(center top, #333333, #000000);background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #333333), color-stop(1, #000000));background-image: linear-gradient(top, #333333, #000000);filter: progid:DXImageTransform.Microsoft.gradient(startColorStr = '#333333', EndColorStr = '#000000');background-repeat: no-repeat;"
		_loaderOverlay.style.padding = "20px"
		_loaderOverlay.style.zIndex = 2147009001;
		
			
		
		_loaderProgressContainer = document.createElement("DIV");
		_loaderProgressContainer.style.cssText = 'width:300px; overflow:hidden; padding:2px; background: #444444; border: 2px solid #222222; margin-bottom:0px; margin-left: auto; margin-right: auto; margin-top:200px; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px;';
		_loaderProgressContainer.style.cssText+="background-color: #FFFFFF; ";
		_loaderProgressContainer.style.cssText+="background-image: -moz-linear-gradient(center top, #CCC, #FFF); background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #CCC), color-stop(1, #FFF)); background-image: linear-gradient(top, #CCC, #FFF);";
		//_loaderProgressContainer.style.cssText+= "filter: progid:DXImageTransform.Microsoft.gradient(startColorStr = '#CCCCCC', EndColorStr = '#FFFFFF'); background-repeat: no-repeat;"
		_loaderOverlay.appendChild(_loaderProgressContainer);
		
		_loaderProgressBar = document.createElement("DIV");
		_loaderProgressBar.style.cssText = "height:18px; line-height:20px; border: 1px solid #CCBB00; margin:0px; padding:5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px;";
		_loaderProgressBar.style.cssText+="background-color: #FFDD00;";
		_loaderProgressBar.style.cssText+="background-image: -moz-linear-gradient(center top, #FD0, #CB0);background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #FD0), color-stop(1, #CB0));background-image: linear-gradient(top, #FD0, #CB0);";
		//_loaderProgressBar.style.cssText+= "filter: progid:DXImageTransform.Microsoft.gradient(startColorStr = '#FFDD00', EndColorStr = '#CCBB00'); background-repeat: no-repeat;"
		_loaderProgressContainer.appendChild(_loaderProgressBar);
		
		_loaderProgressBar.style.width = "0px";
		
		_loaderStatus = document.createElement("P");
		_loaderStatus.style.cssText = "font-family:'ff-meta-serif-web-pro',Georgia,serif;height:100%;color:#222222;text-shadow:1px 1px 1px rgba(255, 255, 255, 0.8);text-align: center;margin: -24px 0px 6px;";
		_loaderStatus.innerHTML = 'Loading Remarker 0%';
		_loaderProgressContainer.appendChild(_loaderStatus);	
		
		
		
		
		document.body.appendChild(_loaderOverlay);
		
	}
	
	//show the overlay
	function showOverlay(){
		_loaderOverlay.style.display = 'block';		
	}
	
	//Load a javascript file.
	function includeJS(url,callback){
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");
		script.className = "rm_src_in";
		script.src = url;
		var done = false;
		script.onload = script.onreadystatechange = function(){
				if( !done && ( !this.readyState || this.readyState == "loaded" || this.readyState == "complete") ){
						done = true;
						callback();						
						script.onload = script.onreadystatechange = null;
						head.removeChild( script );
				}
		};
		head.appendChild(script);			
	}
	
	//Load a css file.
	function includeCSS(url,callback){
		var head = document.getElementsByTagName("head")[0];
		var style = document.createElement('link');
		style.type = "text/css";
		style.className = "rm_src_in";
		style.href = url;
		style.rel = "stylesheet";	
		var done = false;
		style.onload = style.onreadystatechange = function(){
			if( !done && ( !this.readyState || this.readyState == "loaded" || this.readyState == "complete") ){
				done = true;
				//console.log('Loaded CSS from: ' + url);		
				callback();						
				style.onload = style.onreadystatechange = null;        	
			}
		};
		head.appendChild(style);		
	}	
	
	//first function to bind keypresses
	function onload(){
		document.onkeypress = keyCheck;	//IE only send onkeypress for characters
		document.onkeydown = keyCheck; 
		document.onkeyup = keyCheck;	}
	
	//use include methods to pull javascript from server
	function loadAllTheCode(){
		includeCSS(globalCodeLocation + '/css/remarkerStyles.css',function(){});
		_itemsToLoad = 6;
		
		includeJS('http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',function(){incPercent();});
		includeJS(globalCodeLocation + '/js/remarkerLogin.js', function(){incPercent();});
		includeJS(globalCodeLocation + '/js/remarkerOverlay.js', function(){incPercent();});		
		includeJS(globalCodeLocation + '/js/remarkerMain.js', function(){incPercent();});
		includeJS(globalCodeLocation + '/js/remarkerSideBar.js', function(){incPercent();});
		includeJS(globalCodeLocation + '/js/remarkerUserData.js', function(){incPercent();});
		
		
	}
	
	//increase the loading percentage and once done launch the afterLoad method
	function incPercent(){
		_loaderPercent += Math.ceil(100 / _itemsToLoad);		
		_loaderStatus.innerHTML = 'Loading Remarker '+_loaderPercent+'%';
		_loaderProgressBar.style.width = "" + ((_loaderPercent*3)-12) + "px"
		if(_loaderPercent>=100){
			//setTimeout("rmCodeLoader.afterLoad()",200);	
			afterLoad();			
		}	
	}
	
	//create all the objects here.
	function afterLoad(){
		_loaderOverlay.style.display = 'none';		
		remarker = new RemarkerMain();
			
	}
	
	//////////////////////////////////////////////////////////
	window.onload = onload;
	
	return {
		afterLoad:afterLoad
	
	
	}
		
}

var remarker = null;
var rmCodeLoader = new RMCodeLoader();

