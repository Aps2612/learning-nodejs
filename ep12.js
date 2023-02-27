// console.log(process);


//argv refers to argument vector isse hum jo input denge terminal pe usko access karke uspe operation perform kar sakte hain




//task 1.
//given a three input,add or remove a file,name of filename,text of file



  const fs = require('fs');

  const input = process.argv;

  

  if(input[2]=='add'){
    fs.writeFile(input[3],input[4],()=>{
        console.log("file written");
    });
  }else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
  }else{
    console.log("Invalid");
  }


//   fs.writeFileSync(input[2],input[3]);


// for(let i=2;i<=4;i++){
//   console.log(process.argv[i]);
// }

// console.log(input[4]);

// for(let i=0;i<2;i++){
//     console.log(input[i]);
// }


//Q)what does writeFile sync do? how it is different from writeFile

//ans->writeFile and writeFileSync are two methods in Node.js used to write data to a file. The key difference between them is that writeFile is asynchronous, meaning it does not block the event loop while the file is being written, while writeFileSync is synchronous, meaning it blocks the event loop until the file is written.


//Q)process argv in node js.what does contain

//ans-> The process.argv array has the following structure:

/*The first element (process.argv[0]) contains the path of the Node.js executable.
The second element (process.argv[1]) contains the path of the JavaScript file that is being executed.
The remaining elements (process.argv[2] and beyond) contain any additional command-line arguments passed to the Node.js process.*/




//Q)Process argv
//ans => In computing, process.argv is a property of the process global object in Node.js. It is an array that contains the command-line arguments passed to the