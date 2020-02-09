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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/style.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/style.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.clock {\n  font-size: 4vw;\n  text-align: center; }\n\n.todo__form_cover {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.bgImg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  animation: fadeIn 0.5s linear; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/css/style.scss":
/*!***********************************!*\
  !*** ./src/assets/css/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

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
/* harmony import */ var _model_bgModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/bgModel */ "./src/ts/model/bgModel.ts");
/* harmony import */ var _view_bgView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/bgView */ "./src/ts/view/bgView.ts");
/* harmony import */ var _controller_bgController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller/bgController */ "./src/ts/controller/bgController.ts");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clock */ "./src/ts/clock.ts");







var todoApp = new _controller_controller__WEBPACK_IMPORTED_MODULE_0__["default"](new _view_todoView__WEBPACK_IMPORTED_MODULE_2__["default"](), new _model_todoModel__WEBPACK_IMPORTED_MODULE_1__["default"]());
var backgroundApp = new _controller_bgController__WEBPACK_IMPORTED_MODULE_5__["default"](new _view_bgView__WEBPACK_IMPORTED_MODULE_4__["default"](), new _model_bgModel__WEBPACK_IMPORTED_MODULE_3__["default"]());
var clock = new _clock__WEBPACK_IMPORTED_MODULE_6__["default"]();
clock.init();


/***/ }),

/***/ "./src/ts/clock.ts":
/*!*************************!*\
  !*** ./src/ts/clock.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Clock = /** @class */ (function () {
    function Clock() {
        var _this = this;
        this.clockContainer = document.querySelector(".clock");
        this.clockTitle = this.clockContainer.querySelector("h1");
        this.getTime = function () {
            var date = new Date();
            var hour = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            _this.clockTitle.innerText = (hour >= 10 ? "" + hour : "0" + hour) + ":" + (minute >= 10 ? "" + minute : "0" + minute) + ":" + (second >= 10 ? "" + second : "0" + second);
        };
        this.init = function () {
            _this.getTime();
            setInterval(function () {
                _this.getTime();
            }, 1000);
        };
    }
    return Clock;
}());
/* harmony default export */ __webpack_exports__["default"] = (Clock);


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
        // this.imgArr = [
        //   "https://cdn.pixabay.com/photo/2020/02/03/17/39/beach-4816249_960_720.jpg"
        // ];
    }
    BackgroundView.prototype.paintImg = function (imgNumber) {
        var newImg = new Image();
        // newImg.src = this.imgArr[imgNumber];
        newImg.src = "../../assets/img/bg" + (imgNumber + 1) + ".jpg";
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

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./src/ts/app.ts ./src/assets/css/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/ts/app.ts */"./src/ts/app.ts");
module.exports = __webpack_require__(/*! ./src/assets/css/style.scss */"./src/assets/css/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map