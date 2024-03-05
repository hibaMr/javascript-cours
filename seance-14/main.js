

document.querySelector(".ajouter").addEventListener("click",(e)=>{
    e.preventDefault()
    
    const stagiares = [];

    let branche = {branche1:"" ,branche2:"",branche3:""};

    let modules = {modules1:"" ,modules2:"",modules3:"",modules4:""};

    let cin = document.querySelector(".cin").value
    let nom = document.querySelector(".nom").value
    let prenom = document.querySelector(".prenom").value

    let DD = document.querySelector(".DD").value
    let ID = document.querySelector(".ID").value
    let medcin = document.querySelector(".medcin").value

    let python = document.querySelector(".python").value
    let HTML = document.querySelector(".HTML").value
    let css = document.querySelector(".CSS").value
    let JAVASCRIPT = document.querySelector(".JAVASCRIPT").value

    let note = document.querySelector(".note").value

    branche.branche1 = DD
    branche.branche2 = ID
    branche.branche3 = medcin

    modules.modules1 = python
    modules.modules2 = HTML
    modules.modules3 = css
    modules.modules4 = JAVASCRIPT

    stagiares.push(nom,prenom,branche,modules,note)

    document.querySelector(".list").append(stagiares)
    console.log(stagiares)
})