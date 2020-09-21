const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

incrementBtnEl.addEventListener("click", onIncrementClick);
decrementBtnEl.addEventListener("click", onDecrementClick);

function onIncrementClick() {
  counterValue += 1;
  document.getElementById("value").innerHTML = counterValue;
}
function onDecrementClick() {
  counterValue -= 1;
  document.getElementById("value").innerHTML = counterValue;
}
