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
    this.setLeft     = function (lt) { left = lt; };
    this.setVisible  = function (vs) { visible = vs; };

    this.getWidth    = function(){ return width;};
    this.getHeight   = function(){ return height;};
    this.getTop      = function(){ return top;};
    this.getLeft     = function(){ return left;};
};