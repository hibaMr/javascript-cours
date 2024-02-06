// structures alternative ou switch ==> les condition

console.log("==> 1-) structures alternative ou switch ")
// EXEMPLE 1

console.log("--> exeple 1")
let day = new Date();

let jour;


switch (day.getDay()) {           //switch ==> cas
    case 0:
        jour = "dimanche"
        break;
    case 1:
        jour = "lundi"
        break;
    case 2:
        jour = "mardi"
        break;
    case 3:
        jour = "mercredi"
        break;
    case 4:
        jour = "jeudi"
        break;
    case 5:
        jour = "vendredi"
        break;
    case 6:
        jour = "samedi"
        break;
    
    default:
        jour = ""
}
console.log(jour)

// EXEMPLE 2
console.log("--> exeple 2")

let abreviation = "DD";

let branche;

switch (abreviation) {
    case "DD":
        branche = "développement digital"
        break;
    case "RI":
        branche = "resaux informatique"
        break;
    case "MEC":
        branche = "mecanique"
        break;
    default:
        branche = "autre branche"
}
console.log(branche)





