function RemarkerLogin(callBackFunction){


	var _loginBox;
	var o;
	
	function createLoginBox(){
		
		o = new remarkerOverlay(true);
		o._popup.innerHTML = '<table id="logintable"><tbody><tr><td><h4>Login:</h4></td></tr><tr><td>Username: </td><td><input type="text" id="rm_userEdit"></td></tr>'+
								'<tr><td>Password: </td><td><input type="password" id="rm_passEdit"></td></tr>'+
								'<tr><td colspan="2"><input id="loginbtn" type="button" value="Login" onclick="remarker.rm_login.login()"></td></tr>'+
								'<tr><td colspan="2" id="rm_reghere"><a href="http://remarker.co.za" target="_blank">Don\'t have an account? Register here.</a></td></tr>'+
								'<tr><td colspan="2" id="rm_errorSpan"></td></tr></tbody></table>';
		jQuery('#rm_userEdit').focus();	
	
	
	
	
	}

	createLoginBox();



	







}