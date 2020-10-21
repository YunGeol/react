# 8.4 넥스트 고급편
## 8.4.4 서버사이드 렌더링 캐싱하기

```
npm init -y
npm install next express react react-dom
npm install lru-cache
vi server.js
```

```코드 8-56 서버사이드 렌더링 결과를 캐싱하도록 server.js 파일 수정하기
// ...
const url = require('url');
const lruCache = require('lru-cache'); ❶
const ssrCache = new lruCache({ 
  max: 100,
  maxAge: 1000 * 60,
});
// ... 
app.prepare().then(() => {
  // ...('/page/:id'를 처리하는 코드)
  server.get(/^\/page[1-9]/, (req, res) => { 
    return renderAndCache(req, res); ❸
  });
  // ...('*'를 처리하는 코드) 
});

async function renderAndCache(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const cacheKey = parsedUrl.path;
  if (ssrCache.has(cacheKey)) {
    console.log('캐시 사용');
    res.send(ssrCache.get(cacheKey));
    return;
  }
  try {
    const { query, pathname } = parsedUrl;
    const html = await app.renderToHTML(req, res, pathname, query);
    if (res.statusCode === 200) {
      ssrCache.set(cacheKey, html);
    }
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pathname, query);
  }
}
```