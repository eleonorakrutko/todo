import renderCompletedToDoCounter from "./renderCompletedCounter.js";
import renderToDos from "./renderToDos.js";

const completedTasks = document.getElementById('completedTasks');
function checkIsDone(item, state){
    return function(){
        item.isDone = event.target.checked;

        if(item.isDone){
            state.isCompleted += 1;
        } else {
            state.isCompleted -= 1;
        }
    
        completedTasks.innerHTML = null;
        renderCompletedToDoCounter(state.isCompleted, completedTasks)
        renderToDos(state)
    }
}

export default checkIsDone