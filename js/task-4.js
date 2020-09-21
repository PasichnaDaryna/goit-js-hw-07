const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");
let counterValue = 0;

incrementBtn.addEventListener("click", onIncrementClick);
decrementBtn.addEventListener("click", onDecrementClick);

function onIncrementClick(event) {
  counterValue += 1;
  value.textContent = counterValue;
  console.log("+1");
}

function onDecrementClick(event) {
  counterValue -= 1;
  value.textContent = counterValue;
  console.log("-1");
}
