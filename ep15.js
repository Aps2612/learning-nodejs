//asynchronous basics


//what is difference bw asynchronous and synchronous


let a=10;
let b=0;

setTimeout(()=>{
    b=20;
},0);

console.log(a+b);