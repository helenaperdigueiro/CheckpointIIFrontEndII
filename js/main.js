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

let taskList = localStorage.getItem("savedTasks")
  ? JSON.parse(localStorage.getItem("savedTasks"))
  : [];

// Pra cada elemento do array de conteúdo vai chamar a função divMaker
taskList.forEach(element => addSavedTask(element));

function addSavedTask(object) {
  let task = document.createElement("div");
  task.setAttribute("class", "task");
  tasks.appendChild(task);

  let divDateCreation = document.createElement("div");
  divDateCreation.setAttribute("class", "dateCreation");

  let savedDateCreation = object.dateCreation;

  let dateCreation = document.createTextNode(savedDateCreation);
  divDateCreation.appendChild(dateCreation);
  task.appendChild(divDateCreation);

  //falta armazenar se o checkbox esta checked e fazer ele apresentar checked quando carrega a pagina (as que tao com valor true)
  //AQUI AINDA NAO ESTA CERTO:
  let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkTask");
    // checkbox.setAttribute("value", object.checkboxChecked);
    // checkbox.setAttribute("value", object.checkboxChecked);
    if (object.checkboxChecked) {
      checkbox.setAttribute("checked", "checked");
    }

    console.log(object.checkboxChecked);
    task.appendChild(checkbox);

    //aqui:

    let taskNameOnCard = document.createElement("div");
    taskNameOnCard.setAttribute("class", "taskNameOnCard");
    taskNameOnCard.innerHTML += `<h2 class="taskNameOnCard">${object.taskNameOnCard}</h2>`;
    task.appendChild(taskNameOnCard);

    taskNameOnCard.style.textDecoration = "none";

    checkbox.addEventListener('change', () => {
      console.log("este");
      if (taskNameOnCard.style.textDecoration == "none") {
        taskNameOnCard.style.textDecoration = "line-through";
        task.style.opacity = "60%";
        object.checkboxChecked = true;
        console.log(object.checkboxChecked);
      } else {
        taskNameOnCard.style.textDecoration = "none";
        task.style.opacity = "100%";
        object.checkboxChecked = false;
      }
      
      // localStorage.setItem("savedTasks.checkboxChecked", true);
      // savedTasks.checkboxChecked = "true";
    })

    let taskDateCompletion = document.createElement("div");
    taskDateCompletion.setAttribute("class", "taskDateCompletion");
    taskDateCompletion.innerHTML += `<h4 class="dateCompletion">${object.dateCompletion}</h4>`;
    task.appendChild(taskDateCompletion);

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
}

let today = new Date().toLocaleDateString().split('/');
let today2 = today[2] + '-' + (("0" + today[0]).slice(-2)) + '-' + (("0" + today[1]).slice(-2));
dateCompletion.setAttribute('min', today2);

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

  } else {
    tasks.style.height = "auto";

    let task = document.createElement("div");
    task.setAttribute("class", "task");
    tasks.appendChild(task);

    let divDateCreation = document.createElement("div");
    divDateCreation.setAttribute("class", "dateCreation");
    let date = new Date();
    let dateCreationFormat = (("0" + date.getDate()).slice(-2)) + '/' + (("0" + (date.getMonth() + 1)).slice(-2)) + '/' + date.getFullYear();
    let dateCreation = document.createTextNode(dateCreationFormat);
    // dateCreationFormat.setAttribute("class", "dateCreation");
    divDateCreation.appendChild(dateCreation);
    task.appendChild(divDateCreation);

    let dateCompletionFormat = dateCompletion.value.split('-').reverse().join('/');

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkTask");
    // checkbox.checkboxChecked;
    //adicionei esse soh para testar:
    // checkbox.setAttribute("banana", "checked");
    task.appendChild(checkbox);

    let taskNameOnCard = document.createElement("div");
    taskNameOnCard.setAttribute("class", "taskNameOnCard");
    // taskNameOnCard.innerHTML += taskNameInput.value;
    taskNameOnCard.innerHTML += `<h2 class="taskNameOnCard">${taskNameInput.value}</h2>`;
    task.appendChild(taskNameOnCard);

    taskNameOnCard.style.textDecoration = "none";

// Tirei checkbox aqui

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

    document.querySelectorAll("input").forEach((item) => item.value = "");

    let taskInfo = {
      dateCreation: dateCreationFormat,
      checkboxChecked: checkbox.checked,
      taskNameOnCard: taskNameOnCard.textContent,
      dateCompletion: dateCompletionFormat
    }

  
    //AQUI AINDA NAO ESTA CERTO:
    checkbox.addEventListener('change', () => {
      console.log("este");
      if (taskNameOnCard.style.textDecoration == "none") {
        taskNameOnCard.style.textDecoration = "line-through";
        task.style.opacity = "60%";
        // savedTasks.checkboxChecked = true;
      } else {
        taskNameOnCard.style.textDecoration = "none";
        task.style.opacity = "100%";
        // savedTasks.checkboxChecked = false;
      }
      
      // localStorage.setItem("savedTasks.checkboxChecked", true);
      // savedTasks.checkboxChecked = "true";
    })

    taskList.push(taskInfo);

    console.log(taskList);

    //Salvando as tarefas no Local Storage (console - application)
    localStorage.setItem("savedTasks", JSON.stringify(taskList));
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
// escolher cor do fundo do card
// contagem regressiva de quantos dias ainda tem para realizar a tarefa (opcional nosso)
// minimo 10 caracteres