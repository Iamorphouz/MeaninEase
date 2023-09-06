// let wordmeaning = document.querySelector("#wordmeaning");
// let searchBtn = document.querySelector("#searchBtn");
// let searchinput = document.querySelector("#searchinput");
// let word = searchinput;
// let meaning = document.querySelector("#meaning");
const dictionary = (word) => {
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then((resp) => resp.json())
    .then((resp) => {
      wordmeaning.innerHTML = resp[0].word;
      meaning.innerHTML = resp[0].meanings[0].definitions[0].definition;
    })
    .catch((err) => console.log(err));
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchinput.value);
});
