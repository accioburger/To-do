//selectors
const todoinput = document.querySelector(".todo-input");
console.log(todoinput.value);
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

todobutton.addEventListener("click",addtodo);
todo-List.addEventListener("click",deletecheck);

function addtodo(event) {
    event.preventdefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newtodo = document.createElement("li");
    newtodo.innertext = todoinput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);
    const completedbutton = document.createElement("button");
    completedbutton.innerHTML= '<i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);
    const trashbutton = document.createElement("butto");
    trashbutton.innerHTML='<i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);
    todolist.appendChild(todoDiv);
    todoinput.value="";
}