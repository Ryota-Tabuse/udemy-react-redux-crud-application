// Reactはどこでも使われていない。
// JSXはトランスコンパイルされる場合に、Reactが使用される。
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  //初期化処理
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // setStateが実行されると、画面がレンダリングされる。
    // そのコールバックにレンダリングがわかる。
    this.setState({ count: this.state.count + 1 });
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    console.log("render");
    return (
      <React.Fragment>
        <div>counter: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
