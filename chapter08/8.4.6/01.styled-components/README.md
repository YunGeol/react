# 8.4 넥스트 고급편
## 8.4.6 styled-components 사용하기

```
npm init -y
npm install next express react react-dom
npm install styled-components babel-plugin-styled-components
```

* 넥스트는 css-in-js 방식으로 스타일 코드를 작성할 수 있는 styled-jsx 패키지를 내장하고 있다.
* styled-components 패키지를 사용할 수 있도록 해 보자

* css-in-js 방식을 사용하려면 서버사이드 렌더링 시 스타 일 코드를 추출해서 HTML에 삽입하는 과정이 필요하다.
* styled-jsx 문법으로 작성한 스타일 코드를 추출하는 코드는 넥스트 내부의 _document.js 파일에 있다.
* 참고로 _document.js 파일은 서버사이드 렌더링 시에만 실행된다.
```
코드 8-60 넥스트 내부 _document.js 파일의 내용
// ...
import flush from 'styled-jsx/server'
// ...
export default class Document extends Component {
    // ...
    static getInitialProps (ctx) {
        // ...
        const { html, head } = await ctx.renderPage({ enhanceApp }) 
        const styles = [
            ...flush(), ❶
            // ... 
        ];
        return { html, head, styles } ❷ 
    }
    // ...
```

* styled-jsx 대신 styled-components 패키지를 쓰려면 _document.js 파일을 수정해야 한다.
* 우리가 pages/_document.js 파일을 생성하면 넥스트는 내장된 _document.js 파일 대신 우리가 작성한 파일을 사용한다.

```
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
```

``` 코드 8-62 page1.js 파일에서 styled-components 사용하기
// ...
import styled from 'styled-components';

const MyP = styled.div` 
                color: blue; 
                font-size: 18pt;
            `;
function Page1() { 
    return (
        <div>
            <MyP>{`10 + 20 = ${add(10, 20)}`}</MyP>
            <MyP>this is home page</MyP>
            // ... 
        </div> 
    );
}
// ...
```

* 여기까지만 작업하면 styled-components가 서버와 클라이언트에서 생성하는 해 시값이 서로 달라서 문제가 된다.
* styled-components에서 제공하는 바벨 플러그인을 이용하면 서버와 클라이언트의 결괏값을 일치시킬 수 있다.
* 다음 패키지를 설치해 보자.
```
npm install styled-components babel-plugin-styled-components
```

* 이제 바벨을 설정해 보자. 
* 넥스트에서는 프로젝트 루트에 .babelrc 파일을 만들어서 바벨을 설정할 수 있다.
* 바벨과 웹팩 설정을 변경할 수 없게 하는 create-react-app과 비교되는 부분이다.

```코드 8-63 .babelrc
{
  "presets": ["next/babel"],
  "plugins": ["babel-plugin-styled-components"] 
}
```

```빌드
npx next build && npx next export 
NODE_ENV=production node server.js
```

* 브라우저에서 `http://localhost:3000/page1` 로 접속하면, 아래와 같이 html response 가 내려옴.

```
<head> 
    // ...
    <style data-styled="" data-styled-version="5.0.1">
        .bcMPWx {
            color: blue;
            font-size: 18pt; 
        }
        data-styled.g1[id='sc-AxjAm'] { 
            content: 'bcMPWx,';
        } 
    </style>
</head>

// ...
```