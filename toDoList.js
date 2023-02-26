//Select DOM
const todoInput = document.querySelector(".task-enter-box");
const submitButton = document.querySelector(".task-submit-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo')




//Event Listeners
// document.addEventListener("DOMContentLoaded", getTodos);
submitButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo)

filterOption.addEventListener("click",filterTodo)





//Functions

function addTodo(e) {

    e.preventDefault() //prevent refreshing

    // console.log("to")
    const todoDiv = document.createElement("div");//creates the div container
    todoDiv.classList.add("todo")//add the class todo to the previous div

    const newTodo = document.createElement("li"); //create a new li tag
    newTodo.classList.add("todo-item") //add class to the li element
    newTodo.innerHTML = todoInput.value; //add text to the list

    // saveLocalTodos(todoInput.value); //save to local

    todoDiv.appendChild(newTodo); //add the entered todo content to div

    todoInput.value = "";//this empties the input box of todo

    //CREATING COMPLETED BUTTON

    const completedButton = document.createElement("button"); //button is created
    completedButton.classList.add("completed-btn");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completedButton); //attach to final todo

    //CREATING DELETE BUTTON

    const deleteButton = document.createElement("button"); // delete button is created
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(deleteButton);

    //Add the content finally to the ul
    todoList.appendChild(todoDiv);

}


function deleteTodo(event){
    let item = event.target;
    if(item.classList[0]=== "delete-btn"){
        const item1 = item.parentElement;
        item1.classList.add("fall");
        // removeLocal
        // item1.addEventListener("trasitionend",function(){
        //     item1.remove();
        // })
        item1.remove();
    }
    if(item.classList[0]==="completed-btn"){
        const item1 = item.parentElement;
        item1.classList.toggle("completed")
    }

}




function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
          case "all":
            todo.style.display = "flex";
            break;
          case "completed":
            if (todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
          case "pending":
            if (!todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
        }
      });
}
