
<%@ page import="newremarker.Tag" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'tag.label', default: 'Tag')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-tag" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-tag" class="content scaffold-list" role="main">
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
				<thead>
					<tr>
					
						<g:sortableColumn property="content" title="${message(code: 'tag.content.label', default: 'Content')}" />
					
						<g:sortableColumn property="username" title="${message(code: 'tag.username.label', default: 'Username')}" />
					
						<g:sortableColumn property="url" title="${message(code: 'tag.url.label', default: 'Url')}" />
					
						<g:sortableColumn property="xpath" title="${message(code: 'tag.xpath.label', default: 'Xpath')}" />
					
						<g:sortableColumn property="browserInfo" title="${message(code: 'tag.browserInfo.label', default: 'Browser Info')}" />
					
						<g:sortableColumn property="design" title="${message(code: 'tag.design.label', default: 'Design')}" />
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${tagInstanceList}" status="i" var="tagInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${tagInstance.id}">${fieldValue(bean: tagInstance, field: "content")}</g:link></td>
					
						<td>${fieldValue(bean: tagInstance, field: "username")}</td>
					
						<td>${fieldValue(bean: tagInstance, field: "url")}</td>
					
						<td>${fieldValue(bean: tagInstance, field: "xpath")}</td>
					
						<td>${fieldValue(bean: tagInstance, field: "browserInfo")}</td>
					
						<td><g:formatBoolean boolean="${tagInstance.design}" /></td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${tagInstanceTotal}" />
			</div>
		</div>
	</body>
</html>
