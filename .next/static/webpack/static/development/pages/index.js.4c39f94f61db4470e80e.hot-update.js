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
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");

var _jsxFileName = "/Users/ceaseless/Desktop/corona/components/CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function CountrySelector() {
  var _useStats = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_2__["default"])('https://covid19.mathdro.id/api/countries'),
      countries = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('USA'),
      selectedCountry = _useState[0],
      setSelectedCountry = _useState[1];

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Loading...");
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Error...");
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Currently Showing ", selectedCountry), __jsx("select", {
    onChange: function onChange(e) {
      setSelectedCountry(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
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
        lineNumber: 23
      },
      __self: this
    }, country);
  })), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "https://covid19.mathdro.id/api/countries/".concat(selectedCountry),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
} // import {useState, useEffect } from 'react';
// import useStats from '../utils/useStats';
// import Stats from './Stats.js'
// export default function CountrySelector(){
//     const {stats: countries, loading, error} = useStats('https://covid19.mathdro.id/api/countries');
//     console.log(countries);
//     const [selectedCountry, setSelectedCountry] = useState('USA');
//     if(loading) return <p>loading...</p>
//     if(error) return <p>error...</p>
//     // if(!countries) return <p>loading </p>
//     return (
//     <div> 
//         <h2>Current selection: {selectedCountry}</h2>
//         <select onChange= { e => {
//             setSelectedCountry(e.target.value);
//             console.log(selectedCountry)
//         }}>
//             {Object.entries(countries.countries).map((
//                 [country, code]) => (
//                    <option selected= {selectedCountry === countries.iso3[code]} key={code} value = {countries.iso3[code]}>
//                         {country}
//                     </option>
//             ))}
//         </select>
//         <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
//     </div>
//     )
// }

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CountrySelector */ "./components/CountrySelector.js");
var _jsxFileName = "/Users/ceaseless/Desktop/corona/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // function useStats(){
//     const [stats, setStats] = useState();
//     useEffect(() => {
//         async function fetchData(){
//                 console.log('fetching')
//                 const data = await fetch('https://covid19.mathdro.id/api')
//                 .then (data => data.json());
//                 setStats(data)
//         }
//         fetchData();
//     }, []);
//     return stats; 
// }
// function Stats(){
//     const stats = useStats('https://covid19.mathdro.id/api');
//     if(!stats) return <p>loading </p>
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

function index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, " hello", __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: 'https://covid19.mathdro.id/api',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.4c39f94f61db4470e80e.hot-update.js.map