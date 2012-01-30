//JSONP methods

function RMComms(){
	
	var packetBuffer = new Array();
	var reqIdCount = 0;
	var waiting = false;
	var waitingO;
	var actionCallBack;
	/*
	
	Page looks something like: "handlePacket('{json here}');"
	
	*/
	
	function handlePacket(dataString){
		console.log('got data');
		waiting = false;
		//console.log(dataString);
		
		var json = jQuery.parseJSON(dataString);	
		
		
		if(waitingO)waitingO.destroy();
		
		actionCallBack(json);
		
	
	}
	
	//callback IS A STRING!!!!
	function send(url,_actionCallBack){			
		if(waiting)return; //TODO: THROW ERRRORRRRR
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");
		actionCallBack = _actionCallBack;
		script.className = "rm_src_in";
		script.src = url;
		var done = false;
		waiting = true;
		waitingO = new remarkerOverlay();
		script.onload = script.onreadystatechange = function(){
				if( !done && ( !this.readyState || this.readyState == "loaded" || this.readyState == "complete") ){
						done = true;						
						script.onload = script.onreadystatechange = null;
						head.removeChild( script );
				}
		};
		head.appendChild(script);	
	}
	
	
	return {
		handlePacket: handlePacket,
		send:send,
		waiting: waiting
	}
}
