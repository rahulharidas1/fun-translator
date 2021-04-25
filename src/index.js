var button = document.getElementById("btn-translate");
var textInput = document.getElementById("textarea");
var outputDiv = document.getElementById("output");
button.addEventListener("click", function buttonClickHandler() {
  getTranslation(textInput.value);
});
var url = "https://api.funtranslations.com/translate/minion.json";
function getTranslation(text) {
  var finalUrl = url + "?text=" + text;
  fetch(finalUrl)
    .then((response) => response.json())
    .then((json) => {
      var result = json.contents.translated;
      outputDiv.innerText = result;
    });
}
