import React from 'react';


class TodoForm extends React.Component {
    constructor(){
        super()
        this.state={
            keyword:'',
        }
    }

    handleChanges = e => {
        this.setState({
            keyword: e.target.value
        })
    }

    submitForm =e => {
        e.preventDefault();
        this.props.addItem(this.state.keyword);
        this.setState({
            keyword: ''
        });

    }
render() {
    return(
        <form>
            <input 
            
            onChange={this.handleChanges}
            type='text'
            name='item'
            value={this.state.keyword}
            />
            <button>Add</button>
        </form>
    )
}
};
export default TodoForm;