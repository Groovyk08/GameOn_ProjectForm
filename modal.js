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
const booking = document.getElementById("booking-confirmed");

//Fermeture du popup booking 
function closeBooking() {
  booking.style.display = "none"
}

// ID des éléments du formulaire 
document.getElementById("first");
document.getElementById("last");
document.getElementById("email");
document.getElementById("birhdate");
document.getElementById("quantity");
document.getElementsByName("location");
document.getElementById("checkbox1");
const locations = document.getElementsByName("location");
locations.forEach(location => {
  location.addEventListener("change", checkCity)
})



// Validation du prénom
function checkFirstName() {
  let isFirstNameCorrect = false;
  let firstName = document.getElementById("first")
  const regexfname = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$/;
  // Si le prénom est correct
  if (firstName.value !== null && firstName.value.length > 1 && regexfname.test(firstName.value)) {
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
  const regexlname = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$/;
  // Si le nom est correct
  if (lastName.value !== null && lastName.value.length > 1 && regexlname.test(lastName.value)) {
    lastName.parentNode.removeAttribute("data-error")
    lastName.parentNode.removeAttribute("data-error-visible")
    isLastNameCorrect = true
  }
  // Si le nom est incorrect
  else {
    lastName.parentNode.setAttribute("data-error", "Vous devez entrer 2 caractères ou plus pour le champ du nom.")
    lastName.parentNode.setAttribute("data-error-visible", "true")
    isLastNameCorrect = false
  }
  return isLastNameCorrect
}

// Validation de l'adresse mail
function checkEmail() {
  let isEmailCorrect = false;
  let email = document.getElementById("email")
  const regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Si l'adresse mail est correcte
  if (email.value !== null && email.value.length > 1 && regexemail.test(email.value)) {
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
  console.log(birhdate.value)
  //const splited = birhdate.split("/")
  //const americanDate = splited[1]+"/"+splited[0]+"/"+splited[2]
  const now = new Date()
  const date = new Date(birhdate.value)
  console.log(now)
  console.log(date)
  // Si la date de naissance est correcte
  if (birhdate.value !== null && birhdate.value.length > 1 && now.getTime() - date.getTime() > 567648000000 && now.getTime()- date.getTime()< 3153600000000) {
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
  const regexQuantity = /^[0-9]\d*$/;
  // Si la valeur saisie est correcte
  if (quantity.value.length > 0 && regexQuantity.test(quantity.value)) {
    quantity.parentNode.removeAttribute("data-error")
    quantity.parentNode.removeAttribute("data-error-visible")
    isQuantityCorrect = true
  }

  // Si la valeur saisie est incorrecte
  else {
    quantity.parentNode.setAttribute("data-error", "Vous devez indiquer une valeur numérique comprise entre 0 ou plus.")
    quantity.parentNode.setAttribute("data-error-visible", "true")
    isQuantityCorrect = false
  }
  return isQuantityCorrect
}

// Validation des villes de tournoi
function checkCity() {
  let isCityCorrect = false;
  let city = document.getElementsByName("location")

  // Vérification qu'une ville est bien sélectionnée dans le tableau 
  city.forEach(c => {

    if (c.checked == true) {

      isCityCorrect = true
    }
  })
  // Si une ville est sélectionnée
  if (isCityCorrect) {
    city[0].parentNode.removeAttribute("data-error")
    city[0].parentNode.removeAttribute("data-error-visible")
  }
  // Si une ville n'est pas sélectionnée
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

  // Si les conditions d'utilisation sont acceptées
  if (checkBox1.checked == true) {
    checkBox1.parentNode.removeAttribute("data-error")
    checkBox1.parentNode.removeAttribute("data-error-visible")
    isCheckbox1Correct = true
  }

  // Si les conditions d'utilisation ne sont pas acceptées
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
  const isFirstNameCorrect = checkFirstName()
  const isLastNameCorrect = checkLastName()
  const isEmailCorrect = checkEmail()
  const isBirthdateCorrect = checkBirhdate()
  const isQuantityCorrect = checkQuantity()
  const isCityCorrect = checkCity()
  const isCheckbox1Correct = checkBox1()
  const booking = document.getElementById("booking-confirmed");
  var form = document.getElementsByName('reserve')[0];

  // Si le formulaire est rempli correctement
  if (isFirstNameCorrect && isLastNameCorrect && isEmailCorrect && isBirthdateCorrect && isQuantityCorrect && isCityCorrect && isCheckbox1Correct == true) {
    modalbg.style.display = "none";

    // Confirmation du booking 
    booking.style.display = "block";

    // Reset du formulaire
    form.reset();
  }
}
