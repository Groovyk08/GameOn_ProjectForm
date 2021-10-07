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

// Fermeture du formulaire 
function closeForm() {
  modalbg.style.display = "none";
}

// Confirmation du booking 
const booking = document.querySelectorAll("booking-confirmed");

// ID des éléments du formulaire 
document.getElementById("first"); addEventListener("input", checkFirstName)
document.getElementById("last"); addEventListener("input", checkLastName)
document.getElementById("email"); addEventListener("input", checkEmail)
document.getElementById("birhdate"); addEventListener("click", checkBirhdate)
document.getElementById("quantity"); addEventListener("click select", checkQuantity)
document.getElementsByClassName("location"); addEventListener("change", checkCity)
document.getElementById("checkbox1"); addEventListener("click", checkBox1)



// Validation du prénom
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

// Validation du nom
let isLastNameCorrect = false;

function checkLastName() {
  let lastName = document.getElementById("last")
  // Si le nom est correct
  if (lastName.value != null && lastName.value.length > 1) {
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

// Validation de l'adresse mail
let isEmailCorrect = false;

function checkEmail() {
  let email = document.getElementById("email")

  // REGEX pour s'assurer la bonne saisi de l'adresse mail
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Si l'adresse mail est correcte
  if (email.value != null && email.value.length > 1) {
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

// Validation de la date de naissance
let isBirthdateCorrect = false;

function checkBirhdate() {
  let birhdate = document.getElementById("birthdate")

  // Si la date de naissance est correcte
  if (birhdate.value != null && birhdate.value.length > 1) {
    birhdate.parentNode.removeAttribute("data-error")
    birhdate.parentNode.removeAttribute("data-error-visible")
    isBirthdateCorrect = true
  }

  // Si la date de naissance est incorrecte
  else {
    birhdate.parentNode.setAttribute("data-error", "Vous devez entrer votre date de naissance.")
    birhdate.parentNode.setAttribute("data-error-visible", "true")
    isBirthdateCorrect = false
  }

}

// Validation du nombre de participation à des tournois
let isQuantityCorrect = false;

function checkQuantity() {
  let quantity = document.getElementById("quantity")

  // Si la valeur est correcte
  if (quantity.value != null) {
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

// Validation des villes de tournoi
let isCityCorrect = false;

function checkCity() {
  let city = document.querySelectorAll('input[name="location"]')

  // Si une ville est sélectionnée
  if (city.checked == true) {
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

// Validation des conditions d'utilisation
let isCheckbox1Correct = false;

function checkBox1() {
  let checkBox1 = document.getElementById("checkbox1")

  // Si une ville est sélectionnée
  if (checkBox1.checked == true) {
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

// Soumettre le formulaire

function validate() {

  // Si le formulaire est rempli correctement
  if (isFirstNameCorrect && isLastNameCorrect && isEmailCorrect && isBirthdateCorrect && isQuantityCorrect && isCityCorrect && isCheckbox1Correct == true) {
    // Confirmation du booking 
    booking.style.display = "block";
    return true;
  }
  // Sinon 
  else {
    alert("Réservation interrompue, verifiez vos informations.");
    return false;
  }
}
