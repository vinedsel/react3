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
  return ( <
    Employee name = "Elizabeth"
    age = {
      27
    }
    position = "Sales Manager" / >
  );
};

const Employee = props => ( <
  ul >
  <
  li > {
    props.name
  } < /li> <
  li > {
    props.age
  } < /li> <
  li > {
    props.position
  } < /li> < /
  ul >
);

Employee.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  position: PropTypes.string
}

ReactDOM.render( <
  App / > ,
  document.getElementById('root')
);
