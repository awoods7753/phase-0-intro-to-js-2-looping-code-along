// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);



function writeCards(names, birthday) {
    let newCards=[]
    for (let i = 0; i < names.length; i++) {
        newCards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
    }

    return newCards;
}

function countDown() {
let countDown = 10;
while (countDown >= 0) {
    console.log(countDown--);
}
}