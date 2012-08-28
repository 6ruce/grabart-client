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