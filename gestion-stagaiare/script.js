let tables = document.getElementById('stagaiare-table')
let btnSearch = document.getElementById('btnSearch')
let ajouter = document.getElementById('ajouter')
let module = document.getElementById('module')
let inpSearch = document.getElementById('inpSearch')
let tbody = document.getElementById('tbody')
let inpJour = document.getElementById('inpJour')

const stagaiare = [
    {"id":1,"nom":"MRIBEH","prenom":"Hiba"},
    {"id":2,"nom":"ELADNANI","prenom":"Naoual"},
    {"id":3,"nom":"KHALID","prenom":"Liela"},
    {"id":4,"nom":"HAMZAOUI","prenom":"Meryem"},
    {"id":5,"nom":"OUADE","prenom":"Ibtissam"},
    {"id":6,"nom":"KARAMAT","prenom":"Iman"}
]

for(let i = 0;i < stagaiare.length;i++){
    let tr = document.createElement('tr')
    let tdNom = document.createElement('td');
    let tdPrenom = document.createElement('td');
    let tdId = document.createElement('td');

    let id = document.createTextNode(stagaiare[i].id);
    let Nom = document.createTextNode(stagaiare[i].nom);
    let Prenom = document.createTextNode(stagaiare[i].prenom);

    tdId.appendChild(id);
    tdNom.appendChild(Nom);
    tdPrenom.appendChild(Prenom);
    tr.appendChild(tdId)
    tr.appendChild(tdNom)
    tr.appendChild(tdPrenom)
    tbody.appendChild(tr)

    console.log('okkkkk')
}


function search(){
    for(let j = 0;j < stagaiare.length;j++){
        if(stagaiare[j].nom.includes(this.value)){

            tbody += `
                <tr>
                <td>${j}</td>
                <td>${stagaiare[j].id}</td>
                <td>${stagaiare[j].nom}</td>
                <td>${stagaiare[j].prenom}</td>
            `
            console.log(j)
            
        }else{
            inpSearch.style.boxShadow = '0px 0px 0px 5px red'
        }
    }
}

// document.addEventListener('DOMContentLoaded', module())

// function module(){
//     const mod = new XMLHttpRequest();
//     mod.open("GET","module.json",true);
//      mod.send()
// }


const Listmodule = ["HTML","JAVASCRIPT","CSS","Base de donnée","PHP"]

function modules(){
    for(let x = 0; x < Listmodule.length; x++){
        let option = document.createElement('option')

        let mod = document.createTextNode(Listmodule[x]);

        option.appendChild(mod);
        module.appendChild(option)
    }
}

// function ajouter(){
//     for(let y = 0; y < stagaiare.length; y++){
//         let tdmodule = document.createElement('td');
//         let module = document.createTextNode(option.value);

//         tdmodule.appendChild(module);
//         tr.appendChild(tdmodule)
//         tbody.appendChild(tr)
//     } 
// }

function ajouter(){
    let trmodule = document.createElement('tr');
    let tdmodule = document.createElement('td');
    let module = document.createTextNode(inpJour.value);

    tdmodule.appendChild(module);
    trmodule.appendChild(tdmodule)
    tbody.appendChild(trmodule)
}