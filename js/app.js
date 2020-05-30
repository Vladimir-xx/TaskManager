
// ==========================Registration==============================

let logo = document.querySelector('.logo-header');

let localValue = localStorage.getItem('credentials');
let pars = JSON.parse(localStorage.getItem("credentials"));

logo.innerHTML = pars.name;


