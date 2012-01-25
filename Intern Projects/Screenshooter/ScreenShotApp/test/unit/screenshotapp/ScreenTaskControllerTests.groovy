package screenshotapp



import org.junit.*
import grails.test.mixin.*

@TestFor(ScreenTaskController)
@Mock(ScreenTask)
class ScreenTaskControllerTests {


    def populateValidParams(params) {
      assert params != null
      // TODO: Populate valid properties like...
      //params["name"] = 'someValidName'
    }

    void testIndex() {
        controller.index()
        assert "/screenTask/list" == response.redirectedUrl
    }

    void testList() {

        def model = controller.list()

        assert model.screenTaskInstanceList.size() == 0
        assert model.screenTaskInstanceTotal == 0
    }

    void testCreate() {
       def model = controller.create()

       assert model.screenTaskInstance != null
    }

    void testSave() {
        controller.save()

        assert model.screenTaskInstance != null
        assert view == '/screenTask/create'

        response.reset()

        populateValidParams(params)
        controller.save()

        assert response.redirectedUrl == '/screenTask/show/1'
        assert controller.flash.message != null
        assert ScreenTask.count() == 1
    }

    void testShow() {
        controller.show()

        assert flash.message != null
        assert response.redirectedUrl == '/screenTask/list'


        populateValidParams(params)
        def screenTask = new ScreenTask(params)

        assert screenTask.save() != null

        params.id = screenTask.id

        def model = controller.show()

        assert model.screenTaskInstance == screenTask
    }

    void testEdit() {
        controller.edit()

        assert flash.message != null
        assert response.redirectedUrl == '/screenTask/list'


        populateValidParams(params)
        def screenTask = new ScreenTask(params)

        assert screenTask.save() != null

        params.id = screenTask.id

        def model = controller.edit()

        assert model.screenTaskInstance == screenTask
    }

    void testUpdate() {
        controller.update()

        assert flash.message != null
        assert response.redirectedUrl == '/screenTask/list'

        response.reset()


        populateValidParams(params)
        def screenTask = new ScreenTask(params)

        assert screenTask.save() != null

        // test invalid parameters in update
        params.id = screenTask.id
        //TODO: add invalid values to params object

        controller.update()

        assert view == "/screenTask/edit"
        assert model.screenTaskInstance != null

        screenTask.clearErrors()

        populateValidParams(params)
        controller.update()

        assert response.redirectedUrl == "/screenTask/show/$screenTask.id"
        assert flash.message != null

        //test outdated version number
        response.reset()
        screenTask.clearErrors()

        populateValidParams(params)
        params.id = screenTask.id
        params.version = -1
        controller.update()

        assert view == "/screenTask/edit"
        assert model.screenTaskInstance != null
        assert model.screenTaskInstance.errors.getFieldError('version')
        assert flash.message != null
    }

    void testDelete() {
        controller.delete()
        assert flash.message != null
        assert response.redirectedUrl == '/screenTask/list'

        response.reset()

        populateValidParams(params)
        def screenTask = new ScreenTask(params)

        assert screenTask.save() != null
        assert ScreenTask.count() == 1

        params.id = screenTask.id

        controller.delete()

        assert ScreenTask.count() == 0
        assert ScreenTask.get(screenTask.id) == null
        assert response.redirectedUrl == '/screenTask/list'
    }
}
