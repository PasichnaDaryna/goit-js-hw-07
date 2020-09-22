const fontSizeContr = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
fontSizeContr.addEventListener("input", onInputFontSize);
function onInputFontSize(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
