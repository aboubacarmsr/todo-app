import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  state = {
    isEditing: false,
    task: this.props.task,
  };

  toggleForm = (e) => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editTodo(this.props.id, this.state.task);
    //Après mise à jour on remet le booleen isEditing à false pour sortir du mode edition
    this.toggleForm();
  };

  handleUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleToggle = (e) => {
    this.props.toggleCompletion(this.props.id);
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="task"
              id="task"
              onChange={this.handleUpdate}
              value={this.state.task}
            />
            <button>SAVE</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={this.props.completed ? "Todo-task completed" : "Todo-task"}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}> <i class="fas fa-pen"/> </button>
            <button onClick={this.handleRemove}> <i class="fas fa-trash"/> </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
