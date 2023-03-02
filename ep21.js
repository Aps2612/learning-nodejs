   const express =  require('express');
   const fs = require('fs');

   const app = express();

   const path = require('path');

   const publicpath = path.join(__dirname,'public');

   fs.writeFileSync('ep22.js','h');

//    const publicpath = `${dirpath}/hello.txt`;

//    fs.writeFileSync(filepath,'hi ayush');//file path

//    fs.readFile(filepath,'utf8',(err,item)=>{
//          console.log(item);
//    });//to read a file

   //to delete a file
//    fs.unlinkSync(filepath);

//to rename a file

// fs.renameSync(filepath,`${dirpath}/aps.txt`);

//to update a file

// fs.appendFile(`${dirpath}/aps.txt`,'is a good boiy',(err)=>{
//     if(!err) console.log('file updated');
// });


app.use(express.static(publicpath));

app.listen(50000);











   

  