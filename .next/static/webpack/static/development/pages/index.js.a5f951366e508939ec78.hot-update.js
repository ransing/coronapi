webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import {useState, useEffect } from 'react';
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
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

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
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__);
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
  }), __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.a5f951366e508939ec78.hot-update.js.map