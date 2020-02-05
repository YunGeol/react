# 단일 페이지 애플리케이션 만들기

## 브라우저 앞으로가기 뒤로가기 이벤트 잡기

[프로젝트 생성]
```
npx create-react-app router-test 
```

* 단일 페이지 애플리케이션 구현이 가능하려면 다음 두 가지 기능이 필요하다.
  * 자바스크립트에서 브라우저로 페이지 전환 요청을 보낼 수 있다. 단, 브라우저는 서버로 요청을 보내지 않아야한다.
  * 브라우처의 뒤로 가기와 같은 사용자의 페이지 전환 요청을 자바스크립트에서 처리할 수 있다. 이때도 브라우저는 서버로 요청을 보내지 않아야 한다. 
   
이러한 조건을 만족하는 브라우저 API는 
pushState, replaceState 함수와 popState 이벤트이다. 
API 이름에서 알 수 있듯이 브라우저에는 히스토리에 state 를 저장하는 스택(stack)이 존재한다.


```
import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    window.onpopstate = function(event) { // 브라우저 뒤로가기 앞으로 가기 이벤트가 잡힘
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => window.history.pushState('v1', '', '/page1')}>
          page1
        </button>
        <button onClick={() => window.history.pushState('v2', '', '/page2')}>
          page2
        </button>
      </div>
    );
  }
}

export default App;
```

## react-router-dom 사용하기
* 브라우저 히스토리 API를 이용해서 페이지 라우팅 처리를 직접 구현할 수도 있지만 신경 써야 할 부분이 많다.
* 이럴 때 도움이 되는 것이 react-router-dom 으로, 리액트로 단일 페이지 애플리케이션을 만들 때 많이 사용된다. 

[react-router-dom 설치]
```
npm install react-router-dom
``` 

* App-3.js 와 Rooms.js 추가. App-3.js의 내용을 App.js 에 덮어씌움.

[변경된 App.js 내용]
```
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Rooms from './Rooms';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: 20, border: '5px solid gray' }}>
          <Link to="/">홈</Link>
          <br />
          <Link to="/photo">사진</Link>
          <br />
          <Link to="/rooms">방 소개</Link>
          <br />
          <Route exact path="/" component={Home} />
          <Route path="/photo" component={Photo} />
          <Route path="/rooms" component={Rooms} />
        </div>
      </BrowserRouter>
    );
  }
}

function Home({ match }) {
  return <h2>이 곳은 홈페이지입니다.</h2>;
}
function Photo({ match }) {
  return <h2>여기서 사진을 감상하세요.</h2>;
}

export default App;
```

[Rooms.js 의 내용]
```
import React from 'react';
import { Route, Link } from 'react-router-dom';

function Rooms({ match }) {
  return (
    <div>
      <h2>여기는 방을 소개하는 페이지입니다.</h2>
      <Link to={`${match.url}/blueRoom`}>파란 방입니다</Link>
      <br />
      <Link to={`${match.url}/greenRoom`}>초록 방입니다</Link>
      <br />
      <Route path={`${match.url}/:roomId`} component={Room} />
      <Route
        exact
        path={match.url}
        render={() => <h3>방을 선택해 주세요.</h3>}
      />
    </div>
  );
}
export default Rooms;

function Room({ match }) {
  return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
}

```

* Rooms 컴포넌트 내부에는 또다시 라우팅을 처리하는 코드가 들어 있다
* Route를 통해서 렌더링되는 컴포넌트는 match라는 속성값을 사용할 수 있다
* match.url 은 Route 컴포넌트의 path 속성값과 같다
  * 따라서, Rooms 컴포넌트의 match.url은 /rooms와 같다.
* Route 컴포넌트의 path 속성값에서 콜론을 사용하면 파라미터를 나타낼 수 있다.
  * 추출된 파라미터는 match.params.{파라미터 이름} 형식으로 사용될 수 있다. 
 