##  chapter 8.3.4 - 01. Link 컴포넌트를 이용해서 페이지 이동하기

``` 코드 8-45 Link 컴포넌트를 이용하도록 page1.js 파일 수정하기
// ...
import Link from 'next/link';
function Page1() { 
    return (
        <div>
            <Link href="/page2"> // ❶
                <a>page2로 이동</a> 
            </Link>
            
            // <a href="/page2">page2로 이동</a>

            // ... 
        </div>
    ); 
}
```

