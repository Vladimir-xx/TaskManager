// ===========================================JSONInfo============================================
checkAccess();


let form = document.addEventListener('submit', info);

function info() {

    let registr = {};
    registr.name = document.querySelector('.nameInput').value;
    registr.password1 = document.querySelector('.passworInput1').value;
    registr.password2 = document.querySelector('.passworInput2').value;

    let jsonStr = JSON.stringify(registr);
    localStorage.setItem('credentials', jsonStr);
    // let returnObj = JSON.parse(localStorage.getItem('credentials'));

}
window.onload = function () {
    document.querySelector(".passworInput1").onchange = validatePassword;
    document.querySelector(".passworInput2").onchange = validatePassword;
}
function validatePassword() {
    var pass2 = document.querySelector(".passworInput2").value;
    var pass1 = document.querySelector(".passworInput1").value;
    if (pass1 != pass2) {
        document.querySelector(".passworInput2").setCustomValidity("Пароль не верный");
    } else {
        document.querySelector(".passworInput2").setCustomValidity('');
    }
}

function checkAccess() {
    if (isAuthenticated()) {
        window.location = 'index.html';
    }
}

function isAuthenticated() {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    return !!credentials;  // два восклицательных знака преобразуют что либо в boolean , т.е. если есть что то в credentials то будет true, нету то false
}

