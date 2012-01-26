function RMSideBar(){

	var _sideBar;



	function create(){
	
		_sideBar = document.createElement('DIV');
		_sideBar.className = 'rm_r rm_sideBar';
		_sideBar.id = 'rm_sideBarObj';
		_sideBar.innerHTML = sideBarHtml();
		_sideBar.style.display = 'none';
		_sideBar.style.left = '0px';
		document.body.appendChild(_sideBar);
		jQuery("#flipButton").click(flip);
		jQuery(_sideBar).show(300);
		
		
	}
	
	function sideBarHtml(){
		return '<div class="headerBar"><a id="flipButton" title="flip"></a></div>'+
		'<div class="filterBar"><a id="sortTimeButton" class="sortButton" title="Sort by time"></a>'+
		'<a id="doneButton" class="filterButton" title="Filter by done."></a><a id="designButton" class="filterButton" title="Filter by design.">'+
		'</a><a id="impButton" class="filterButton" title="Filter by important."></a><a id="bugButton" class="filterButton" title="Filter by bugs."></a></div>'+
		'<div class="innerContent"></div><div class="createBar"><input id="createButton" class="greenButton" type="button" value="Add Tag" onclick=""></div>';
	
	}
	
	function flip(){
		var sO = jQuery('#rm_sideBarObj');
		
		if(sO.position().left == 0){
			var newx = (viewWidth()-300) + "px";
			sO.animate({left: newx},200);
		
		}else{
			sO.animate({left: '0px'},200);
		
		}
		
		
	}
	
	function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
	
	function docElem( property )
   {
      var t
      return ((t = document.documentElement) || (t = document.body.parentNode)) && isNumber( t[property] ) ? t : document.body
   }
	
	function viewWidth() {
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
		 
		
			return ((s1.w+s2)/2);
		 
		 
    }
	
	
	
	function destroy(){
	
	
	
	
	
	}

	create();





}