// Criando Pixi Application (256x256)
let app = new PIXI.Application({ width: 256, height: 256 });

// Adicionando a tela do app (que o Pixi criou), no documento HTML
document.body.appendChild(app.view);