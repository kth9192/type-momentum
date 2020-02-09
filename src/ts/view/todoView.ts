import { todoJSON } from "../../interface/interface";

class View {
  center: HTMLElement;
  todoForm: HTMLElement;
  todoList: HTMLElement;
  li!: HTMLElement;
  deleteBtn!: HTMLElement;
  span!: HTMLElement;
  chkBox!: HTMLInputElement;
  icon!: HTMLElement;
  todo__form_input: HTMLInputElement;
  addBtn: HTMLElement;

  removeEvent: any;

  constructor() {
    this.center = <HTMLElement>document.querySelector(".center");
    this.todoForm = document.querySelector(".todo__Form") as HTMLElement;
    this.todoList = document.querySelector(".todo__List") as HTMLElement;
    this.addBtn = document.querySelector(".todo__submit") as HTMLElement;
    this.todo__form_input = document.querySelector(
      ".todo__form_input"
    ) as HTMLInputElement;
  }

  get _todoText() {
    return this.todo__form_input.value;
  }

  displayTodos = (todos: Array<todoJSON>) => {
    while (this.todoList.hasChildNodes()) {
      this.todoList.removeChild(<ChildNode>this.todoList.firstChild);
    }

    todos.forEach(todo => {
      this.li = document.createElement("li") as HTMLElement;
      this.deleteBtn = document.createElement("button") as HTMLElement;
      this.span = document.createElement("span") as HTMLElement;
      this.chkBox = <HTMLInputElement>document.createElement("input");

      this.icon = document.createElement("i") as HTMLElement;
      this.icon.className += "far fa-trash-alt delete";

      this.deleteBtn.appendChild(this.icon);
      this.deleteBtn.className += "delete";

      this.chkBox.type = "checkbox";
      this.chkBox.className += "check";

      this.span.innerText = todo.text;

      this.li.appendChild(this.span);
      this.li.appendChild(this.chkBox);
      this.li.appendChild(this.deleteBtn);

      this.li.id = String(todo.id);

      this.li.addEventListener(
        "click",
        e => {
          if ((<Element>e.target).classList.contains("delete")) {
            console.log("====================================");
            console.log((<Element>e.currentTarget).id);
            console.log("====================================");

            this.removeEvent(Number((<Element>e.currentTarget).id));
          }
        },
        true
      );

      this.todoList.appendChild(this.li);

      // const toDoObj = {
      //   text: this._todoText,
      //   id: String(todos.length + 1)
      // };
    });
  };

  bindAddTodo(handler: any) {
    this.addBtn.addEventListener("click", e => {
      if (this._todoText) {
        handler(this._todoText);
        this.todo__form_input.value = "";
      }
    });
  }

  bindRemoveTodo(handler: any) {
    this.removeEvent = handler;
  }
}

export default View;
