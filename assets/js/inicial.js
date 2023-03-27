// Seleciona o botão "Fazer uma aposta" na seção principal
const mainButton = document.querySelector('main button');

// Adiciona um evento de clique no botão
mainButton.addEventListener('click', function() {
  // Abre uma nova janela com a página de apostas
  window.open('https://www.site-de-apostas.com/apostas', '_blank');
});

// Seleciona todos os botões "Fazer uma aposta" nas seções de eventos
const eventButtons = document.querySelectorAll('section ul li button');

// Adiciona um evento de clique em cada botão de evento
eventButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Exibe uma mensagem informando que a aposta foi realizada com sucesso
    alert('Sua aposta foi realizada com sucesso!');
  });
});