function RMSideBar(){

	var _sideBar;
	var _innerHt;
	var _onside = 0;
	var _mode = 0; //0 - list 1 - newtag
	var _eSelectMode = false;
	var _rmtagger;
	var _clickBox;	
	var _tagList;
	var _currentFilters;
	
	
	

	function create(){
	
		_sideBar = document.createElement('DIV');
		_sideBar.className = 'rm_r rm_sideBar';
		_sideBar.id = 'rm_sideBarObj';
		_sideBar.innerHTML = '<div class="rm_r headerBar"><div class="headerImg"></div><a id="flipButton" class="rm_r rmOnLeft" title="flip"></a></div><div id="innerH" class="rm_r"></div>';
		_sideBar.style.zIndex = 2147099801;
		_sideBar.style.display = 'none';
		_sideBar.style.left = '0px';
		document.body.appendChild(_sideBar);
		_innerHt = document.getElementById('innerH');
		 _innerHt.innerHTML = normalHTML();	
		jQuery("#flipButton").click(flip);
		jQuery("#createButton").click(SwitchModes);
		jQuery("#AllButton").click(filterBy0);
		jQuery("#bugButton").click(filterBy1);
		jQuery("#impButton").click(filterBy2);
		jQuery("#designButton").click(filterBy3);
		//jQuery("#doneButton").click(filterBy4);
		updateSize();
		jQuery(_sideBar).show(300);
		_mode = 0;
		jQuery(window).resize(updateSize);
		_clickBox = new RMBox("background-color: #C90; border: 1px solid #300;");
		_tagList = new RMTagList();		
		_tagList.getFromServer();
		
		
		
	}
	
	function toggleSelectElement(){
		jQuery("#rm_chooseElementButton").toggleClass("down");
		if(!_eSelectMode){
			_eSelectMode = true;
			_rmtagger = new RMETagger(selectElement);			
		}else{
			_rmtagger.destroy();
			_eSelectMode = false;
		}
	
	}
	
	function selectElement(xp){
	
		document.getElementById("rmXPspan").innerHTML = xp;
		jQuery('#rmXPspan').css('color','#000000');
		jQuery('#rmXPspan').css('fontStyle','normal');
		jQuery("#rm_unchooseElementButton").show();
		_rmtagger.destroy();
		_eSelectMode = false;
		jQuery("#rm_chooseElementButton").removeClass("down");
		_clickBox.moveToElement(getElementFromPath(xp));
	}
	
	function selectElement2(xp){	
		_clickBox.moveToElement(getElementFromPath(xp));
	}
	
	function unSelectElement(){
		document.getElementById("rmXPspan").innerHTML = 'No element selected.';
		jQuery('#rmXPspan').css('color','#999999');
		jQuery('#rmXPspan').css('fontStyle','italic');
		jQuery("#rm_unchooseElementButton").hide();
		_clickBox.hide();
	}
	
	
	
	function normalHTML(){
	return '<div class="rm_r filterBar">'+
		//'<a id="sortTimeButton" class="rm_r  sortButton" title="Sort by time"></a>'+
		//'<a id="doneButton" class="rm_r  filterButton" title="Filter by done.">'+		
		'</a><a id="impButton" class="rm_r  filterButton" title="Filter by important.">'+
		'</a><a id="designButton" class="rm_r  filterButton" title="Filter by design.">'+
		'</a><a id="bugButton" class="rm_r  filterButton" title="Filter by bugs."></a><a id="AllButton" class="rm_r  filterButton down2" title="Show all tags."></a></div>'+
		'<div id="innerC" class="rm_r  innerContent"></div><div class=" rm_r createBar"><input id="createButton" class="rm_r greenButton" type="button" value="Add Tag" onclick=""></div>';	
	}
	
	function newEditHTML(){
	return '<div class="rm_r filterBar"><p class="rm_r">Add a new tag:</p></div><textarea id="rm_tagContent" class="rm_r" name="tagContent"></textarea>'+
			'<div class="rm_r filterBar"><p class="rm_r">Mark As:</p></div><div id="optionsC" class="rm_r  contentBox" style="overflow: hidden">'+
			'<div class="rm_r checkBox"><input id="bugBox" type="checkbox" name="bugBox" value="Bug" /><span class="rm_r"> Bug </span><span class="rm_r g">(Something doesn\'t work right!) </span></div>'+
			'<div class="rm_r checkBox"><input id="desBox" type="checkbox" name="desBox" value="Design" /><span class="rm_r"> Design Issue </span><span class="rm_r g">(Something doesn\'t look right.) </span></div>'+
			'<div class="rm_r checkBox"><input id="impBox" type="checkbox" name="impBox" value="Important" /><span class="rm_r"> Important! </span><span class="rm_r g">(Fix this ASAP!) </span></div>'+
			'</div>'+
			'<div class="rm_r filterBar"><p class="rm_r">Attach an Element:</p></div><div id="optionsC" class="rm_r contentBox" style="overflow: hidden">'+
			'<a id="rm_chooseElementButton" class="rm_r"></a><span id="rmXPspan" class="rm_r" style="float:left;padding-top:6px">No element selected.</span><a id="rm_unchooseElementButton" class="rm_r" style="display:none"></a></div>'+
			'</div>'+
			'<div class="rm_r createBar"><input id="addButton" class="rm_r greenButton" type="button" value="Save" onclick=""><input id="backButton" class="rm_r redButton" type="button" value="Back" onclick=""></div>';		
	
	}
	
	
	function SwitchModes(){
		
		if(_eSelectMode)return;
		
		var ne = jQuery(_innerHt);
		ne.hide(100);
		if(_mode == 0){
			
			_innerHt.innerHTML = newEditHTML();
			jQuery("#addButton").click(sendTag);
			jQuery("#backButton").click(SwitchModes);
			jQuery("#rm_chooseElementButton").click(toggleSelectElement);
			jQuery("#rm_unchooseElementButton").click(unSelectElement);
			
			_mode = 1;
		}else{
			if(_clickBox)_clickBox.hide();
			_innerHt.innerHTML = normalHTML();
			jQuery("#createButton").click(SwitchModes);
			
			jQuery("#AllButton").click(filterBy0);
			jQuery("#bugButton").click(filterBy1);
			jQuery("#impButton").click(filterBy2);
			jQuery("#designButton").click(filterBy3);
			//jQuery("#doneButton").click(filterBy4);
			
			filterBy0();
			_mode = 0;
		}
				
		ne.show(100);
		updateSize();
	}
	
	function sendTag(){	
		var bug = (jQuery('#bugBox:checked').val() !== undefined);
		var des = (jQuery('#desBox:checked').val() !== undefined);
		var imp = (jQuery('#impBox:checked').val() !== undefined);
		var ele = escape(document.getElementById("rmXPspan").innerHTML);
		if(ele.substring(0,1)=='N')ele='';
		var content = (jQuery('#rm_tagContent').attr('value'));
		content = content.replace("\n"," ");
		
		
		
		var user = remarker.rm_user.username;
		var loc = escape(remarker.rm_user.url);
		var binfo = remarker.rm_user.browserInfo.stringo;	
		var token = remarker.rm_user.token;
		var url='http://192.168.1.8:8080/newRemarker/tag/remoteSave?content='+content+'&username='+user+'&url='+loc+'&xpath='+ele+'&browserInfo='+binfo+'&design='+des+'&bug='+bug+'&important='+imp+"&token="+token;
		remarker.rm_comms.send(url,tagAddResult);	
		
		
		
	}
	
	function tagAddResult(j){
		
		
		
		_tagList.tagsFromServer(j);
		SwitchModes();
		
	
	}
	
	
	//flip side bar to other side
	function flip(){
		var sO = jQuery('#rm_sideBarObj');		
		if(_onside == 0){
			_onside = 1;
		}else{
			_onside = 0;
		}				
		jQuery("#flipButton").toggleClass("rmOnRight");
		updateSize();
	}
	
	function isNumber(n) { return !isNaN(parseFloat(n)) && isFinite(n);}
	
	function docElem( property ) {
      var t
      return ((t = document.documentElement) || (t = document.body.parentNode)) && isNumber( t[property] ) ? t : document.body
   }
	
	function viewSize() {
      // This algorithm avoids creating test page to determine if document.documentElement.client[Width|Height] is greater then view size,
      // will succeed where such test page wouldn't detect dynamic unreliability,
      // and will only fail in the case the right or bottom edge is within the width of a scrollbar from edge of the viewport that has visible scrollbar(s).
      var doc = docElem( 'clientWidth' ), body = document.body, w, h
	  var s2 = window.innerWidth;
      var s1 =  isNumber( document.clientWidth ) ? { w : document.clientWidth, h : document.clientHeight } :
         doc === body
         || (w = Math.max( doc.clientWidth, body.clientWidth )) > self.innerWidth
         || (h = Math.max( doc.clientHeight, body.clientHeight )) > self.innerHeight ? { w : body.clientWidth, h : body.clientHeight } :
         { w : w, h : h }		
			return {w : ((s1.w+s2)/2), h : s1.h};		 
    }
	
	function updateSize(){
		var sO = jQuery('#rm_sideBarObj');		
		if(_onside== 1){
			var newx = (viewSize().w-300) + "px";
			sO.animate({left: newx},100);
		}else{
			sO.animate({left: '0px'},100);
		}			
		var iC = jQuery('#innerC');
		var newH = (window.innerHeight-115) + "px";
		iC.animate({height: newH},0);	
	}	
	
	function hide(){
		jQuery(_sideBar).hide(100);
	}
	
	function show(){
		jQuery(_sideBar).show(100);
	}
	
	//TAG LIST FUNCTIONS
	
	
	function filterBy0(){
		_tagList.setFilter(0);
		jQuery('#AllButton').addClass('down2');
		jQuery('#bugButton').removeClass('down2');
		jQuery('#impButton').removeClass('down2');
		jQuery('#designButton').removeClass('down2');
		//jQuery('#doneButton').removeClass('down2');		
		updateTagListHTML();			
	}

	function filterBy1(){
		_tagList.setFilter(1);
		jQuery('#AllButton').removeClass('down2');
		jQuery('#bugButton').addClass('down2');
		jQuery('#impButton').removeClass('down2');
		jQuery('#designButton').removeClass('down2');
		//jQuery('#doneButton').removeClass('down2');		
		updateTagListHTML();			
	}
	
	function filterBy2(){
		_tagList.setFilter(2);
		jQuery('#AllButton').removeClass('down2');
		jQuery('#bugButton').removeClass('down2');
		jQuery('#impButton').addClass('down2');
		jQuery('#designButton').removeClass('down2');
		//jQuery('#doneButton').removeClass('down2');		
		updateTagListHTML();			
	}
	
	function filterBy3(){
		_tagList.setFilter(3);
		jQuery('#AllButton').removeClass('down2');
		jQuery('#bugButton').removeClass('down2');
		jQuery('#impButton').removeClass('down2');
		jQuery('#designButton').addClass('down2');
		//jQuery('#doneButton').removeClass('down2');		
		updateTagListHTML();			
	}
	
	function filterBy4(){
		_tagList.setFilter(4);
		jQuery('#AllButton').removeClass('down2');
		jQuery('#bugButton').removeClass('down2');
		jQuery('#impButton').removeClass('down2');
		jQuery('#designButton').removeClass('down2');
		//jQuery('#doneButton').addClass('down2');		
		updateTagListHTML();
	}
	
	function updateTagListHTML(){
		document.getElementById("innerC").innerHTML = _tagList.getAllTags();		
		jQuery('a.rmTTarget').on('mousemove mouseenter mouseover',targetOver);
		jQuery('a.rmTTarget').on('mouseleave',_clickBox.hide);
		
		
	}
	
	function targetOver(event){
		var e = getElementUnderMouse(event);
		var jqe = jQuery(e);
		
		console.log(jqe.attr('title'));
		selectElement2(jqe.attr('title'));
	}
	
	
	
	
	function getElementUnderMouse(e){	
		if(e.srcElement){		
			return e.srcElement;		
		}else if(e.target){		
			return e.target;		
		}	
  	}
	

	return{
		
		updateTagListHTML : updateTagListHTML,
		filterBy0 : filterBy0,
		create : create
	}



}