function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Fonction close pour fermer le formulaire
function closeForm() {
  modalbg.style.display = "none";
}

// ID des éléments du formulaire 
document.getElementById("first"); addEventListener("input", checkFirstName)
document.getElementById("last"); addEventListener("input", checkLastName)
document.getElementById("email"); addEventListener("input", checkEmail)
document.getElementById("quantity"); addEventListener("click", checkQuantity)
document.getElementById("location1", "location2", "location3", "location4", "location5", "location6"); addEventListener("click", checkLocation)
document.getElementById("checkbox1"); addEventListener("click", checkBox1)



// Validation du champ prénom
let isFirstNameCorrect = false;

function checkFirstName() {
  let firstName = document.getElementById("first")
  // Si le prénom est correct
  if (firstName.value != null && firstName.value.length > 1) {
    firstName.parentNode.removeAttribute("data-error")
    firstName.parentNode.removeAttribute("data-error-visible")
    isFirstNameCorrect = true
  }
  // Si le prénom est incorrect
  else {
    firstName.parentNode.setAttribute("data-error", "Vous devez entrer 2 caractères ou plus pour le champ du prénom.")
    firstName.parentNode.setAttribute("data-error-visible", "true")
    isFirstNameCorrect = false
  }

}

// Validation du champ nom
let isLastNameCorrect = false;

function checkLastName() {
  let lastName = document.getElementById("last")
  // Si le nom est correct
  if (lastName.value !== null && lastName.value.length > 1) {
    lastName.parentNode.removeAttribute("data-error")
    lastName.parentNode.removeAttribute("data-error-visible")
    isFirstNameCorrect = true
  }
  // Si le nom est incorrect
  else {
    lastName.parentNode.setAttribute("data-error", "Vous devez entrer 2 caractères ou plus pour le champ du nom.")
    lastName.parentNode.setAttribute("data-error-visible", "true")
    isFirstNameCorrect = false
  }

}

// Validation du champ de l'adresse mail
let isEmailCorrect = false;

function checkEmail() {
  let email = document.getElementById("email")
  // Si l'adresse mail est correcte
  if (email.value !== null && email.value.length > 1) {
    email.parentNode.removeAttribute("data-error")
    email.parentNode.removeAttribute("data-error-visible")
    isEmailCorrect = true
  }
  // Si l'adresse mail est incorrecte
  else {
    email.parentNode.setAttribute("data-error", "Vous devez entrer une adresse mail valide.")
    email.parentNode.setAttribute("data-error-visible", "true")
    isEmailCorrect = false
  }

}

// Validation du champ du nombre de tournois
let isQuantityCorrect = false;

function checkQuantity() {
  let quantity = document.getElementById("quantity")
  // Si la valeur est correcte
  if (quantity.value !== null && quantity.value.length > 1) {
    quantity.parentNode.removeAttribute("data-error")
    quantity.parentNode.removeAttribute("data-error-visible")
    isQuantityCorrect = true
  }
  // Si la valeur est incorrecte
  else {
    quantity.parentNode.setAttribute("data-error", "Vous devez indiquer un nombre numérique comprise en 0 et 99.")
    quantity.parentNode.setAttribute("data-error-visible", "true")
    isQuantityCorrect = false
  }

}

// Validation du champ location
let isCityCorrect = false;

function checkLocation() {
  let city = document.getElementById("location1", "location2", "location3", "location4", "location5", "location6")
  // Si une ville est sélectionnée
  if (city.value !== null && city.value.length > 1) {
    city.parentNode.removeAttribute("data-error")
    city.parentNode.removeAttribute("data-error-visible")
    isCityCorrect = true
  }
  // Si une ville n'est pas sélectionnée
  else {
    city.parentNode.setAttribute("data-error", "Vous devez choisir une ville.")
    city.parentNode.setAttribute("data-error-visible", "true")
    isCityCorrect = false
  }

}

// Validation des conditions d'utilisations
let isCheckbox1Correct = false;

function checkLocation() {
  let checkBox1 = document.getElementById("checkbox1")
  // Si une ville est sélectionnée
  if (checkBox1.value !== null && checkBox1.value.length > 1) {
    checkBox1.parentNode.removeAttribute("data-error")
    checkBox1.parentNode.removeAttribute("data-error-visible")
    isCheckbox1Correct = true
  }
  // Si une ville n'est pas sélectionnée
  else {
    checkBox1.parentNode.setAttribute("data-error", "Vous devez accepter les conditions d'utilisation.")
    checkBox1.parentNode.setAttribute("data-error-visible", "true")
    isCheckbox1Correct = false
  }

}