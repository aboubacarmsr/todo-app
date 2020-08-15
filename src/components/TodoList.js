import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'

class TodoList extends Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  //On a besoin de l'id et du contenu modifié depuis le fichier Todo.js
  //On crée un nouveau tableau et on fait un map dans le state pour trouver le toto à modifier
  //On le modifie puis on set le state au nouveau tableau
  editTodo = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  };

  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  };

  render() {
    //Mapping à travers le tableau d'objet pour chaque case (todo) on envoie la propriété task au composant Todo
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.removeTodo}
          editTodo={this.editTodo}
          toggleCompletion={this.toggleCompletion}
        />
      );
    });

    return (
      <div className="TodoList">
          <h1>
              Todo List App <span>Add, Delete, Edit your todos. Click on them to set them completed</span>
          </h1>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
