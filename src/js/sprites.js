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

/** Criando app, Pixi Application (800, 800), com mais configurações.
 *  O atributo antialias, suaviza as bordas de fontes e primitivos gráficos.
 *  O atributo transparent, torna transparente o plano de fundo da tela (caso seja true).
 *  Ao definir o atributo resolution, torna mais fácil trabalhar com exibições de resoluções variadas e densidades de pixels.
 *  Ao definir o atributo forceCanvas para true, força o PIXI a renderizar utilizando a API do Canvas Drawing sobre WebGL
 *  O atributo backgroundColor, é utilizado para definir a cor de fundo (se não transparente). 
 */
let app = new PIXI.Application({
    antialias: true, // padrão: false
    transparent: false, // padrão: false
    resolution: 1, // padrão: 1
    forceCanvas: true, // padrão: false
    backgroundColor: 0x99b7e8, // padrão: 0x000000 (preto)
});

// Centraliza app no meio do navegador.
app = centralizarStage(app);

/**O palco (stage) é um objeto do Pixi Container. 
 * Você pode pensar em um recipiente como uma espécie de caixa vazia que irá agrupar e armazenar o que você colocar dentro dela. 
 * O objeto de estágio é o contêiner raiz de todas as coisas visíveis em sua cena. 
 * Tudo o que você colocar dentro do palco será renderizado na tela. 
 * Neste momento o palco está vazio, mas logo vamos começar a colocar as coisas dentro dele. 
 * Você pode ler mais sobre os objetos Container em http://pixijs.download/release/docs/PIXI.Container.html.
 * 
 * (Importante: como o estágio é um Pixi Container, ele tem as mesmas propriedades e métodos de qualquer outro objeto Container. 
 * Mas, embora o palco tenha propriedades de largura e altura, eles não se referem ao tamanho da janela de renderização.) 
 * e as propriedades de altura apenas informam a área ocupada pelas coisas que você coloca dentro dela - mais sobre isso adiante!)
 * 
 * Então, o que você coloca no palco? Objetos especiais de imagem chamados sprites. 
 * Sprites são basicamente apenas imagens que você pode controlar com código. 
 * Você pode controlar sua posição, tamanho e uma série de outras propriedades que são úteis para criar gráficos interativos e animados. 
 * 
 * Aprender a fazer e controlar sprites é realmente a coisa mais importante sobre aprender a usar o Pixi. 
 * Se você sabe como fazer sprites e adicioná-los ao palco, você está apenas a um pequeno passo de começar a fazer jogos.
 * 
 * Pixi tem uma classe Sprite que é uma maneira versátil de criar sprites de jogos. 
 * Existem três maneiras principais de criá-las:
 *  -> De um único arquivo de imagem.
 *  -> De uma sub-imagem em um tileset. Um tileset é uma imagem única e grande que inclui todas as imagens que você precisa no seu jogo.
 *  -> A partir de um atlas de textura (Um arquivo JSON que define o tamanho e a posição de uma imagem em um conjunto de tiles.)
 */
console.log(app.stage);

/**Como o Pixi renderiza a imagem na GPU com WebGL, a imagem precisa estar em um formato que a GPU possa processar. 
 * Uma imagem pronta para WebGL é chamada de textura. 
 * Antes que você possa fazer um sprite exibir uma imagem, você precisa converter um arquivo de imagem comum em uma textura WebGL. 
 * Para manter tudo funcionando de maneira rápida e eficiente, o Pixi usa um cache de textura para armazenar e fazer referência a todas as 
 * texturas que seus sprites precisarem. 
 * 
 * Os nomes das texturas são sequências que correspondem aos locais dos arquivos das imagens às quais eles se referem. 
 * Isso significa que se você tem uma textura que foi carregada de "img/cat.png", você pode encontrá-la no cache de texturas da seguinte forma:
 */
// PIXI.utils.TextureCache["img/cat.png"];

/**As texturas são armazenadas em um formato compatível com WebGL, que é eficiente para o renderizador da Pixi trabalhar. 
 * Você pode usar a classe Sprite da Pixi para fazer uma nova imagem usando a textura. 
 * 
 * Mas como você carrega o arquivo de imagem e o converte em uma textura? Use o objeto loader embutido do Pixi.
 * 
 * O poderoso objeto loader da Pixi é tudo o que você precisa para carregar qualquer tipo de imagem. 
 * Veja como usá-lo para carregar uma imagem e chamar uma função chamada configuração quando a imagem terminar de carregar:
 */
PIXI.loader
  .add("img/cat.png")
  .load(configuracao);

/** Função de configuração de imagens (sprites). */
function configuracao() {
    /**A equipe de desenvolvimento da Pixi recomenda que, se você usar o carregador, crie o sprite fazendo referência à textura no objeto de recursos 
     * do carregador, desta forma: */
    let gatoSprite = new PIXI.Sprite(
        PIXI.loader.resources["img/cat.png"].texture // criando um sprite (gato) a partir da imagem carregada.
    );

    /**Depois de carregar uma imagem e usá-la para criar um sprite, você precisa adicionar o sprite ao palco do Pixi 
     * com o método stage.addChild, assim: */
    app.stage.addChild(gatoSprite); // adicionando gato (sprite), no palco.
    // Importante: você não poderá ver nenhum de seus sprites, a menos que você os adicione ao palco!
}

// Adicionando as telas dos apps (que o Pixi criou), no documento HTML
document.getElementById('app').appendChild(app.view); // adicionando app2