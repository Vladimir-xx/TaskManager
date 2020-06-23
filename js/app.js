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

        $('.projects-container').on('click', '.project2', function (event) {

            renderTasks(user.projects, event.target.dataset.idProject);

        });


        console.log(user.projects)

    });

}



//====================================================Validation-Project$$login=======================================
function findUser(users) {
    return users.find(el => el.login === credentialsInit.name);
}

//===================================================Maping-Projects-add+=============================================
function mapProjects(projects) {
    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.innerHTML = '';
    projects.forEach(function (project, index, pArr) {


        let menu = document.createElement('div');
        menu.innerHTML = ` <div class="dropMenu">
                        <a href="#"
                         data-id-project="${project.id}"
                         class="project2"  
                            >  ${project.name}   </a>
                        </a>

                        <!--<div class="dropdown-menu" aria-labelledby="dropdownMenuLink"  >-->
                            <!--<a class="dropdown-item" href="#">Add Task</a>-->
                            <!--<a class="dropdown-item" href="#">Delete Project</a>-->

                        <!--</div>-->
                    </div>`;
        projectsContainer.appendChild(menu);


    })
}


//===============================================Maping-Task-add================================================

function renderTasks(projects, idProject) {

    console.log(projects, idProject)

    const tasksContainer = document.querySelector('.task-add');

    const project = projects.find(item => +item.id === +idProject);


    console.log('project', project)

    tasksContainer.innerHTML = '';

    project.tasks.forEach((task, i, array) => {

        let newTask = document.createElement('div');
        newTask.innerHTML = `<div class="task-box">
            <div class="row justify-content-center ">
            <div class="col-10 conteinerTask1 row justify-content-between">
            <p class="nameTask"> ${task.name}   номер таски: ${i}</p>
        <div class="navigationTask ">
            <a href="#">
            <svg class="Capa_1" enable-background="new 0 0 512.002 512.002" height="20px"
        viewBox="0 0 512.002 512.002" width="20px" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path d="m448.362 63.64-63.64-63.64-74.246 74.247 53.034 137.886z"
        fill="#ff3e3a"/>
            <path d="m448.362 63.64-116.672 116.673 106.066 21.213 74.246-74.246z"
        fill="#cc3245"/>
            <path d="m34.216 406.504-34.216 105.497 112.284-69.856z" fill="#373e9f"/>
            <path d="m.002 512.001 105.497-34.215-14.428-56.854z" fill="#340d66"/>
            <path d="m188.374 366.055-127.279-42.426-26.879 82.875 35.641 35.641z"
        fill="#ffe7b5"/>
            <path d="m69.857 442.145 35.642 35.641 82.874-26.878-21.213-106.066z"
        fill="#ffd06a"/>
            <path
        d="m124.734 387.269 63.639 63.639 249.383-249.382-63.64-63.639-166.169 81.316z"
        fill="#ff9a27"/>
            <path d="m41.266 185.758h352.679v90h-352.679z" fill="#ffb820"
        transform="matrix(.707 -.707 .707 .707 -99.435 221.458)"/>
            </g>
            </svg>
            </a>
            <a href="#">
            <svg height="20px" viewBox="-43 0 512 512" width="20px"
        xmlns="http://www.w3.org/2000/svg">
            <path
        d="m269.644531 88.976562h-113.0625c-8.285156 0-15-6.714843-15-15v-45.933593c0-15.460938 12.570313-28.042969 28.023438-28.042969h87.011719c15.453124 0 28.027343 12.582031 28.027343 28.042969v45.933593c0 8.285157-6.71875 15-15 15zm-98.0625-30h83.0625v-28.976562h-83.0625zm85.035157-28.976562h.007812zm0 0"
        fill="#bec3d2"/>
            <path
        d="m381.691406 122.664062c-2.839844-3.078124-6.835937-4.828124-11.023437-4.828124h-315.109375c-4.1875 0-8.1875 1.75-11.027344 4.828124-2.839844 3.078126-4.261719 7.203126-3.925781 11.378907l27.125 335.394531c1.929687 23.867188 22.183593 42.5625 46.105469 42.5625h198.550781c23.925781 0 44.175781-18.695312 46.105469-42.5625l27.125-335.394531c.339843-4.175781-1.085938-8.300781-3.925782-11.378907zm0 0"
        fill="#bec3d2"/>
            <path
        d="m55.558594 117.835938c-4.1875 0-8.1875 1.75-11.027344 4.828124-2.839844 3.078126-4.261719 7.203126-3.925781 11.378907l27.125 335.394531c1.929687 23.867188 22.183593 42.5625 46.105469 42.5625h99.277343v-394.164062zm0 0"
        fill="#dce1eb"/>
            <path
        d="m425.453125 128.085938-19.636719-58.855469c-2.042968-6.125-7.773437-10.253907-14.226562-10.253907h-356.957032c-6.453124 0-12.1875 4.128907-14.226562 10.253907l-19.636719 58.855469c-1.523437 4.574218-.7578122 9.605468 2.0625 13.515624 2.816407 3.914063 7.347657 6.230469 12.167969 6.230469h396.222656c4.824219 0 9.351563-2.316406 12.171875-6.230469 2.816407-3.910156 3.582031-8.941406 2.058594-13.515624zm0 0"
        fill="#dce1eb"/>
            <path
        d="m287.332031 465.976562c-.261719 0-.523437-.003906-.792969-.019531-8.269531-.429687-14.628906-7.488281-14.199218-15.761719l14.085937-270.398437c.429688-8.273437 7.472657-14.640625 15.757813-14.199219 8.273437.429688 14.628906 7.488282 14.199218 15.761719l-14.082031 270.398437c-.417969 8.007813-7.042969 14.21875-14.96875 14.21875zm0 0"
        fill="#9196aa"/>
            <path
        d="m139.554688 465.976562c-7.910157 0-14.527344-6.1875-14.960938-14.183593l-14.753906-270.398438c-.449219-8.273437 5.890625-15.34375 14.160156-15.792969 8.265625-.453124 15.347656 5.886719 15.796875 14.160157l14.75 270.398437c.453125 8.273438-5.886719 15.34375-14.160156 15.792969-.277344.015625-.554688.023437-.832031.023437zm0 0"
        fill="#bec3d2"/>
            <path
        d="m213.277344 465.976562c-8.28125 0-15-6.714843-15-15v-270.398437c0-8.285156 6.71875-15 15-15 8.285156 0 15 6.714844 15 15v270.398437c0 8.285157-6.714844 15-15 15zm0 0"
        fill="#9196aa"/>
            <path
        d="m198.277344 180.578125v270.398437c0 8.226563 6.628906 14.902344 14.835937 14.992188v-300.382812c-8.207031.089843-14.835937 6.761718-14.835937 14.992187zm0 0"
        fill="#bec3d2"/>
            <path
        d="m171.582031 58.976562v-28.976562h41.53125v-30h-43.507812c-15.453125 0-28.023438 12.582031-28.023438 28.042969v45.933593c0 8.285157 6.714844 15 15 15h56.53125v-30zm0 0"
        fill="#dce1eb"/>
            <path
        d="m36.289062 58.976562c-6.453124 0-12.1875 4.128907-14.230468 10.253907l-19.632813 58.855469c-1.523437 4.574218-.757812 9.605468 2.0625 13.515624 2.816407 3.914063 7.347657 6.230469 12.167969 6.230469h198.109375v-88.855469zm0 0"
        fill="#f2f6fc"/>
            </svg>
            </a>
            </div>
            </div>
            </div>
            <div class="row justify-content-center">
            <div class="col-10 conteinerTask2  ">
            <p class="textTask "> ${task.description}</p>
        </div>
        </div>`;

        tasksContainer.appendChild(newTask);
    });

};

//===============================================Add-Project================================================

$('.add-project-btn').on('click', function () {
    addProject();
});


function addProject() {
    const name = document.querySelector('#project-name').value;
    //========================================RandomID=======================================================
    const id = getRandomId();
    user.projects.push(new Project(id, name));

    mapProjects(user.projects);

    $('#add-project').modal('hide');
}

function getRandomId() {
    return new Date().getTime();
}


//=============================================class-Project-Task-OOP=========================================
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
