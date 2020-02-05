# create-react-app 으로 프로젝트 만들기

## nodejs 가 최신버전일 때
```
npx create-react-app cra-test
```

## nodejs 가 구버전일 때
```
npm install -g create-react-app 
create-react-app cra-test
```

## 실행
* 위의 명령어로 cra-test 아래에 react 프로젝트가 생성됨.
 
[프로젝트 실행]
```
cd cra-test 
npm start
// 브라우저 자동 열리면서 웹페이지 뜸
``` 

[생성된 프로젝트 구조]
```
cra-test
  ├─node modules\
  ├─public\
    ├─index.html
  ├─src
    ├─App.css 
    ├─App.js 
    ├─App.test.js
    ├─index.css 
    ├─index.js 
    ├─logo.svg 
    ├─serviceWorker.js
    └─setupTests.js
  ├─.gitignore 
  ├─package.json
  ├─package-lock.json
  └─README.md 
```

## 추가 내용

### 핵심 파일은 ...
* index.htm, index.js, package.json 파일 이름 변경하면 안됨.
* 나머지 파일들은 데모 앱을 위한 파일이므로 수정해도 된다.

### 파일 import
* src 폴더 바깥에 있는 파일을 import 로 가져오려하면 실패한다.
* index. htrnl에서 참조하는 파일은 public 폴더 밑에 있어야 한다. 
* public 폴더 밑에 있는 자바스크립트 파일이나 css 파일을 script 태그를 이용해서 index.html에 포함시킬 수 있다. 
* 하지만 특별한 이유가 없다면 index.html에 직접 연결하는 것보다는 ... 
* src 폴더 밑에서 import 키워드를 사용해서 포함시키는 게 좋다. 
* 그래야 자바스크립트 파일이나 css 파일의 경우 빌드 시 자동으로 압축 된다.

### PWA
* serviceWorker.js 파일에는 PWA(progressive web app)와 관련된 코드가 들어 있다
* PWA는 오프라인에서도 잘 동작하는 웹 애플리케이션을 만들기 위한 기술이다.
* create-react-app으로 프로젝트를 생성하면 PWA 기능은 기본적으로 꺼져 있는 상태다.
* PWA 기능을 원한다면 index.js 파일에 serviceWorker.register(); 코드를 넣으면 된다.

### HTTPS
* 맥: HTTPS=true npm start
* 윈도우: set HTTPS=true && npm start

### 빌드하기
[빌드]
```
npm run build
```

* build 디렉토리가 생기고 빌드된 파일이 여기 담긴다.

[빌드된 파일 실행]
```
npx serve -s build
``` 

[이미지 파일 불러오기]
```
import smalllmage from '. /small.jpeg';
import biglmage from './big.jpeg'; 

class App extends Component { 
    render() {  
        return ( 
            <div className="App">
                <img src={biglmage} />
                <img src={smalllmage} />
                
//...
```
* 위와 같이 이미지를 불러올 수 있고..
* 작은 이미지일 경우 main.{해시값}.js 파일안에 문자열 형태로 포함될 수도 있다.


[테스트 코드 실행]
```
npm test
```

* create-react-app에는 제스트(jest)라는 테스트 프레임워크를 기반으로 테스트 시스템이 구축되어 있다.

### 테스트 파일 인식 기준
* __tests__ 폴더 밑에 있는 모든 자바스크립트 파일 
* 파일 이름이 .test.js로 끝나는 파일 
* 파일 이름이 .spec.js로 끝나는 파일

### test code

[util.js]
```
export function addNumber(a, b) {
    return a;
}
```

[util.test.js]
```
import { addNumber } from './util';

it('add two numbers', () => {
    const result = addNumber(1, 2);
    expect(result).toBe(3);
});
```

[test 결과]
```
npm test

> cra-test@0.1.0 test D:\ws\experiment\react\chapter01\05-create-react-app\cra-test
> react-scripts test
 FAIL  src/util.test.js
  × add two numbers (3ms)

  ● add two numbers

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: 1

      3 | it('add two numbers', () => {
      4 |     const result = addNumber(1, 2);
    > 5 |     expect(result).toBe(3);
        |                    ^
      6 | });

      at Object.<anonymous> (src/util.test.js:5:20)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.155s
Ran all test suites related to changed files.
```

### create-react-app 설정 보기, 변경하기

[내부 설정 파일이 노출되도록 함]
```
npm run eject
```

* react-scripts 프로젝트를 포크(fork) 해서 나만의 스크립트를 만들 수 있다.
* react-app-rewired 패키지를 사용하면  create-react-app의 설정을 변경할 수 있다고 함.
 

### 자바스크립트 지원 범위
* create-react -app에서는 ES6의 모든 기능 지원한다.
* 지수 연산자(exponentiation operator) 
* async await 함수 
* 나머지 연산자(rest operator), 전개 연산자(spread operator) 
* 동적 임포트(dynarnic irnport) 
* 클래스 필드(class field) 
* JSX 문볍 
* 타입스크립트(typescript) , 플로(f]ow) 타입 시스템

### create-react-app 의 폴리필(polyfill)
* ES8에 추가된 String.padStart 함수를 사용하고 싶다고 가정해 보자.
* core-js 패키지를 사용하면 다양한 폴리필을 선택적으로 사용할 수 있다. 

[core-js 패키지 설치]
npm install core-js

[폴리필(polyfill) 추가]
```
// index.js
import 'core-js/features/string/pad-start';

// someFile.js
const value = '123'.padStart(5, '0');  // '00123'
```

* index.js 파일에서 한번만 가져오면 모든 곳에서 자유롭게 사용할 수 있다.
* 폴리필(polyfill) : 동적으로 기능을 안전하게 추가할 수 있는 방법


### 코드 분할
* 코드 분할(code splitting) 을 이용하면 사용자에게 필요한 양의 코드만 내려 줄 수 있다.
* 코드 분할을 사용하지 않으면 전체 코드를 한번에 내려주기 때문에 첫 페이지가 뜨는 시간이 오래 걸린다.
* 코드를 분할하는 한 가지 방법은 동적 import 를 이용하는 것이다.

동적 import 예제... Todo.js, TodoList.js
"할 일 추가" 버튼 클릭 시, 동작에 필요한 Todo.js 파일을 맨 처음 한번만 내려받는다. 


### 환경 변수 사용하기
* create-react-app 에서는 빌드 시점에 환경 변수를 코드로 전달할 수 있다
* 전달된 환경 변수는 코드에서 process.env.{환경 변수 이를}으로 접근할 수 있다.
* create-react-app에서는 NODE_ENV 환경 변수를 기본으로 제공한다. 
* NODE_ENV 환경 변수의 값은 다음과 같이 결정된다.
  * npm start로 실행하면 development 
  * npm test로 실행하면 test 
  * npm run build로 실행하면 production 
* NODE_ENV 환경 변수 외 에 다른 환경 변수는 `REACT_APP_` 접두사를 붙여야 한다. 

[NODE_ENV 환경변수 확인하기]
```
console.log('NODE_ENV = ${process.env.NODE_ENV}'); 
```

[환경변수 입력하기]
```
• 맥: REACT_APP _API_URL=api.myapp.com npm start 
• 윈도우: set "REACT_APP_API_URL=api.myapp.com" && npm start 
```


