import React, {Component} from 'react';
import Button from './Button2';
import Box from './Box2';

class App extends Component {
  render() {
    return (
      <div>
        <Button size="big" />
        <Button size="small" />
        <Box size="big" />
        <Box size="small" />
      </div>
    );
  }
}

export default App;
