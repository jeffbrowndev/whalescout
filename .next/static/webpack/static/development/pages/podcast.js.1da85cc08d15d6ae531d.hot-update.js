webpackHotUpdate("static\\development\\pages\\podcast.js",{

/***/ "./node_modules/react-audio-player/dist/bundle.js":
/*!********************************************************!*\
  !*** ./node_modules/react-audio-player/dist/bundle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),u=l(a),i=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){var e=this,t=this.audioEl;this.updateVolume(this.props.volume),t.addEventListener("error",function(t){e.props.onError(t)}),t.addEventListener("canplay",function(t){e.props.onCanPlay(t)}),t.addEventListener("canplaythrough",function(t){e.props.onCanPlayThrough(t)}),t.addEventListener("play",function(t){e.setListenTrack(),e.props.onPlay(t)}),t.addEventListener("abort",function(t){e.clearListenTrack(),e.props.onAbort(t)}),t.addEventListener("ended",function(t){e.clearListenTrack(),e.props.onEnded(t)}),t.addEventListener("pause",function(t){e.clearListenTrack(),e.props.onPause(t)}),t.addEventListener("seeked",function(t){e.props.onSeeked(t)}),t.addEventListener("loadedmetadata",function(t){e.props.onLoadedMetadata(t)}),t.addEventListener("volumechange",function(t){e.props.onVolumeChanged(t)})}},{key:"componentWillReceiveProps",value:function(e){this.updateVolume(e.volume)}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var t=this.props.listenInterval;this.listenTracker=setInterval(function(){e.props.onListen(e.audioEl.currentTime)},t)}}},{key:"updateVolume",value:function(e){"number"==typeof e&&e!==this.audioEl.volume&&(this.audioEl.volume=e)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),this.listenTracker=null)}},{key:"render",value:function(){var e=this,t=this.props.children||u.default.createElement("p",null,"Your browser does not support the ",u.default.createElement("code",null,"audio")," element."),n=!(!1===this.props.controls),r=this.props.title?this.props.title:this.props.src,a={};return this.props.controlsList&&(a.controlsList=this.props.controlsList),u.default.createElement("audio",o({autoPlay:this.props.autoPlay,className:"react-audio-player "+this.props.className,controls:n,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,onPlay:this.onPlay,preload:this.props.preload,ref:function(t){e.audioEl=t},src:this.props.src,style:this.props.style,title:r},a),t)}}]),t}();s.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",crossOrigin:null,id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",src:null,style:{},title:"",volume:1},s.propTypes={autoPlay:i.default.bool,children:i.default.element,className:i.default.string,controls:i.default.bool,controlsList:i.default.string,crossOrigin:i.default.string,id:i.default.string,listenInterval:i.default.number,loop:i.default.bool,muted:i.default.bool,onAbort:i.default.func,onCanPlay:i.default.func,onCanPlayThrough:i.default.func,onEnded:i.default.func,onError:i.default.func,onListen:i.default.func,onLoadedMetadata:i.default.func,onPause:i.default.func,onPlay:i.default.func,onSeeked:i.default.func,onVolumeChanged:i.default.func,preload:i.default.oneOf(["","none","metadata","auto"]),src:i.default.string,style:i.default.objectOf(i.default.string),title:i.default.string,volume:i.default.number};var c=s;t.default=c;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"ReactAudioPlayer","/Users/justin/Projects/react-audio-player/src/index.jsx"),__REACT_HOT_LOADER__.register(c,"default","/Users/justin/Projects/react-audio-player/src/index.jsx"))},function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t){e.exports=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")}]);

/***/ }),

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
      }, podcast.podcast_title));
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
//# sourceMappingURL=podcast.js.1da85cc08d15d6ae531d.hot-update.js.map