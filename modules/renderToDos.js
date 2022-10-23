import deleteToDo from "./deleteToDo.js";
import checkIsDone from "./checkIsDone.js";

function renderToDos(state){
    const listToDos = document.getElementById('listToDo');       
    listToDos.innerHTML = null;
    state.containerForToDos.forEach(item => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const buttonDelete = document.createElement('button');
        const checkInput = document.createElement('input');

        checkInput.checked = item.isDone;
        checkInput.type = 'checkbox';
        
        li.classList.add('todos');
        checkInput.classList.add('checking')
        buttonDelete.classList.add('delete');

        if(item.isDone){
            li.classList.add('done')
        }

        span.innerText = item.toDo;
        buttonDelete.innerText = 'delete';

        listToDos.append(li);
        li.append(span);
        li.prepend(checkInput)
        li.append(buttonDelete);

        checkInput.addEventListener('change', checkIsDone(item, state))
        buttonDelete.addEventListener('click', deleteToDo(item, state))
    })
}

export default renderToDos