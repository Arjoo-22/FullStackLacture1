const http=require("http")
const server=http.createServer((req,res) =>{
    if(req.url==="/"){
        res.end("ye home page h");
    }
    else if(req.url==="/about"){
        res.end("hello from about page");
    }
    else{
        res.end("404 page not found");
    }
})                                  
server.listen(3000,()=>{
console.log("Server is running on port 3000");  
})