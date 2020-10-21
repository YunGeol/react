# 8.4 넥스트 고급편
## 8.4.2 넥스트에서의 코드 분할
### 여러 페이지에 공통으로 사용되는 코드 분할하기

* 넥스트는 여러 페이지에서 공통으로 사용되는 모듈을 별도의 번들 파일로 분할한다.
* 웹팩의 splitChunks 설정을 통해 코드를 분할하며 코드 변경에 따른 캐시 무효화(cache invalidation)를 최소화하는 방향으로 설계되어 있다.

```
npm init -y
npm install next react react-dom
```

``` 코드 8-53 src/util.js
export function add(a, b) { 
    console.log('called_add'); 
    return a + b;
}
```

``` pages/page1.js
// 코드 8-54 util.js 모듈을 사용하도록 page1.js 파일 수정하기 // ...
import { add } from '../src/util';
export default function Page1() { 
    return (
        <div>
            <p>{`10 + 20 = ${add(10, 20)}`}</p>
        </div> 
    );
}
```

* 빌드를 해 보면 .next/static/{해시값}/pages/page1.js 파일에 util.js 모듈의 코드 가 있다. 즉, util.js 모듈이 공통 모듈로 분리되지 않았다.
* 이제 page1.js 파일의 전체 코드를 page2.js 파일에 붙여넣자.
* 그리고 이전에 생성된 .next 폴더를 제거하고 넥스트를 빌드한다.
* 이번에는 .next/static/{해시 값}/pages/page1.js 파일에 util.js 모듈의 코드가 없는 것을 확인할 수 있다.
* util.js 모듈의 코드는 .next/static/chunks 폴더 밑에 있는 파일에 포함된다. 