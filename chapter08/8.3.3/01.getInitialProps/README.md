## chapter 8.3.3 - 01.getInitialProps

* 넥스트에서는 getInitialProps라는 함수를 이용해서 페이지 컴포넌트로 속성 값을 전달한다.
* 각 페이지의 getInitialProps 함수는 페이지 진입 직전에 호출 된다.
* 사용자가 첫 페이지를 요청하면 getInitialProps 함수는 서버에서 호출된다.
* 이후 클라이언트에서 페이지 전환을 하면 getInitialProps 함수는 클라이언 트에서 호출된다.
* getInitialProps 함수가 반환하는 값은 페이지 컴포넌트의 속성값으로 입력 된다.
* 넥스트는 getInitialProps 함수가 서버에서 호출되는 경우, 반환값을 클 라이언트로 전달해 준다.
 
* page2.js
```
import { callApi } from '../src/api';
Page2.getInitialProps = async ({ query }) => { ❶ 
    const text = query.text || 'none'; ❷
    const data = await callApi(); ❸
    return { text, data }; ❹
};

export default function Page2({ text, data }) { ❺ 
    return (
        <div>
            <p>this is home page2</p> 
            <p>{`text: ${text}`}</p> 
            <p>{`data is ${data}`}</p>
        </div> 
    );
}
```

* 프로젝트 루트에 src 폴더를 만든 다음,
* src 폴더 밑에 api.js 파일을 만들고 다음 코드를 입력한다.
```
export function callApi(text) {
    return Promise.resolve("Hello, " + text);
}
```

```
<!DOCTYPE html>
<html>

<head>
    // ...
</head>

<body>
    <div id="__next">
        // ❶
        <div>
            <p>this is home page2</p>
            <p>text: 111222</p>
            <p>data : Hello, 111222</p>
            <p>userAgent : Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/86.0.4240.80 Safari/537.36</p>
        </div>
    </div>
    <script src="/_next/static/chunks/react-refresh.js?ts=1602994332286"></script>
    <script id="__NEXT_DATA__" type="application/json">
        {
            // ❷
            "props": {
                "pageProps": {
                    "text": "111222",
                    "data": "Hello, 111222",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36"
                }
            },
            "page": "/page2",
            "query": {
                "text": "111222"
            },
            "buildId": "development",
            "isFallback": false,
            "gip": true
        }
    </script>
    // ...
</body>

</html>
```