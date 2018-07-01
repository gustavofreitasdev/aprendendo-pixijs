/**PIXI.Application descobre se é necessário usar a API de desenho do Canvas ou WebGL para renderizar gráficos, 
 * dependendo de qual está disponível no navegador da web que você está usando. 
 * Seu argumento é um único objeto chamado objeto de opções. 
 * Você pode definir muito mais propriedades opcionais dentro deste objeto de opções.
 * Mais informações em http://pixijs.download/release/docs/PIXI.Application.html.
 */
// Criando app1, Pixi Application (256x256).
let app1 = new PIXI.Application({ width: 256, height: 256 });
/** Criando app2, Pixi Application (512, 512), com mais configurações.
 *  O atributo antialias, suaviza as bordas de fontes e primitivos gráficos.
 *  O atributo transparent, torna transparente o plano de fundo da tela (caso seja true).
 *  Ao definir o atributo resolution, torna mais fácil trabalhar com exibições de resoluções variadas e densidades de pixels.
 *  Ao definir o atributo forceCanvas para true, força o PIXI a renderizar utilizando a API do Canvas Drawing sobre WebGL
 *  O atributo backgroundColor, é utilizado para definir a cor de fundo (se não transparente). 
 */
let app2 = new PIXI.Application({
    width: 512, // padrão: 800px
    height: 512, // padrão: 800px
    antialias: true, // padrão: false
    transparent: false, // padrão: false
    resolution: 1, // padrão: 1
    forceCanvas: true, // padrão: false
    backgroundColor: 0x99b7e8, // padrão: 0x000000 (preto)
});

// Adicionando as telas dos apps (que o Pixi criou), no documento HTML
document.getElementById('app1').appendChild(app1.view); // adicionando app1
document.getElementById('app2').appendChild(app2.view); // adicionando app2