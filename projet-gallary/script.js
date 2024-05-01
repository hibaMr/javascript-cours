let container = document.getElementsByClassName('container');

let image = document.querySelector('.testImg');

let test = document.getElementById('test');

let btn1 = document.querySelector('#btn1');

let btn2 = document.querySelector('#btn2');

let imgs = [];

for(let i = 1;i < 12;i++){
    imgs[i] = document.getElementById('box'+i).src
}



function gallary(source){
    test.style.display = 'block';
    image.src = source;
    console.log(image.src)
}



for(let j = imgs[1];j < imgs[2];j++){
    btn1.style.display = 'none';
}


btn1.addEventListener('click',()=>{

    let x = imgs.indexOf(image.src);
    for(let y = 2;y < x;y--){
        btn1.style.display = 'flex';
        image.src = imgs[y]
    }
    console.log('okkkk')
})





