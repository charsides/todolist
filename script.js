
const button = document.getElementById("addButton");
const ul = document.getElementsByTagName('ul')[0];
const newItem = document.getElementById("input");

// ask user for their name //

function getUsername(){
    var inputBox;
    inputBox = prompt('Welcome, what\'s your name?');
    if (inputBox === null) {
        insertName("");
    }else{
        insertName(inputBox);
    }
}

// insert user's name into heading //

function insertName (name) {
    let heading = document.getElementById("heading");
    if (name == "") {
        heading.innerHTML = "My To-Do List";
    } else {
        heading.innerHTML = name.charAt(0).toUpperCase() + name.slice(1) + "'s To-Do List";
    }
}
window.onload = function() {
    getUsername();
}

// add remove button to each new item on the list //

function attachRemoveButtons(li) {
    let remove = document.createElement('button');
    remove.id = "removeButton";
    remove.innerHTML = "remove";
    li.appendChild(remove);
}

// add up button to each new item on the list //

function attachUpButtons(li) {
    let up = document.createElement('button');
    up.id = "upButton";
    up.className = "myButton";
    up.innerHTML = "up";
    li.appendChild(up);
}

// add down button to each new item on the list //

function attachDownButtons(li) {
    let down = document.createElement('button');
    down.id = "downButton";
    down.className = "myButton";
    down.innerHTML = "down";
    li.appendChild(down);
}

// add new item on the list from user's input//

function addItem () {
    let li = document.createElement("li");
    if (newItem.value != "") {
        li.innerHTML = newItem.value;
        attachRemoveButtons(li);
        attachDownButtons(li);
        attachUpButtons(li);
        ul.appendChild(li);
        newItem.value = "";
    }
};

button.addEventListener('click', addItem);

newItem.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});

// remove item from the list when remove button is clicked //

ul.addEventListener('click',(event) => {
    if (event.target.id == 'removeButton') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    } else if (event.target.id == 'upButton') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        let previousLi = li.previousElementSibling;
        if (previousLi) {
            ul.insertBefore(li, previousLi);
        }
    } else if (event.target.id == 'downButton') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        let nextLi = li.nextElementSibling;
        if (nextLi) {
            ul.insertBefore(nextLi, li);
        }
    }
}); 