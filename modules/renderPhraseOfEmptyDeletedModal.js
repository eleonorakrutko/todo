function renderEmptyPhrase(state){
    const emptyPhrase = document.getElementById('wrapperEmptyPhrase');
    if(!state.containerForDeletedToDos.length){
        if(!emptyPhrase.hasChildNodes()){
            const h2 = document.createElement('h2');
            h2.innerText = 'There is not deleted todos'
            emptyPhrase.appendChild(h2);
        }    
    } else{
        emptyPhrase.innerHTML = null;
    }
}

export default renderEmptyPhrase;