const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const errorTask = document.querySelector('.error'); 

function addTask(){
    let trimmedValue = inputBox.value.trim();
    
    if(trimmedValue === ''){
        errorTask.style.display = "flex";
        listContainer.style.display = "none";
    }else{
        errorTask.style.display = "none";
        listContainer.style.display = "block";
        let li = document.createElement("li");
        li.innerHTML = trimmedValue;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();