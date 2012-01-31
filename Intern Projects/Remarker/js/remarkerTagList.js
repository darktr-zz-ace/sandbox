function RMTagList(){
	var tagCount;
	var tagArray;
	var currentFilters;
	
	function create(){
		tagCount = 0;
		tagArray = new Array();
		currentFilters = 0;
	}
	
	function addTag(user, content, time, bug, design, important, xpath, done, version){			
		tagCount = tagArray.push(new RMTag(user, content, time, bug, design, important, xpath, done, version));
		
	}
	
	
	
	function getAllTags(){
		var output = '';
		if(tagCount==0){			
			output = output + '<p class="rmcenterT"> No tags found for this webpage. </p>';		
		}else{
			for (i=0;i<(tagCount);i++){
			
				var tag = tagArray[i];
				console.log(currentFilters);
				if(tag.matchesFilter(currentFilters)){
					output = output + tag.getHTML();
				}
			
				
			}
		}
		return output;
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
	
	function setFilter(i){
		currentFilters = i;
	}
	
	
	create();
	
	return {
	
		tagCount : tagCount,
		tagArray : tagArray,
		addTag : addTag,
		getAllTags : getAllTags,
		getFromServer : getFromServer,
		tagsFromServer : tagsFromServer,
		currentFilters : currentFilters,
		setFilter : setFilter
		
	}
	
	
	
	
	






}