const fs = require('fs');

const path = require('path');

const dirpath = path.join(__dirname,'files');


// console.log(dirpath);

// for(let i=0;i<5;i++){
//     fs.writeFileSync(dirpath+`/hello${i}.txt`, 'hello'+i+'number file');
// }


// fs.readdir(dirpath,(err,files)=>{
//     console.warn(files);
// });


fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
});


console.log(__dirname);
