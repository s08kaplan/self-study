const input = document.querySelector('.todo-input');

const todoListContainer = document.querySelector('.list-container');




//-------------------------- todo ekleme işlemi--------

document.querySelector('.todo-btn').addEventListener('click',(element)=>{

const todoText = input.value.trim().toUpperCase();
 const dinamicId = new Date().getTime();
if (todoText === '') {

//  add alert 
const alert = `
<div class="alert alert-danger">Lütfen Boş bırakmayın</div>
`

todoListContainer.insertAdjacentHTML('beforebegin',alert);
setTimeout(() => {
  document.querySelectorAll('.alert').forEach((alert)=>{
    alert.remove();
  })
}, 2000);
return;
  
};

const newTodoItem = document.createElement('li');
newTodoItem.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');

newTodoItem.innerHTML = `
<div>
  <input class="form-check-input me-1" type="checkbox" value="" id="${todoText}-${dinamicId}">
  <label class="form-check-label" for="${todoText}-${dinamicId}">${todoText}</label>
</div>
<i class="fa-solid fa-trash-can  "></i>
`;

todoListContainer.appendChild(newTodoItem);

input.value = '';
todoListContainer.style.display = 'block';

})
//------------------------------------ todo ekleme işlemi-------------------




// enter'a basınca ekleme işlemi
input.addEventListener('keyup',(event)=>{
  if(event.keyCode === 13){
    if (input.value.trim() !== '') {
      
      document.querySelector('.todo-btn').click();
    }
  }
})


// ---------------------- todo silme işlemi----------------
todoListContainer.addEventListener('click',(event)=>{
  
  if(event.target.closest('.fa-trash-can')
  ){
   console.log('silme işlemi');
    event.target.closest('.list-group-item').remove();

    if (todoListContainer.children.length === 0) {
      todoListContainer.style.display = 'none';
      
    }
   
  }
 
})