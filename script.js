const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // Clearing the input field after adding a task
    inputBox.value = "";
    saveData();
} 

// To check and delete whenever item is clicked
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

// To save data in localstorage as name=data.
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// To view/display data stored in localstorage which is saved as name=data
function viewData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
viewData(); // Calling viewData function