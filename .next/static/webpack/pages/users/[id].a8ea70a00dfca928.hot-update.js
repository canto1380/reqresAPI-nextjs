"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar UserProfile = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Profile\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alejandro\\\\OneDrive\\\\Escritorio\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_s(UserProfile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = UserProfile;\n// export async function getStaticProps(ctx) {\n//   const  id = ctx.query.id\n//   console.log(id)\n//   return {\n//     props: {id}\n//   }\n// }\nUserProfile.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(ctx) {\n        var res, data;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://reqres.in/api/users/\".concat(ctx.query.id))\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    console.log(data);\n                    return [\n                        2,\n                        {\n                            user: data.data\n                        }\n                    ];\n            }\n        });\n    });\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztBQUFxQztBQUNEO0FBRXBDLElBQU1FLFdBQVcsR0FBRyxXQUFNOztJQUN4QixJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxFQUFHLEdBQUlHLE1BQU0sQ0FBQ0UsS0FBSyxDQUFsQkQsRUFBRTtJQUVULHFCQUNFLDhEQUFDRSxJQUFFO2tCQUFDLFNBQU87Ozs7O2FBQUssQ0FDakI7QUFDSCxDQUFDO0dBUEtKLFdBQVc7O1FBQ0FGLGtEQUFTOzs7QUFEcEJFLEtBQUFBLFdBQVc7QUFTakIsOENBQThDO0FBQzlDLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sSUFBSTtBQUNKQSxXQUFXLENBQUNLLGVBQWU7ZUFBRyw2RkFBTUMsR0FBRyxFQUFLO1lBQ3BDQyxHQUFHLEVBQ0hDLElBQUk7Ozs7b0JBREU7O3dCQUFNVCx1REFBSyxDQUFDLDhCQUE2QixDQUFlLE9BQWJPLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDRCxFQUFFLENBQUUsQ0FBQztzQkFBQTs7b0JBQWhFSyxHQUFHLEdBQUcsYUFBMEQ7b0JBQ3pEOzt3QkFBTUEsR0FBRyxDQUFDRSxJQUFJLEVBQUU7c0JBQUE7O29CQUF2QkQsSUFBSSxHQUFHLGFBQWdCO29CQUM3QkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztvQkFDakI7O3dCQUFPOzRCQUNMSSxJQUFJLEVBQUNKLElBQUksQ0FBQ0EsSUFBSTt5QkFDZjtzQkFBQTs7O0lBQ0gsQ0FBQztvQkFQbUNGLEdBQUc7OztHQU90QztBQUVELCtEQUFlTixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcblxuICByZXR1cm4gKFxuICAgIDxoMT5Qcm9maWxlPC9oMT5cbiAgKVxufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG4vLyAgIGNvbnN0ICBpZCA9IGN0eC5xdWVyeS5pZFxuLy8gICBjb25zb2xlLmxvZyhpZClcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge2lkfVxuLy8gICB9XG4vLyB9XG5Vc2VyUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyhjdHgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy8ke2N0eC5xdWVyeS5pZH1gKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zb2xlLmxvZyhkYXRhKVxuICByZXR1cm4ge1xuICAgIHVzZXI6ZGF0YS5kYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJmZXRjaCIsIlVzZXJQcm9maWxlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImgxIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});