/**PIXI.Application descobre se é necessário usar a API de desenho do Canvas ou WebGL para renderizar gráficos, 
 * dependendo de qual está disponível no navegador da web que você está usando. 
 * Seu argumento é um único objeto chamado objeto de opções. 
 * Você pode definir muito mais propriedades opcionais dentro deste objeto de opções.
 * Mais informações em http://pixijs.download/release/docs/PIXI.Application.html.
 */
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

// Centraliza app no meio do navegador.
app = centralizarStage(app);

// Adicionando as telas dos apps (que o Pixi criou), no documento HTML
document.getElementById('app').appendChild(app.view); // adicionando app2