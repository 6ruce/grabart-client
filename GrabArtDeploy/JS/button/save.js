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