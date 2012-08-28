var GRABART = (function() {
    String.prototype.ucfirst = function(){
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    ('[di.options]')
         
    ('[drawer.std]')
    ('[drawer.grid]')
    ('[drawer.progress]')
    ('[drawer.output]')

    ('[dom]')
    ('[listen]')
    ('[widget]')
    ('[process]')
    ('[graber]')
    ('[progress]')
    ('[outputbox]')
    ('[grid]')
    ('[utils]')
    ('[application]')
    ('[guidirector]')
    ('[di]')

    ('[button.run]')
    ('[button.save]')

    var ActionWindow = function(){};
    ActionWindow.prototype = new Widget();

    var NavigationWindow = function(){};
    NavigationWindow.prototype = new Widget();

    var HintWindow = function(){};
    HintWindow.prototype = new Widget();

    return {
        DIOptions: DIOptions,
        DependencyInjector: DependencyInjector,
        GuiDirector: GuiDirector,
        NavigationWindow: NavigationWindow,
        ActionWindow: ActionWindow,
        HintWindow: HintWindow,
        RunButton: RunButton,
        SaveButton: SaveButton,
        ProgressBar: ProgressBar,
        OutputBox: OutputBox,
        Graber: Graber,
        Grid: Grid,
        OutputDrawer: OutputDrawer,
        ProgressDrawer: ProgressDrawer,
        DrawerGrid: DrawerGrid,
        StdDrawer: StdDrawer,
        StdDOMOperator: StdDOMOperator,
        GrabApp: GrabApp
    };

}());
