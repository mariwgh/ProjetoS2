const div = document.getElementById('inicial');

let startX = 0; // Ponto inicial do toque

let texts = ['Eu', 'te', 'amo']; 

let currentIndex = 0;

div.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX; // Registra o ponto inicial do toque
});

div.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX; // Registra o ponto final do toque
  const deltaX = endX - startX; // Calcula a diferença do movimento

  // Deslizou para a direita
  if (deltaX > 50) {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length; // Vai para o texto anterior
  } 
  // Deslizou para a esquerda
  else if (deltaX < -50) {
    currentIndex = (currentIndex + 1) % texts.length; // Vai para o próximo texto
  }

  div.textContent = texts[currentIndex]; // Atualiza o texto da div
});
