let tasks = document.getElementById("tasks");
let taskNameInput = document.getElementById("taskName");
let dateCompletion = document.getElementById("dateCompletion");
let btnDeleteTask = document.querySelectorAll("btnDeleteTask");

let btnOpenForm = document.getElementById("btnOpenForm");
let btnCloseForm = document.getElementById("btnCloseForm");
let extraDivForm = document.getElementById("extraDivForm");
let formAddTask = document.getElementById("formAddTask");

let btnAddTask = document.getElementById("btnAddTask");
let extraDivFormTeam = document.getElementById("extraDivFormTeam");
let btnOpenTeam = document.getElementById("btnOpenTeam");

let blueTheme = document.getElementById("blueTheme");
let redTheme = document.getElementById("redTheme");
let greenTheme = document.getElementById("greenTheme");
let darkTheme = document.getElementById("darkTheme");

blueTheme.onclick = function () {
  let theme = document.getElementsByTagName('link')[0]
  theme.setAttribute("href", "../css/styleBlue.css")
}

redTheme.onclick = function () {
  let theme = document.getElementsByTagName('link')[0]
  theme.setAttribute("href", "../css/styleRed.css")
}

greenTheme.onclick = function () {
  let theme = document.getElementsByTagName('link')[0]
  theme.setAttribute("href", "../css/styleGreen.css")
}

darkTheme.onclick = function () {
  let theme = document.getElementsByTagName('link')[0]
  theme.setAttribute("href", "../css/styleDark.css")
}

let today = new Date().toLocaleDateString().split('/');
let today2 = today[2] + '-' + (("0" + today[0]).slice(-2)) + '-' + (("0" + today[1]).slice(-2));
dateCompletion.setAttribute('min', today2);

document.querySelector("form").onsubmit = function () { return false };

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

window.onload = function () {

  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(result => {
      result.forEach(object => {

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
        taskNameOnCard.innerHTML += `<h2>${object.title}</h2>`;
        divCheckboxName.appendChild(taskNameOnCard);

        taskNameOnCard.style.textDecoration = "none";

        if (object.completed) {
          taskNameOnCard.style.textDecoration = "line-through";
          task.style.opacity = "60%";
          checkbox.setAttribute("checked", "checked");
        } else {
          taskNameOnCard.style.fontWeight = "bold";
        }

        let taskDateCompletion = document.createElement("div");
        taskDateCompletion.setAttribute("class", "taskDateCompletion");
        taskDateCompletion.innerHTML += `<p class="dateCompletion">${object.id}</p>`;
        task.appendChild(taskDateCompletion);

        let divBtnDeleteTask = document.createElement("div");
        divBtnDeleteTask.setAttribute("class", "divBtnDeleteTask");
        divDateCreationBtnDelete.appendChild(divBtnDeleteTask);

        let btnDeleteTask = document.createElement("img");
        btnDeleteTask.setAttribute("src", "../img/btnDelgrafite.png");
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

        taskNameInput.focus();

        document.querySelectorAll("input").forEach((item) => item.value = "");

        checkbox.addEventListener('change', () => {
          if (taskNameOnCard.style.textDecoration == "none") {
            taskNameOnCard.style.textDecoration = "line-through";
            task.style.opacity = "60%";
          } else {
            taskNameOnCard.style.textDecoration = "none";
            task.style.opacity = "100%";
          }
        })
      })
    })
}

btnOpenTeam.onclick = function () {
  if (extraDivFormTeam.style.display == "none") {
    extraDivFormTeam.style.display = "block";
  } else {
    extraDivFormTeam.style.display = "none";
  }
}

// função que permite fechar os formulários clicando fora deles
window.onclick = function (event) {
  if (event.target == extraDivForm) {
    extraDivForm.style.display = "none";
  } if (event.target == extraDivFormTeam) {
    extraDivFormTeam.style.display = "none";
  }
}
