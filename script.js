function ditribuicaoDeCartas() {
  let cartas = prompt("Com quantas cartas você quer jogar?");
  while(cartas % 2 != 0 || cartas > 14 || cartas < 4 ){
    cartas = prompt("Com quantas cartas você quer jogar?")
  }
}
ditribuicaoDeCartas();
