var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {

    if (inputLength() > 0) {
        createElement()
    }

}


function addListAfterKeypress(event) {

    if (inputLength() > 0 && event.which === 13) {
        createElement()
    }

}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)