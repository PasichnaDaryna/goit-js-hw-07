let inputEl = document.querySelector("#validation-input");
/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено поaaaaaдходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.*/
inputEl.addEventListener("input", onInputSymbCheck);
function onInputSymbCheck(event) {
  if (
    event.currentTarget.value.length <
    event.currentTarget.getAttribute("data-length")
  ) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
