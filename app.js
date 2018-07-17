var express = require('express')
var app = express()
app.listen(3000, function(){    //비동기 함수로 나중에 작동
    console.log("start express sever on 3000 port!");
})


// for (let index = 0; index < 10 ; index++) {
//     console.log("end of severcode");  
// }  
    
app.use(express.static("public"))
console.log(__dirname+"/public/main.html");
//express getting started에 들어가면 함수 확인 가능
app.get("/", function(req,res){
    // res.send("<h1>hi friend!</h1>")
    res.sendFile(__dirname+"/public/main.html")
})

app.get("/main", function(req, res){
    res.sendFile(__dirname+"/public/main.html")
})