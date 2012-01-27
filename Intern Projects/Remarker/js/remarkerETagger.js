
function RMETagger(callback){

	var _hlbox;
	var _clickBox;
	var _chosenE;

	function create(){		
		createHLBox();
		bindEvents();
	}
		
	function getElementUnderMouse(e){	
		if(e.srcElement){		
			return e.srcElement;		
		}else if(e.target){		
			return e.target;		
		}	
  	}
	
	function bindEvents(){
		jQuery(document.body).on('click',clickHandler);
		jQuery(document.body).on('mousedown',clickHandler);
		jQuery(document.body).on('mouseup',clickHandler);
		jQuery(document.body).on('mousemove mouseenter mouseleave mouseover',moveHandler);			
	}
	
	function unBindEvents(){
		jQuery(document.body).off('click',clickHandler);
		jQuery(document.body).off('mousedown',clickHandler);
		jQuery(document.body).off('mouseup',clickHandler);
		jQuery(document.body).off('mousemove mouseenter mouseleave mouseover',moveHandler);			
	}
	
	function createHLBox(){		
		if(!_hlbox)_hlbox = document.createElement('DIV');
		_hlbox.className = 'rm_r rm_hlbox';	
		_hlbox.style.display = "none";
		_hlbox.style.zIndex = 2147099701;
		document.body.appendChild(_hlbox);		
		
	}

	function clickHandler(event){	   			
		var e = getElementUnderMouse(event);			
		var jqe = jQuery(e);
		if(jqe.hasClass('rm_r'))return false;

		_chosenE = getElementXPath(e);
		callback(_chosenE);
		return false;		
	}
	
	function moveHandler(event){
		var e = getElementUnderMouse(event);			
		var jqe = jQuery(e);
		if(jqe.hasClass('rm_r'))return false;	
		moveHLtoElement(getElementUnderMouse(event));
		return false;			
	}

	function moveHLtoElement(elem){				
			
			var jqe = jQuery(elem);
			
			if(jqe.hasClass('rm_r'))return;
		
			var eO = jqe.offset();
			var eH = jqe.outerHeight();
			var eW = jqe.outerWidth();
			
						
			
			_hlbox.style.left = (eO.left) + 'px';
			_hlbox.style.top = (eO.top) + 'px';
			
			_hlbox.style.width = (eW-2) + 'px';
			_hlbox.style.height = (eH-2) + 'px';
					
			_hlbox.style.display = 'block';
		
	
	
	}
	
	function destroy(){
		
		_hlbox.style.display = "none";
		unBindEvents();
	}
	
	create();
	
	return {
		destroy : destroy
	
	}
	
}