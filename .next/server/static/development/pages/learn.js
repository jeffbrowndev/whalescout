module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/composition.js":
/*!*****************************************!*\
  !*** ./pages/components/composition.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/app.scss */ "./pages/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\components\\composition.js";



var Composition = function Composition(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.composition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.composition_content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "The Southern Resident Orcas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.composition_desktop,
    src: "./static/images/learn_images/composition_desktop.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.composition_tablet,
    src: "./static/images/learn_images/composition_tablet.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.composition_mobile,
    src: "./static/images/learn_images/composition_mobile.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "As Southern Residents struggle to survive, imbalances in the age and sex ratios are appearing. Note the skewed ratio juvenile males and females, twice as many male calves were born compared to females.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Composition);

/***/ }),

/***/ "./pages/components/desktopNavigation.js":
/*!***********************************************!*\
  !*** ./pages/components/desktopNavigation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/app.scss */ "./pages/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\components\\desktopNavigation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var DesktopNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DesktopNavigation, _React$Component);

  function DesktopNavigation() {
    _classCallCheck(this, DesktopNavigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(DesktopNavigation).apply(this, arguments));
  }

  _createClass(DesktopNavigation, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, {
        minWidth: 961,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.desktop_navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/ws_logo.png",
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }))));
    }
  }]);

  return DesktopNavigation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DesktopNavigation);

/***/ }),

/***/ "./pages/components/footer.js":
/*!************************************!*\
  !*** ./pages/components/footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/footer.scss */ "./pages/scss/footer.scss");
/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_footer_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\components\\footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFacebook"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTwitter"]);

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.footer,
        style: {
          background: this.props.color
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/images/ws_footer_background.png",
        alt: "Rock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.footer_background,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.footer_container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.site_map,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.site_map_column,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "HOME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "ABOUT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "TEAM/SUPPORTERS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "CONTACT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "LEARN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "ACT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "HELPIN' OUT EVENTS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "STEWARDSHIP"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.site_map_column,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "WATCH"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "PROTECT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "JOIN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "VOLUNTEER"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "STORE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "DONATE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "PODCAST")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.footer_connect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.news_letter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Join Our Newsletter"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.signup_form,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        placeholder: "Your e-mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "SIGN UP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.connect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "P.O. Box 426", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), "Woodinville, WA 98072", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), "425-770-0787", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), "info@whalescout.org")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.social,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Follow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        size: "2x",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInstagram"],
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.social_icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        size: "2x",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFacebook"],
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.social_icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        size: "2x",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTwitter"],
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.social_icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0___default.a.credits,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\xA9 Copyright 2018 Whale Scout\xA0| All Rights Reserved\xA0| Design\xA0by\xA0Jeff\xA0Brown")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/components/head.js":
/*!**********************************!*\
  !*** ./pages/components/head.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\components\\head.js";



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Whale Scout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/react-big-calendar.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/components/layout.js":
/*!************************************!*\
  !*** ./pages/components/layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _desktopNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktopNavigation */ "./pages/components/desktopNavigation.js");
/* harmony import */ var _mobileNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobileNavigation */ "./pages/components/mobileNavigation.js");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./links */ "./pages/components/links.js");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./head */ "./pages/components/head.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./pages/components/footer.js");
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\components\\layout.js";





 // Global layout

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_desktopNavigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_links__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mobileNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: props.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
});

/***/ }),

/***/ "./pages/components/links.js":
/*!***********************************!*\
  !*** ./pages/components/links.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/app.scss */ "./pages/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\components\\links.js";







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSortDown"]);

var Links = function Links() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_6___default.a, {
    minWidth: 961,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "HOME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "ABOUT", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSortDown"],
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "TEAM/SUPPORTERS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "CONTACT")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "LEARN")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/watch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "WATCH")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/act",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "ACT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "JOIN", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSortDown"],
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/volunteer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "VOLUNTEER")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/store",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "STORE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/donate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "DONATE")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/podcasts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "PODCAST"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Links);

/***/ }),

/***/ "./pages/components/mobileNavigation.js":
/*!**********************************************!*\
  !*** ./pages/components/mobileNavigation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/mobileNavigation.scss */ "./pages/scss/mobileNavigation.scss");
/* harmony import */ var _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/app.scss */ "./pages/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\components\\mobileNavigation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSortDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSortUp"]);

var MobileNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileNavigation, _React$Component);

  function MobileNavigation() {
    _classCallCheck(this, MobileNavigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(MobileNavigation).apply(this, arguments));
  }

  _createClass(MobileNavigation, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_3___default.a, {
        maxWidth: 960,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobile_navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/ws_logo.png",
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hamburger,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "open",
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hamburger_icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.line,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.line,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.line,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        id: "open",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "HOME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        id: "about_label",
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.about_label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "about_label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "ABOUT", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSortDown"],
        className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.about_dropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "TEAM/SUPPORTERS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "CONTACT")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/learn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "LEARN")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/watch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "WATCH")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/act",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "ACT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        id: "join_label",
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.join_label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "join_label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "JOIN", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSortDown"],
        className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: _scss_mobileNavigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.join_dropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/volunteer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "VOLUNTEER")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/store",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "STORE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/donate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "DONATE")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/podcasts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "PODCAST")))))));
    }
  }]);

  return MobileNavigation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MobileNavigation);

/***/ }),

/***/ "./pages/components/threats.js":
/*!*************************************!*\
  !*** ./pages/components/threats.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/app.scss */ "./pages/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\components\\threats.js";



var Threats = function Threats(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.threats,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.threats_top,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.threats_header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Lack Of Salmon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Local endangered killer whales (orcas) rely on dwindling salmon populations for 80% of their diet")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./static/images/learn_images/chasing.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.threats_middle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.threats_header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Toxins"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Lubricants, coolants, and flame retardants are linked to disease and reproductive issues.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./static/images/learn_images/toxins.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.threats_bottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.threats_header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Vessel Effects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Vessel noise impairs killer whales' ability to echolocate their already diminished prey.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./static/images/learn_images/vessels.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Threats);

/***/ }),

/***/ "./pages/learn.js":
/*!************************!*\
  !*** ./pages/learn.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/app.scss */ "./pages/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_composition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/composition */ "./pages/components/composition.js");
/* harmony import */ var _components_threats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/threats */ "./pages/components/threats.js");
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\learn.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.learn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.learn_header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "LEARN")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Orcas, salmon, and the Pacific Northwest"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "To better understand the relationship the Southern Resident orcas have with salmon, we need to travel back in time. About 13,000 years ago, the last glaciers that carved out our majestic mountains had finally receded. They left in their wake furrowed land that was rich with moisture, glacial sediment, smooth broken stones, and fresh cold water that would form our rivers. The abundance of moisture in the soil gave birth to the towering trees and native plants that shade, filter, stabilize, and oxygenate the riverbeds to this day. This protected cold water created the perfect spawning habitat for evolving salmonids. For the last 13,000 years, the clean, covered, nutritive cold water with large smooth rocks to shelter fertilized eggs allowed the first few salmon to evolve into six major subspecies numbering into the millions each: Pink, Steelhead, Coho, Chum, Sockeye, and the largest of all salmon species\xA0\u2014\xA0Chinook.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./static/images/learn_images/chinook.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image_caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Georgia Strait Alliance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "The temperate forest ecosystem of the Pacific Northwest developed into one giant living biological organism with rivers serving as the arteries and veins transporting the red blood cells\u2014salmon\u2014upriver where they spawn the next generation of salmon. This giant inland organism evolved around the presence of Pacific salmon. Over 200 species of plants, birds, and mammals (terrestrial and marine alike) depend on salmon for survival. Once salmon have reached their spawning grounds, bears and eagles pluck adult salmon from the river to eat often leaving the nitrogen, carbon, and phosphorous rich carcasses behind on the forest floor where they provide nourishment to the giant Douglas Firs and Western Hemlock trees. In return, these towering trees shade and protect the river making it habitable for fish.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./static/images/learn_images/sockeye.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image_caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Sockeye Salmon in the Adams River, Department of Fisheries and Oceans Canada"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "As salmon migrated across the northeast Pacific for thousands of years, some of the ocean\u2019s top predators, orcas and pinnipeds, evolved with them. Pinnipeds, such as harbor seals and sea lions, eat a wide variety of fish aside from salmon including rockfish, herring, smelt, and squid. Today, as large numbers of pinnipeds inhabit the coastal waters of the north Pacific, one major ecotype of orca\u2014known as the transient killer whale\u2014are also flourishing. Transient killer whales travel in family pods made up of five or six individuals, usually a mother and her offspring. They occasionally group together with other pods of orcas, related or not, in order to reproduce, socialize, and hunt. The diets of these killer whales also include other large whales and porpoises.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), "A separate ecotype killer whales thrive off the salmon rich, nutrient dense, forest fed waters of what today is known as the Salish Sea of Washington and British Columbia. Two distinct communities with somewhat overlapping territories exist, Northern Residents and Southern Residents. Both rely on salmon\u2014mostly Chinook. Southern Residents are the main focus of Whale Scout\u2019s programs and are made up of 3 matriarchal family pods (J, K, and L pods). Yet a third ecotype of killer whale exists in the Salish Sea: offshore killer whales. Rarely seen, these whales are thought to eat mostly sharks and as a result have worn-down teeth from the rough skin."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_composition__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Over the last 150 years, Europeans developed the Salish Sea watershed for large-scale human habitation. We didn\u2019t understand how our actions would alter the life of the majestic forest and sea surrounding us. Forests were cleared, beaches were walled up, and rivers were dammed to allow western civilization to flourish. Commercial fisheries were established to bolster the economy and the orcas were seen as vicious, voracious fishing competition. Our western scientific understanding of killer whales was non-existent. Out of fear and misunderstanding, humans shot to kill orcas as recently as the 1960s. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), "Beginning in the early 1960s, the marine park and aquarium industry was booming and began to target killer whales in Puget Sound. Capture teams patrolled Puget Sound by air and boat searching for orcas. When a pod was located, the teams chased the whales into coves, often detonating underwater seal bombs to disorient and frighten them making it easier to corral the group into a net pen and separate and remove the calves to be sold for captivity. It is unknown exactly how many whales were taken, but federal estimates put the number at around 50 individuals\u2014mainly Southern Resident J and L pod individuals. Only one of the captured Southern Residents, named \u201CLolita\u201D from L pod is alive today and is currently on display at the Miami Seaquarium.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./static/images/learn_images/captured.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image_caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Members of L pod captured in Penn Cove, Wallie Funk, Associated Press"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "In 1976, the horrific capture of a transient orca pod (including the still wild-living matriarch T46) at Budd Inlet was witnessed by Ralph Munro who, at the time, was an aid to Washington Governor Evans. Motivated by the horror of what he saw, the capture process was later outlawed in the state of Washington. As a result, the federal government hired biologists to study, count, and track local orca populations. Scientists, such as Ken Balcomb with the Center for Whale Research on San Juan Island, began to unravel vibrant lives and cultures of the Salish Sea orcas and our fear of these northwest icons was replaced with awe. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), "As the Center for Whale Research continued monitoring the orca population, they discovered that resident population numbers mirrored that of the salmon returns. In years when the salmon runs were strong, the resident orca population boomed. When the salmon runs were weak, more resident whales died. In 2005, the Southern Resident killer whale population were listed as endangered under the Endangered Species Act following a precipitous in numbers. Today, Southern Resident killer whales number fewer than when they were listed as endangered, a disappointing trend. The main cause of this decline is a lack of\xA0salmon.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./static/images/learn_images/graph.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image_caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Annual indices of mortality of (a) northern and (b) southern resident killer whales and (c) abundance of Chinook salmon, 1979-2003. Deviations from an annual index value of 1 (a,b) indicate higher or lower than expected mortality rates. Annual abundance indices for Chinook salmon (c) reflect departures from the average abundance over the entire time series. Ford et al., 2009"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "A well-fed orca has a thick layer of fat, also known as blubber. Aside from providing buoyancy and body heat control, the blubber layer is where an orca stores ingested pollutants. As top predators with long lives, any pollutants in the water (PCBs, DDT, flame retardants, etc.) bioaccumulate at the upper levels of the food chain. Well fed orcas store the pollutants in their blubber layer where their side effects are minimal. The transient orcas of the Salish Sea have an abundant supply of pinnipeds and other marine mammals to feed upon and therefore are able to keep toxins stored away in their blubber. The Southern Residents, despite eating lower on the food chain (marine mammals vs. salmon) are more at risk to toxin exposure since they are metabolizing their blubber stores burning fat during times of low salmon abundance. These toxins are proven to disrupt immune and reproductive systems. Compounding these issues are vessel impacts. Underwater noise disrupts the whale\u2019s echolocation and communication and the presence of boats has been linked with behavior changes."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_threats__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "To recover these endangered Southern Resident killer whales we must address these three main threats. Whale Scout\u2019s programs address each one and provide ways for you to get involved. First, we offer ways to watch whales from shore without leaving any trace on our waters.(hyperlink to watch section) Second, we help limit toxins from entering our waterways. We offer suggestions each month to become better stewards of the environment which add up to help the whales. (hyperlink? To the monthly list of actions on the back of the \u201Csave orcas\u201D brochure? Direct elsewhere to that info on the site?) Our \u201CHelpin\u2019 Out\u201D events (link to Helpin\u2019 Out event listing) also limit toxins from entering our waterways through the natural treatment of stormwater runoff. At these events we plant trees and work to restore ecological function along salmon rivers, streams, and nearshore habitats. This provides salmon more places to live, spawn, and thrive. The more salmon there are, the more food killer whales have to eat. No matter where you live, you can make a difference with PodMatch (link) through your donations or participation with groups throughout the west coast. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), "We must keep in mind that we\u2019re striving for intact ecosystems from the treetops to the outer coast. Not only will the whales benefit from resilient forests, rivers and streams, everyone else will too, including us. The work we do restoring salmon habitat results in cleaner water, air, and more salmon for everyone.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), "Southern Resident killer whales have a broad range from Southeast Alaska to to Monterey, California. Some of these west coast rivers extend hundreds of miles inland crossing the backyards and neighborhoods in major population centers. Unfortunately, many of these populations of salmon are also threatened or endangered.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./static/images/learn_images/salmon_map.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image_caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "What\u2019s the Connection Between Planting Trees and Saving Whales?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "A significant amount of time spent a volunteer work parties or our \u201CHelpin\u2019 Out\u201D events are spent restoring the \u201Criparian zone\u201D or vegetation immediately along salmon rivers and streams. You may ask, \u201CWhy is this important, and how does it help?\u201D Well, with the help of our friends at the Skagit Fisheries Enhancement Group, we came up with a fun way to remember: 6 C's Thanks to Trees!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Cool "), "- Trees shade the water keeping it cool in warm months"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Clean "), "- Vegetation and root systems filter toxins in rain runoff before entering into waterways"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Clear "), "- Complex root systems hold the banks of rivers and streams preventing erosion which can smother salmon eggs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "Constant "), "- Consistently flowing waters are critical for salmon. Rushes and low drops in water levels don\u2019t allow fish to move where they need to go or can scour out eggs embedded in streambeds. Rain is slowed down by tree branches and is stored in the ground beneath trees to slowly be released into the main channel."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, "Critters "), "- The tiny bugs that baby salmon need to eat live on native vegetation. This gives the orca\u2019s food\u2019s food a place to thrive!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "Cover "), "- Towering trees and fallen logs offer adult migrating salmon some protection and refuge from predators such as birds who may be lurking above."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "Many of our Helpin' Out events are supported by The Nature Conservancy. Planting trees in our cities helps our orcas because of the reasons above and to specifically reduce toxic stormwater which is harmful for salmon, orcas, and all of us.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./static/images/learn_images/how_were_helping.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image_caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "The Nature Conservancy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.article_section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, "Additional Links & Resources"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.adfg.alaska.gov/index.cfm?adfg=wildlifenews.view_article&articles_id=407&fbclid=IwAR00bl7q7-1MasG0vXosVLD6EYicift8xXHo1X6bw__Ia4NLeDNF2Cs2HhM",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "Alaska Department of Fish and Game - Salmon and Trees")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.nationalgeographic.org/encyclopedia/blubber/?fbclid=IwAR01p4oC2woY4Ibf_dRx7oHHiXM5ZYeXe4zopiKukhbrSEiEeBNf8uhU-eI",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, "National Geographic - Blubber")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.orcanetwork.org/nathist/OIOM2006edited.pdf",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "Orcas in Our Midst")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.theolympian.com/news/local/article25320205.html?fbclid=IwAR1WgF5PqPH9R8USQUWc-mIDjXud3g0nqOW1cpaTBtxZZlBqajYemZyKvNc",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "The Olympian - Orca Captures")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.fisheries.noaa.gov/video/spotlight-southern-resident-killer-whale-interview-noaa-fisheries-biologist-lynne?fbclid=IwAR2bSuEPDR-GPtTM4NcuwunCZ59ppEJO8ok-KtWA3sdf5ZVJiB4OmzfylWM",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "NOAA Spotlight on SRKW"))))));
});

/***/ }),

/***/ "./pages/scss/app.scss":
/*!*****************************!*\
  !*** ./pages/scss/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"member": "_31aIprjyBDmsvNZgzxNNJn",
	"team_about": "_2RIpZQWfUl8DAJli_14zqY",
	"team_image": "_1Ykj-snCIPdebCijdcVZbj",
	"square": "_26rGUJUdwatoygWBF53vFW",
	"act": "_1yHrwMOUUlrfKx7gPr2VTw",
	"article_container": "_1L_BAhvHh2AaLvOPlv8X2w",
	"act_header": "_2edBa-CrVDWt87G6qzD2a5",
	"monthly_checklist": "nCqTnuluilMyA-Yy7kQkV",
	"monthly_checklist_header": "_3vujCr3VzP5bUFACI-aWCI",
	"months": "_2R_1XMWQj2OV6p8ame9DMn",
	"month": "_2Ys4kJ-jQJdrnvAXlvaY7a",
	"home": "_1w075ffhvFBlpjDEm7LJXe",
	"home_header": "_2LFB9UCXjswk19OJPe9-5N",
	"sub_header": "_1A_qMEaUhH144ByvOg4E4t",
	"description": "_15YOZhf5-4qZ29Cw0tNvHQ",
	"what_we_do": "_21B_clNkb2Yfq5R1VO4TcL",
	"you_can_help": "_1vY_ltV4OE-Kme6UDda8wH",
	"home_news_and_podcasts": "sdReeN9ru-ldZX0BUMOME",
	"home_footer_image": "_1g85GiWtGJFWIuoFCLdNCj",
	"team": "_34GCJZmVKrJNmFict_LS7L",
	"team_header": "_1RFJfUQbzn92ffvgnpn4qV",
	"background_container": "_3jb73q5gMN0IPEzru4DGPC",
	"team_footer": "_2pXrWOhsLGqZg26UVA3ga5",
	"line": "_2UUgToPasFor26q81FSyKb",
	"supporters": "_2bIg2R-aHheoNkpgsHeklV",
	"volunteer": "_34nbnXxj9Myrfx_lwkS8bR",
	"volunteer_header": "_2kGabB7lDZFKIJMNuEAZuo",
	"volunteer_header_text": "CahtN715aVE_dpeA2iFee",
	"perks": "_3082n4Qplz6Ljxx0AG337m",
	"perk": "_2lhNJqyJcsIDKWzunQK75Q",
	"perks_top": "_1UVXeSI29msR5ZiiBo6amI",
	"perks_bottom": "_1r3CGbuYReYYD12TTh0HBe",
	"event": "_1T5Y5L41RPVBysTU1ZfovO",
	"event_header": "_2d72dkFWJZsNKGxzWRUodE",
	"event_date_banner": "_1M421rrO3_mMApIRLh5kZ-",
	"event_date": "_1YR_OE75umaDaNcRA6L8g2",
	"tail": "_2QhK8K5wn0yZN-7by3ViU3",
	"event_footer": "_33TBabzZALkqFv8IQobAqJ",
	"event_footer_content": "_2plyikgdyD3qKxgVPtB-Nb",
	"event_slider_wrapper": "_3hPJztqjklF7frw6GXH0yb",
	"event_slider": "_3rJ9oAdvAj8SVwaQQ9lKar",
	"watch": "_1vnmqHTyIimiyAAVDDxqa2",
	"watch_header_container": "_3heVxRDwb5EeNDw3Looj7x",
	"watch_header": "_1y30gWupyKGsLBTA92tl2H",
	"watch_header_text": "_1i49yApQs9S71pFNzIjz5H",
	"watch_header_image": "_7B6Z8ccPJHj-2OynjmmuS",
	"article_section": "L2id93Pj_0zKtPPQ7MutF",
	"find_us": "_8QSuJgGDmCIIqA6CoaDGW",
	"find_us_container": "anNQbj1xdXO7g8IKW9KkM",
	"calendar": "_2w8czOk43TmwNx5plErt9M",
	"calendar_content": "_3FPYoModNpklGuI6A-oDNq",
	"calendar_text": "_2ogdv4uPhzy05qnUT0xFCV",
	"triangle_down": "_2YJyO2_MyqzdPg_8Y7pbhf",
	"watch_more": "_17e2RcE7nHQwxOXoEOjHa4",
	"watch_more_image": "_1anW_TEiy4v6pv89Z5x6Sx",
	"map_header": "xmx6UMFsjGy-2vwTcZdOk",
	"marker_container": "_2aU_zWZisRmEW1j9CyIYW7",
	"marker": "_2Com335toNQFC0X30cXhgz",
	"links": "Mtd7rzWpJQeWpZ66q97jX",
	"dropdown": "_2HwJNKnlL9a6pnDoFkANIG",
	"desktop_navigation": "_1Y9qxVc4Rw23hTFsXAtVzC",
	"mobile_navigation": "_26f6-5COiLsjzNefylztCo",
	"hamburger": "_1kFQ5X1MUK_hunVS8-LFIh",
	"menu": "_1AfWZEnDAgXuO8aPnBvHbf",
	"hamburger_icon": "_1nlkZS_LXKqc9o6pRmkpfQ",
	"about_label": "_2ghVMt1Ld4vaKzW-UPCr2A",
	"about_dropdown": "UxBNnYj_tNvpNBhlbbzW8",
	"act_label": "_2p0zNpe21xt3bCt6Im8GDr",
	"act_dropdown": "_1ImEWMDNQFOOsL2l0bdUmU",
	"join_label": "_2kBvuBOWGt3DqDylH9Znm2",
	"join_dropdown": "_1sz9ne_boGcUoafwd2CCsq",
	"composition": "_1XIpYzRhpnZ2SNTKJ9b762",
	"composition_content": "_18u0EGwr0JI-BMulpWmE79",
	"composition_desktop": "_8H-vUtvCFlllxPNixRB6g",
	"composition_tablet": "_3Mg6saMv4Hx9H2nNzGmJoN",
	"composition_mobile": "_3q8EVJVEw5EG533pv9NZPP",
	"threats": "_3pqaVZsOAVYclM01mT-eGl",
	"threats_header": "_1EozEyJzZaZwxmDOFGAqlF",
	"threats_top": "_22xWSU_CBvfPU9iIFBsEEz",
	"threats_middle": "_26Y3dR0s0TK1IiVaElpQqa",
	"threats_bottom": "m9JDmqoAP9oJhvHuquFHM",
	"learn": "_2g7wOHPH2dBKHHrUJhbM8E",
	"learn_header": "_12xps7v40jCs0lt_1-82el",
	"contact": "_3Fq2y1n3yfkshXbkJtZLsi",
	"contact_header": "_3IyHiBZqINu6YBUT4ae2ja",
	"contact_content": "_10UVk7noiMDmci2RWU-gDF",
	"contact_content_left": "fk1PyXUqx86FyMfJm29xy",
	"main_button": "_2UxR3fjEklPY0IlBPttLXV",
	"contact_content_right": "FBB9v_mmDOE62ct_XapUD",
	"content_icon_section": "nS4yji_1AK1B03jQYR7yk",
	"contact_icon": "YtdizLlSI7llE72880icJ",
	"contact_social": "_1R63UfkKTlThE4gKs-dn2K",
	"contact_social_icon": "rMsfUCE0EE5vsRHGKN0Gc",
	"contact_form": "_3vF5skp9kQ-kjqJHZvhM9T",
	"event_content": "_3wWN1FgMVLwSx65bucxWRb",
	"event_caption": "_2mMuYc3pP2rshH9vdnM60m",
	"event_description": "_3A51eMuNkXVbH_GugLZT0P",
	"podcast_header": "_3sy_8qr-tTqarED5dUqIZ9",
	"search_bar": "_3GeDBI2fY7Kk0BIRoEGzcj",
	"podcast_cards": "_3KYkDL3efKkPT55c9_RKgt",
	"no_match": "_3CJYfz-jEDIyY0K0VHla1K",
	"podcast_card": "_3wFAUIjQ5E0PsxcKo5oXTH",
	"podcast_date_banner": "_3vRUIK-g9k09jxxuklqeri",
	"podcast_date": "_3X7xRFNtzWwwOxGPYNg1cF",
	"listen": "ijL2Y40qDLLtIu5g3q6pK",
	"podcast_content": "_2B1DJsdq0N4-5V8MJTlYrL",
	"podcast_player": "pcJgasnM_TSY9FW-z-LR2",
	"podcast_back": "_1Gd7JafnEr99wYJyumvjZL",
	"image_container": "_1UIcbf4bpb4VJQFsaBI2WO",
	"icon": "_20QzFcLPlWfMAa4oCl1rkM",
	"image_caption": "_9TU9outYq7TIrkAti99NH",
	"triangle_right": "_3_p2_0YLdW2C3LuHAaKPpF"
};

/***/ }),

/***/ "./pages/scss/footer.scss":
/*!********************************!*\
  !*** ./pages/scss/footer.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"footer": "_4lkSwLZRVGCVsPJFOBMMz",
	"footer_background": "_3_XrnnEnEaAOuIZsZKX4Ez",
	"footer_container": "II81dVGYJYsk0xwfxxbUL",
	"site_map": "_2UjG9qQv--9QPZwUEAUaUs",
	"site_map_column": "_3YffozXSGVJMhcexzLhQfQ",
	"bold": "pFdmpCvSZ3o3RTyhvCoGY",
	"footer_connect": "_3pYMDdIQuwbTdJTjTW46XV",
	"news_letter": "_3do0oKwmm5DduScsx6moRQ",
	"signup_form": "_1UcgeGMvQcrooDGlMJyFdK",
	"connect": "_1ddtDgE4iLHzt1YNzaom42",
	"address": "_3llpJn-VnyVsle7gaXvirW",
	"social": "_2v2aTW2OI5pY-eu1nzU_IL",
	"social_icon": "_3sBTy3kj_bWxyzHf4Iln5N",
	"credits": "_2MsR2gjKcVKeb8rPm7RpwW"
};

/***/ }),

/***/ "./pages/scss/mobileNavigation.scss":
/*!******************************************!*\
  !*** ./pages/scss/mobileNavigation.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"mobile_navigation": "_2V92VTr4YTW0IIYKc_Xq9G",
	"hamburger": "_3jdSyCwLqAQe7ns5-jGDp2",
	"menu": "OpxTQCv7b2-c1a4LMQJ5y",
	"hamburger_icon": "fOmxWBG9x_fvW-E4hqkNu",
	"line": "_1YxvQe_SuqV4LKU8RBrea6",
	"about_label": "_3oKlwk0Ct6i_aJseielkML",
	"about_dropdown": "_1LtT-JS3423vMSB8FHH4uS",
	"act_label": "_276Qcgo6Ict3BKG4g4Bh9Z",
	"act_dropdown": "_3JkYMB7BPEIP-hGNd7Yfzn",
	"join_label": "_2eb_zKZVff8JOu75JBVSC-",
	"join_dropdown": "_5pKsTYMcvytep-8qacxU6"
};

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/learn.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/learn.js */"./pages/learn.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ })

/******/ });
//# sourceMappingURL=learn.js.map