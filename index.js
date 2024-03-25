const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const correctAnswer = num1 * num2;
const score = 0;

const questionElement = document.getElementById("question");
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");

questionElement.innerHTML = `What is ${num1} multiply by ${num2}`;

formElement.addEventListener("submit", () => {
  const userInput = +inputElement.value;
  if (userInput == correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("store", JSON.stringify(score));
}