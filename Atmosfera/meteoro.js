//meteoro.js

//meteoro

let xMeteoros = [600, 600, 600];
let yMeteoros = [40, 96, 150];
let velocidadeMeteoros = [10, 9.5, 9];
let comprimentoMeteoro = 50;
let alturaMeteoro = 40;

function mostraMeteoro(){
  for (let i = 0; i < imagemMeteoros.length; i++){
    image(imagemMeteoros[i], xMeteoros[i], yMeteoros[i], comprimentoMeteoro, alturaMeteoro);
  }
}

function movimentaMeteoro(){
  for (let i = 0; i < imagemMeteoros.length; i++){
    xMeteoros[i] -= velocidadeMeteoros[i];
  }
}

function voltaPosicaoInicialDoMeteoro(){
  for (let i = 0; i < imagemMeteoros.length; i++){
    if (passouTodaATela(xMeteoros[i])){
      xMeteoros[i] = 600;
    }
  }
}

function passouTodaATela(xMeteoro){
  return xMeteoro < - 50;
}