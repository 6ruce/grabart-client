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