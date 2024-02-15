const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');
const maestro = document.getElementById('maestro');

// Adicionar evento de clique aos cartões
visa.addEventListener('click', function () {
    toggleSelection(visa);
});

mastercard.addEventListener('click', function () {
    toggleSelection(mastercard);
});

maestro.addEventListener('click', function () {
    toggleSelection(maestro);
});

// Função para alternar a seleção do cartão
function toggleSelection(card) {
    // Remover a classe de seleção dos cartões
    const selectedCard = document.querySelector('.selected');
    if (selectedCard) {
        selectedCard.classList.remove('selected');
    }
    // Adicionar a classe de seleção ao cartão clicado
    card.classList.add('selected');
}