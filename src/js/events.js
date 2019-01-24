var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var matches = document.querySelectorAll(".close");

function inputLength() {
    return input.value.length;
}

function removeListsItems(e) {    
    if (e.target.className === 'close') {
        var removelist = document.querySelector('.todoitem'); 
        var parent = document.querySelector('#base'); 
        parent.removeChild(removelist);
    }
} 

function createListElement() {
    //create list item
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.className = "todoitem";
    input.value = "";
    //Create delete button
    var deletebutton = document.createElement("SPAN");
    deletebutton.appendChild(document.createTextNode("\u007F"));
    deletebutton.className = "close";
    li.appendChild(deletebutton);
}

function strikeOutListItems(e){
    //call class to strike out list item
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    } 
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    //Add to list after pressing enter    
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

input.addEventListener("keypress", addListAfterKeyPress);
button.addEventListener("click", addListAfterClick);
ul.addEventListener("click", strikeOutListItems);
base.addEventListener("click", removeListsItems);




//repeated code
/* button.addEventListener("click", function(){
    if(input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})
    input.addEventListener("keypress", function(event){
        console.log(event);
         if(input.value.length > 0 && event.keyCode === 13) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            input.value = "";
        } 
    
}) */

//Another way to delete a todo list item. This way doesnt work in IE
//var base = document.querySelector('#base'); // the container for the variable content
//var selector = '.close'; // any css selector for children
/* function removeListsItems(e) {
    var closest = event.target.closest(selector);
    if (closest && base.contains(closest)) {
        if (e.target.className === "close") {
            var removelist = document.querySelector('.todoitem'); 
            var parent = document.querySelector('#base'); 
            parent.removeChild(removelist);
        } 
    }
} */