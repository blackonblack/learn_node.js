# node.js + express 서버 설정

서버를 구축할 폴더에서

cmd :  `npm init`

package.json 생성됨

cmd : `npm install express --save`

node_modules폴더 생성



# Express 웹 서버 구동

```
var express = require('express')
var app = express()
app.listen(3000, function(){
})
```

cmd : `node app.js`

> `nodemon app.js` 대체 가능

127.0.0.1:3000에서 접속 가능



> * **express()**
>
>   Creates an Express application. The `express()` function is a top-level function exported by the `express` module. 
>
> * **Application** `app`
>
>   The `app` object conventionally denotes the Express application. Create it by calling  `express()` function 
>
> * **app.listen([port[,host[,backlog]]]\[,callback])**
>
>   ex)`app.listen(3000);`
>
>   **app.listen(path,[callback])**
>
>   ex) `app.listen('/tmp/sock');`
>
>   



# URL Routing처리

routing : 어떤 네트워크 안에서 통신 데이터를 보낼 경로를 선택하는 과정 

```
app.get('/', function(req,res){
	res.sendFile(__dirname+"/public/main.html")
})
```

> **app.get(path,callback[,callback...])**
>
> ex)
>
> ```
> app.get('/', function (req, res) {
>   res.send('GET request to homepage');
> });
> ```



static 파일 등록

```
 app.use(express.static('public'))
```

> * **app.use([path,] callback [, callback...])**
>
> Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches `path` 
>
> * **express.static(root, [options])**
>
>   This is a built-in middleware function in Express. It serves static files and is based on serve-static. 