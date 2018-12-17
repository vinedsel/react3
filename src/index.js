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

//_____________________________________________________________________________

// main component

// const App = props => {
//   return ( <
//     Employee name = "Elizabeth"
//     age = {
//       27
//     }
//     position = "Sales Manager" / >
//   );
// };
//
// const Employee = props => ( <
//   ul >
//   <
//   li > {
//     props.name
//   } < /li> <
//   li > {
//     props.age
//   } < /li> <
//   li > {
//     props.position
//   } < /li> < /
//   ul >
// );
//
// Employee.propTypes = {
//   name: PropTypes.string.isReqiured,
//   age: PropTypes.number.isReqiured,
//   position: PropTypes.string
// }
//
// Employee.defaultProps = {
//   position: "employee"
// }
//
// ReactDOM.render( <
//   App / > ,
//   document.getElementById('root')
// );

//_____________________________________________________________________________

// Rendering Data with the Map Function

// const App = props => {
//   const items = ['Bread', 'Milk', 'Eggs', 'Tea'];
//   return <List items={items} />;
// };
//
// const List = props => {
//   const listItems = props.items.map((item, index) => (
//     <li key={index}>{item}</li>
//   ));
//   return <ul>{listItems}</ul>;
// };
// ReactDOM.render(<App />, document.getElementById('root'));

//_____________________________________________________________________________

// Rendering Objects with the Map Function
