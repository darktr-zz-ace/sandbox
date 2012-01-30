function RMBox(extraStyle){

	var _self;
	
	function create(){			
		if(!_self)_self = document.createElement('DIV');
		_self.className = 'rm_r rm_obox';	
		_self.style.display = "none";
		_self.style.cssText+=extraStyle;
		_self.style.zIndex = 2147099701;
		document.body.appendChild(_self);			
	}
	
	function moveToElement(elem){
			var jqe = jQuery(elem);			
			if(jqe.hasClass('rm_r'))return;		
			var eO = jqe.offset();
			var eH = jqe.outerHeight();
			var eW = jqe.outerWidth();			
			_self.style.left = (eO.left) + 'px';
			_self.style.top = (eO.top) + 'px';			
			_self.style.width = (eW-2) + 'px';
			_self.style.height = (eH-2) + 'px';					
			_self.style.display = 'block';
	
	}
	
	function hide(i){
		jQuery(_self).hide(i);
	}
	
	function destroy(){
		_self.style.display = 'none';
		jQuery(_self).remove();
	}
	
	create();
	
	return{
		
		create : create,
		moveToElement : moveToElement,
		hide : hide,
		destroy : destroy
	
	
	}



}