##  chapter 8.3.5 - 01. 에러 페이지 구현하기

* Next.js 에서 제공하는 default error page 있음.
* `http:// localhost:3000/abc` 처럼 없는 페이지 호출 하면 default error page가 보임 

``` 코드 8-47 _error.js
ErrorPage.getInitialProps = ({ res, err }) => { // ❶
    // ❷
    const statusCode = res ? res.statusCode : err ? err.statusCode : null; 
    return { statusCode };
};
export default function ErrorPage({ statusCode }) { 
    return (
        <div>
            // ❸
            {statusCode === 404 && '페이지를 찾을 수 없습니다.'} 
            {statusCode === 500 && '알 수 없는 에러가 발생했습니다.'}  
            {!statusCode && '클라이언트에서 에러가 발생했습니다.'}
        </div> 
    );
}
```

```
npm init -y
npm next react react-dom
mkdir pages
cd pages
vi _error.js
vi page2.js
```

```코드 8-48 getInitialProps 함수에서 예외가 발생하도록 page2.js 파일 수정하기 
Page2.getInitialProps = async ({ query }) => {    
   throw new Error('exception in getInitialProps');
};
```