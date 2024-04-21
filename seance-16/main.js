let stagiare = [{id:1,nom:"MRIBEH",note:20},
                {id:1,nom:"ELADNANI",note:19},
                {id:1,nom:"KHALID",note:17},
]

listNotes = stagiare.map((item)=>{
    return item.note
})

let maxNote = Math.max(...listNotes);  //==>(...)-->bhala kathayed lina hado [] hite fi max kandiro 4ire valeure

let stagiarelist = stagiare.filter((item)=>{
    return item.note === maxNote;
})

console.log(stagiarelist);
console.log(Math.max(...listNotes))


console.log(Math.random())

console.log(Math.floor(Math.random()*20)+1)

console.log(Math.round(20.5))

console.log(Math.sqrt(25))