let btnopen = document.querySelector('#open');
let btnclose = document.querySelector('#close');
let header = document.querySelector('header');

btnclose.onclick = ()=>{
    header.classList.add("hide")
    btnclose.classList.add("hide")
    btnopen.classList.remove("hide")
}

btnopen.onclick = ()=>{
    btnopen.classList.add("hide")
    header.classList.remove("hide")
    btnclose.classList.remove("hide")
}