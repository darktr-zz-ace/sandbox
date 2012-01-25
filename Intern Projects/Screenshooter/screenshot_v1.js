/* Screenshot_v1.js
* Uses Phantom API to render a screenshot of the given web page.
* Takes in command line arguments: url outputfile [width]
*/

var page = new WebPage(),
	address = phantom.args[0],
	output = phantom.args[1],
	width = 1280;
	
if (phantom.args[2] != null){	
	width = phantom.args[2];	
}	
	
page.viewportSize = { width: width, height: 1024 };  
page.open(address, function (status) {
	if (status !== 'success') {
		console.log('Unable to load the address!');
		phantom.exit();
	} else {
		window.setTimeout(function () {
			page.render(output);
			console.log('Success: ' + address + ' rendered to ' + output);
			phantom.exit();
		}, 900);
	}
});
	
