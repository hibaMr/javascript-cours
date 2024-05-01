// //declaration

// let stagiaires = []
// let list_modules = []
// let list_branches = []

// //event

// document.addEventListener("DOMContentLoaded",chargement);

// //functions
// function chargement(){
//     let request = new XMLHttpRequest();
//     request.open("GET","list-stagiaires.json",true);

//     request.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             let responseData = JSON.parse(this.responseText);
//             branches = responseData.branches;
//             modules = responseData.modules;
//             let list_modules = '';
//             for(let i = 0;i < list_modules.length;i++){
//                 list_modules += `<option value="${modules[i].module}">
//                                             ${modules[i].module}
//                                             ${modules[i].module}
//                                             ${modules[i].module}
//                                       </option>`
//             }
//             let list_branches = '';
//             for(let i = 0;i < list_branches.length;i++){
//                 list_branches += `<option value="${branches[i].branche}">
//                                             ${branches[i].branche}
//                                             ${branches[i].branche}
//                                             ${branches[i].branche}
//                                             ${branches[i].branche}
//                                       </option>`
//             }
//             document.getElementById('module').innerHTML = list_modules;
//             document.getElementById('brenche').innerHTML = list_branches;
//         }
//     }
//     request.send();

//     console.log('okkkkkkkkkkkk')


// }


let activites_stagiaires = [];
let activites = [];
let stagiaires = [];
let search_stagiaires ;


document.addEventListener("DOMContentLoaded",chargement);
//functions
function chargement(){
    let request = new XMLHttpRequest();
    request.open("GET","activites.json",true);

    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let responseData = JSON.parse(this.responseText);
            activites = responseData.activites;
            stagiaires = responseData.stagiaires;
            let activites_content = '';
            for(let i = 0;i < activites.length;i++){
                activites_content += `<option value="${activites[i].libelle}">
                                            ${activites[i].libelle}
                                      </option>`
            }
            document.getElementById('module').innerHTML = activites_content;
        }
    }
    request.send();

}