//what is template engine
//install ejs
//set up dynamic page
//make dynamic page
//how to make loop in ejs
//show header file
//show common header file

const express = require('express');

const app = express();

const fs = require('fs');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('home page');
});

const userroute = require('./routes/users2');
app.use('/users2',userroute);




app.listen(8000);

