webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__);






var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");



var NewsCard = function NewsCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    animateOnce: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "article",
    params: {
      slug: path
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.news_card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.news_content_left
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.image
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.news_content_right
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, moment(props.date).format("LL")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a.read_more
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "READ MORE \u2192"))))));
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
//# sourceMappingURL=index.js.161e00de63a3dcfd3217.hot-update.js.map