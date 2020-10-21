## chapter 8.3.1 - 02.icon-image

* initializing
```
mkdir 02.icon-image 
cd 02.icon-image
npm init -y
npm install next react react-dom
```

* static
  * static 디렉토리 만들고 그 안에 이미지 파일 올림.

* pages 폴더 아래에 page1.js 만들기
  * page1.js 에서 static 폴더에 올린 이미지 파일 호출

```
import Head from 'next/head';

function Page1() {
    return (
        <div>
            <p>this is home page</p>
            <img src="/static/icon.jpeg"/>
            <Head>
                <title>page1</title>
            </Head>
            <Head>
                <meta name="description" content="hello world"/>
            </Head>
            <style jsx>
                {` p{
                    color: blue;
                    font-size: 18pt; 
                    }
                `}
            </style>
        </div>
    );
}
export default Page1;
```

* `npx next` 명령으로 개발 모드로 실행
  
* 브라우저에서 `http://localhost:3000/page1` 로 확인

## 설명
* static 폴더아래의 resource(이미지 등) 들을 불러올 수 있다.
* styled-jsx 패키지를 통해서 css-in-js 방식을 지원한다.
  * styled-components와 같은 다른 패키지를 사용하는 것도 가능하다.
