# 8.4 넥스트 고급편
## 8.4.5 페이지 미리 렌더링하기
### 동적 페이지와 정적 페이지를 동시에 서비스하기

```
npm init -y
npm install next express react react-dom
```

``` next.config.js, next export 시 미리 렌더링된 페이지를 만들기 위해
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
* 아래 파일 이름대로 미리 렌터링됨 
  * `out/page1.html` 
  * `out/page2-hello.html`
  * `out/page2-world.html`


``` 코드 8-59 미리 렌더링한 HTML을 이용하도록 server.js 파일 수정하기 
const express = require('express');
const next = require('next');
const url = require('url');
const lruCache = require('lru-cache');

const ssrCache = new lruCache({
  max: 100,
  maxAge: 1000 * 60,
});

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/page/:id', (req, res) => {
    res.redirect(`/page${req.params.id}`);
  });
  server.get(/^\/page[1-9]/, (req, res) => {
    return renderAndCache(req, res);
  });
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

const fs = require('fs');

const prerenderList = [
  { name: 'page1', path: '/page1' },
  { name: 'page2-hello', path: '/page2?text=hello' },
  { name: 'page2-world', path: '/page2?text=world' },
];
const prerenderCache = {};
if (!dev) {
  for (const info of prerenderList) {
    const { name, path } = info;
    const html = fs.readFileSync(`./out/${name}.html`, 'utf8');
    prerenderCache[path] = html;
  }
}

async function renderAndCache(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const cacheKey = parsedUrl.path;
  if (ssrCache.has(cacheKey)) {
    console.log('캐시 사용');
    res.send(ssrCache.get(cacheKey));
    return;
  }
  if (prerenderCache.hasOwnProperty(cacheKey)) {
    console.log('미리 렌더링한 HTML 사용');
    res.send(prerenderCache[cacheKey]);
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

```
npx next build && npx next export 
NODE_ENV=production node server.js
```

```
# 미리 렌더링한 HTML 사용
http://localhost:3000/page1

# 미리 렌더링한 HTML 사용 
http://localhost:3000/page2?text=world

# 미리 렌더링한 HTML 사용
http://localhost:3000/page2?text=hello

# 동적페이지 호출
http://localhost:3000/page2

# 동적페이지 호출
http://localhost:3000/page2?text=111
```