function RemarkerLogin(callBackFunction){


	var _loginBox;
	var o;
	var uname;
	var tok;
	
	
	function createLoginBox(){
		
		o = new remarkerOverlay(true);
		
		/*o._popup.innerHTML = '<table id="logintable"><tbody><tr><td><h4>Login:</h4></td></tr><tr><td>Username: </td><td><input type="text" id="rm_userEdit"></td></tr>'+
								'<tr><td>Password: </td><td><input type="password" id="rm_passEdit"></td></tr>'+
								'<tr><td colspan="2"><input id="loginbtn" class="greenButton" type="button" value="Login" onclick="remarker.rm_login.login()"></td></tr>'+
								'<tr><td colspan="2" id="rm_reghere"><a href="" target="_blank">Don\'t have an account? Register here.</a></td></tr>'+
								'<tr><td colspan="2" id="rm_errorSpan"></td></tr></tbody></table>';*/
								
		o._popup.innerHTML = '<table id="logintable"><tbody><tr><td colspan="2"><h4>Login:</h4></td></tr><tr><td>User Name: </td><td><input type="text" id="rm_userEdit"></td></tr>'+
								'<tr><td>Session Key: </td><td><input type="text" id="rm_sessionEdit"></td></tr>'+
								'<tr><td colspan="2"><input id="loginbtn" class="greenButton" type="button" value="Login" onclick="remarker.rm_login.login()"></td></tr>'+
								'<tr><td colspan="2" id="rm_errorSpan"></td></tr></tbody></table>';
								
		jQuery('#rm_userEdit').focus();	
		//jQuery('#rm_userEdit').attr('value','User'+Math.floor(Math.random()*1000) );	
		jQuery('#rm_sessionEdit').attr('value','default');	
	}

	function login(){	
	
		uname = jQuery('#rm_userEdit').attr('value');
		tok = jQuery('#rm_sessionEdit').attr('value');
		if(tok.replace(" ","")=="")tok = 'default';		
		if(uname.replace(" ","")==""){
			jQuery('#rm_errorSpan').html('Please enter a valid username.');
		}else{
			remarker.rm_user.username = uname;				//chosen username
			remarker.rm_user.token = tok;					//token
			
			loginResult();
		}
		
	}
	
	
	function loginResult(){
	
	
		loginSuccess();
		
	}
	
	function loginSuccess(){
	
		o.destroy();
		callBackFunction({user : 'user',sid : 12345});
	
	
	}
	
	function loginFail(){
	
	
	}
	
	
	
	createLoginBox();


	return {
	
		login : login,
	loginResult : loginResult
	
	
	}
	







}