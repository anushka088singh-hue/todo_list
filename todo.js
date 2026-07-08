let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask(){

    let task = taskInput.value;

    if(task==""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    let left = document.createElement("div");
    left.className = "left";

    let check = document.createElement("input");
    check.type = "checkbox";

    let text = document.createElement("span");
    text.innerText = task;

    left.appendChild(check);
    left.appendChild(text);

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit";

    editBtn.addEventListener("click", function(){

        let newTask = prompt("Edit Todo", text.innerText);

        if(newTask != null && newTask != ""){
            text.innerText = newTask;
        }

    });

    li.appendChild(left);
    li.appendChild(editBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}