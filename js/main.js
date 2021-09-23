let tasks = document.getElementById("tasks");
let taskNameInput = document.getElementById("taskName");
// let taskName = document.querySelector("taskName");
let dateCompletion = document.getElementById("dateCompletion");
// let pictureForm = document.getElementById("pictureForm");
// let descriptionForm = document.getElementById("descriptionForm");
let btnDeleteTask = document.querySelectorAll("btnDeleteTask");

let btnOpenForm = document.getElementById("btnOpenForm");
let btnCloseForm = document.getElementById("btnCloseForm");
let extraDivForm = document.getElementById("extraDivForm");
let formAddTask = document.getElementById("formAddTask");

let btnAddTask = document.getElementById("btnAddTask");

document.querySelector("form").onsubmit = function () { return false };

// let extraDivContact = document.getElementById("extraDivContact");
// let btnOpenContact = document.getElementById("btnOpenContact");

// let extraDivTeam = document.getElementById("extraDivTeam");
// let btnOpenTeam = document.getElementById("btnOpenTeam");

btnOpenForm.onclick = function() {
  if (extraDivForm.style.display == "none") {
    extraDivForm.style.display = "block";
  } else {
    extraDivForm.style.display = "none";
  }
}

btnCloseForm.onclick = function() {
  extraDivForm.style.display = "none";
}

btnAddTask.addEventListener("click", function () {
  if ((taskNameInput.value == "") || (dateCompletion.value == "")){
    taskNameInput.focus();

    alert("Por favor, preencha os 3 campos!");

    // taskNameInput.value = "Filhote de Labrador";
    // pictureForm.value = "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg";
    // descriptionForm.value = "Lorem ipsum, dolor sit amet";
  } else {
    tasks.style.height = "auto";

    let task = document.createElement("div");
    task.setAttribute("class", "task");
    tasks.appendChild(task);

    let taskContent = document.createElement("div");
    taskContent.setAttribute("class", "taskContent");
    task.appendChild(taskContent);

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkTask");
    task.appendChild(checkbox);

    // checkbox.onclick = function() {
    //   if(check)
    // }

    let taskNameOnCard = document.createElement("h2");
    taskNameOnCard.setAttribute("class", "taskName");
    taskNameOnCard.innerHTML += taskNameInput.value;
    // taskNameOnCard.innerHTML += `<h2 class="taskName">${taskNameInput.value}</h2>`;
    taskContent.appendChild(taskNameOnCard);

    checkbox.addEventListener('change', (event) => {
      if (event.currentTarget.checked) {
        taskName.style.textDecoration = "line-through";
      } else {
        taskName.style.textDecoration = "none";
      }
    })

    
    

    // taskContent.innerHTML += `<h2 class="taskName">${taskNameInput.value}</h2>`;
    taskContent.innerHTML += `<h4 class="dateCompletion">${dateCompletion.value}</h4>`;

    let divBtnDeleteTask = document.createElement("div");
    divBtnDeleteTask.setAttribute("class", "divBtnDeleteTask");
    task.appendChild(divBtnDeleteTask);

    let btnDeleteTask = document.createElement("img");
    btnDeleteTask.setAttribute("src", "./imgs/btnDeleteTask.svg");
    btnDeleteTask.setAttribute("class", "btnDeleteTask");
    divBtnDeleteTask.appendChild(btnDeleteTask);
    btnDeleteTask.addEventListener("click", function () { task.remove() });

    task.addEventListener("mouseover", function() {
      divBtnDeleteTask.style.display = "block";
    })
    task.addEventListener("mouseout", function() {
      divBtnDeleteTask.style.display = "none";
    })

    taskNameInput.focus();

    // taskNameInput.value = "Filhote de Labrador";
    // pictureForm.value = "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg";
    // descriptionForm.value = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident facere, iure laborum impedit rem tempore cum?";

    document.querySelectorAll("input").forEach((item) => item.value = "");
  }
})


// btnOpenContact.onclick = function() {
//   if (extraDivContact.style.display == "none") {
//     extraDivContact.style.display = "block";
//   } else {
//     extraDivContact.style.display = "none";
//   }
// }

// btnOpenTeam.onclick = function() {
//   if (extraDivTeam.style.display == "none") {
//     extraDivTeam.style.display = "block";
//   } else {
//     extraDivTeam.style.display = "none";
//   }
// }

window.onclick = function(event) {
  if (event.target == extraDivForm) {
    extraDivForm.style.display = "none";
//   } if (event.target == extraDivContact) {
//     extraDivContact.style.display = "none";
//   } if (event.target == extraDivTeam) {
//     extraDivTeam.style.display = "none";
  }
}


// quando clicar no checkbox, riscar o escrito
// adicionar data de criacao automaticamente pelo js
// abrir confirm quando clicar para excluir a task "deseja mesmo excluir?"

//OPCIONAIS (SOH DEPOIS QUE TUDO ESTIVER PRONTO!!!):
// local storage
// escolher cor do fundo do card

// OBS:
// API de datas