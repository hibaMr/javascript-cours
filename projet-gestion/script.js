let title = document.querySelector('#title')
let prices = document.querySelector('.prices')
let taxes = document.querySelector('.taxes')
let ads = document.querySelector('.ads')
let discount = document.querySelector('.discount')
let total = document.querySelector('#total')
let count = document.querySelector('.count')
let category = document.querySelector('.category')
let submit = document.querySelector('#submit')



// get total
function getTotal(){
    if(prices.value != ''){
        let result = (Number(prices.value) + Number(taxes.value) + Number(ads.value)) - Number(discount.value);

        total.innerHTML = result;
        total.style.background = 'green'
    }else{
        total.innerHTML = '';
        total.style.background = 'brown'
    }
}


//create product
let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}


submit.onclick = ()=>{
    let newPro = {
        title: title.value,
        price: prices.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }
    dataPro.push(newPro)
    localStorage.setItem('product',JSON.stringify(dataPro))

    clearData()
}


//save localStorige

function clearData(){
    title.value = '';
    prices.value = '';
    ads.value = '';
    taxes.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}
//clear inputs
//read
//count
//delete
//update
//search
//clean data