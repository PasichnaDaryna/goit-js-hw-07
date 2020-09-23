let inputEl = document.querySelector('#validation-input');
/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.*/
inputEl.addEventListener('input', onInputSymbCheck);
function onInputSymbCheck(event) {
  const inputLength = event.currentTarget.value.length;
  const correctLength = event.currentTarget.getAttribute('data-length');

  if (inputLength < correctLength || inputLength > correctLength) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
}
