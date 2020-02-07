import Controller from "./controller/controller";
import TodoModel from "./model/todoModel";
import View from "./view/view";

const app = new Controller(new View(), new TodoModel());
