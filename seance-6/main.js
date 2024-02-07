//les fonction flechees (arrow function)

// console.log(              ==>les fonction flechees (arrow function))


//les donctions flechees
   let a = function (){
        return console.log("helloo!!javascript")
    };

    let greet=() => console.log("helloo!!python")

    let nomcomplet=(nom,prenom) => {
      let fullnam=nom+""+prenom;
        return fullnam
    }
    
    console.log(nomcomplet("mribeh","hiba"))










// les expressions lambdas


//map (il retourn un nouveau table)                 ==>hade map katmodifi lina fi lcopi dyale tabele machi fihe howa

const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samdi","dimanche"];

// let i = 0;               //==>1

jours.map(function (item){
    // i +=1                    //==>1
    // return console.log("ook" +i)              //==>1
    return console.log(item)
    
})


jours.map((item) => {        // ==> fonction fichier

    if (item === "jeudi"){
        item = item + "* jour ferier"       
    }
    return console.log(item)
    
})

console.log(jours)   


// exercice

const stagiaires = [
    {prenom:"hiba",nom:"mribeh",age:"18ans"},
    {prenom:"naoual",nom:"el adnani",age:"21ans"},
    {prenom:"leiela",nom:"khalid",age:"18ans"}
]



stagiaires.map((noms) => {
    
    fulName = noms ['nom'] + " " + noms['prenom'];
    console.log(fulName)
})


//exeple
let groupe;

groupe = stagiaires.map((noms) => {
    
    fulName = noms ['nom'] + " " + noms['prenom'];
    return fulName
})

console.log(stagiaires)
console.log(groupe)


//exemple

let nameAge;

nameAge = stagiaires.map((noms) => {            //kadire lina boucle

    return {nom : noms ,age: noms.age}
})

console.log(nameAge) 

// exemple

// [a,b,c,d]

let groupes;

groupes = stagiaires.map((items,index,arryS) => {            
    console.log(items);
    console.log(index);
    console.log(arryS);

    let st;
    st = {...items, branche: "DD", id: index }
    return st;
})

console.log(groupes) 




