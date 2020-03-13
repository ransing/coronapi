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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
/* harmony import */ var _Stats_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stats.js */ "./components/Stats.js");

var _jsxFileName = "/Users/ceaseless/Desktop/corona/components/CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function CountrySelector() {
  var _useStats = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_2__["default"])('https://covid19.mathdro.id/api/countries'),
      countries = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  console.log(countries);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('USA'),
      selectedCountry = _useState[0],
      setSelectedCountry = _useState[1];

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "error...");
  if (!countries) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "loading ");
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Current selection: ", selectedCountry), __jsx("select", {
    onChange: function onChange(e) {
      setSelectedCountry(e.target.value);
      console.log(selectedCountry);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, Object.entries(countries.countries).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        country = _ref2[0],
        code = _ref2[1];

    return __jsx("option", {
      selected: selectedCountry === countries.iso3[code],
      key: code,
      value: countries.iso3[code],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, country);
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.8778d31ec8707a16384d.hot-update.js.map