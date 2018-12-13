import React from 'react';
import ReactDOM from 'react-dom';

const Grocerylist = props => {
  return (
    <ul>
      <li>{props.item1}</li>
      <li>{props.item2}</li>
      <li>{props.item3}</li>
    </ul>
  );
};

ReactDOM.render(
  <Grocerylist item1="Apples" item2="Oranges" item3="Mangoes" />,
  document.getElementById('root')
);
