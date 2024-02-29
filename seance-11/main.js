// les evenment


// function greeting(){
//     console.log("hello button!!")
// }
// document.querySelector(".btn").addEventListener("click",greeting);

// document.querySelector(".btn").onclick = function (){
//     console.log("hello button!!")
// }


// document.querySelector(".btn").onclick = greeting;




count = 0
function choiseColor(){
    document.querySelector(".clickBtn").computedStyleMap.backgroudColor = "yellow";
    count++
    console.log(count);
    if (count >= 3){
        document.querySelector(".save").removeEventListener("mouseover", choiseColor);
    }
}
document.querySelector(".save").addEventListener("mouseover" , choiseColor);
document.querySelector(".save").addEventListener("mouseout",()=>{
    document.querySelector(".clickBtn").computedStyleMap.backgroundColor = "gray";
});
document.querySelector(".clickBtn").addEventListener("mousedown",()=>{
    console.log("down");
    document.querySelector(".save").style.backgroudColor = "rosybrown";
});
document.querySelector(".clickBtn").addEventListener("mouseup",()=>{
    console.log("up")
    document.querySelector(".save").style.backgroundColor = "aqua";
});
document.querySelector(".clickBtn").addEventListener("click",()=>{
    console.log("click");
    document.querySelector(".save").style.backgroundColor = "red";
});
