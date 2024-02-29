// document.querySelector(".login").addEventListener("keypress",(e)=>{
//     e.preventDefault()
//     console.log(e.keyCode);
//     if (e.keyCode === 13){
//         document.querySelector(".btn").classList.add("change");
//         document.querySelector(".btn").classList.remove("error");
//     }else if (e.keyCode === 32){
//         console.log("ok")
//         document.querySelector(".btn").classList.add("error");
//         document.querySelector(".btn").classList.remove("change");
//     }
//     console.log("okkkkkkk");

// })

document.querySelector(".btn-ajouter").addEventListener("click",(e)=>{
    e.preventDefault()
    //document.getElementById("SignUpForm").submit();

    nom = document.forms["SignUpForm"]["login"].value;
    pass1 = document.querySelector(".pass").value
    pass2=document.querySelector(".verifier").value
    
    if (nom == ""){
        document.querySelector(".login").classList.add("error");
    }
    if(pass1.length < 5 || pass1.length > 25){
        document.querySelector(".pass").classList.add("error");
        document.querySelector(".span-pass1").innerHTML = "error dans cette input";
        document.querySelector(".span-pass1").classList.add("span");
        console.log("okkk")
    }
    if(nom.length < 5 || nom.length > 25){
        document.querySelector(".login").classList.add("error");
        document.querySelector(".span-change").innerHTML = "error dans cette input";
        document.querySelector(".span-change").classList.add("span");
        console.log("okkk")
    }
    if(nom.length < 5 || nom.length > 25){
        document.querySelector(".verifier").classList.add("error");
        document.querySelector(".span-pass2").innerHTML = "error dans cette input";
        document.querySelector(".span-pass2").classList.add("span");
        console.log("okkk")
    }
    // pass1 = document.querySelector(".pass").value
    // pass2=document.querySelector(".verifier").value

    if (pass1 != pass2){
        document.querySelector(".pass").classList.add("error");
        document.querySelector(".verifier").classList.add("error");

        document.querySelector(".span-pass2").innerHTML = "verifier ce password";
        document.querySelector(".span-pass2").classList.add("span");
        
    }else if (pass1 === pass2){
       
        document.querySelector(".span-pass1").classList.add("span-change-1");
        document.getElementById("SignUpForm").submit();
    }
})

document.querySelector(".btn-annuler").addEventListener("click",()=>{
    console.log("okkkk")
    document.getElementById("SignUpForm").reset();
})
