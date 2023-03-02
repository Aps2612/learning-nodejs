 const express = require('express');

 const app = express();


 //app is an instance of an express

 app.get('',(req,res)=>{ 
    res.send(`
    <h1>hi home page</h1>
    <a href="/about">Go to about</a>
    `);
    // console.log(req.query);
 });

 

 app.get('/about',(req,res)=>{
    res.send(`
    
    <input type ="text" placeholder="username" value="${req.query.name}"/> 
    <button>Click me</button>
    <a href ="/">Go to home</a>
    `);
 });

 app.get('/help',(req,res)=>{
    res.send([
        {
        name:'ayush',
        email:'apsingh1722@gmail.com'
    },
        {
        name:'ayush',
        email:'apsingh1722@gmail.com'
    }]
    )
});


 app.get('/*',(req,res)=>{
    res.send('page not found');
 })

 app.listen(5000);