// types primitifs
console.log(typeof(5))     //==> hadi (typeof) kkan3arefo biha type dyale hadik 5


console.log(typeof("hiba"))


console.log(typeof(undefined))      //==>hadi fache kandiclariwe bi chi value o makan3etiwehache type


// passage par valeur
console.log(typeof(true))

let a;
let b;
let c;
a=5;
b=a;
b=6;


console.log(typeof(c))          //==>hadi hiya li tabe9ena fiha hadike undefiend li fi stare 3
console.log(a)
console.log(b)



// type d'objet de base
let liste = [1,2,3]

let cliste = liste


cliste.push(5)          //==>hadi katzide lina element fi list



console.log(liste)

console.log(cliste)

console.log(typeof(liste))


let stagiaire = {               //==>dictioner = objet
    id : 1,
    prenom : "hiba",
}

let cstg = stagiaire

cstg.age = 14               //==>hena li kena kanzido biha colonne fi liste

console.log(stagiaire)

console.log(cstg)

// copie

let liste2 = [].concat(liste)            //==>hadi hiya li kancopiwe biha list hite ila jina o hetina leste wesete =>[] finma canmodifiewe fi liste2 kaytmodifa fi liste heta hiya dake chi 3elache kancopiwe bache mayb9aweche mliene m3a ba3ediyathome


liste2.push(9)

console.log(liste)

console.log(liste2)


//spread operator (opérateur de propagation)

let liste3 = [liste]            //==> hadi kadire lina liste wasete liste

let liste4 = [...liste]         //==> hadi(...) kathayede lina [] li me3awedine o katkhaliha lina liste weheda

console.log(liste3)

console.log(liste4)

stagiaire3 = {...stagiaire}         //==> hadi(...) kadalike makatkhaliche lina objet wasete obejet

stagiaire3.brandhe = "DD"           //==>hena fache kanmodifiwe kaytmodifa lina 4ire stagiaire3


Object.assign(stagiaire3,stagiaire)

stagiaire3.annee = "2024"


console.log(stagiaire3)

console.log(stagiaire)

