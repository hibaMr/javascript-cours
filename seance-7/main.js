//// document.querySelector(".age").value = 2
                                                   // ==> hena imkene lina nbedelo value mne hena bla manmchiwe heta html o hena derenaha bache nt2akdo mne hadik else
//// document.querySelector(".num").value = 4

// let a = Number(document.querySelector(".age").value);       // hade queryselector katkhalina nwasselo lclass o 3ade kandiro dake chi li b4ina nwesselo lihe li howa value

// let b = Number(document.querySelector(".num").value);


// let c = document.querySelector(".resultat").value = a + b 

// if (c > 20){
//     document.querySelector(".resultat").style.backgroundColor ="red"
// }else{
//     document.querySelector(".resultat").style.backgroundColor ="yellow"
// }

// EVENTS


//methode 1
document.querySelector(".btn").addEventListener("click" , function(){           //imkene lina nketbo fontction hena o hadik click za3ema mli nklikiwe o hadike addEventListener hadi hiya li katkhalina nketbo fiha 

    let a = Number(document.querySelector(".age").value);       

    let b = Number(document.querySelector(".num").value);


    let c = document.querySelector(".resultat").value = a + b 

    if (c > 20){
        document.querySelector(".resultat").style.backgroundColor ="red"
    }else{
        document.querySelector(".resultat").style.backgroundColor ="yellow"
    }
})



// methode
document.querySelector(".btn").addEventListener("click" , () =>{           //fonction flechier

    let a = Number(document.querySelector(".age").value);       

    let b = Number(document.querySelector(".num").value);


    let c = document.querySelector(".resultat").value = a + b 

    if (c > 20){
        document.querySelector(".resultat").style.backgroundColor ="red"
    }else{
        document.querySelector(".resultat").style.backgroundColor ="yellow"
    }
})



// exemle

document.querySelector(".vide").addEventListener("click" , ()=>{
    
    let a = document.querySelector(".age").value="" ;   

    let b = document.querySelector(".num").value="";
})


// input           ==>hadi hiya li katkhali lina hadike input bjojhome itmodifiwe

document.querySelector(".age").addEventListener("input" ,()=>{
    document.querySelector(".age").value = document.querySelector(".num").value
})


// mouseover           

document.querySelector(".age").addEventListener("mouseover" ,()=>{
    document.querySelector(".age").style.backgroundColor="red"
})


// mouseout

document.querySelector(".age").addEventListener("mouseout" ,()=>{
    document.querySelector(".age").style.backgroundColor="yellow"
})
