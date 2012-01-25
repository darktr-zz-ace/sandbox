class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

		"/"(controller: "ScreenTask", action: "create")
		"500"(view:'/error')
	}
}
