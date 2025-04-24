let contrasteAtivo = false;
let fonteAtual = 16;

function toggleContraste() {
  contrasteAtivo = !contrasteAtivo;
  document.body.classList.toggle("contraste", contrasteAtivo);
}

function aumentarFonte() {
  fonteAtual += 2;
  document.body.style.fontSize = fonteAtual + "px";
}

function diminuirFonte() {
  if (fonteAtual > 12) {
    fonteAtual -= 2;
    document.body.style.fontSize = fonteAtual + "px";
  }
}

function lerTexto() {
  const texto = document.getElementById("conteudo").textContent;
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  window.speechSynthesis.speak(fala);
}