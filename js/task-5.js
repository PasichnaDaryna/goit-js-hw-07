// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
let input = document.querySelector("#name-input");
let textResult = document.querySelector("#name-output");

// console.log(refs.input.innerHTML);
// console.log(refs.textResult.innerHTML);

input.addEventListener("input", onInputChange);

function onInputChange() {
  if (input.value === "") {
    textResult.innerHTML = "незнакомец";
  } else {
    textResult.innerHTML = input.value;
  }
}
