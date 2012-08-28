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