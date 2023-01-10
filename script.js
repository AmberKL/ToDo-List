
const addToDoButton = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer");
const inputField = document.querySelector("#inputField");


addToDoButton.addEventListener('click', function(){
    const listItem = document.createElement("li");
    listItem.innerHTML = inputField.value;
    toDoContainer.appendChild(listItem);
    inputField.value = "";
    listItem.classList.add('listItems');

//highlight important tasks
    const listImportant = document.createElement("button");
    listImportant.classList.add("important");
    listImportant.innerHTML = "<img src =\'alert-outline.svg\'>";
    listImportant.addEventListener('click', function(){
        listItem.style.textDecoration = "underline";
    })

//remove tasks
    const listDelete = document.createElement("button");
    listDelete.classList.add("delete");
    listDelete.innerHTML ="<img src=\"trash-outline.svg\">";
    
    listItem.appendChild(listImportant);
    listItem.appendChild(listDelete);

    listDelete.addEventListener('click', function(){
        toDoContainer.removeChild(listItem);
    })
    });



const menu = document.querySelector("#dropdownItems");
function toggleMenu(){
    menu.classList.toggle("open-menu");
}



// const task = inputField.value;
  //  if (!task) {
    //    alert("Task not filled out.")
   // } else {
   //     console.log("Success");
   // }