let stagiare = {
    nom : "eladnani" ,
    prenom : "naoual" ,
    branch : "DD" ,
};

console.log(stagiare);
stagiare.branch = "DEV" ;
console.log(stagiare);
delete stagiare.branch ;
console.log(stagiare);

const stagiares =new Array ('hiba' , 'naoual' , 'hakima', 'imane' );     //for create new array
console.log (stagiares.length);
console.log (stagiares[1]);
console.log (stagiares.indexOf('hakima'));
console.log (stagiares.indexOf('hakima', 2));


stagiares.forEach(function(itemValue , itemIndex , stArray){
    console.log(itemValue);
}) 

const copieStagiares = stagiares.map(function(itemValue,itemIndex){
    return itemValue + "DEV" ;
})
console.log(copieStagiares);

stagiares.push("nada");             // add in the last value
console.log(stagiares);

stagiares.unshift("ghezlane");        // add in the first value
console.log(stagiares);

stagiares.pop();                    //supremer derniere element
console.log(stagiares);

stagiares.shift();              //supremer premiere element
console.log(stagiares);

const modules = [ "ALGO" , "HTML" , "CSS" , "POO"];

modules.splice(1,1);     //Supression ensemble des valeurs
console.log(modules);

console.log("             ====> sort")
modules.sort();             //==>pour trées
console.log(modules);


console.log("             ====> reverse")
modules.reverse();
console.log(modules);


console.log("             ====> find")
let algoMd = modules.find((item)=>{         //hade lfonction(item) katsema => callback function
    return item === "ALGO" ;
})
console.log(algoMd);


console.log("             ====> filter")
let filterTest = modules.filter((item)=>{
    return item === "ALGO" ;
})
console.log(filterTest);


console.log("             ====> findIndex")
let findIndexTest = modules.findIndex((item)=>{
    return item === "ALGO" ;
})
console.log(findIndexTest);