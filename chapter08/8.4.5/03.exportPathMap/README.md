# 8.4 넥스트 고급편
## 8.4.5 페이지 미리 렌더링하기
### 넥스트의 exportPathMap 옵션 사용하기

```
npm init -y
npm install next express react react-dom
```

* 넥스트의 exportPathMap 옵션을 이용하면 쿼리 파라미터를 활용해서 정적 페이 지를 만들 수 있다.
* next.config.js 파일을 다음과 같이 수정해 보자.
```코드 8-58 exportPathMap 옵션을 사용하도록 next.config.js 파일 수정하기
module.exports = {
    exportPathMap: function() {
        return {
            '/page1': { page: '/page1' },
            '/page2-hello': { page: '/page2', query: { text: 'hello' } }, 
            '/page2-world': { page: '/page2', query: { text: 'world' } },
        }; 
    },
};
```

* server.js 는 정적페이지만 서비스하는 설정으로 함.
```
const express = require('express');

const server = express();
server.use(express.static('out'));
server.listen(3000, err => {
    if (err) throw err;
});
```

* `npx next build && npx next export` 로 빌드 한 후, `node server.js` 명령으로 서버 띄움

* 브라우저에서 아래와 같이 확인 가능
```
http://localhost:3000/page2-hello.html
http://localhost:3000/page2-world.html
```

* 하지만, `http://localhost:3000/page2` 으로 호출하면 안됨.
* 정적 페이지로 미리 만들어 놓지 않았기 때문.
* 이러한 문제는 동 적 페이지와 정적 페이지를 동시에 서비스하는 방식으로 해결할 수 있다.
  