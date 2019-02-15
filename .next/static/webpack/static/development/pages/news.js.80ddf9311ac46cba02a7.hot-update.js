webpackHotUpdate("static\\development\\pages\\news.js",{

/***/ "./pages/components/newsCard.js":
/*!**************************************!*\
  !*** ./pages/components/newsCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/app.scss */ "./pages/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var text_ellipsis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! text-ellipsis */ "./node_modules/text-ellipsis/lib/index.js");
/* harmony import */ var text_ellipsis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(text_ellipsis__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\components\\newsCard.js";






var NewsCard = function NewsCard(props) {
  var addBreaks = props.content.replace(/\n/, '<br>');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.news_card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.news_content_right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.news_excerpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(text_ellipsis__WEBPACK_IMPORTED_MODULE_2___default()(addBreaks, 300))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.read_more,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Read more \u2192")))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsCard);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components\\newsCard")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=news.js.80ddf9311ac46cba02a7.hot-update.js.map