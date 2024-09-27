function addTask() {
    let val = document.querySelector('input').value;
    console.log(val);
    let but = document.createElement('button');
    but.textContent = 'delete';
    but.onclick = function () {
        diiv.remove();
    };
    let diiv = document.createElement('div');
    diiv.innerHTML = val;
    diiv.setAttribute('draggable', 'true');
    diiv.className = 'task';
    let holddiv = document.querySelector('.taskss');
    diiv.appendChild(but);
    holddiv.appendChild(diiv);
    diiv.addEventListener('dragstart', dragStart);
    diiv.addEventListener('dragend', dragEnd);
    document.querySelector('input').value = '';
}

const tasks = document.querySelectorAll('.task');
const categories = document.querySelectorAll('.categories');


tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
});

categories.forEach(categories => {
    categories.addEventListener('dragover', dragOver);
    categories.addEventListener('dragenter', dragEnter);
    categories.addEventListener('dragleave', dragLeave);
    categories.addEventListener('drop', drop);
});

let draggedTask = null;

function dragStart() {
    draggedTask = this;
    this.classList.add('dragging');
    console.log('Drag started:', this);
}

function dragEnd() {
    this.classList.remove('dragging');
    draggedTask = null;
}

function dragOver(e) {
    this.classList.add('dragging');
    e.preventDefault(); // Prevent the default behavior to allow dropping
   
}

function dragEnter(e) {
    e.preventDefault(); // Prevent the default behavior
    this.style.backgroundColor = '#151b23';
}

function dragLeave() {
    this.style.backgroundColor = 'black'; 
   
}

function drop() {
    this.style.backgroundColor = 'black'; 
    this.appendChild(draggedTask)

}
