// ==========================Registration==============================

checkAccess();
init();
getData();


const credentialsInit = JSON.parse(localStorage.getItem('credentials'));


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
        for(let key in data){

            let userTask  = data[key];

            name();
            function name(){
                if(userTask.login == credentialsInit.name ){
                    console.log('login valid ');
                    document.querySelector('.project2').innerHTML = userTask.projects[0].name;
                    document.querySelector('.nameTask').innerHTML = userTask.projects[0].tasks[0].name;
                    document.querySelector('.textTask').innerHTML = userTask.projects[0].tasks[0].description;

                }
            }

        }

    });

}
//===============================================Add-Project================================================
let addProject  = document.querySelector('.addplus').onclick = function add() {

            let project = document.querySelector('.projects-container');
            project.innerHTML += '  <div class="projects-container">\n' +
                '\n' +
                '                    <div class="dropdown dropMenu">\n' +
                '                        <a href="#" class="project2" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"\n' +
                '                           aria-expanded="false">Project</a>\n' +
                '                        </a>\n' +
                '\n' +
                '                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">\n' +
                '                            <a class="dropdown-item" href="#">Add Task</a>\n' +
                '                            <a class="dropdown-item" href="#">Delete Project</a>\n' +
                '\n' +
                '                        </div>\n' +
                '                    </div>'


}

