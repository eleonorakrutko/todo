import renderToDos from "./renderToDos.js";

function deleteToDo(item, state){
    return function () {
        state.containerForToDos = state.containerForToDos.filter(todo => {
            if(todo === item){
                state.containerForDeletedToDos.push(todo);
            }
            return todo !== item;
        })
        renderToDos(state)
    }
}

export default deleteToDo