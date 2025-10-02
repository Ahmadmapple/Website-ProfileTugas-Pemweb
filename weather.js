const Text = [
  "NIM",
  "NIM",
  "Nama",
  "Nama",
  "KOM",
  "KOM",
  "Stambuk",
  "Stambuk",
  "Motto Hidup",
  "Motto Hidup",
  "Hobi",
  "Hobi",
];
const Cards = document.querySelectorAll(".card");
let openCard = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

for (let i = Text.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [Text[i], Text[j]] = [Text[j], Text[i]];
}

function checkCard(firstCard, secondCard) {
  firstText = firstCard.querySelector(".card-text").textContent;
  secondText = secondCard.querySelector(".card-text").textContent;

  if (firstText == secondText) {
    cardResult();
  }
  else {
    setTimeout(() => {
      firstCard.querySelector(".card-text").textContent = "";
      secondCard.querySelector(".card-text").textContent = "";
      firstCard.style.border = "";
      secondCard.style.border = "";
      firstCard.style.backgroundColor = "";
      secondCard.style.backgroundColor = "";
      firstCard.isOpen = false;   
      secondCard.isOpen = false;
    }, 500);
  }
  lockBoard = false;
}

function cardResult() {
  document.querySelector(".cover").style.display = "none";
  if (firstText == "Nama" && secondText == firstText) {
    document.querySelector(".Name").style.visibility = "visible";
  }
  if (firstText == "NIM" && secondText == firstText) {
    document.querySelector(".Nim").style.visibility = "visible";
  }
  if (firstText == "Stambuk" && secondText == firstText) {
    document.querySelector(".Stambuk").style.visibility = "visible";
  }
  if (firstText == "KOM" && secondText == firstText) {
    document.querySelector(".Kom").style.visibility = "visible";
  }
  if (firstText == "Motto Hidup" && secondText == firstText) {
    document.querySelector(".Motto").style.visibility = "visible";
  }
  if (firstText == "Hobi" && secondText == firstText) {
    document.querySelector(".Hobi").style.visibility = "visible";
  }
}

Cards.forEach((card, i) => {
  const cardText = card.querySelector(".card-text");
  cardText.textContent = "";

  card.addEventListener("click", () => {
    if (card.isOpen) return;
    if (lockBoard == true) return;
    if (card == firstCard) return;
    if (card == secondCard) return
    else {
      card.style.backgroundColor = "white";
      card.style.border = "3px solid gold";
      card.isOpen = true;
      cardText.textContent = Text[i];
      console.log("Clicked");

      if (!firstCard) {
        firstCard = card;
      } else {
        secondCard = card;
        lockBoard = true;
        checkCard(firstCard, secondCard);
        firstCard = null;
        secondCard = null;
      }
    }
  });
});
