webpackHotUpdate("styles",{

/***/ "./pages/scss/home.scss":
/*!******************************!*\
  !*** ./pages/scss/home.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"home":"QdqAr08iIzV0N7tn1hiLA","home_header":"_2iLkmMmEmfdGXdZvwLF-c9","sub_header":"ptV2wDUWHn9hW_M7LD-UN","description":"_3y5u2Y9mQgkrbGrf-lM84Y","what_we_do":"_3hOw2gMB23PFhKP99pYBxg","you_can_help":"_2jJAVKgnrQAtNy99Ydk90s"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1542494296447");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.f4e6223862e7e2a82ba5.hot-update.js.map