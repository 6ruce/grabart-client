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