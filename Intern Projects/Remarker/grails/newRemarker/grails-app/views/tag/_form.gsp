<%@ page import="newremarker.Tag" %>



<div class="fieldcontain ${hasErrors(bean: tagInstance, field: 'content', 'error')} required">
	<label for="content">
		<g:message code="tag.content.label" default="Content" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="content" required="" value="${tagInstance?.content}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: tagInstance, field: 'username', 'error')} required">
	<label for="username">
		<g:message code="tag.username.label" default="Username" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="username" required="" value="${tagInstance?.username}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: tagInstance, field: 'url', 'error')} required">
	<label for="url">
		<g:message code="tag.url.label" default="Url" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="url" required="" value="${tagInstance?.url}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: tagInstance, field: 'xpath', 'error')} ">
	<label for="xpath">
		<g:message code="tag.xpath.label" default="Xpath" />
		
	</label>
	<g:textField name="xpath" value="${tagInstance?.xpath}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: tagInstance, field: 'browserInfo', 'error')} ">
	<label for="browserInfo">
		<g:message code="tag.browserInfo.label" default="Browser Info" />
		
	</label>
	<g:textField name="browserInfo" value="${tagInstance?.browserInfo}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: tagInstance, field: 'design', 'error')} ">
	<label for="design">
		<g:message code="tag.design.label" default="Design" />
		
	</label>
	<g:checkBox name="design" value="${tagInstance?.design}" />
</div>

<div class="fieldcontain ${hasErrors(bean: tagInstance, field: 'bug', 'error')} ">
	<label for="bug">
		<g:message code="tag.bug.label" default="Bug" />
		
	</label>
	<g:checkBox name="bug" value="${tagInstance?.bug}" />
</div>

<div class="fieldcontain ${hasErrors(bean: tagInstance, field: 'important', 'error')} ">
	<label for="important">
		<g:message code="tag.important.label" default="Important" />
		
	</label>
	<g:checkBox name="important" value="${tagInstance?.important}" />
</div>

<div class="fieldcontain ${hasErrors(bean: tagInstance, field: 'done', 'error')} ">
	<label for="done">
		<g:message code="tag.done.label" default="Done" />
		
	</label>
	<g:checkBox name="done" value="${tagInstance?.done}" />
</div>

