let a = Number(document.querySelector(".age").value);       

let b = Number(document.querySelector(".num").value);


let c = document.querySelector(".resultat").value = a + b 

if (c > 20){
    document.querySelector(".resultat").style.backgroundColor ="red"
}else{
    document.querySelector(".resultat").style.backgroundColor ="yellow"

}

//creation et suppression d'un element DOM

// 1 ==> h1



document.querySelector(".creer").addEventListener("click" , function(){           //imkene lina nketbo fontction hena o hadik click za3ema mli nklikiwe o hadike addEventListener hadi hiya li katkhalina nketbo fiha 

    const parent = document.querySelector(".section-1")

    const enfent = document.createElement("h1")

    enfent.innerHTML = "learn js"

    enfent.style.backgroundColor = "red"

    parent.append(enfent)

    // 2 ==> p

    const content = document.createElement("p")

    content.innerHTML = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste maiores possimus, neque, eos voluptatem doloremque enim molestias minus illo saepe laborum ratione, provident illum quas consequatur dolorum optio aliquam porro!"

    content.style.color = "blue"

    // parent.append(content)

    parent.prepend(content)         //hadi katkhali lina hade content tketeb hiya lewela 9ebele enfent li hiya h1
})

document.querySelector(".suppremer").addEventListener("click" , ()=>{           //imkene lina nketbo fontction hena o hadik click za3ema mli nklikiwe o hadike addEventListener hadi hiya li katkhalina nketbo fiha 
    
    // remove ==> suprimer

    document.querySelector(".para").remove()    //  hadi derena liha () hite hiya methode ga3e les methode kandiro lihome ()


    //suprimer enfant
    document.querySelector(".section-1").removeChild(document.querySelector(".titre-2"))
})

document.querySelector(".remplacer").addEventListener("click" , ()=>{


    let Parent = document.querySelector(".section-1")
    
    let ancenfent = document.querySelector(".titre-2")

    let nouvenfent = document.querySelector(".para")

    Parent.replaceChild(ancenfent,nouvenfent)
})

document.querySelector(".creer-div").addEventListener("click" , ()=>{

    const newdiv = document.createElement("div")

    // newdiv.classList.add("section-2") 

    // newdiv.classList.add("encadrer") 

    newdiv.className = "section-2"

    newdiv.className = "encadrer" 

    document.body.append(newdiv)
})