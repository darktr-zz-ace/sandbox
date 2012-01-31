<!-- All of the tags in the archive, returned as a JSON object enclosed in a javascript function,
		which is defined in the client-side script of the Remarker project.
		This is the main server-to-client interaction. 
		!! THIS VERSION is pretty much only for editting convenience; JSON doesn't seem to like
		line breaks without escapes, so it seemed neater, if more headache-inducing, to put it one one line.
		Also it doesn't really like HTML comments, because it's grabbing the source.-->
		
<%@ page import="newremarker.Tag" %>
remarker.rm_comms.handlePacket('
		tags:
			[
					<g:each in="${tagInstanceList}" status="i" var="tagInstance">
					{"tid":"${tagInstance.id}",
					"content":"${fieldValue(bean: tagInstance, field: "content")}",
					"username":"${fieldValue(bean: tagInstance, field: "username")}",
					"url":"${fieldValue(bean: tagInstance, field: "url")}",
					"xPath":"${fieldValue(bean: tagInstance, field: "xpath")}",
					"browserInfo":"${fieldValue(bean: tagInstance, field: "browserInfo")}",
					"design":${fieldValue(bean: tagInstance, field: "design")},
					"bug":${fieldValue(bean: tagInstance, field: "bug")},
					"important":${fieldValue(bean: tagInstance, field: "important")},
					"done":${fieldValue(bean: tagInstance, field: "done")},
					"dateCreated":"${tagInstance.dateCreated}",
					"lastUpdated":"${tagInstance.lastUpdated}"},
					</g:each>{}],
		"total":${tagInstanceTotal}');

/*<!-- All of the tags in the archive, returned as a JSON object enclosed in a javascript function,\
		which is defined in the client-side script of the Remarker project.\
		This is the main server-to-client interaction. -->*/
<%@ page import="newremarker.Tag" %>
remarker.rm_comms.handlePacket('{"tags":[<g:each in="${tagInstanceList}" status="i" var="tagInstance">{"tid":"${tagInstance.id}","content":"${fieldValue(bean: tagInstance, field: "content")}","username":"${fieldValue(bean: tagInstance, field: "username")}","url":"${fieldValue(bean: tagInstance, field: "url")}","xPath":"${fieldValue(bean: tagInstance, field: "xpath")}","browserInfo":"${fieldValue(bean: tagInstance, field: "browserInfo")}","design":${fieldValue(bean: tagInstance, field: "design")},"bug":${fieldValue(bean: tagInstance, field: "bug")},"important":${fieldValue(bean: tagInstance, field: "important")},"done":${fieldValue(bean: tagInstance, field: "done")},"dateCreated":"${tagInstance.dateCreated}","lastUpdated":"${tagInstance.lastUpdated}"},</g:each>{}],"total":${tagInstanceTotal}}');

