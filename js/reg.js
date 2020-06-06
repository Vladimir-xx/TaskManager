// ===========================================JSONInfo============================================
checkAccess();

function info(e) {
    e.preventDefault();
    let registr = {};
    registr.name = document.querySelector('.nameInput').value;
    registr.password = document.querySelector('.password').value;
    let jsonStr = JSON.stringify(registr);
    localStorage.setItem('credentials', jsonStr);
    window.location = 'index.html';
}

// window.onload = function () {
//     document.querySelector(".passworInput1").onchange = validatePassword;
//     document.querySelector(".passworInput2").onchange = validatePassword;
// };

function init() {
    const form = document.querySelector('form');
    form.onsubmit = info;
    document.querySelector('.passwordConfirm').onchange = validatePassword;

}

function validatePassword() {
    let conformPassElement = document.querySelector('.passwordConfirm');
    let passConfirm = conformPassElement.value;
    let pass = document.querySelector('.password').value;
    if (pass !== passConfirm) {
        conformPassElement.setCustomValidity('Пароль не верный');
    } else {
        conformPassElement.setCustomValidity('');
    }
}

function checkAccess() {
    if (isAuthenticated()) {
        window.location = 'index.html';
    }
    init();
}

function isAuthenticated() {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    return !!credentials;  // два восклицательных знака преобразуют что либо в boolean , т.е. если есть что то в credentials то будет true, нету то false
}

