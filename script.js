const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');
const maestro = document.getElementById('maestro');

visa.addEventListener('click', function () {
    toggleSelection(visa);
});

mastercard.addEventListener('click', function () {
    toggleSelection(mastercard);
});

maestro.addEventListener('click', function () {
    toggleSelection(maestro);
});

function toggleSelection(card) {
    const selectedCard = document.querySelector('.selected');
    if (selectedCard) {
        selectedCard.classList.remove('selected');
    }
    card.classList.add('selected');
}