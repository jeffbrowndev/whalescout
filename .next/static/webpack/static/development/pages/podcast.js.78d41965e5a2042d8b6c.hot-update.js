webpackHotUpdate("static\\development\\pages\\podcast.js",{

/***/ "./pages/podcast.js":
/*!**************************!*\
  !*** ./pages/podcast.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/app.scss */ "./pages/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-audio-player */ "./node_modules/react-audio-player/dist/bundle.js");
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\podcast.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Podcast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Podcast, _React$Component);

  function Podcast(props) {
    var _this;

    _classCallCheck(this, Podcast);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Podcast).call(this, props));
    _this.state = {
      podcast: {}
    };
    return _this;
  }

  _createClass(Podcast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("http://localhost/whalescout/wp-json/wp/v2/posts?slug=".concat(this.props.url.query.slug)).then(function (res) {
        return res.json();
      }).then(function (podcast) {
        return _this2.setState({
          podcast: podcast[0].acf
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var podcast = this.state.podcast; // Below are podcast details with defaults available when no information is provided

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, podcast.podcast_title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, podcast.podcast_description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_audio_player__WEBPACK_IMPORTED_MODULE_4___default.a, {
        src: podcast.podcast_mp3,
        autoPlay: true,
        controls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return Podcast;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Podcast);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/podcast")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=podcast.js.78d41965e5a2042d8b6c.hot-update.js.map