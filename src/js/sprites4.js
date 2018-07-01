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
    Rectangle = PIXI.Rectangle,
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

/** Agora você sabe como criar um sprite a partir de um único arquivo de imagem. 
 * Mas, como designer de jogos, você geralmente estará fazendo seus sprites usando tilesets (também conhecidos como spritesheets). 
 * O Pixi tem algumas maneiras internas convenientes para ajudá-lo a fazer isso.
 * Um tileset é um arquivo de imagem único que contém sub-imagens. 
 * As sub-imagens representam todos os gráficos que você deseja usar no seu jogo. 
 * Aqui está um exemplo de uma imagem de tileset que contém personagens do jogo e objetos do jogo como sub-imagens. */
loader
  .add("tileset", "img/tileset.png")
  .on("progress", manipuladorDeProgresso) // mapeando monitoramento de progresso para função manipuladorDeProgresso.
  .load(configuracao);

/** Função de configuração de imagens (sprites). */
function configuracao() {
    console.log("Configurando...");

    let textura = resources.tileset.texture; // capturando textura, que está em arquivo de image única.
    /** Cria um objeto retângulo que define a posição e tamanho da sub-imagem que você deseja extrair da textura
    * (`Rectangle` é um alias para o` PIXI.Rectangle`).
    */ 
    let retangulo = new Rectangle(192, 128, 64, 64);

    textura.frame = retangulo; // diz à textura para usar aquela seção retangular.
    let foguete = new Sprite(textura); // cria o sprite foguete da textura.

    // Movendo o sprite foguete no stage (palco).
    foguete.x = 32;
    foguete.y = 32;


    // Mudando escala do sprite foguete.
    foguete.scale.x = 0.5;
    foguete.scale.y = 0.5;
    

    // Importante: você não poderá ver nenhum de seus sprites, a menos que você os adicione ao palco!
    app.stage.addChild(foguete); // adicionando foguete (sprite) no palco.
}
/** Função responsável por monitorar evento de progresso especial. */
function manipuladorDeProgresso(carregador, recurso){
    console.log(`carregando: ${recurso.url}`);
    console.log(`progresso: ${carregador.progress}%`);
}