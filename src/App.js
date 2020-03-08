// Reactはどこでも使われていない。
// JSXはトランスコンパイルされる場合に、Reactが使用される。
import React from 'react';
// class App extends Component {
//   //クラスコンポーネント
//   render() {
//     return(
//       //一つのタグを返さないければならない。React.Fragment
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" id="bar" onClick={() => {console.log("I am changed")}}/>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
