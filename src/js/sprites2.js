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

/**Você pode economizar um pouco de digitação e tornar seu código mais legível, criando aliases de formato curto para os objetos e métodos Pixi 
 * que você usa com frequência. Por exemplo, prefixing PIXI para todos os objetos da Pixi começando a te atrapalhar? 
 * Se você acha que sim, crie um alias mais curto que aponte para ele.
 * 
 * Além de permitir que você escreva um código um pouco mais sucinto, o uso de aliases tem um benefício extra: ajuda a proteger você da API de alteração 
 * frequente do Pixi. Se a API do Pixi mudar em versões futuras - o que acontecerá! - você só precisa atualizar esses aliases para os objetos 
 * e métodos Pixi em um só lugar, no início do programa, em vez de cada instância em que eles são usados ​​em todo o código. 
 * Então, quando a equipe de desenvolvimento da Pixi decidir que quer reorganizar um pouco os móveis, você estará um passo à frente deles!
 * 
 * Abaixo utilizaremos alias, para Application, Sprite, loader e resources.
 */

let Application = PIXI.Application,
    Sprite = PIXI.Sprite,
    loader = PIXI.loader,
    resources = PIXI.loader.resources;

/** Criando app, Pixi Application (800, 800), com mais configurações. */
let app = new Application({
    antialias: true, // padrão: false
    resolution: 1, // padrão: 1
    forceCanvas: true, // padrão: false
});

// Centraliza app no meio do navegador.
app = centralizarStage(app);

document.getElementById('app').appendChild(app.view); // adicionando app

/**É possível atribuir um nome exclusivo a cada recurso que você deseja carregar. 
 * Apenas forneça o nome (uma string) como o primeiro argumento no método add.
 * 
 * O carregador do Pixi tem um evento de progresso especial que irá chamar uma função personalizável 
 * que será executada toda vez que um arquivo for carregado. 
 * Eventos de progresso são chamados pelo método loader, assim:
 */
loader
  .add("imagemGato", "img/cat.png")
  .on("progress", manipuladorDeProgresso) // mapeando monitoramento de progresso para função manipuladorDeProgresso.
  .load(configuracao);

/** Função de configuração de imagens (sprites). */
function configuracao() {
    console.log("Configurando...");

    let gatoSprite = new Sprite(
        resources.imagemGato.texture // criando um sprite (gato) a partir da imagem carregada, utilizando o nome exclusivo.
    );

    // Importante: você não poderá ver nenhum de seus sprites, a menos que você os adicione ao palco!
    app.stage.addChild(gatoSprite); // adicionando gato (sprite) no palco.
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