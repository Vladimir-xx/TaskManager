
// ==========================Registration==============================

checkAccess();

let logo = document.querySelector('.logo-header');
let pars = JSON.parse(localStorage.getItem("credentials"));

logo.innerHTML = pars.name;

function checkAccess() {
    if (!isAuthenticated()) {
        window.location = 'registration.html';
    }
}

function isAuthenticated() {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    return !!credentials;  // два восклицательных знака преобразуют что либо в boolean , т.е. если есть что то в credentials то будет true, нету то false
}

let buttonIMG = document.querySelector('.Img-header-logo').onclick = () => {
    localStorage.removeItem("credentials");
    checkAccess();

};

