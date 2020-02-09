import Controller from "./controller/controller";
import TodoModel from "./model/todoModel";
import TodoView from "./view/todoView";
import BgModel from "./model/bgModel";
import BgView from "./view/bgView";
import BgController from "./controller/bgController";
import Clock from "./clock";
import "../assets/css";

const todoApp = new Controller(new TodoView(), new TodoModel());
const backgroundApp = new BgController(new BgView(), new BgModel());
const clock = new Clock();
clock.init();
