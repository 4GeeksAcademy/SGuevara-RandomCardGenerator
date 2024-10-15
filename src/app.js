const card = document.querySelector("#card"); 
const paloUp = document.querySelector('#paloUp');
const paloDown = document.querySelector('#paloDown');
const number = document.querySelector('#number');

const cardNumbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const palos = ['♦', '♥', '♠', '♣'];

const getRandomItem  = (arr) => {
    return arr[(Math.floor(Math.random()* arr.length))];
};

function randomCard() {
    const randomPalo = getRandomItem(palos);
    const randomNumber = getRandomItem(cardNumbers);

    paloUp.textContent = randomPalo; // textcontent pareciera mejor que innerHTML
    paloDown.textContent = randomPalo;
    number.textContent = randomNumber;

    if (randomPalo === '♥' || randomPalo === '♦') {
        paloUp.style.color = 'red';
        paloDown.style.color = 'red';
        number.style.color = 'red';
    }
}

window.onload = randomCard;
