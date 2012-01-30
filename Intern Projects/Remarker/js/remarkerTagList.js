function RMTagList(){
	var tagCount;
	var tagArray;
	
	function create(){
		tagCount = 0;
		tagArray = new Array();
	}
	
	function addTag(user, content, time, bug, design, important, xpath){			
		tagCount = tagArray.push(new RMTag(user, content, time, bug, design, important, xpath));
		
	}
	
	function getSingleTagHTML(i){	
	console.log(tagArray[i]);
	console.log(i);
		
		return '<div class="rmtagHeading"><span class="rms1">'+tagArray[i]._user+'</span><span class="rms2">'+tagArray[i]._time+'</span></div>'+
				'<div class="rmtagContent">'+tagArray[i]._content+'</div>';
	
	}
	
	function getAllTags(){
		var s = '';
		for (i=0;i<(tagCount);i++){
			s+=getSingleTagHTML(i);
		}
		return s;
	}
	
	
	
	function getFromServer(){
			tagCount = 0;
			tagArray = new Array();
			
			remarker.rm_comms.send('http://192.168.1.8:8080/newRemarker/tag/remoteList',tagsFromServer);
			
	
	}
	
	function tagsFromServer(json){
	
		var c = json.total;
		tagCount = c;
		console.log(c);
		var t = json.tags;
		for (i=0;i<c;i++){
			
			var ti = t[i];
			console.log(ti);
			console.log(ti.username+' '+ ti.content+' '+  ti.dateCreated+' '+  ti.bug+' '+  ti.design+' '+  ti.important+' '+  ti.xpath+' '+  ti.done);
			addTag(ti.username, ti.content, ti.dateCreated, ti.bug, ti.design, ti.important, ti.xpath, ti.done);
		}
		
		document.getElementById("innerC").innerHTML = getAllTags();
		
	
	}
	
	
	create();
	
	return {
	
		tagCount : tagCount,
		tagArray : tagArray,
		addTag : addTag,
		getAllTags : getAllTags,
		getFromServer : getFromServer
		
	}
	
	
	
	
	






}