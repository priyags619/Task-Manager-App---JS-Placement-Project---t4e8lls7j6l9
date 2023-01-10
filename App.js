const taskManagerForm = document.getElementById("task-Manager-form");
const addTask = document.getElementById("add-task");
const close = document.getElementById("close");
const overlay = document.querySelector(".overlay");
const textValue = document.getElementById("text-value");
const inputText = document.getElementById("input-text");
const openCards = document.querySelector(".open");
const saveBtn = document.querySelector("#save-btn");
const select = document.querySelector("#options")
const cards = document.querySelectorAll(".grid-item")

function openModal(){
    overlay.classList.add("active");
}
function closeModal(){
    overlay.classList.remove("active");
}


function getValues(e){
    e.preventDefault();
    const textArea = inputText.value;
    const selectValue = select.value;
    const div = document.createElement("div");
    div.className = "list-items";
    div.setAttribute("draggable", "true")
    const currentCard = document.getElementById(`${selectValue}`)
    div.innerHTML = `<ul><li>${textArea}</li></ul>`;
    currentCard.appendChild(div);
    closeModal();
    dragging(div);
}
function dragging(element){
    element.addEventListener('dragstart',() => element.classList.add("drag"))
    element.addEventListener('dragend',() => element.classList.remove("drag"))
}
cards.forEach((card) => {
    card.addEventListener('dragover', () => {
     const draggingElement = document.querySelector('.drag');
     card.appendChild(draggingElement)   
    })
})

close.addEventListener("click", closeModal)

taskManagerForm.addEventListener("submit", getValues);
addTask.addEventListener("click", openModal);

 

