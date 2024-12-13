import { fruits } from "./fruits";

export const render = () => {
  const card = document.querySelector("#fruitsection");
  fruits.forEach((f) => {
    const fruit = document.createElement("div");
    const content = [
      `<h2> ${f.name}</h2>`,
      `<p> ${f.color}</p>`,
      `<p> ${f.category}</p>`,
      `<p> ${f.icon}</p>`,
    ];
    fruit.innerHTML = content.join("");
    card?.appendChild(fruit);
  });
};
