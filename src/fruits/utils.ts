import { Fruit } from "./fruits";

export const getFruit = (
  allFruits: Fruit[],
  name: string
): Fruit | undefined => {
  // använd fruits-arrayen och returnera det fruit-objekt som matchar name
  // finns det ingen sådan fruit så returnera undefined

  for (let fruit of allFruits) {
    if (fruit.name === name) {
      return fruit;
    }
  }
};

export const getIcon = (
  allFruits: Fruit[],
  name: string
): string | undefined => {
  // använd fruits-arrayen och returnera ikonen som matchar frukten name
  // finns det ingen sådan frukt så returnera undefined

  for (let fruit of allFruits) {
    if (fruit.name === name) {
      return fruit.icon;
    }
  }
};

export const getColor = (
  allFruits: Fruit[],
  color: string
): string | undefined => {
  // använd fruits-arrayen och returnera färgen som matchar frukten name
  // finns det ingen sådan frukt så returnera undefined
  for (let fruit of allFruits) {
    if (fruit.color === color) {
      return fruit.name;
    }
  }
};

// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori

export const numberOfColoredFruits = (color) => {
  // använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
  // finns det inga frukter av den färgen så svara 0
};

// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori

export const getFruitsByCategory = (category) => {
  // använd fruits-arrayen
  // ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
};

// gör en getFruitsByColor också

export const getIconsByCategory = (category) => {
  // använd fruits-arrayen
  // ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
};

// gör en getIconsByColor också

// gör en getCategories som returnerar en array av alla kategorier
// gör en getColors som returnerar en array av alla färger
