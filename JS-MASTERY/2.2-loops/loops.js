//print 0 to 2

console.log("0");
console.log("1");
console.log("2");

//Loos helps us do the same thing again and again

for(let count=0; count<5; count++){
    console.log(count);
}

//iterate over array
let names = ["John" , "Ishi" ,"peter", "jane"];
for(let i=0; i<names.length; i++){
    console.log(names[i])
}

//iterate over array using for each loop
console.log("*****foreach******");
names.forEach(function test(n){
    console.log(n)
})

//iterate over array using for of loop
console.log("*****for of******");
for(n of names){
    console.log(n)
}

//iterate over an object
let student = {
    name: "peter",
    rollNo: 554,
    age: 23,
    dept: "phy"
};

console.log("*****iteation in object with for in ******");

for(key in student){
    console.log("key is "+key+" value is "+student[key]);
}

//while loop in JS
//1-initialization , 2-condition checking , 3-body execution, 4-updation

console.log("*****iteation with while loop ******");

let c = 0;
while(c<5){
    console.log(c);
    c++;
}

console.log("*****iteation with do- while loop ******");

let i=0;
do{
    console.log(i);
    i++;
}
while(i<5); 

