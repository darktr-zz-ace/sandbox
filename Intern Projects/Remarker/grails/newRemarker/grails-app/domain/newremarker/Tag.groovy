package newremarker

class Tag {
	String content
	String username
	String url
	Date dateCreated
	Date lastUpdated
	String xpath
	String browserInfo
	boolean design
	boolean bug
	boolean important
	boolean done = false
	String token = "default"
	
    static constraints = {
		lastUpdated()
		content(blank:false, nullable:false)
		username(blank:false, nullable:false)
		url(blank:false, nullable:false)
		xpath()
		browserInfo()
		design()
		bug()
		important()
		done()
		token(nullable:true)
    }
}
