//JSONP methods

function RMComms(){
	
	var packetBuffer = new Array();
	var reqIdCount = 0;
	var waiting = false;
	var waitingO;
	/*
	
	Page looks something like: "handlePacket('{json here}');"
	
	*/
	
	function handlePacket(dataString){
		waiting = false;
		var json = jQuery.parseJSON(dataString);
		console.log(dataString);
		
		var error = json.error;
		if(!error){}else{
		    
		    rID = error.rID;    
		    packetBuffer[rID] = 0;
		    
			var o = new remarkerOverlay(true);			
		    o._popup.innerHTML=  '<p class="rm_er_head">FATAL ERROR</p>' +
		                                                ''+ error.message + '' + 
		                                                '<p class="rm_er_foot">Remarker cannot continue..</p>';
		}
		if(waitingO)waitingO.destroy;
		
		
		
	
	}
	
	//callback IS A STRING!!!!
	function send(url){			
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");
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
