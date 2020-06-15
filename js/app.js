// ==========================Registration==============================

checkAccess();
init();

const credentialsInit = JSON.parse(localStorage.getItem('credentials'));
let user;

function init() {
    let logo = document.querySelector('.logo-header');
    let pars = JSON.parse(localStorage.getItem('credentials'));
    logo.innerHTML = pars.name;

    document.querySelector('.exit').onclick = () => {
        localStorage.removeItem('credentials');
        checkAccess();
    };

    getData();
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
    }).then((users) => {

        user = findUser(users);

        mapProjects(user.projects);

        // for (let key in data) {
        //
        //     let userTask = data[key];
        //     name();
        //     function name() {
        //         if (userTask.login == credentialsInit.name) {
        //             console.log('login valid ');
        //             document.querySelector('.project2').innerHTML = userTask.projects[0].name;
        //             document.querySelector('.nameTask').innerHTML = userTask.projects[0].tasks[0].name;
        //             document.querySelector('.textTask').innerHTML = userTask.projects[0].tasks[0].description;
        //
        //         }
        //     }
        // }

    });

}

function findUser(users) {
    return users.find(el => el.login === credentialsInit.name);
}


function mapProjects(projects) {
    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.innerHTML = '';
    projects.forEach(project => {
        let menu = document.createElement('div');
        menu.innerHTML = ` <div class="dropdown dropMenu">
                        <a href="#"
                         data-id-project="${project.id}"
                         class="project2" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false" >  ${project.name}   </a>
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink"  >
                            <a class="dropdown-item" href="#">Add Task</a>
                            <a class="dropdown-item" href="#">Delete Project</a>

                        </div>
                    </div>`;
        projectsContainer.appendChild(menu);
    })
}


//===============================================Add-Project================================================

document.querySelector('.add-project-btn').onclick = addProject;


function addProject() {

    const name = document.querySelector('#project-name').value;

    // let newProject = {
    //     id: 123423,
    //     name: name,
    //     tasks: []
    // };
    //


    const id = getRandomId();
    user.projects.push(new Project(id, name));

    mapProjects(user.projects);

    $('#add-project').modal('hide');
}

function getRandomId() {
    return new Date().getTime();
}


class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.tasks = [];
    }
}

class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
