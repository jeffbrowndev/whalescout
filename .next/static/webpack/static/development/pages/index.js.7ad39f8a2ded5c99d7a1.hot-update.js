webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/scss/app.scss */ "./pages/scss/app.scss");
/* harmony import */ var _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_eventSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/eventSlider */ "./pages/components/eventSlider.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_podcastCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/podcastCard */ "./pages/components/podcastCard.js");
/* harmony import */ var _components_newsCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/newsCard */ "./pages/components/newsCard.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\index.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









 // Home page

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "#a6d5cd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.home,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.home_header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9___default.a, {
    animateIn: "fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Protecting ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Pacific Northwest Whales"), " through land based conservation experiences."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sub_header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.what_we_do,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/ws_home_subheader_fish.svg",
    alt: "Fish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "What We Do..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Whale Scout leads the public in land-based whale watching experiences. We channel people\u2019s interest and passion about whales to on the ground salmon habitat restoration events protecting the primary food source of struggling orcas in Puget Sound.", ' '))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.you_can_help,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "You Can Help!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Anyone can contribute by donating or volunteering at our Helpin' Out Events."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "http://www.paypal.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main_button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "DONATE")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "volunteer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main_button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "VOLUNTEER"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/ws_home_subheader_volunteers.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.home_events_feed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_eventSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    events: props.events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.home_news_and_podcasts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.recent_news,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.recent_header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Recent News"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "./news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.see_all,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "See all news posts"))), props.news.map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_newsCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: article.id,
      date: article.date,
      title: article.title.rendered,
      content: article.content.rendered,
      image: article.acf.featured_image.url,
      slug: article.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "./news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.see_all_mobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "See all news posts")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.recent_header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Recent Podcasts"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "./podcasts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.see_all,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "See all podcasts"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.recent_podcasts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, props.podcasts.map(function (podcast) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_podcastCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: podcast.slug,
      title: podcast.acf.podcast_title,
      date: podcast.acf.podcast_date,
      slug: podcast.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "./podcasts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.see_all_mobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "See all podcasts")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: _pages_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.home_footer_image,
    src: "/static/images/ws_home_whale.svg",
    alt: "Whale",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }));
}; // Fetch data from Wordpress REST API


Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var events, podcasts, news;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost/whalescout/wp-json/wp/v2/posts?categories=2').then(function (events) {
            return events.json();
          });

        case 2:
          events = _context.sent;
          _context.next = 5;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost/whalescout/wp-json/wp/v2/posts?categories=3').then(function (podcasts) {
            return podcasts.json();
          });

        case 5:
          podcasts = _context.sent;
          _context.next = 8;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost/whalescout/wp-json/wp/v2/posts?categories=4').then(function (news) {
            return news.json();
          });

        case 8:
          news = _context.sent;
          // Only grab first 2 podcasts and 3 news posts
          podcasts.length = 4;
          news.length = 3; // Load events, podcasts, and news into 'props'

          return _context.abrupt("return", {
            events: events,
            podcasts: podcasts,
            news: news
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.7ad39f8a2ded5c99d7a1.hot-update.js.map