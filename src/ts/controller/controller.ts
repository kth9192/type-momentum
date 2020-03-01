import { todoJSON } from "./../../interface/interface";
import View from "../view/todoView";
import TodoModel from "../model/todoModel";

class Controller {
  view: View;
  todoModel: TodoModel;

  constructor(contactView: View, contactModel: TodoModel) {
    this.view = contactView;
    this.todoModel = contactModel;

    this.todoModel.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindRemoveTodo(this.handleRemoveTodo);
    this.view.bindCheckTodo(this.handleCheckEvent);

    this.onTodoListChanged(this.todoModel.todoArray);
  }

  onTodoListChanged = (todos: Array<todoJSON>) => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = (todoText: string) => {
    this.todoModel.saveToDoList(todoText);
  };

  handleRemoveTodo = (id: number) => {
    this.todoModel.deleteToDo(id);
  };

  handleCheckEvent = (id: number, checked: boolean) => {
    this.todoModel.checkTodo(id, checked);
  };
}

export default Controller;
