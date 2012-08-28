var DIOptions = {
    NavigationWindow: {
        name: 'navigation',
        Drawer: 'StdDrawer',
        title: 'Navigation',
        top: 130,
        height: 215,
        width: 300
    },
    ActionWindow: {
        name: 'action',
        Drawer: 'StdDrawer',
        width: 100,
        height: 100
    },
    HintWindow: {
        name: 'hint',
        Drawer: 'StdDrawer',
        left: 130,
        width: 190,
        height: 100
    },
    OutputBox: {
        name: 'output',
        Drawer: 'OutputDrawer',
        top: 20,
        left: 330,
        width: 400,
        height: 326
    },
    StdDrawer: {
        DomManipulator: 'StdDOMOperator'
    },
    DrawerGrid: {
        DomManipulator: 'StdDOMOperator'
    },
    ProgressDrawer: {
        DomManipulator: 'StdDOMOperator'
    },
    OutputDrawer: {
        DomManipulator: 'StdDOMOperator',
        visible: false
    },
    RunButton: {
        name: 'button',
        Drawer: 'StdDrawer',
        bgColor: '#F7F7F7',
        top: 25,
        left: 25,
        width: 90,
        height: 90,
        fontSize: 65,
        title: '&#x25B6;',
        cursor: 'pointer'
    },
    SaveButton: {
        name: 'save',
        Drawer: 'StdDrawer',
        bgColor: '#F7F7F7',
        left: 135,
        top: 25,
        width: 180,
        height: 35,
        fontSize: 25,
        cursor: 'pointer',
        title: 'save'
    },
    ProgressBar: {
        name: 'progress',
        Drawer: 'ProgressDrawer',
        top: 70,
        left: 135,
        width: 180,
        height: 45
    },
    Grid: {
        name: 'grid',
        Drawer: 'DrawerGrid',
        left: 25,
        top: 150,
        width: 298,
        height: 198,
        vblocks: 2,
        hblocks: 2
    },
    Graber: {
        name: 'graber'
    }
};