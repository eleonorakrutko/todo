import ToDo from "./modules/ToDo.js";
import renderToDos from "./modules/renderToDos.js";
import renderDeletedToDo from "./modules/renderModalDeletedToDos.js";

const buttonAdd = document.getElementById('sendButton');
const enterToDo = document.getElementById('form');
const deletedTasksButton = document.getElementById('deletedTasksButton');

const toDoState = {
    containerForToDos: [],
    containerForDeletedToDos: [],
    isCompleted: 0,
};

deletedTasksButton.addEventListener('click', renderDeletedToDo(toDoState))

buttonAdd.addEventListener('click', () => {
    if(enterToDo.value){
        let toDo = new ToDo(enterToDo.value)
        enterToDo.value = null;
        toDoState.containerForToDos.push(toDo)
        renderToDos(toDoState)
    } else {
        alert('Enter correct task!')
    }
})  

