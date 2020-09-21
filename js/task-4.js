const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

incrementBtn.addEventListener("click", onIncrementClick);
decrementBtn.addEventListener("click", onDecrementClick);

function onIncrementClick() {
  counterValue += 1;
  document.getElementById("value").innerHTML = counterValue;
}
function onDecrementClick() {
  counterValue -= 1;
  document.getElementById("value").innerHTML = counterValue;
}
