# POST 요청처리

post로 데이터를 받을려면 body-paser가 필요

cmd : `npm install body-parser --save `

```
var bodyPaser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoding({extended:true})
```

```
app.post('/email_post', function(req,res){
    res.send("<h1>"+req.body.email+"</h1>")
})
```

> * **app.post(path, callback [, callback ...])**
>
>   Routes HTTP POST requests to the specified path with the specified callback functions.
>
>   ex)
>
>   ```
>   app.post('/', function (req, res) {
>     res.send('POST request to homepage');
>   }); 
>   ```
>
> * res.send([body])
>
>   Sends the HTTP response.
>
>   The `body` parameter can be a `Buffer` object, a `String`, an object, or an `Array`. 
>
>   ex)
>
>   ```
>   res.send('<p>some html</p>');
>   res.status(404).send('Sorry, we cannot find that!');
>   ```
>
> * req.body
>
>   Contains key-value pairs of data submitted in the request body. By default, it is `undefined`, and is populated when you use body-parsing middleware such as body-parser and multer. 

