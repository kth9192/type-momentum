/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/controller */ "./src/ts/controller/controller.ts");
/* harmony import */ var _model_todoModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/todoModel */ "./src/ts/model/todoModel.ts");
/* harmony import */ var _view_todoView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/todoView */ "./src/ts/view/todoView.ts");
/* harmony import */ var _model_weatherModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/weatherModel */ "./src/ts/model/weatherModel.ts");
/* harmony import */ var _view_weatherView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/weatherView */ "./src/ts/view/weatherView.ts");
/* harmony import */ var _controller_weatherController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller/weatherController */ "./src/ts/controller/weatherController.ts");
/* harmony import */ var _model_bgModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/bgModel */ "./src/ts/model/bgModel.ts");
/* harmony import */ var _view_bgView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/bgView */ "./src/ts/view/bgView.ts");
/* harmony import */ var _controller_bgController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller/bgController */ "./src/ts/controller/bgController.ts");









var todoApp = new _controller_controller__WEBPACK_IMPORTED_MODULE_0__["default"](new _view_todoView__WEBPACK_IMPORTED_MODULE_2__["default"](), new _model_todoModel__WEBPACK_IMPORTED_MODULE_1__["default"]());
var weatherApp = new _controller_weatherController__WEBPACK_IMPORTED_MODULE_5__["default"](new _view_weatherView__WEBPACK_IMPORTED_MODULE_4__["default"](), new _model_weatherModel__WEBPACK_IMPORTED_MODULE_3__["default"]());
var backgroundApp = new _controller_bgController__WEBPACK_IMPORTED_MODULE_8__["default"](new _view_bgView__WEBPACK_IMPORTED_MODULE_7__["default"](), new _model_bgModel__WEBPACK_IMPORTED_MODULE_6__["default"]());


/***/ }),

/***/ "./src/ts/controller/bgController.ts":
/*!*******************************************!*\
  !*** ./src/ts/controller/bgController.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BackgroundController = /** @class */ (function () {
    function BackgroundController(view, model) {
        var _this = this;
        this.onBackgroundChanged = function () {
            _this.backgroundView.paintImg(_this.backgroundModel.createRandomBG());
        };
        this.backgroundView = view;
        this.backgroundModel = model;
        this.onBackgroundChanged();
    }
    return BackgroundController;
}());
/* harmony default export */ __webpack_exports__["default"] = (BackgroundController);


/***/ }),

/***/ "./src/ts/controller/controller.ts":
/*!*****************************************!*\
  !*** ./src/ts/controller/controller.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Controller = /** @class */ (function () {
    function Controller(contactView, contactModel) {
        var _this = this;
        this.onTodoListChanged = function (todos) {
            _this.view.displayTodos(todos);
        };
        this.handleAddTodo = function (todoText) {
            _this.todoModel.saveToDoList(todoText);
        };
        this.handleRemoveTodo = function (id) {
            _this.todoModel.deleteToDo(id);
        };
        this.view = contactView;
        this.todoModel = contactModel;
        this.todoModel.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindRemoveTodo(this.handleRemoveTodo);
        this.onTodoListChanged(this.todoModel.todoArray);
    }
    return Controller;
}());
/* harmony default export */ __webpack_exports__["default"] = (Controller);


/***/ }),

/***/ "./src/ts/controller/weatherController.ts":
/*!************************************************!*\
  !*** ./src/ts/controller/weatherController.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var WeatherController = /** @class */ (function () {
    function WeatherController(weatherView, weatherModel) {
        var _this = this;
        this.onWeatherUpdate = function (temperature, place) {
            _this.weatherView.updateWeatherTxt(temperature, place);
        };
        this.weatherView = weatherView;
        this.weatherModel = weatherModel;
        this.weatherModel.bindWeatherChanged(this.onWeatherUpdate);
    }
    return WeatherController;
}());
/* harmony default export */ __webpack_exports__["default"] = (WeatherController);


/***/ }),

/***/ "./src/ts/model/bgModel.ts":
/*!*********************************!*\
  !*** ./src/ts/model/bgModel.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BackgroundModel = /** @class */ (function () {
    function BackgroundModel() {
        var _this = this;
        this.IMG_NUMBER = 3;
        this.createRandomBG = function () {
            var num = Math.floor(Math.random() * _this.IMG_NUMBER);
            console.log(num);
            return num;
        };
    }
    Object.defineProperty(BackgroundModel.prototype, "imgNumber", {
        get: function () {
            return this.IMG_NUMBER;
        },
        enumerable: true,
        configurable: true
    });
    return BackgroundModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (BackgroundModel);


/***/ }),

/***/ "./src/ts/model/todoModel.ts":
/*!***********************************!*\
  !*** ./src/ts/model/todoModel.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TodoModel = /** @class */ (function () {
    function TodoModel() {
        this.TODO_STORAGE = "ToDo";
        this.todoArray = this.loadToDoList();
    }
    TodoModel.prototype.bindTodoListChanged = function (callback) {
        this.onTodoListChanged = callback;
    };
    TodoModel.prototype._commit = function (todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem(this.TODO_STORAGE, JSON.stringify(this.todoArray));
    };
    TodoModel.prototype.loadToDoList = function () {
        var loadedToDo = localStorage.getItem(this.TODO_STORAGE);
        if (loadedToDo !== null) {
            var parseTodo = JSON.parse(loadedToDo);
            return parseTodo;
        }
        return [];
    };
    TodoModel.prototype.saveToDoList = function (saveTxt) {
        var todo = {
            id: this.todoArray.length > 0
                ? this.todoArray[this.todoArray.length - 1].id + 1
                : 1,
            text: saveTxt
        };
        this.todoArray.push(todo);
        this._commit(this.todoArray);
    };
    TodoModel.prototype.deleteToDo = function (id) {
        this.todoArray = this.todoArray.filter(function (toDo) {
            console.log("====================================");
            console.log("todo", typeof id);
            console.log("====================================");
            return toDo.id !== id;
        });
        console.log("====================================");
        console.log("삭제", this.todoArray, id);
        console.log("====================================");
        this._commit(this.todoArray);
    };
    return TodoModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (TodoModel);


/***/ }),

/***/ "./src/ts/model/weatherModel.ts":
/*!**************************************!*\
  !*** ./src/ts/model/weatherModel.ts ***!
  \**************************************/
/*! exports provided: WEATHER_KEY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEATHER_KEY", function() { return WEATHER_KEY; });
var WEATHER_KEY = "f1be9aa96f21308aa6c1db387568b8d0";
var WeatherModel = /** @class */ (function () {
    function WeatherModel() {
        var _this = this;
        this.bindWeatherChanged = function (callback) {
            _this.onWeatherUpdate = callback;
        };
        this.saveCoords = function (coordsObj) {
            localStorage.setItem(_this.COORDS_STORAGE, JSON.stringify(coordsObj));
        };
        this.handleGeoSuccess = function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var coordsObj = {
                latitude: latitude,
                longitude: longitude
            };
            _this.saveCoords(coordsObj);
            _this.getWeather(latitude, longitude);
        };
        this.handleGeoError = function () {
            console.log("geo error");
        };
        this.askCoords = function () {
            navigator.geolocation.getCurrentPosition(_this.handleGeoSuccess, _this.handleGeoError);
        };
        this.loadCoords = function () {
            var loadedCoords = localStorage.getItem(_this.COORDS_STORAGE);
            if (loadedCoords === null) {
                _this.askCoords();
            }
            else {
                var parseCoords = JSON.parse(loadedCoords);
                console.log(parseCoords);
                _this.getWeather(parseCoords.latitude, parseCoords.longitude);
            }
        };
        this.getWeather = function (lat, lon) {
            fetch(_this.baseUrl + "/weather?lat=" + lat + "&lon=" + lon + "&appid=" + WEATHER_KEY + "&units=metric")
                .then(function (response) {
                return response.json();
            })
                .then(function (json) {
                var temperature = json.main.temp;
                var place = json.name;
                console.log(temperature, place);
                _this.onWeatherUpdate(temperature, place);
            });
        };
        this.COORDS_STORAGE = "coords";
        this.baseUrl = "https://api.openweathermap.org/data/2.5";
        this.loadCoords();
    }
    return WeatherModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (WeatherModel);


/***/ }),

/***/ "./src/ts/view/bgView.ts":
/*!*******************************!*\
  !*** ./src/ts/view/bgView.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BackgroundView = /** @class */ (function () {
    function BackgroundView() {
        this.body = document.querySelector("body");
        this.imgArr = [
            "https://cdn.pixabay.com/photo/2020/02/03/17/39/beach-4816249_960_720.jpg"
        ];
    }
    BackgroundView.prototype.paintImg = function (imgNumber) {
        var newImg = new Image();
        newImg.src = this.imgArr[imgNumber];
        newImg.classList.add("bgImg");
        console.log(newImg.src);
        this.body.prepend(newImg);
    };
    return BackgroundView;
}());
/* harmony default export */ __webpack_exports__["default"] = (BackgroundView);


/***/ }),

/***/ "./src/ts/view/todoView.ts":
/*!*********************************!*\
  !*** ./src/ts/view/todoView.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var View = /** @class */ (function () {
    function View() {
        var _this = this;
        this.displayTodos = function (todos) {
            while (_this.todoList.hasChildNodes()) {
                _this.todoList.removeChild(_this.todoList.firstChild);
            }
            todos.forEach(function (todo) {
                _this.li = document.createElement("li");
                _this.deleteBtn = document.createElement("button");
                _this.span = document.createElement("span");
                _this.chkBox = document.createElement("input");
                _this.icon = document.createElement("i");
                _this.icon.className += "far fa-trash-alt delete";
                _this.deleteBtn.appendChild(_this.icon);
                _this.deleteBtn.className += "delete";
                _this.chkBox.type = "checkbox";
                _this.chkBox.className += "check";
                _this.span.innerText = todo.text;
                _this.li.appendChild(_this.span);
                _this.li.appendChild(_this.chkBox);
                _this.li.appendChild(_this.deleteBtn);
                _this.li.id = String(todo.id);
                _this.li.addEventListener("click", function (e) {
                    if (e.target.classList.contains("delete")) {
                        console.log("====================================");
                        console.log(e.currentTarget.id);
                        console.log("====================================");
                        _this.removeEvent(Number(e.currentTarget.id));
                    }
                }, true);
                _this.todoList.appendChild(_this.li);
                // const toDoObj = {
                //   text: this._todoText,
                //   id: String(todos.length + 1)
                // };
            });
        };
        this.center = document.querySelector(".center");
        this.todoForm = document.querySelector(".todo__Form");
        this.todoList = document.querySelector(".todo__List");
        this.addBtn = document.querySelector(".todo__submit");
        this.todo__form_input = document.querySelector(".todo__form_input");
    }
    Object.defineProperty(View.prototype, "_todoText", {
        get: function () {
            return this.todo__form_input.value;
        },
        enumerable: true,
        configurable: true
    });
    View.prototype.bindAddTodo = function (handler) {
        var _this = this;
        this.addBtn.addEventListener("click", function (e) {
            if (_this._todoText) {
                handler(_this._todoText);
                _this.todo__form_input.value = "";
            }
        });
    };
    View.prototype.bindRemoveTodo = function (handler) {
        this.removeEvent = handler;
    };
    return View;
}());
/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ }),

/***/ "./src/ts/view/weatherView.ts":
/*!************************************!*\
  !*** ./src/ts/view/weatherView.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var WeatherView = /** @class */ (function () {
    function WeatherView() {
        var _this = this;
        this.updateWeatherTxt = function (temperature, place) {
            _this.weather.innerHTML = temperature + " @ " + place;
        };
        this.weather = document.querySelector(".js-weather");
    }
    return WeatherView;
}());
/* harmony default export */ __webpack_exports__["default"] = (WeatherView);


/***/ })

/******/ });