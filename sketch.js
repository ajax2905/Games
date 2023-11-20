//Sketch
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraMeteoro();
  movimentaMeteoro();
  movimentaAtor();
  voltaPosicaoInicialDoMeteoro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
