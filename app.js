// Déclaration des constantes
const inputBox =  document.getElementById("input-box")
const listContainer =  document.getElementById("list-container")


// Ecouteurs d'évènements
listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
    saveData()
}, false)


// Fonctions

/**
 * Ajout d'une tache
 */
function addTask() {
    if(inputBox.value === ''){
        alert('Vous devez écrire quelque chose !')
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

/**
 * Sauvegarde dans le navigateur
 */
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

/**
 * Récupération des taches dans le navigatuer
 */
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()