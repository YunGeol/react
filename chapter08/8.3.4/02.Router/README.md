##  chapter 8.3.4 - 02. Router 객체를 이용해서 페이지 이동하기

``` 코드 8-46 Router 객체를 이용하도록 page2.js 파일 수정하기
import Router from 'next/router';
// ...
export default function Page2({ text, data }) {
    return ( 
        <div>
            <button onClick={() => Router.push('/page1')}>page1로 이동</button> // ❶
            // ... 
        </div>
    ); 
}
```

* 페이지 이동을 위해 Router 객체를 이용하는 것과 Link 컴포넌트를 이용하는 것 사이에 기능적인 차이는 없다.
* 다만 Router 객체가 좀 더 동적인 코드에 적합하다.