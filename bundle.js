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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/assets/css/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/assets/css/style.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 400px;\n  height: 250px;\n  margin: 50px; }\n\n.clock {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-size: 5rem;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);\n  padding: 8px; }\n\n.clock h1 {\n  margin: 8px 0; }\n\n.clock h2 {\n  color: #9D9EA2; }\n\n.todo {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  height: 500px;\n  overflow-y: auto; }\n\n.todo__form__cover {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.todo__form {\n  border: none; }\n\n.todo__List {\n  display: flex;\n  margin-top: 10px;\n  flex-direction: column;\n  justify-items: flex-start;\n  align-items: flex-start;\n  max-width: 350px; }\n\n.todo__List__item {\n  width: 100%;\n  margin: 10px 0; }\n\n.todo__form_input {\n  width: 300px;\n  height: 50px;\n  font-size: 18px;\n  border: none;\n  margin-right: 8px;\n  padding: 0 12px;\n  background: linear-gradient(to right, white 50%, #6147FF 50%);\n  color: white;\n  border-radius: 20px;\n  background-size: 200% 100%;\n  background-position: right;\n  overflow: hidden;\n  transition: all 0.4s ease; }\n\n.todo__form_input::placeholder {\n  color: white; }\n\n.todo__form_input:focus {\n  background-color: #6147FF;\n  background-position: left;\n  color: gray;\n  outline: none;\n  border: 2px #6147FF solid;\n  text-decoration: underline; }\n\n.todo__form_input:focus::placeholder {\n  color: gray; }\n\n.chkCover {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  margin: 0;\n  padding: 0; }\n\n.todo__submit {\n  width: 100px;\n  height: 50px;\n  border: none;\n  border-radius: 15px;\n  background-color: #1b8bfe;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer; }\n  .todo__submit :focus {\n    outline: none; }\n\n.mdi-check {\n  color: white; }\n\n.delete {\n  border: none;\n  background: none;\n  cursor: pointer; }\n\n.pretty * {\n  box-sizing: border-box; }\n\n.pretty input:not([type='checkbox']):not([type='radio']) {\n  display: none; }\n\n.pretty {\n  position: relative;\n  display: inline-block;\n  margin-right: 1em;\n  white-space: nowrap;\n  line-height: 1; }\n  .pretty input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    min-width: 1em;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    opacity: 0;\n    margin: 0;\n    padding: 0;\n    cursor: pointer; }\n  .pretty .state label {\n    position: initial;\n    display: inline-block;\n    font-weight: normal;\n    margin: 0;\n    text-indent: 1.5em;\n    min-width: calc(1em + 2px); }\n    .pretty .state label:before, .pretty .state label:after {\n      content: '';\n      width: calc(1em + 2px);\n      height: calc(1em + 2px);\n      display: block;\n      box-sizing: border-box;\n      border-radius: 0;\n      border: 1px solid transparent;\n      z-index: 0;\n      position: absolute;\n      left: 0;\n      top: calc((0% - (100% - 1em)) - 8%);\n      background-color: transparent; }\n    .pretty .state label:before {\n      border-color: #bdc3c7; }\n  .pretty .state.p-is-hover, .pretty .state.p-is-indeterminate {\n    display: none; }\n\n@keyframes zoom {\n  0% {\n    opacity: 0;\n    transform: scale(0); } }\n\n@keyframes tada {\n  0% {\n    animation-timing-function: ease-in;\n    opacity: 0;\n    transform: scale(7); }\n  38% {\n    animation-timing-function: ease-out;\n    opacity: 1;\n    transform: scale(1); }\n  55% {\n    animation-timing-function: ease-in;\n    transform: scale(1.5); }\n  72% {\n    animation-timing-function: ease-out;\n    transform: scale(1); }\n  81% {\n    animation-timing-function: ease-in;\n    transform: scale(1.24); }\n  89% {\n    animation-timing-function: ease-out;\n    transform: scale(1); }\n  95% {\n    animation-timing-function: ease-in;\n    transform: scale(1.04); }\n  100% {\n    animation-timing-function: ease-out;\n    transform: scale(1); } }\n\n@keyframes jelly {\n  0% {\n    transform: scale3d(1, 1, 1); }\n  30% {\n    transform: scale3d(0.75, 1.25, 1); }\n  40% {\n    transform: scale3d(1.25, 0.75, 1); }\n  50% {\n    transform: scale3d(0.85, 1.15, 1); }\n  65% {\n    transform: scale3d(1.05, 0.95, 1); }\n  75% {\n    transform: scale3d(0.95, 1.05, 1); }\n  100% {\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes rotate {\n  0% {\n    opacity: 0;\n    transform: translateZ(-200px) rotate(-45deg); }\n  100% {\n    opacity: 1;\n    transform: translateZ(0) rotate(0); } }\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0px 0px 0px 0px #bdc3c7; }\n  100% {\n    box-shadow: 0px 0px 0px 1.5em rgba(189, 195, 199, 0); } }\n\n.pretty.p-default.p-fill .state label:after {\n  transform: scale(1); }\n\n.pretty.p-default .state label:after {\n  transform: scale(0.6); }\n\n.pretty.p-default input:checked ~ .state label:after {\n  background-color: #bdc3c7 !important; }\n\n.pretty.p-default.p-thick .state label:before, .pretty.p-default.p-thick .state label:after {\n  border-width: calc(1em / 7); }\n\n.pretty.p-default.p-thick .state label:after {\n  transform: scale(0.4) !important; }\n\n.pretty.p-icon .state .icon {\n  position: absolute;\n  font-size: 1em;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  line-height: normal;\n  top: calc((0% - (100% - 1em)) - 8%);\n  border: 1px solid transparent;\n  opacity: 0; }\n\n.pretty.p-icon .state .icon:before {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  line-height: 1; }\n\n.pretty.p-icon input:checked ~ .state .icon {\n  opacity: 1; }\n\n.pretty.p-icon input:checked ~ .state label:before {\n  border-color: #5a656b; }\n\n.pretty.p-svg .state .svg {\n  position: absolute;\n  font-size: 1em;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  line-height: normal;\n  top: calc((0% - (100% - 1em)) - 8%);\n  border: 1px solid transparent;\n  opacity: 0; }\n\n.pretty.p-svg .state svg {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  line-height: 1; }\n\n.pretty.p-svg input:checked ~ .state .svg {\n  opacity: 1; }\n\n.pretty.p-image .state img {\n  opacity: 0;\n  position: absolute;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  top: 0;\n  top: calc((0% - (100% - 1em)) - 8%);\n  left: 0;\n  z-index: 0;\n  text-align: center;\n  line-height: normal;\n  transform: scale(0.8); }\n\n.pretty.p-image input:checked ~ .state img {\n  opacity: 1; }\n\n.pretty.p-switch input {\n  min-width: 2em; }\n\n.pretty.p-switch .state {\n  position: relative; }\n  .pretty.p-switch .state:before {\n    content: '';\n    border: 1px solid #bdc3c7;\n    border-radius: 60px;\n    width: 2em;\n    box-sizing: unset;\n    height: calc(1em + 2px);\n    position: absolute;\n    top: 0;\n    top: calc((0% - (100% - 1em)) - 16%);\n    z-index: 0;\n    transition: all 0.5s ease; }\n  .pretty.p-switch .state label {\n    text-indent: 2.5em; }\n    .pretty.p-switch .state label:before, .pretty.p-switch .state label:after {\n      transition: all 0.5s ease;\n      border-radius: 100%;\n      left: 0;\n      border-color: transparent;\n      transform: scale(0.8); }\n    .pretty.p-switch .state label:after {\n      background-color: #bdc3c7 !important; }\n\n.pretty.p-switch input:checked ~ .state:before {\n  border-color: #5a656b; }\n\n.pretty.p-switch input:checked ~ .state label:before {\n  opacity: 0; }\n\n.pretty.p-switch input:checked ~ .state label:after {\n  background-color: #5a656b !important;\n  left: 1em; }\n\n.pretty.p-switch.p-fill input:checked ~ .state:before {\n  border-color: #5a656b;\n  background-color: #5a656b !important; }\n\n.pretty.p-switch.p-fill input:checked ~ .state label:before {\n  opacity: 0; }\n\n.pretty.p-switch.p-fill input:checked ~ .state label:after {\n  background-color: #fff !important;\n  left: 1em; }\n\n.pretty.p-switch.p-slim .state:before {\n  height: 0.1em;\n  background: #bdc3c7 !important;\n  top: calc(50% - 0.1em); }\n\n.pretty.p-switch.p-slim input:checked ~ .state:before {\n  border-color: #5a656b;\n  background-color: #5a656b !important; }\n\n.pretty.p-has-hover input:hover ~ .state:not(.p-is-hover) {\n  display: none; }\n\n.pretty.p-has-hover input:hover ~ .state.p-is-hover {\n  display: block; }\n  .pretty.p-has-hover input:hover ~ .state.p-is-hover .icon {\n    display: block; }\n\n.pretty.p-has-focus input:focus ~ .state label:before {\n  box-shadow: 0px 0px 3px 0px #bdc3c7; }\n\n.pretty.p-has-indeterminate input[type='checkbox']:indeterminate ~ .state:not(.p-is-indeterminate) {\n  display: none; }\n\n.pretty.p-has-indeterminate input[type='checkbox']:indeterminate ~ .state.p-is-indeterminate {\n  display: block; }\n  .pretty.p-has-indeterminate input[type='checkbox']:indeterminate ~ .state.p-is-indeterminate .icon {\n    display: block;\n    opacity: 1; }\n\n.pretty.p-toggle .state.p-on {\n  opacity: 0;\n  display: none; }\n\n.pretty.p-toggle .state.p-off,\n.pretty.p-toggle .state .icon,\n.pretty.p-toggle .state .svg,\n.pretty.p-toggle .state img {\n  opacity: 1;\n  display: inherit; }\n\n.pretty.p-toggle .state.p-off .icon {\n  color: #bdc3c7; }\n\n.pretty.p-toggle input:checked ~ .state.p-on {\n  opacity: 1;\n  display: inherit; }\n\n.pretty.p-toggle input:checked ~ .state.p-off {\n  opacity: 0;\n  display: none; }\n\n.pretty.p-plain input:checked ~ .state label:before,\n.pretty.p-plain.p-toggle .state label:before {\n  content: none; }\n\n.pretty.p-plain.p-plain .icon {\n  transform: scale(1.1); }\n\n.pretty.p-round .state label:before, .pretty.p-round .state label:after {\n  border-radius: 100%; }\n\n.pretty.p-round.p-icon .state .icon {\n  border-radius: 100%;\n  overflow: hidden; }\n  .pretty.p-round.p-icon .state .icon:before {\n    transform: scale(0.8); }\n\n.pretty.p-curve .state label:before, .pretty.p-curve .state label:after {\n  border-radius: 20%; }\n\n.pretty.p-smooth label:before,\n.pretty.p-smooth label:after,\n.pretty.p-smooth .icon,\n.pretty.p-smooth .svg {\n  transition: all 0.5s ease; }\n\n.pretty.p-smooth input:checked + .state label:after {\n  transition: all 0.3s ease; }\n\n.pretty.p-smooth input:checked + .state .icon,\n.pretty.p-smooth input:checked + .state .svg,\n.pretty.p-smooth input:checked + .state img {\n  animation: zoom 0.2s ease; }\n\n.pretty.p-smooth.p-default input:checked + .state label:after {\n  animation: zoom 0.2s ease; }\n\n.pretty.p-smooth.p-plain input:checked + .state label:before {\n  content: '';\n  transform: scale(0);\n  transition: all 0.5s ease; }\n\n.pretty.p-tada:not(.p-default) input:checked + .state .icon,\n.pretty.p-tada:not(.p-default) input:checked + .state .svg,\n.pretty.p-tada:not(.p-default) input:checked + .state img,\n.pretty.p-tada:not(.p-default) input:checked + .state label:before,\n.pretty.p-tada:not(.p-default) input:checked + .state label:after {\n  animation: tada 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1 alternate;\n  opacity: 1; }\n\n.pretty.p-jelly:not(.p-default) input:checked + .state .icon,\n.pretty.p-jelly:not(.p-default) input:checked + .state .svg,\n.pretty.p-jelly:not(.p-default) input:checked + .state img,\n.pretty.p-jelly:not(.p-default) input:checked + .state label:before,\n.pretty.p-jelly:not(.p-default) input:checked + .state label:after {\n  animation: jelly 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  opacity: 1; }\n\n.pretty.p-jelly:not(.p-default) input:checked + .state label:before {\n  border-color: transparent; }\n\n.pretty.p-rotate:not(.p-default) input:checked ~ .state .icon,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state .svg,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state img,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:before,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:after {\n  animation: rotate 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  opacity: 1; }\n\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:before {\n  border-color: transparent; }\n\n.pretty.p-pulse:not(.p-switch) input:checked ~ .state label:before {\n  animation: pulse 1s; }\n\n.pretty input[disabled] {\n  cursor: not-allowed;\n  display: none; }\n  .pretty input[disabled] ~ * {\n    opacity: .5; }\n\n.pretty.p-locked input {\n  display: none;\n  cursor: not-allowed; }\n\n.pretty input:checked ~ .state.p-primary label:after,\n.pretty.p-toggle .state.p-primary label:after {\n  background-color: #428bca !important; }\n\n.pretty input:checked ~ .state.p-primary .icon,\n.pretty input:checked ~ .state.p-primary .svg,\n.pretty.p-toggle .state.p-primary .icon,\n.pretty.p-toggle .state.p-primary .svg {\n  color: #fff;\n  stroke: #fff; }\n\n.pretty input:checked ~ .state.p-primary-o label:before,\n.pretty.p-toggle .state.p-primary-o label:before {\n  border-color: #428bca; }\n\n.pretty input:checked ~ .state.p-primary-o label:after,\n.pretty.p-toggle .state.p-primary-o label:after {\n  background-color: transparent; }\n\n.pretty input:checked ~ .state.p-primary-o .icon,\n.pretty input:checked ~ .state.p-primary-o .svg,\n.pretty input:checked ~ .state.p-primary-o svg,\n.pretty.p-toggle .state.p-primary-o .icon,\n.pretty.p-toggle .state.p-primary-o .svg,\n.pretty.p-toggle .state.p-primary-o svg {\n  color: #428bca;\n  stroke: #428bca; }\n\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-primary-o label:after {\n  background-color: #428bca !important; }\n\n.pretty.p-switch input:checked ~ .state.p-primary:before {\n  border-color: #428bca; }\n\n.pretty.p-switch.p-fill input:checked ~ .state.p-primary:before {\n  background-color: #428bca !important; }\n\n.pretty.p-switch.p-slim input:checked ~ .state.p-primary:before {\n  border-color: #245682;\n  background-color: #245682 !important; }\n\n.pretty input:checked ~ .state.p-info label:after,\n.pretty.p-toggle .state.p-info label:after {\n  background-color: #5bc0de !important; }\n\n.pretty input:checked ~ .state.p-info .icon,\n.pretty input:checked ~ .state.p-info .svg,\n.pretty.p-toggle .state.p-info .icon,\n.pretty.p-toggle .state.p-info .svg {\n  color: #fff;\n  stroke: #fff; }\n\n.pretty input:checked ~ .state.p-info-o label:before,\n.pretty.p-toggle .state.p-info-o label:before {\n  border-color: #5bc0de; }\n\n.pretty input:checked ~ .state.p-info-o label:after,\n.pretty.p-toggle .state.p-info-o label:after {\n  background-color: transparent; }\n\n.pretty input:checked ~ .state.p-info-o .icon,\n.pretty input:checked ~ .state.p-info-o .svg,\n.pretty input:checked ~ .state.p-info-o svg,\n.pretty.p-toggle .state.p-info-o .icon,\n.pretty.p-toggle .state.p-info-o .svg,\n.pretty.p-toggle .state.p-info-o svg {\n  color: #5bc0de;\n  stroke: #5bc0de; }\n\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-info-o label:after {\n  background-color: #5bc0de !important; }\n\n.pretty.p-switch input:checked ~ .state.p-info:before {\n  border-color: #5bc0de; }\n\n.pretty.p-switch.p-fill input:checked ~ .state.p-info:before {\n  background-color: #5bc0de !important; }\n\n.pretty.p-switch.p-slim input:checked ~ .state.p-info:before {\n  border-color: #2390b0;\n  background-color: #2390b0 !important; }\n\n.pretty input:checked ~ .state.p-success label:after,\n.pretty.p-toggle .state.p-success label:after {\n  background-color: #5cb85c !important; }\n\n.pretty input:checked ~ .state.p-success .icon,\n.pretty input:checked ~ .state.p-success .svg,\n.pretty.p-toggle .state.p-success .icon,\n.pretty.p-toggle .state.p-success .svg {\n  color: #fff;\n  stroke: #fff; }\n\n.pretty input:checked ~ .state.p-success-o label:before,\n.pretty.p-toggle .state.p-success-o label:before {\n  border-color: #5cb85c; }\n\n.pretty input:checked ~ .state.p-success-o label:after,\n.pretty.p-toggle .state.p-success-o label:after {\n  background-color: transparent; }\n\n.pretty input:checked ~ .state.p-success-o .icon,\n.pretty input:checked ~ .state.p-success-o .svg,\n.pretty input:checked ~ .state.p-success-o svg,\n.pretty.p-toggle .state.p-success-o .icon,\n.pretty.p-toggle .state.p-success-o .svg,\n.pretty.p-toggle .state.p-success-o svg {\n  color: #5cb85c;\n  stroke: #5cb85c; }\n\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-success-o label:after {\n  background-color: #5cb85c !important; }\n\n.pretty.p-switch input:checked ~ .state.p-success:before {\n  border-color: #5cb85c; }\n\n.pretty.p-switch.p-fill input:checked ~ .state.p-success:before {\n  background-color: #5cb85c !important; }\n\n.pretty.p-switch.p-slim input:checked ~ .state.p-success:before {\n  border-color: #357935;\n  background-color: #357935 !important; }\n\n.pretty input:checked ~ .state.p-warning label:after,\n.pretty.p-toggle .state.p-warning label:after {\n  background-color: #f0ad4e !important; }\n\n.pretty input:checked ~ .state.p-warning .icon,\n.pretty input:checked ~ .state.p-warning .svg,\n.pretty.p-toggle .state.p-warning .icon,\n.pretty.p-toggle .state.p-warning .svg {\n  color: #fff;\n  stroke: #fff; }\n\n.pretty input:checked ~ .state.p-warning-o label:before,\n.pretty.p-toggle .state.p-warning-o label:before {\n  border-color: #f0ad4e; }\n\n.pretty input:checked ~ .state.p-warning-o label:after,\n.pretty.p-toggle .state.p-warning-o label:after {\n  background-color: transparent; }\n\n.pretty input:checked ~ .state.p-warning-o .icon,\n.pretty input:checked ~ .state.p-warning-o .svg,\n.pretty input:checked ~ .state.p-warning-o svg,\n.pretty.p-toggle .state.p-warning-o .icon,\n.pretty.p-toggle .state.p-warning-o .svg,\n.pretty.p-toggle .state.p-warning-o svg {\n  color: #f0ad4e;\n  stroke: #f0ad4e; }\n\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-warning-o label:after {\n  background-color: #f0ad4e !important; }\n\n.pretty.p-switch input:checked ~ .state.p-warning:before {\n  border-color: #f0ad4e; }\n\n.pretty.p-switch.p-fill input:checked ~ .state.p-warning:before {\n  background-color: #f0ad4e !important; }\n\n.pretty.p-switch.p-slim input:checked ~ .state.p-warning:before {\n  border-color: #c77c11;\n  background-color: #c77c11 !important; }\n\n.pretty input:checked ~ .state.p-danger label:after,\n.pretty.p-toggle .state.p-danger label:after {\n  background-color: #d9534f !important; }\n\n.pretty input:checked ~ .state.p-danger .icon,\n.pretty input:checked ~ .state.p-danger .svg,\n.pretty.p-toggle .state.p-danger .icon,\n.pretty.p-toggle .state.p-danger .svg {\n  color: #fff;\n  stroke: #fff; }\n\n.pretty input:checked ~ .state.p-danger-o label:before,\n.pretty.p-toggle .state.p-danger-o label:before {\n  border-color: #d9534f; }\n\n.pretty input:checked ~ .state.p-danger-o label:after,\n.pretty.p-toggle .state.p-danger-o label:after {\n  background-color: transparent; }\n\n.pretty input:checked ~ .state.p-danger-o .icon,\n.pretty input:checked ~ .state.p-danger-o .svg,\n.pretty input:checked ~ .state.p-danger-o svg,\n.pretty.p-toggle .state.p-danger-o .icon,\n.pretty.p-toggle .state.p-danger-o .svg,\n.pretty.p-toggle .state.p-danger-o svg {\n  color: #d9534f;\n  stroke: #d9534f; }\n\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-danger-o label:after {\n  background-color: #d9534f !important; }\n\n.pretty.p-switch input:checked ~ .state.p-danger:before {\n  border-color: #d9534f; }\n\n.pretty.p-switch.p-fill input:checked ~ .state.p-danger:before {\n  background-color: #d9534f !important; }\n\n.pretty.p-switch.p-slim input:checked ~ .state.p-danger:before {\n  border-color: #a02622;\n  background-color: #a02622 !important; }\n\n.pretty.p-bigger label:before,\n.pretty.p-bigger label:after,\n.pretty.p-bigger .icon,\n.pretty.p-bigger .svg,\n.pretty.p-bigger .img {\n  font-size: 1.2em !important;\n  top: calc((0% - (100% - 1em)) - 35%) !important; }\n\n.pretty.p-bigger label {\n  text-indent: 1.7em; }\n\n@media print {\n  .pretty .state:before,\n  .pretty .state label:before,\n  .pretty .state label:after,\n  .pretty .state .icon {\n    color-adjust: exact;\n    /* stylelint-disable */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact; } }\n\n.root {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: static; }\n\n.bgImg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  animation: fadeIn 0.5s linear; }\n", ""]);
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

/***/ "./public/assets/css/style.scss":
/*!**************************************!*\
  !*** ./public/assets/css/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/assets/css/style.scss");

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
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clock */ "./src/ts/clock.ts");




var todoApp = new _controller_controller__WEBPACK_IMPORTED_MODULE_0__["default"](new _view_todoView__WEBPACK_IMPORTED_MODULE_2__["default"](), new _model_todoModel__WEBPACK_IMPORTED_MODULE_1__["default"]());
// const backgroundApp = new BgController(new BgView(), new BgModel());
var clock = new _clock__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
        this.dayTitle = this.clockContainer.querySelector("h1");
        this.timeTitle = this.clockContainer.querySelector("h2");
        this.yearTitle = this.clockContainer.querySelector(".year");
        this.initTime = function () {
            var date = new Date();
            var month = date.getMonth();
            var day = date.getDay() + 1;
            var hour = date.getHours();
            var minute = date.getMinutes();
            _this.dayTitle.innerHTML = _this.monthNames[month] + " " + (day >= 10 ? "" + day : "0" + day) + " ";
            _this.timeTitle.innerText = (hour >= 10 ? "" + hour : "0" + hour) + ":" + (minute >= 10 ? "" + minute : "0" + minute);
        };
        this.init = function () {
            _this.initTime();
            setInterval(function () {
                _this.initTime();
            }, 1000);
        };
        this.monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
    }
    return Clock;
}());
/* harmony default export */ __webpack_exports__["default"] = (Clock);


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
        this.handleCheckEvent = function (id, checked) {
            _this.todoModel.checkTodo(id, checked);
        };
        this.view = contactView;
        this.todoModel = contactModel;
        this.todoModel.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindRemoveTodo(this.handleRemoveTodo);
        this.view.bindCheckTodo(this.handleCheckEvent);
        this.onTodoListChanged(this.todoModel.todoArray);
    }
    return Controller;
}());
/* harmony default export */ __webpack_exports__["default"] = (Controller);


/***/ }),

/***/ "./src/ts/model/todoModel.ts":
/*!***********************************!*\
  !*** ./src/ts/model/todoModel.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
            text: saveTxt,
            checked: false
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
    TodoModel.prototype.checkTodo = function (id, checked) {
        var map = this.todoArray.map(function (item) {
            if (item.id === id) {
                return __assign(__assign({}, item), { checked: checked });
            }
            else {
                return item;
            }
        });
        localStorage.setItem(this.TODO_STORAGE, JSON.stringify(map));
    };
    return TodoModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (TodoModel);


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
                _this.li.classList.add("todo__List__item");
                _this.deleteBtn = document.createElement("button");
                _this.span = document.createElement("span");
                _this.boxCover = document.createElement("div");
                _this.chkBox = document.createElement("input");
                _this.labelCover = document.createElement("div");
                _this.label = document.createElement("label");
                _this.label.innerHTML = todo.text;
                _this.chkIcon = document.createElement("i");
                _this.chkIcon.classList.add("icon", "mdi", "mdi-check");
                _this.boxCover.classList.add("chkCover", "pretty", "p-icon", "p-round", "p-jelly");
                _this.icon = document.createElement("i");
                _this.icon.className += "fas fa-trash fa-lg delete";
                _this.deleteBtn.appendChild(_this.icon);
                _this.deleteBtn.className += "delete";
                _this.chkBox.type = "checkbox";
                _this.chkBox.className += "check";
                _this.chkBox.checked = todo.checked;
                _this.chkBox.addEventListener("click", function (e) {
                    var _a;
                    var id = Number(((_a = e.target.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode).id);
                    var check = e.target.checked;
                    check
                        ? (_this.label.style.textDecoration = "line-through")
                        : (_this.label.style.textDecoration = "none");
                    _this.checkEvent(id, check);
                });
                _this.labelCover.classList.add("state", "p-primary");
                _this.labelCover.appendChild(_this.chkIcon);
                _this.labelCover.appendChild(_this.label);
                _this.boxCover.appendChild(_this.chkBox);
                _this.boxCover.appendChild(_this.labelCover);
                // this.span.innerText = todo.text;
                // this.li.appendChild(this.span);
                _this.li.appendChild(_this.boxCover);
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
        this.todo__form_input.addEventListener("keydown", function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                if (_this._todoText) {
                    handler(_this._todoText);
                    _this.todo__form_input.value = "";
                }
            }
        });
    };
    View.prototype.bindRemoveTodo = function (handler) {
        this.removeEvent = handler;
    };
    View.prototype.bindCheckTodo = function (handler) {
        this.checkEvent = handler;
    };
    return View;
}());
/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./src/ts/app.ts ./public/assets/css/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/ts/app.ts */"./src/ts/app.ts");
module.exports = __webpack_require__(/*! ./public/assets/css/style.scss */"./public/assets/css/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map