parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wq1R":[function(require,module,exports) {
"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(t)}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(){this.TODO_STORAGE="ToDo",this.todoArray=this.loadToDoList()}return t.prototype.bindTodoListChanged=function(o){this.onTodoListChanged=o},t.prototype._commit=function(o){this.onTodoListChanged(o),localStorage.setItem(this.TODO_STORAGE,JSON.stringify(this.todoArray))},t.prototype.loadToDoList=function(){var o=localStorage.getItem(this.TODO_STORAGE);return null!==o?JSON.parse(o):[]},t.prototype.saveToDoList=function(o){var t={id:this.todoArray.length>0?this.todoArray[this.todoArray.length-1].id+1:1,text:o};this.todoArray.push(t),this._commit(this.todoArray)},t.prototype.deleteToDo=function(t){this.todoArray=this.todoArray.filter(function(r){return console.log("===================================="),console.log("todo",o(t)),console.log("===================================="),r.id!==t}),console.log("===================================="),console.log("삭제",this.todoArray,t),console.log("===================================="),this._commit(this.todoArray)},t}();exports.default=t;
},{}]},{},["wq1R"], null)
//# sourceMappingURL=/todoModel.f9ab1001.js.map