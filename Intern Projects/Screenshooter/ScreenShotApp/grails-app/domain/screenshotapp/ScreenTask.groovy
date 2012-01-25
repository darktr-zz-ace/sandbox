package screenshotapp

class ScreenTask {

    static constraints = {
        URL(blank: false, url:true)
        pageWidth(blank: false, inList:["800","1024","1280","1600"])
        resultPath(display: false, blank: true, nullable:  true)
    }

    String URL;
    Date dateCreated;
    String resultPath;
    String pageWidth;



}
