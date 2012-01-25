
<%@ page import="screenshotapp.ScreenTask" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'screenTask.label', default: 'ScreenTask')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-screenTask" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-screenTask" class="content scaffold-list" role="main">
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
				<thead>
					<tr>
					
						<g:sortableColumn property="URL" title="${message(code: 'screenTask.URL.label', default: 'URL')}" />
					
						<g:sortableColumn property="pageWidth" title="${message(code: 'screenTask.pageWidth.label', default: 'Page Width')}" />
					
						<!--<g:sortableColumn property="resultPath" title="${message(code: 'screenTask.resultPath.label', default: 'Result Path')}" />-->
					
						<g:sortableColumn property="dateCreated" title="${message(code: 'screenTask.dateCreated.label', default: 'Date Created')}" />
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${screenTaskInstanceList}" status="i" var="screenTaskInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${screenTaskInstance.id}">${fieldValue(bean: screenTaskInstance, field: "URL")}</g:link></td>
					
						<td>${fieldValue(bean: screenTaskInstance, field: "pageWidth")}px</td>
					
						<!--<td>${fieldValue(bean: screenTaskInstance, field: "resultPath")}</td>-->
					
						<td><g:formatDate date="${screenTaskInstance.dateCreated}" /></td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${screenTaskInstanceTotal}" />
			</div>
		</div>
	</body>
</html>
