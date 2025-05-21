// USA-SE CONST QUANDO O VALOR DE UMA VARIÁVEL NÃO VAI MUDAR
// USA-SE LT QUANDO O VALOR DE UMA VARIÁVEL VAI MUDAR

const prevButton = document.getElementById("prev"); //SELECIONEI OS BOTÕES
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item"); //SELECIONEI TODOS OS ITEMS QUE TEM A ! CLASS ITEM !
const dots = document.querySelectorAll(".dot"); //SELECIONEI TODOS OS ELEMENTOS DESTA CLASS
const numberIndicator = document.querySelector(".numbers"); //SELECIONEI O NÚMERO 01
const list = document.querySelector(".list"); //SELECIONEI TODA A LISTA

let active = 0;
const total = items.length; //LENGTH ELE ME DIZ QTOS ÍTENS FORAM ENCONTRADOS NO HTML
let timer;

function update(destino) {
  //SELECIONA O ITEM QUE TEM A CLASS ITEM ACTIVE, PEGA ESSA CLASS E REMOVE O ACTIVE
  document.querySelector(".item.active").classList.remove("active");

  //SELECIONA O ITEM QUE TEM A CLASS DOT ACTIVE, PEGA ESSA CLASS E REMOVE O ACTIVE
  document.querySelector(".dot.active").classList.remove("active");

  if (destino > 0) {
    active = active + 1;

    if (active === total) {
      active = 0;
    }
  } else if (destino < 0) {
    active = active - 1;

    if (active < 0) {
      active = total - 1;
    }
  }

  items[active].classList.add("active");
  dots[active].classList.add("active");

  numberIndicator.textContent = String(active + 1).padStart(2,"0")
}

clearInterval(timer)
    timer = setInterval(() => {
       update(1)
    },5000);

prevButton.addEventListener("click", function () {
  update(-1);
});

nextButton.addEventListener("click", function () {
  update(1);
});
