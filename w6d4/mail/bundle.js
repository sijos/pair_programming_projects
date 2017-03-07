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

let Router = __webpack_require__(1);
let Inbox = __webpack_require__(2);

document.addEventListener('DOMContentLoaded', () => {
  let node = document.querySelector('.content');
  let router = new Router(node, routes);
  router.start();

  let navs = Array.from(document.querySelectorAll('.sidebar-nav li'));
  navs.forEach(sidebarLi => {
    sidebarLi.addEventListener('click', () => {
      let newLoc = sidebarLi.innerText.toLowerCase();
      window.location.hash = newLoc;
    });
  });

  }
);

const routes = {
  inbox: Inbox
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  render() {
    let component = this.activeRoute();
    this.node.innerHTML = "";
    if (component !== undefined) {
      let newNode = component.render();
      this.node.appendChild(newNode);
    }
    // let p = document.createElement("p");
    // p.innerHTML = currentRoute;
    // this.node.appendChild(p);
  }

  activeRoute() {
    let loc =  window.location.hash.slice(1);
    return this.routes[loc];
  }
}

module.exports = Router;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const Inbox = {
  render: () => {
    let message = document.createElement("ul");
    message.className = "messages";
    message.innerHTML = "An Inbox Message";
    return message;
  }
};

module.exports = Inbox;


/***/ })
/******/ ]);