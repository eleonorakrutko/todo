function renderCompletedToDoCounter(completeCounter, completedTasks){
    const h2Completed = document.createElement('h2');
    h2Completed.classList.add('completed');
    h2Completed.innerText = `completed tasks - ${completeCounter}`;
    completedTasks.append(h2Completed);
    
    if(!completeCounter){
        completedTasks.innerHTML = null;
    }
}

export default renderCompletedToDoCounter