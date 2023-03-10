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

/***/ "(app-client)/./context/messagesContext.js":
/*!************************************!*\
  !*** ./context/messagesContext.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessagesProvider\": function() { return /* binding */ MessagesProvider; },\n/* harmony export */   \"useMessages\": function() { return /* binding */ useMessages; },\n/* harmony export */   \"useMessagesDispatch\": function() { return /* binding */ useMessagesDispatch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"(app-client)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\nconst MessagesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst MessagesDispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst initialMessages = [\n    {\n        messageId: \"1\" + (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n        messageText: \"Hello I'm SPOT AI, how can I help?\",\n        messageType: \"inbound\"\n    }\n];\nfunction MessagesProvider(param) {\n    let { children  } = param;\n    _s();\n    const [messages, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(messagesReducer, initialMessages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessagesContext.Provider, {\n        value: messages,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessagesDispatchContext.Provider, {\n            value: dispatch,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\context\\\\messagesContext.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\context\\\\messagesContext.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(MessagesProvider, \"00jMCT9b54bwIbL0fwjFkfSsrb0=\");\n_c = MessagesProvider;\nfunction useMessages() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MessagesContext);\n}\n_s1(useMessages, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nfunction useMessagesDispatch() {\n    _s2();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MessagesDispatchContext);\n}\n_s2(useMessagesDispatch, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nfunction messagesReducer(messages, action) {\n    switch(action.type){\n        case \"add\":\n            {\n                return [\n                    ...messages,\n                    {\n                        messageId: action.messageId,\n                        messageText: action.messageText,\n                        messageType: action.messageType\n                    }\n                ];\n            }\n        case \"delete\":\n            {\n                return messages.filter((m)=>m.messageId !== action.messageId);\n            }\n        default:\n            {\n                throw Error(\"Unknown dispatch action for MessagesReducer \" + action.type);\n            }\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"MessagesProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29udGV4dC9tZXNzYWdlc0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFFQUFxRTs7O0FBQ2pDO0FBQzBCO0FBRTlELE1BQU1LLGdDQUFrQkgsb0RBQWFBLENBQUMsSUFBSTtBQUMxQyxNQUFNSSx3Q0FBMEJKLG9EQUFhQSxDQUFDLElBQUk7QUFFbEQsTUFBTUssa0JBQWtCO0lBQ3RCO1FBQ0VDLFdBQVcsTUFBTVAsZ0RBQU1BO1FBQ3ZCUSxhQUFhO1FBQ2JDLGFBQWE7SUFDZjtDQUNEO0FBRU0sU0FBU0MsaUJBQWlCLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaOztJQUMvQixNQUFNLENBQUNDLFVBQVVDLFNBQVMsR0FBR1YsaURBQVVBLENBQUNXLGlCQUFpQlI7SUFFekQscUJBQ0UsOERBQUNGLGdCQUFnQlcsUUFBUTtRQUFDQyxPQUFPSjtrQkFDL0IsNEVBQUNQLHdCQUF3QlUsUUFBUTtZQUFDQyxPQUFPSDtzQkFDdENGOzs7Ozs7Ozs7OztBQUlULENBQUM7R0FWZUQ7S0FBQUE7QUFZVCxTQUFTTyxjQUFjOztJQUM1QixPQUFPZixpREFBVUEsQ0FBQ0U7QUFDcEIsQ0FBQztJQUZlYTtBQUlULFNBQVNDLHNCQUFzQjs7SUFDcEMsT0FBT2hCLGlEQUFVQSxDQUFDRztBQUNwQixDQUFDO0lBRmVhO0FBSWhCLFNBQVNKLGdCQUFnQkYsUUFBUSxFQUFFTyxNQUFNLEVBQUU7SUFDekMsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLO1lBQU87Z0JBQ1YsT0FBTzt1QkFDRlI7b0JBQ0g7d0JBQ0VMLFdBQVdZLE9BQU9aLFNBQVM7d0JBQzNCQyxhQUFhVyxPQUFPWCxXQUFXO3dCQUMvQkMsYUFBYVUsT0FBT1YsV0FBVztvQkFDakM7aUJBQ0Q7WUFDSDtRQUNBLEtBQUs7WUFBVTtnQkFDYixPQUFPRyxTQUFTUyxNQUFNLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRWYsU0FBUyxLQUFLWSxPQUFPWixTQUFTO1lBQ2hFO1FBQ0E7WUFBUztnQkFDUCxNQUFNZ0IsTUFBTSxpREFBaURKLE9BQU9DLElBQUksRUFBRTtZQUM1RTtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9tZXNzYWdlc0NvbnRleHQuanM/N2U2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2JldGEucmVhY3Rqcy5vcmcvbGVhcm4vc2NhbGluZy11cC13aXRoLXJlZHVjZXItYW5kLWNvbnRleHRcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWVzc2FnZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuY29uc3QgTWVzc2FnZXNEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuY29uc3QgaW5pdGlhbE1lc3NhZ2VzID0gW1xyXG4gIHtcclxuICAgIG1lc3NhZ2VJZDogXCIxXCIgKyB1dWlkdjQoKSxcclxuICAgIG1lc3NhZ2VUZXh0OiBcIkhlbGxvIEknbSBTUE9UIEFJLCBob3cgY2FuIEkgaGVscD9cIixcclxuICAgIG1lc3NhZ2VUeXBlOiBcImluYm91bmRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lc3NhZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG1lc3NhZ2VzUmVkdWNlciwgaW5pdGlhbE1lc3NhZ2VzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZXNzYWdlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21lc3NhZ2VzfT5cclxuICAgICAgPE1lc3NhZ2VzRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L01lc3NhZ2VzRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9NZXNzYWdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lc3NhZ2VzKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KE1lc3NhZ2VzQ29udGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXNzYWdlc0Rpc3BhdGNoKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KE1lc3NhZ2VzRGlzcGF0Y2hDb250ZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWVzc2FnZXNSZWR1Y2VyKG1lc3NhZ2VzLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiYWRkXCI6IHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXNzYWdlSWQ6IGFjdGlvbi5tZXNzYWdlSWQsXHJcbiAgICAgICAgICBtZXNzYWdlVGV4dDogYWN0aW9uLm1lc3NhZ2VUZXh0LFxyXG4gICAgICAgICAgbWVzc2FnZVR5cGU6IGFjdGlvbi5tZXNzYWdlVHlwZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcImRlbGV0ZVwiOiB7XHJcbiAgICAgIHJldHVybiBtZXNzYWdlcy5maWx0ZXIoKG0pID0+IG0ubWVzc2FnZUlkICE9PSBhY3Rpb24ubWVzc2FnZUlkKTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgRXJyb3IoXCJVbmtub3duIGRpc3BhdGNoIGFjdGlvbiBmb3IgTWVzc2FnZXNSZWR1Y2VyIFwiICsgYWN0aW9uLnR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidjQiLCJ1dWlkdjQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJNZXNzYWdlc0NvbnRleHQiLCJNZXNzYWdlc0Rpc3BhdGNoQ29udGV4dCIsImluaXRpYWxNZXNzYWdlcyIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VUZXh0IiwibWVzc2FnZVR5cGUiLCJNZXNzYWdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJtZXNzYWdlcyIsImRpc3BhdGNoIiwibWVzc2FnZXNSZWR1Y2VyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZU1lc3NhZ2VzIiwidXNlTWVzc2FnZXNEaXNwYXRjaCIsImFjdGlvbiIsInR5cGUiLCJmaWx0ZXIiLCJtIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./context/messagesContext.js\n"));

/***/ })

});