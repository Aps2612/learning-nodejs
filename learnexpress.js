const express = require('express');

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.set('view engine','ejs');//iske liye views folder ka hona jaruri hai aur usme index.ejs se file banana bhi jaruri hota hai 


app.get('',(req,res)=>{
    res.render('index');
});

const UserRouter = require("./routes/users");

app.use('/users',UserRouter); 




// app.get('/',(req,res,next)=>{
//     // res.status(404).json([{message : 'error'},{message2:'aps'}]);
//     // res.download("learnexpress.js");
//     res.send([
//         {name:'ayush',branch:'it',contact:788},
//         {name:'anand',branch:'ece',contact:788},
//         {name:'mayank',branch:'mech',contact:788},
//     ]);

// });

// app.get('/about',(req,res,next)=>{
//     res.send( `
//     <h1>About Page</h1>
//     `);
//     // res.sendStatus(420);
// });



// const fs = require('fs');
// const path = require('path');

// const dirpath = path.join(__dirname,'views');

// fs.writeFileSync(`${dirpath}/index.html`,'<h1>AYUSH</h1>');

// app.use(express.static('public'));


app.listen(5000);



