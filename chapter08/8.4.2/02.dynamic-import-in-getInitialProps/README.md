# 8.4 넥스트 고급편
## 8.4.2 넥스트에서의 코드 분할
### getInitialProps 함수에서 동적 임포트 사용하기

``` page2
Page2.getInitialProps = async ({ query }) => {
    const { sayHello } = await import('../src/sayHello');
    const a = sayHello();
    console.log("a:" + a);
    return { sayHello: a };
};

export default function Page2({ sayHello }) {
    return (
        <div>
            <p>{`sayHello: ${sayHello}`}</p>
        </div>
    );
}
```

* 이전과 다르게 say Hello.js 모듈이 담긴 자바스크립트 파일이 전송되지 않는다.
* 이는 getInitial Props 함수가 서버 측에서 실행되어 클라이언트로 별도의 파일을 내려 줄 필요 가 없기 때문이다.
* page2로 이동하는 버튼을 클릭하면 getInitialProps 함수가 클라이언트에서 실행된다.
  * 이때는 sayHello.js 모듈이 담긴 자바스크립트 파일이 전송된다.

```
import Link from 'next/link';
export default function page1() {
    return (
        <div>
            <Link href="/page2">
                <a>page2로 이동</a>
            </Link>
        </div>
    );
}
```