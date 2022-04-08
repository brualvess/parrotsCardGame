function distribuicaoDeCartas() {
  let cartas = prompt("Com quantas cartas você quer jogar?");
  while (cartas % 2 != 0 || cartas > 14 || cartas < 4) {
    cartas = prompt("Com quantas cartas você quer jogar?");
  }
  distribuirCartas(cartas);
}

function selecionaCartas(cartas, numeroDeCartas) {
  const selecionadas = [];
  const unicas = numeroDeCartas / 2;
  const comparar = comparador();
  for (let indice = 0; indice < unicas; indice++) {
    selecionadas.push(cartas[indice]);
    selecionadas.push(cartas[indice]);
  }
  return selecionadas.sort(comparador);
}

function distribuirCartas(numeroDeCartas) {
  const cartas = [
    "explodyparrot",
    "bobrossparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot",
  ];
  let selecionadas = selecionaCartas(cartas, numeroDeCartas)
  const conteudo = document.querySelector(".conteudoLayout");
  for (let indice = 0; indice < selecionadas.length; indice++) {
    conteudo.innerHTML += `
    <div class="cartasLayout" onclick="virarCarta(this)">
    <div class="cartas">
      <img class="gif" src="imagens/${selecionadas[indice]}.gif" alt="" />
      <img class="papagaio"  src="imagens/front.png" alt="" />
    </div>
  </div>
    `;
  }
}
function comparador() {
  return Math.random() - 0.5;
}

function virarCarta(elemento){
  elemento.classList.add("cliquei")
  
}
