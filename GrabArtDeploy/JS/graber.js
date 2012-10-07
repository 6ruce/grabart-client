var Graber = function() {
    var parts = [],
        imgLayer,
        grabProcId,
        process = this;

    var getTileLayer = function () {
        var tileLayers = document.querySelectorAll('.m2-tileLayer');
        var zoomLayer = tileLayers[tileLayers.length - 1];
        return {hblocks: parseInt(parseInt(zoomLayer.style.width) / 512) + 1 ,
                vblocks: parseInt(parseInt(zoomLayer.style.height) / 512) + 1,
                imageLayer: zoomLayer};
    };
    this.run = function () {
        var tileLayer = getTileLayer();
        imgLayer = tileLayer.imageLayer;
        this.fireEvent('grid', tileLayer);

        grabProcId = setInterval(this.grab, 200);
    };
    this.stop = function () {
        clearInterval(grabProcId);
    };
    this.grab = function () {
        var x,y,i,
            visibleParts = imgLayer.querySelectorAll('img');

        for (i = 0; i < visibleParts.length; i++) {
            y = Math.round(parseInt(visibleParts[i].style.left) / 512);
            x = Math.round((parseInt(visibleParts[i].style.top)) / 512);
            if (Utils.isset(parts[x])) {
                if ( ! Utils.isset(parts[x][y])) {
                    if (visibleParts[i].src) {
                        parts[x][y] = visibleParts[i].src;
                        process.fireEvent('grab', {x: x, y: y});
                    }
                }
            } else {
                if (visibleParts[i].src) {
                    parts[x] = [];
                    parts[x][y] = visibleParts[i].src;
                    process.fireEvent('grab', {x: x, y: y});
                }
            }
        }
    };
    this.getData = function () {
        return parts;
    };
};
Graber.prototype = new Process();