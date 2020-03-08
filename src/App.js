// Reactはどこでも使われていない。
// JSXはトランスコンパイルされる場合に、Reactが使用される。
import React, {Component} from 'react';
class App extends Component {
  render() {
    return(
      //一つのタグを返さないければならない。React.Fragment
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" id="bar" onClick={() => {console.log("I am changed")}}/>
      </React.Fragment>
    );
  }
}

export default App;
