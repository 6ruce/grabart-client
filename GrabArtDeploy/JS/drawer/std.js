var StdDrawer = function() {
    var displayItem,
        mainItem,
        domManipulator,
        fontSize = 12,
        bgcolor  = 'white',
        visible  = true,
        opacity  = 0.8,
        cursor   = 'default',
        width    = 200,
        height   = 100,
        top      = 20,
        left     = 20,
        unit     = 'px',
        title    = '';

    var _createMainView = function(){
        var main = domManipulator.createElement('div');
        main.style.position = 'fixed';
        main.style.left = left + unit;
        main.style.top = top + unit;
        main.style.width = width + unit;
        main.style.height = height + unit;
        main.style.backgroundColor = bgcolor;
        main.style.zIndex = 2012;
        main.style.borderRadius = '2px';
        main.style.padding = '2px';
        main.style.margin = '2px';
        main.style.fontSize = fontSize + unit;
        main.style.borderWidth = '1px';
        main.style.borderStyle = '1px';
        main.style.borderColor = 'black';
        main.style.cursor = cursor;
        main.style.opacity = opacity;
        main.innerHTML = title;
        main.align = 'center';
        main.class = 'grabart';
        return main;
    };
    var _createDisplayView = function(){
    };

    this.draw = function () {
        if (! mainItem) {
            mainItem = _createMainView();
            displayItem = _createDisplayView();
        }

        if (visible) {
            this.show();
        } else {
            this.hide();
        }
    };
    this.show        = function(){ domManipulator.show(mainItem); };
    this.hide        = function(){ domManipulator.hide(mainItem); };
    this.refresh     = function(){
        if (mainItem) {
            mainItem.style.width = width + unit;
            mainItem.style.height = height + unit;
        }
    };

    this.setDomManipulator = function(man){ domManipulator = man; };
    this.setWidth    = function(wd){ width = wd; };
    this.setHeight   = function(hd){ height = hd; };
    this.setTop      = function(tp){ top = tp; };
    this.setLeft     = function(lt){ left = lt; };
    this.setTitle    = function(tl){ title = tl; };
    this.setBgColor  = function(cl){ bgcolor = cl; };
    this.setFontSize = function(fs){ fontSize = fs; };
    this.setVisible  = function(vs){ visible = vs; };
    this.setOpacity  = function(op){ opacity = op; };
    this.setCursor   = function(cr){ cursor = cr; };

    this.getNodeItem = function(){ return mainItem; };
    this.getWidth    = function(){ return width; };
    this.getHeight   = function(){ return height; };
};