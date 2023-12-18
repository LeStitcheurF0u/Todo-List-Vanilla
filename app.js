// Déclaration des constantes
const inputBox =  document.getElementById("input-box")
const listContainer =  document.getElementById("list-container")
const button = document.getElementById('add')


// Ecouteurs d'évènements
// On écoute les clicks
listContainer.addEventListener('click', (e) => {
    //Si on clique sur un LI on ajoute et retire la class "checked"
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    //Si on clique sur un SPAN on retire le LI associé 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
    //On sauvegarde les data dans le navigateur
    saveData()
}, false)



// On écoute la pression le relachement des touches
inputBox.addEventListener('keyup', (e) => {
    // Si on presse la touche entrée on simule le clic sur le boutton d'ajout
    if(e.keyCode === 13){
        e.preventDefault()
        button.click()
    }
})


// Fonctions

/**
 * Ajout d'une tache
 */
function addTask() {
    // On vérifie que l'input n'est pas vide 
    if(inputBox.value === ''){
        alert('Vous devez écrire quelque chose !')
    }
    else {
        // On crée un élément LI
        // On ajoute la valeur de l'input dans le LI
        // On ajoute le LI dans la liste des tâches
        // On crée un élément SPAN
        // On ajoute le SPAN à l'élément LI créé
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    // On remet l'input vide
    inputBox.value = ""
    // On enregistre les data dans le navigateur
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