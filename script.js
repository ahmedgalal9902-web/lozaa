const giftButton = document.getElementById('giftButton');
const gift = document.getElementById('gift');
const buttonText = document.getElementById('buttonText');

giftButton.addEventListener('click', () => {
  const isOpen = giftButton.getAttribute('aria-expanded') === 'true';
  giftButton.setAttribute('aria-expanded', String(!isOpen));
  gift.hidden = isOpen;
  buttonText.textContent = isOpen ? 'افتحي هديتك يا نورا' : 'أغلقي الهدية';
});
