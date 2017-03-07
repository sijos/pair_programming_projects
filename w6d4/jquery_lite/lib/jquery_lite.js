/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

const $l = function (selector) {
  if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  } else {
    const NodeList = document.querySelectorAll(selector);
    let nodesArray = Array.from(NodeList);
    return new DOMNodeCollection(nodesArray);
  }
};

window.$l = $l;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }

  html(string = null) {
    if (string === null) {
      return this.HTMLElements[0].innerHTML;
    } else {
      this.HTMLElements.forEach((el) => {
        el.innerHTML = string;
      });
    }
  }

  empty() {
    this.html("");
  }

  append(arg) {
    if (arg instanceof String) {
      this.HTMLElements.forEach((el) => {
        el.innerHTML.concat(arg);
      });
    } else if (arg instanceof HTMLElement) {
    this.HTMLElements.forEach((el) => {
      el.innerHTML.concat(arg.outerHTML);
    });
    } else if (arg instanceof DOMNodeCollection) {
      //convert to html text THEN concat to inner
    }
  }

  attr(name, value = null) {
    if (value === null) {
      return this.HTMLElements[0].getAttribute(name);
    } else {
      this.HTMLElements.forEach((el) => {
        el.setAttribute(name, value);
      });
      return this.HTMLElements;
    }
  }

  addClass(cName) {
    this.HTMLElements.forEach((el) => {
      el.className = cName;
    });
  }

  removeClass(cName) {
    this.HTMLElements.forEach((el) => {
      el.classList.remove(cName);
    });
  }

  children() {
    let childElements = [];
    this.HTMLElements.forEach((el) => {
      childElements = childElements.concat(el.children);
    });
    return new DOMNodeCollection(childElements);
  }

  parent() {
    let parentElements = [];
    this.HTMLElements.forEach((el) => {
      parentElements = parentElements.concat(el.parentNode);
    });
    return new DOMNodeCollection(parentElements);
  }

  find(selector) {
    let matchingElements = [];
    this.HTMLElements.forEach((el) => {
      matchingElements = matchingElements.
        concat(el.querySelectorAll(selector));
    });
    return new DOMNodeCollection(matchingElements);
  }

  remove() {
    this.empty();
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);