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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar UserProfile = function(param) {\n    var user = param.user;\n    _s();\n    console.log(user);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-6 offset-md-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alejandro\\\\OneDrive\\\\Escritorio\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alejandro\\\\OneDrive\\\\Escritorio\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alejandro\\\\OneDrive\\\\Escritorio\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alejandro\\\\OneDrive\\\\Escritorio\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_s(UserProfile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = UserProfile;\n// export async function getStaticProps(ctx) {\n//   const  id = ctx.query.id\n//   console.log(id)\n//   return {\n//     props: {id}\n//   }\n// }\nUserProfile.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(ctx) {\n        var res, data;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://reqres.in/api/users/\".concat(ctx.query.id))\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        2,\n                        {\n                            user: data.data\n                        }\n                    ];\n            }\n        });\n    });\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBcUM7QUFDRDtBQUNjO0FBRWxELElBQU1HLFdBQVcsR0FBRyxnQkFBWTtRQUFWQyxJQUFJLFNBQUpBLElBQUk7O0lBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0lBQ2pCLElBQU1HLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUMxQixJQUFNLEVBQUcsR0FBSU8sTUFBTSxDQUFDRSxLQUFLLENBQWxCRCxFQUFFO0lBQ1QscUJBQ0UsOERBQUNOLDZEQUFTO2tCQUNSLDRFQUFDUSxLQUFHO1lBQUNDLFNBQVMsRUFBQyxLQUFLO3NCQUNsQiw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHNCQUFzQjswQkFDbkMsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxNQUFNOzs7Ozt5QkFJZjs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGOzs7OzthQUNJLENBQ2I7QUFDSCxDQUFDO0dBakJLUixXQUFXOztRQUVBSCxrREFBUzs7O0FBRnBCRyxLQUFBQSxXQUFXO0FBbUJqQiw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLE1BQU07QUFDTixJQUFJO0FBQ0pBLFdBQVcsQ0FBQ1MsZUFBZTtlQUFHLDZGQUFNQyxHQUFHLEVBQUs7WUFDcENDLEdBQUcsRUFDSEMsSUFBSTs7OztvQkFERTs7d0JBQU1kLHVEQUFLLENBQUMsOEJBQTZCLENBQWUsT0FBYlksR0FBRyxDQUFDSixLQUFLLENBQUNELEVBQUUsQ0FBRSxDQUFDO3NCQUFBOztvQkFBaEVNLEdBQUcsR0FBRyxhQUEwRDtvQkFDekQ7O3dCQUFNQSxHQUFHLENBQUNFLElBQUksRUFBRTtzQkFBQTs7b0JBQXZCRCxJQUFJLEdBQUcsYUFBZ0I7b0JBQzdCOzt3QkFBTzs0QkFDTFgsSUFBSSxFQUFFVyxJQUFJLENBQUNBLElBQUk7eUJBQ2hCO3NCQUFBOzs7SUFDSCxDQUFDO29CQU5tQ0YsR0FBRzs7O0dBTXRDO0FBRUQsK0RBQWVWLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcz8xNzg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lcidcblxuY29uc3QgVXNlclByb2ZpbGUgPSAoe3VzZXJ9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHVzZXIpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBvZmZzZXQtbWQtMyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWhlYWRlciB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmRhdGEuYXZhdGFyfSBhbHQ9J05vbWJyZSBVc3Vhcmlvcycgc3R5bGU9e3sgYm9yZGVyUmFkaXVzIDonNTAlJ319PjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbi8vICAgY29uc3QgIGlkID0gY3R4LnF1ZXJ5LmlkXG4vLyAgIGNvbnNvbGUubG9nKGlkKVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7aWR9XG4vLyAgIH1cbi8vIH1cblVzZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGN0eCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXFyZXMuaW4vYXBpL3VzZXJzLyR7Y3R4LnF1ZXJ5LmlkfWApXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIHJldHVybiB7XG4gICAgdXNlcjogZGF0YS5kYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJmZXRjaCIsIkNvbnRhaW5lciIsIlVzZXJQcm9maWxlIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});