const stagiaireslist = [];
document.querySelector(".ajouter").addEventListener("click",(e)=>{
    e.preventDefault();
    let stagiaire = {nom:"",prenom:"",age:null}
    
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let age =Number (document.getElementById('age').value);
    
    stagiaire.nom = nom;
    stagiaire.prenom = prenom;
    stagiaire.age = age;

    stagiaireslist.push(stagiaire);
})
 document.querySelector(".afficher").addEventListener("click",(e)=>{
   e.preventDefault();
    stagiaireslist.map(function(item,indice){
        console.log(item);
        ////////////////////conteneur data
        let dataDiv = document.createElement("div");
        dataDiv.classList.add("data");
        document.body.append(dataDiv)
        /////////////////
        let nomSpan = document.createElement("span");
        nomSpan.innerHTML = item.nom;
        let prenomSpan = document.createElement("span");
        prenomSpan.innerHTML = item.prenom;
        let ageSpan = document.createElement("span");
        ageSpan.innerHTML = item.age;
        console.log(indice)
        console.log( document.querySelectorAll(".data")[indice]);
        document.querySelectorAll(".data")[indice].append(nomSpan);
        document.querySelectorAll(".data")[indice].append(prenomSpan);
        document.querySelectorAll(".data")[indice].append(ageSpan);



    })
 })