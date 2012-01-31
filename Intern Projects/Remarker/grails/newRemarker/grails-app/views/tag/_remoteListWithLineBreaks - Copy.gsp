<!-- All of the tags in the archive, returned as a JSON object enclosed in a javascript function,
		which is defined in the client-side script of the Remarker project.
		This is the main server-to-client interaction. 
		!! THIS VERSION is pretty much only for editting convenience; JSON doesn't seem to like
		line breaks without escapes, so it seemed neater, if more headache-inducing, to put it one one line-->
		
<%@ page import="newremarker.Tag" %>
remarker.rm_comms.handlePacket('${([tags:[
{for(i in tagInstanceList){
	return [i.id,i.content,i.username,i.url,i.xpath,i.browserInfo,i.design,i.bug,i.important,i.done,i.dateCreated,i.lastUpdated]}}
]
,total:tagInstanceTotal] as JSON).encodeAsJavascript()}');
		