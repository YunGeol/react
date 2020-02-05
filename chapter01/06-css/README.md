## CSS 속성 중복 회피하기

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
* Box1.css 와 Button1.css 에서 중복되는 클래스명 있음.
  * small 클래스와 big 클래스가 각각의 파일에 따로 정의되어 있음.
* npm run build 를 해서 build/static/css 디렉토리에 생성된 css 를 보면 같은 클래스명이 중복 정의되 있는 것을 확인할 수 있음.
  * 나중에 명시된 클래스 정의가 적용됨.
  
### 04. css-module로 문제 회피하기
* css-module을 사용하면 일반적인 css 파일에서 클래스명이 충돌할 수 있다는 단점을 극복할 수 있다.
* css 파일명을 아래와 같은 형식으로 하면 된다.
  * `{이름}.module.css`

[css-module 로 작성된 css 파일을 가져온 결과]
```
big: 'Button2_big__1AXxH',
small: 'Button2_small__1G4lx', 
button: ’Button2_box__D8Lg-’, 
```

## Sass 로 작성하기
* Sass는 CSS와 비슷하지만 별도의 문법을 이용해서 생산성이 높은 스타일 코드를 작성할 수 있게 도와준다.

[Sass 예, 변수사용]
```
$sizeNormal: 100px;

.box {
  width: $sizeNormal;
  height: 80px;
}

.button {
  width: $sizeNormal;
  height: 50px;
}
```

[Sass사용을 위한 패키지 설치]
```
npm install node-sass
```

[shared.scss]
```
$infoColor: #aaaaaa;  //변수선언
```

[Box3.module.scss]
```
@import './shared.scss';   //import

.big {
  width: 200px;
}
.small {
  width: 100px;
}
.box {
  height: 50px;
  background-color: $infoColor;  //변수 사용
}
```

## css-in-js
* CSS 코드를 자바스크립트 파일 안에서 작성한다.
* 공통되는 CSS 코드를 변수로 관리할 수 있다.
* 동적으로 CSS 코드를 작성하기 쉽다.

[styled-components 설치]
```
npm install styled-components
```

[Box4-1.js]
```
import React from 'react';
import styled from 'styled-components';     //import

const BoxCommon = styled.div`
  height: 50px;
  background-color: #aaaaaa;
`;
// styled-components 버전이 올라가면서 책에서 사용한 extend 함수가 styled 함수로 변경됐습니다.
const BoxBig = styled(BoxCommon)`       // BoxCommon 을 사용
  width: 200px;
`;
const BoxSmall = styled(BoxCommon)`     // BoxCommon 을 사용
  width: 100px;
`;

function Box({ size }) {
  if (size === 'big') {
    return <BoxBig>큰 박스</BoxBig>;
  } else {
    return <BoxSmall>작은 박스</BoxSmall>;
  }
}
export default Box;
```