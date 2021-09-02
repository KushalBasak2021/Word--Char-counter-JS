const words = document.querySelector("#words");
const charCount = document.querySelector(".char-count");
const wordCount = document.querySelector(".word-count");
const countButton = document.querySelector(".count-button");

countButton.addEventListener("click", () => {
  const numberOfCharacters = words.value.length;
  const numberOfWords = words.value.match(/\w+/g).length;
  charCount.innerHTML = `Total number of characters: ${numberOfCharacters}`;
  wordCount.innerHTML = `Total number of words: ${numberOfWords}`;
});
