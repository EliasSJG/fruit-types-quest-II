import { fruits } from "./fruits/fruits";
import { render } from "./fruits/render";
import { getColor, getFruit, getIcon } from "./fruits/utils";
import "./styles.css";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

type InputEventHandler = (event: InputEvent) => void;

const handleTextInput: InputEventHandler = (event) => {
  const inputField = event.target as HTMLInputElement;
  const inputValue = inputField.value;
  const fruit = getFruit(fruits, inputValue);
  const icon = getIcon(fruits, inputValue);
  const color = getColor(fruits, inputValue);
  if (fruit) {
    console.log(
      ` Här kommer frukt objektet som matchar det namnet du skrev in:`,
      fruit
    );
  } else {
    console.log(`Hittade ingen frukt med namnet ${inputValue}`);
  }
  if (icon) {
    console.log(`Här kommer iconen som matchar med namnet du skrev in`, icon);
  } else {
    console.log(`Hittade ingen frukt med namnet ${inputValue}`);
  }
  if (color) {
    console.log(
      ` Här kommer frukten som matchar det namnet du skrev in:`,
      color
    );
  } else {
    console.log(`Hittade ingen frukt med namnet ${inputValue}`);
  }
};

const textInput = document.querySelector("#fruit") as HTMLInputElement;
textInput.addEventListener("input", handleTextInput as EventListener);

render();
