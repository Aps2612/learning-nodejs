//we learn routing here

const express = require('express');

const app = express();

app.get('',(req,res)=>{
    console.log(req.query);
//    res.send('hi'+req.query.name);
});

app.listen(4000);