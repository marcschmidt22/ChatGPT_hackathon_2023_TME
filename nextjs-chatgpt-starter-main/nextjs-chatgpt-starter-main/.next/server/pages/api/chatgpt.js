"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chatgpt";
exports.ids = ["pages/api/chatgpt"];
exports.modules = {

/***/ "(api)/./pages/api/chatgpt.js":
/*!******************************!*\
  !*** ./pages/api/chatgpt.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    // request validation\n    if (!req.body.message) {\n        console.error(\"pages/api/chatgpt: Please provide a message field in the body\");\n        return res.status(400).json({\n            data: \"Message not provided\"\n        });\n    }\n    // Option 1: Import ChatGPT Client Class, and send requests directly from this Next.js server\n    // See instructions at github.com/telus/node-chatgpt-starter.git\n    // Option 2: connect to ChatGPT API starter at localhost:4000\n    const body = {\n        message: req.body.message,\n        conversationId: req.body.conversationId\n    };\n    if (req.body.parentMessageId) {\n        body.parentMessageId = req.body.parentMessageId;\n    }\n    const options = {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(body)\n    };\n    const endpoint = \"http://localhost:4000/conversation\";\n    console.log(`pages/api/chatgpt: forwarding to ${endpoint}: \\n ${JSON.stringify(body)}`);\n    const response = await fetch(endpoint, options);\n    const result = await response.json();\n    // return successful response\n    console.log(`pages/api/chatgpt: returning: \\n ${Object.keys(result)}`);\n    res.status(200).json(result);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdGdwdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMscUJBQXFCO0lBQ3JCLElBQUksQ0FBQ0QsSUFBSUUsSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDckJDLFFBQVFDLEtBQUssQ0FDWDtRQUVGLE9BQU9KLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsTUFBTTtRQUF1QjtJQUM3RCxDQUFDO0lBRUQsNkZBQTZGO0lBQzdGLGdFQUFnRTtJQUVoRSw2REFBNkQ7SUFDN0QsTUFBTU4sT0FBTztRQUNYQyxTQUFTSCxJQUFJRSxJQUFJLENBQUNDLE9BQU87UUFDekJNLGdCQUFnQlQsSUFBSUUsSUFBSSxDQUFDTyxjQUFjO0lBQ3pDO0lBRUEsSUFBSVQsSUFBSUUsSUFBSSxDQUFDUSxlQUFlLEVBQUU7UUFDNUJSLEtBQUtRLGVBQWUsR0FBR1YsSUFBSUUsSUFBSSxDQUFDUSxlQUFlO0lBQ2pELENBQUM7SUFFRCxNQUFNQyxVQUFVO1FBQ2RDLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBWCxNQUFNWSxLQUFLQyxTQUFTLENBQUNiO0lBQ3ZCO0lBRUEsTUFBTWMsV0FBVztJQUNqQlosUUFBUWEsR0FBRyxDQUNULENBQUMsaUNBQWlDLEVBQUVELFNBQVMsS0FBSyxFQUFFRixLQUFLQyxTQUFTLENBQUNiLE1BQU0sQ0FBQztJQUU1RSxNQUFNZ0IsV0FBVyxNQUFNQyxNQUFNSCxVQUFVTDtJQUN2QyxNQUFNUyxTQUFTLE1BQU1GLFNBQVNYLElBQUk7SUFFbEMsNkJBQTZCO0lBQzdCSCxRQUFRYSxHQUFHLENBQUMsQ0FBQyxpQ0FBaUMsRUFBRUksT0FBT0MsSUFBSSxDQUFDRixRQUFRLENBQUM7SUFDckVuQixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDYTtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NoYXRncHQuanM/MDVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgLy8gcmVxdWVzdCB2YWxpZGF0aW9uXHJcbiAgaWYgKCFyZXEuYm9keS5tZXNzYWdlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcInBhZ2VzL2FwaS9jaGF0Z3B0OiBQbGVhc2UgcHJvdmlkZSBhIG1lc3NhZ2UgZmllbGQgaW4gdGhlIGJvZHlcIlxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGRhdGE6IFwiTWVzc2FnZSBub3QgcHJvdmlkZWRcIiB9KTtcclxuICB9XHJcblxyXG4gIC8vIE9wdGlvbiAxOiBJbXBvcnQgQ2hhdEdQVCBDbGllbnQgQ2xhc3MsIGFuZCBzZW5kIHJlcXVlc3RzIGRpcmVjdGx5IGZyb20gdGhpcyBOZXh0LmpzIHNlcnZlclxyXG4gIC8vIFNlZSBpbnN0cnVjdGlvbnMgYXQgZ2l0aHViLmNvbS90ZWx1cy9ub2RlLWNoYXRncHQtc3RhcnRlci5naXRcclxuXHJcbiAgLy8gT3B0aW9uIDI6IGNvbm5lY3QgdG8gQ2hhdEdQVCBBUEkgc3RhcnRlciBhdCBsb2NhbGhvc3Q6NDAwMFxyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICBtZXNzYWdlOiByZXEuYm9keS5tZXNzYWdlLFxyXG4gICAgY29udmVyc2F0aW9uSWQ6IHJlcS5ib2R5LmNvbnZlcnNhdGlvbklkLFxyXG4gIH07XHJcblxyXG4gIGlmIChyZXEuYm9keS5wYXJlbnRNZXNzYWdlSWQpIHtcclxuICAgIGJvZHkucGFyZW50TWVzc2FnZUlkID0gcmVxLmJvZHkucGFyZW50TWVzc2FnZUlkO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvY29udmVyc2F0aW9uXCI7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBgcGFnZXMvYXBpL2NoYXRncHQ6IGZvcndhcmRpbmcgdG8gJHtlbmRwb2ludH06IFxcbiAke0pTT04uc3RyaW5naWZ5KGJvZHkpfWBcclxuICApO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIG9wdGlvbnMpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgLy8gcmV0dXJuIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICBjb25zb2xlLmxvZyhgcGFnZXMvYXBpL2NoYXRncHQ6IHJldHVybmluZzogXFxuICR7T2JqZWN0LmtleXMocmVzdWx0KX1gKTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNvbnZlcnNhdGlvbklkIiwicGFyZW50TWVzc2FnZUlkIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5kcG9pbnQiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwiT2JqZWN0Iiwia2V5cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/chatgpt.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chatgpt.js"));
module.exports = __webpack_exports__;

})();