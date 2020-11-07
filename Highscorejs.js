  
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('clear');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (event) {
  evemt.preventDefault();

  // need to stringify for array//

  itemsArray.push(input.value);
//   console.log()
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});
// //// if empty box //
// if (item=== "") {
//     displayMessage("error", "cannot be blank");


/// added a clear button? idk if needed//
clear.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});















// var enterScore = document.getElementById("scoreGoesHere");
// console.log("linked")








// function addScore(){
//     console.log('clicked')
//     var existingArray = localStoreage.getItem(rand)
//     console.log(existingArray)
// }








// var enterScore = document.getElementById("scoreGoesHere");


// function displayScores(type, message) {
//     enterScore.textContent = message;
//     enterScore.setAttribute("class", type);
// }


// enterScore.addEventListener("click", function (event) {
//     event.preventDefault();
//     // create object for submission //
//     var something = {
//         enterScore: enterScore.value.trim()

//     };

//     if (enterScore === "") {
//         displayMessage("error", "form cannot be blank");
//     }
//     console.log(user);
//     localStorage.setItem("user", user);

//     var lastUser = localStorage.getItem("user");
//     userEnterScore.textContent = lastUser.EnterScore;
// })