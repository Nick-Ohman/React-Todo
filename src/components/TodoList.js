// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'


const TodoList = props => {

    return(
        
        <div className='todo-list'>
            {props.toDo.map(item => (
               <p>{item.task}</p> 
            ))}
            <button classname ='clear-btn'>
                Clear Todo's
            </button>
            
        </div>
    )

}

export default TodoList;