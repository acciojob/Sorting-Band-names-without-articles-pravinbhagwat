let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// function to remove articles from the beginning of the string
function removeArticle(str) {
  let articles = ["a", "an", "the"];
  let words = str.split(" ");
  if (articles.includes(words[0].toLowerCase())) {
    return words.slice(1).join(" ");
  } else {
    return str;
  }
}

// sort the band names in lexicographic order
bandNames.sort(function(a, b) {
  a = removeArticle(a);
  b = removeArticle(b);
  return a.localeCompare(b);
});

// get the ul element by id
let ul = document.getElementById("band");

// create li elements for each band name and append to ul
for (let i = 0; i < bandNames.length; i++) {
  let li = document.createElement("li");
  li.textContent = bandNames[i];
  ul.appendChild(li);
}
