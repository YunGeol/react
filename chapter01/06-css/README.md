### 01. 프로젝트 생성
```
npx create-react-app css-tes
```

### 02. Box1.css 와 Button1.css 를 동시에 import
[Box1.css]
```
.big {
  width: 200px;
}
.small {
  width: 100px;
}
.box {
  height: 50px;
  background-color: #aaaaaa;
}
``` 

[Button1.css]
```
.big {
  width: 100px;
}
.small {
  width: 50px;
}
.button {
  height: 30px;
  background-color: #aaaaaa;
}
```

### 03. 문제 상황
* Box1.css 와 Button1.css 에서 중복되는 부분이 있음.
  * small 속성과 big 속성이 각각의 파일에 따로 정의되어 있음.
* npm run build 를 해서 build/static/css 디렉토리에 생성된 css 를 보면 같은 속성이 중복 정의되 있는 것을 확인할 수 있음.
  * 나중에 적은 속성값이 적용됨.
  
 