function RMSideBar(){

	var _sideBar;
	var _innerHt;
	var _onside = 0;
	var _mode = 0; //0 - list 1 - newtag


	function create(){
	
		_sideBar = document.createElement('DIV');
		_sideBar.className = 'rm_r rm_sideBar';
		_sideBar.id = 'rm_sideBarObj';
		_sideBar.innerHTML = '<div class="headerBar"><a id="flipButton" class="rmOnLeft" title="flip"></a></div><div id="innerH"></div>';
		 	 
		_sideBar.style.display = 'none';
		_sideBar.style.left = '0px';
		document.body.appendChild(_sideBar);
		_innerHt = document.getElementById('innerH');
		 _innerHt.innerHTML = normalHTML();	
		jQuery("#flipButton").click(flip);
		jQuery("#createButton").click(SwitchModes);
		updateSize();
		jQuery(_sideBar).show(300);
		_mode = 0;
		jQuery(window).resize(updateSize);
		
	}
	
	
	
	
	
	function normalHTML(){
	return '<div class="filterBar"><a id="sortTimeButton" class="sortButton" title="Sort by time"></a>'+
		'<a id="doneButton" class="filterButton" title="Filter by done."></a><a id="designButton" class="filterButton" title="Filter by design.">'+
		'</a><a id="impButton" class="filterButton" title="Filter by important."></a><a id="bugButton" class="filterButton" title="Filter by bugs."></a></div>'+
		'<div id="innerC" class="innerContent"></div><div class="createBar"><input id="createButton" class="greenButton" type="button" value="Add Tag" onclick=""></div>';	
	}
	
	function newEditHTML(){
	return '<div class="filterBar"><p>Add a new tag:</p></div><textarea id="rm_tagContent" name="tagContent"></textarea>'+
			'<div class="filterBar"><p>Mark As:</p></div><div id="optionsC" class="contentBox" style="overflow: hidden">'+
			'<div class="checkBox"><input type="checkbox" name="bugBox" value="Bug" /><span> Bug </span><span class="g">(Something doesn\'t work right!) </span></div>'+
			'<div class="checkBox"><input type="checkbox" name="desBox" value="Design" /><span> Design Issue </span><span class="g">(Something doesn\'t look right.) </span></div>'+
			'<div class="checkBox"><input type="checkbox" name="impBox" value="Important" /><span> Important! </span><span class="g">(Fix this ASAP!) </span></div>'+
			'</div>'+
			'<div class="filterBar"><p>Attach an Element:</p></div><div id="optionsC" class="contentBox" style="overflow: hidden">'+
			'<span> No element selected. </span></div>'+
			'</div>'+
			'<div class="createBar"><input id="addButton" class="greenButton" type="button" value="Save" onclick=""></div>';	
	
			
	
	
	
	
	
	
	
	}
	
	
	function SwitchModes(){
		
		var ne = jQuery(_innerHt);
		ne.hide(100);
		if(_mode == 0){
		
		_innerHt.innerHTML = newEditHTML();
		jQuery("#addButton").click(SwitchModes);
		_mode = 1;
		}else{
		
		_innerHt.innerHTML = normalHTML();
		jQuery("#createButton").click(SwitchModes);
		_mode = 0;
		}
				
		ne.show(100);
		updateSize();
	}
	
	
	
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
	
	function destroy(){
	
	
	
	
	
	}

	create();

	



}