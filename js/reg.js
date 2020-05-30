document.querySelector(".btn").addEventListener('click', info);

function info() {

    let registr = {};
    registr.name = document.querySelector('.nameInput').value;
    registr.password = document.querySelector('.passworInput').value;

    jsonStr = JSON.stringify(registr);
    localStorage.setItem("credentials", jsonStr);
    let returnObj = JSON.parse(localStorage.getItem("credentials"));
    window.location = 'index.html'
    console.log(returnObj);

}
