console.log("hei");
console.log("hello world");

const fs=require('fs');
const data=fs.writeFileSync('example.txt',"This is an example file",
    function(e,data){
        if(e) console.log("ye aaya error");
        console.log(data);
    }); 
        
console.log("File created Successfully");
console.log("File System operation completed");

 
