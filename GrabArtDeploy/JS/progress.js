var ProgressBar = function(){
    this.setProgress = function(percents){
        this.getDrawer().setProgress(percents);
        this.getDrawer().refresh();
    };
};
ProgressBar.prototype = new Widget();