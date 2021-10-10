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
document.getElementById("first"); //addEventListener("input", checkFirstName)
document.getElementById("last"); //addEventListener("input", checkLastName)
document.getElementById("email"); //addEventListener("input", checkEmail)
document.getElementById("birhdate"); //addEventListener("click", checkBirhdate)
document.getElementById("quantity"); //addEventListener("click select", checkQuantity)
document.getElementsByName("location"); //addEventListener("change", checkCity)
document.getElementById("checkbox1"); //addEventListener("click", checkBox1)

const locations = document.getElementsByName("location");
locations.forEach(location => {
  location.addEventListener("change", checkCity)
})



// Validation du prénom


function checkFirstName() {
  let isFirstNameCorrect = false;
  let firstName = document.getElementById("first")
  // Si le prénom est correct
  if (firstName.value !== null && firstName.value.length > 1) {
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
  return isFirstNameCorrect
}

// Validation du nom


function checkLastName() {
  let isLastNameCorrect = false;
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
  return isLastNameCorrect
}

// Validation de l'adresse mail


function checkEmail() {
  let isEmailCorrect = false;
  let email = document.getElementById("email")

  // REGEX pour s'assurer la bonne saisi de l'adresse mail
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
  return isEmailCorrect
}

// Validation de la date de naissance


function checkBirhdate() {
  let isBirthdateCorrect = false;
  let birhdate = document.getElementById("birthdate")

  // Si la date de naissance est correcte
  if (birhdate.value !== null && birhdate.value.length > 1) {
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
  return isBirthdateCorrect
}

// Validation du nombre de participation à des tournois


function checkQuantity() {
  let isQuantityCorrect = false;
  let quantity = document.getElementById("quantity")
  console.log(quantity.value.length)
  // Si la valeur est correcte
  if (quantity.value.length > 0) {
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
  return isQuantityCorrect
}

// Validation des villes de tournoi


function checkCity() {
  let isCityCorrect = false;
  let city = document.getElementsByName("location")
  city.forEach(c => {
    
    // Si une ville est sélectionnée
    if (c.checked == true) {

      isCityCorrect = true
    }


  })
  if (isCityCorrect) {
    city[0].parentNode.removeAttribute("data-error")
    city[0].parentNode.removeAttribute("data-error-visible")
  }
  else {
    city[0].parentNode.setAttribute("data-error", "Vous devez choisir une ville.")
    city[0].parentNode.setAttribute("data-error-visible", "true")
  }
  return isCityCorrect
}

// Validation des conditions d'utilisation


function checkBox1() {
  let isCheckbox1Correct = false;
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
  return isCheckbox1Correct
}

// Soumettre le formulaire

function validate(e) {
  e.preventDefault()
  isFirstNameCorrect = checkFirstName()
  isLastNameCorrect = checkLastName()
  isEmailCorrect = checkEmail()
  isBirthdateCorrect = checkBirhdate()
  isQuantityCorrect = checkQuantity()
  isCityCorrect = checkCity()
  isCheckbox1Correct = checkBox1()
  // Si le formulaire est rempli correctement
  if (isFirstNameCorrect && isLastNameCorrect && isEmailCorrect && isBirthdateCorrect && isQuantityCorrect && isCityCorrect && isCheckbox1Correct == true) {
    // Confirmation du booking 
    //booking.style.display = "block";
    alert("Merci ! Votre réservation a bien été prise en compte")
    
  }

}
