"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ToDo */ \"./components/ToDo.js\");\n/* harmony import */ var _styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Todo.module.css */ \"./styles/Todo.module.css\");\n/* harmony import */ var _styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sortablejs */ \"./node_modules/react-sortablejs/dist/index.js\");\n/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sortablejs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todoArray = ref[0], setTodoArray = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref1[0], setInput = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), todoInitialized = ref2[0], setTodoInitialized = ref2[1];\n    ////////////////////////////////\n    //updating todo\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isEdit = ref3[0], setIsEdit = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1), id = ref4[0], setId = ref4[1];\n    /*\r\n    //fetch data from api\r\n    useEffect(() => {\r\n        if (!todoInitialized) {\r\n            fetch(\"http://127.0.0.1:8000/todo\")\r\n                .then((res) => {\r\n                    return res.json();\r\n                })\r\n                .then((data) => {\r\n                    setTodoArray(data);\r\n                })\r\n\r\n                .catch((err) => {\r\n                    console.log(err);\r\n                });\r\n        }\r\n        setTodoInitialized(true);\r\n    }, [todoInitialized]);\r\n    */ var handleInputChange = function(e) {\n        return setInput(e.target.value);\n    };\n    var handleAdd = function(e) {\n        e.preventDefault();\n        if (input) {\n            setTodoArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(todoArray).concat([\n                {\n                    id: todoArray.length + 1,\n                    todo: input,\n                    isDone: false\n                }, \n            ]));\n            setInput(\"\");\n        }\n        console.log(todoArray);\n    };\n    var handleComplete = function(itemID) {\n        todoArray.map(function(item) {\n            if (item.id === itemID) {\n                item.isDone = !item.isDone;\n            }\n        });\n        setTodoArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(todoArray));\n    };\n    var handleDelete = function(itemID) {\n        setTodoArray(todoArray.filter(function(item) {\n            return item.id !== itemID;\n        }));\n    };\n    var handleUpdate = function(itemID) {\n        //find item by id\n        //find item by id\n        var item = todoArray.find(function(item) {\n            return item.id === itemID;\n        });\n        //update item\n        console.log(item.todo);\n        setInput(item.todo);\n        setIsEdit(true);\n        setId(itemID);\n    //update todoArray\n    //setTodoArray([...todoArray]);\n    };\n    var handleUpdateAdd = function() {\n        console.log(input);\n        //find item by id and update todo\n        todoArray.map(function(item) {\n            if (item.id === id) {\n                item.todo = input;\n            }\n        });\n        setTodoArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(todoArray));\n        setInput(\"\");\n        setIsEdit(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Todo app with ThemeSwitch and localStorage | Next.js and react-sortablejs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"html, css, javaScript, theme, switch, nextjs, react-sortablejs, localStorage, frontend, mentor, react, todo, app, front, end\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"This todo app was created using nextjs, sass, react-sortablejs, and localStorage. Challenge by Frontend Mentor.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        type: \"image/jpg\",\n                        href: \"/images/favicon-32x32.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontSize: \"3rem\"\n                        },\n                        children: \"TODO\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 122,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: isEdit ? handleUpdateAdd() : handleAdd,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                type: \"text\",\n                                placeholder: \"Create a new todo...\",\n                                \"aria-label\": \"Create a new todo...\",\n                                value: input,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 124,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6___default().submit_btn),\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 132,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 123,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sortablejs__WEBPACK_IMPORTED_MODULE_4__.ReactSortable, {\n                    list: todoArray,\n                    setList: setTodoArray,\n                    delayOnTouchOnly: true,\n                    delay: 200,\n                    animation: 300,\n                    children: todoArray.map(function(item, id) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToDo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            id: item.id,\n                            todo: item.todo,\n                            handleComplete: handleComplete,\n                            handleDelete: handleDelete,\n                            isDone: item.isDone,\n                            handleUpdate: handleUpdate\n                        }, id, false, {\n                            fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 147,\n                            columnNumber: 25\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 138,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 137,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"oaDSBDMmbjR1ZNjI25r9Pk1rzr0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDOzBCQUVQLFFBQUNDLEtBQUc7Z0JBQ0pDLEtBQUssRUFBRTtvQkFDSEMsU0FBUztpQkFDWjs7a0NBRUQsUUFBQ0M7d0JBQUdGLEtBQUssRUFBRTs0QkFBQ0csUUFBUSxFQUFDO3lCQUFPO2tDQUFFLE1BQUk7Ozs7OzRCQUFLOzt3QkFDakNFLFFBQVE7O2dHQUNWOztnQ0FFSVIsSUFBSSxFQUFDOzs7Z0NBR0x2QixFQUFBQSw2REFBT1gsR0FBSztnQ0FDWjhDOzs7OztvQ0FDRjs7Z0NBQ01IOztnR0FBNEMsUUFFcEQ7Ozs7O29DQUFTOzs7Ozs7NEJBQ047Ozs7OztvQkFDTDswQkFDRCxRQUFDTSxJQUFFO2dCQUFDTixTQUFTLEVBQUVqRCxNQUFNLENBQUN3RCxTQUFTOzBCQUNoQyxzQkFBQ3RELGFBQWE7b0JBQ1Z1RCxJQUFJLEVBQUVyRCxTQUFTO29CQUNmc0QsT0FBTyxFQUFFckQsWUFBWTtvQkFDckJzRCxnQkFBZ0I7b0JBQ2hCQyxLQUFLO29CQUNMQyxTQUFTLEVBQUUsR0FBRzs4QkFFYnpELFNBQVMsQ0FBQ3VCLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVoQixFQUFFLEVBQUs7d0JBQ3pCOzRCQUdRQSxFQUFFLEVBQUVnQixJQUFJLENBQUNoQixFQUFFOzRCQUNYUzs7NEJBRUFROzRCQUNBUCxNQUFNLEVBQUVNLElBQUksQ0FBQ04sTUFBTTs0QkFDbkJTOzJCQU5LbkIsRUFBRTs7OztpQ0FPTCxDQUNSO3FCQUNMLENBQUM7Ozs7O3dCQUNVOzs7OztvQkFDZjs7b0JBQ0YsQ0FDTDtDQUNMO0dBM0p1QlQsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub0RvXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ub2RvLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSZWFjdFNvcnRhYmxlIH0gZnJvbSBcInJlYWN0LXNvcnRhYmxlanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbdG9kb0FycmF5LCBzZXRUb2RvQXJyYXldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0b2RvSW5pdGlhbGl6ZWQsIHNldFRvZG9Jbml0aWFsaXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vdXBkYXRpbmcgdG9kb1xyXG4gICAgY29uc3QgW2lzRWRpdCwgc2V0SXNFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoLTEpO1xyXG4vKlxyXG4gICAgLy9mZXRjaCBkYXRhIGZyb20gYXBpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdG9kb0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3RvZG9cIilcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRvZG9BcnJheShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRvZG9Jbml0aWFsaXplZCh0cnVlKTtcclxuICAgIH0sIFt0b2RvSW5pdGlhbGl6ZWRdKTtcclxuICAgICovXHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICBzZXRUb2RvQXJyYXkoW1xyXG4gICAgICAgICAgICAgICAgLi4udG9kb0FycmF5LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0b2RvQXJyYXkubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgICAgICAgICB0b2RvOiBpbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICBpc0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHNldElucHV0KFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb21wbGV0ZSA9IChpdGVtSUQpID0+IHtcclxuICAgICAgICB0b2RvQXJyYXkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpdGVtSUQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaXNEb25lID0gIWl0ZW0uaXNEb25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VG9kb0FycmF5KFsuLi50b2RvQXJyYXldKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGl0ZW1JRCkgPT4ge1xyXG4gICAgICAgIHNldFRvZG9BcnJheSh0b2RvQXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpdGVtSUQpKTtcclxuICAgIH07XHJcblxyXG4gXHJcbiAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoaXRlbUlEKSA9PiB7XHJcbiAgICAgICAgLy9maW5kIGl0ZW0gYnkgaWRcclxuICAgICAgICAgICAgICAgIC8vZmluZCBpdGVtIGJ5IGlkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdG9kb0FycmF5LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGl0ZW1JRCk7XHJcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnRvZG8pXHJcbiAgICAgICAgICAgICAgICBzZXRJbnB1dChpdGVtLnRvZG8pO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNFZGl0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0SWQoaXRlbUlEKTtcclxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRvZG9BcnJheVxyXG4gICAgICAgICAgICAgICAgLy9zZXRUb2RvQXJyYXkoWy4uLnRvZG9BcnJheV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZUFkZCA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coaW5wdXQpXHJcbiAgIFxyXG4gICAgICAvL2ZpbmQgaXRlbSBieSBpZCBhbmQgdXBkYXRlIHRvZG9cclxuICAgICAgdG9kb0FycmF5Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgaXRlbS50b2RvID0gaW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0VG9kb0FycmF5KFsuLi50b2RvQXJyYXldKTtcclxuICAgICAgc2V0SW5wdXQoXCJcIik7XHJcbiAgICAgIHNldElzRWRpdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIFRvZG8gYXBwIHdpdGggVGhlbWVTd2l0Y2ggYW5kIGxvY2FsU3RvcmFnZSB8IE5leHQuanMgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3Qtc29ydGFibGVqc1xyXG4gICAgICAgICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiaHRtbCwgY3NzLCBqYXZhU2NyaXB0LCB0aGVtZSwgc3dpdGNoLCBuZXh0anMsIHJlYWN0LXNvcnRhYmxlanMsIGxvY2FsU3RvcmFnZSwgZnJvbnRlbmQsIG1lbnRvciwgcmVhY3QsIHRvZG8sIGFwcCwgIGZyb250LCBlbmRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiVGhpcyB0b2RvIGFwcCB3YXMgY3JlYXRlZCB1c2luZyBuZXh0anMsIHNhc3MsIHJlYWN0LXNvcnRhYmxlanMsIGFuZCBsb2NhbFN0b3JhZ2UuIENoYWxsZW5nZSBieSBGcm9udGVuZCBNZW50b3IuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvaW1hZ2VzL2Zhdmljb24tMzJ4MzIucG5nXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiczcmVtJ319PlRPRE88L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aXNFZGl0ID8gaGFuZGxlVXBkYXRlQWRkKCkgOmhhbmRsZUFkZH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGUgYSBuZXcgdG9kby4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNyZWF0ZSBhIG5ldyB0b2RvLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3VibWl0X2J0bn0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8UmVhY3RTb3J0YWJsZVxyXG4gICAgICAgICAgICAgICAgbGlzdD17dG9kb0FycmF5fVxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdD17c2V0VG9kb0FycmF5fVxyXG4gICAgICAgICAgICAgICAgZGVsYXlPblRvdWNoT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlbGF5PXsyMDB9XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb249ezMwMH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RvZG9BcnJheS5tYXAoKGl0ZW0sIGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG89e2l0ZW0udG9kb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNvbXBsZXRlPXtoYW5kbGVDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEb25lPXtpdGVtLmlzRG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVVwZGF0ZT17aGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvUmVhY3RTb3J0YWJsZT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUb2RvIiwic3R5bGVzIiwiSGVhZCIsIlJlYWN0U29ydGFibGUiLCJIb21lIiwidG9kb0FycmF5Iiwic2V0VG9kb0FycmF5IiwiaW5wdXQiLCJzZXRJbnB1dCIsInRvZG9Jbml0aWFsaXplZCIsInNldFRvZG9Jbml0aWFsaXplZCIsImlzRWRpdCIsInNldElzRWRpdCIsImlkIiwic2V0SWQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFkZCIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwidG9kbyIsImlzRG9uZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDb21wbGV0ZSIsIml0ZW1JRCIsIm1hcCIsIml0ZW0iLCJoYW5kbGVEZWxldGUiLCJmaWx0ZXIiLCJoYW5kbGVVcGRhdGUiLCJmaW5kIiwiaGFuZGxlVXBkYXRlQWRkIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwidHlwZSIsImhyZWYiLCJkaXYiLCJzdHlsZSIsInRleHRBbGlnbiIsImgxIiwiZm9udFNpemUiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInN1Ym1pdF9idG4iLCJ1bCIsImNvbnRhaW5lciIsImxpc3QiLCJzZXRMaXN0IiwiZGVsYXlPblRvdWNoT25seSIsImRlbGF5IiwiYW5pbWF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});