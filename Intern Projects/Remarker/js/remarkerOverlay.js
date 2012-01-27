function remarkerOverlay(withPopup){
	
	var _overlay;
	var _popup;
	
	function create(){	
		_overlay = document.createElement('DIV');		
		_overlay.className = 'rm_r rm_loader_overlay';
		_overlay.style.padding = "20px";
		_overlay.style.zIndex = 2147099901;
		_overlay.style.display = "block";
		document.body.appendChild(_overlay);

		if(withPopup){
		
			_popup = document.createElement('DIV');
			_popup.className = 'rm_r rm_popup';
			_popup.style.zIndex = 2147099902;
			_popup.style.display = "block";
			document.body.appendChild(_popup);	
		
		}
		
	}
	
	function destroy(){	
		_popup.style.display = "none";
		_popup = null;		
		_overlay.style.display = "none";
		_overlay = null;	
		
		
	}
	
	create();
	
	return {	
		destroy : destroy,
		_overlay : _overlay,
		_popup : _popup
	
	}

}