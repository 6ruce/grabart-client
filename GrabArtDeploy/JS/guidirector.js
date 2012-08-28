var GuiDirector = function(app){
        this.bind = function(){
            app.getWidget('grid').addListener('paint', this.rebuildScene, this);
            app.getWidget('grid').addListener('activated', function(cells){app.getWidget('progress').setProgress(cells.active/cells.total);});
            app.getWidget('button').addListener('start', app.getProcess('graber').run, app.getProcess('graber'));
            app.getWidget('button').addListener('stop', app.getProcess('graber').stop, app.getProcess('graber'));
            app.getWidget('save').addListener('save', this.publishData, this);
            app.getProcess('graber').addListener('grid', app.getWidget('grid').repaintGrid, app.getWidget('grid'));
            app.getProcess('graber').addListener('grab', app.getWidget('grid').activateCell, app.getWidget('grid'));

        };
        this.rebuildScene = function(){
            var nav      = app.getWidget('navigation'),
                grid     = app.getWidget('grid'),
                hint     = app.getWidget('hint'),
                save     = app.getWidget('save'),
                output   = app.getWidget('output'),
                progress = app.getWidget('progress');
            var dx       = nav.getWidth(),
                dy       = nav.getHeight();

            nav.setWidth(grid.getWidth() + 2);
            nav.setHeight(grid.getHeight() + 17);

            dx -= nav.getWidth();
            dy -= nav.getHeight();

            hint.setWidth(hint.getWidth() - dx);
            save.setWidth(save.getWidth() - dx);
            progress.setWidth(progress.getWidth() - dx);
            if (output && false) {//temporary
                output.setLeft(output.getLeft() - dx);
                output.setHeight(output.getHeight() - dy);
            }
            nav.refresh();
            hint.refresh();
        };
        this.publishData = function(){
            var data = app.getProcess('graber').getData(),
                output = app.getWidget('output'),
                i, j;

            output.addText('[' + data.length + ',' + data[0].length + ']');
            for (i in data){
                for (j in data[i]){
                    output.addText(data[i][j]);
                }
            }
        };
    };