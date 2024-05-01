//declaration
let code_input = document.getElementById('code-input');
let nom_input = document.getElementById('nom-input');
let prenom_input = document.getElementById('prenom-input');
let branche_select = document.getElementById('branche-select');
let html_input = document.getElementById('html-input');
let css_input = document.getElementById('css-input');
let java_input = document.getElementById('java-input');
let femme_input = document.getElementById('femme-input');
let homme_input = document.getElementById('homme-input');

let ajouter = document.getElementById('ajouter');
let vider = document.getElementById('vider');
let supprimer = document.getElementById('supprimer');
let editer = document.getElementById('editer');
let enregistrer = document.getElementById('enregistrer')

let tbody = document.getElementById('tbody')


class Stagiaires {
    constructor(code,nom,prenom,branche){
        this.code = code;
        this.nom = nom;
        this.prenom = prenom;
        this.branche = branche;
       
    }
}
const list_stagiaire = [];


//event 

enregistrer.addEventListener('click',enregistrers());

ajouter.addEventListener('click',ajouters())

//les fonction

function enregistrers(){
    let stagiaire = new Stagiaires(code_input.value,nom_input.value,prenom_input.value,)
}