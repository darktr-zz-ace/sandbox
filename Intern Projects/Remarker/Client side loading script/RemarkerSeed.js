

function RMCodeLoader(){

	var _shortcutPressed = false;
	var _loaderOverlay
	var _loaderStatus
	var _loaderPercent = 0;
	var _itemsToLoad = 0;
	
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
		_loaderOverlay.style.cssText = 'width:100%; height:100%; position:fixed; top:0px; left:0px; right:0px; display:none; opacity: .80; filter: alpha(opacity=80);';
		_loaderOverlay.style.cssText+="background-color: #555555;background-image: -moz-linear-gradient(center top, #333333, #000000);background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #333333), color-stop(1, #000000));background-image: linear-gradient(top, #333333, #000000);filter: progid:DXImageTransform.Microsoft.gradient(startColorStr = '#333333', EndColorStr = '#000000');background-repeat: no-repeat;"
		_loaderOverlay.style.padding = "20px"
		_loaderOverlay.style.zIndex = 2147009001;
		
		_loaderStatus = document.createElement("P");
		_loaderStatus.style.cssText = 'color: #EEEEEE; font-size: 20px; font-family: Verdana, Arial, SunSans-Regular, Sans-Serif;';;
		_loaderStatus.innerHTML = 'Loading Remarker Javascript 0%';
		_loaderOverlay.appendChild(_loaderStatus);		
		
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
						console.log('Loaded JS from: ' + url);	
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
				console.log('Loaded CSS from: ' + url);		
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
	
	function loadAllTheCode(){
		includeCSS('http://remarker.co.za/remarkerStyles.css',function(){});
		_itemsToLoad = 1;
		includeJS('http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',function(){incPercent()});
		
	
	
	}
	
	function incPercent(){
		_loaderPercent += Math.ceil(100 / _itemsToLoad);
		_loaderStatus.innerHTML = 'Loading Remarker Javascript '+_loaderPercent+'%';
		if(_loaderPercent>=100){
			remarker = 100000;
		}
	
	}
	
	//////////////////////////////////////////////////////////
	window.onload = onload;
		
}
var remarker = null;
var rmCodeLoader = new RMCodeLoader();

