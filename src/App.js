import React, {Component} from 'react';
class App extends Component {
  //why?
    /**
     * したのようにトランスパイルされる。
     * JSXの方が可読性が高い。
     */
  render() {
    //これがJSX (JS XML) JSの拡張言語
    return <h1>Hello.World!</h1>;
  }
}

// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello,World!!!"
//     );
//   }
// }

export default App;
