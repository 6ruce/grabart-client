// ==UserScript==
// @name       GrabArt
// @namespace  http://use.i.E.your.homepage/
// @version    0.8
// @description  grab separated into pieces `googleart` pictures
// @match      http://www.googleartproject.com/collection*
// @copyright  2012+, bruce
// @require http://grabart.my/
// ==/UserScript==

('[module]')

var app = new GRABART.GrabApp();
var di = new GRABART.DependencyInjector(GRABART.DIOptions);

app.setGuiDirector(new GRABART.GuiDirector(app));

app.addProcess(di.get('Graber'));
app.addWidget(di.get('HintWindow').addWidget(di.get('SaveButton'))
                                  .addWidget(di.get('ProgressBar')));
app.addWidget(di.get('OutputBox'));
app.addWidget(di.get('NavigationWindow').addWidget(di.get('Grid')));
app.addWidget(di.get('ActionWindow').addWidget(di.get('RunButton')));

app.run();