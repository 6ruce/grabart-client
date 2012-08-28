var Widget = function(){
    var name = '',
        drawer,
        children = [],
        map = {};


    this.draw = function(){
        drawer.draw();
        for (var i in children) {
            children[i].draw();
        }
        this.fireEvent('paint');
    };
    this.bind = function(){
        for (var i in children) {
            children[i].bind();
        }
    };
    this.show    = function(){};
    this.hide    = function(){};
    this.refresh = function(){ drawer.refresh(); };
    this.redraw  = function(){
        drawer.redraw();
        this.fireEvent('paint');
    }

    this.setDrawer   = function(drw){ drawer = drw; };

    this.setName     = function(nm){ name = nm; }
    this.setWidth    = function(wd){ drawer.setWidth(wd); };
    this.setHeight   = function(hd){ drawer.setHeight(hd); };
    this.setTop      = function(wd){ drawer.setTop(wd); };
    this.setBgColor  = function(cl){ drawer.setBgColor(cl); };
    this.setFontSize = function(fs){ drawer.setFontSize(fs); };
    this.setLeft     = function(hd){ drawer.setLeft(hd); };
    this.setTitle    = function(tl){ drawer.setTitle(tl); };
    this.setVisible  = function(vs){ drawer.setVisible(vs); };
    this.setOpacity  = function(op){ drawer.setOpacity(op); };
    this.setCursor   = function(cr){ drawer.setCursor(cr); };

    this.getName     = function(){ return name; }
    this.getDrawer   = function(){ return drawer; };
    this.getChildren = function(){ return children; }
    this.getWidth    = function(){ return drawer.getWidth(); };
    this.getHeight   = function(){ return drawer.getHeight(); };
    this.getLeft     = function(){ return drawer.getLeft(); };
    this.getTop      = function(){ return drawer.getTop(); };
    this.getWidget   = function(name){
        if (Utils.isset(map[name])) {
            return map[name];
        } else {
            var widget = false;
            for (var i in children) {
                widget = children[i].getWidget(name);
                if (widget) break;
            }
            if (widget) {
                return widget;
            } else {
                return false;
            }
        }
    };

    this.addWidget   = function(widget){
        if (Utils.isset(widget.instance)) {
            map[widget.name] = widget.instance;
            children.push(widget.instance);
        } else {
            var name  = widget.getName();
            if (name) {
                map[name] = widget;
            }
            children.push(widget);
        }
        return this;
    };
};
Widget.prototype = new IListen();