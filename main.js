let count = 0;
document.getElementById('input-btn').addEventListener('click', function(){
    count++;
    const inputValue  = document.getElementById('input-value').value;
    console.log(inputValue);

const mainContainer = document.getElementById('content-container');
const tableContainer  = document.createElement('tr');
tableContainer.innerHTML = `
    <th scope='row'>${count}</th>
    <td>${inputValue}</td>
    <td>            
    <button class="btn btn-primary delete-btn">Delete</button>
    <button class="btn btn-secondary done-btn">Edit</button>
    </td>
`;
mainContainer.appendChild(tableContainer);
document.getElementById('input-value').value = '';

// delete btn
const deleteBtn = document.getElementsByClassName('delete-btn');
for(let button of deleteBtn){
    button.addEventListener('click', function(event){
        event.target.parentNode.parentNode.style.display = 'none';
    })
}
// done btn
const doneBtn = document.getElementsByClassName('done-btn');
for(let button of doneBtn){
    button.addEventListener('click', function(event){
        event.target.parentNode.parentNode.style.textDecoration = 'line-through';
    })
}


// clear all
const clearBtn = document.getElementById('clear-all');
clearBtn.classList.remove('d-none');
clearBtn.addEventListener('click', function(){
    mainContainer.innerHTML='';
    clearBtn.classList.add('d-none');
})

})


