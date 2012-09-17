// ==UserScript==
// @name       GrabArt
// @namespace  http://use.i.E.your.homepage/
// @version    0.8
// @description  grab separated into pieces `googleart` pictures
// @match      http://www.googleartproject.com/collection*
// @copyright  2012+, bruce
// @require http://grabart.my/
// ==/UserScript==

var GRABART = (function() {
    String.prototype.ucfirst = function(){
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    var DIOptions = {
    NavigationWindow: {
        name: 'navigation',
        Drawer: 'StdDrawer',
        title: 'Navigation',
        top: 130,
        height: 215,
        width: 300
    },
    ActionWindow: {
        name: 'action',
        Drawer: 'StdDrawer',
        width: 100,
        height: 100
    },
    HintWindow: {
        name: 'hint',
        Drawer: 'StdDrawer',
        left: 130,
        width: 190,
        height: 100
    },
    OutputBox: {
        name: 'output',
        Drawer: 'OutputDrawer',
        top: 20,
        left: 330,
        width: 400,
        height: 326
    },
    StdDrawer: {
        DomManipulator: 'StdDOMOperator'
    },
    DrawerGrid: {
        DomManipulator: 'StdDOMOperator'
    },
    ProgressDrawer: {
        DomManipulator: 'StdDOMOperator'
    },
    OutputDrawer: {
        DomManipulator: 'StdDOMOperator',
        visible: false
    },
    RunButton: {
        name: 'button',
        Drawer: 'StdDrawer',
        bgColor: '#F7F7F7',
        top: 25,
        left: 25,
        width: 90,
        height: 90,
        fontSize: 65,
        title: '&#x25B6;',
        cursor: 'pointer'
    },
    SaveButton: {
        name: 'save',
        Drawer: 'StdDrawer',
        bgColor: '#F7F7F7',
        left: 135,
        top: 25,
        width: 180,
        height: 35,
        fontSize: 25,
        cursor: 'pointer',
        title: 'save'
    },
    ProgressBar: {
        name: 'progress',
        Drawer: 'ProgressDrawer',
        top: 70,
        left: 135,
        width: 180,
        height: 45
    },
    Grid: {
        name: 'grid',
        Drawer: 'DrawerGrid',
        left: 25,
        top: 150,
        width: 298,
        height: 198,
        vblocks: 2,
        hblocks: 2
    },
    Graber: {
        name: 'graber'
    }
};
         
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
        console.log(visible);
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
    var DrawerGrid = function() {
    var domManipulator,
        cellMap = [],
        width = 100,
        height = 100,
        left = 20,
        top = 20,
        hblocks = 1,
        vblocks = 1,
        separator = 1,
        cellWidth,
        cellHeight;

    var clear = function(){
        var i,j;
        for (i = 0; i < cellMap.length; i++) {
            for (j = 0; j < cellMap[i].length; j++) {
                domManipulator.delete(cellMap[i][j]);
            }
        }
        cellMap = [];
    };
    this.refresh = function(){};
    this.redraw = function(){
        clear();
        this.draw();
    };
    this.draw = function(){
        var voffset = 0,
            hoffset = 0,
            i, j;

        cellWidth = Math.round((width - (hblocks - 1) * separator) / hblocks),
        cellHeight = Math.round((height - (vblocks - 1) * separator) / vblocks);

        for (i = 0; i < vblocks; i++) {
            hoffset = 0;
            cellMap[i] = [];
            for (j = 0; j < hblocks; j++) {
                var cell = domManipulator.createElement('div');
                cell.style.position = 'fixed';
                cell.style.backgroundColor = 'red';
                cell.style.zIndex = 2012;
                cell.style.top = top + voffset + 'px';
                cell.style.left = left + hoffset + 'px';
                cell.style.width = cellWidth + 'px';
                cell.style.height = cellHeight + 'px';
                cellMap[i][j] = cell;
                domManipulator.show(cell);
                hoffset += cellWidth + separator;
            }
            voffset += cellHeight + separator;
        }
        this.setWidth(cellWidth * hblocks + (hblocks - 1) * separator);
        this.setHeight(cellHeight * vblocks + (vblocks - 1) * separator);
    };

    this.activateCell = function(x, y){
        if (Utils.isset(cellMap[x]) && Utils.isset(cellMap[x][y])) {
            cellMap[x][y].style.backgroundColor = 'yellow';
        } else {
            throw 'Can`t find cell with coords {x:' + x + ', y:' + y + '}';
        }
    };
    this.restruct = function(){
        var i,j
            hoffset = 0;
        for (i in cellMap){
            for (j in cellMap[i]){
                cellMap[i][j].style.top += cellHeight + separator;
            }
        }
        cellMap[-1] = [];
        for (i = 0; i < hblocks; i++){
            var cell = domManipulator.createElement('div');
            cell.style.position = 'fixed';
            cell.style.backgroundColor = 'red';
            cell.style.zIndex = 2012;
            cell.style.top = top + 'px';
            cell.style.left = left + hoffset + 'px';
            cell.style.width = cellWidth + 'px';
            cell.style.height = cellHeight + 'px';
            cellMap[-1][i] = cell;
            domManipulator.show(cell);
            hoffset += cellWidth + separator;
        }
        height += cellHeight + separator;
    };

    this.setDomManipulator = function(man){ domManipulator = man; };
    this.setHblocks  = function(hb){ hblocks = hb;};
    this.setVblocks  = function(vb){ vblocks = vb;};
    this.setWidth    = function(wd){ width = wd; };
    this.setHeight   = function(hd){ height = hd; };
    this.setTop      = function(tp){ top = tp; };
    this.setLeft     = function(lt){ left = lt; };

    this.getWidth    = function(){ return width; };
    this.getHeight   = function(){ return height; };
    this.getVblocks  = function(){ return vblocks; };
    this.getHblocks  = function(){ return hblocks; };
};
    var ProgressDrawer = function() {
    var domManipulator,
        width,
        height,
        top,
        left,
        bgcolor = 'gray',
        progress = 0,
        changed = false,
        back = null,
        line = null;

    var changeBack = function (bck) {
        var back = Utils.isset(bck) ? bck : domManipulator.createElement('div');
        back.style.position = 'fixed';
        back.style.backgroundColor = bgcolor;
        back.style.borderRadius = '2px';
        back.style.zIndex = 2012;
        back.style.borderRadius = '2px';
        back.style.padding = '2px';
        back.style.margin = '2px';
        back.style.top = top + 'px';
        back.style.left = left + 'px';
        back.style.width = width + 'px';
        back.style.height = height + 'px';
        return back;
    };
    var changeLine = function (ln) {
        var line = Utils.isset(ln) ? ln : domManipulator.createElement('div');
        line.style.position = 'fixed';
        line.style.backgroundColor = 'maroon';
        line.style.color = 'white';
        line.style.borderRadius = '2px';
        line.style.padding = '2px';
        line.style.margin = '2px';
        line.style.zIndex = 2012;
        line.style.top = top + 2 + 'px';
        line.style.left = left + 2 + 'px';
        line.style.width = Math.round((width - 4) * progress) + 'px';
        line.style.height = height - 4 + 'px';
        line.innerHTML = parseFloat(progress * 100).toFixed(2) + '%';
        return line;
    };
    this.draw = function(){
        if (back) {
            changeBack(back);
        } else {
            back = changeBack();
            domManipulator.show(back);
        }
        if (line) {
            changeLine(line);
        } else {
            line = changeLine();
            domManipulator.show(line);
        }
    };
    this.refresh = this.draw;
    this.setDomManipulator = function(man){ domManipulator = man; };
    this.setBgColor  = function(bc){ bgcolor = bc;}
    this.setWidth    = function(wd){ width = wd;};
    this.setHeight   = function(hd){ height = hd;};
    this.setTop      = function(tp){ top = tp;};
    this.setLeft     = function(lt){ left = lt;};
    this.setProgress = function(pr){ progress = pr;};

    this.getWidth    = function(){ return width;};
    this.getHeight   = function(){ return height;};
    this.getTop      = function(){ return top;};
    this.getLeft     = function(){ return left;};
};
    var OutputDrawer = function() {
    var domManipulator,
        width,
        height,
        top,
        left,
        bgcolor = 'white',
        container,
        textHolder;

    this.draw = function(){
        container = domManipulator.createElement('div');
        container.style.position = 'fixed';
        container.style.backgroundColor = bgcolor;
        container.style.borderRadius = '2px';
        container.style.zIndex = 2012;
        container.style.borderRadius = '2px';
        container.style.padding = '2px';
        container.style.margin = '2px';
        container.style.top = top + 'px';
        container.style.opacity = 0.8;
        container.style.left = left + 'px';
        container.style.width = width + 'px';
        container.style.height = height + 'px';

        textHolder = domManipulator.createElement('div');
        textHolder.style.position = 'fixed';
        textHolder.style.backgroundColor = 'white';
        textHolder.style.color = 'black';
        textHolder.style.fontSize = 3;
        textHolder.style.borderRadius = '2px';
        textHolder.style.zIndex = 2012;
        textHolder.style.opacity = 1;
        textHolder.style.overflow = 'auto';
        textHolder.style.borderRadius = '2px';
        textHolder.style.padding = '2px';
        textHolder.style.margin = '2px';
        textHolder.style.top = top + 3 + 'px';
        textHolder.style.left = left + 3 + 'px';
        textHolder.style.width = width - 6  + 'px';
        textHolder.style.height = height - 6 + 'px';

        domManipulator.show(container);
        domManipulator.show(textHolder);
    };
    this.addText = function(text){
        textHolder.innerHTML += text;
    };
    this.reset = function(){
        textHolder.innerHTML = '';
    };
    this.setDomManipulator = function(man){ domManipulator = man; };
    this.setBgColor  = function(bc){ bgcolor = bc;}
    this.setWidth    = function(wd){ width = wd;};
    this.setHeight   = function(hd){ height = hd;};
    this.setTop      = function(tp){ top = tp;};
    this.setLeft     = function(lt){ left = lt;};

    this.getWidth    = function(){ return width;};
    this.getHeight   = function(){ return height;};
    this.getTop      = function(){ return top;};
    this.getLeft     = function(){ return left;};
};

    var StdDOMOperator = function() {
    this.createElement = function(elem) {
        return document.createElement(elem);
    };
    this.show = function(elem) {
        document.body.insertBefore(elem, document.getElementById('page-wrapper'));
        elem.style.display = '';
    };
    this.hide = function(elem) {
        elem.style.display = 'none';
    };
    this.delete = function(elem) {
        elem.parentNode.removeChild(elem);
    };
};


    var IListen = function(){
    var listeners = {};

    this.addListener = function(event, callback, instance){
        if ( ! Utils.isset(listeners[event])) {
            listeners[event] = [];
        }
        var listener = {callback: callback, instance: instance};
        listeners[event].push(listener);
        return this;
    };
    this.fireEvent = function(event, context){
        if (Utils.isset(listeners[event])){
            var eventListeners = listeners[event],
                i;
            for (i in eventListeners) {
                eventListeners[i].callback.call(eventListeners[i].instance, context);
            }
        }
    };
};
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
    var Process = function(){
    var name = '';

    this.setName = function(nm){ name = nm; };
    this.getName = function(){ return name; };
};
Process.prototype = new IListen();
    var Graber = function() {
    var parts = [],
        imgLayer,
        grabProcId,
        process = this;

    var getTileLayer = function(){
        var tileLayers = document.querySelectorAll('.m2-tileLayer');
        var zoomLayer = tileLayers[tileLayers.length - 1];
        return {hblocks: parseInt(parseInt(zoomLayer.style.width) / 512) + 1 ,
                vblocks: parseInt((parseInt(zoomLayer.style.height) - 512) / 512) + 1,
                imageLayer: zoomLayer};
    };
    this.run = function(){
        var tileLayer = getTileLayer();
        imgLayer = tileLayer.imageLayer;
        this.fireEvent('grid', tileLayer);

        grabProcId = setInterval(this.grab, 200);
    };
    this.stop = function(){
        clearInterval(grabProcId);
    };
    this.grab = function(){
        var x,y,i
            visibleParts = imgLayer.querySelectorAll('img');
        for (i = 0; i < visibleParts.length; i++) {
            y = Math.round(parseInt(visibleParts[i].style.left) / 512);
            x = Math.round((parseInt(visibleParts[i].style.top) - 512) / 512);
            if (Utils.isset(parts[x])) {
                if ( ! Utils.isset(parts[x][y])) {
                    if (visibleParts[i].src) {
                        parts[x][y] = visibleParts[i].src;
                        process.fireEvent('grab', {x: x, y: y});
                    }
                }
            } else {
                if (visibleParts[i].src) {
                    parts[x] = [];
                    parts[x][y] = visibleParts[i].src;
                    process.fireEvent('grab', {x: x, y: y});
                }
            }
        }
    };
    this.getData = function(){
        return parts;
    };
};
Graber.prototype = new Process();
    var ProgressBar = function(){
    this.setProgress = function(percents){
        this.getDrawer().setProgress(percents);
        this.getDrawer().refresh();
    };
};
ProgressBar.prototype = new Widget();
    var OutputBox = function(){
    this.addText = function(text){
        this.getDrawer().addText(text);
    };
};
OutputBox.prototype = new Widget();
    var Grid = function(){
    var totalCells = 0,
        activeCells = 0;
    this.setVblocks = function(vb){
        this.getDrawer().setVblocks(vb);
        totalCells = vb * this.getDrawer().getHblocks();

    };
    this.setHblocks = function(hb){
        this.getDrawer().setHblocks(hb);
        totalCells = hb * this.getDrawer().getVblocks();

    };
    this.repaintGrid = function(blocks){
        this.setVblocks(blocks.vblocks);
        this.setHblocks(blocks.hblocks);
        this.redraw();

    };
    this.activateCell = function(coords){
        try {
            this.getDrawer().activateCell(coords.x, coords.y);
            activeCells++;
            this.fireEvent('activated', {total: totalCells, active: activeCells});
        } catch (e) {
            console.log(e);
            this.getDrawer().restruct();
            this.fireEvent('paint');
        }
    };
};
Grid.prototype = new Widget();
    var Utils = {
    isset: function(variable){
        return typeof variable != "undefined";
    }
};
    var GrabApp = function(){
    var guiDirector,
        processes = {};
    this.run = function () {
        if (guiDirector) {
            guiDirector.bind();
        }
        var widgets = this.getChildren();
        for (var i in widgets) {
            widgets[i].draw();
            widgets[i].bind();
        }
    };
    this.addProcess = function(process){
        processes[process.getName()] = process;
    };

    this.setGuiDirector = function(dr){ guiDirector = dr; };
    this.getProcess = function(name){ return processes[name]; };
};
GrabApp.prototype = new Widget();
    var GuiDirector = function(app){
        this.bind = function(){
            app.getWidget('grid').addListener('paint', this.rebuildScene, this);
            app.getWidget('grid').addListener('activated', function(cells){app.getWidget('progress').setProgress(cells.active/cells.total);});
            app.getWidget('button').addListener('start', app.getProcess('graber').run, app.getProcess('graber'));
            app.getWidget('button').addListener('stop', app.getProcess('graber').stop, app.getProcess('graber'));
            app.getWidget('save').addListener('save', this.publishData, this);
            app.getProcess('graber').addListener('grid', app.getWidget('grid').repaintGrid, app.getWidget('grid'));
            app.getProcess('graber').addListener('grab', app.getWidget('grid').activateCell, app.getWidget('grid'));

        };
        this.rebuildScene = function(){
            var nav      = app.getWidget('navigation'),
                grid     = app.getWidget('grid'),
                hint     = app.getWidget('hint'),
                save     = app.getWidget('save'),
                output   = app.getWidget('output'),
                progress = app.getWidget('progress');
            var dx       = nav.getWidth(),
                dy       = nav.getHeight();

            nav.setWidth(grid.getWidth() + 2);
            nav.setHeight(grid.getHeight() + 17);

            dx -= nav.getWidth();
            dy -= nav.getHeight();

            hint.setWidth(hint.getWidth() - dx);
            save.setWidth(save.getWidth() - dx);
            progress.setWidth(progress.getWidth() - dx);
            if (output && false) {//temporary
                output.setLeft(output.getLeft() - dx);
                output.setHeight(output.getHeight() - dy);
            }
            nav.refresh();
            hint.refresh();
        };
        this.publishData = function(){
            var data = app.getProcess('graber').getData(),
                output = app.getWidget('output'),
                i, j;

            output.addText('[' + data.length + ',' + data[0].length + ']');
            for (i in data){
                for (j in data[i]){
                    output.addText(data[i][j]);
                }
            }
        };
    };
    var DependencyInjector = function(dep){
        var dependencies = {};

        this.isfunc = function(variable){
            return typeof variable == "function";
        };
        this.dependencies = function(dep){
            if (Utils.isset(dep)) {
                dependencies = dep;
            } else {
                return dependencies;
            }
        };
        this.get = function(klass){
            if (Utils.isset(GRABART[klass])) {
                var instance = new GRABART[klass]();
                if (Utils.isset(dependencies[klass])) {
                    var dep = dependencies[klass],
                        i;
                    for (var i in dep) {
                        if (typeof instance['set' + i.ucfirst()] == 'function') {
                            if (Utils.isset(GRABART[dep[i]])) {
                                var dependence = this.get(dep[i]);
                            } else {
                                var dependence = dep[i];
                            }
                            instance['set' + i.ucfirst()](dependence);
                        } else {
                            throw 'Can`t set dependency `' + i + '` no seter in class `' + klass +'`';
                        }
                    }
                }
                return instance;
            } else {
                throw 'Unknown class`' + klass + '`';
            }
        }

        this.dependencies(dep);
    };

    var RunButton = function(){
    var pressed = false;
    widget = this;
    this.bind = function(){
        nodeItem = this.getDrawer().getNodeItem();
        var prevColor = nodeItem.style.backgroundColor;
        nodeItem.addEventListener('mouseover', function(){
            if (! pressed) {
                this.style.backgroundColor = '#FA7878';
            }
        }, false);
        nodeItem.addEventListener('mouseout', function(){
            if (! pressed) {
                this.style.backgroundColor = prevColor;
            }
        }, false);
        nodeItem.addEventListener('click', function(){
            if (1 == this.style.opacity) {
                this.style.opacity = 0.8;
                pressed = false;
                widget.fireEvent('stop');
            } else {
                this.style.opacity = 1;
                pressed = true;
                widget.fireEvent('start');
            };
        }, false);
    };
};
RunButton.prototype = new Widget();
    var SaveButton = function() {
    var pressed = false;
    widget = this;
    this.bind = function(){
        nodeItem = this.getDrawer().getNodeItem();
        var prevColor = nodeItem.style.backgroundColor;
        nodeItem.addEventListener('mouseover', function(){
            if (! pressed) {
                this.style.backgroundColor = '#FA7878';
            }
        }, false);
        nodeItem.addEventListener('mouseout', function(){
            if (! pressed) {
                this.style.backgroundColor = prevColor;
            }
        }, false);
        nodeItem.addEventListener('click', function(){
            this.style.opacity = 1;
            pressed = true;
            widget.fireEvent('save');
        }, false);
    };
};
SaveButton.prototype = new Widget();

    var ActionWindow = function(){};
    ActionWindow.prototype = new Widget();

    var NavigationWindow = function(){};
    NavigationWindow.prototype = new Widget();

    var HintWindow = function(){};
    HintWindow.prototype = new Widget();

    return {
        DIOptions: DIOptions,
        DependencyInjector: DependencyInjector,
        GuiDirector: GuiDirector,
        NavigationWindow: NavigationWindow,
        ActionWindow: ActionWindow,
        HintWindow: HintWindow,
        RunButton: RunButton,
        SaveButton: SaveButton,
        ProgressBar: ProgressBar,
        OutputBox: OutputBox,
        Graber: Graber,
        Grid: Grid,
        OutputDrawer: OutputDrawer,
        ProgressDrawer: ProgressDrawer,
        DrawerGrid: DrawerGrid,
        StdDrawer: StdDrawer,
        StdDOMOperator: StdDOMOperator,
        GrabApp: GrabApp
    };

}());

console.log('test');

var app = new GRABART.GrabApp();
var di = new GRABART.DependencyInjector(GRABART.DIOptions);

app.setGuiDirector(new GRABART.GuiDirector(app));

app.addProcess(di.get('Graber'));
app.addWidget(di.get('HintWindow').addWidget(di.get('SaveButton'))
                                  .addWidget(di.get('ProgressBar')));
app.addWidget(di.get('OutputBox'));
app.addWidget(di.get('NavigationWindow').addWidget(di.get('Grid')));
app.addWidget(di.get('ActionWindow').addWidget(di.get('RunButton')));

app.run();
