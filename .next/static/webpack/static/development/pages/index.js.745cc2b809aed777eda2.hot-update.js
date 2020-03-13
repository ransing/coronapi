webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
var _jsxFileName = "/Users/ceaseless/Desktop/corona/components/CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CountrySelector() {
  var countries = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])('https://covid19.mathdro.id/api/countries');
  console.log(countries);
  if (!stats) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "loading ");
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, Object.entriescountries.countries.map(function (country) {})));
}

/***/ })

})
//# sourceMappingURL=index.js.745cc2b809aed777eda2.hot-update.js.map