//make file

const fs = require('fs');

const path = require('path');

const dirpath = path.join(__dirname,'crud');

const filepath = `${dirpath}/aps.txt`;




// console.log(dirpath);

fs.writeFileSync(filepath,'hi pappa');//create file

// to read  a file

// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item);
// });

//update a file 

// fs.appendFile(filepath,'how are you',(err)=>{
//     if(err) console.log('error');
// });

// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item);
// });


//rename a file 

// fs.rename(filepath,`${dirpath}/anand.txt`,(err)=>{
//     if(!err) console.log('file renamed');
// });


//delete a file

fs.unlinkSync(`${dirpath}/anand.txt`);
fs.unlinkSync(`${dirpath}/aps.txt`);