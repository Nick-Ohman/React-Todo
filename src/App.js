import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const toDo = [
  
    {
      task: 'Organize Garage',
      id: 125,
      completed: false
    },
    
  
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      toDo: toDo,
    }
  }

  //rules or methods

  addItem = itemName => {
    const newItem ={
      task: itemName,
      id: Math.floor(Math.random() * 24 +1),
      completed: false,

    };
    this.setState({
      toDo: [...this.state.toDo, newItem]
    })
  }

  toggleItem = itemId =>{
    console.log(itemId);
    this.setState({
      toDo: this.state.toDo.map(item => {
        if (itemId === item.id){
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  }

    


  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoForm todo={this.state.todo} addItem={this.addItem}  />
        <TodoList toDo={this.state.toDo} toggleItem={this.toggleItem}/>

      </div>
    );
  }
}

export default App;
