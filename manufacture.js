// In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.
// Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.
// A gift can be made if we have all the necessary materials to make it.

function manufacture(giftsList, materials) {
  return giftsList.filter((gift) =>
    gift.split("").every((matt) => materials.includes(matt))
  );
}

const giftsList = ["tren", "oso", "pelota"];
const materials = "tronesa";

console.log(manufacture(giftsList, materials)); // ["tren", "oso"]

const giftsList1 = ["juego", "puzzle"];
const materials1 = "jlepuz";

console.log(manufacture(giftsList1, materials1)); // ["puzzle"]

const giftsList2 = ["libro", "ps5"];
const materials2 = "psli";

console.log(manufacture(giftsList, materials2)); // []
