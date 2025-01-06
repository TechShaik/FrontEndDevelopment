// let a=10;
// for(let i=0;i<=a;i++){
//     console.log(i+1)
// }
let obj = {
    name: "Shaik", // Enclose the value in quotes to define it as a string
    Salary: 50000
};

// for key value pairs
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; // Use 'obj' instead of 'object'
        console.log(key, element);
        console.log(key)
    }
}

// for Strings
for (const element of "shaik") {
    console.log(element)
}


