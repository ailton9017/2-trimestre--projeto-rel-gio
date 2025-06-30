const botoes = document.querySelectorAll(".botoes");
const textos = document.querySelectorAll(".abas-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo01 = new Date ("2025-07-09");
const tempoAtual = new Date ();
console.log(botoes)

for(let i=0; i< botoes.length; i++){
    botoes[i].onclick = function(){
        
        for (let j=0; j<botoes.length; j++){
            botoes[j].remove.add("ativo");
            textos[j].remove.add("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

function calculadoraTempo{
      let tempoAtual = new Date();
      let tempoFinal = tempoObjetivo01-tempoAtual;
      let segundos = Math.floor (tempoFinal)1000x
}
contadores[0]. textContent = "Contagem Regressiva"
contadores[0]. textContent = calculadoraTempo (tempoObjetivo01)