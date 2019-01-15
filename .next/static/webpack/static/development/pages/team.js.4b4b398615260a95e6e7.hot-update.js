webpackHotUpdate("static\\development\\pages\\team.js",{

/***/ "./pages/team.js":
/*!***********************!*\
  !*** ./pages/team.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var _components_member__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/member */ "./pages/components/member.js");
/* harmony import */ var _scss_team_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/team.scss */ "./pages/scss/team.scss");
/* harmony import */ var _scss_team_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_team_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_scripts_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/scripts/helpers */ "./static/scripts/helpers.js");
/* harmony import */ var _static_scripts_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_scripts_helpers__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Jeff Brown\\Desktop\\Web Dev\\Client Websites\\Whale Scout\\App\\pages\\team.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _scss_team_scss__WEBPACK_IMPORTED_MODULE_3___default.a.team,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, _static_scripts_helpers__WEBPACK_IMPORTED_MODULE_4___default.a.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_member__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: member.name,
      image: member.image,
      color: member.color,
      name: member.name,
      role: member.role,
      email: member.email,
      about: member.about,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  })));
});
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/team")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./static/scripts/helpers.js":
/*!***********************************!*\
  !*** ./static/scripts/helpers.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Create team member
function Member(name, role, email, about, image, color) {
  this.name = name;
  this.role = role;
  this.email = email;
  this.about = about;
  this.image = image;
  this.color = color;
} // Angled square color palette


var green = '#a6d5cd';
var blue = '#032c4a';
var red = '#b91e1e';
var yettlow = '#e9df81'; // Add new team members below this line

var Whitney = new Member('Whitney Neugebauer', 'Director', 'director@whalescout.org', 'Whitney Neugebauer completed degrees in Geology and Anthropology from Eckerd College prior to receiving her master’s degree in Marine and Environmental Affairs from the University of Washington. She went on to found Whale Scout in 2013. Previously, Whitney served on the board of Sound Action and she currently serves on the board of One Bothell and Friends of North Creek Forest. She teaches kids jiu jitsu at Evergreen Karate and Jiu Jitsu in Bothell with her husband, Bryan Alvarez. Together they have one daughter and too many cats.', './static/images/whitney.jpg', green);
var Juliana = new Member('Juliana Houghton', 'Director', 'director@whalescout.org', 'Whitney Neugebauer completed degrees in Geology and Anthropology from Eckerd College prior to receiving her master’s degree in Marine and Environmental Affairs from the University of Washington. She went on to found Whale Scout in 2013. Previously, Whitney served on the board of Sound Action and she currently serves on the board of One Bothell and Friends of North Creek Forest. She teaches kids jiu jitsu at Evergreen Karate and Jiu Jitsu in Bothell with her husband, Bryan Alvarez. Together they have one daughter and too many cats.', './static/images/whitney.jpg', green);
var Bryan = new Member('Bryan Alvarez', 'Director', 'director@whalescout.org', 'Whitney Neugebauer completed degrees in Geology and Anthropology from Eckerd College prior to receiving her master’s degree in Marine and Environmental Affairs from the University of Washington. She went on to found Whale Scout in 2013. Previously, Whitney served on the board of Sound Action and she currently serves on the board of One Bothell and Friends of North Creek Forest. She teaches kids jiu jitsu at Evergreen Karate and Jiu Jitsu in Bothell with her husband, Bryan Alvarez. Together they have one daughter and too many cats.', './static/images/whitney.jpg', green);
var Kailey = new Member('Kailey Genther', 'Director', 'director@whalescout.org', 'Whitney Neugebauer completed degrees in Geology and Anthropology from Eckerd College prior to receiving her master’s degree in Marine and Environmental Affairs from the University of Washington. She went on to found Whale Scout in 2013. Previously, Whitney served on the board of Sound Action and she currently serves on the board of One Bothell and Friends of North Creek Forest. She teaches kids jiu jitsu at Evergreen Karate and Jiu Jitsu in Bothell with her husband, Bryan Alvarez. Together they have one daughter and too many cats.', './static/images/whitney.jpg', green);
var David = new Member('David Bain', 'Director', 'director@whalescout.org', 'Whitney Neugebauer completed degrees in Geology and Anthropology from Eckerd College prior to receiving her master’s degree in Marine and Environmental Affairs from the University of Washington. She went on to found Whale Scout in 2013. Previously, Whitney served on the board of Sound Action and she currently serves on the board of One Bothell and Friends of North Creek Forest. She teaches kids jiu jitsu at Evergreen Karate and Jiu Jitsu in Bothell with her husband, Bryan Alvarez. Together they have one daughter and too many cats.', './static/images/whitney.jpg', green);
var Lindsey = new Member('Lindsey Mann', 'Director', 'director@whalescout.org', 'Whitney Neugebauer completed degrees in Geology and Anthropology from Eckerd College prior to receiving her master’s degree in Marine and Environmental Affairs from the University of Washington. She went on to found Whale Scout in 2013. Previously, Whitney served on the board of Sound Action and she currently serves on the board of One Bothell and Friends of North Creek Forest. She teaches kids jiu jitsu at Evergreen Karate and Jiu Jitsu in Bothell with her husband, Bryan Alvarez. Together they have one daughter and too many cats.', './static/images/whitney.jpg', green);
var Ariel = new Member('Ariel Yseth', 'Director', 'director@whalescout.org', 'Whitney Neugebauer completed degrees in Geology and Anthropology from Eckerd College prior to receiving her master’s degree in Marine and Environmental Affairs from the University of Washington. She went on to found Whale Scout in 2013. Previously, Whitney served on the board of Sound Action and she currently serves on the board of One Bothell and Friends of North Creek Forest. She teaches kids jiu jitsu at Evergreen Karate and Jiu Jitsu in Bothell with her husband, Bryan Alvarez. Together they have one daughter and too many cats.', './static/images/whitney.jpg', green); // All team members

var team = [Whitney, Juliana, Bryan, Kailey, David, Lindsey, Ariel];

var getColor = function getColor(color) {
  return {
    background: "".concat(color, " !important")
  };
};

module.exports = {
  team: team,
  getColor: getColor
};

/***/ })

})
//# sourceMappingURL=team.js.4b4b398615260a95e6e7.hot-update.js.map