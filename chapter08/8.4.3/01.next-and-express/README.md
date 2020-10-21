# 8.4 넥스트 고급편
## 8.4.3 웹 서버 직접 띄우기

* 지금까지는 넥스트에 내장된 웹 서버를 사용했다.
* 내장된 웹 서버를 사용하지 않고 웹 서버를 직접 띄우면 좀 더 많은 일을 할 수 있다.
  * 예를 들어, 내장된 웹 서버는 서버사이드 렌더링 결과를 캐싱할 수 없지만 직접 띄운 웹 서버에서는 캐싱을 통해 보다 많은 트래픽을 처리할 수 있다.
* express를 사용해서 직접 웹 서버를 띄워 보자.

```
npm init -y
npm install next react react-dom
npm install express
vi server.js
```

``` 코드 8-55 server.js
const express = require('express');
const next = require('next');
const port = 3000;
//❶
const dev = process.env.NODE_ENV !== 'production';
//❷
const app = next({dev});
const handle = app.getRequestHandler();
//❸
app.prepare().then(() => {
   const server = express();
   //❹
   server.get('/page/:id', (req, res) => {
       res.redirect(`/page${req.params.id}`);
   });
   //❺
   server.get('*', (req, res) => {
       return handle(req, res);
   });
   //❻
   server.listen(port, err => {
       if (err) throw err;
       console.log(`> Ready on http://localhost:${port}`);
   });
});
```


``` 서버실행
node server.js
```
  