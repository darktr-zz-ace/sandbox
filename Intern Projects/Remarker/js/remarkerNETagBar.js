
function RMNewEditTagBar(newTag){

		var _newTagBar;
		var _onside;
		
	function create(){
	
		_newTagBar = document.createElement('DIV');
		_newTagBar.className = 'rm_r rm_netBar';
		_newTagBar.id = 'rm_netBarObj';
		_newTagBar.innerHTML = sideBarHtml();
		_newTagBar.style.display = 'none';
		_newTagBar.style.left = '0px';
		document.body.appendChild(_newTagBar);
		updateSize();
		jQuery(_newTagBar).show(300);
		_mode = 0;
		
	}
	
	function sideBarHtml(){
		return '';	
	}
		
		
	create();
		





}