
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('clear');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));

// var finalScore = localStorage.getItem("finalScore");
// console.log(finalScore);



const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = "Intials: "+text.intials+" Score: "+text.score;
  ul.appendChild(li);
}

// liMaker(finalScore)

// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   // need to stringify for array//

//   itemsArray.push(input.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   liMaker(input.value);
//   input.value = "";
// });
itemsArray.forEach(item => {
  liMaker(item);
});


/// added a clear button? idk if needed//
clear.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});
