function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quem ganhou o titulo mundial em 2012");

    
    if (respostaTime.toLowerCase() === "Corinthians") {
      alert("Isso mesmo! O corinthians ganhou o titulo  mundial em 2012!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Ops ainda não é bem é isso.");

    }
  }
}

verificarTime();