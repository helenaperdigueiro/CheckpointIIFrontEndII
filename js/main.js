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

btnOpenForm.onclick = function () {
  if (extraDivForm.style.display == "none") {
    extraDivForm.style.display = "block";
  } else {
    extraDivForm.style.display = "none";
  }
}

btnCloseForm.onclick = function () {
  extraDivForm.style.display = "none";
}


btnAddTask.addEventListener("click", function () {
  if ((taskNameInput.value == "") || (dateCompletion.value == "")) {
    taskNameInput.focus();

    alert("Por favor, preencha os 2 campos!");

    // taskNameInput.value = "Filhote de Labrador";
    // pictureForm.value = "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg";
    // descriptionForm.value = "Lorem ipsum, dolor sit amet";
  } else {
    tasks.style.height = "auto";


    let task = document.createElement("div");
    task.setAttribute("class", "task");
    tasks.appendChild(task);

    let divDateCreation = document.createElement("div");
    divDateCreation.setAttribute("class", "dateCreation");
    let date = new Date();
    let dateCreationFormat = (date.getDate()) + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    let dateCreation = document.createTextNode(dateCreationFormat);
    // dateCreationFormat.setAttribute("class", "dateCreation");
    divDateCreation.appendChild(dateCreation);
    task.appendChild(divDateCreation);

    //nao funciona na primeira vez. passa a funcionar a partir da segunda

    dateCompletion.addEventListener("change", function () {

      const date = dateCompletion.value.split("-");
      const today = new Date;
      const todayD = today.getDate();
      const todayM = today.getMonth() + 1;
      const todayY = today.getFullYear();

      if (date[0] < todayY) reset();
      if (date[1] < todayM && date[0] == todayY) reset();
      if (date[2] < todayD && date[1] == todayM && date[0] == todayY) reset();

      function reset() {
        // dateCompletion.classList.add("invalid");
        dateCompletion.value = ""
        // document.getElementById(`${dateCompletion.id}-label`).classList.remove("hidden");

      }
    });
    let dateCompletionFormat = dateCompletion.value.split('-').reverse().join('/');

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkTask");
    task.appendChild(checkbox);

    checkbox.addEventListener('change', (event) => {
      if (event.currentTarget.checked) {
        taskNameOnCard.style.textDecoration = "line-through";
        task.style.opacity = "50%"
      } else {
        taskNameOnCard.style.textDecoration = "none";
      }
    })

    let taskNameOnCard = document.createElement("div");
    taskNameOnCard.setAttribute("class", "taskNameOnCard");
    // taskNameOnCard.innerHTML += taskNameInput.value;
    taskNameOnCard.innerHTML += `<h2 class="taskNameOnCard">${taskNameInput.value}</h2>`;
    task.appendChild(taskNameOnCard);

    let taskDateCompletion = document.createElement("div");
    taskDateCompletion.setAttribute("class", "taskDateCompletion");
    taskDateCompletion.innerHTML += `<h4 class="dateCompletion">${dateCompletionFormat}</h4>`;
    task.appendChild(taskDateCompletion);

    // taskDateCompletion.innerHTML += `<h2 class="taskName">${taskNameInput.value}</h2>`;
    // taskDateCompletion.innerHTML += `<h4 class="dateCompletion">${dateCompletion.value}</h4>`;

    let divBtnDeleteTask = document.createElement("div");
    divBtnDeleteTask.setAttribute("class", "divBtnDeleteTask");
    task.appendChild(divBtnDeleteTask);

    let btnDeleteTask = document.createElement("img");
    btnDeleteTask.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/1250/1250180.png");
    btnDeleteTask.setAttribute("class", "btnDeleteTask");
    divBtnDeleteTask.appendChild(btnDeleteTask);
    btnDeleteTask.addEventListener("click", function () {
      if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
        task.remove();
      }
    })

    task.addEventListener("mouseover", function () {
      divBtnDeleteTask.style.display = "block";
    })
    task.addEventListener("mouseout", function () {
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

window.onclick = function (event) {
  if (event.target == extraDivForm) {
    extraDivForm.style.display = "none";
    //   } if (event.target == extraDivContact) {
    //     extraDivContact.style.display = "none";
    //   } if (event.target == extraDivTeam) {
    //     extraDivTeam.style.display = "none";
  }
}


//OPCIONAIS (SOH DEPOIS QUE TUDO ESTIVER PRONTO!!!):
// local storage
// nao deixar a data limite ser antes da criacao (Ailla)
// escolher cor do fundo do card
// contagem regressiva de quantos dias ainda tem para realizar a tarefa
// tarefa completada opacidade menor (parecer disabled)