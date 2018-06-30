let tipo = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
    tipo = "canvas";
}

PIXI.utils.sayHello(tipo);