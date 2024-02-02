console.log(Number("3.14"))             //hadi kandiroha bache ithawelelina mne string li number mais khasso ikone dake string darori ra9eme
console.log(Number(" "))                //hadi kat3etina  0
console.log(Number(""))                   //hadi kat3etina  0
console.log(Number("99 88"))                // hadi kadire lina NaN hite kate3etabereha machi number
console.log(Number("dd106"))                // hadi kadire lina NaN hite kate3etabereha machi number

let d = 2025

sd = String(d)                  //hadi kathawele lina mne str le number mais mli kanmchiwe nchofo kanl9awe 2025 mais mli kandiro typeof 3ade kaybane lina type dyalo

console.log(sd)

console.log(typeof(sd))

let x = "5"

let y = + x                 //hadi kandiroha bache nhawelo mne str le number

console.log(typeof(y))

console.log(String(100 + 23))           //hadi kandiroha bache nhawelo mne number le str mais dik lresultat hiya li katweli str


console.log(typeof(String(100 + 23)))

console.log(String(100) + String(23))    //hadi hiya li katbeyene lina 10023

let k = 1000

sk = k.toString()               //number --> str

console.log(typeof(sk))


// conversion des dates en nombres


console.log("==>conversion des dates en nombres")

let vD = new Date()


console.log(vD)         //kadire lina tarikhe lyome



console.log(Number(vD))

console.log(vD.getDate())

console.log(vD.getDay())


console.log(typeof(vD.getDay()))


console.log(typeof(vD.getDay()).toString())


console.log(String(vD.getDate()))


console.log(typeof(String(vD.getDate())))


console.log(vD.getFullYear())


console.log(vD.getHours())



console.log(vD.getMilliseconds())


console.log(vD.getMinutes())



console.log(vD.getMonth())



console.log(vD.getSeconds())



console.log(vD.getTime())
