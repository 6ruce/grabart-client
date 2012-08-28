var DrawerGrid = function() {
    var domManipulator,
        cellMap = [],
        width = 100,
        height = 100,
        left = 20,
        top = 20,
        hblocks = 1,
        vblocks = 1,
        separator = 1,
        cellWidth,
        cellHeight;

    var clear = function(){
        var i,j;
        for (i = 0; i < cellMap.length; i++) {
            for (j = 0; j < cellMap[i].length; j++) {
                domManipulator.delete(cellMap[i][j]);
            }
        }
        cellMap = [];
    };
    this.refresh = function(){};
    this.redraw = function(){
        clear();
        this.draw();
    };
    this.draw = function(){
        var voffset = 0,
            hoffset = 0,
            i, j;

        cellWidth = Math.round((width - (hblocks - 1) * separator) / hblocks),
        cellHeight = Math.round((height - (vblocks - 1) * separator) / vblocks);

        for (i = 0; i < vblocks; i++) {
            hoffset = 0;
            cellMap[i] = [];
            for (j = 0; j < hblocks; j++) {
                var cell = domManipulator.createElement('div');
                cell.style.position = 'fixed';
                cell.style.backgroundColor = 'red';
                cell.style.zIndex = 2012;
                cell.style.top = top + voffset + 'px';
                cell.style.left = left + hoffset + 'px';
                cell.style.width = cellWidth + 'px';
                cell.style.height = cellHeight + 'px';
                cellMap[i][j] = cell;
                domManipulator.show(cell);
                hoffset += cellWidth + separator;
            }
            voffset += cellHeight + separator;
        }
        this.setWidth(cellWidth * hblocks + (hblocks - 1) * separator);
        this.setHeight(cellHeight * vblocks + (vblocks - 1) * separator);
    };

    this.activateCell = function(x, y){
        if (Utils.isset(cellMap[x]) && Utils.isset(cellMap[x][y])) {
            cellMap[x][y].style.backgroundColor = 'yellow';
        } else {
            throw 'Can`t find cell with coords {x:' + x + ', y:' + y + '}';
        }
    };
    this.restruct = function(){
        var i,j
            hoffset = 0;
        for (i in cellMap){
            for (j in cellMap[i]){
                cellMap[i][j].style.top += cellHeight + separator;
            }
        }
        cellMap[-1] = [];
        for (i = 0; i < hblocks; i++){
            var cell = domManipulator.createElement('div');
            cell.style.position = 'fixed';
            cell.style.backgroundColor = 'red';
            cell.style.zIndex = 2012;
            cell.style.top = top + 'px';
            cell.style.left = left + hoffset + 'px';
            cell.style.width = cellWidth + 'px';
            cell.style.height = cellHeight + 'px';
            cellMap[-1][i] = cell;
            domManipulator.show(cell);
            hoffset += cellWidth + separator;
        }
        height += cellHeight + separator;
    };

    this.setDomManipulator = function(man){ domManipulator = man; };
    this.setHblocks  = function(hb){ hblocks = hb;};
    this.setVblocks  = function(vb){ vblocks = vb;};
    this.setWidth    = function(wd){ width = wd; };
    this.setHeight   = function(hd){ height = hd; };
    this.setTop      = function(tp){ top = tp; };
    this.setLeft     = function(lt){ left = lt; };

    this.getWidth    = function(){ return width; };
    this.getHeight   = function(){ return height; };
    this.getVblocks  = function(){ return vblocks; };
    this.getHblocks  = function(){ return hblocks; };
};