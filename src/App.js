// Reactはどこでも使われていない。
// JSXはトランスコンパイルされる場合に、Reactが使用される。
import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name: "NoName", age: 2}
  ];
  return (
    <div>
      {
        profiles.map((profile, index) => {
          //変化のあるDOMしか変更しないため。
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
