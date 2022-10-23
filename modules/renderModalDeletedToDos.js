function renderDeletedToDo(state){
    const modal = document.getElementById('modal');
    const listDeletedToDos = document.getElementById('listDeletedToDos');
    const closeButton = document.getElementById('close')
    const clearButton = document.getElementById('clear')

    return function(){
        listDeletedToDos.innerHTML = null;

        closeButton.addEventListener('click', () =>{
            modal.style.display = 'none';
        })

        modal.style.display = 'block';

        state.containerForDeletedToDos.forEach(item => {
            const li = document.createElement('li');
            const span = document.createElement('span');

            li.classList.add('deletedTodos');
            span.innerText = item.toDo;

            if(item.isDone){
                li.classList.add('done')
            }

            listDeletedToDos.append(li);
            li.append(span);
        })  
        
        clearButton.addEventListener('click', () => {
            state.containerForDeletedToDos = [];
            listDeletedToDos.innerHTML = null
        })
    }
}

export default renderDeletedToDo