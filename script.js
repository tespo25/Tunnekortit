document.addEventListener('DOMContentLoaded', () => {
    const cardDeck = document.getElementById('card-deck');
    const shuffleButton = document.getElementById('shuffleButton');

    // Määritä korttien sisältö
    const cards = [
        { front: 'Suru', back: 'Suru on menetyksen tai muun ikävän tapahtuman tai epämieluisan olotilan aiheuttama voimakas ja pitkäkestoinen mielipahan tunne.' },
        { front: 'Viha', back: 'Viha on voimakas pahansuopuus, suuttumus, raivo, vastenmielisyys tai muu senkaltainen tunne jotain asiaa tai henkilöä kohtaan..' },
        { front: 'Kateellisuus', back: 'Kateellisuus on ahdistava tunne, joka syntyy toisen menestyksestä, onnellisuudesta tai omaisuudesta, ja joka voi ilmetä inhona, panetteluna ja itsesäälissä vajoamisena.' },
        { front: 'Iloisuus', back: 'Iloisuus tarkoittaa hyvää tuulta, aurinkoisuutta ja mielihyvää.' }
    ];

    // Funktio, joka luo kortin
    function createCard(cardData) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-face', 'card-front');
        cardFront.textContent = cardData.front;

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-face', 'card-back');
        cardBack.textContent = cardData.back;

        card.appendChild(cardFront);
        card.appendChild(cardBack);

        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        return card;
    }

    // Funktio, joka sekoittaa kortit (Fisher-Yates-algoritmi)
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }

    // Funktio, joka piirtää kortit sivulle
    function renderCards(cardArray) {
        cardDeck.innerHTML = ''; // Tyhjennä aiemmat kortit
        cardArray.forEach(cardData => {
            const card = createCard(cardData);
            cardDeck.appendChild(card);
        });
    }

    // Alkuasetelma: sekoita ja renderöi kortit
    let shuffledCards = shuffle([...cards]);
    renderCards(shuffledCards);

    // Kuuntele sekoituspainikkeen klikkausta
    shuffleButton.addEventListener('click', () => {
        shuffledCards = shuffle([...cards]);
        renderCards(shuffledCards);
    });
});
