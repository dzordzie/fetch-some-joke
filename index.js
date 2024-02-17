
const button = document.querySelector('button');
const div = document.querySelector('div');

button.setAttribute("onclick", "jokeSetter()");

function jokeSetter() {
  fetch("https://api.chucknorris.io/jokes/random/")
    .then(res => res.json())
    .then(out => jokeMaker(out.value))
    .catch(error => console.error(error));
}


function jokeMaker(input) {
  let h1 = document.createElement('h1');
  h1.textContent = input;
  div.appendChild(h1);
}