import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    window.onpopstate = function(event) { // 브라우저의 뒤로가기 버튼 이벤트가 잡힘
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
