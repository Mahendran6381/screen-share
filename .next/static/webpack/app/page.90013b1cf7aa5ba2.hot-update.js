"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/meet/page.tsx":
/*!***************************!*\
  !*** ./app/meet/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/userContext */ \"(app-pages-browser)/./context/userContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\nconst axios = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/dist/browser/axios.cjs\"); // Import axios\n\n\nfunction Dashboard() {\n    _s();\n    let { user, setUser } = (0,_context_userContext__WEBPACK_IMPORTED_MODULE_1__.useUser)();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const userData = async ()=>{\n            try {\n                const response = await axios.get(\"\".concat(\"https://opulent-goldfish-95p7r679jp42xgvr-3000.app.github.dev\", \"/meet\"), {\n                    withCredentials: true,\n                    headers: {\n                        Accept: \"application/json\",\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                if (response) {\n                    const data = response.data;\n                    console.log(data);\n                    console.log(user, \"before\");\n                    setUser(data);\n                    console.log(user, \"after\");\n                }\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        userData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(user, \"updated user\");\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !userData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"no user\"\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: userData\n        }, void 0, false)\n    }, void 0, false);\n}\n_s(Dashboard, \"udk22pRgV/UGG3rAq5gs1xMFM8k=\", false, function() {\n    return [\n        _context_userContext__WEBPACK_IMPORTED_MODULE_1__.useUser\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tZWV0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxRQUFRQyxtQkFBT0EsQ0FBQyxpRkFBVSxlQUFlO0FBQ0k7QUFFWDtBQUN6QixTQUFTSTs7SUFDaEIsSUFBSSxFQUFDQyxJQUFJLEVBQUVDLE9BQU8sRUFBQyxHQUFHTCw2REFBT0E7SUFDN0IsTUFBTSxDQUFDTSxVQUFTQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzVDRCxnREFBU0EsQ0FBRTtRQUNQLE1BQU1LLFdBQVc7WUFDZixJQUFHO2dCQUNELE1BQU1FLFdBQVcsTUFBTVYsTUFBTVcsR0FBRyxDQUFDLEdBQW1DLE9BQWhDQywrREFBK0IsRUFBQyxVQUFRO29CQUMxRUcsaUJBQWlCO29CQUNqQkMsU0FBUzt3QkFDUEMsUUFBUTt3QkFDUixnQkFBZ0I7b0JBQ2xCO2dCQUNGO2dCQUVBLElBQUlQLFVBQVU7b0JBQ1osTUFBTVEsT0FBT1IsU0FBU1EsSUFBSTtvQkFDMUJDLFFBQVFDLEdBQUcsQ0FBQ0Y7b0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQ2QsTUFBSztvQkFDakJDLFFBQVFXO29CQUNSQyxRQUFRQyxHQUFHLENBQUNkLE1BQUs7Z0JBQ25CO1lBQ0YsRUFDQSxPQUFNZSxLQUFJO2dCQUNSRixRQUFRQyxHQUFHLENBQUNDO1lBQ2Q7UUFDRjtRQUNBYjtJQUNKLEdBQUUsRUFBRTtJQUNKTCxnREFBU0EsQ0FBQztRQUNSZ0IsUUFBUUMsR0FBRyxDQUFDZCxNQUFNO0lBQ3BCLEdBQUc7UUFBQ0E7S0FBSztJQUVULHFCQUNJO2tCQUNDLENBQUNFLHlCQUFXO3NCQUFFOzBDQUFXO3NCQUFHQTs7O0FBR3JDO0dBckN3Qkg7O1FBQ01ILHlEQUFPQTs7O0tBRGJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tZWV0L3BhZ2UudHN4Pzg4YjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpOyAvLyBJbXBvcnQgYXhpb3NcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0JyBcblxuaW1wb3J0IHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCl7XG4gICAgICAgIGxldCB7dXNlciwgc2V0VXNlcn0gPSB1c2VVc2VyKCk7XG4gICAgICAgIGNvbnN0IFt1c2VyRGF0YSxzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGFzeW5jICgpID0+e1xuICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L21lZXRgLCB7XG4gICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSwgLy8gSW5jbHVkZSBjb29raWVzIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIsXCJiZWZvcmVcIilcbiAgICAgICAgICAgICAgc2V0VXNlcihkYXRhKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcixcImFmdGVyXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVzZXJEYXRhKClcbiAgICB9LFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyLCBcInVwZGF0ZWQgdXNlclwiKTtcbiAgICB9LCBbdXNlcl0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICB7IXVzZXJEYXRhID8gPD5ubyB1c2VyPC8+Ojw+e3VzZXJEYXRhfTwvPn1cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJ1c2VVc2VyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEYXNoYm9hcmQiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkFjY2VwdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/meet/page.tsx\n"));

/***/ })

});