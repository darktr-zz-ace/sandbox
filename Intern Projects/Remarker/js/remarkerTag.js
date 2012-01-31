function RMTag(user, content, time, bug, design, important, xpath, done, version){
		
	var _user = user;
	var _content = content;
	var _time = time;
	var _bug = bug;
	var _design = design;
	var _important = important;
	var _xpath = xpath;
	var _done = done;
	var _version = version;
	
	function getHTML(){	
	
	
		var d = _time;  
		var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		var dString = d.substring(8,10) + " " + month[parseInt(d.substring(5,7))] + " " + d.substring(0,4) + " " + d.substring(11,19).replace(".",":");
		
		var o = '';
		
		o= '<div class="rmtagHeading"><span class="rms1">'+_user+' said:</span><span class="rms2">'+dString+'</span></div>'+ '<div class="rmtagContent">'+_content + '<div class="rmTagTypeDiv">';
		if(_done)o+='<div class="rmTagTypeLabel rmTTLT"></div>';
		if(_important)o+='<div class="rmTagTypeLabel rmTTLI"></div>';
		if(_design)o+='<div class="rmTagTypeLabel rmTTLD"></div>';		
		if(_bug)o+='<div class="rmTagTypeLabel rmTTLB"></div>';
		if(_xpath)o+='<a class="rmTTarget" title="'+_xpath+'"></a>';
		o+=	'</div></div>';
		
		return o;
	
	}
	
	function matchesFilter(i){	
		if(i==0)return true;		
		if(i==1)return _bug;
		if(i==2)return _important;
		if(i==3)return _design;
		if(i==4)return _done;	
	
	}
	
	
	
	return {
		
		_user : _user,
		_content : _content,
		_time : _time,
		_bug : _bug,
		_design : _design,
		_important : _important,
		_xpath : _xpath,
		_done : _done,
		_version : _version,
		getHTML : getHTML,
		matchesFilter : matchesFilter
	
	}

}