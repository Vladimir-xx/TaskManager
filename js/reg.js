checkAccess();

document.querySelector(".btn").addEventListener('click', info);

function info() {

    let registr = {};
    registr.name = document.querySelector('.nameInput').value;
    registr.password = document.querySelector('.passworInput').value;

    jsonStr = JSON.stringify(registr);
    localStorage.setItem('credentials', jsonStr);
    let returnObj = JSON.parse(localStorage.getItem('credentials'));
    window.location = 'index.html';
    console.log(returnObj);

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
