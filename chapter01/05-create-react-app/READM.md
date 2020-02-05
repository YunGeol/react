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

### 파일 import
* public 폴더 밑에 있는 자바스크립트 파일이나 css 파일을 script 태그를 이용해서 index.html에 포함시킬 수 있다. 
* 하지만 특별한 이유가 없다면 index.html에 직접 연결하는 것보다는 ... 
* src 폴더 밑에서 import 키워드를 사용해서 포함시키는 게 좋다. 
* 그래야 자바스크립트 파일이나 css 파일의 경우 빌드 시 자동으로 압축 된다.

### PWA
* serviceWorker.js 파일에는 PWA(progressive web app)와 관련된 코드가 들어 있다
* PWA는 오프라인에서도 잘 동작하는 웹 애플리케이션을 만들기 위한 기술이다.
* create-react-app으로 프로젝트를 생성하면 PWA 기능은 기본적으로 꺼져 있는 상태다.
* PWA 기능을 원한다면 index.js 파일에 serviceWorker.register(); 코드를 넣으면 된다.

 