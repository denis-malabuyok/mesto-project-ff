// Контейнер для карточек
const placesContainer = document.querySelector(".places__list");
// Создание карточек
function createCard(cardName, cardImageLink, deleteCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  let cardElementImage = cardElement.querySelector(".card__image");

  cardElementImage.setAttribute("src", cardImageLink);
  cardElementImage.setAttribute("alt", cardName);
  cardElement.querySelector(".card__title").textContent = cardName;

    // Обработчик события для кнопки удаления
    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", () => {
      deleteCard(cardElement);
    });

  return cardElement;
}

// Удаление карточки
function deleteCard(cardElement) {
  cardElement.remove();
}
// Добавляем карточку в контейнер
function addCard(cardElement) {
  placesContainer.append(cardElement);
}

initialCards.forEach((card) => {
  const newCard = createCard(card.name, card.link, deleteCard);
  addCard(newCard);
});
