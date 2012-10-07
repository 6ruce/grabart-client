GRABART.test.widget = {
    run: function (testSuit) {
        console.log('{test.widget running}');
        testSuit.test(this.testDraw, 'test.widget.testDraw');
        this.clean();
    },

    testDraw: function (suit) {
        var testWidget = new GRABART.Widget(),
            testDrawer = suit.getDummy('draw'),
            testChildWidget = suit.getDummy('draw', { getName: function () { return 'test'; }});

        testWidget.setDrawer(testDrawer);
        testWidget.addWidget(testChildWidget);
        testWidget.draw();

        suit.assertRunned(testDrawer.draw, 'testDrawer.draw');
        suit.assertRunned(testChildWidget.draw, 'testChildWidget.draw')
    },

    clean: function () {
        GRABART.Widget.prototype = new GRABART.IListen();
    }
}