const btn = document.querySelector(".btn");
const jokeEl = document.querySelector("#joke");

let joke = [];

async function getJoke() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    joke = await response.json();
    changeHtml();
  } catch (err) {}
}
getJoke();

const changeHtml = function () {
  if (joke.delivery === undefined || joke.delivery === undefined) {
    getJoke();
  } else {
    jokeEl.textContent = joke.setup + " " + joke.delivery;
    btn.textContent = "Get New Joke";
  }
};
btn.addEventListener("click", getJoke);
