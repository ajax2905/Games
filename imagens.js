//imagens.js

// imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemMeteoro;
let imagemMeteoro2;
let imagemMeteoro3;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("Imagem/estrada.jpeg");
  imagemDoAtor = loadImage("Imagem/nave.png");
  imagemMeteoro = loadImage("Imagem/meteoro.png");
  imagemMeteoro2 = loadImage("Imagem/meteoro2.png");
  imagemMeteoro3 = loadImage("Imagem/meteoro3.png");  
  imagemMeteoros = [imagemMeteoro, imagemMeteoro2, imagemMeteoro3]
 
  somDaTrilha = loadSound("Sons/trilha.mp3");
  somDaColisao = loadSound("Sons/colisao.mp3");
  somDoPonto = loadSound("Sons/pontos.mp3");
}