//APPLY GET METHOD
//REMOVE AN EXTENSION FROM URL
//MAKE 404 PAGE
//APPLY 404 PAGE

const express = require('express');
const path = require('path');


const dirpath = path.join(__dirname,'public');

const app = express();


app.get('/',(req,res)=>{
    // res.sendFile(`${dirpath}/index.html`)
    res.sendFile(`${dirpath}/about.html`)
});





app.get('/about',(req,res)=>{
    res.sendStatus(404);
});

app.get('/*',(req,res)=>{
  res.sendStatus(404);
})

app.listen(8000);



 