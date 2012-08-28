var Process = function(){
    var name = '';

    this.setName = function(nm){ name = nm; };
    this.getName = function(){ return name; };
};
Process.prototype = new IListen();