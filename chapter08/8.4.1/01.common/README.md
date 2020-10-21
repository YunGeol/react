# 8.4 넥스트 고급편
## 8.4.1 페이지 공통 기능 구현하기

* 모든 페이지에서 공통으로 필요한 기능은 pages/_app.js 파일에서 구현할 수 있다. 
* 페이지가 전환되어도 메뉴 UI를 그대로 유지하고 싶다면 _app.js 파일에서 구현하는 게 좋다.

```코드 8-49 _app.js
import Link from 'next/link';
export default function MyApp({ Component, pageProps }) { ❶ 
    return (
        <div>
            // ❷
            <Link href="/page1">
                <a>page1</a> 
            </Link>
            <Link href="/page2"> 
                <a>page2</a>
            </Link>
            <Component {...pageProps} /> ❸ 
        </div>
    ); 
}
``` 

* MyApp 컴포넌트는 페이지가 전환되는 경우에도 언마운트되지 않는다. 
* 컴포넌트가 언마운트되지 않기 때문에 MyApp 컴포넌트에서 전역 상탯값을 관리할 수도 있다.