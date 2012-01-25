
<%@ page import="screenshotapp.ScreenTask" %>
<!doctype html>
<html>
	<head>	
		<g:set var="entityName" value="${message(code: 'screenTask.label', default: 'ScreenTask')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body style="padding:0px;margin:0px;">
            <img src="${createLink(controller:'screenTask', action:'download', id:screenTaskInstance?.id)}" />           
	</body>
</html>
