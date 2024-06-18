//array = a variable like structure that can hold
//        more than 1 value

let fruits=["apple","orange","banana","coconut"];
//fruits.push("mango");
//fruits[5]="coco";
//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

//let numOffruits=fruits.length;
//let index=fruits.indexOf("mango");

//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);
//console.log(fruits[4]);
//console.log(fruits[5]);

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}
