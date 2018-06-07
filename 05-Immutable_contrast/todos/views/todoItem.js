import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable'
import {toggleTodo, removeTodo} from '../actions.js';

class TodoItem extends React.Component {
  onToggle = () => {
    let id = this.props.todo.get('id')
    console.log(this.props)
    this.context.store.dispatch(toggleTodo(id));
  }

  onRemove = () => {
    let id = this.props.todo.get('id')
    this.context.store.dispatch(removeTodo(id));
  }

  render () {
    let { completed, text } = this.props.todo.toJS()
    console.log('item', this.props.todo.toJS())
    const checkedProp = completed ? {checked: true} : {};
    console.log('Render TodoItem: ', text)
    return (
      <li
        className="todo-item"
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={this.onToggle} />
        <label className="text">{text}</label>
        <button className="remove" onClick={this.onRemove}>×</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Map).isRequired,
}

TodoItem.contextTypes = {
  store: PropTypes.object
}

// const mapStateToProps = (todo) => {
//   return {
//     todo
//   };
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const {id} = ownProps
//   return {
//     onToggle: () => {
//       dispatch(toggleTodo(id));
//     },
//     onRemove: () => {
//       dispatch(removeTodo(id));
//     }
//   };
// };

export default connect(null, null)(TodoItem);
// export default TodoItem
