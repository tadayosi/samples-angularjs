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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  var tree = [{
    text: 'Parent 1',
    href: '#parent1',
    tags: ['4'],
    nodes: [{
      text: 'Child 1',
      href: '#child1',
      icon: 'fa fa-file-o',
      tags: ['2'],
      nodes: [{
        text: 'Grandchild 1',
        href: '#grandchild1',
        icon: 'fa fa-file-o',
        tags: ['0']
      }, {
        text: 'Grandchild 2',
        href: '#grandchild2',
        icon: 'fa fa-file-o',
        tags: ['0']
      }]
    }, {
      text: 'Child 2',
      href: '#child2',
      icon: 'fa fa-file-o',
      tags: ['0']
    }]
  }, {
    text: 'Parent 2',
    href: '#parent2',
    tags: ['0']
  }, {
    text: 'Parent 3',
    href: '#parent3',
    tags: ['0']
  }, {
    text: 'Parent 4',
    href: '#parent4',
    tags: ['0']
  }, {
    text: 'Parent 5',
    href: '#parent5',
    tags: ['0']
  }];
  $('#tree').treeview({
    collapseIcon: "fa fa-angle-down",
    data: tree,
    expandIcon: "fa fa-angle-right",
    nodeIcon: "fa fa-folder",
    showBorder: false
  });
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map