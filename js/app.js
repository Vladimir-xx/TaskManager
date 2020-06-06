// ==========================Registration==============================

checkAccess();
init();

function init() {
    let logo = document.querySelector('.logo-header');
    let pars = JSON.parse(localStorage.getItem('credentials'));
    logo.innerHTML = pars.name;

    document.querySelector('.exit').onclick = () => {
        localStorage.removeItem('credentials');
        checkAccess();
    };

    // getData();
}

function checkAccess() {
    if (!isAuthenticated()) {
        window.location = 'registration.html';
    }

}

function isAuthenticated() {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    return !!credentials;
}

// через fetch
function getData() {
    fetch('BD.json').then(response => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
}

