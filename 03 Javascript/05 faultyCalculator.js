let random=Math.random()
let a=prompt("Enter value of A ")
let b=prompt("Enter value of B ")
let c=prompt("Enter Operation ")

let obj={
     "+":"-",
     "*":"/",
     "-":"*",
     "/":"+"
}

if(random>10){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The result is  ${eval(`${a} ${c} ${b}`)}`)
}