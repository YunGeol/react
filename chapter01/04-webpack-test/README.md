# webpack 사용해 보기
## 왜 필요한가?
* webpack 은 자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 툴.
* 한 페이지에 포함시켜야 할 자바스크립트 파일 수가 수십 또는 수백개가 필요할 수도 있음.
* 이런 식으로 늘어나는 자바스크립트 파일을 관리하기 힘들다.
* 파일 간의 의존성 문제도 있다. 선언되는 순서를 신경 써야 한다.
* 전역변수를 덮어쓸 수 있는 위험 있다.
* webpack 은 자바스크립트 파일 압축, CSS 전처리 등 유용한 기능이 많다.  

## 사용해보기
### 01. package.json 부터 만들기

```
npm init -y
```

* 위의 명령을 수행하면 package.json 이 만들어짐
```
{project root}
  └─package.json
```

```
# package.json 내용
{
  "name": "tmp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 02. dependency 설치

```
npm install webpack webpack-cli react react-dom
```

* webpack, webpack-cli, react, react-dom 에 대한 모듈들과 관련 dependency들이 현재 디렉토리 아래에 설치됨.
* package-lock.json 파일과 node_modules/ 디렉토리가 만들어짐.
* node_modules/ 디렉토리에는 관련 라이브러리 파일들이, package-lock.json 에는 dependency 정의가 들어가 있는 듯.
* 아래처럼 파일들이 생성된 상태
```
{project root}
  ├─node_modules/
  ├─package.json
  └─package-lock.json
```
 
### 03. index.html 과 src/Button.js , src/index.js 추가
```
{project root}
  ├─index.html
  ├─node_modules/
  ├─package.json
  ├─package-lock.json
  └─src 
    ├─Button.js
    └─index.js
```

### 04. webpack 을 이용해 파일들을 합치기
```
npx webpack
```

```
{project root}
  └─dist
    └─main.js
  ├─index.html
  ├─node_modules/
  ├─package.json
  ├─package-lock.json
  └─src 
    ├─Button.js
    └─index.js
```
