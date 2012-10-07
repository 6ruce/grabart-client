GRABART.test.application = {
    run: function (testSuit) {
        console.log('{test.application running}');
        testSuit.test(this.testAddProcess, 'test.application.testAddProcess');
        testSuit.test(this.testRun, 'test.application.testRun');
        this.clean();
    },

    testAddProcess: function (suit) {
        var testApp = new GRABART.GrabApp(),
            processDummy = { getName: function () { return 'test'; } };

        testApp.addProcess(processDummy);
        suit.assertEquals(testApp.getProcess('test'), processDummy);
    },

    testRun: function (suit) {
        var testApp = new GRABART.GrabApp(),
            guiDir = suit.getDummy('bind'),
            widget = suit.getDummy(['draw', 'bind'], { getName: function () { return 'test' } });

        testApp.setGuiDirector(guiDir);
        testApp.addWidget(widget);
        testApp.run();

        suit.assertRunned(guiDir.bind, 'guiDir.bind');
        suit.assertRunned(widget.draw, 'widget.draw');
        suit.assertRunned(widget.bind, 'widget.bind');
    },

    clean: function () {
        GRABART.GrabApp.prototype = new GRABART.Widget();
        GRABART.Widget.prototype = new GRABART.IListen();
    }
};