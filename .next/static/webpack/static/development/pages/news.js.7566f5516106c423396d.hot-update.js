webpackHotUpdate("static\\development\\pages\\news.js",{

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/dom-serializer/index.js":
false,

/***/ "./node_modules/dom-serializer/node_modules/domelementtype/index.js":
false,

/***/ "./node_modules/domelementtype/index.js":
false,

/***/ "./node_modules/domhandler/index.js":
false,

/***/ "./node_modules/domhandler/lib/element.js":
false,

/***/ "./node_modules/domhandler/lib/node.js":
false,

/***/ "./node_modules/domutils/index.js":
false,

/***/ "./node_modules/domutils/lib/helpers.js":
false,

/***/ "./node_modules/domutils/lib/legacy.js":
false,

/***/ "./node_modules/domutils/lib/manipulation.js":
false,

/***/ "./node_modules/domutils/lib/querying.js":
false,

/***/ "./node_modules/domutils/lib/stringify.js":
false,

/***/ "./node_modules/domutils/lib/traversal.js":
false,

/***/ "./node_modules/entities/index.js":
false,

/***/ "./node_modules/entities/lib/decode.js":
false,

/***/ "./node_modules/entities/lib/decode_codepoint.js":
false,

/***/ "./node_modules/entities/lib/encode.js":
false,

/***/ "./node_modules/entities/maps/decode.json":
false,

/***/ "./node_modules/entities/maps/entities.json":
false,

/***/ "./node_modules/entities/maps/legacy.json":
false,

/***/ "./node_modules/entities/maps/xml.json":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/htmlparser2/lib/CollectingHandler.js":
false,

/***/ "./node_modules/htmlparser2/lib/FeedHandler.js":
false,

/***/ "./node_modules/htmlparser2/lib/Parser.js":
false,

/***/ "./node_modules/htmlparser2/lib/ProxyHandler.js":
false,

/***/ "./node_modules/htmlparser2/lib/Stream.js":
false,

/***/ "./node_modules/htmlparser2/lib/Tokenizer.js":
false,

/***/ "./node_modules/htmlparser2/lib/WritableStream.js":
false,

/***/ "./node_modules/htmlparser2/lib/index.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-html-parser/lib/HtmlParser.js":
false,

/***/ "./node_modules/react-html-parser/lib/convertNodeToElement.js":
false,

/***/ "./node_modules/react-html-parser/lib/dom/attributes/BooleanAttributes.js":
false,

/***/ "./node_modules/react-html-parser/lib/dom/attributes/ReactAttributes.js":
false,

/***/ "./node_modules/react-html-parser/lib/dom/elements/VoidElements.js":
false,

/***/ "./node_modules/react-html-parser/lib/elementTypes/StyleElementType.js":
false,

/***/ "./node_modules/react-html-parser/lib/elementTypes/TagElementType.js":
false,

/***/ "./node_modules/react-html-parser/lib/elementTypes/TextElementType.js":
false,

/***/ "./node_modules/react-html-parser/lib/elementTypes/UnsupportedElementType.js":
false,

/***/ "./node_modules/react-html-parser/lib/elementTypes/index.js":
false,

/***/ "./node_modules/react-html-parser/lib/index.js":
false,

/***/ "./node_modules/react-html-parser/lib/processNodes.js":
false,

/***/ "./node_modules/react-html-parser/lib/utils/generatePropsFromAttributes.js":
false,

/***/ "./node_modules/react-html-parser/lib/utils/htmlAttributesToReact.js":
false,

/***/ "./node_modules/react-html-parser/lib/utils/inlineStyleToObject.js":
false,

/***/ "./node_modules/react-html-parser/lib/utils/isEmptyTextNode.js":
false,

/***/ "./node_modules/react-html-parser/lib/utils/isValidTagOrAttributeName.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/text-ellipsis/lib/index.js":
false,

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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__);




var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");



var NewsCard = function NewsCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animateIn: "fadeIn",
    animateOnce: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "article",
    params: {
      slug: props.slug
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

/***/ }),

/***/ 7:
false

})
//# sourceMappingURL=news.js.7566f5516106c423396d.hot-update.js.map