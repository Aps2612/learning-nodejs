const http = require('http');


const data = require('./export10.js');




const server = http.createServer((req,res)=>{

    //jo chiz response ke andar likhte hai wo as a response jaati hai client ko

    res.writeHead('200',{'Content-Type':'\json'});
    res.write('{data}') ;
    // res.write("aps");
    res.end();

});



server.listen(20000);