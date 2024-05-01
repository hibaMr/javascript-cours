//declaration

let submit = document.getElementById('submit')
let reset = document.getElementById('reset')

let table_employe = document.getElementById('table-employe')
let tbody = document.getElementById('tbody')

let input = document.getElementsByTagName('input')

let para = document.getElementsByClassName('para')

let listEmploye = [];

class ObjectEmploye {
    constructor(Id,nom,prenom,ages,adresse,supprimer,modiffier){
        this.Id = Id;
        this.nom = nom;
        this.prenom = prenom;
        this.ages = ages;
        this.adresse = adresse;
        this.supprimer = supprimer;
        this.modiffier = modiffier;
    }
}




submit.onclick =()=>{
    let id = document.getElementById('id').value;
    let names = document.getElementById('name').value;
    let last_name = document.getElementById('last-name').value;
    let age = document.getElementById('age').value;
    let adress = document.getElementById('adress').value;
    
    if(id!=''&& names!='' && last_name!='' && age!='' && adress!=''){
        let objectEmploye = new ObjectEmploye(id,names,last_name,age,adress,'<button id="supprimer" class="btn btn-danger" onclick="supprimer(this)">supprimer</button>','<button id="modiffier" class="btn btn-primary">modiffier</button>');

        listEmploye.push(objectEmploye)
        console.log(listEmploye)
        ajouterTable()
        
    }else{
        document.getElementById('error').innerText = 'Error while submitting!'
        document.getElementById('error').classList.add('badge-success')
        for(let x = 0;x < input.length ; x++){
            input[x].classList.add('border-danger')
            for(let m = 0;m < para.length ; m++){
            para[m].innerText = 'must be atleast 3 characters long'
            }
        }
    }
}


function ajouterTable(){
    let data;
    for(let i = 0;i < listEmploye.length;i++){
        let couleurText = 'text-light';
        if (listEmploye[i].ages < 18){
            couleurText ='text-danger';
        }else if (listEmploye[i].ages > 18){
            couleurText ='text-success';
        }   
        data += `<tr>
                    <td class="text-light bg-dark">${listEmploye[i].Id}</td>
                    <td class="text-light bg-dark">${listEmploye[i].nom}</td>
                    <td class="text-light bg-dark ">${listEmploye[i].prenom}</td>
                    <td class="bg-dark ${couleurText}">${listEmploye[i].ages}</td>
                    <td class="text-light bg-dark">${listEmploye[i].adresse}</td>
                    <td class="text-light bg-dark ">${listEmploye[i].supprimer}</td>
                    <td class="text-light bg-dark ">${listEmploye[i].modiffier}</td>
                </tr>`
    }
    tbody.innerHTML = data;
}



document.addEventListener("DOMContentLoaded",chargement);
let departement = [];
function chargement(){
    let request = new XMLHttpRequest();
    request.open("GET","departement.json",true);

    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let responseData = JSON.parse(this.responseText);
            departement = responseData;
            let content = '';
            for(let i = 0;i < departement.length;i++){
                content += `<option value="${departement[i].informatiques}">
                                ${departement[i].informatiques}
                            </option>
                            <option value="${departement[i].gestions}">
                                ${departement[i].gestions}
                            </option>
                            <option value="${departement[i].administrations}">
                                ${departement[i].administrations}
                            </option>

                                      `
                            
            }
            document.getElementById('depa').innerHTML = content;
        }
    }
    request.send();
}

function supprimer(test){
    // for(let i = 0;i < listEmploye.length;i++){
    //     listEmploye.splice(listEmploye[i],1)
    // }
    // ajouterTable()
    
    console.log(test.currentTarget)
}



    

    