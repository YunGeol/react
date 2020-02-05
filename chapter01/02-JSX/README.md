# JSX, Babel

### 01. 준비
```
{project root}
  ├─react.development.js
  ├─react-dom.development.js
  ├─simple4.html
  └─src 
    └─simple4.js
``` 

simple4.html
```
<html>
  <body>
    <h2>안녕하세요. 이 프로젝트가 마음에 드시면 좋아요 버튼을 눌러주세요.</h2>
    <div id="react-root"></div>
    <script src="react.development.js"></script>
    <script src="react-dom.development.js"></script>
    <script src="dist/simple4.js"></script>
  </body>
</html>
```

src/simple4.js
```
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    const text = this.state.liked ? '좋아요 취소4' : '좋아요';
    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      text,
    );
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <LikeButton />
        <div style={{ marginTop: 20 }}>
          <span>현재 카운트: </span>
          <span>{this.state.count}</span>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            증가
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            감소
          </button>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);
```


### 02. 바벨 설치하기
npm install @babel/core @babel/cli @babel/preset-react

node_modules/ 과 package-lock.json 추가됨
```
{project root}
  ├─node_modules/           *
  ├─package-lock.json       *
  ├─react.development.js
  ├─react-dom.development.js
  ├─simple4.html
  └─src 
    └─simple4.js
```

### 03. 바벨로 코드 변환하기
npx babel --watch src --out-dir dist --presets @babel/preset-react

```
{project root}
  └─dist
    └─simple4.js            * 변환된 js 파일이 생성되었음.
  ├─node_modules/
  ├─package-lock.json
  ├─react.development.js
  ├─react-dom.development.js
  ├─simple4.html
  └─src 
    └─simple4.js
```