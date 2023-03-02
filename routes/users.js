const express = require('express');




const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index',{test : 'users'})
}); 


router.get('/new',(req,res,next)=>{
    console.log(req.query.name);
    res.render('index', { firstname : "ayush"});
    // next();
});

router.post('/',(req,res)=>{
    const isValid = true;
    // console.log(req.body.firstname);
    if(isValid == true){
        users.push({name : `${req.body.firstname}` });
        res.redirect(`/users/${users.length-1}`);

    }else{
       res.render('index',{ firstname : `${req.body.firstname}`})
    }
}); 

router
.route("/:id")
.get((req,res)=>{
    const x  = users[users.length-1];
    console.log(users);
    res.send(`hi ${x.name}`);
    // res.redirect('/users/new');

    // res.render('index',{ test :`user with ${x.name}`});
})
.put((req,res)=>{
        res.render('index',{ test :'new user'});
})
.delete((req,res)=>{
        res.render('index',{ test :'new user'});
})


const users = [{name : "ayush"},{name:"anand"}];

router.param("id",(req,res,next,id)=>{
     req.user = users[id];
     console.log(req.user);
    //  res.send('hi');
     next()
});

















// router.put('/new',(req,res)=>{
//     res.render('index',{ test :'new user'});
// });

// router.delete('/new',(req,res)=>{
//     res.render('index',{ test :'new user'});
// });



module.exports = router;