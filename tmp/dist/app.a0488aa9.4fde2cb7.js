// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app.a0488aa9.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;

        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        } // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.


        if (previousRequire) {
          return previousRequire(name, true);
        } // Try the node require function if it exists.


        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};
      var module = cache[name] = new newRequire.Module(name);
      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;

  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

    if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
      module.exports = mainExports; // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      }); // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  } // Override the current require with this new one


  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
}({
  "ts/controller/controller.ts": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Controller =
    /** @class */
    function () {
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
    }();

    exports.default = Controller;
  }, {}],
  "ts/model/todoModel.ts": [function (require, module, exports) {
    "use strict";

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var TodoModel =
    /** @class */
    function () {
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
          id: this.todoArray.length > 0 ? this.todoArray[this.todoArray.length - 1].id + 1 : 1,
          text: saveTxt
        };
        this.todoArray.push(todo);

        this._commit(this.todoArray);
      };

      TodoModel.prototype.deleteToDo = function (id) {
        this.todoArray = this.todoArray.filter(function (toDo) {
          console.log("====================================");
          console.log("todo", _typeof(id));
          console.log("====================================");
          return toDo.id !== id;
        });
        console.log("====================================");
        console.log("삭제", this.todoArray, id);
        console.log("====================================");

        this._commit(this.todoArray);
      };

      return TodoModel;
    }();

    exports.default = TodoModel;
  }, {}],
  "ts/view/todoView.ts": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var View =
    /** @class */
    function () {
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

            _this.todoList.appendChild(_this.li); // const toDoObj = {
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
        get: function get() {
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
    }();

    exports.default = View;
  }, {}],
  "config.ts": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WEATHER_KEY = "f1be9aa96f21308aa6c1db387568b8d0";
  }, {}],
  "ts/model/weatherModel.ts": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var config_1 = require("../../config");

    var WeatherModel =
    /** @class */
    function () {
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
          } else {
            var parseCoords = JSON.parse(loadedCoords);
            console.log(parseCoords);

            _this.getWeather(parseCoords.latitude, parseCoords.longitude);
          }
        };

        this.getWeather = function (lat, lon) {
          fetch(_this.baseUrl + "/weather?lat=" + lat + "&lon=" + lon + "&appid=" + config_1.WEATHER_KEY + "&units=metric").then(function (response) {
            return response.json();
          }).then(function (json) {
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
    }();

    exports.default = WeatherModel;
  }, {
    "../../config": "config.ts"
  }],
  "ts/view/weatherView.ts": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var WeatherView =
    /** @class */
    function () {
      function WeatherView() {
        var _this = this;

        this.updateWeatherTxt = function (temperature, place) {
          _this.weather.innerHTML = temperature + " @ " + place;
        };

        this.weather = document.querySelector(".js-weather");
      }

      return WeatherView;
    }();

    exports.default = WeatherView;
  }, {}],
  "ts/controller/weatherController.ts": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var WeatherController =
    /** @class */
    function () {
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
    }();

    exports.default = WeatherController;
  }, {}],
  "ts/model/bgModel.ts": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var BackgroundModel =
    /** @class */
    function () {
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
        get: function get() {
          return this.IMG_NUMBER;
        },
        enumerable: true,
        configurable: true
      });
      return BackgroundModel;
    }();

    exports.default = BackgroundModel;
  }, {}],
  "ts/view/bgView.ts": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var BackgroundView =
    /** @class */
    function () {
      function BackgroundView() {
        this.body = document.querySelector("body");
        this.imgArr = ["https://cdn.pixabay.com/photo/2020/02/03/17/39/beach-4816249_960_720.jpg"];
      }

      BackgroundView.prototype.paintImg = function (imgNumber) {
        var newImg = new Image();
        newImg.src = this.imgArr[imgNumber];
        newImg.classList.add("bgImg");
        console.log(newImg.src);
        this.body.prepend(newImg);
      };

      return BackgroundView;
    }();

    exports.default = BackgroundView;
  }, {}],
  "ts/controller/bgController.ts": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var BackgroundController =
    /** @class */
    function () {
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
    }();

    exports.default = BackgroundController;
  }, {}],
  "ts/app.ts": [function (require, module, exports) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var controller_1 = __importDefault(require("./controller/controller"));

    var todoModel_1 = __importDefault(require("./model/todoModel"));

    var todoView_1 = __importDefault(require("./view/todoView"));

    var weatherModel_1 = __importDefault(require("./model/weatherModel"));

    var weatherView_1 = __importDefault(require("./view/weatherView"));

    var weatherController_1 = __importDefault(require("./controller/weatherController"));

    var bgModel_1 = __importDefault(require("./model/bgModel"));

    var bgView_1 = __importDefault(require("./view/bgView"));

    var bgController_1 = __importDefault(require("./controller/bgController"));

    var todoApp = new controller_1.default(new todoView_1.default(), new todoModel_1.default());
    var weatherApp = new weatherController_1.default(new weatherView_1.default(), new weatherModel_1.default());
    var backgroundApp = new bgController_1.default(new bgView_1.default(), new bgModel_1.default());
  }, {
    "./controller/controller": "ts/controller/controller.ts",
    "./model/todoModel": "ts/model/todoModel.ts",
    "./view/todoView": "ts/view/todoView.ts",
    "./model/weatherModel": "ts/model/weatherModel.ts",
    "./view/weatherView": "ts/view/weatherView.ts",
    "./controller/weatherController": "ts/controller/weatherController.ts",
    "./model/bgModel": "ts/model/bgModel.ts",
    "./view/bgView": "ts/view/bgView.ts",
    "./controller/bgController": "ts/controller/bgController.ts"
  }],
  "../../../Users/kth/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';
    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
          this._acceptCallbacks.push(fn || function () {});
        },
        dispose: function dispose(fn) {
          this._disposeCallbacks.push(fn);
        }
      };
      module.bundle.hotData = null;
    }

    module.bundle.Module = Module;
    var checkedAssets, assetsToAccept;
    var parent = module.bundle.parent;

    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      var hostname = "" || location.hostname;
      var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
      var ws = new WebSocket(protocol + '://' + hostname + ':' + "9217" + '/');

      ws.onmessage = function (event) {
        checkedAssets = {};
        assetsToAccept = [];
        var data = JSON.parse(event.data);

        if (data.type === 'update') {
          var handled = false;
          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

              if (didAccept) {
                handled = true;
              }
            }
          }); // Enable HMR for CSS by default.

          handled = handled || data.assets.every(function (asset) {
            return asset.type === 'css' && asset.generated.js;
          });

          if (handled) {
            console.clear();
            data.assets.forEach(function (asset) {
              hmrApply(global.parcelRequire, asset);
            });
            assetsToAccept.forEach(function (v) {
              hmrAcceptRun(v[0], v[1]);
            });
          } else if (location.reload) {
            // `location` global exists in a web worker context but lacks `.reload()` function.
            location.reload();
          }
        }

        if (data.type === 'reload') {
          ws.close();

          ws.onclose = function () {
            location.reload();
          };
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved');
          removeErrorOverlay();
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
          removeErrorOverlay();
          var overlay = createErrorOverlay(data);
          document.body.appendChild(overlay);
        }
      };
    }

    function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);

      if (overlay) {
        overlay.remove();
      }
    }

    function createErrorOverlay(data) {
      var overlay = document.createElement('div');
      overlay.id = OVERLAY_ID; // html encode message and stack trace

      var message = document.createElement('div');
      var stackTrace = document.createElement('pre');
      message.innerText = data.error.message;
      stackTrace.innerText = data.error.stack;
      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
      return overlay;
    }

    function getParents(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return [];
      }

      var parents = [];
      var k, d, dep;

      for (k in modules) {
        for (d in modules[k][1]) {
          dep = modules[k][1][d];

          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
            parents.push(k);
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id));
      }

      return parents;
    }

    function hmrApply(bundle, asset) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (modules[asset.id] || !bundle.parent) {
        var fn = new Function('require', 'module', 'exports', asset.generated.js);
        asset.isNew = !modules[asset.id];
        modules[asset.id] = [fn, asset.deps];
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset);
      }
    }

    function hmrAcceptCheck(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (!modules[id] && bundle.parent) {
        return hmrAcceptCheck(bundle.parent, id);
      }

      if (checkedAssets[id]) {
        return;
      }

      checkedAssets[id] = true;
      var cached = bundle.cache[id];
      assetsToAccept.push([bundle, id]);

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        return true;
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAcceptCheck(global.parcelRequire, id);
      });
    }

    function hmrAcceptRun(bundle, id) {
      var cached = bundle.cache[id];
      bundle.hotData = {};

      if (cached) {
        cached.hot.data = bundle.hotData;
      }

      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
        cached.hot._disposeCallbacks.forEach(function (cb) {
          cb(bundle.hotData);
        });
      }

      delete bundle.cache[id];
      bundle(id);
      cached = bundle.cache[id];

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        cached.hot._acceptCallbacks.forEach(function (cb) {
          cb();
        });

        return true;
      }
    }
  }, {}]
}, {}, ["../../../Users/kth/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "ts/app.ts"], null);
},{}]