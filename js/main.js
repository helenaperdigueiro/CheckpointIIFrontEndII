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
let extraDivFormTeam = document.getElementById("extraDivFormTeam");
let btnOpenTeam = document.getElementById("btnOpenTeam");

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

  let divDateCreationBtnDelete = document.createElement("div");
  divDateCreationBtnDelete.setAttribute("class", "divDateCreationBtnDelete");
  task.appendChild(divDateCreationBtnDelete);

  let divDateCreation = document.createElement("div");
  divDateCreation.setAttribute("class", "dateCreation");

  let savedDateCreation = object.dateCreation;

  let dateCreation = document.createTextNode(savedDateCreation);
  divDateCreation.appendChild(dateCreation);
  divDateCreationBtnDelete.appendChild(divDateCreation);

  let divCheckboxName = document.createElement("div");
  divCheckboxName.setAttribute("class", "divCheckboxName");
  task.appendChild(divCheckboxName);

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "checkTask");
  checkbox.setAttribute("class", "checkbox");

  divCheckboxName.appendChild(checkbox);

  let taskNameOnCard = document.createElement("div");
  taskNameOnCard.setAttribute("class", "taskNameOnCard");
  taskNameOnCard.innerHTML += `<h2>${object.taskNameOnCard}</h2>`;
  divCheckboxName.appendChild(taskNameOnCard);

  taskNameOnCard.style.textDecoration = "none";

  if (object.checkboxChecked) {
    checkbox.setAttribute("checked", "checked");
    taskNameOnCard.style.textDecoration = "line-through";
    task.style.opacity = "60%";
  }

  checkbox.addEventListener('change', () => {
    console.log("este");
    if (taskNameOnCard.style.textDecoration == "none") {
      taskNameOnCard.style.textDecoration = "line-through";
      task.style.opacity = "60%";
      object.checkboxChecked = true;

      localStorage.setItem("savedTasks", JSON.stringify(taskList));
    } else {
      taskNameOnCard.style.textDecoration = "none";
      task.style.opacity = "100%";
      object.checkboxChecked = false;
      localStorage.setItem("savedTasks", JSON.stringify(taskList));
    }
  })

  let taskDateCompletion = document.createElement("div");
  taskDateCompletion.setAttribute("class", "taskDateCompletion");
  taskDateCompletion.innerHTML += `<p class="dateCompletion">${object.dateCompletion}</p>`;
  task.appendChild(taskDateCompletion);

  let divBtnDeleteTask = document.createElement("div");
  divBtnDeleteTask.setAttribute("class", "divBtnDeleteTask");
  divDateCreationBtnDelete.appendChild(divBtnDeleteTask);

  let btnDeleteTask = document.createElement("img");
  btnDeleteTask.setAttribute("src", "./img/btnDelgrafite.png");
  btnDeleteTask.setAttribute("class", "btnDeleteTask");
  divBtnDeleteTask.appendChild(btnDeleteTask);
  btnDeleteTask.addEventListener("click", function () {
    if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      task.remove();
      let objectIndex = taskList.indexOf(object);
      taskList.splice(objectIndex, 1);
      localStorage.setItem("savedTasks", JSON.stringify(taskList));
    }
  })

  task.addEventListener("mouseover", function () {
    divBtnDeleteTask.style.opacity = "1";
  })
  task.addEventListener("mouseout", function () {
    divBtnDeleteTask.style.opacity = "0";
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
  
  } else if (taskNameInput.value.length < 10) {
    alert("A tarefa deve ter no mínimo 10 caracteres.");
    taskNameInput.focus();
    return;
  } else {
    tasks.style.height = "auto";

    let task = document.createElement("div");
    task.setAttribute("class", "task");
    tasks.appendChild(task);

    let divDateCreationBtnDelete = document.createElement("div");
  divDateCreationBtnDelete.setAttribute("class", "divDateCreationBtnDelete");
  task.appendChild(divDateCreationBtnDelete);

    let divDateCreation = document.createElement("div");
    divDateCreation.setAttribute("class", "dateCreation");
    let date = new Date();
    let dateCreationFormat = (("0" + date.getDate()).slice(-2)) + '/' + (("0" + (date.getMonth() + 1)).slice(-2)) + '/' + date.getFullYear();
    let dateCreation = document.createTextNode(dateCreationFormat);
    divDateCreation.appendChild(dateCreation);
    divDateCreationBtnDelete.appendChild(divDateCreation);

    let dateCompletionFormat = dateCompletion.value.split('-').reverse().join('/');

    let divCheckboxName = document.createElement("div");
    divCheckboxName.setAttribute("class", "divCheckboxName");
    task.appendChild(divCheckboxName);

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkTask");
    checkbox.setAttribute("class", "checkbox");
    divCheckboxName.appendChild(checkbox);

    let taskNameOnCard = document.createElement("div");
    taskNameOnCard.setAttribute("class", "taskNameOnCard");
    taskNameOnCard.innerHTML += `<h2>${taskNameInput.value}</h2>`;
    divCheckboxName.appendChild(taskNameOnCard);

    taskNameOnCard.style.textDecoration = "none";

    let taskDateCompletion = document.createElement("div");
    taskDateCompletion.setAttribute("class", "taskDateCompletion");
    taskDateCompletion.innerHTML += `<p class="dateCompletion">${dateCompletionFormat}</p>`;
    task.appendChild(taskDateCompletion);

    let divBtnDeleteTask = document.createElement("div");
    divBtnDeleteTask.setAttribute("class", "divBtnDeleteTask");
    divDateCreationBtnDelete.appendChild(divBtnDeleteTask);

    let btnDeleteTask = document.createElement("img");
    btnDeleteTask.setAttribute("src", "./img/btnDelgrafite.png");
    btnDeleteTask.setAttribute("class", "btnDeleteTask");
    divBtnDeleteTask.appendChild(btnDeleteTask);
    btnDeleteTask.addEventListener("click", function () {
      if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
        task.remove();
        let objectIndex = taskList.indexOf(taskInfo);
        taskList.splice(objectIndex, 1);
        localStorage.setItem("savedTasks", JSON.stringify(taskList));
      }
    })

    task.addEventListener("mouseover", function () {
      divBtnDeleteTask.style.opacity = "1";
    })
    task.addEventListener("mouseout", function () {
      divBtnDeleteTask.style.opacity = "0";
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
      if (taskNameOnCard.style.textDecoration == "none") {
        taskNameOnCard.style.textDecoration = "line-through";
        task.style.opacity = "60%";
        taskInfo.checkboxChecked = true;
        localStorage.setItem("savedTasks", JSON.stringify(taskList));
      } else {
        taskNameOnCard.style.textDecoration = "none";
        task.style.opacity = "100%";
        taskInfo.checkboxChecked = false;
        localStorage.setItem("savedTasks", JSON.stringify(taskList));
      }
    })

    taskList.push(taskInfo);

    console.log(taskList);

    //Salvando as tarefas no Local Storage (console - application)
    localStorage.setItem("savedTasks", JSON.stringify(taskList));
  }
})

btnOpenTeam.onclick = function() {
  if (extraDivFormTeam.style.display == "none") {
    extraDivFormTeam.style.display = "block";
  } else {
    extraDivFormTeam.style.display = "none";
  }
}

// função que permite fechar os formulários clicando fora deles
window.onclick = function(event) {
  if (event.target == extraDivForm) {
    extraDivForm.style.display = "none";
  } if (event.target == extraDivFormTeam) {
    extraDivFormTeam.style.display = "none";
  }
}

//OPCIONAIS (SOH DEPOIS QUE TUDO ESTIVER PRONTO!!!):
// escolher cor do fundo do card