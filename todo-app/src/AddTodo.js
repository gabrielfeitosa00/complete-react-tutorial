import React, {Component} from 'react';

class AddTodo extends Component {

    state={
        content:''
    };

    handdleChange=(e)=>{
        this.setState({
            content: e.target.value
        })
    }

    handdleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:'',
        })
    }

    render (){

        return (
            <form onSubmit={this.handdleSubmit} >
                <label htmlFor="">Add new todo:</label>
                <input type="text" onChange={this.handdleChange} value={this.state.content} />
            </form>
        )

    }

}

export default AddTodo;