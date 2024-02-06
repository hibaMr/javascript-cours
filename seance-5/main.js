// structures itérative  ==> les boucles

console.log("            ==> 2-) structures itérative ")

for(let i = 0;i <= 5;i ++){
    console.log(i)
}

// exemple

console.log("          ==> exemple")

jours = ["lundi","mardi","mercredi","jeudi","vendredi","samdi","dimanche"]


for(let x = 0;x <= 6;x ++){                    //hadi heta hiya imkene lina ndiroha blaset hadi length hiya les index kamline==> for(let x = 0;x <= (jours.length -1);x ++){

    console.log(jours[x])
}

// for (in)


console.log("         ==>for (in)")

for(let jr in jours){                    //hadi katkhetassere lina dake chi kamle li ketebnahe fi for li fo9e za3ema hadike jr hiya fache 3etinaha in welate hiya les index ==> 0,1,2,3,4,5,6,7 

    console.log(jours[jr])                  // ila hayedna jours o khalina  jr bohedeha kate3etina index
}

// for (of)

console.log("           ==>for (of)")

for(let jour of jours){                    //adi hetahiya katkhetassere lina mais hade of kat3eti l jour les valeurs machi les index

    console.log(jour)
}


//for each

console.log("             ==>for each")

let textjours = "";

function myfunction(value,index,array){         //array ==> jours howa list 
    textjours += " " + value;                   //hadi kandiroha bache hadoke les value ijiwena wahede mora lakhere mais ijiwe hheda ba3ediyathome fi lewele katkone lundi o tani katkone lundi mardi
    // textjours += index;                      //hadi katbocli lina 3ela index
    // console.log(textjours)                   //hadi kandiroha hena ila b4ina ibane lina les bokele ya3eni fi lewele katkone lundi o 3ade lundi maredi ... 
    
}
jours.forEach(myfunction)                       //hade forEach hiya nite for ya3eni kanbokliwe 3ela fonction  imkene lina hade setare kamele ndirohe 9ebele fonction hite fi java mat3erefe lina ga3e les line ya3eni machi bhale python li ma4adiche i3erafe lina hade setare ila kane fo9e fonction
console.log(textjours)                          //hadi kandiroha bache mayebanche lina les etabe dyale boucle o kat3etina le resultat nichane
    

// la difirance entre break et continue

console.log("         ==>la difirance entre break et continue")

//break

console.log("             -->break")

for(let j = 0;j <= (jours.length -1);j ++){
    if(j === 3){
        console.log("stop")
        break;                          //hade break kandiroha bache 4ire nwesselo ldake chi li b4ina o modifinahe tehebesse o matkemelche lina 
    }
    console.log(jours[j])
}


console.log("             -->continue")

for(let j = 0;j <= (jours.length -1);j ++){
    if(j === 3){
        console.log("stop")              //hadi kanediroha bache mli tewessale ldake chi li b4inahe o tmodiffihe tkemele lina o mathebesseche
        continue;
    }
    console.log(jours[j])
}




//while ==>tant que

console.log("             ==>while")             

let n;

n = 10;

while(n >= 0){
    console.log(n)                  // hadi katbeda lina mne 10 o hiya habeta heta 0 o t9edare matele3e lina walo fi sit
    n -= 1
}

//dowhile ==>repeter jusqua

console.log("             ==>dowhile")

let m = 10;
 do {
    console.log(m)                // hadi katbeda lina mne 10 o hiya habeta heta 0 mais hadi a9ale 9ima te9edare tale3eha lina hiye 1 jarebi diri -1 fi lewela o hadi
    m -= 1
 } 
while (m >= 0);



