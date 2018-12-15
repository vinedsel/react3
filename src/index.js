import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// regular component

// const Grocerylist = props => {
//   return (
//     <ul>
//       <li>{props.item1}</li>
//       <li>{props.item2}</li>
//       <li>{props.item3}</li>
//     </ul>
//   );
// };
//
// ReactDOM.render(
//   <Grocerylist item1="Apples" item2="Oranges" item3="Mangoes" />,
//   document.getElementById('root')
// );


// main component

const App = props => {
  return(
    <div>
      <Hello name="Nikki" />
      <Hello name="Michael" />
      <Hello name="Andrew" />
    </div>
  );
};

const Hello = props => (
  <div>
    <h1>Hello, {props.name}!</h1>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
