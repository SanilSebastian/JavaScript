// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in 35 framework: React, Vue, Angular

let count=0;

count=1000000;
function outer(){

    let message="Hello";

    function inner(){
        console.log(message);
    }
    inner();
}
outer();

function increment(){
    count++;
    console.log(`Count increased to ${count}`);
}

increment();
increment();
increment();
increment();
increment();
