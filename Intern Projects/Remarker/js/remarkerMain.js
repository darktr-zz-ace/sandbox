/* Remarker Main is the first object to be created. It spawns and controls everything.
	It should:
	- Scrub page of all links+mouseovers
	- Launch the login dialog
		if the login is correct:
		create all the required objects
		wait for user interaction
	
	





*/





function RemarkerMain(){
	
	function startUp(){
		jQuery.noConflict();  //make sure $ is ours to play with. But use jQuery mostly anyway.
		scrubPage();	
		var r = new RemarkerLogin();
	}
	
	//scrub page removes all links from page and unbinds mouseevents
	function scrubPage(){
		jQuery('*').removeAttr('onclick');
		jQuery('*').removeAttr('onmouseover');		
		jQuery('a').removeAttr('href');
		jQuery(document).unbind('mousedown');
		jQuery(document).unbind('click');
		jQuery(document).unbind('mouseup');	
	}
	
	
	
	
	startUp();
















}