
//             JSON 

const stagiares = {
    id:1,
    nom:"MRIBEH",
    age:19,
    branche:"DD"
}

const stagiare = [
    {
        id:1,
        nom:"MRIBEH",
        age:19,
        branche:"DD"
    },
    {
        id:2,
        nom:"ELADNANI",
        age:20,
        branche:"DD"
    },
]

// stringify
let syagiareJSON = JSON.stringify(stagiare)

// console.log(syagiareJSON)
// console.log(syagiareJSON.nom)

// parse
stagtest = JSON.parse(syagiareJSON)
// console.log(stagtest)
// console.log(stagtest.nom)

//             AJAX

document.querySelector("#btn").addEventListener('click',()=>{
    let etudient;
    let content = "";
    const request = new XMLHttpRequest();

    request.open("GET","liststagaire.json",true)
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText)
            etudient = data.stagiares;
            console.log(etudient);
            for(let i=0;i < etudient.length;i++){
                content += '<li>'+etudient[i].nom+'</li>';
            }
            console.log(content)
            document.querySelector("#liste").innerHTML = content;
        }
    }
    request.send;
})

