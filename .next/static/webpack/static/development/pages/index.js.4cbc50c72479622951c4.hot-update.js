webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/eventSlider.js":
/*!*****************************************!*\
  !*** ./pages/components/eventSlider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_eventSlider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/eventSlider.scss */ "./pages/scss/eventSlider.scss");
/* harmony import */ var _scss_eventSlider_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_eventSlider_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./pages/components/event.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\components\\eventSlider.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    posts(where: { categoryId: 4 }) {\n      edges {\n        node {\n          date\n          title\n          content\n          featuredImage {\n            sourceUrl\n          }\n          author {\n            name\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var ellipsis = __webpack_require__(/*! text-ellipsis */ "./node_modules/text-ellipsis/lib/index.js"); // Get all everts


var getAllEvents = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

var EventSlider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EventSlider, _React$Component);

  function EventSlider(props) {
    var _this;

    _classCallCheck(this, EventSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventSlider).call(this, props));
    _this.state = {
      data: null
    };
    return _this;
  }

  _createClass(EventSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('https://www.whalescout.org/wp-json/wp/v2/posts').then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({
          data: data
        });
      });
    } // Handle required fields

  }, {
    key: "isImage",
    value: function isImage(event) {
      if (event.node.featuredImage) return ellipsis(event.node.featuredImage.sourceUrl);else return '../../static/images/ws_home_header.svg';
    }
  }, {
    key: "isDescription",
    value: function isDescription(event) {
      if (event.node.content) return ellipsis(event.node.content, 150);else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Sorry, no description is available.");
    }
  }, {
    key: "isTitle",
    value: function isTitle(event) {
      if (event.node.title) return "<h4>".concat(event.node.title, "</h4>");else return "'<h4>Helpin' Out Event!</h4>'";
    }
  }, {
    key: "isDate",
    value: function isDate(event) {
      if (event.node.date) return event.node.date;else return 'Coming Soon!';
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // All events, shortened
      var events = this.props.data.posts.edges;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _scss_eventSlider_scss__WEBPACK_IMPORTED_MODULE_1___default.a.event_slider,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, events.map(function (event) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event__WEBPACK_IMPORTED_MODULE_2__["default"], {
          date: _this3.isDate(event),
          title: _this3.isTitle(event),
          description: _this3.isDescription(event),
          image: _this3.isImage(event),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      }));
    }
  }]);

  return EventSlider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(getAllEvents)(EventSlider));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components\\eventSlider")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.4cbc50c72479622951c4.hot-update.js.map