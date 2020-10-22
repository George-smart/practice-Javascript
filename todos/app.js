//Select the elements

var clear = document.getElementById('clear');
var list = document.getElementById('list');
var input = document.getElementById('text');
var addBtn = document.getElementById('add-btn');

//Create Classes
const check = 'fa-circle';
const trash = 'fa-trash-alt'

// create the Todos array
var todos = [];
var id = 0;

//Todo Function
function addToDos(todo){
    const text = ` <li class="item" ${id} >
                        <i class="far ${check}" job="complete"></i>
                        <p class="text">${todo}</p>
                        <i class="fas ${trash}" job="delete" id="del"></i>
                    </li>`;
    const position = 'beforeend';
    
    list.insertAdjacentHTML(position, text);
}

//Add Event listener when the Enter key is press
document.addEventListener('keyup', function(e){
    if(e.code === 'Enter'){
        todoInput();
    }
});

//Add todo with addBtn
addBtn.addEventListener('click', todoInput)

//Todo Input Value
function todoInput(){
    const todo = input.value;
        if(todo){
            addToDos(todo);
            todos.push(
                {
                    name: todo,
                    id: id
                }
            );
        }
        input.value = '';
        id++;
}

//Clear Event
clear.addEventListener('click', function(){
    list.innerHTML = '';
    todos = [];
});

//Remove todo

list.addEventListener('click', removeToDos)

function removeToDos(e){
    if(e.target.classList.contains(trash)){
       var li =  e.target.parentElement;
       this.removeChild(li);
       todos.pop();
    }
}

//Checked the todos
list.addEventListener('click', checkTodos)
function checkTodos(e){
    if(e.target.classList.contains(check)){
        e.target.parentElement.classList.toggle('linethrough')
    }
}