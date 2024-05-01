let code = document.getElementById('code-input');
let nom = document.getElementById('nom-input');
let prenom = document.getElementById('prenom-input');
let groupe = document.getElementById('groupe-input');
let note = document.getElementById('note-input');
let enregistrer = document.getElementById('enregistrer');

class Etudiant {
    constructor (codes,noms,prenoms,groupes,notes){
        this.codes = codes;
        this.noms = noms;
        this.prenoms = prenoms;
        this.groupes = groupes;
        this.notes = notes;
    }
}

let listEtudiant = [];

//function

enregistrer.onclick = function(e){
    e.preventDefault()
    let etudiant = new Etudiant (code.value,nom.value,prenom.value,groupe.value,note.value)
    
    console.log(listEtudiant)
    let stagiaire = /[DD]-[0-9]{1,3}-[0-9]{1,2}/
    console.log(stagiaire.test(groupe))
    if(stagiaire.test(groupe) == false){
        groupe.classList.add("error")
    }else{
        listEtudiant.push(etudiant)
        groupe.classList.remove("error")
    }
}

