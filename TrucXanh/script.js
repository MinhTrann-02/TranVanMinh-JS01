document.addEventListener("DOMContentLoaded", function () {
    const cardIcons = ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯'];
    const cardIcon_2 = [...cardIcons,...cardIcons];
    let countCard = 1;

    const gameContainer = document.getElementById("game-container");

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function createCard(icon, index) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        //   card.innerText = countCard;

        const cardFront = document.createElement("div");
        const cardIcon = document.createElement("div");
        cardFront.classList.add("card-front");
        cardIcon.classList.add("card-icon");
        cardIcon.innerHTML = cardIcon_2[index];

        card.appendChild(cardFront);
        card.appendChild(cardIcon);
        card.addEventListener("click", flipCard);

        return card;
    }

    function flipCard() {
        this.classList.toggle("flipped");
        checkForMatch();
    }

    function checkForMatch() {
        const flippedCards = document.querySelectorAll(".card.flipped");


        if (flippedCards.length == 2) {
            const [firstCard, secondCard] = flippedCards;
            

            if (firstCard.querySelector(".card-icon").textContent === secondCard.querySelector(".card-icon").textContent) {
                setTimeout(() => {
                    flippedCards.forEach(card => card.classList.remove(".card"));
                    firstCard.length = 0;
                }, 1000);
            } else {
                setTimeout(() => {
                    flippedCards.forEach(card => card.classList.remove("flipped"));
                }, 1000);
            }
        }
    }

    function initGame() {
        const shuffledImages = shuffle(cardIcon_2);

        shuffledImages.forEach((icon, index) => {
            const card = createCard(icon, index);

            countCard++;
            gameContainer.appendChild(card);
        });
    }

    initGame();
});
