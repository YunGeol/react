# 8.4 넥스트 고급편
## 8.4.5 페이지 미리 렌더링하기
### 자동으로 미리 렌더링하기

* 넥스트에서 빌드 시 getInitialProps 함수가 없는 페이지는 자동으로 미리 렌더링된다.
* 따라서 getInitialProps 함수는 꼭 필요한 경우에만 작성하는 게 좋다.
* 만약 _app.js 파일에서 getInitialProps 함수를 정 의하면 모든 페이지가 미리 렌더링되지 않으므로 주의하자.

### next export로 미리 렌더링하기

* 넥스트에서는 next export 명령어를 통해 전체 페이지를 미리 렌더링할 수 있다
* next export 명령어는 빌드 후에 실행해야 한다.

```
npm init -y
npm install next express react react-dom
npm install lru-cache
npm install file-loader
```

next의 export 명령을 이용해 미리 렌더링하기
```
npx next build && npx next export
```

* 명령어를 실행하면 프로젝트 루트에 out 폴더가 생성된다.

```
├── out
│   ├── 404.html
│   ├── _next
│   │   ├── pWiUvFDEWOdUnBIEJVLCr
│   │   └── static
│   │       ├── Oe7wK282ozm-KyW6PmVyI
│   │       ├── chunks
│   │       ├── mjh2Jn0sBza_HNFx09ZTs
│   │       └── pWiUvFDEWOdUnBIEJVLCr
│   ├── page1.html
│   ├── page2.html
│   └── static
│       └── icon.jpg
```

* 404.html: 에러 페이지가 미리 렌더링된 파일이다.
* page1.html: /page1 요청에 대해 미리 렌더링된 파일이다.
* page2.html: /page2 요청에 대해 미리 렌더링된 파일이다.
* _next 폴더: 프로젝트 루트의 .next 폴더에 있는 번들 파일과 같다.
* static 폴더: 이미지와 같은 정적 파일을 모아 놓은 폴더다.



