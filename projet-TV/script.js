//declaration

let panier = [
    {
        referances : 'SONY OLID XR-75X90J',
        qantites : '',
        images : 'image/img1.jpg',
        prix : 1000
    },
    {
        referances : 'SAMSUNG OLID XR-64X60U',
        qantites : '',
        images : 'image/img2.avif',
        prix : 2000
    },
    {
        referances : 'SAMSUNG QLED XR-53W90J',
        qantites : '',
        images : 'image/img3.avif',
        prix : 3000
    },
    {
        referances : 'SAMSUNG OLID QE65Q80AA',
        qantites : '',
        images : 'image/img4.webp',
        prix : 4000
    }
]
let tv_input = document.getElementById('tv-input');
let qantite = document.getElementById('qantite');
let tbody = document.getElementById('tbody');
let ht_input = document.getElementById('ht-input');
let ttc_input = document.getElementById('ttc-input');
let ajouter = document.getElementById('ajouter');
let commander = document.getElementById('commander');

//les fonctions

ajouter.onclick = (e)=>{
    e.preventDefault();
        let data ;
    for(let i = 0;i < panier.length;i++){
        if(tv_input.value === panier[i].referances){
            panier[i].qantites = qantite.value
            data += `<tr>
                        <td>${panier[i].referances}</td>
                        <td>${panier[i].qantites}</td>
                        <td><img src="${panier[i].images}" class="img"/></td>
                        <td><button class="btn btn-danger">Supprimer</button></td>
                    </tr>`
        }
    }
    tbody.innerHTML = data;
    let table = document.getElementById('tv-table');
    for(let y = 0;y < table.rows.length;y++){
        table.rows[y].onclick = function(){
            for(let r =0;r<table.rows.length;r++){
                table.rows[r].classList.remove('table-success')
            }
            table.rows[y].classList.add('table-success')
            for(let x = 0;x < panier.length;x++){
                let HT = Number(panier[x].prix) * Number(panier[x].qantites);
                let TTC = (Number(panier[x].prix) * Number(panier[x].qantites))/5;
                ht_input.value = HT;
                ttc_input.value = TTC;
                console.log(panier[x].qantites)
            }

        }
    }
}

