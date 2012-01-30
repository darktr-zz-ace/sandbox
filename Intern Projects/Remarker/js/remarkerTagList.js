function RMTagList(){
	var tagCount;
	var tagArray;
	
	function create(){
		tagCount = 0;
		tagArray = new Array();
	}
	
	function addTag(user, content, time, bug, design, important, xpath, done, version){			
		tagCount = tagArray.push(new RMTag(user, content, time, bug, design, important, xpath, done, version));
		
	}
	
	function getSingleTagHTML(i){	
	
	
		var d = tagArray[i]._time;  
		var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		var dString = d.substring(8,10) + " " + month[parseInt(d.substring(5,7))] + " " + d.substring(0,4) + " " + d.substring(11,19).replace(".",":");
		
		var o = '';
		
		o= '<div class="rmtagHeading"><span class="rms1">'+tagArray[i]._user+'</span><span class="rms2">'+dString+'</span></div>'+ '<div class="rmtagContent">'+tagArray[i]._content + '<div class="rmTagTypeDiv">';
		if(tagArray[i]._done)o+='<div class="rmTagTypeLabel rmTTLT"></div>';
		if(tagArray[i]._important)o+='<div class="rmTagTypeLabel rmTTLI"></div>';
		if(tagArray[i]._design)o+='<div class="rmTagTypeLabel rmTTLD"></div>';		
		if(tagArray[i]._bug)o+='<div class="rmTagTypeLabel rmTTLB"></div>';
		if(tagArray[i]._xpath)o+='<a class="rmTTarget"></a>';
		o+=	'</div></div>';
		
		return o;
	
	}
	
	function getAllTags(){
		var s = '';
		if(tagCount==0){
			
			s='<p class="rmcenterT"> No tags found for this webpage or filter set. </p>';
			
		
		}else{
			for (i=0;i<(tagCount);i++){
				s+=getSingleTagHTML(i);
			}
		}
		return s;
	}
	
	
	
	function getFromServer(){
			tagCount = 0;
			tagArray = new Array();
			
			remarker.rm_comms.send('http://192.168.1.8:8080/newRemarker/tag/remoteList',tagsFromServer,true);
			
	
	}
	
	
	
	
	function tagsFromServer(json,pop){
		tagCount = 0;
		tagArray = new Array();
		
		var c = json.total;
		tagCount = c;
		var t = json.tags;
		for (i=0;i<c;i++){			
			var ti = t[i];
			addTag(ti.username, ti.content, ti.dateCreated, ti.bug, ti.design, ti.important, ti.xPath, ti.done, ti.version);
		}
		
		if(pop)document.getElementById("innerC").innerHTML = getAllTags();
		
	}
	
	
	create();
	
	return {
	
		tagCount : tagCount,
		tagArray : tagArray,
		addTag : addTag,
		getAllTags : getAllTags,
		getFromServer : getFromServer,
		tagsFromServer : tagsFromServer
		
	}
	
	
	
	
	






}