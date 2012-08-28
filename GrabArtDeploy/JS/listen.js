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