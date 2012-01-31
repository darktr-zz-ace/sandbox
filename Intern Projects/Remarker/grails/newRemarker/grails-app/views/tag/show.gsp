
<%@ page import="newremarker.Tag" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'tag.label', default: 'Tag')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-tag" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="list"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-tag" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list tag">
			
				<g:if test="${tagInstance?.content}">
				<li class="fieldcontain">
					<span id="content-label" class="property-label"><g:message code="tag.content.label" default="Content" /></span>
					
						<span class="property-value" aria-labelledby="content-label"><g:fieldValue bean="${tagInstance}" field="content"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${tagInstance?.username}">
				<li class="fieldcontain">
					<span id="username-label" class="property-label"><g:message code="tag.username.label" default="Username" /></span>
					
						<span class="property-value" aria-labelledby="username-label"><g:fieldValue bean="${tagInstance}" field="username"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${tagInstance?.url}">
				<li class="fieldcontain">
					<span id="url-label" class="property-label"><g:message code="tag.url.label" default="Url" /></span>
					
						<span class="property-value" aria-labelledby="url-label"><g:fieldValue bean="${tagInstance}" field="url"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${tagInstance?.xpath}">
				<li class="fieldcontain">
					<span id="xpath-label" class="property-label"><g:message code="tag.xpath.label" default="Xpath" /></span>
					
						<span class="property-value" aria-labelledby="xpath-label"><g:fieldValue bean="${tagInstance}" field="xpath"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${tagInstance?.browserInfo}">
				<li class="fieldcontain">
					<span id="browserInfo-label" class="property-label"><g:message code="tag.browserInfo.label" default="Browser Info" /></span>
					
						<span class="property-value" aria-labelledby="browserInfo-label"><g:fieldValue bean="${tagInstance}" field="browserInfo"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${tagInstance?.design}">
				<li class="fieldcontain">
					<span id="design-label" class="property-label"><g:message code="tag.design.label" default="Design" /></span>
					
						<span class="property-value" aria-labelledby="design-label"><g:formatBoolean boolean="${tagInstance?.design}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${tagInstance?.bug}">
				<li class="fieldcontain">
					<span id="bug-label" class="property-label"><g:message code="tag.bug.label" default="Bug" /></span>
					
						<span class="property-value" aria-labelledby="bug-label"><g:formatBoolean boolean="${tagInstance?.bug}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${tagInstance?.important}">
				<li class="fieldcontain">
					<span id="important-label" class="property-label"><g:message code="tag.important.label" default="Important" /></span>
					
						<span class="property-value" aria-labelledby="important-label"><g:formatBoolean boolean="${tagInstance?.important}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${tagInstance?.done}">
				<li class="fieldcontain">
					<span id="done-label" class="property-label"><g:message code="tag.done.label" default="Done" /></span>
					
						<span class="property-value" aria-labelledby="done-label"><g:formatBoolean boolean="${tagInstance?.done}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${tagInstance?.dateCreated}">
				<li class="fieldcontain">
					<span id="dateCreated-label" class="property-label"><g:message code="tag.dateCreated.label" default="Date Created" /></span>
					
						<span class="property-value" aria-labelledby="dateCreated-label"><g:formatDate date="${tagInstance?.dateCreated}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${tagInstance?.lastUpdated}">
				<li class="fieldcontain">
					<span id="lastUpdated-label" class="property-label"><g:message code="tag.lastUpdated.label" default="Last Updated" /></span>
					
						<span class="property-value" aria-labelledby="lastUpdated-label"><g:formatDate date="${tagInstance?.lastUpdated}" /></span>
					
				</li>
				</g:if>
			
			</ol>
			<g:form>
				<fieldset class="buttons">
					<g:hiddenField name="id" value="${tagInstance?.id}" />
					<g:link class="edit" action="edit" id="${tagInstance?.id}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
