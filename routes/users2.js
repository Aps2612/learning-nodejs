const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    console.log(req.params.id);
    res.render('index2.ejs', {id:1, name:"ayush", country:"india",skills : ['php','jabva','js','express']});
});

// router.get('/new/:id',(req,res)=>{
//     console.log(req.params.id);
//     res.render('index2.ejs', {id : `${req.params.id}`});
// });



router
.route('/:id')
.get((req,res)=>{
    console.log(req.params.id);
    res.render('index2.ejs', {id : `${req.params.id}`});
});

// const user = ["ayush","Anand"];

router.param('id',(req,res,next,id)=>{
    req.params.id=50;
    next();
});


module.exports = router;
