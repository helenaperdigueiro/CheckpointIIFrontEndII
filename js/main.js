let btnOpenForm = document.getElementById("btnOpenForm");
let form = document.getElementById("form");

btnOpenForm.onclick = function () {
    if (form.style.display == "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

