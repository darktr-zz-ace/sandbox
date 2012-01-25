package screenshotapp

import org.springframework.dao.DataIntegrityViolationException

class ScreenTaskController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() {
        redirect(action: "list", params: params)
    }

    def list() {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)
        [screenTaskInstanceList: ScreenTask.list(params), screenTaskInstanceTotal: ScreenTask.count()]
    }

    def create() {
        [screenTaskInstance: new ScreenTask(params)]
    }

    def save() {
        def screenTaskInstance = new ScreenTask(params)
        def fname = ".\\Screenshots\\"+ (screenTaskInstance.URL + "" + System.currentTimeMillis()).encodeAsMD5()+ ".jpg"

        //The command String:
        def command = 'phantomjs "C:\\phantomjs\\phantomjs-1.4.1-win32-dynamic\\screenshot_v1.js" "'+screenTaskInstance.URL + '" "'+ fname + '" '+ screenTaskInstance.pageWidth// Create the String
        def proc = command.execute()                 // Call *execute* on the string
		StringWriter stringWriterOutput = new StringWriter()
		stringWriterOutput << proc.in
        proc.waitFor()                               //wait for completion
		
		String data = stringWriterOutput.toString();
		
		
		if(data.substring(0,7).equals("Success")){
		
			screenTaskInstance.resultPath = fname //g.createLinkTo(dir:"images", file:fname).toString()

			if (!screenTaskInstance.save(flush: true)) {
				render(view: "create", model: [screenTaskInstance: screenTaskInstance])
				return
			}

			flash.message = message(code: 'default.created.message', args: [message(code: 'screenTask.label', default: 'ScreenTask'), screenTaskInstance.id])
			redirect(action: "show", id: screenTaskInstance.id)
			
		}else{
			screenTaskInstance.errors.rejectValue("URL", "default.error.badurl",)
                render(view: "create", model: [screenTaskInstance: screenTaskInstance])
                return
		}
		
		
		
        
    }

    def show() {
        def screenTaskInstance = ScreenTask.get(params.id)

        if (!screenTaskInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'screenTask.label', default: 'ScreenTask'), params.id])
            redirect(action: "list")
            return
        }

        [screenTaskInstance: screenTaskInstance]
    }

    def download(){
        def screenTaskInstance = ScreenTask.get(params.id)
        def file = new File(screenTaskInstance.resultPath)

        response.setContentType("application/octet-stream")
        response.setHeader("content-disposition", "attachment; filename=screenshot.jpg")
        response.contentLength = file.length()

        def is = file.newInputStream()
        response.outputStream << is
        is.close()
    }
	
	def largeView(){
		
		def screenTaskInstance = ScreenTask.get(params.id)
		
		if (!screenTaskInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'screenTask.label', default: 'ScreenTask'), params.id])
            redirect(action: "list")
            return
        }
	
		[screenTaskInstance: screenTaskInstance]
	
	}

    def edit() {
        def screenTaskInstance = ScreenTask.get(params.id)
        if (!screenTaskInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'screenTask.label', default: 'ScreenTask'), params.id])
            redirect(action: "list")
            return
        }

        [screenTaskInstance: screenTaskInstance]
    }

    def update() {
        def screenTaskInstance = ScreenTask.get(params.id)
        if (!screenTaskInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'screenTask.label', default: 'ScreenTask'), params.id])
            redirect(action: "list")
            return
        }

        if (params.version) {
            def version = params.version.toLong()
            if (screenTaskInstance.version > version) {
                screenTaskInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'screenTask.label', default: 'ScreenTask')] as Object[],
                          "Another user has updated this ScreenTask while you were editing")
                render(view: "edit", model: [screenTaskInstance: screenTaskInstance])
                return
            }
        }

        screenTaskInstance.properties = params

        if (!screenTaskInstance.save(flush: true)) {
            render(view: "edit", model: [screenTaskInstance: screenTaskInstance])
            return
        }

		flash.message = message(code: 'default.updated.message', args: [message(code: 'screenTask.label', default: 'ScreenTask'), screenTaskInstance.id])
        redirect(action: "show", id: screenTaskInstance.id)
    }

    def delete() {
        def screenTaskInstance = ScreenTask.get(params.id)
        if (!screenTaskInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'screenTask.label', default: 'ScreenTask'), params.id])
            redirect(action: "list")
            return
        }

        try {
            screenTaskInstance.delete(flush: true)
			flash.message = message(code: 'default.deleted.message', args: [message(code: 'screenTask.label', default: 'ScreenTask'), params.id])
            redirect(action: "list")
        }
        catch (DataIntegrityViolationException e) {
			flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'screenTask.label', default: 'ScreenTask'), params.id])
            redirect(action: "show", id: params.id)
        }
    }
}
