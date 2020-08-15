import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: uuidv4(), completed: false });
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="newtodo">New todo: </label>
        <input
          type="text"
          name="task"
          id="newtodo"
          value={this.state.task}
          onChange={this.handleChange}
        />
        {
          this.state.task.length >= 1 && <button>ADD</button>
        }
      </form>
    );
  }
}

export default NewTodoForm;
