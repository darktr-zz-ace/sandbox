package newremarker

import org.springframework.dao.DataIntegrityViolationException

class TagController {

    static allowedMethods = [save: ["POST", "GET"], update: ["POST", "GET"], delete: ["POST", "GET"]]

    def index() {
        redirect(action: "list", params: params)
    }

    def list() {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)
        [tagInstanceList: Tag.list(params), tagInstanceTotal: Tag.count()]
    }
	
	/*
	** Custom "list" method which redirects to the "remote list" page,
	** in order to return a list of all the tags to the client-side javascript.
	** filters by the "token", which can be used to separate 'sessions' of remarking.
	** if no argument is given, filters by "default"
	*/
	def remoteList() {
		def query
		def criteria = Tag.createCriteria()
		def results

		query = {
			and {
				like("url", params.url + '%')
				
				if (params.token)
					like("token", params.token + '%')
			}
		}

		results = criteria.list(params, query)
		[tagInstanceList: results, tagInstanceTotal: Tag.count()]
    }

    def create() {
        [tagInstance: new Tag(params)]
    }

    def save() {
        def tagInstance = new Tag(params)
        if (!tagInstance.save(flush: true)) {
            render(view: "create", model: [tagInstance: tagInstance])
            return
        }

		flash.message = message(code: 'default.created.message', args: [message(code: 'tag.label', default: 'Tag'), tagInstance.id])
        redirect(action: "show", id: tagInstance.id)
    }
	
	/*
	** Custom "save" method which redirects to the "remote list" page,
	** in order to return information to the client-side javascript
	** and also to indicate that the save action is complete
	*/
	def remoteSave() {
        def tagInstance = new Tag(params)
        if (!tagInstance.save(flush: true)) {
            // redirect to an error message
        }

		flash.message = message(code: 'default.created.message', args: [message(code: 'tag.label', default: 'Tag'), tagInstance.id])
        redirect(action: "remoteList", params:[token:params.token, url:params.url])
    }

    def show() {
        def tagInstance = Tag.get(params.id)
        if (!tagInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'tag.label', default: 'Tag'), params.id])
            redirect(action: "list")
            return
        }

        [tagInstance: tagInstance]
    }

    def edit() {
        def tagInstance = Tag.get(params.id)
        if (!tagInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'tag.label', default: 'Tag'), params.id])
            redirect(action: "list")
            return
        }

        [tagInstance: tagInstance]
    }

    def update() {
        def tagInstance = Tag.get(params.id)
        if (!tagInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'tag.label', default: 'Tag'), params.id])
            redirect(action: "list")
            return
        }

        if (params.version) {
            def version = params.version.toLong()
            if (tagInstance.version > version) {
                tagInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'tag.label', default: 'Tag')] as Object[],
                          "Another user has updated this Tag while you were editing")
                render(view: "edit", model: [tagInstance: tagInstance])
                return
            }
        }

        tagInstance.properties = params

        if (!tagInstance.save(flush: true)) {
            render(view: "edit", model: [tagInstance: tagInstance])
            return
        }

		flash.message = message(code: 'default.updated.message', args: [message(code: 'tag.label', default: 'Tag'), tagInstance.id])
        redirect(action: "show", id: tagInstance.id)
    }
	
	/*
	** Custom "update" method which redirects to the "remote list" page,
	** in order to return information to the client-side javascript
	** and also to indicate that the update action is complete
	*/
	def remoteUpdate() {
        def tagInstance = Tag.get(params.id)
        if (!tagInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'tag.label', default: 'Tag'), params.id])
            redirect(action: "remoteList", params:[token:tagInstance.token])
            return
        }

        if (params.version) {
            def version = params.version.toLong()
            if (tagInstance.version > version) {
                tagInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'tag.label', default: 'Tag')] as Object[],
                          "Another user has updated this Tag while you were editing")
                // redirect to an error message
            }
        }

        tagInstance.properties = params

        if (!tagInstance.save(flush: true)) {
            // redirect to an error message
        }

		flash.message = message(code: 'default.updated.message', args: [message(code: 'tag.label', default: 'Tag'), tagInstance.id])
        flash.token = tagInstance.token
		redirect(action: "remoteList", params:[token:tagInstance.token, url:params.url])
    }

	
    def delete() {
        def tagInstance = Tag.get(params.id)
        if (!tagInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'tag.label', default: 'Tag'), params.id])
            redirect(action: "list")
            return
        }

        try {
            tagInstance.delete(flush: true)
			flash.message = message(code: 'default.deleted.message', args: [message(code: 'tag.label', default: 'Tag'), params.id])
            redirect(action: "list")
        }
        catch (DataIntegrityViolationException e) {
			flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'tag.label', default: 'Tag'), params.id])
            redirect(action: "show", id: params.id)
        }
    }
	
	
	/*
	** Custom "delete" method which redirects to the "remote list" page,
	** in order to return information to the client-side javascript
	** and also to indicate that the delete action is complete
	*/
	def remoteDelete() {
        def tagInstance = Tag.get(params.id)
		def token = tagInstance.token
        if (!tagInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'tag.label', default: 'Tag'), params.id])
            // redirect to error message
        }

        try {
            tagInstance.delete(flush: true)
			flash.message = message(code: 'default.deleted.message', args: [message(code: 'tag.label', default: 'Tag'), params.id])
			redirect(action: "remoteList", params:[token:token, url:params.url])
        }
        catch (DataIntegrityViolationException e) {
			flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'tag.label', default: 'Tag'), params.id])
            // redirect to error message
        }
    }
	
	
}
