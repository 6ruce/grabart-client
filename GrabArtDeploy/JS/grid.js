var Grid = function(){
    var totalCells = 0,
        activeCells = 0;
    this.setVblocks = function(vb){
        this.getDrawer().setVblocks(vb);
        totalCells = vb * this.getDrawer().getHblocks();

    };
    this.setHblocks = function(hb){
        this.getDrawer().setHblocks(hb);
        totalCells = hb * this.getDrawer().getVblocks();

    };
    this.repaintGrid = function(blocks){
        this.setVblocks(blocks.vblocks);
        this.setHblocks(blocks.hblocks);
        this.redraw();

    };
    this.activateCell = function(coords){
        try {
            this.getDrawer().activateCell(coords.x, coords.y);
            activeCells++;
            this.fireEvent('activated', {total: totalCells, active: activeCells});
        } catch (e) {
            console.log(e);
            this.getDrawer().restruct();
            this.fireEvent('paint');
        }
    };
};
Grid.prototype = new Widget();