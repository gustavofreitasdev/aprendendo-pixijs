/* Comentários traduzido de (https://github.com/kittykatattack/learningPixi#introduction) - Pixi Sprites. */

/** Função responsável por centralizar um app (Pixi Application).
 *  Encontrada em http://www.html5gamedevs.com/topic/18406-how-to-center-stage-on-browser/ (nattstyles).
*/
function centralizarStage(app) {
    app.view.style.position = 'absolute';
    app.view.style.left = '50%'; 
    app.view.style.top = '50%';
    app.view.style.transform = 'translate3d( -50%, -50%, 0 )';
    return app;
}

let Application = PIXI.Application,
    Sprite = PIXI.Sprite,
    loader = PIXI.loader,
    resources = PIXI.loader.resources;

/** Criando app, Pixi Application (256px, 256px) */
let app = new Application({
    width: 256, // padrão: 800px
    height: 256, // padrão: 800px
    antialias: true, // padrão: false
    resolution: 1, // padrão: 1
    forceCanvas: true, // padrão: false
});

// Centraliza app no meio do navegador.
app = centralizarStage(app);

document.getElementById('app').appendChild(app.view); // adicionando app

/** Carregando imagens */
loader
  .add("imagemGato", "img/cat.png")
  .on("progress", manipuladorDeProgresso) // mapeando monitoramento de progresso para função manipuladorDeProgresso.
  .load(configuracao);

/** Função de configuração de imagens (sprites). */
function configuracao() {
    console.log("Configurando...");

    let gato = new Sprite(
        resources.imagemGato.texture // criando um sprite (gato) a partir da imagem carregada, utilizando o nome exclusivo.
    );

    // Centralizando sprite gato no stage (palco).
    gato.x = 96;
    gato.y = 96;
    
    // Mudando tamanho do sprite gato.
    gato.width = 80;
    gato.height = 96;

    // Mudando escala do sprite gato.
    gato.scale.x = 0.5;
    gato.scale.y = 0.5;

    // Mudando ponto de ancoragem do sprite gato, para o centro.
    gato.anchor.x = 0.5;
    gato.anchor.y = 0.5;
    // ou..
    // gato.pivot.set(32, 32) // supondo que o sprite tenha 64x64 pixels.
    // Rotacionando sprite gato.
    gato.rotation = 0.5;

    // Importante: você não poderá ver nenhum de seus sprites, a menos que você os adicione ao palco!
    app.stage.addChild(gato); // adicionando gato (sprite) no palco.
}
/** Função responsável por monitorar evento de progresso especial.
 *  
 *  Você também pode descobrir exatamente qual arquivo foi carregado e qual porcentagem dos arquivos gerais estão carregados no momento. 
 *  Você pode fazer isso adicionando parâmetros carregador (primeiro parâmetro) e recurso (segundo parâmetro)
 */
function manipuladorDeProgresso(carregador, recurso){
    console.log(`carregando: ${recurso.url}`);
    console.log(`progresso: ${carregador.progress}%`);
}