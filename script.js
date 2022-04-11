let quantidadeDeClick = 0;

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
  let selecionadas = selecionaCartas(cartas, numeroDeCartas);
  const conteudo = document.querySelector(".conteudoLayout");
  for (let indice = 0; indice < selecionadas.length; indice++) {
    conteudo.innerHTML += `
    <div class="cartasLayout" onclick="virarCarta(this)">
    <div class="cartas">
      <img class="gif ${selecionadas[indice]}" src="imagens/${selecionadas[indice]}.gif" alt="" />
      <img class="papagaio"  src="imagens/front.png" alt="" />
    </div>
  </div>
    `;
  }
}
function comparador() {
  return Math.random() - 0.5;
}

function virarCarta(elemento) {
  elemento.classList.add("cliquei");
  quantidadeDeClick += 1;
  virandoCartas();
  let acertou = document.querySelectorAll(".acertou");
  let todasCartas = document.querySelectorAll(".cartasLayout");
  if (todasCartas.length == acertou.length) {
    let fraseFinal = `Você ganhou em ${quantidadeDeClick} jogadas!`;
    alert(fraseFinal);
  }
}

function virandoCartas() {
  const clicados = document.querySelectorAll(".cliquei");
  if (clicados.length == 2) {
    console.log("hiii");
    let carta1 = clicados[0].querySelector(".gif").classList[1];
    let carta2 = clicados[1].querySelector(".gif").classList[1];
    console.log(carta1, carta2);
    if (carta1 == carta2) {
      clicados[0].classList.add("acertou");
      clicados[1].classList.add("acertou");
      clicados[0].classList.remove("cliquei");
      clicados[1].classList.remove("cliquei");
    } else {
      console.log("hello");
      setTimeout(desvirarCartas, 1000, clicados);
    }
  }
}

function desvirarCartas(clicados) {
  clicados[0].classList.remove("cliquei");
  clicados[1].classList.remove("cliquei");
}
