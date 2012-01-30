
function RMETagger(callback){

	var _hlbox;
	var _clickBox;
	var _chosenE;

	function create(){		
		_hlbox = new RMBox("background-color: #09C; border: 1px solid #003;");
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
		_hlbox.moveToElement(getElementUnderMouse(event));
		return false;			
	}

	
	
	
	
	function destroy(){
		
		_hlbox.destroy();
		unBindEvents();
	}
	
	create();
	
	return {
		destroy : destroy
	
	}
	
}