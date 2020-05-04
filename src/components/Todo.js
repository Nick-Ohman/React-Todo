import React from 'react';
import TodoList from './TodoList';

const Todo = props => {
    return(
    <p>{props.item.task}</p>
    )
}

export default Todo;