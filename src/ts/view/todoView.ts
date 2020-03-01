import { todoJSON } from "../../interface/interface";

class View {
  center: HTMLElement;
  todoForm: HTMLElement;
  todoList: HTMLElement;
  li!: HTMLElement;
  deleteBtn!: HTMLElement;
  span!: HTMLElement;
  boxCover!: HTMLElement;
  chkBox!: HTMLInputElement;
  icon!: HTMLElement;
  todo__form_input: HTMLInputElement;
  addBtn: HTMLElement;
  label!: HTMLElement;
  labelCover!: HTMLElement;

  chkIcon!: HTMLElement;

  removeEvent: any;
  checkEvent: any;

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
      this.li.classList.add("todo__List__item");
      this.deleteBtn = document.createElement("button") as HTMLElement;
      this.span = document.createElement("span") as HTMLElement;
      this.boxCover = <HTMLElement>document.createElement("div");
      this.chkBox = <HTMLInputElement>document.createElement("input");
      this.labelCover = <HTMLElement>document.createElement("div");
      this.label = <HTMLElement>document.createElement("label");
      this.label.innerHTML = todo.text;

      this.chkIcon = <HTMLElement>document.createElement("i");
      this.chkIcon.classList.add("icon", "mdi", "mdi-check");

      this.boxCover.classList.add(
        "chkCover",
        "pretty",
        "p-icon",
        "p-round",
        "p-jelly"
      );

      this.icon = document.createElement("i") as HTMLElement;
      this.icon.className += "fas fa-trash fa-lg delete";

      this.deleteBtn.appendChild(this.icon);
      this.deleteBtn.className += "delete";

      this.chkBox.type = "checkbox";
      this.chkBox.className += "check";
      this.chkBox.checked = todo.checked;
      this.chkBox.addEventListener("click", e => {
        let id = Number(
          (<HTMLElement>(<HTMLInputElement>e.target).parentNode?.parentNode).id
        );
        let check = (<HTMLInputElement>e.target).checked;

        check
          ? (this.label.style.textDecoration = "line-through")
          : (this.label.style.textDecoration = "none");

        this.checkEvent(id, check);
      });

      this.labelCover.classList.add("state", "p-primary");
      this.labelCover.appendChild(this.chkIcon);
      this.labelCover.appendChild(this.label);

      this.boxCover.appendChild(this.chkBox);
      this.boxCover.appendChild(this.labelCover);

      // this.span.innerText = todo.text;

      // this.li.appendChild(this.span);
      this.li.appendChild(this.boxCover);
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

    this.todo__form_input.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        if (this._todoText) {
          handler(this._todoText);
          this.todo__form_input.value = "";
        }
      }
    });
  }

  bindRemoveTodo(handler: any) {
    this.removeEvent = handler;
  }

  bindCheckTodo(handler: any) {
    this.checkEvent = handler;
  }
}

export default View;
