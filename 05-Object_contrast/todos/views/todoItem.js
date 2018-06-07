import React, {PropTypes} from 'react';
// import { connect } from 'react-redux';
import {toggleTodo, removeTodo} from '../actions.js';
import {dispatch} from '../../Store'

class TodoItem extends React.Component {

  onToggle = () => {
    let id = this.props.todo.id
    dispatch(toggleTodo(id));
  }

  onRemove = () => {
    let id = this.props.todo.id
    dispatch(removeTodo(id));
  }

  render () {
    let { completed, text } = this.props.todo
    const checkedProp = completed ? {checked: true} : {};
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
  todo: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps
  return {
    onToggle: () => {
      dispatch(toggleTodo(id));
    },
    onRemove: () => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
// export default TodoItem
