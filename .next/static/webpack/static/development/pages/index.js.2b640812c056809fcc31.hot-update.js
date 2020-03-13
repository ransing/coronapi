webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");

var _jsxFileName = "/Users/ceaseless/Desktop/corona/components/Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: #f2f2f2;\n  font-size: 2rem;\n  padding: 2rem;\n  border-radius: 2rem;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StatGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var StatBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
function Stats(_ref) {
  var url = _ref.url;

  var _useStats = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_3__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  console.log(stats);
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " Error...");
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Loading...");
  if (!stats.confirmed) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "no stats");
  return __jsx(StatGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(StatBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Confirmed:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, stats.confirmed.value)), __jsx(StatBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Deaths:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, stats.deaths.value), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Percent mortality: "), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, stats.deaths.value / stats.confirmed.value * 100, " %")), __jsx(StatBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Recovered:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, stats.recovered.value)));
} // import {useState, useEffect } from 'react';
// import useStats from '../utils/useStats';
// export default function Stats({url}){
//     const {stats, loading, error} = useStats(url);
//     if(loading) return <p>loading....</p>;
//     if (error) return <p> error.. </p>;
//     if(!stats) return <p>loading </p>
//    console.log(stats.confirmed,loading,error, url);
//     return (
//     <div> 
//         <div className="statBlock">
//             <h3> Confirmed </h3>
//             <span>{stats.confirmed.value}</span>
//         </div>
//         <div className="statBlock">
//             <h3> deaths:</h3>
//             <span>{stats.deaths.value}</span>
//         </div>
//         <div className = "statBlock">
//             <h3>Received:  </h3>
//             <span> {stats.recovered.value}</span>
//         </div>
//         <p> Stats </p>
//     </div>
//     )
// }

/***/ })

})
//# sourceMappingURL=index.js.2b640812c056809fcc31.hot-update.js.map