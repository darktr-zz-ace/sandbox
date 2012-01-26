/* Remarker Main is the first object to be created. It spawns and controls everything.
	It should:
	- Scrub page of all links+mouseovers
	- Launch the login dialog
		if the login is correct:
		create all the required objects
		wait for user interaction
	
	





*/





function RemarkerMain(){
	
	var rm_login;
	var rm_sidebar;
	var rm_user;
	
	function startUp(){
		jQuery.noConflict();  //make sure $ is ours to play with. But use jQuery mostly anyway.
		scrubPage();	
		rm_login = new RemarkerLogin(afterLogin);
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
	
	function afterLogin(loginData){
		
		rm_user = new RMUserData(loginData);
		rm_sideBar = new RMSideBar();
	
	}
	
	
	startUp();

	return{
		rm_login : rm_login,
		rm_sidebar : rm_sidebar,
		rm_user : rm_user
	
	
	
	
	}














}