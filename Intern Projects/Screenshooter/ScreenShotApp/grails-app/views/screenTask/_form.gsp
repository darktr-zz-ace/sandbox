<%@ page import="screenshotapp.ScreenTask" %>



<div class="fieldcontain ${hasErrors(bean: screenTaskInstance, field: 'URL', 'error')} required">
	<label for="URL">
		<g:message code="screenTask.URL.label" default="URL" />
		<span class="required-indicator">*</span>
	</label>
	<g:field type="url" name="URL" required="" value="${screenTaskInstance?.URL}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: screenTaskInstance, field: 'pageWidth', 'error')} required">
	<label for="pageWidth">
		<g:message code="screenTask.pageWidth.label" default="Page Width" />
		<span class="required-indicator">*</span>
	</label>
	<g:select name="pageWidth" from="${screenTaskInstance.constraints.pageWidth.inList}" required="" value="1280" valueMessagePrefix="screenTask.pageWidth"/> px
</div>

