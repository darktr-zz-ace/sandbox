function RMUserData(loginData){

	var username;
	var sessionid;
	
	username = loginData.user;
	sessionid = loginData.sid;
	
	return {
	
		username : username,
		sessionid : sessionid
	
	
	}
	



}