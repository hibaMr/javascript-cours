// const stagiare = {id:1,nom:"MRIBEH",prenom:"Hiba",branche:"DD",presenterVous:function(){
//     console.log("I am " + this.nom + " " +this.prenom + " "+this.branche + " ")
// }}

// console.log(stagiare.branche)

// console.log(stagiare.presenterVous)


//////// 1ere méthode du crée des class ==> orionter objet sur javascript

// function Stagiares(v_id,v_nom,v_prenom,v_branche){
//     this.id = v_id;
//     this.nom = v_nom;
//     this.prenom = v_prenom;
//     this.branche = v_branche;
//     this.presenterVous = function(){
//         console.log("I am "+ this.nom +" "+ this.prenom +" ")
//     }
// }

// const stagiare1 = new Stagiares(1,"MRIBEH","Hiba","DD");

// const stagiare2 = new Stagiares(1,"ELADNANI","Naoual","DD");

// console.log(stagiare1)
// console.log(stagiare2)


////// exercice 1

//  function Achat(Id,Article,Prix,Quantite){
//      this.id = Id;
//      this.article = Article;
//      this.prix = Prix;
//      this.quantite = Quantite;
//      this.calculeTVA = function(){
//          const vTVA = 20/100;
//          let total = this.prix * this.quantite;
//          let totalTTC = total + total * vTVA;

//          return totalTTC
//      }
//  }

//  const achat1 = new Achat(1,"sac",200,1);

//  const achat2 = new Achat(3,"mouse",20000,8);

//  console.log(achat1)

//  console.log(achat2)

// console.log(achat1.calculeTVA())
// console.log(achat2.calculeTVA())

////// 2eme méthode du crée des class ==> orionter objet sur javascript

class Achat {
    constructor(v_id,v_article,v_prix,v_quantite){
        this.id = v_id;
        this.article = v_article;
        this.prix = v_prix;
        this.quantite = v_quantite;
    }

    calculerTTC(){
        const vTVA = 20/100;
        let total = this.prix * this.quantite;
        let totalTTC = total + total * vTVA;

        return totalTTC
    }
}

const achat1 = new Achat(1,"sac",200,1);

const achat2 = new Achat(3,"mouse",20000,8);

console.log(achat1)
console.log(achat2)