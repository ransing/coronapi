webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/useStats.js":
/*!***************************!*\
  !*** ./utils/useStats.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStats; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useStats(url) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      stats = _useState[0],
      setStats = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      error = _useState3[0],
      setError = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('Mounting or updating');

    function fetchData() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setError();
              console.log('Fetching Data');
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (res) {
                return res.json();
              })["catch"](function (err) {
                setError(err);
              }));

            case 5:
              data = _context.sent;
              setStats(data);
              setLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData();
  }, [url]);
  return {
    stats: stats,
    loading: loading,
    error: error
  };
} // import {useState, useEffect} from 'react'
// export default function useStats(url){
//     const [stats, setStats] = useState();
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState();
//     useEffect(() => {
//         async function fetchData(){
//                 setLoading(true);
//                 setError();
//                 console.log('fetching')
//                 const data = await fetch(url)
//                 .then (data => data.json())
//                 .catch(err=>{
//                     setError(err)
//                 });
//                 setStats(data);
//                 setLoading(false);
//         }
//         fetchData();
//     }, [url]);
//     return {
//         stats,
//         loading,
//         error,
//     }; 
// }

/***/ })

})
//# sourceMappingURL=index.js.2898414cf284e8e4e804.hot-update.js.map