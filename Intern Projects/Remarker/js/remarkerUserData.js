function RMUserData(){

	var username;
	var token;
	var sessionid;
	var browserInfo;
	var url;
	
	function createBrowserInfo(){
		
		//screen size
		var resx = screen.width;
		var resy = screen.height;
		
		//OS
		var platform = navigator.platform;
		
		var ua = navigator.userAgent.toLowerCase();		
		
		var browser = {
			version: (ua.match( /.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/ ) || [])[1],
			chrome: /chrome/.test( ua ),
			safari: /webkit/.test( ua ) && !/chrome/.test( ua ),
			opera: /opera/.test( ua ),
			msie: /msie/.test( ua ) && !/opera/.test( ua ),
			mozilla: /mozilla/.test( ua ) && !/(compatible|webkit)/.test( ua ),
			iPad : /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua)
		};
		
		var browserName = "";
		var bID = 0;
		var bV = (browser.version).replace(/[^0-9]/g, '').replace(/^[0]+/g,'');
		
		switch(true){
			case browser.chrome:
				browserName = 'Chrome';
				bID = 1;
				break;	
			case browser.safari:
				browserName = 'Safari';
				bID = 2;
				break;
			case browser.opera:
				browserName = 'Opera';
				bID = 3;
				break;
			case browser.msie:
				browserName = 'IE';
				bID = 4;
				break;
			case browser.mozilla:
				browserName = 'Firefox';
				bID = 5;
				break;
			case browser.ipad:
				browserName = 'Ipad';
				bID = 6;
				break;
			default:
				browserName = 'Unknown';			
		}
		
		var stringo = browserName+'|'+browser.version+'|'+resx+'x'+resy;
		
		//JSON
		browserInfo = {
			'name': browserName,
			'version': browser.version,
			//'bid': bID,
			//'bv': bV,
			'res' : {
				'width': resx,
				'height': resy				
			},
			'os':platform,
			'stringo' : stringo
		}
		
				
	}
	
	createBrowserInfo();
	url = window.location;
	
	return {
	
		username : username,
		sessionid : sessionid,
		token : token,
		browserInfo : browserInfo,
		url : url
	
	}
	



}