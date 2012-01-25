
<%@ page import="screenshotapp.ScreenTask" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'screenTask.label', default: 'ScreenTask')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>

        <style type="text/css">
            .screenshot {
                margin: 20px;
                border:1px solid #AAAAAA;
            }
        </style>



	</head>
	<body>
		<a href="#show-screenTask" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="list"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-screenTask" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list screenTask">
			
				<g:if test="${screenTaskInstance?.URL}">
				<li class="fieldcontain">
					<span id="URL-label" class="property-label"><g:message code="screenTask.URL.label" default="URL" /></span>
					
						<span class="property-value" aria-labelledby="URL-label"><g:fieldValue bean="${screenTaskInstance}" field="URL"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${screenTaskInstance?.pageWidth}">
				<li class="fieldcontain">
					<span id="pageWidth-label" class="property-label"><g:message code="screenTask.pageWidth.label" default="Page Width" /></span>
					
						<span class="property-value" aria-labelledby="pageWidth-label"><g:fieldValue bean="${screenTaskInstance}" field="pageWidth"/>px</span>
					
				</li>
				</g:if>
			
				<g:if test="${screenTaskInstance?.resultPath}">
				<li class="fieldcontain">
					<span id="resultPath-label" class="property-label"><g:message code="screenTask.resultPath.label" default="Result Path" /></span>
					
						<span class="property-value" aria-labelledby="resultPath-label"><g:fieldValue bean="${screenTaskInstance}" field="resultPath"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${screenTaskInstance?.dateCreated}">
				<li class="fieldcontain">
					<span id="dateCreated-label" class="property-label"><g:message code="screenTask.dateCreated.label" default="Date Created" /></span>
					
						<span class="property-value" aria-labelledby="dateCreated-label"><g:formatDate date="${screenTaskInstance?.dateCreated}" /></span>
					
				</li>
				</g:if>


			
			</ol>
			 <g:form>
                <fieldset class="buttons">
                    <g:hiddenField name="id" value="${screenTaskInstance?.id}" />
					<!--<g:link action="largeView" id="${screenTaskInstance?.id}">Maximise</g:link>-->
                    <g:link class="save" action="download" id="${screenTaskInstance?.id}">Download Screenshot..</g:link>
                </fieldset>
            </g:form>


			<g:link action="largeView" id="${screenTaskInstance.id}">
				<img class="screenshot" width="500px" src="${createLink(controller:'screenTask', action:'download', id:screenTaskInstance?.id)}" />
			</g:link>


           

            <br />

			<g:form>
				<fieldset class="buttons">
					<g:hiddenField name="id" value="${screenTaskInstance?.id}" />
					<!--<g:link class="edit" action="edit" id="${screenTaskInstance?.id}"><g:message code="default.button.edit.label" default="Edit" /></g:link>-->
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
