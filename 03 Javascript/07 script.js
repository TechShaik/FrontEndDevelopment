console.log("Hello")
let box=document.getElementsByClassName("box")
console.log(box)

//box[0].style.backgroundColor="red"

document.body.style.backgroundColor="red"

document.getElementById("2").style.backgroundColor="red"

document.getElementById("4").style.backgroundColor="green"

document.querySelector(".box").style.backgroundColor="yellow"

// document.querySelectorAll(".box").style.backgroundColor="yellow"    - doesnt works

document.querySelectorAll(".box").forEach(e=>e.style.backgroundColor="yellow"
)   // use for looop

let e=document.getElementsByTagName("div")
console.log(e) 

 