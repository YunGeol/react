# 8.4 넥스트 고급편
## 8.4.5 페이지 미리 렌더링하기
### 정적 페이지만 서비스하는 웹 서버 코드

```
npm init -y
npm install express
cp -r ../01.preRendering/out/ .
```

``` 코드 8-57 단순히 정적 파일을 서비스하도록 server.js 파일 수정하기 
const express = require('express');

const server = express(); 
server.use(express.static('out')); ❶ 
server.listen(3000, err => {
  if (err) throw err; 
});
```

* 서버를 띄우고
```
node server.js
```

* 아래 URL 로 브라우저에서 접속해 본다.
```
http://localhost:3000/page1.html
http://localhost:3000/page2.html
```