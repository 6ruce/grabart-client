var StdDOMOperator = function() {
    this.createElement = function(elem) {
        return document.createElement(elem);
    };
    this.show = function(elem) {
        document.body.insertBefore(elem, document.getElementById('page-wrapper'));
        elem.style.display = '';
    };
    this.hide = function(elem) {
        elem.style.display = 'none';
    };
    this.delete = function(elem) {
        elem.parentNode.removeChild(elem);
    };
};

