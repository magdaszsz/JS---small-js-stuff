const cards = document.querySelectorAll('.card');
let cardShown = false;
let firstCard, secondCard, letShow;


cards.forEach(card => {
  card.addEventListener('click', showCard)
})

function showCard() {
 if(letShow) return;
this.children[0].classList.toggle('active');

if(!cardShown) {
  cardShown = true;
  firstCard = this;
  return;
}

cardShown = false;
secondCard = this;

function checkSimilarity() {
  if(firstCard.dataset.attr === secondCard.dataset.attr) {
    firstCard.removeEventListener('click', showCard)
    secondCard.removeEventListener('click', showCard)
  } else {
    letShow = true;
    cardShown = false;
    setTimeout(() => {
      firstCard.children[0].classList.remove('active');
      secondCard.children[0].classList.remove('active');
      letShow = false;
    }, 1200);
  }
}
checkSimilarity()
}