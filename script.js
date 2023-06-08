const items = document.querySelectorAll('.item');
const targetContainer = document.getElementById('target-container');
const successMessage = document.getElementById('success-message');
const mainContainer = document.getElementById('container')

let draggedItem = null;

let x=0;

items.forEach((item) => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

targetContainer.addEventListener('dragover', dragOver);
targetContainer.addEventListener('dragenter', dragEnter);
targetContainer.addEventListener('dragleave', dragLeave);
targetContainer.addEventListener('drop', drop);

function dragStart() {
  draggedItem = this;
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  targetContainer.classList.add('highlight');
}

function dragLeave() {
  targetContainer.classList.remove('highlight');
}

function drop() {
  targetContainer.classList.remove('highlight');
  targetContainer.appendChild(draggedItem);
  successMessage.textContent = 'Item dropped successfully!';
  setTimeout(() => {
    successMessage.textContent = '';
  }, 1000);
   x++;
  
}

 function reset () {
 
 
       for(let i=0; i<x; i++){
         mainContainer.appendChild( targetContainer.children[i])
       } 
   
  
     
    
    x=0;
  
  targetContainer.children = '';
  
  
}