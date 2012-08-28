var OutputBox = function(){
    this.addText = function(text){
        this.getDrawer().addText(text);
    };
};
OutputBox.prototype = new Widget();