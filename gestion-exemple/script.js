class Activite_stagiaire {
    constructor(id,nom,prenom,activite,nombre_jours,date_activite,valide){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.activite = activite;
        this.nombre_jours = nombre_jours;
        this.date_activite = date_activite;
        this.valide = valide;
    }
}

//declaration
let activites_stagiaires = [];
let activites = [];
let stagiaires = [];
let search_stagiaires ;

//events
document.addEventListener("DOMContentLoaded",chargement);
document.getElementById('btnSearch').addEventListener("click",rechercher);
document.getElementById('ajouter').addEventListener("click",ajouterlist);
document.getElementById('supprimer').addEventListener("click",supprimerlist);
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
            document.getElementById('activites-select').innerHTML = activites_content;
        }
    }
    request.send();

}

function rechercher(e){
    e.preventDefault();
    search_stagiaires = stagiaires.find(function(itemValue){
        return itemValue.nom === document.getElementById('search-input').value;

    })

    console.log(search_stagiaires)
}

function ajouterlist(e){
    e.preventDefault();
    let id = search_stagiaires.id,
        nom = search_stagiaires.nom,
        prenom = search_stagiaires.prenom,
        activite = document.getElementById('activites-select').value,
        nombre_jours = document.getElementById('jours-input').value,
        valide = document.getElementById('valide-input').checked,
        date_activite = document.getElementById('date-input').value;
    let activite_st = new Activite_stagiaire(id,nom,prenom,activite,nombre_jours,date_activite,valide)
    activites_stagiaires.push(activite_st);
    console.log(activites_stagiaires)
    afficher_activites()
}

function afficher_activites(){
    let content_table ='';
    for(let x = 0;x < activites_stagiaires.length;x++){
        content_table += `
                    <tr>
                        <td>${activites_stagiaires[x].id}</td>
                        <td>${activites_stagiaires[x].nom}</td>
                        <td>${activites_stagiaires[x].prenom}</td>
                        <td>${activites_stagiaires[x].activite}</td>
                        <td>${activites_stagiaires[x].nombre_jours}</td>
                        <td>${activites_stagiaires[x].date_activite}</td>
                    </tr>
        `
        
    }
    document.getElementById('tbody').innerHTML = content_table;
    let activite_html = document.getElementById('stagaiare-table');
    for(let y = 0;y < activite_html.rows.length;y++){
        activite_html.rows[y].onclick = function(){
            for(let r =0;r<activite_html.rows.length;r++){
                activite_html.rows[r].classList.remove('table-success')
            }
            activite_html.rows[y].classList.add('table-success')
        }
    }
}

function supprimerlist(){
    let tbody = document.getElementById('tbody');
    let activite_html = document.getElementById('stagaiare-table');
    for(let y = 0;y < activite_html.rows.length;y++){
        activite_html.rows[y].onclick = function(){
            for(let r =0;r<activite_html.rows.length;r++){
                activite_html.rows[r].classList.remove('table-success')
                
            }
            activite_html.rows[y].classList.add('table-success')
            tbody.removeChild(activite_html.rows[y])
        }
    }
}