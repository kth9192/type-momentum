import { todoJSON } from "../../interface/interface";

class TodoModel {
  private TODO_STORAGE: string;
  public todoArray: Array<todoJSON>;
  onTodoListChanged!: Function;

  constructor() {
    this.TODO_STORAGE = "ToDo";
    this.todoArray = this.loadToDoList();
  }

  bindTodoListChanged(callback: Function) {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Array<todoJSON>) {
    this.onTodoListChanged(todos);
    localStorage.setItem(this.TODO_STORAGE, JSON.stringify(this.todoArray));
  }

  loadToDoList(): Array<todoJSON> {
    const loadedToDo = localStorage.getItem(this.TODO_STORAGE);

    if (loadedToDo !== null) {
      const parseTodo = JSON.parse(loadedToDo);
      return parseTodo;
    }

    return [];
  }

  saveToDoList(saveTxt: string) {
    const todo = {
      id:
        this.todoArray.length > 0
          ? this.todoArray[this.todoArray.length - 1].id + 1
          : 1,
      text: saveTxt
    };
    this.todoArray.push(todo);

    this._commit(this.todoArray);
  }

  deleteToDo(id: number) {
    this.todoArray = this.todoArray.filter(toDo => {
      console.log("====================================");
      console.log("todo", typeof id);
      console.log("====================================");
      return toDo.id !== id;
    });

    console.log("====================================");
    console.log("삭제", this.todoArray, id);
    console.log("====================================");
    this._commit(this.todoArray);
  }
}

export default TodoModel;
