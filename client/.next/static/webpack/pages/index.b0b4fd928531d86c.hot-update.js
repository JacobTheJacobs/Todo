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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ToDo */ \"./components/ToDo.js\");\n/* harmony import */ var _styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Todo.module.css */ \"./styles/Todo.module.css\");\n/* harmony import */ var _styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sortablejs */ \"./node_modules/react-sortablejs/dist/index.js\");\n/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sortablejs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todoArray = ref[0], setTodoArray = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref1[0], setInput = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), todoInitialized = ref2[0], setTodoInitialized = ref2[1];\n    ////////////////////////////////\n    //updating todo\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isEdit = ref3[0], setIsEdit = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1), id = ref4[0], setId = ref4[1];\n    /*\r\n    //fetch data from api\r\n    useEffect(() => {\r\n        if (!todoInitialized) {\r\n            fetch(\"http://127.0.0.1:8000/todo\")\r\n                .then((res) => {\r\n                    return res.json();\r\n                })\r\n                .then((data) => {\r\n                    setTodoArray(data);\r\n                })\r\n\r\n                .catch((err) => {\r\n                    console.log(err);\r\n                });\r\n        }\r\n        setTodoInitialized(true);\r\n    }, [todoInitialized]);\r\n    */ var handleInputChange = function(e) {\n        return setInput(e.target.value);\n    };\n    var handleAdd = function(e) {\n        e.preventDefault();\n        if (input) {\n            setTodoArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(todoArray).concat([\n                {\n                    id: todoArray.length + 1,\n                    todo: input,\n                    isDone: false\n                }, \n            ]));\n            setInput(\"\");\n        }\n        console.log(todoArray);\n    };\n    var handleComplete = function(itemID) {\n        todoArray.map(function(item) {\n            if (item.id === itemID) {\n                item.isDone = !item.isDone;\n            }\n        });\n        setTodoArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(todoArray));\n    };\n    var handleDelete = function(itemID) {\n        setTodoArray(todoArray.filter(function(item) {\n            return item.id !== itemID;\n        }));\n    };\n    var handleUpdate = function(itemID) {\n        //find item by id\n        //find item by id\n        var item = todoArray.find(function(item) {\n            return item.id === itemID;\n        });\n        //update item\n        console.log(item.todo);\n        setInput(item.todo);\n        setIsEdit(true);\n        setId(itemID);\n    //update todoArray\n    //setTodoArray([...todoArray]);\n    };\n    var handleUpdateAdd = function() {\n        console.log(input);\n        setIsEdit(false);\n        //find item by id and update todo\n        todoArray.map(function(item) {\n            if (item.id === id) {\n                item.todo = input;\n            }\n        });\n        setTodoArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(todoArray));\n        setInput(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Todo app with ThemeSwitch and localStorage | Next.js and react-sortablejs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"html, css, javaScript, theme, switch, nextjs, react-sortablejs, localStorage, frontend, mentor, react, todo, app, front, end\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"This todo app was created using nextjs, sass, react-sortablejs, and localStorage. Challenge by Frontend Mentor.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        type: \"image/jpg\",\n                        href: \"/images/favicon-32x32.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontSize: \"3rem\"\n                        },\n                        children: \"TODO\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 121,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: isEdit ? handleUpdateAdd() : handleAdd,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                type: \"text\",\n                                placeholder: \"Create a new todo...\",\n                                \"aria-label\": \"Create a new todo...\",\n                                value: input,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 123,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6___default().submit_btn),\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 131,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 122,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sortablejs__WEBPACK_IMPORTED_MODULE_4__.ReactSortable, {\n                    list: todoArray,\n                    setList: setTodoArray,\n                    delayOnTouchOnly: true,\n                    delay: 200,\n                    animation: 300,\n                    children: todoArray.map(function(item, id) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToDo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            id: item.id,\n                            todo: item.todo,\n                            handleComplete: handleComplete,\n                            handleDelete: handleDelete,\n                            isDone: item.isDone,\n                            handleUpdate: handleUpdate\n                        }, id, false, {\n                            fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 146,\n                            columnNumber: 25\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 137,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\canabis\\\\Todo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 136,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"oaDSBDMmbjR1ZNjI25r9Pk1rzr0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7d0JBQ2hCQyxJQUFJLEVBQUM7Ozs7OzRCQUNQOzs7Ozs7b0JBQ0M7MEJBRVAsUUFBQ0MsS0FBRztnQkFDSkMsS0FBSyxFQUFFO29CQUNIQyxTQUFTO2lCQUNaOztrQ0FFRCxRQUFDQzt3QkFBR0YsS0FBSyxFQUFFOzRCQUFDRyxRQUFRLEVBQUM7eUJBQU87a0NBQUUsTUFBSTs7Ozs7NEJBQUs7O3dCQUNqQ0UsUUFBUTs7Z0dBQ1Y7O2dDQUVJUixJQUFJLEVBQUM7OztnQ0FHTHZCLEVBQUFBLDZEQUFPWCxHQUFLO2dDQUNaOEM7Ozs7O29DQUNGOztnQ0FDTUg7O2dHQUE0QyxRQUVwRDs7Ozs7b0NBQVM7Ozs7Ozs0QkFDTjs7Ozs7O29CQUNMOzBCQUNELFFBQUNNLElBQUU7Z0JBQUNOLFNBQVMsRUFBRWpELE1BQU0sQ0FBQ3dELFNBQVM7MEJBQ2hDLHNCQUFDdEQsYUFBYTtvQkFDVnVELElBQUksRUFBRXJELFNBQVM7b0JBQ2ZzRCxPQUFPLEVBQUVyRCxZQUFZO29CQUNyQnNELGdCQUFnQjtvQkFDaEJDLEtBQUs7b0JBQ0xDLFNBQVMsRUFBRSxHQUFHOzhCQUViekQsU0FBUyxDQUFDdUIsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRWhCLEVBQUUsRUFBSzt3QkFDekI7NEJBR1FBLEVBQUUsRUFBRWdCLElBQUksQ0FBQ2hCLEVBQUU7NEJBQ1hTOzs0QkFFQVE7NEJBQ0FQLE1BQU0sRUFBRU0sSUFBSSxDQUFDTixNQUFNOzRCQUNuQlM7MkJBTktuQixFQUFFOzs7O2lDQU9MLENBQ1I7cUJBQ0wsQ0FBQzs7Ozs7d0JBQ1U7Ozs7O29CQUNmOztvQkFDRixDQUNMO0NBQ0w7R0ExSnVCVCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2RvIGZyb20gXCIuLi9jb21wb25lbnRzL1RvRG9cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1RvZG8ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFJlYWN0U29ydGFibGUgfSBmcm9tIFwicmVhY3Qtc29ydGFibGVqc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFt0b2RvQXJyYXksIHNldFRvZG9BcnJheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3RvZG9Jbml0aWFsaXplZCwgc2V0VG9kb0luaXRpYWxpemVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy91cGRhdGluZyB0b2RvXHJcbiAgICBjb25zdCBbaXNFZGl0LCBzZXRJc0VkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbi8qXHJcbiAgICAvL2ZldGNoIGRhdGEgZnJvbSBhcGlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0b2RvSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvdG9kb1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9kb0FycmF5KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VG9kb0luaXRpYWxpemVkKHRydWUpO1xyXG4gICAgfSwgW3RvZG9Jbml0aWFsaXplZF0pO1xyXG4gICAgKi9cclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHNldFRvZG9BcnJheShbXHJcbiAgICAgICAgICAgICAgICAuLi50b2RvQXJyYXksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRvZG9BcnJheS5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG86IGlucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgc2V0SW5wdXQoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9BcnJheSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbXBsZXRlID0gKGl0ZW1JRCkgPT4ge1xyXG4gICAgICAgIHRvZG9BcnJheS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGl0ZW1JRCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pc0RvbmUgPSAhaXRlbS5pc0RvbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUb2RvQXJyYXkoWy4uLnRvZG9BcnJheV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaXRlbUlEKSA9PiB7XHJcbiAgICAgICAgc2V0VG9kb0FycmF5KHRvZG9BcnJheS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGl0ZW1JRCkpO1xyXG4gICAgfTtcclxuXHJcbiBcclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IChpdGVtSUQpID0+IHtcclxuICAgICAgICAvL2ZpbmQgaXRlbSBieSBpZFxyXG4gICAgICAgICAgICAgICAgLy9maW5kIGl0ZW0gYnkgaWRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0b2RvQXJyYXkuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaXRlbUlEKTtcclxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0udG9kbylcclxuICAgICAgICAgICAgICAgIHNldElucHV0KGl0ZW0udG9kbyk7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0VkaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJZChpdGVtSUQpO1xyXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgdG9kb0FycmF5XHJcbiAgICAgICAgICAgICAgICAvL3NldFRvZG9BcnJheShbLi4udG9kb0FycmF5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlQWRkID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhpbnB1dClcclxuICAgICAgc2V0SXNFZGl0KGZhbHNlKTtcclxuICAgICAgLy9maW5kIGl0ZW0gYnkgaWQgYW5kIHVwZGF0ZSB0b2RvXHJcbiAgICAgIHRvZG9BcnJheS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgIGl0ZW0udG9kbyA9IGlucHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRvZG9BcnJheShbLi4udG9kb0FycmF5XSk7XHJcbiAgICAgIHNldElucHV0KFwiXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICBUb2RvIGFwcCB3aXRoIFRoZW1lU3dpdGNoIGFuZCBsb2NhbFN0b3JhZ2UgfCBOZXh0LmpzIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0LXNvcnRhYmxlanNcclxuICAgICAgICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImh0bWwsIGNzcywgamF2YVNjcmlwdCwgdGhlbWUsIHN3aXRjaCwgbmV4dGpzLCByZWFjdC1zb3J0YWJsZWpzLCBsb2NhbFN0b3JhZ2UsIGZyb250ZW5kLCBtZW50b3IsIHJlYWN0LCB0b2RvLCBhcHAsICBmcm9udCwgZW5kXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlRoaXMgdG9kbyBhcHAgd2FzIGNyZWF0ZWQgdXNpbmcgbmV4dGpzLCBzYXNzLCByZWFjdC1zb3J0YWJsZWpzLCBhbmQgbG9jYWxTdG9yYWdlLiBDaGFsbGVuZ2UgYnkgRnJvbnRlbmQgTWVudG9yLlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2UvanBnXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2ltYWdlcy9mYXZpY29uLTMyeDMyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTonM3JlbSd9fT5UT0RPPC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2lzRWRpdCA/IGhhbmRsZVVwZGF0ZUFkZCgpIDpoYW5kbGVBZGR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIGEgbmV3IHRvZG8uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDcmVhdGUgYSBuZXcgdG9kby4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdF9idG59IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFJlYWN0U29ydGFibGVcclxuICAgICAgICAgICAgICAgIGxpc3Q9e3RvZG9BcnJheX1cclxuICAgICAgICAgICAgICAgIHNldExpc3Q9e3NldFRvZG9BcnJheX1cclxuICAgICAgICAgICAgICAgIGRlbGF5T25Ub3VjaE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZWxheT17MjAwfVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uPXszMDB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0b2RvQXJyYXkubWFwKChpdGVtLCBpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb2RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvPXtpdGVtLnRvZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZT17aGFuZGxlQ29tcGxldGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGU9e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRG9uZT17aXRlbS5pc0RvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVVcGRhdGU9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1JlYWN0U29ydGFibGU+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVG9kbyIsInN0eWxlcyIsIkhlYWQiLCJSZWFjdFNvcnRhYmxlIiwiSG9tZSIsInRvZG9BcnJheSIsInNldFRvZG9BcnJheSIsImlucHV0Iiwic2V0SW5wdXQiLCJ0b2RvSW5pdGlhbGl6ZWQiLCJzZXRUb2RvSW5pdGlhbGl6ZWQiLCJpc0VkaXQiLCJzZXRJc0VkaXQiLCJpZCIsInNldElkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBZGQiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInRvZG8iLCJpc0RvbmUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ29tcGxldGUiLCJpdGVtSUQiLCJtYXAiLCJpdGVtIiwiaGFuZGxlRGVsZXRlIiwiZmlsdGVyIiwiaGFuZGxlVXBkYXRlIiwiZmluZCIsImhhbmRsZVVwZGF0ZUFkZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsInR5cGUiLCJocmVmIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJoMSIsImZvbnRTaXplIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwib25DaGFuZ2UiLCJidXR0b24iLCJzdWJtaXRfYnRuIiwidWwiLCJjb250YWluZXIiLCJsaXN0Iiwic2V0TGlzdCIsImRlbGF5T25Ub3VjaE9ubHkiLCJkZWxheSIsImFuaW1hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});