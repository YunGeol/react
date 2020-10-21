## chapter 8.3.1 - 01.test-next

* initializing
```
mkdir 01.test-next 
cd 01.test-next
npm init -y
npm install next react react-dom
```

* pages
  * 넥스트에서 모든 페이지 컴포넌트는 pages 폴더 밑에 만들어야 한다.

* pages 폴더 아래에 page1.js 만들기
```
function Page1() { 
    return (
        <div>
            <p>This is home page</p>
        </div> 
    );
}
export default Page1;
```

* `npx next` 명령으로 개발 모드로 실행

* 브라우저에서 `http://localhost:3000/page1` 로 확인
  * 개발자 모드로 확인하면, 서버사이드 렌더링된 결과가 응답값으로 오는 것을 확인할 수 있다.
  * 아무런 설정을 하지 않고도 서버사이드 렌더링이 되는 웹사이트가 만들어졌다.
  
* 빌드 & start
```
npx next build && npx next start
```