_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/CellGrid"],{

/***/ "./components/CellGrid/CellGrid.js":
/*!*****************************************!*\
  !*** ./components/CellGrid/CellGrid.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CellGrid; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Dev_Personal_Sites_Necro_Cult_Zine_React_Git_Folder_1_necrocult_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellGrid.module.scss */ "./components/CellGrid/CellGrid.module.scss");
/* harmony import */ var _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\CellGrid\\CellGrid.js";

function _templateObject() {
  var data = Object(D_Dev_Personal_Sites_Necro_Cult_Zine_React_Git_Folder_1_necrocult_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\twidth: calc(100% / ", "); \n\tpadding: ", ";\n\n\t.inner{\n\t\tmax-width: ", ";\n\t}\n\n\t@media only screen and (max-width : 1200px) { \n\t  \twidth: 100%;\n\t}\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Cell = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.columns || "3";
}, function (props) {
  return props.padding || "25px";
}, function (props) {
  return props.cellInnerWidth || "450px";
});
_c = Cell;
function CellGrid(_ref) {
  var columns = _ref.columns,
      cellInnerWidth = _ref.cellInnerWidth;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cellGrid,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cell,
      columns: columns,
      cellInnerWidth: cellInnerWidth,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner + ' inner',
        cellInnerWidth: cellInnerWidth,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cell,
      columns: columns,
      cellInnerWidth: cellInnerWidth,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner + ' inner',
        cellInnerWidth: cellInnerWidth,
        children: "Lorem ipsum dolor sit amet,"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cell,
      columns: columns,
      cellInnerWidth: cellInnerWidth,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner + ' inner',
        cellInnerWidth: cellInnerWidth,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 4
  }, this);
}
_c2 = CellGrid;

var _c, _c2;

$RefreshReg$(_c, "Cell");
$RefreshReg$(_c2, "CellGrid");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/CellGrid/CellGrid.module.scss":
/*!**************************************************!*\
  !*** ./components/CellGrid/CellGrid.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./CellGrid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/CellGrid/CellGrid.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./CellGrid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/CellGrid/CellGrid.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./CellGrid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/CellGrid/CellGrid.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Layout/MasterCSS/MasterCSS.js":
/*!**************************************************!*\
  !*** ./components/Layout/MasterCSS/MasterCSS.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MasterCSS; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Dev_Personal_Sites_Necro_Cult_Zine_React_Git_Folder_1_necrocult_nextjs_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");



var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Layout\\MasterCSS\\MasterCSS.js";

/************************************

MasterCSS 	
	
	-	Link all JS files in desired order, 
		then add this component to the end of 
		your global layout, so all JS is loaded last.

************************************/
function MasterCSS(_ref) {
  Object(D_Dev_Personal_Sites_Necro_Cult_Zine_React_Git_Folder_1_necrocult_nextjs_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
      integrity: "sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this)
  }, void 0, false);
}
_c = MasterCSS;

var _c;

$RefreshReg$(_c, "MasterCSS");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Layout/MasterJS/MasterJS.js":
/*!************************************************!*\
  !*** ./components/Layout/MasterJS/MasterJS.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MasterJS; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Dev_Personal_Sites_Necro_Cult_Zine_React_Git_Folder_1_necrocult_nextjs_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");



var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Layout\\MasterJS\\MasterJS.js";

/************************************

MasterJS 	
	
	-	Link all JS files in desired order, 
		then add this component to the end of 
		your global layout, so all JS is loaded last.

************************************/
function MasterJS(_ref) {
  Object(D_Dev_Personal_Sites_Necro_Cult_Zine_React_Git_Folder_1_necrocult_nextjs_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      integrity: "sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/headroom/0.12.0/headroom.min.js",
      integrity: "sha512-9UsrKTYzS9smDm2E58MLs0ACtOki+UC4bBq4iK5wi7lJycwqcaiHxr1bdEsIVoK0l5STEzLUdYyDdFQ5OEjczw==",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/headroom/0.12.0/jQuery.headroom.min.js",
      integrity: "sha512-3zxNImEhQ2pnOSHdyGCCJhpMrU35j7UgnlycU/sLnbsdmcH+pXm9bR9htu6p6ggqx6b5VEKeinajKDpUW7LuTQ==",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/solid.min.js",
      integrity: "sha512-Qc+cBMt/4/KXJ1F6nNQahXIsgPygHM4S2XWChoumV8qkpZ9oO+gBDBEpOxgbkQQ/6DlHx6cUxa5nBhEbuiR8xw==",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/scripts/main.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}
_c = MasterJS;

var _c;

$RefreshReg$(_c, "MasterJS");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Template/ComponentMeta/ComponentMeta.js":
/*!************************************************************!*\
  !*** ./components/Template/ComponentMeta/ComponentMeta.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComponentMeta; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentMeta.module.scss */ "./components/Template/ComponentMeta/ComponentMeta.module.scss");
/* harmony import */ var _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\ComponentMeta\\ComponentMeta.js";

function ComponentMeta(_ref) {
  var title = _ref.title,
      author = _ref.author,
      authorTeam = _ref.authorTeam,
      description = _ref.description,
      contentProps = _ref.contentProps,
      libraries = _ref.libraries;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptionWrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cell + ' ' + _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Component:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 6
            }, this), title]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.author,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Developer:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 6
            }, this), author, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 14
            }, this), authorTeam]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cell + ' ' + _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Description:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 6
            }, this), description]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 2
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cell + ' ' + _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contentProps,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.props,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Available Props:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 5
          }, this), contentProps]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cell + ' ' + _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.libraries,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.libraries,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Libraries Used:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 5
          }, this), libraries]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 2
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, this);
}
_c = ComponentMeta;

var _c;

$RefreshReg$(_c, "ComponentMeta");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Template/ComponentMeta/ComponentMeta.module.scss":
/*!*********************************************************************!*\
  !*** ./components/Template/ComponentMeta/ComponentMeta.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./ComponentMeta.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/ComponentMeta/ComponentMeta.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./ComponentMeta.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/ComponentMeta/ComponentMeta.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./ComponentMeta.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/ComponentMeta/ComponentMeta.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Template/Container/Container.js":
/*!****************************************************!*\
  !*** ./components/Template/Container/Container.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.module.scss */ "./components/Template/Container/Container.module.scss");
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\Container\\Container.js";

function Container(_ref) {
  var children = _ref.children,
      containerSize = _ref.containerSize,
      flex = _ref.flex;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container + (flex ? ' ' + _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flex : ''),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, this);
}
_c = Container;

var _c;

$RefreshReg$(_c, "Container");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Template/Container/Container.module.scss":
/*!*************************************************************!*\
  !*** ./components/Template/Container/Container.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Container.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Container/Container.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Container.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Container/Container.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Container.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Container/Container.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Template/Footer/Footer.js":
/*!**********************************************!*\
  !*** ./components/Template/Footer/Footer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ "./components/Template/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_MasterJS_MasterJS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layout/MasterJS/MasterJS */ "./components/Layout/MasterJS/MasterJS.js");


var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\Footer\\Footer.js";


function Footer(_ref) {
  var footerMessage = _ref.footerMessage;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer_message,
        children: footerMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_MasterJS_MasterJS__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Template/Footer/Footer.module.scss":
/*!*******************************************************!*\
  !*** ./components/Template/Footer/Footer.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Footer/Footer.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Footer/Footer.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Footer/Footer.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Template/Header/Header.js":
/*!**********************************************!*\
  !*** ./components/Template/Header/Header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Template/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Template/Container/Container */ "./components/Template/Container/Container.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_MasterCSS_MasterCSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Layout/MasterCSS/MasterCSS */ "./components/Layout/MasterCSS/MasterCSS.js");

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\Header\\Header.js";




function Header(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_MasterCSS_MasterCSS__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contentLeft,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "old_english",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contentRight
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 8
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 4
  }, this);
}
_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Template/Header/Header.module.scss":
/*!*******************************************************!*\
  !*** ./components/Template/Header/Header.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Header.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Header/Header.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Header.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Header/Header.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Header.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Header/Header.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Template/Sandbox/Sandbox.js":
/*!************************************************!*\
  !*** ./components/Template/Sandbox/Sandbox.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sandbox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sandbox.module.scss */ "./components/Template/Sandbox/Sandbox.module.scss");
/* harmony import */ var _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Template/Container/Container */ "./components/Template/Container/Container.js");

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\Sandbox\\Sandbox.js";


function Sandbox(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sandbox,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "Component Sandbox"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = Sandbox;

var _c;

$RefreshReg$(_c, "Sandbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Template/Sandbox/Sandbox.module.scss":
/*!*********************************************************!*\
  !*** ./components/Template/Sandbox/Sandbox.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Sandbox.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Sandbox/Sandbox.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Sandbox.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Sandbox/Sandbox.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Sandbox.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Sandbox/Sandbox.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FCellGrid&absolutePagePath=D%3A%5CDev%5CPersonal%20Sites%5CNecro%20Cult%20Zine%20React%5CGit%20Folder%201%5Cnecrocult-nextjs%5Cpages%5CCellGrid.js!./":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FCellGrid&absolutePagePath=D%3A%5CDev%5CPersonal%20Sites%5CNecro%20Cult%20Zine%20React%5CGit%20Folder%201%5Cnecrocult-nextjs%5Cpages%5CCellGrid.js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/CellGrid",
      function () {
        return __webpack_require__(/*! ./pages/CellGrid.js */ "./pages/CellGrid.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "./node_modules/next/dist/next-server/lib/to-base-64.js");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "./node_modules/next/dist/next-server/server/image-config.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (false) {}

var VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
var loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
var VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

var _ref2 = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault,
    configDeviceSizes = _ref2.deviceSizes,
    configImageSizes = _ref2.imageSizes,
    configLoader = _ref2.loader,
    configPath = _ref2.path,
    configDomains = _ref2.domains; // sort smallest to largest


var allSizes = [].concat(_toConsumableArray(configDeviceSizes), _toConsumableArray(configImageSizes));
configDeviceSizes.sort(function (a, b) {
  return a - b;
});
allSizes.sort(function (a, b) {
  return a - b;
});

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    var percentSizes = _toConsumableArray(sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)).map(function (m) {
      return parseInt(m[2]);
    });

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, _toConsumableArray(percentSizes)) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= configDeviceSizes[0] * smallestRatio;
        }),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  var widths = _toConsumableArray(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref3) {
  var src = _ref3.src,
      unoptimized = _ref3.unoptimized,
      layout = _ref3.layout,
      width = _ref3.width,
      quality = _ref3.quality,
      sizes = _ref3.sizes,
      loader = _ref3.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(width, layout, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src: src,
      quality: quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  var load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2["default"])({
      root: configPath
    }, loaderProps));
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(configLoader));
}

function Image(_ref) {
  var src = _ref.src,
      sizes = _ref.sizes,
      _ref$unoptimized = _ref.unoptimized,
      unoptimized = _ref$unoptimized === void 0 ? false : _ref$unoptimized,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? false : _ref$priority,
      loading = _ref.loading,
      className = _ref.className,
      quality = _ref.quality,
      width = _ref.width,
      height = _ref.height,
      objectFit = _ref.objectFit,
      objectPosition = _ref.objectPosition,
      _ref$loader = _ref.loader,
      loader = _ref$loader === void 0 ? defaultImageLoader : _ref$loader,
      all = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';
  var unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error("Image is missing required \"src\" property. Make sure you pass \"src\" in props to the `next/image` component. Received: ".concat(JSON.stringify({
        width: width,
        height: height,
        quality: quality
      })));
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"layout\" property. Provided \"").concat(layout, "\" should be one of ").concat(VALID_LAYOUT_VALUES.map(String).join(','), "."));
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"loading\" property. Provided \"").concat(loading, "\" should be one of ").concat(VALID_LOADING_VALUES.map(String).join(','), "."));
    }

    if (priority && loading === 'lazy') {
      throw new Error("Image with src \"".concat(src, "\" has both \"priority\" and \"loading='lazy'\" properties. Only one should be used."));
    }

    if (unsized) {
      throw new Error("Image with src \"".concat(src, "\" has deprecated \"unsized\" property, which was removed in favor of the \"layout='fill'\" property"));
    }
  }

  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  var _ref4 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  }),
      _ref5 = _slicedToArray(_ref4, 2),
      setRef = _ref5[0],
      isIntersected = _ref5[1];

  var isVisible = !isLazy || isIntersected;
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);
  var wrapperStyle;
  var sizerStyle;
  var sizerSvg;
  var imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: objectFit,
    objectPosition: objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop: paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = "<svg width=\"".concat(widthInt, "\" height=\"").concat(heightInt, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>");
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error("Image with src \"".concat(src, "\" must use \"width\" and \"height\" properties or \"layout='fill'\" property."));
    }
  }

  var imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes,
      loader: loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react["default"].createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: "data:image/svg+xml;base64,".concat((0, _toBase.toBase64)(sizerSvg))
  }) : null) : null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


_c = Image;

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref6) {
  var root = _ref6.root,
      src = _ref6.src,
      width = _ref6.width,
      quality = _ref6.quality;
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  var params = ['auto=format', 'fit=max', 'w=' + width];
  var paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return "".concat(root).concat(normalizeSrc(src)).concat(paramsString);
}

function akamaiLoader(_ref7) {
  var root = _ref7.root,
      src = _ref7.src,
      width = _ref7.width;
  return "".concat(root).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref8) {
  var root = _ref8.root,
      src = _ref8.src,
      width = _ref8.width,
      quality = _ref8.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(root).concat(paramsString).concat(normalizeSrc(src));
}

function defaultLoader(_ref9) {
  var root = _ref9.root,
      src = _ref9.src,
      width = _ref9.width,
      quality = _ref9.quality;

  if (true) {
    var missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error("Next Image Optimization requires ".concat(missingValues.join(', '), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
        src: src,
        width: width,
        quality: quality
      })));
    }

    if (src.startsWith('//')) {
      throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)"));
    }

    if (!src.startsWith('/') && configDomains) {
      var parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, if using relative image it must start with a leading slash \"/\" or be an absolute URL (http:// or https://)"));
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error("Invalid src prop (".concat(src, ") on `next/image`, hostname \"").concat(parsedSrc.hostname, "\" is not configured under images in your `next.config.js`\n") + "See more info: https://err.sh/next.js/next-image-unconfigured-host");
      }
    }
  }

  return "".concat(root, "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

var _c;

$RefreshReg$(_c, "Image");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/CellGrid/CellGrid.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/CellGrid/CellGrid.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\n/***** Color Variables *****/\n/***** Named Colors *****/\n/***** Fonts *****/\n/***** Font Sizes *****/\n/***** Letter Spacing *****/\n/***** Content Widths *****/\n/***** Transition Timings *****/\n/***** Shadows *****/\n/* source: https://brumm.af/shadows */\n/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\n/**************************************************\r\nHoly Mountain Framework Component\r\n\r\n\r\nComponent Name: \tCellGrid\r\nDescription:\t\t\r\n\r\n\r\n**************************************************/\n.CellGrid_cellGrid__2vqKA {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%; }\n  .CellGrid_cellGrid__2vqKA .CellGrid_cell__UMlK8 {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .CellGrid_cellGrid__2vqKA .CellGrid_cell__UMlK8 .CellGrid_inner__1dJlh {\n      background-color: #fafafa;\n      color: #212121;\n      padding: 15px;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-direction: column;\n      height: 100%;\n      width: 100%; }\n", "",{"version":3,"sources":["webpack://../../styles/vars.scss","webpack://CellGrid.module.scss","webpack://../../styles/mixins.scss"],"names":[],"mappings":"AAAA;;;;;;kDCMkD;ADGlD,4BAAA;AAUC,yBAAA;AASD,kBAAA;AAKA,uBAAA;AAMA,2BAAA;AAIA,2BAAA;AAMA,+BAAA;AAMA,oBAAA;AAEC,qCAAA;AEzDD;;;;;;;kDDuBkD;AAnBlD;;;;;;;;kDA4BkD;AAlBlD;EACC,aAAa;EACb,eAAe;EACf,WAAW,EAAA;EAHZ;IAKE,aAAa;IACb,mBAAmB;IACnB,uBAAuB,EAAA;IAPzB;MASG,yBDZe;MCaf,cDde;MCef,aAAa;MACb,aAAa;MACb,2BAA2B;MAC3B,mBAAmB;MACnB,sBAAsB;MACtB,YAAY;MACZ,WAAW,EAAA","sourcesContent":["/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\r\n\r\n\r\n/***** Color Variables *****/\r\n\t$black: \t\t#212121;\r\n\t$white: \t\t#fafafa;\r\n\t$grey_1:\t\t#ececec;\r\n\t$grey_2:\t\t#3e3e3e;\r\n\r\n\t$red: \t\t\t#fb0000;\r\n\t\r\n\t$nasa_grey:\t#D1D3D4;\r\n\r\n\t/***** Named Colors *****/\r\n\t\t$primary_color:\t\t$black;\r\n\t\t$secondary_color:\t\t$white;\r\n\r\n\t\t$background_color:\t$white;\r\n\t\t$text_color:\t\t\t$black;\r\n\t\t$accent_color:\t\t$grey_1;\r\n\r\n\r\n/***** Fonts *****/\r\n\t$font_body:\t\t\"MyUnderwood\";\r\n\t$font_display:\t\"AncientMedium\";\r\n\t$font_alt:\t\t\t\"ImpactLabel\";\r\n\r\n/***** Font Sizes *****/\r\n\t$font_size_heading:\t65px;\r\n\t$font_size_subhead:\t36px;\r\n\t$font_size_body:\t\t20px;\r\n\t$font_size_detail:\t16px;\r\n\r\n/***** Letter Spacing *****/\r\n\t$letterSpacingWide:\t\t0.035em;\r\n\t$letterSpacingNormal:\t0.035em;\r\n\r\n/***** Content Widths *****/\r\n\t$content_width_s: \t650px;\r\n\t$content_width_m: \t920px;\r\n\t$content_width_l: \t1450px;\r\n\r\n\r\n/***** Transition Timings *****/\r\n\t$transition_fast:\t\t0.1s ease-in-out;\r\n\t$transition_medium:\t0.25s ease-in-out;\r\n\t$transition_slow:\t\t0.5s ease-in-out;\r\n\r\n\r\n/***** Shadows *****/\r\n\r\n\t/* source: https://brumm.af/shadows */\r\n\t$nice_shadow:\r\n\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.02),\r\n\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.028),\r\n\t\t0 12.5px 10px rgba(0, 0, 0, 0.035),\r\n\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.042),\r\n\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.05),\r\n\t\t0 100px 80px rgba(0, 0, 0, 0.07);\r\n\r\n\r\n\t$text-shadow-red:\r\n\t\t1px 1px $red, \r\n\t\t2px 2px $red, \r\n\t\t3px 3px $red, \r\n\t\t4px 4px $red, \r\n\t\t5px 5px $red;\r\n\t  \r\n\t$text-glow-red:\r\n\t\t0 0 1vw $red, \r\n\t\t0 0 3vw $red, \r\n\t\t0 0 10vw $red, \r\n\t\t0 0 10vw $red, \r\n\t\t0 0 .4vw $red, \r\n\t\t.25vw .25vw .1vw #806914;\r\n","/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\n/***** Color Variables *****/\n/***** Named Colors *****/\n/***** Fonts *****/\n/***** Font Sizes *****/\n/***** Letter Spacing *****/\n/***** Content Widths *****/\n/***** Transition Timings *****/\n/***** Shadows *****/\n/* source: https://brumm.af/shadows */\n/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\n/**************************************************\r\nHoly Mountain Framework Component\r\n\r\n\r\nComponent Name: \tCellGrid\r\nDescription:\t\t\r\n\r\n\r\n**************************************************/\n.cellGrid {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%; }\n  .cellGrid .cell {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .cellGrid .cell .inner {\n      background-color: #fafafa;\n      color: #212121;\n      padding: 15px;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-direction: column;\n      height: 100%;\n      width: 100%; }\n","/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\r\n\r\n\r\n@mixin flex_center {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n@mixin backgroundStandard {\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n\r\n@mixin solidShadowHover {\r\n\t&:hover{\r\n\t\ttext-shadow: $text-shadow-red;\r\n\t}\r\n}\r\n\r\n@mixin maxWidth($maxWidth) {\r\n\twidth: 100%;\r\n\tmax-width: $maxWidth;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n@mixin paperTexture{\r\n\t&:after{\r\n\t\tcontent:'';\r\n\t\tposition: absolute;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\topacity: .5;\r\n\t\tpointer-events: none;\r\n\t\tbackground-image: url('/img/textures/natural-paper.png');\r\n\t\tbackground-repeat: repeat;\r\n\t\t//mix-blend-mode: lighten;\r\n\t\t//filter: contrast(1.5);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"cellGrid": "CellGrid_cellGrid__2vqKA",
	"cell": "CellGrid_cell__UMlK8",
	"inner": "CellGrid_inner__1dJlh"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/ComponentMeta/ComponentMeta.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Template/ComponentMeta/ComponentMeta.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\n/***** Color Variables *****/\n/***** Named Colors *****/\n/***** Fonts *****/\n/***** Font Sizes *****/\n/***** Letter Spacing *****/\n/***** Content Widths *****/\n/***** Transition Timings *****/\n/***** Shadows *****/\n/* source: https://brumm.af/shadows */\n/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\n.ComponentMeta_descriptionWrapper__3izpi {\n  padding: 35px 0;\n  display: flex;\n  flex-wrap: wrap; }\n  .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_row__rfS4t {\n    display: flex;\n    flex-direction: row;\n    width: 100%; }\n    .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_row__rfS4t:not(:last-of-type) .ComponentMeta_cell__qqI37 {\n      border-bottom: 0px; }\n  .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_cell__qqI37 {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 15px;\n    border: solid 1px #212121; }\n    .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_cell__qqI37:not(:first-of-type) {\n      border-left: solid 0px #212121; }\n    .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_cell__qqI37.ComponentMeta_title__10P9G {\n      width: 400px; }\n    .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_cell__qqI37.ComponentMeta_description__20_1D {\n      width: calc(100% - 400px); }\n    .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_cell__qqI37.ComponentMeta_contentProps__3S06M {\n      width: calc(100% - 500px); }\n    .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_cell__qqI37.ComponentMeta_libraries__1Wbmg {\n      width: 500px; }\n    .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_cell__qqI37 .ComponentMeta_inner__3vcL5 {\n      list-style: none;\n      width: 100%; }\n      .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_cell__qqI37 .ComponentMeta_inner__3vcL5 li {\n        margin-bottom: 10px; }\n        .ComponentMeta_descriptionWrapper__3izpi .ComponentMeta_cell__qqI37 .ComponentMeta_inner__3vcL5 li span {\n          font-weight: 600;\n          display: block;\n          width: 100%;\n          border-bottom: solid 1px #212121;\n          margin-bottom: 10px; }\n", "",{"version":3,"sources":["webpack://../../../styles/vars.scss","webpack://ComponentMeta.module.scss","webpack://../../../styles/mixins.scss"],"names":[],"mappings":"AAAA;;;;;;kDCMkD;ADGlD,4BAAA;AAUC,yBAAA;AASD,kBAAA;AAKA,uBAAA;AAMA,2BAAA;AAIA,2BAAA;AAMA,+BAAA;AAMA,oBAAA;AAEC,qCAAA;AEzDD;;;;;;;kDDuBkD;AAnBlD;EACC,eAAe;EACf,aAAa;EACb,eAAe,EAAA;EAHhB;IAME,aAAa;IACb,mBAAmB;IACnB,WAAW,EAAA;IARb;MAWS,kBAAkB,EAAA;EAX3B;IAkBE,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,aAAY;IACZ,yBDhBgB,EAAA;ICNlB;MAwBG,8BDlBe,EAAA;ICNlB;MA0BU,YAAW,EAAA;IA1BrB;MA2BgB,yBAAwB,EAAA;IA3BxC;MA6BiB,yBAAwB,EAAA;IA7BzC;MA8Bc,YAAW,EAAA;IA9BzB;MAiCG,gBAAgB;MAChB,WAAW,EAAA;MAlCd;QAqCI,mBAAmB,EAAA;QArCvB;UAwCK,gBAAgB;UAChB,cAAc;UACd,WAAW;UACX,gCDrCa;UCsCb,mBAAmB,EAAA","sourcesContent":["/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\r\n\r\n\r\n/***** Color Variables *****/\r\n\t$black: \t\t#212121;\r\n\t$white: \t\t#fafafa;\r\n\t$grey_1:\t\t#ececec;\r\n\t$grey_2:\t\t#3e3e3e;\r\n\r\n\t$red: \t\t\t#fb0000;\r\n\t\r\n\t$nasa_grey:\t#D1D3D4;\r\n\r\n\t/***** Named Colors *****/\r\n\t\t$primary_color:\t\t$black;\r\n\t\t$secondary_color:\t\t$white;\r\n\r\n\t\t$background_color:\t$white;\r\n\t\t$text_color:\t\t\t$black;\r\n\t\t$accent_color:\t\t$grey_1;\r\n\r\n\r\n/***** Fonts *****/\r\n\t$font_body:\t\t\"MyUnderwood\";\r\n\t$font_display:\t\"AncientMedium\";\r\n\t$font_alt:\t\t\t\"ImpactLabel\";\r\n\r\n/***** Font Sizes *****/\r\n\t$font_size_heading:\t65px;\r\n\t$font_size_subhead:\t36px;\r\n\t$font_size_body:\t\t20px;\r\n\t$font_size_detail:\t16px;\r\n\r\n/***** Letter Spacing *****/\r\n\t$letterSpacingWide:\t\t0.035em;\r\n\t$letterSpacingNormal:\t0.035em;\r\n\r\n/***** Content Widths *****/\r\n\t$content_width_s: \t650px;\r\n\t$content_width_m: \t920px;\r\n\t$content_width_l: \t1450px;\r\n\r\n\r\n/***** Transition Timings *****/\r\n\t$transition_fast:\t\t0.1s ease-in-out;\r\n\t$transition_medium:\t0.25s ease-in-out;\r\n\t$transition_slow:\t\t0.5s ease-in-out;\r\n\r\n\r\n/***** Shadows *****/\r\n\r\n\t/* source: https://brumm.af/shadows */\r\n\t$nice_shadow:\r\n\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.02),\r\n\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.028),\r\n\t\t0 12.5px 10px rgba(0, 0, 0, 0.035),\r\n\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.042),\r\n\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.05),\r\n\t\t0 100px 80px rgba(0, 0, 0, 0.07);\r\n\r\n\r\n\t$text-shadow-red:\r\n\t\t1px 1px $red, \r\n\t\t2px 2px $red, \r\n\t\t3px 3px $red, \r\n\t\t4px 4px $red, \r\n\t\t5px 5px $red;\r\n\t  \r\n\t$text-glow-red:\r\n\t\t0 0 1vw $red, \r\n\t\t0 0 3vw $red, \r\n\t\t0 0 10vw $red, \r\n\t\t0 0 10vw $red, \r\n\t\t0 0 .4vw $red, \r\n\t\t.25vw .25vw .1vw #806914;\r\n","/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\n/***** Color Variables *****/\n/***** Named Colors *****/\n/***** Fonts *****/\n/***** Font Sizes *****/\n/***** Letter Spacing *****/\n/***** Content Widths *****/\n/***** Transition Timings *****/\n/***** Shadows *****/\n/* source: https://brumm.af/shadows */\n/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\n.descriptionWrapper {\n  padding: 35px 0;\n  display: flex;\n  flex-wrap: wrap; }\n  .descriptionWrapper .row {\n    display: flex;\n    flex-direction: row;\n    width: 100%; }\n    .descriptionWrapper .row:not(:last-of-type) .cell {\n      border-bottom: 0px; }\n  .descriptionWrapper .cell {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 15px;\n    border: solid 1px #212121; }\n    .descriptionWrapper .cell:not(:first-of-type) {\n      border-left: solid 0px #212121; }\n    .descriptionWrapper .cell.title {\n      width: 400px; }\n    .descriptionWrapper .cell.description {\n      width: calc(100% - 400px); }\n    .descriptionWrapper .cell.contentProps {\n      width: calc(100% - 500px); }\n    .descriptionWrapper .cell.libraries {\n      width: 500px; }\n    .descriptionWrapper .cell .inner {\n      list-style: none;\n      width: 100%; }\n      .descriptionWrapper .cell .inner li {\n        margin-bottom: 10px; }\n        .descriptionWrapper .cell .inner li span {\n          font-weight: 600;\n          display: block;\n          width: 100%;\n          border-bottom: solid 1px #212121;\n          margin-bottom: 10px; }\n","/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\r\n\r\n\r\n@mixin flex_center {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n@mixin backgroundStandard {\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n\r\n@mixin solidShadowHover {\r\n\t&:hover{\r\n\t\ttext-shadow: $text-shadow-red;\r\n\t}\r\n}\r\n\r\n@mixin maxWidth($maxWidth) {\r\n\twidth: 100%;\r\n\tmax-width: $maxWidth;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n@mixin paperTexture{\r\n\t&:after{\r\n\t\tcontent:'';\r\n\t\tposition: absolute;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\topacity: .5;\r\n\t\tpointer-events: none;\r\n\t\tbackground-image: url('/img/textures/natural-paper.png');\r\n\t\tbackground-repeat: repeat;\r\n\t\t//mix-blend-mode: lighten;\r\n\t\t//filter: contrast(1.5);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"descriptionWrapper": "ComponentMeta_descriptionWrapper__3izpi",
	"row": "ComponentMeta_row__rfS4t",
	"cell": "ComponentMeta_cell__qqI37",
	"title": "ComponentMeta_title__10P9G",
	"description": "ComponentMeta_description__20_1D",
	"contentProps": "ComponentMeta_contentProps__3S06M",
	"libraries": "ComponentMeta_libraries__1Wbmg",
	"inner": "ComponentMeta_inner__3vcL5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Container/Container.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Template/Container/Container.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/***** ========== *****/\n/***** CONTAINER  *****/\n/***** ========== *****/\n.Container_container__2RQ73 {\n  max-width: 1450px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 35px;\n  box-sizing: border-box;\n  position: relative; }\n  .Container_container__2RQ73.Container_flex__1Nqly {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center; }\n", "",{"version":3,"sources":["webpack://Container.module.scss"],"names":[],"mappings":"AAAA,uBAAA;AACA,uBAAA;AACA,uBAAA;AACA;EACC,iBAAiB;EACjB,WAAW;EACX,cAAc;EACd,eAAe;EACf,sBAAsB;EACtB,kBAAkB,EAAA;EANnB;IASE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB,EAAA","sourcesContent":["/***** ========== *****/\r\n/***** CONTAINER  *****/\r\n/***** ========== *****/\r\n.container {\r\n\tmax-width: 1450px;\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tpadding: 0 35px;\r\n\tbox-sizing: border-box;\r\n\tposition: relative;\r\n\r\n\t&.flex{\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Container_container__2RQ73",
	"flex": "Container_flex__1Nqly"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Footer/Footer.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Template/Footer/Footer.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\n/***** Color Variables *****/\n/***** Named Colors *****/\n/***** Fonts *****/\n/***** Font Sizes *****/\n/***** Letter Spacing *****/\n/***** Content Widths *****/\n/***** Transition Timings *****/\n/***** Shadows *****/\n/* source: https://brumm.af/shadows */\n/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\n.Footer_footer__3aUwb {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 150px; }\n  .Footer_footer__3aUwb .Footer_footer_message__XsYhv {\n    font-size: 3rem;\n    font-family: \"AncientMedium\"; }\n", "",{"version":3,"sources":["webpack://../../../styles/vars.scss","webpack://Footer.module.scss","webpack://../../../styles/mixins.scss"],"names":[],"mappings":"AAAA;;;;;;kDCMkD;ADGlD,4BAAA;AAUC,yBAAA;AASD,kBAAA;AAKA,uBAAA;AAMA,2BAAA;AAIA,2BAAA;AAMA,+BAAA;AAMA,oBAAA;AAEC,qCAAA;AEzDD;;;;;;;kDDuBkD;AAlBlD;EACC,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB,EAAA;EAPlB;IAUE,eAAe;IACf,4BDc6B,EAAA","sourcesContent":["/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\r\n\r\n\r\n/***** Color Variables *****/\r\n\t$black: \t\t#212121;\r\n\t$white: \t\t#fafafa;\r\n\t$grey_1:\t\t#ececec;\r\n\t$grey_2:\t\t#3e3e3e;\r\n\r\n\t$red: \t\t\t#fb0000;\r\n\t\r\n\t$nasa_grey:\t#D1D3D4;\r\n\r\n\t/***** Named Colors *****/\r\n\t\t$primary_color:\t\t$black;\r\n\t\t$secondary_color:\t\t$white;\r\n\r\n\t\t$background_color:\t$white;\r\n\t\t$text_color:\t\t\t$black;\r\n\t\t$accent_color:\t\t$grey_1;\r\n\r\n\r\n/***** Fonts *****/\r\n\t$font_body:\t\t\"MyUnderwood\";\r\n\t$font_display:\t\"AncientMedium\";\r\n\t$font_alt:\t\t\t\"ImpactLabel\";\r\n\r\n/***** Font Sizes *****/\r\n\t$font_size_heading:\t65px;\r\n\t$font_size_subhead:\t36px;\r\n\t$font_size_body:\t\t20px;\r\n\t$font_size_detail:\t16px;\r\n\r\n/***** Letter Spacing *****/\r\n\t$letterSpacingWide:\t\t0.035em;\r\n\t$letterSpacingNormal:\t0.035em;\r\n\r\n/***** Content Widths *****/\r\n\t$content_width_s: \t650px;\r\n\t$content_width_m: \t920px;\r\n\t$content_width_l: \t1450px;\r\n\r\n\r\n/***** Transition Timings *****/\r\n\t$transition_fast:\t\t0.1s ease-in-out;\r\n\t$transition_medium:\t0.25s ease-in-out;\r\n\t$transition_slow:\t\t0.5s ease-in-out;\r\n\r\n\r\n/***** Shadows *****/\r\n\r\n\t/* source: https://brumm.af/shadows */\r\n\t$nice_shadow:\r\n\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.02),\r\n\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.028),\r\n\t\t0 12.5px 10px rgba(0, 0, 0, 0.035),\r\n\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.042),\r\n\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.05),\r\n\t\t0 100px 80px rgba(0, 0, 0, 0.07);\r\n\r\n\r\n\t$text-shadow-red:\r\n\t\t1px 1px $red, \r\n\t\t2px 2px $red, \r\n\t\t3px 3px $red, \r\n\t\t4px 4px $red, \r\n\t\t5px 5px $red;\r\n\t  \r\n\t$text-glow-red:\r\n\t\t0 0 1vw $red, \r\n\t\t0 0 3vw $red, \r\n\t\t0 0 10vw $red, \r\n\t\t0 0 10vw $red, \r\n\t\t0 0 .4vw $red, \r\n\t\t.25vw .25vw .1vw #806914;\r\n","/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\n/***** Color Variables *****/\n/***** Named Colors *****/\n/***** Fonts *****/\n/***** Font Sizes *****/\n/***** Letter Spacing *****/\n/***** Content Widths *****/\n/***** Transition Timings *****/\n/***** Shadows *****/\n/* source: https://brumm.af/shadows */\n/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\n.footer {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 150px; }\n  .footer .footer_message {\n    font-size: 3rem;\n    font-family: \"AncientMedium\"; }\n","/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\r\n\r\n\r\n@mixin flex_center {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n@mixin backgroundStandard {\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n\r\n@mixin solidShadowHover {\r\n\t&:hover{\r\n\t\ttext-shadow: $text-shadow-red;\r\n\t}\r\n}\r\n\r\n@mixin maxWidth($maxWidth) {\r\n\twidth: 100%;\r\n\tmax-width: $maxWidth;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n@mixin paperTexture{\r\n\t&:after{\r\n\t\tcontent:'';\r\n\t\tposition: absolute;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\topacity: .5;\r\n\t\tpointer-events: none;\r\n\t\tbackground-image: url('/img/textures/natural-paper.png');\r\n\t\tbackground-repeat: repeat;\r\n\t\t//mix-blend-mode: lighten;\r\n\t\t//filter: contrast(1.5);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": "Footer_footer__3aUwb",
	"footer_message": "Footer_footer_message__XsYhv"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Header/Header.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Template/Header/Header.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\n/***** Color Variables *****/\n/***** Named Colors *****/\n/***** Fonts *****/\n/***** Font Sizes *****/\n/***** Letter Spacing *****/\n/***** Content Widths *****/\n/***** Transition Timings *****/\n/***** Shadows *****/\n/* source: https://brumm.af/shadows */\n/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\n.Header_header__2tXk3 {\n  width: 100%;\n  background-color: #D1D3D4; }\n\n.Header_container__b6Uux {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between; }\n\n.Header_contentLeft__HPdQO {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  max-width: 100%; }\n  .Header_contentLeft__HPdQO .Header_logo__3Sb59 {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-right: 30px;\n    border: none; }\n  .Header_contentLeft__HPdQO .Header_title__1hEU7 {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    font-size: 65px;\n    padding: 10px 0; }\n\n.Header_contentRight__1F3VT {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: calc(100% - $static_width); }\n", "",{"version":3,"sources":["webpack://../../../styles/vars.scss","webpack://Header.module.scss","webpack://../../../styles/mixins.scss"],"names":[],"mappings":"AAAA;;;;;;kDCMkD;ADGlD,4BAAA;AAUC,yBAAA;AASD,kBAAA;AAKA,uBAAA;AAMA,2BAAA;AAIA,2BAAA;AAMA,+BAAA;AAMA,oBAAA;AAEC,qCAAA;AEzDD;;;;;;;kDDuBkD;AAnBlD;EACC,WAAW;EACX,yBDWmB,EAAA;;ACPpB;EACC,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B,EAAA;;AAM/B;EACC,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,eARkB,EAAA;EAEnB;ICTC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IDgBlB,aAAa;IACb,kBAAkB;IAClB,YAAY,EAAA;EAZd;ICTC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IDuBlB,kBAAkB;IAClB,eDJuB;ICKvB,eAAe,EAAA;;AAIjB;EACC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,qCAAqC,EAAA","sourcesContent":["/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\r\n\r\n\r\n/***** Color Variables *****/\r\n\t$black: \t\t#212121;\r\n\t$white: \t\t#fafafa;\r\n\t$grey_1:\t\t#ececec;\r\n\t$grey_2:\t\t#3e3e3e;\r\n\r\n\t$red: \t\t\t#fb0000;\r\n\t\r\n\t$nasa_grey:\t#D1D3D4;\r\n\r\n\t/***** Named Colors *****/\r\n\t\t$primary_color:\t\t$black;\r\n\t\t$secondary_color:\t\t$white;\r\n\r\n\t\t$background_color:\t$white;\r\n\t\t$text_color:\t\t\t$black;\r\n\t\t$accent_color:\t\t$grey_1;\r\n\r\n\r\n/***** Fonts *****/\r\n\t$font_body:\t\t\"MyUnderwood\";\r\n\t$font_display:\t\"AncientMedium\";\r\n\t$font_alt:\t\t\t\"ImpactLabel\";\r\n\r\n/***** Font Sizes *****/\r\n\t$font_size_heading:\t65px;\r\n\t$font_size_subhead:\t36px;\r\n\t$font_size_body:\t\t20px;\r\n\t$font_size_detail:\t16px;\r\n\r\n/***** Letter Spacing *****/\r\n\t$letterSpacingWide:\t\t0.035em;\r\n\t$letterSpacingNormal:\t0.035em;\r\n\r\n/***** Content Widths *****/\r\n\t$content_width_s: \t650px;\r\n\t$content_width_m: \t920px;\r\n\t$content_width_l: \t1450px;\r\n\r\n\r\n/***** Transition Timings *****/\r\n\t$transition_fast:\t\t0.1s ease-in-out;\r\n\t$transition_medium:\t0.25s ease-in-out;\r\n\t$transition_slow:\t\t0.5s ease-in-out;\r\n\r\n\r\n/***** Shadows *****/\r\n\r\n\t/* source: https://brumm.af/shadows */\r\n\t$nice_shadow:\r\n\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.02),\r\n\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.028),\r\n\t\t0 12.5px 10px rgba(0, 0, 0, 0.035),\r\n\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.042),\r\n\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.05),\r\n\t\t0 100px 80px rgba(0, 0, 0, 0.07);\r\n\r\n\r\n\t$text-shadow-red:\r\n\t\t1px 1px $red, \r\n\t\t2px 2px $red, \r\n\t\t3px 3px $red, \r\n\t\t4px 4px $red, \r\n\t\t5px 5px $red;\r\n\t  \r\n\t$text-glow-red:\r\n\t\t0 0 1vw $red, \r\n\t\t0 0 3vw $red, \r\n\t\t0 0 10vw $red, \r\n\t\t0 0 10vw $red, \r\n\t\t0 0 .4vw $red, \r\n\t\t.25vw .25vw .1vw #806914;\r\n","/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\n/***** Color Variables *****/\n/***** Named Colors *****/\n/***** Fonts *****/\n/***** Font Sizes *****/\n/***** Letter Spacing *****/\n/***** Content Widths *****/\n/***** Transition Timings *****/\n/***** Shadows *****/\n/* source: https://brumm.af/shadows */\n/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\n.header {\n  width: 100%;\n  background-color: #D1D3D4; }\n\n.container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between; }\n\n.contentLeft {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  max-width: 100%; }\n  .contentLeft .logo {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-right: 30px;\n    border: none; }\n  .contentLeft .title {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    font-size: 65px;\n    padding: 10px 0; }\n\n.contentRight {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: calc(100% - $static_width); }\n","/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\r\n\r\n\r\n@mixin flex_center {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n@mixin backgroundStandard {\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n\r\n@mixin solidShadowHover {\r\n\t&:hover{\r\n\t\ttext-shadow: $text-shadow-red;\r\n\t}\r\n}\r\n\r\n@mixin maxWidth($maxWidth) {\r\n\twidth: 100%;\r\n\tmax-width: $maxWidth;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n@mixin paperTexture{\r\n\t&:after{\r\n\t\tcontent:'';\r\n\t\tposition: absolute;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\topacity: .5;\r\n\t\tpointer-events: none;\r\n\t\tbackground-image: url('/img/textures/natural-paper.png');\r\n\t\tbackground-repeat: repeat;\r\n\t\t//mix-blend-mode: lighten;\r\n\t\t//filter: contrast(1.5);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "Header_header__2tXk3",
	"container": "Header_container__b6Uux",
	"contentLeft": "Header_contentLeft__HPdQO",
	"logo": "Header_logo__3Sb59",
	"title": "Header_title__1hEU7",
	"contentRight": "Header_contentRight__1F3VT"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Template/Sandbox/Sandbox.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Template/Sandbox/Sandbox.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\n/***** Color Variables *****/\n/***** Named Colors *****/\n/***** Fonts *****/\n/***** Font Sizes *****/\n/***** Letter Spacing *****/\n/***** Content Widths *****/\n/***** Transition Timings *****/\n/***** Shadows *****/\n/* source: https://brumm.af/shadows */\n/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\n.Sandbox_sandbox__13XBh {\n  display: block;\n  width: 100%;\n  padding: 0px 0; }\n  .Sandbox_sandbox__13XBh .Sandbox_content__1SEyy {\n    background-color: #D1D3D4;\n    padding: 25px 35px 35px;\n    width: 100%;\n    border-radius: 50px;\n    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07); }\n  .Sandbox_sandbox__13XBh .Sandbox_title__Q86aV {\n    font-size: 12px;\n    margin-bottom: 15px;\n    display: block; }\n  .Sandbox_sandbox__13XBh .Sandbox_inner__1FyGs {\n    padding: 35px;\n    width: 100%;\n    height: 100%;\n    border: 2px dashed #212121;\n    min-height: 500px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap; }\n", "",{"version":3,"sources":["webpack://../../../styles/vars.scss","webpack://Sandbox.module.scss","webpack://../../../styles/mixins.scss"],"names":[],"mappings":"AAAA;;;;;;kDCMkD;ADGlD,4BAAA;AAUC,yBAAA;AASD,kBAAA;AAKA,uBAAA;AAMA,2BAAA;AAIA,2BAAA;AAMA,+BAAA;AAMA,oBAAA;AAEC,qCAAA;AEzDD;;;;;;;kDDuBkD;AApBlD;EACC,cAAc;EACd,WAAW;EACX,cAAc,EAAA;EAHf;IAME,yBDQkB;ICPlB,uBAAwB;IACxB,WAAW;IAEX,mBAAmB;IACnB,kODkDgC,EAAA;EC7DlC;IAeE,eAAe;IACf,mBAAmB;IACnB,cAAc,EAAA;EAjBhB;IAqBE,aAAa;IACb,WAAW;IACX,YAAY;IACZ,0BDjBgB;ICkBhB,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe,EAAA","sourcesContent":["/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\r\n\r\n\r\n/***** Color Variables *****/\r\n\t$black: \t\t#212121;\r\n\t$white: \t\t#fafafa;\r\n\t$grey_1:\t\t#ececec;\r\n\t$grey_2:\t\t#3e3e3e;\r\n\r\n\t$red: \t\t\t#fb0000;\r\n\t\r\n\t$nasa_grey:\t#D1D3D4;\r\n\r\n\t/***** Named Colors *****/\r\n\t\t$primary_color:\t\t$black;\r\n\t\t$secondary_color:\t\t$white;\r\n\r\n\t\t$background_color:\t$white;\r\n\t\t$text_color:\t\t\t$black;\r\n\t\t$accent_color:\t\t$grey_1;\r\n\r\n\r\n/***** Fonts *****/\r\n\t$font_body:\t\t\"MyUnderwood\";\r\n\t$font_display:\t\"AncientMedium\";\r\n\t$font_alt:\t\t\t\"ImpactLabel\";\r\n\r\n/***** Font Sizes *****/\r\n\t$font_size_heading:\t65px;\r\n\t$font_size_subhead:\t36px;\r\n\t$font_size_body:\t\t20px;\r\n\t$font_size_detail:\t16px;\r\n\r\n/***** Letter Spacing *****/\r\n\t$letterSpacingWide:\t\t0.035em;\r\n\t$letterSpacingNormal:\t0.035em;\r\n\r\n/***** Content Widths *****/\r\n\t$content_width_s: \t650px;\r\n\t$content_width_m: \t920px;\r\n\t$content_width_l: \t1450px;\r\n\r\n\r\n/***** Transition Timings *****/\r\n\t$transition_fast:\t\t0.1s ease-in-out;\r\n\t$transition_medium:\t0.25s ease-in-out;\r\n\t$transition_slow:\t\t0.5s ease-in-out;\r\n\r\n\r\n/***** Shadows *****/\r\n\r\n\t/* source: https://brumm.af/shadows */\r\n\t$nice_shadow:\r\n\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.02),\r\n\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.028),\r\n\t\t0 12.5px 10px rgba(0, 0, 0, 0.035),\r\n\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.042),\r\n\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.05),\r\n\t\t0 100px 80px rgba(0, 0, 0, 0.07);\r\n\r\n\r\n\t$text-shadow-red:\r\n\t\t1px 1px $red, \r\n\t\t2px 2px $red, \r\n\t\t3px 3px $red, \r\n\t\t4px 4px $red, \r\n\t\t5px 5px $red;\r\n\t  \r\n\t$text-glow-red:\r\n\t\t0 0 1vw $red, \r\n\t\t0 0 3vw $red, \r\n\t\t0 0 10vw $red, \r\n\t\t0 0 10vw $red, \r\n\t\t0 0 .4vw $red, \r\n\t\t.25vw .25vw .1vw #806914;\r\n","/**************************************************\r\nVARS File\r\n\r\nDescription:\tStore SCSS vars here\r\n\r\n\r\n**************************************************/\n/***** Color Variables *****/\n/***** Named Colors *****/\n/***** Fonts *****/\n/***** Font Sizes *****/\n/***** Letter Spacing *****/\n/***** Content Widths *****/\n/***** Transition Timings *****/\n/***** Shadows *****/\n/* source: https://brumm.af/shadows */\n/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\n.sandbox {\n  display: block;\n  width: 100%;\n  padding: 0px 0; }\n  .sandbox .content {\n    background-color: #D1D3D4;\n    padding: 25px 35px 35px;\n    width: 100%;\n    border-radius: 50px;\n    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07); }\n  .sandbox .title {\n    font-size: 12px;\n    margin-bottom: 15px;\n    display: block; }\n  .sandbox .inner {\n    padding: 35px;\n    width: 100%;\n    height: 100%;\n    border: 2px dashed #212121;\n    min-height: 500px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap; }\n","/**************************************************\r\nMIXINS File\r\n\r\nDescription:\tStore SCSS mixins here\r\n\r\nCall: @include backgroundStandard;\r\n\r\n**************************************************/\r\n\r\n\r\n@mixin flex_center {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n@mixin backgroundStandard {\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n\r\n@mixin solidShadowHover {\r\n\t&:hover{\r\n\t\ttext-shadow: $text-shadow-red;\r\n\t}\r\n}\r\n\r\n@mixin maxWidth($maxWidth) {\r\n\twidth: 100%;\r\n\tmax-width: $maxWidth;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n@mixin paperTexture{\r\n\t&:after{\r\n\t\tcontent:'';\r\n\t\tposition: absolute;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\topacity: .5;\r\n\t\tpointer-events: none;\r\n\t\tbackground-image: url('/img/textures/natural-paper.png');\r\n\t\tbackground-repeat: repeat;\r\n\t\t//mix-blend-mode: lighten;\r\n\t\t//filter: contrast(1.5);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sandbox": "Sandbox_sandbox__13XBh",
	"content": "Sandbox_content__1SEyy",
	"title": "Sandbox_title__Q86aV",
	"inner": "Sandbox_inner__1FyGs"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/to-base-64.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.toBase64 = toBase64;
/**
* Isomorphic base64 that works on the server and client
*/

function toBase64(str) {
  if (false) {} else {
    return window.btoa(str);
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/image-config.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.imageConfigDefault=exports.VALID_LOADERS=void 0;const VALID_LOADERS=['default','imgix','cloudinary','akamai'];exports.VALID_LOADERS=VALID_LOADERS;const imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:'/_next/image',loader:'default',domains:[]};exports.imageConfigDefault=imageConfigDefault;
//# sourceMappingURL=image-config.js.map

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return Ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return Xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return Je; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.2.1",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:undefined;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?undefined:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.2.1"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return true?__webpack_require__.nc:undefined},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.2.1");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(void 0!==i&&0!==a.length){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.2.1"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&false,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s.length)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&ae.includes(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ue)||he}function me(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(de)||pe}function ye(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(e.children):undefined))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(S(t[i])?s.push.apply(s,e(t[i],i)):b(t[i])?s.push(be(i)+":",t[i],";"):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(),Ie.has(n)||(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}}},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(xe(i))for(var a in i)Ve(a)&&Be(e,i[a],a)}return e}var ze=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),Le=ze.Consumer;function Ge(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.2.1"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Oe(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:undefined),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"]):!N||Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Pe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return j(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(i)),u=new He(i,a);function l(e){var t=fe(),n=me(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(l)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),s=Te(o);return new ve(s,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.2.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.2.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),i=e.defaultProps,a=Oe(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Xe=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze)},Ze={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./pages/CellGrid.js":
/*!***************************!*\
  !*** ./pages/CellGrid.js ***!
  \***************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Template/Header/Header */ "./components/Template/Header/Header.js");
/* harmony import */ var _components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Template/Container/Container */ "./components/Template/Container/Container.js");
/* harmony import */ var _components_Template_Sandbox_Sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Template/Sandbox/Sandbox */ "./components/Template/Sandbox/Sandbox.js");
/* harmony import */ var _components_Template_ComponentMeta_ComponentMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Template/ComponentMeta/ComponentMeta */ "./components/Template/ComponentMeta/ComponentMeta.js");
/* harmony import */ var _components_Template_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Template/Footer/Footer */ "./components/Template/Footer/Footer.js");
/* harmony import */ var _components_CellGrid_CellGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/CellGrid/CellGrid */ "./components/CellGrid/CellGrid.js");


var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\pages\\CellGrid.js";
//IMPORTS
//import Head from '@components/Head/Head'






 //VARS

var __N_SSG = true;
function Home(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Necro Cult Zine Component"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Holy Mountain Component Demo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_ComponentMeta_ComponentMeta__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: props.title,
          author: props.author,
          authorTeam: props.authorTeam,
          description: props.description,
          contentProps: props.contentProps,
          libraries: props.libraries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_Sandbox_Sandbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CellGrid_CellGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          columns: "3",
          cellInnerWidth: "450px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      footerMessage: props.footerMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FCellGrid&absolutePagePath=D%3A%5CDev%5CPersonal%20Sites%5CNecro%20Cult%20Zine%20React%5CGit%20Folder%201%5Cnecrocult-nextjs%5Cpages%5CCellGrid.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DZWxsR3JpZC9DZWxsR3JpZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DZWxsR3JpZC9DZWxsR3JpZC5tb2R1bGUuc2Nzcz84OTRkIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9NYXN0ZXJDU1MvTWFzdGVyQ1NTLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9NYXN0ZXJKUy9NYXN0ZXJKUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9Db21wb25lbnRNZXRhL0NvbXBvbmVudE1ldGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVtcGxhdGUvQ29tcG9uZW50TWV0YS9Db21wb25lbnRNZXRhLm1vZHVsZS5zY3NzP2YwMGQiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVtcGxhdGUvQ29udGFpbmVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9Db250YWluZXIvQ29udGFpbmVyLm1vZHVsZS5zY3NzPzI5YTgiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVtcGxhdGUvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9Gb290ZXIvRm9vdGVyLm1vZHVsZS5zY3NzPzViZWQiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVtcGxhdGUvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzPzg5YTYiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVtcGxhdGUvU2FuZGJveC9TYW5kYm94LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RlbXBsYXRlL1NhbmRib3gvU2FuZGJveC5tb2R1bGUuc2Nzcz9mNjA0Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DZWxsR3JpZC9DZWxsR3JpZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9Db21wb25lbnRNZXRhL0NvbXBvbmVudE1ldGEubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVtcGxhdGUvQ29udGFpbmVyL0NvbnRhaW5lci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9Gb290ZXIvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RlbXBsYXRlL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVtcGxhdGUvU2FuZGJveC9TYW5kYm94Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL3dlYnBhY2svaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvYW1wLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQudHN4Iiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3NpZGUtZWZmZWN0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LnRzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9kaXN0L3N0eWxlZC1jb21wb25lbnRzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9DZWxsR3JpZC5qcyJdLCJuYW1lcyI6WyJDZWxsIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJjb2x1bW5zIiwicGFkZGluZyIsImNlbGxJbm5lcldpZHRoIiwiQ2VsbEdyaWQiLCJzdHlsZXMiLCJjZWxsR3JpZCIsImNlbGwiLCJpbm5lciIsIk1hc3RlckNTUyIsIk1hc3RlckpTIiwiQ29tcG9uZW50TWV0YSIsInRpdGxlIiwiYXV0aG9yIiwiYXV0aG9yVGVhbSIsImRlc2NyaXB0aW9uIiwiY29udGVudFByb3BzIiwibGlicmFyaWVzIiwiZGVzY3JpcHRpb25XcmFwcGVyIiwicm93IiwiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJjb250YWluZXJTaXplIiwiZmxleCIsImNvbnRhaW5lciIsIkZvb3RlciIsImZvb3Rlck1lc3NhZ2UiLCJmb290ZXIiLCJmb290ZXJfbWVzc2FnZSIsIkhlYWRlciIsImhlYWRlciIsImNvbnRlbnRMZWZ0IiwiY29udGVudFJpZ2h0IiwiU2FuZGJveCIsInNhbmRib3giLCJjb250ZW50IiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwic2l6ZXMiLCJsYXlvdXQiLCJwZXJjZW50U2l6ZXMiLCJtIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIndpZHRocyIsInMiLCJraW5kIiwid2lkdGgiLCJ3IiwicCIsInNyYyIsInNyY1NldCIsImdldFdpZHRocyIsImxhc3QiLCJxdWFsaXR5IiwiaSIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwiaGVpZ2h0IiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJzZXRSZWYiLCJlbCIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIkFtcFN0YXRlQ29udGV4dCIsIlJlYWN0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsImlzSW5BbXBNb2RlIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiaW5BbXBNb2RlIiwiaGVhZCIsImNoaWxkIiwibGlzdCIsImZyYWdtZW50TGlzdCIsIk1FVEFUWVBFUyIsImtleXMiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJrZXkiLCJsZW4iLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJoZWFkRWxlbWVudCIsImRlZmF1bHRIZWFkIiwidW5pcXVlIiwiYyIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJIZWFkIiwiaXNTZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsIl9oYXNIZWFkTWFuYWdlciIsImVtaXRDaGFuZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiQ29tcG9uZW50Iiwid2luZG93IiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFDWSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxPQUFOLElBQWlCLEdBQXJCO0FBQUEsQ0FEakIsRUFFRSxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxPQUFOLElBQWlCLE1BQXJCO0FBQUEsQ0FGUCxFQUtLLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNHLGNBQU4sSUFBd0IsT0FBNUI7QUFBQSxDQUxWLENBQVY7S0FBTU4sSTtBQWdCUyxTQUFTTyxRQUFULE9BR1o7QUFBQSxNQUZESCxPQUVDLFFBRkRBLE9BRUM7QUFBQSxNQURERSxjQUNDLFFBRERBLGNBQ0M7QUFDRCxzQkFDQztBQUFLLGFBQVMsRUFBRUUsNERBQU0sQ0FBQ0MsUUFBdkI7QUFBQSw0QkFFQSxxRUFBQyxJQUFEO0FBQ0UsZUFBUyxFQUFFRCw0REFBTSxDQUFDRSxJQURwQjtBQUVFLGFBQU8sRUFBRU4sT0FGWDtBQUdFLG9CQUFjLEVBQUVFLGNBSGxCO0FBQUEsNkJBS1M7QUFBSyxpQkFBUyxFQUFFRSw0REFBTSxDQUFDRyxLQUFQLEdBQWMsUUFBOUI7QUFBd0Msc0JBQWMs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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLDJEQUEyRCxTQUFTO0FBQ3BFLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFD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QUNBLHlCQUF5Qjs7QUFFekIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztB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Ijoic3RhdGljL2NodW5rcy9wYWdlcy9DZWxsR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9DZWxsR3JpZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENlbGwgPSBzdHlsZWQuZGl2YFxyXG5cdHdpZHRoOiBjYWxjKDEwMCUgLyAke3Byb3BzID0+IHByb3BzLmNvbHVtbnMgfHwgXCIzXCJ9KTsgXHJcblx0cGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nIHx8IFwiMjVweFwifTtcclxuXHJcblx0LmlubmVye1xyXG5cdFx0bWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLmNlbGxJbm5lcldpZHRoIHx8IFwiNDUwcHhcIn07XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjAwcHgpIHsgXHJcblx0ICBcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuICB9XHJcblxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbGxHcmlkKHsgXHJcbiAgY29sdW1ucyxcclxuICBjZWxsSW5uZXJXaWR0aCxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgXHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGxHcmlkfSA+XHJcbiAgXHRcdFxyXG5cdCAgPENlbGwgXHJcblx0ICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9XHJcblx0ICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcblx0ICAgIGNlbGxJbm5lcldpZHRoPXtjZWxsSW5uZXJXaWR0aH1cclxuXHQgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lciArJyBpbm5lcid9IGNlbGxJbm5lcldpZHRoPXtjZWxsSW5uZXJXaWR0aH0+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHQgIDwvQ2VsbD5cclxuXHJcblx0ICA8Q2VsbCBcclxuXHQgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH1cclxuXHQgICAgY29sdW1ucz17Y29sdW1uc31cclxuXHQgICAgY2VsbElubmVyV2lkdGg9e2NlbGxJbm5lcldpZHRofVxyXG5cdCAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyICsnIGlubmVyJ30gY2VsbElubmVyV2lkdGg9e2NlbGxJbm5lcldpZHRofT5cclxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgPC9DZWxsPlxyXG5cclxuXHQgIDxDZWxsIFxyXG5cdCAgICBjbGFzc05hbWU9e3N0eWxlcy5jZWxsfVxyXG5cdCAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG5cdCAgICBjZWxsSW5uZXJXaWR0aD17Y2VsbElubmVyV2lkdGh9XHJcblx0ICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXIgKycgaW5uZXInfSBjZWxsSW5uZXJXaWR0aD17Y2VsbElubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0ICA8L0NlbGw+XHJcblxyXG5cdDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NlbGxHcmlkLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9DZWxsR3JpZC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NlbGxHcmlkLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbk1hc3RlckNTUyBcdFxyXG5cdFxyXG5cdC1cdExpbmsgYWxsIEpTIGZpbGVzIGluIGRlc2lyZWQgb3JkZXIsIFxyXG5cdFx0dGhlbiBhZGQgdGhpcyBjb21wb25lbnQgdG8gdGhlIGVuZCBvZiBcclxuXHRcdHlvdXIgZ2xvYmFsIGxheW91dCwgc28gYWxsIEpTIGlzIGxvYWRlZCBsYXN0LlxyXG5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFzdGVyQ1NTKHsgXHJcbiAgLy9wYWdlIHZhcnNcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgXHQ8PlxyXG4gIFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjMvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLWlCQlhtOGZXOTArbnVMY1NLbGJtclBjTGEwT1Q5MnhPMUJJc1oreXdEV1pDdnFzV2djY1YzZ0ZvUkJ2MHorOGRMSmd5QUhJaFIzNVZaYzJvTS9nSTF3PT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgXHQ8Lz5cclxuICApXHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuTWFzdGVySlMgXHRcclxuXHRcclxuXHQtXHRMaW5rIGFsbCBKUyBmaWxlcyBpbiBkZXNpcmVkIG9yZGVyLCBcclxuXHRcdHRoZW4gYWRkIHRoaXMgY29tcG9uZW50IHRvIHRoZSBlbmQgb2YgXHJcblx0XHR5b3VyIGdsb2JhbCBsYXlvdXQsIHNvIGFsbCBKUyBpcyBsb2FkZWQgbGFzdC5cclxuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hc3RlckpTKHsgXHJcbiAgLy9wYWdlIHZhcnNcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgXHQ8PlxyXG4gIFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhNTEyLTg5NFlFNlFXRDVJNTlIZ1pPR1JlRlltNGRuV2MxUXQ1TnR2WVNhTmNPUCt1MVQ5cVlkdmRpaHowUFBTaWlxbi8rLzNlN0pvNEVhRzdUdWJmV0dVck1RPT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG5cclxuICBcdFx0PHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9oZWFkcm9vbS8wLjEyLjAvaGVhZHJvb20ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhNTEyLTlVc3JLVFl6UzlzbURtMkU1OE1MczBBQ3RPa2krVUM0YkJxNGlLNXdpN2xKeWN3cWNhaUh4cjFiZEVzSVZvSzBsNVNURXpMVWRZeURkRlE1T0VqY3p3PT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gIFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2hlYWRyb29tLzAuMTIuMC9qUXVlcnkuaGVhZHJvb20ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhNTEyLTN6eE5JbUVoUTJwbk9TSGR5R0NDSmhwTXJVMzVqN1Vnbmx5Y1Uvc0xuYnNkbWNIK3BYbTliUjlodHU2cDZnZ3F4NmI1VkVLZWluYWpLRHBVVzdMdVRRPT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG5cclxuICBcdFx0PHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4zL2pzL3NvbGlkLm1pbi5qc1wiIGludGVncml0eT1cInNoYTUxMi1RYytjQk10LzQvS1hKMUY2bk5RYWhYSXNnUHlnSE00UzJYV0Nob3VtVjhxa3BaOW9PK2dCREJFcE94Z2JrUVEvNkRsSHg2Y1V4YTVuQmhFYnVpUjh4dz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuXHJcbiAgXHRcdDxzY3JpcHQgc3JjPVwiL3NjcmlwdHMvbWFpbi5qc1wiPjwvc2NyaXB0PlxyXG4gIFx0PC8+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21wb25lbnRNZXRhLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50TWV0YSh7IFxyXG4gIHRpdGxlLFxyXG4gIGF1dGhvcixcclxuICBhdXRob3JUZWFtLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGNvbnRlbnRQcm9wcyxcclxuICBsaWJyYXJpZXMsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb25XcmFwcGVyfT5cclxuICBcdFxyXG5cclxuXHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGwgKycgJysgc3R5bGVzLnRpdGxlfT5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17c3R5bGVzLmlubmVyfT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG5cdFx0XHRcdFx0PHNwYW4+Q29tcG9uZW50Ojwvc3Bhbj4gXHJcblx0XHRcdFx0XHR7dGl0bGV9XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT5cclxuXHRcdFx0XHRcdDxzcGFuPkRldmVsb3Blcjo8L3NwYW4+IFxyXG5cdFx0XHRcdFx0e2F1dGhvcn08YnIvPlxyXG5cdFx0XHRcdFx0e2F1dGhvclRlYW19XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsICsnICcrIHN0eWxlcy5kZXNjcmlwdGlvbn0+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuXHRcdFx0XHRcdDxzcGFuPkRlc2NyaXB0aW9uOjwvc3Bhbj4gXHJcblx0XHRcdFx0XHR7ZGVzY3JpcHRpb259XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGwgKycgJysgc3R5bGVzLmNvbnRlbnRQcm9wc30+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLnByb3BzfT5cclxuXHRcdFx0XHRcdDxzcGFuPkF2YWlsYWJsZSBQcm9wczo8L3NwYW4+IFxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0e2NvbnRlbnRQcm9wc31cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsICsnICcrIHN0eWxlcy5saWJyYXJpZXN9PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saWJyYXJpZXN9PlxyXG5cdFx0XHRcdFx0PHNwYW4+TGlicmFyaWVzIFVzZWQ6PC9zcGFuPiBcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdHtsaWJyYXJpZXN9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuICAgIFxyXG4gICAgXHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ29tcG9uZW50TWV0YS5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ29tcG9uZW50TWV0YS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NvbXBvbmVudE1ldGEubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhaW5lci5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcih7IFxyXG5cdGNoaWxkcmVuLFxyXG5cdGNvbnRhaW5lclNpemUsIFxyXG5cdGZsZXgsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5jb250YWluZXIgKyAoZmxleCA/ICcgJytzdHlsZXMuZmxleDogJycpIH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Db250YWluZXIubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NvbnRhaW5lci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NvbnRhaW5lci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTWFzdGVySlMgZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0L01hc3RlckpTL01hc3RlckpTJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHsgZm9vdGVyTWVzc2FnZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcl9tZXNzYWdlfT57Zm9vdGVyTWVzc2FnZX08L3A+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgPE1hc3RlckpTLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0Zvb3Rlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9vdGVyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9vdGVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQGNvbXBvbmVudHMvVGVtcGxhdGUvQ29udGFpbmVyL0NvbnRhaW5lcidcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbXBvcnQgTWFzdGVyQ1NTIGZyb20gJ0Bjb21wb25lbnRzL0xheW91dC9NYXN0ZXJDU1MvTWFzdGVyQ1NTJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgXHQ8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgXHQgIDxNYXN0ZXJDU1MvPlxyXG4gIFx0ICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgXHQgICAgXHJcbiAgXHQgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50TGVmdH0+XHJcbiAgICAgICAgICAgICAgXHJcbiAgXHQgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJvbGRfZW5nbGlzaFwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gIFx0ICAgIDwvZGl2PlxyXG4gIFxyXG4gIFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudFJpZ2h0fT5cclxuICBcdCAgICAgIFxyXG4gIFx0ICAgIDwvZGl2PlxyXG4gIFx0ICAgIFxyXG4gIFx0ICA8L0NvbnRhaW5lcj5cclxuICBcdDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0hlYWRlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vSGVhZGVyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vSGVhZGVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9TYW5kYm94Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0Bjb21wb25lbnRzL1RlbXBsYXRlL0NvbnRhaW5lci9Db250YWluZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYW5kYm94KHsgXHJcblx0Y2hpbGRyZW4sIFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uICBjbGFzc05hbWU9e3N0eWxlcy5zYW5kYm94fT5cclxuICAgICAgXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Q29tcG9uZW50IFNhbmRib3g8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgIFxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1NhbmRib3gubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1NhbmRib3gubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9TYW5kYm94Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdERlc3RydWN0dXJpbmdFbXB0eShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGRlc3RydWN0dXJlIHVuZGVmaW5lZFwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpbmRleCA9IG1lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiZnVuY3Rpb24gc3R5bGlzX21pbiAoVykge1xuICBmdW5jdGlvbiBNKGQsIGMsIGUsIGgsIGEpIHtcbiAgICBmb3IgKHZhciBtID0gMCwgYiA9IDAsIHYgPSAwLCBuID0gMCwgcSwgZywgeCA9IDAsIEsgPSAwLCBrLCB1ID0gayA9IHEgPSAwLCBsID0gMCwgciA9IDAsIEkgPSAwLCB0ID0gMCwgQiA9IGUubGVuZ3RoLCBKID0gQiAtIDEsIHksIGYgPSAnJywgcCA9ICcnLCBGID0gJycsIEcgPSAnJywgQzsgbCA8IEI7KSB7XG4gICAgICBnID0gZS5jaGFyQ29kZUF0KGwpO1xuICAgICAgbCA9PT0gSiAmJiAwICE9PSBiICsgbiArIHYgKyBtICYmICgwICE9PSBiICYmIChnID0gNDcgPT09IGIgPyAxMCA6IDQ3KSwgbiA9IHYgPSBtID0gMCwgQisrLCBKKyspO1xuXG4gICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICBpZiAobCA9PT0gSiAmJiAoMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKSwgMCA8IGYudHJpbSgpLmxlbmd0aCkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBmICs9IGUuY2hhckF0KGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGcgPSA1OTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgZiA9IGYudHJpbSgpO1xuICAgICAgICAgICAgcSA9IGYuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBmb3IgKHQgPSArK2w7IGwgPCBCOykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgICBrLS07XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gbCArIDE7IHUgPCBKOyArK3UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmNoYXJDb2RlQXQodSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQyID09PSBnICYmIDQyID09PSBlLmNoYXJDb2RlQXQodSAtIDEpICYmIGwgKyAyICE9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQ3ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgZm9yICg7IGwrKyA8IEogJiYgZS5jaGFyQ29kZUF0KGwpICE9PSBnOykge1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoMCA9PT0gaykgYnJlYWs7XG4gICAgICAgICAgICAgIGwrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgayA9IGUuc3Vic3RyaW5nKHQsIGwpO1xuICAgICAgICAgICAgMCA9PT0gcSAmJiAocSA9IChmID0gZi5yZXBsYWNlKGNhLCAnJykudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgICAgICAgICAgc3dpdGNoIChxKSB7XG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKTtcbiAgICAgICAgICAgICAgICBnID0gZi5jaGFyQ29kZUF0KDEpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICByID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBPO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIHIsIGssIGcsIGEgKyAxKTtcbiAgICAgICAgICAgICAgICB0ID0gay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgMCA8IEEgJiYgKHIgPSBYKE8sIGYsIEkpLCBDID0gSCgzLCBrLCByLCBjLCBELCB6LCB0LCBnLCBhLCBoKSwgZiA9IHIuam9pbignJyksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAodCA9IChrID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGcgPSAwLCBrID0gJycpKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA8IHQpIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZGEsIGVhKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGZhLCAnJDEgJDInKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBrID0gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoJ0AnICsgaywgMykgPyAnQC13ZWJraXQtJyArIGsgKyAnQCcgKyBrIDogJ0AnICsgaztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgaywgMTEyID09PSBoICYmIChrID0gKHAgKz0gaywgJycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgayA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgayA9IE0oYywgWChjLCBmLCBJKSwgaywgaCwgYSArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGICs9IGs7XG4gICAgICAgICAgICBrID0gSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBmID0gKDAgPCByID8gZi5yZXBsYWNlKE4sICcnKSA6IGYpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICgxIDwgKHQgPSBmLmxlbmd0aCkpIHN3aXRjaCAoMCA9PT0gdSAmJiAocSA9IGYuY2hhckNvZGVBdCgwKSwgNDUgPT09IHEgfHwgOTYgPCBxICYmIDEyMyA+IHEpICYmICh0ID0gKGYgPSBmLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGgpLCAwIDwgQSAmJiB2b2lkIDAgIT09IChDID0gSCgxLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCkpICYmIDAgPT09ICh0ID0gKGYgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZiA9ICdcXHgwMFxceDAwJyksIHEgPSBmLmNoYXJDb2RlQXQoMCksIGcgPSBmLmNoYXJDb2RlQXQoMSksIHEpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgaWYgKDEwNSA9PT0gZyB8fCA5OSA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgRyArPSBmICsgZS5jaGFyQXQobCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICA1OCAhPT0gZi5jaGFyQ29kZUF0KHQgLSAxKSAmJiAocCArPSBQKGYsIHEsIGcsIGYuY2hhckNvZGVBdCgyKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgNDcgPT09IGIgPyBiID0gMCA6IDAgPT09IDEgKyBxICYmIDEwNyAhPT0gaCAmJiAwIDwgZi5sZW5ndGggJiYgKHIgPSAxLCBmICs9ICdcXHgwMCcpO1xuICAgICAgICAgIDAgPCBBICogWSAmJiBIKDAsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKTtcbiAgICAgICAgICB6ID0gMTtcbiAgICAgICAgICBEKys7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgICAgIHorKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHorKztcbiAgICAgICAgICB5ID0gZS5jaGFyQXQobCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgbSArIGIpIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgIHkgPSAnJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIDMyICE9PSBnICYmICh5ID0gJyAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFwwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXGYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcdic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHIgPSBJID0gMSwgeSA9ICdcXGYnICsgeSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSArIEUgJiYgMCA8IHUpIHN3aXRjaCAobCAtIHUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAxMTIgPT09IHggJiYgNTggPT09IGUuY2hhckNvZGVBdChsIC0gMykgJiYgKEUgPSB4KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgIDExMSA9PT0gSyAmJiAoRSA9IEspO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHUgPSBsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gJiYgKHIgPSAxLCB5ICs9ICdcXHInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAwID09PSBiICYmIChuID0gbiA9PT0gZyA/IDAgOiAwID09PSBuID8gZyA6IG4pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0rKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtLS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgdi0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBxKSBzd2l0Y2ggKDIgKiB4ICsgMyAqIEspIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgNTMzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHYrKztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICsgdSArIGsgJiYgKGsgPSAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICBpZiAoISgwIDwgbiArIG0gKyB2KSkgc3dpdGNoIChiKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgc3dpdGNoICgyICogZyArIDMgKiBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM1OlxuICAgICAgICAgICAgICAgICAgICAgIGIgPSA0NztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgICAgICAgICAgICB0ID0gbCwgYiA9IDQyO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICA0NyA9PT0gZyAmJiA0MiA9PT0geCAmJiB0ICsgMiAhPT0gbCAmJiAoMzMgPT09IGUuY2hhckNvZGVBdCh0ICsgMikgJiYgKHAgKz0gZS5zdWJzdHJpbmcodCwgbCArIDEpKSwgeSA9ICcnLCBiID0gMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAwID09PSBiICYmIChmICs9IHkpO1xuICAgICAgfVxuXG4gICAgICBLID0geDtcbiAgICAgIHggPSBnO1xuICAgICAgbCsrO1xuICAgIH1cblxuICAgIHQgPSBwLmxlbmd0aDtcblxuICAgIGlmICgwIDwgdCkge1xuICAgICAgciA9IGM7XG4gICAgICBpZiAoMCA8IEEgJiYgKEMgPSBIKDIsIHAsIHIsIGQsIEQsIHosIHQsIGgsIGEsIGgpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHAgPSBDKS5sZW5ndGgpKSByZXR1cm4gRyArIHAgKyBGO1xuICAgICAgcCA9IHIuam9pbignLCcpICsgJ3snICsgcCArICd9JztcblxuICAgICAgaWYgKDAgIT09IHcgKiBFKSB7XG4gICAgICAgIDIgIT09IHcgfHwgTChwLCAyKSB8fCAoRSA9IDApO1xuXG4gICAgICAgIHN3aXRjaCAoRSkge1xuICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShoYSwgJzotbW96LSQxJykgKyBwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoUSwgJzo6LXdlYmtpdC1pbnB1dC0kMScpICsgcC5yZXBsYWNlKFEsICc6Oi1tb3otJDEnKSArIHAucmVwbGFjZShRLCAnOi1tcy1pbnB1dC0kMScpICsgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBHICsgcCArIEY7XG4gIH1cblxuICBmdW5jdGlvbiBYKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMudHJpbSgpLnNwbGl0KGlhKTtcbiAgICBjID0gaDtcbiAgICB2YXIgYSA9IGgubGVuZ3RoLFxuICAgICAgICBtID0gZC5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICAgIGZvciAoZCA9IDAgPT09IG0gPyAnJyA6IGRbMF0gKyAnICc7IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBjW2JdID0gWihkLCBjW2JdLCBlKS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHYgPSBiID0gMDtcblxuICAgICAgICBmb3IgKGMgPSBbXTsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbTsgKytuKSB7XG4gICAgICAgICAgICBjW3YrK10gPSBaKGRbbl0gKyAnICcsIGhbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgZnVuY3Rpb24gWihkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgMzMgPiBoICYmIChoID0gKGMgPSBjLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICBzd2l0Y2ggKGgpIHtcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIHJldHVybiBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgY2FzZSA1ODpcbiAgICAgICAgcmV0dXJuIGQudHJpbSgpICsgYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgwIDwgMSAqIGUgJiYgMCA8IGMuaW5kZXhPZignXFxmJykpIHJldHVybiBjLnJlcGxhY2UoRiwgKDU4ID09PSBkLmNoYXJDb2RlQXQoMCkgPyAnJyA6ICckMScpICsgZC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkICsgYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFAoZCwgYywgZSwgaCkge1xuICAgIHZhciBhID0gZCArICc7JyxcbiAgICAgICAgbSA9IDIgKiBjICsgMyAqIGUgKyA0ICogaDtcblxuICAgIGlmICg5NDQgPT09IG0pIHtcbiAgICAgIGQgPSBhLmluZGV4T2YoJzonLCA5KSArIDE7XG4gICAgICB2YXIgYiA9IGEuc3Vic3RyaW5nKGQsIGEubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgYiA9IGEuc3Vic3RyaW5nKDAsIGQpLnRyaW0oKSArIGIgKyAnOyc7XG4gICAgICByZXR1cm4gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoYiwgMSkgPyAnLXdlYmtpdC0nICsgYiArIGIgOiBiO1xuICAgIH1cblxuICAgIGlmICgwID09PSB3IHx8IDIgPT09IHcgJiYgIUwoYSwgMSkpIHJldHVybiBhO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDEwMTU6XG4gICAgICAgIHJldHVybiA5NyA9PT0gYS5jaGFyQ29kZUF0KDEwKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTUxOlxuICAgICAgICByZXR1cm4gMTE2ID09PSBhLmNoYXJDb2RlQXQoMykgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk2MzpcbiAgICAgICAgcmV0dXJuIDExMCA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSAxMDA5OlxuICAgICAgICBpZiAoMTAwICE9PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2OTpcbiAgICAgIGNhc2UgOTQyOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk3ODpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMTk6XG4gICAgICBjYXNlIDk4MzpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA4ODM6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDgpKSByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuICAgICAgICBpZiAoMCA8IGEuaW5kZXhPZignaW1hZ2Utc2V0KCcsIDExKSkgcmV0dXJuIGEucmVwbGFjZShqYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMyOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg0KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNSkpIHtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtJyArIGEucmVwbGFjZSgnLWdyb3cnLCAnJykgKyAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnZ3JvdycsICdwb3NpdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5NjQ6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAyMzpcbiAgICAgICAgaWYgKDk5ICE9PSBhLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuICAgICAgICBiID0gYS5zdWJzdHJpbmcoYS5pbmRleE9mKCc6JywgMTUpKS5yZXBsYWNlKCdmbGV4LScsICcnKS5yZXBsYWNlKCdzcGFjZS1iZXR3ZWVuJywgJ2p1c3RpZnknKTtcbiAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC1wYWNrJyArIGIgKyAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1wYWNrJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMDU6XG4gICAgICAgIHJldHVybiBrYS50ZXN0KGEpID8gYS5yZXBsYWNlKGFhLCAnOi13ZWJraXQtJykgKyBhLnJlcGxhY2UoYWEsICc6LW1vei0nKSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDFlMzpcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKDEzKS50cmltKCk7XG4gICAgICAgIGMgPSBiLmluZGV4T2YoJy0nKSArIDE7XG5cbiAgICAgICAgc3dpdGNoIChiLmNoYXJDb2RlQXQoMCkgKyBiLmNoYXJDb2RlQXQoYykpIHtcbiAgICAgICAgICBjYXNlIDIyNjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjMyOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGItcmwnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICdscicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDE3OlxuICAgICAgICBpZiAoLTEgPT09IGEuaW5kZXhPZignc3RpY2t5JywgOSkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3NTpcbiAgICAgICAgYyA9IChhID0gZCkubGVuZ3RoIC0gMTA7XG4gICAgICAgIGIgPSAoMzMgPT09IGEuY2hhckNvZGVBdChjKSA/IGEuc3Vic3RyaW5nKDAsIGMpIDogYSkuc3Vic3RyaW5nKGQuaW5kZXhPZignOicsIDcpICsgMSkudHJpbSgpO1xuXG4gICAgICAgIHN3aXRjaCAobSA9IGIuY2hhckNvZGVBdCgwKSArIChiLmNoYXJDb2RlQXQoNykgfCAwKSkge1xuICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgaWYgKDExMSA+IGIuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMDc6XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyAoMTAyIDwgbSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gnKSArICc7JyArIGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy1tcy0nICsgYiArICdib3gnKSArICc7JyArIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYSArICc7JztcblxuICAgICAgY2FzZSA5Mzg6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDUpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg2KSkge1xuICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgcmV0dXJuIGIgPSBhLnJlcGxhY2UoJy1pdGVtcycsICcnKSwgJy13ZWJraXQtJyArIGEgKyAnLXdlYmtpdC1ib3gtJyArIGIgKyAnLW1zLWZsZXgtJyArIGIgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtaXRlbS0nICsgYS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1saW5lLXBhY2snICsgYS5yZXBsYWNlKCdhbGlnbi1jb250ZW50JywgJycpLnJlcGxhY2UoYmEsICcnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTczOlxuICAgICAgY2FzZSA5ODk6XG4gICAgICAgIGlmICg0NSAhPT0gYS5jaGFyQ29kZUF0KDMpIHx8IDEyMiA9PT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5MzE6XG4gICAgICBjYXNlIDk1MzpcbiAgICAgICAgaWYgKCEwID09PSBsYS50ZXN0KGQpKSByZXR1cm4gMTE1ID09PSAoYiA9IGQuc3Vic3RyaW5nKGQuaW5kZXhPZignOicpICsgMSkpLmNoYXJDb2RlQXQoMCkgPyBQKGQucmVwbGFjZSgnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBjLCBlLCBoKS5yZXBsYWNlKCc6ZmlsbC1hdmFpbGFibGUnLCAnOnN0cmV0Y2gnKSA6IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyBhLnJlcGxhY2UoYiwgJy1tb3otJyArIGIucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTYyOlxuICAgICAgICBpZiAoYSA9ICctd2Via2l0LScgKyBhICsgKDEwMiA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy1tcy0nICsgYSA6ICcnKSArIGEsIDIxMSA9PT0gZSArIGggJiYgMTA1ID09PSBhLmNoYXJDb2RlQXQoMTMpICYmIDAgPCBhLmluZGV4T2YoJ3RyYW5zZm9ybScsIDEwKSkgcmV0dXJuIGEuc3Vic3RyaW5nKDAsIGEuaW5kZXhPZignOycsIDI3KSArIDEpLnJlcGxhY2UobWEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBmdW5jdGlvbiBMKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQuaW5kZXhPZigxID09PSBjID8gJzonIDogJ3snKSxcbiAgICAgICAgaCA9IGQuc3Vic3RyaW5nKDAsIDMgIT09IGMgPyBlIDogMTApO1xuICAgIGUgPSBkLnN1YnN0cmluZyhlICsgMSwgZC5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gUigyICE9PSBjID8gaCA6IGgucmVwbGFjZShuYSwgJyQxJyksIGUsIGMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWEoZCwgYykge1xuICAgIHZhciBlID0gUChjLCBjLmNoYXJDb2RlQXQoMCksIGMuY2hhckNvZGVBdCgxKSwgYy5jaGFyQ29kZUF0KDIpKTtcbiAgICByZXR1cm4gZSAhPT0gYyArICc7JyA/IGUucmVwbGFjZShvYSwgJyBvciAoJDEpJykuc3Vic3RyaW5nKDQpIDogJygnICsgYyArICcpJztcbiAgfVxuXG4gIGZ1bmN0aW9uIEgoZCwgYywgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkge1xuICAgIGZvciAodmFyIGcgPSAwLCB4ID0gYywgdzsgZyA8IEE7ICsrZykge1xuICAgICAgc3dpdGNoICh3ID0gU1tnXS5jYWxsKEIsIGQsIHgsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpKSB7XG4gICAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgICBjYXNlICExOlxuICAgICAgICBjYXNlICEwOlxuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB4ID0gdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gYykgcmV0dXJuIHg7XG4gIH1cblxuICBmdW5jdGlvbiBUKGQpIHtcbiAgICBzd2l0Y2ggKGQpIHtcbiAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBBID0gUy5sZW5ndGggPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkKSBTW0ErK10gPSBkO2Vsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgZCkgZm9yICh2YXIgYyA9IDAsIGUgPSBkLmxlbmd0aDsgYyA8IGU7ICsrYykge1xuICAgICAgICAgIFQoZFtjXSk7XG4gICAgICAgIH0gZWxzZSBZID0gISFkIHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFUoZCkge1xuICAgIGQgPSBkLnByZWZpeDtcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xuICAgIHJldHVybiBVO1xuICB9XG5cbiAgZnVuY3Rpb24gQihkLCBjKSB7XG4gICAgdmFyIGUgPSBkO1xuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xuICAgIFYgPSBlO1xuICAgIGUgPSBbVl07XG5cbiAgICBpZiAoMCA8IEEpIHtcbiAgICAgIHZhciBoID0gSCgtMSwgYywgZSwgZSwgRCwgeiwgMCwgMCwgMCwgMCk7XG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xuICAgIDAgPCBBICYmIChoID0gSCgtMiwgYSwgZSwgZSwgRCwgeiwgYS5sZW5ndGgsIDAsIDAsIDApLCB2b2lkIDAgIT09IGggJiYgKGEgPSBoKSk7XG4gICAgViA9ICcnO1xuICAgIEUgPSAwO1xuICAgIHogPSBEID0gMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBjYSA9IC9eXFwwKy9nLFxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxuICAgICAgYWEgPSAvOiAqL2csXG4gICAgICBrYSA9IC96b298Z3JhLyxcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxuICAgICAgaWEgPSAvLFxccis/L2csXG4gICAgICBGID0gLyhbXFx0XFxyXFxuIF0pKlxcZj8mL2csXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcbiAgICAgIFEgPSAvOjoocGxhY2UpL2csXG4gICAgICBoYSA9IC86KHJlYWQtb25seSkvZyxcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXG4gICAgICBkYSA9IC9cXChcXHMqKC4qKVxccypcXCkvZyxcbiAgICAgIG9hID0gLyhbXFxzXFxTXSo/KTsvZyxcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXG4gICAgICBuYSA9IC9bXl0qPyg6W3JwXVtlbF1hW1xcdy1dKylbXl0qLyxcbiAgICAgIGxhID0gL3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyxcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcbiAgICAgIHogPSAxLFxuICAgICAgRCA9IDEsXG4gICAgICBFID0gMCxcbiAgICAgIHcgPSAxLFxuICAgICAgTyA9IFtdLFxuICAgICAgUyA9IFtdLFxuICAgICAgQSA9IDAsXG4gICAgICBSID0gbnVsbCxcbiAgICAgIFkgPSAwLFxuICAgICAgViA9ICcnO1xuICBCLnVzZSA9IFQ7XG4gIEIuc2V0ID0gVTtcbiAgdm9pZCAwICE9PSBXICYmIFUoVyk7XG4gIHJldHVybiBCO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXNfbWluO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9DZWxsR3JpZFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkQ6XFxcXERldlxcXFxQZXJzb25hbCBTaXRlc1xcXFxOZWNybyBDdWx0IFppbmUgUmVhY3RcXFxcR2l0IEZvbGRlciAxXFxcXG5lY3JvY3VsdC1uZXh0anNcXFxccGFnZXNcXFxcQ2VsbEdyaWQuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWAke2lkfSAke2NvdW50fWA7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGtleT0+e3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT9gQG1lZGlhICR7b2JqLm1lZGlhfSB7JHtvYmouY3NzfX1gOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9YFxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJHtidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpfSAqL2A7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9KCk9PntyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz0obGlzdCxvcHRpb25zKT0+e29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3QgcGVyY2VudFNpemVzID0gWy4uLnNpemVzLm1hdGNoQWxsKC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nKV0ubWFwKChtKSA9PlxuICAgICAgcGFyc2VJbnQobVsyXSlcbiAgICApXG4gICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoXG4gICAgICAgICAgKHMpID0+IHMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICksXG4gICAgICAgIGtpbmQ6ICd3JyxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBhbGxTaXplcywga2luZDogJ3cnIH1cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuXG4gICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAnaW5oZXJpdCcgOiAnaGlkZGVuJyxcblxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuVkFSUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyB2YXJzIGhlcmVcXHJcXG5cXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKiogQ29sb3IgVmFyaWFibGVzICoqKioqL1xcbi8qKioqKiBOYW1lZCBDb2xvcnMgKioqKiovXFxuLyoqKioqIEZvbnRzICoqKioqL1xcbi8qKioqKiBGb250IFNpemVzICoqKioqL1xcbi8qKioqKiBMZXR0ZXIgU3BhY2luZyAqKioqKi9cXG4vKioqKiogQ29udGVudCBXaWR0aHMgKioqKiovXFxuLyoqKioqIFRyYW5zaXRpb24gVGltaW5ncyAqKioqKi9cXG4vKioqKiogU2hhZG93cyAqKioqKi9cXG4vKiBzb3VyY2U6IGh0dHBzOi8vYnJ1bW0uYWYvc2hhZG93cyAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbk1JWElOUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyBtaXhpbnMgaGVyZVxcclxcblxcclxcbkNhbGw6IEBpbmNsdWRlIGJhY2tncm91bmRTdGFuZGFyZDtcXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5Ib2x5IE1vdW50YWluIEZyYW1ld29yayBDb21wb25lbnRcXHJcXG5cXHJcXG5cXHJcXG5Db21wb25lbnQgTmFtZTogXFx0Q2VsbEdyaWRcXHJcXG5EZXNjcmlwdGlvbjpcXHRcXHRcXHJcXG5cXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uQ2VsbEdyaWRfY2VsbEdyaWRfXzJ2cUtBIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLkNlbGxHcmlkX2NlbGxHcmlkX18ydnFLQSAuQ2VsbEdyaWRfY2VsbF9fVU1sSzgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgICAuQ2VsbEdyaWRfY2VsbEdyaWRfXzJ2cUtBIC5DZWxsR3JpZF9jZWxsX19VTWxLOCAuQ2VsbEdyaWRfaW5uZXJfXzFkSmxoIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvdmFycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vQ2VsbEdyaWQubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7OztrRENNa0Q7QURHbEQsNEJBQUE7QUFVQyx5QkFBQTtBQVNELGtCQUFBO0FBS0EsdUJBQUE7QUFNQSwyQkFBQTtBQUlBLDJCQUFBO0FBTUEsK0JBQUE7QUFNQSxvQkFBQTtBQUVDLHFDQUFBO0FFekREOzs7Ozs7O2tERHVCa0Q7QUFuQmxEOzs7Ozs7OztrREE0QmtEO0FBbEJsRDtFQUNDLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVyxFQUFBO0VBSFo7SUFLRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBO0lBUHpCO01BU0cseUJEWmU7TUNhZixjRGRlO01DZWYsYUFBYTtNQUNiLGFBQWE7TUFDYiwyQkFBMkI7TUFDM0IsbUJBQW1CO01BQ25CLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osV0FBVyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcblZBUlMgRmlsZVxcclxcblxcclxcbkRlc2NyaXB0aW9uOlxcdFN0b3JlIFNDU1MgdmFycyBoZXJlXFxyXFxuXFxyXFxuXFxyXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuXFxyXFxuLyoqKioqIENvbG9yIFZhcmlhYmxlcyAqKioqKi9cXHJcXG5cXHQkYmxhY2s6IFxcdFxcdCMyMTIxMjE7XFxyXFxuXFx0JHdoaXRlOiBcXHRcXHQjZmFmYWZhO1xcclxcblxcdCRncmV5XzE6XFx0XFx0I2VjZWNlYztcXHJcXG5cXHQkZ3JleV8yOlxcdFxcdCMzZTNlM2U7XFxyXFxuXFxyXFxuXFx0JHJlZDogXFx0XFx0XFx0I2ZiMDAwMDtcXHJcXG5cXHRcXHJcXG5cXHQkbmFzYV9ncmV5OlxcdCNEMUQzRDQ7XFxyXFxuXFxyXFxuXFx0LyoqKioqIE5hbWVkIENvbG9ycyAqKioqKi9cXHJcXG5cXHRcXHQkcHJpbWFyeV9jb2xvcjpcXHRcXHQkYmxhY2s7XFxyXFxuXFx0XFx0JHNlY29uZGFyeV9jb2xvcjpcXHRcXHQkd2hpdGU7XFxyXFxuXFxyXFxuXFx0XFx0JGJhY2tncm91bmRfY29sb3I6XFx0JHdoaXRlO1xcclxcblxcdFxcdCR0ZXh0X2NvbG9yOlxcdFxcdFxcdCRibGFjaztcXHJcXG5cXHRcXHQkYWNjZW50X2NvbG9yOlxcdFxcdCRncmV5XzE7XFxyXFxuXFxyXFxuXFxyXFxuLyoqKioqIEZvbnRzICoqKioqL1xcclxcblxcdCRmb250X2JvZHk6XFx0XFx0XFxcIk15VW5kZXJ3b29kXFxcIjtcXHJcXG5cXHQkZm9udF9kaXNwbGF5OlxcdFxcXCJBbmNpZW50TWVkaXVtXFxcIjtcXHJcXG5cXHQkZm9udF9hbHQ6XFx0XFx0XFx0XFxcIkltcGFjdExhYmVsXFxcIjtcXHJcXG5cXHJcXG4vKioqKiogRm9udCBTaXplcyAqKioqKi9cXHJcXG5cXHQkZm9udF9zaXplX2hlYWRpbmc6XFx0NjVweDtcXHJcXG5cXHQkZm9udF9zaXplX3N1YmhlYWQ6XFx0MzZweDtcXHJcXG5cXHQkZm9udF9zaXplX2JvZHk6XFx0XFx0MjBweDtcXHJcXG5cXHQkZm9udF9zaXplX2RldGFpbDpcXHQxNnB4O1xcclxcblxcclxcbi8qKioqKiBMZXR0ZXIgU3BhY2luZyAqKioqKi9cXHJcXG5cXHQkbGV0dGVyU3BhY2luZ1dpZGU6XFx0XFx0MC4wMzVlbTtcXHJcXG5cXHQkbGV0dGVyU3BhY2luZ05vcm1hbDpcXHQwLjAzNWVtO1xcclxcblxcclxcbi8qKioqKiBDb250ZW50IFdpZHRocyAqKioqKi9cXHJcXG5cXHQkY29udGVudF93aWR0aF9zOiBcXHQ2NTBweDtcXHJcXG5cXHQkY29udGVudF93aWR0aF9tOiBcXHQ5MjBweDtcXHJcXG5cXHQkY29udGVudF93aWR0aF9sOiBcXHQxNDUwcHg7XFxyXFxuXFxyXFxuXFxyXFxuLyoqKioqIFRyYW5zaXRpb24gVGltaW5ncyAqKioqKi9cXHJcXG5cXHQkdHJhbnNpdGlvbl9mYXN0OlxcdFxcdDAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0JHRyYW5zaXRpb25fbWVkaXVtOlxcdDAuMjVzIGVhc2UtaW4tb3V0O1xcclxcblxcdCR0cmFuc2l0aW9uX3Nsb3c6XFx0XFx0MC41cyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG5cXHJcXG4vKioqKiogU2hhZG93cyAqKioqKi9cXHJcXG5cXHJcXG5cXHQvKiBzb3VyY2U6IGh0dHBzOi8vYnJ1bW0uYWYvc2hhZG93cyAqL1xcclxcblxcdCRuaWNlX3NoYWRvdzpcXHJcXG5cXHRcXHQwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMiksXFxyXFxuXFx0XFx0MCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDI4KSxcXHJcXG5cXHRcXHQwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMzUpLFxcclxcblxcdFxcdDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSxcXHJcXG5cXHRcXHQwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA1KSxcXHJcXG5cXHRcXHQwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcXHJcXG5cXHJcXG5cXHJcXG5cXHQkdGV4dC1zaGFkb3ctcmVkOlxcclxcblxcdFxcdDFweCAxcHggJHJlZCwgXFxyXFxuXFx0XFx0MnB4IDJweCAkcmVkLCBcXHJcXG5cXHRcXHQzcHggM3B4ICRyZWQsIFxcclxcblxcdFxcdDRweCA0cHggJHJlZCwgXFxyXFxuXFx0XFx0NXB4IDVweCAkcmVkO1xcclxcblxcdCAgXFxyXFxuXFx0JHRleHQtZ2xvdy1yZWQ6XFxyXFxuXFx0XFx0MCAwIDF2dyAkcmVkLCBcXHJcXG5cXHRcXHQwIDAgM3Z3ICRyZWQsIFxcclxcblxcdFxcdDAgMCAxMHZ3ICRyZWQsIFxcclxcblxcdFxcdDAgMCAxMHZ3ICRyZWQsIFxcclxcblxcdFxcdDAgMCAuNHZ3ICRyZWQsIFxcclxcblxcdFxcdC4yNXZ3IC4yNXZ3IC4xdncgIzgwNjkxNDtcXHJcXG5cIixcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcblZBUlMgRmlsZVxcclxcblxcclxcbkRlc2NyaXB0aW9uOlxcdFN0b3JlIFNDU1MgdmFycyBoZXJlXFxyXFxuXFxyXFxuXFxyXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqIENvbG9yIFZhcmlhYmxlcyAqKioqKi9cXG4vKioqKiogTmFtZWQgQ29sb3JzICoqKioqL1xcbi8qKioqKiBGb250cyAqKioqKi9cXG4vKioqKiogRm9udCBTaXplcyAqKioqKi9cXG4vKioqKiogTGV0dGVyIFNwYWNpbmcgKioqKiovXFxuLyoqKioqIENvbnRlbnQgV2lkdGhzICoqKioqL1xcbi8qKioqKiBUcmFuc2l0aW9uIFRpbWluZ3MgKioqKiovXFxuLyoqKioqIFNoYWRvd3MgKioqKiovXFxuLyogc291cmNlOiBodHRwczovL2JydW1tLmFmL3NoYWRvd3MgKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5NSVhJTlMgRmlsZVxcclxcblxcclxcbkRlc2NyaXB0aW9uOlxcdFN0b3JlIFNDU1MgbWl4aW5zIGhlcmVcXHJcXG5cXHJcXG5DYWxsOiBAaW5jbHVkZSBiYWNrZ3JvdW5kU3RhbmRhcmQ7XFxyXFxuXFxyXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuSG9seSBNb3VudGFpbiBGcmFtZXdvcmsgQ29tcG9uZW50XFxyXFxuXFxyXFxuXFxyXFxuQ29tcG9uZW50IE5hbWU6IFxcdENlbGxHcmlkXFxyXFxuRGVzY3JpcHRpb246XFx0XFx0XFxyXFxuXFxyXFxuXFxyXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNlbGxHcmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmNlbGxHcmlkIC5jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gICAgLmNlbGxHcmlkIC5jZWxsIC5pbm5lciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gICAgICBjb2xvcjogIzIxMjEyMTtcXG4gICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG5cIixcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbk1JWElOUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyBtaXhpbnMgaGVyZVxcclxcblxcclxcbkNhbGw6IEBpbmNsdWRlIGJhY2tncm91bmRTdGFuZGFyZDtcXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG5cXHJcXG5AbWl4aW4gZmxleF9jZW50ZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYmFja2dyb3VuZFN0YW5kYXJkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gc29saWRTaGFkb3dIb3ZlciB7XFxyXFxuXFx0Jjpob3ZlcntcXHJcXG5cXHRcXHR0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93LXJlZDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBtYXhXaWR0aCgkbWF4V2lkdGgpIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXgtd2lkdGg6ICRtYXhXaWR0aDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBwYXBlclRleHR1cmV7XFxyXFxuXFx0JjphZnRlcntcXHJcXG5cXHRcXHRjb250ZW50OicnO1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b3BhY2l0eTogLjU7XFxyXFxuXFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1nL3RleHR1cmVzL25hdHVyYWwtcGFwZXIucG5nJyk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG5cXHRcXHQvL21peC1ibGVuZC1tb2RlOiBsaWdodGVuO1xcclxcblxcdFxcdC8vZmlsdGVyOiBjb250cmFzdCgxLjUpO1xcclxcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjZWxsR3JpZFwiOiBcIkNlbGxHcmlkX2NlbGxHcmlkX18ydnFLQVwiLFxuXHRcImNlbGxcIjogXCJDZWxsR3JpZF9jZWxsX19VTWxLOFwiLFxuXHRcImlubmVyXCI6IFwiQ2VsbEdyaWRfaW5uZXJfXzFkSmxoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuVkFSUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyB2YXJzIGhlcmVcXHJcXG5cXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKiogQ29sb3IgVmFyaWFibGVzICoqKioqL1xcbi8qKioqKiBOYW1lZCBDb2xvcnMgKioqKiovXFxuLyoqKioqIEZvbnRzICoqKioqL1xcbi8qKioqKiBGb250IFNpemVzICoqKioqL1xcbi8qKioqKiBMZXR0ZXIgU3BhY2luZyAqKioqKi9cXG4vKioqKiogQ29udGVudCBXaWR0aHMgKioqKiovXFxuLyoqKioqIFRyYW5zaXRpb24gVGltaW5ncyAqKioqKi9cXG4vKioqKiogU2hhZG93cyAqKioqKi9cXG4vKiBzb3VyY2U6IGh0dHBzOi8vYnJ1bW0uYWYvc2hhZG93cyAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbk1JWElOUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyBtaXhpbnMgaGVyZVxcclxcblxcclxcbkNhbGw6IEBpbmNsdWRlIGJhY2tncm91bmRTdGFuZGFyZDtcXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uQ29tcG9uZW50TWV0YV9kZXNjcmlwdGlvbldyYXBwZXJfXzNpenBpIHtcXG4gIHBhZGRpbmc6IDM1cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC5Db21wb25lbnRNZXRhX2Rlc2NyaXB0aW9uV3JhcHBlcl9fM2l6cGkgLkNvbXBvbmVudE1ldGFfcm93X19yZlM0dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC5Db21wb25lbnRNZXRhX2Rlc2NyaXB0aW9uV3JhcHBlcl9fM2l6cGkgLkNvbXBvbmVudE1ldGFfcm93X19yZlM0dDpub3QoOmxhc3Qtb2YtdHlwZSkgLkNvbXBvbmVudE1ldGFfY2VsbF9fcXFJMzcge1xcbiAgICAgIGJvcmRlci1ib3R0b206IDBweDsgfVxcbiAgLkNvbXBvbmVudE1ldGFfZGVzY3JpcHRpb25XcmFwcGVyX18zaXpwaSAuQ29tcG9uZW50TWV0YV9jZWxsX19xcUkzNyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzIxMjEyMTsgfVxcbiAgICAuQ29tcG9uZW50TWV0YV9kZXNjcmlwdGlvbldyYXBwZXJfXzNpenBpIC5Db21wb25lbnRNZXRhX2NlbGxfX3FxSTM3Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAwcHggIzIxMjEyMTsgfVxcbiAgICAuQ29tcG9uZW50TWV0YV9kZXNjcmlwdGlvbldyYXBwZXJfXzNpenBpIC5Db21wb25lbnRNZXRhX2NlbGxfX3FxSTM3LkNvbXBvbmVudE1ldGFfdGl0bGVfXzEwUDlHIHtcXG4gICAgICB3aWR0aDogNDAwcHg7IH1cXG4gICAgLkNvbXBvbmVudE1ldGFfZGVzY3JpcHRpb25XcmFwcGVyX18zaXpwaSAuQ29tcG9uZW50TWV0YV9jZWxsX19xcUkzNy5Db21wb25lbnRNZXRhX2Rlc2NyaXB0aW9uX18yMF8xRCB7XFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwMHB4KTsgfVxcbiAgICAuQ29tcG9uZW50TWV0YV9kZXNjcmlwdGlvbldyYXBwZXJfXzNpenBpIC5Db21wb25lbnRNZXRhX2NlbGxfX3FxSTM3LkNvbXBvbmVudE1ldGFfY29udGVudFByb3BzX18zUzA2TSB7XFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwMHB4KTsgfVxcbiAgICAuQ29tcG9uZW50TWV0YV9kZXNjcmlwdGlvbldyYXBwZXJfXzNpenBpIC5Db21wb25lbnRNZXRhX2NlbGxfX3FxSTM3LkNvbXBvbmVudE1ldGFfbGlicmFyaWVzX18xV2JtZyB7XFxuICAgICAgd2lkdGg6IDUwMHB4OyB9XFxuICAgIC5Db21wb25lbnRNZXRhX2Rlc2NyaXB0aW9uV3JhcHBlcl9fM2l6cGkgLkNvbXBvbmVudE1ldGFfY2VsbF9fcXFJMzcgLkNvbXBvbmVudE1ldGFfaW5uZXJfXzN2Y0w1IHtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgLkNvbXBvbmVudE1ldGFfZGVzY3JpcHRpb25XcmFwcGVyX18zaXpwaSAuQ29tcG9uZW50TWV0YV9jZWxsX19xcUkzNyAuQ29tcG9uZW50TWV0YV9pbm5lcl9fM3ZjTDUgbGkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAgICAgLkNvbXBvbmVudE1ldGFfZGVzY3JpcHRpb25XcmFwcGVyX18zaXpwaSAuQ29tcG9uZW50TWV0YV9jZWxsX19xcUkzNyAuQ29tcG9uZW50TWV0YV9pbm5lcl9fM3ZjTDUgbGkgc3BhbiB7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMyMTIxMjE7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL3ZhcnMuc2Nzc1wiLFwid2VicGFjazovL0NvbXBvbmVudE1ldGEubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7OztrRENNa0Q7QURHbEQsNEJBQUE7QUFVQyx5QkFBQTtBQVNELGtCQUFBO0FBS0EsdUJBQUE7QUFNQSwyQkFBQTtBQUlBLDJCQUFBO0FBTUEsK0JBQUE7QUFNQSxvQkFBQTtBQUVDLHFDQUFBO0FFekREOzs7Ozs7O2tERHVCa0Q7QUFuQmxEO0VBQ0MsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlLEVBQUE7RUFIaEI7SUFNRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtJQVJiO01BV1Msa0JBQWtCLEVBQUE7RUFYM0I7SUFrQkUsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBWTtJQUNaLHlCRGhCZ0IsRUFBQTtJQ05sQjtNQXdCRyw4QkRsQmUsRUFBQTtJQ05sQjtNQTBCVSxZQUFXLEVBQUE7SUExQnJCO01BMkJnQix5QkFBd0IsRUFBQTtJQTNCeEM7TUE2QmlCLHlCQUF3QixFQUFBO0lBN0J6QztNQThCYyxZQUFXLEVBQUE7SUE5QnpCO01BaUNHLGdCQUFnQjtNQUNoQixXQUFXLEVBQUE7TUFsQ2Q7UUFxQ0ksbUJBQW1CLEVBQUE7UUFyQ3ZCO1VBd0NLLGdCQUFnQjtVQUNoQixjQUFjO1VBQ2QsV0FBVztVQUNYLGdDRHJDYTtVQ3NDYixtQkFBbUIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5WQVJTIEZpbGVcXHJcXG5cXHJcXG5EZXNjcmlwdGlvbjpcXHRTdG9yZSBTQ1NTIHZhcnMgaGVyZVxcclxcblxcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcblxcclxcbi8qKioqKiBDb2xvciBWYXJpYWJsZXMgKioqKiovXFxyXFxuXFx0JGJsYWNrOiBcXHRcXHQjMjEyMTIxO1xcclxcblxcdCR3aGl0ZTogXFx0XFx0I2ZhZmFmYTtcXHJcXG5cXHQkZ3JleV8xOlxcdFxcdCNlY2VjZWM7XFxyXFxuXFx0JGdyZXlfMjpcXHRcXHQjM2UzZTNlO1xcclxcblxcclxcblxcdCRyZWQ6IFxcdFxcdFxcdCNmYjAwMDA7XFxyXFxuXFx0XFxyXFxuXFx0JG5hc2FfZ3JleTpcXHQjRDFEM0Q0O1xcclxcblxcclxcblxcdC8qKioqKiBOYW1lZCBDb2xvcnMgKioqKiovXFxyXFxuXFx0XFx0JHByaW1hcnlfY29sb3I6XFx0XFx0JGJsYWNrO1xcclxcblxcdFxcdCRzZWNvbmRhcnlfY29sb3I6XFx0XFx0JHdoaXRlO1xcclxcblxcclxcblxcdFxcdCRiYWNrZ3JvdW5kX2NvbG9yOlxcdCR3aGl0ZTtcXHJcXG5cXHRcXHQkdGV4dF9jb2xvcjpcXHRcXHRcXHQkYmxhY2s7XFxyXFxuXFx0XFx0JGFjY2VudF9jb2xvcjpcXHRcXHQkZ3JleV8xO1xcclxcblxcclxcblxcclxcbi8qKioqKiBGb250cyAqKioqKi9cXHJcXG5cXHQkZm9udF9ib2R5OlxcdFxcdFxcXCJNeVVuZGVyd29vZFxcXCI7XFxyXFxuXFx0JGZvbnRfZGlzcGxheTpcXHRcXFwiQW5jaWVudE1lZGl1bVxcXCI7XFxyXFxuXFx0JGZvbnRfYWx0OlxcdFxcdFxcdFxcXCJJbXBhY3RMYWJlbFxcXCI7XFxyXFxuXFxyXFxuLyoqKioqIEZvbnQgU2l6ZXMgKioqKiovXFxyXFxuXFx0JGZvbnRfc2l6ZV9oZWFkaW5nOlxcdDY1cHg7XFxyXFxuXFx0JGZvbnRfc2l6ZV9zdWJoZWFkOlxcdDM2cHg7XFxyXFxuXFx0JGZvbnRfc2l6ZV9ib2R5OlxcdFxcdDIwcHg7XFxyXFxuXFx0JGZvbnRfc2l6ZV9kZXRhaWw6XFx0MTZweDtcXHJcXG5cXHJcXG4vKioqKiogTGV0dGVyIFNwYWNpbmcgKioqKiovXFxyXFxuXFx0JGxldHRlclNwYWNpbmdXaWRlOlxcdFxcdDAuMDM1ZW07XFxyXFxuXFx0JGxldHRlclNwYWNpbmdOb3JtYWw6XFx0MC4wMzVlbTtcXHJcXG5cXHJcXG4vKioqKiogQ29udGVudCBXaWR0aHMgKioqKiovXFxyXFxuXFx0JGNvbnRlbnRfd2lkdGhfczogXFx0NjUwcHg7XFxyXFxuXFx0JGNvbnRlbnRfd2lkdGhfbTogXFx0OTIwcHg7XFxyXFxuXFx0JGNvbnRlbnRfd2lkdGhfbDogXFx0MTQ1MHB4O1xcclxcblxcclxcblxcclxcbi8qKioqKiBUcmFuc2l0aW9uIFRpbWluZ3MgKioqKiovXFxyXFxuXFx0JHRyYW5zaXRpb25fZmFzdDpcXHRcXHQwLjFzIGVhc2UtaW4tb3V0O1xcclxcblxcdCR0cmFuc2l0aW9uX21lZGl1bTpcXHQwLjI1cyBlYXNlLWluLW91dDtcXHJcXG5cXHQkdHJhbnNpdGlvbl9zbG93OlxcdFxcdDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuXFxyXFxuLyoqKioqIFNoYWRvd3MgKioqKiovXFxyXFxuXFxyXFxuXFx0Lyogc291cmNlOiBodHRwczovL2JydW1tLmFmL3NoYWRvd3MgKi9cXHJcXG5cXHQkbmljZV9zaGFkb3c6XFxyXFxuXFx0XFx0MCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDIpLFxcclxcblxcdFxcdDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjAyOCksXFxyXFxuXFx0XFx0MCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDM1KSxcXHJcXG5cXHRcXHQwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA0MiksXFxyXFxuXFx0XFx0MCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksXFxyXFxuXFx0XFx0MCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XFxyXFxuXFxyXFxuXFxyXFxuXFx0JHRleHQtc2hhZG93LXJlZDpcXHJcXG5cXHRcXHQxcHggMXB4ICRyZWQsIFxcclxcblxcdFxcdDJweCAycHggJHJlZCwgXFxyXFxuXFx0XFx0M3B4IDNweCAkcmVkLCBcXHJcXG5cXHRcXHQ0cHggNHB4ICRyZWQsIFxcclxcblxcdFxcdDVweCA1cHggJHJlZDtcXHJcXG5cXHQgIFxcclxcblxcdCR0ZXh0LWdsb3ctcmVkOlxcclxcblxcdFxcdDAgMCAxdncgJHJlZCwgXFxyXFxuXFx0XFx0MCAwIDN2dyAkcmVkLCBcXHJcXG5cXHRcXHQwIDAgMTB2dyAkcmVkLCBcXHJcXG5cXHRcXHQwIDAgMTB2dyAkcmVkLCBcXHJcXG5cXHRcXHQwIDAgLjR2dyAkcmVkLCBcXHJcXG5cXHRcXHQuMjV2dyAuMjV2dyAuMXZ3ICM4MDY5MTQ7XFxyXFxuXCIsXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5WQVJTIEZpbGVcXHJcXG5cXHJcXG5EZXNjcmlwdGlvbjpcXHRTdG9yZSBTQ1NTIHZhcnMgaGVyZVxcclxcblxcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKiBDb2xvciBWYXJpYWJsZXMgKioqKiovXFxuLyoqKioqIE5hbWVkIENvbG9ycyAqKioqKi9cXG4vKioqKiogRm9udHMgKioqKiovXFxuLyoqKioqIEZvbnQgU2l6ZXMgKioqKiovXFxuLyoqKioqIExldHRlciBTcGFjaW5nICoqKioqL1xcbi8qKioqKiBDb250ZW50IFdpZHRocyAqKioqKi9cXG4vKioqKiogVHJhbnNpdGlvbiBUaW1pbmdzICoqKioqL1xcbi8qKioqKiBTaGFkb3dzICoqKioqL1xcbi8qIHNvdXJjZTogaHR0cHM6Ly9icnVtbS5hZi9zaGFkb3dzICovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuTUlYSU5TIEZpbGVcXHJcXG5cXHJcXG5EZXNjcmlwdGlvbjpcXHRTdG9yZSBTQ1NTIG1peGlucyBoZXJlXFxyXFxuXFxyXFxuQ2FsbDogQGluY2x1ZGUgYmFja2dyb3VuZFN0YW5kYXJkO1xcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5kZXNjcmlwdGlvbldyYXBwZXIge1xcbiAgcGFkZGluZzogMzVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLmRlc2NyaXB0aW9uV3JhcHBlciAucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgLmRlc2NyaXB0aW9uV3JhcHBlciAucm93Om5vdCg6bGFzdC1vZi10eXBlKSAuY2VsbCB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMHB4OyB9XFxuICAuZGVzY3JpcHRpb25XcmFwcGVyIC5jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMjEyMTIxOyB9XFxuICAgIC5kZXNjcmlwdGlvbldyYXBwZXIgLmNlbGw6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDBweCAjMjEyMTIxOyB9XFxuICAgIC5kZXNjcmlwdGlvbldyYXBwZXIgLmNlbGwudGl0bGUge1xcbiAgICAgIHdpZHRoOiA0MDBweDsgfVxcbiAgICAuZGVzY3JpcHRpb25XcmFwcGVyIC5jZWxsLmRlc2NyaXB0aW9uIHtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDAwcHgpOyB9XFxuICAgIC5kZXNjcmlwdGlvbldyYXBwZXIgLmNlbGwuY29udGVudFByb3BzIHtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTAwcHgpOyB9XFxuICAgIC5kZXNjcmlwdGlvbldyYXBwZXIgLmNlbGwubGlicmFyaWVzIHtcXG4gICAgICB3aWR0aDogNTAwcHg7IH1cXG4gICAgLmRlc2NyaXB0aW9uV3JhcHBlciAuY2VsbCAuaW5uZXIge1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgICAuZGVzY3JpcHRpb25XcmFwcGVyIC5jZWxsIC5pbm5lciBsaSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgICAgICAuZGVzY3JpcHRpb25XcmFwcGVyIC5jZWxsIC5pbm5lciBsaSBzcGFuIHtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzIxMjEyMTtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblwiLFwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuTUlYSU5TIEZpbGVcXHJcXG5cXHJcXG5EZXNjcmlwdGlvbjpcXHRTdG9yZSBTQ1NTIG1peGlucyBoZXJlXFxyXFxuXFxyXFxuQ2FsbDogQGluY2x1ZGUgYmFja2dyb3VuZFN0YW5kYXJkO1xcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcblxcclxcbkBtaXhpbiBmbGV4X2NlbnRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBiYWNrZ3JvdW5kU3RhbmRhcmQge1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBzb2xpZFNoYWRvd0hvdmVyIHtcXHJcXG5cXHQmOmhvdmVye1xcclxcblxcdFxcdHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3ctcmVkO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1heFdpZHRoKCRtYXhXaWR0aCkge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1heC13aWR0aDogJG1heFdpZHRoO1xcclxcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHBhcGVyVGV4dHVyZXtcXHJcXG5cXHQmOmFmdGVye1xcclxcblxcdFxcdGNvbnRlbnQ6Jyc7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRvcGFjaXR5OiAuNTtcXHJcXG5cXHRcXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWcvdGV4dHVyZXMvbmF0dXJhbC1wYXBlci5wbmcnKTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcblxcdFxcdC8vbWl4LWJsZW5kLW1vZGU6IGxpZ2h0ZW47XFxyXFxuXFx0XFx0Ly9maWx0ZXI6IGNvbnRyYXN0KDEuNSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImRlc2NyaXB0aW9uV3JhcHBlclwiOiBcIkNvbXBvbmVudE1ldGFfZGVzY3JpcHRpb25XcmFwcGVyX18zaXpwaVwiLFxuXHRcInJvd1wiOiBcIkNvbXBvbmVudE1ldGFfcm93X19yZlM0dFwiLFxuXHRcImNlbGxcIjogXCJDb21wb25lbnRNZXRhX2NlbGxfX3FxSTM3XCIsXG5cdFwidGl0bGVcIjogXCJDb21wb25lbnRNZXRhX3RpdGxlX18xMFA5R1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiQ29tcG9uZW50TWV0YV9kZXNjcmlwdGlvbl9fMjBfMURcIixcblx0XCJjb250ZW50UHJvcHNcIjogXCJDb21wb25lbnRNZXRhX2NvbnRlbnRQcm9wc19fM1MwNk1cIixcblx0XCJsaWJyYXJpZXNcIjogXCJDb21wb25lbnRNZXRhX2xpYnJhcmllc19fMVdibWdcIixcblx0XCJpbm5lclwiOiBcIkNvbXBvbmVudE1ldGFfaW5uZXJfXzN2Y0w1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqKioqID09PT09PT09PT0gKioqKiovXFxuLyoqKioqIENPTlRBSU5FUiAgKioqKiovXFxuLyoqKioqID09PT09PT09PT0gKioqKiovXFxuLkNvbnRhaW5lcl9jb250YWluZXJfXzJSUTczIHtcXG4gIG1heC13aWR0aDogMTQ1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMzVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5Db250YWluZXJfY29udGFpbmVyX18yUlE3My5Db250YWluZXJfZmxleF9fMU5xbHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Db250YWluZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdUJBQUE7QUFDQSx1QkFBQTtBQUNBLHVCQUFBO0FBQ0E7RUFDQyxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBO0VBTm5CO0lBU0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqID09PT09PT09PT0gKioqKiovXFxyXFxuLyoqKioqIENPTlRBSU5FUiAgKioqKiovXFxyXFxuLyoqKioqID09PT09PT09PT0gKioqKiovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuXFx0bWF4LXdpZHRoOiAxNDUwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0cGFkZGluZzogMCAzNXB4O1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcblxcdCYuZmxleHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNvbnRhaW5lcl9jb250YWluZXJfXzJSUTczXCIsXG5cdFwiZmxleFwiOiBcIkNvbnRhaW5lcl9mbGV4X18xTnFseVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcblZBUlMgRmlsZVxcclxcblxcclxcbkRlc2NyaXB0aW9uOlxcdFN0b3JlIFNDU1MgdmFycyBoZXJlXFxyXFxuXFxyXFxuXFxyXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqIENvbG9yIFZhcmlhYmxlcyAqKioqKi9cXG4vKioqKiogTmFtZWQgQ29sb3JzICoqKioqL1xcbi8qKioqKiBGb250cyAqKioqKi9cXG4vKioqKiogRm9udCBTaXplcyAqKioqKi9cXG4vKioqKiogTGV0dGVyIFNwYWNpbmcgKioqKiovXFxuLyoqKioqIENvbnRlbnQgV2lkdGhzICoqKioqL1xcbi8qKioqKiBUcmFuc2l0aW9uIFRpbWluZ3MgKioqKiovXFxuLyoqKioqIFNoYWRvd3MgKioqKiovXFxuLyogc291cmNlOiBodHRwczovL2JydW1tLmFmL3NoYWRvd3MgKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5NSVhJTlMgRmlsZVxcclxcblxcclxcbkRlc2NyaXB0aW9uOlxcdFN0b3JlIFNDU1MgbWl4aW5zIGhlcmVcXHJcXG5cXHJcXG5DYWxsOiBAaW5jbHVkZSBiYWNrZ3JvdW5kU3RhbmRhcmQ7XFxyXFxuXFxyXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLkZvb3Rlcl9mb290ZXJfXzNhVXdiIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE1MHB4OyB9XFxuICAuRm9vdGVyX2Zvb3Rlcl9fM2FVd2IgLkZvb3Rlcl9mb290ZXJfbWVzc2FnZV9fWHNZaHYge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQW5jaWVudE1lZGl1bVxcXCI7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL3ZhcnMuc2Nzc1wiLFwid2VicGFjazovL0Zvb3Rlci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7O2tEQ01rRDtBREdsRCw0QkFBQTtBQVVDLHlCQUFBO0FBU0Qsa0JBQUE7QUFLQSx1QkFBQTtBQU1BLDJCQUFBO0FBSUEsMkJBQUE7QUFNQSwrQkFBQTtBQU1BLG9CQUFBO0FBRUMscUNBQUE7QUV6REQ7Ozs7Ozs7a0REdUJrRDtBQWxCbEQ7RUFDQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtFQVBsQjtJQVVFLGVBQWU7SUFDZiw0QkRjNkIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5WQVJTIEZpbGVcXHJcXG5cXHJcXG5EZXNjcmlwdGlvbjpcXHRTdG9yZSBTQ1NTIHZhcnMgaGVyZVxcclxcblxcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcblxcclxcbi8qKioqKiBDb2xvciBWYXJpYWJsZXMgKioqKiovXFxyXFxuXFx0JGJsYWNrOiBcXHRcXHQjMjEyMTIxO1xcclxcblxcdCR3aGl0ZTogXFx0XFx0I2ZhZmFmYTtcXHJcXG5cXHQkZ3JleV8xOlxcdFxcdCNlY2VjZWM7XFxyXFxuXFx0JGdyZXlfMjpcXHRcXHQjM2UzZTNlO1xcclxcblxcclxcblxcdCRyZWQ6IFxcdFxcdFxcdCNmYjAwMDA7XFxyXFxuXFx0XFxyXFxuXFx0JG5hc2FfZ3JleTpcXHQjRDFEM0Q0O1xcclxcblxcclxcblxcdC8qKioqKiBOYW1lZCBDb2xvcnMgKioqKiovXFxyXFxuXFx0XFx0JHByaW1hcnlfY29sb3I6XFx0XFx0JGJsYWNrO1xcclxcblxcdFxcdCRzZWNvbmRhcnlfY29sb3I6XFx0XFx0JHdoaXRlO1xcclxcblxcclxcblxcdFxcdCRiYWNrZ3JvdW5kX2NvbG9yOlxcdCR3aGl0ZTtcXHJcXG5cXHRcXHQkdGV4dF9jb2xvcjpcXHRcXHRcXHQkYmxhY2s7XFxyXFxuXFx0XFx0JGFjY2VudF9jb2xvcjpcXHRcXHQkZ3JleV8xO1xcclxcblxcclxcblxcclxcbi8qKioqKiBGb250cyAqKioqKi9cXHJcXG5cXHQkZm9udF9ib2R5OlxcdFxcdFxcXCJNeVVuZGVyd29vZFxcXCI7XFxyXFxuXFx0JGZvbnRfZGlzcGxheTpcXHRcXFwiQW5jaWVudE1lZGl1bVxcXCI7XFxyXFxuXFx0JGZvbnRfYWx0OlxcdFxcdFxcdFxcXCJJbXBhY3RMYWJlbFxcXCI7XFxyXFxuXFxyXFxuLyoqKioqIEZvbnQgU2l6ZXMgKioqKiovXFxyXFxuXFx0JGZvbnRfc2l6ZV9oZWFkaW5nOlxcdDY1cHg7XFxyXFxuXFx0JGZvbnRfc2l6ZV9zdWJoZWFkOlxcdDM2cHg7XFxyXFxuXFx0JGZvbnRfc2l6ZV9ib2R5OlxcdFxcdDIwcHg7XFxyXFxuXFx0JGZvbnRfc2l6ZV9kZXRhaWw6XFx0MTZweDtcXHJcXG5cXHJcXG4vKioqKiogTGV0dGVyIFNwYWNpbmcgKioqKiovXFxyXFxuXFx0JGxldHRlclNwYWNpbmdXaWRlOlxcdFxcdDAuMDM1ZW07XFxyXFxuXFx0JGxldHRlclNwYWNpbmdOb3JtYWw6XFx0MC4wMzVlbTtcXHJcXG5cXHJcXG4vKioqKiogQ29udGVudCBXaWR0aHMgKioqKiovXFxyXFxuXFx0JGNvbnRlbnRfd2lkdGhfczogXFx0NjUwcHg7XFxyXFxuXFx0JGNvbnRlbnRfd2lkdGhfbTogXFx0OTIwcHg7XFxyXFxuXFx0JGNvbnRlbnRfd2lkdGhfbDogXFx0MTQ1MHB4O1xcclxcblxcclxcblxcclxcbi8qKioqKiBUcmFuc2l0aW9uIFRpbWluZ3MgKioqKiovXFxyXFxuXFx0JHRyYW5zaXRpb25fZmFzdDpcXHRcXHQwLjFzIGVhc2UtaW4tb3V0O1xcclxcblxcdCR0cmFuc2l0aW9uX21lZGl1bTpcXHQwLjI1cyBlYXNlLWluLW91dDtcXHJcXG5cXHQkdHJhbnNpdGlvbl9zbG93OlxcdFxcdDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuXFxyXFxuLyoqKioqIFNoYWRvd3MgKioqKiovXFxyXFxuXFxyXFxuXFx0Lyogc291cmNlOiBodHRwczovL2JydW1tLmFmL3NoYWRvd3MgKi9cXHJcXG5cXHQkbmljZV9zaGFkb3c6XFxyXFxuXFx0XFx0MCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDIpLFxcclxcblxcdFxcdDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjAyOCksXFxyXFxuXFx0XFx0MCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDM1KSxcXHJcXG5cXHRcXHQwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA0MiksXFxyXFxuXFx0XFx0MCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksXFxyXFxuXFx0XFx0MCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XFxyXFxuXFxyXFxuXFxyXFxuXFx0JHRleHQtc2hhZG93LXJlZDpcXHJcXG5cXHRcXHQxcHggMXB4ICRyZWQsIFxcclxcblxcdFxcdDJweCAycHggJHJlZCwgXFxyXFxuXFx0XFx0M3B4IDNweCAkcmVkLCBcXHJcXG5cXHRcXHQ0cHggNHB4ICRyZWQsIFxcclxcblxcdFxcdDVweCA1cHggJHJlZDtcXHJcXG5cXHQgIFxcclxcblxcdCR0ZXh0LWdsb3ctcmVkOlxcclxcblxcdFxcdDAgMCAxdncgJHJlZCwgXFxyXFxuXFx0XFx0MCAwIDN2dyAkcmVkLCBcXHJcXG5cXHRcXHQwIDAgMTB2dyAkcmVkLCBcXHJcXG5cXHRcXHQwIDAgMTB2dyAkcmVkLCBcXHJcXG5cXHRcXHQwIDAgLjR2dyAkcmVkLCBcXHJcXG5cXHRcXHQuMjV2dyAuMjV2dyAuMXZ3ICM4MDY5MTQ7XFxyXFxuXCIsXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5WQVJTIEZpbGVcXHJcXG5cXHJcXG5EZXNjcmlwdGlvbjpcXHRTdG9yZSBTQ1NTIHZhcnMgaGVyZVxcclxcblxcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKiBDb2xvciBWYXJpYWJsZXMgKioqKiovXFxuLyoqKioqIE5hbWVkIENvbG9ycyAqKioqKi9cXG4vKioqKiogRm9udHMgKioqKiovXFxuLyoqKioqIEZvbnQgU2l6ZXMgKioqKiovXFxuLyoqKioqIExldHRlciBTcGFjaW5nICoqKioqL1xcbi8qKioqKiBDb250ZW50IFdpZHRocyAqKioqKi9cXG4vKioqKiogVHJhbnNpdGlvbiBUaW1pbmdzICoqKioqL1xcbi8qKioqKiBTaGFkb3dzICoqKioqL1xcbi8qIHNvdXJjZTogaHR0cHM6Ly9icnVtbS5hZi9zaGFkb3dzICovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuTUlYSU5TIEZpbGVcXHJcXG5cXHJcXG5EZXNjcmlwdGlvbjpcXHRTdG9yZSBTQ1NTIG1peGlucyBoZXJlXFxyXFxuXFxyXFxuQ2FsbDogQGluY2x1ZGUgYmFja2dyb3VuZFN0YW5kYXJkO1xcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTUwcHg7IH1cXG4gIC5mb290ZXIgLmZvb3Rlcl9tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIkFuY2llbnRNZWRpdW1cXFwiOyB9XFxuXCIsXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5NSVhJTlMgRmlsZVxcclxcblxcclxcbkRlc2NyaXB0aW9uOlxcdFN0b3JlIFNDU1MgbWl4aW5zIGhlcmVcXHJcXG5cXHJcXG5DYWxsOiBAaW5jbHVkZSBiYWNrZ3JvdW5kU3RhbmRhcmQ7XFxyXFxuXFxyXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuXFxyXFxuQG1peGluIGZsZXhfY2VudGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJhY2tncm91bmRTdGFuZGFyZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHNvbGlkU2hhZG93SG92ZXIge1xcclxcblxcdCY6aG92ZXJ7XFxyXFxuXFx0XFx0dGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdy1yZWQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbWF4V2lkdGgoJG1heFdpZHRoKSB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWF4LXdpZHRoOiAkbWF4V2lkdGg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gcGFwZXJUZXh0dXJle1xcclxcblxcdCY6YWZ0ZXJ7XFxyXFxuXFx0XFx0Y29udGVudDonJztcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdG9wYWNpdHk6IC41O1xcclxcblxcdFxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcdFxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZy90ZXh0dXJlcy9uYXR1cmFsLXBhcGVyLnBuZycpO1xcclxcblxcdFxcdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuXFx0XFx0Ly9taXgtYmxlbmQtbW9kZTogbGlnaHRlbjtcXHJcXG5cXHRcXHQvL2ZpbHRlcjogY29udHJhc3QoMS41KTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fM2FVd2JcIixcblx0XCJmb290ZXJfbWVzc2FnZVwiOiBcIkZvb3Rlcl9mb290ZXJfbWVzc2FnZV9fWHNZaHZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5WQVJTIEZpbGVcXHJcXG5cXHJcXG5EZXNjcmlwdGlvbjpcXHRTdG9yZSBTQ1NTIHZhcnMgaGVyZVxcclxcblxcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKiBDb2xvciBWYXJpYWJsZXMgKioqKiovXFxuLyoqKioqIE5hbWVkIENvbG9ycyAqKioqKi9cXG4vKioqKiogRm9udHMgKioqKiovXFxuLyoqKioqIEZvbnQgU2l6ZXMgKioqKiovXFxuLyoqKioqIExldHRlciBTcGFjaW5nICoqKioqL1xcbi8qKioqKiBDb250ZW50IFdpZHRocyAqKioqKi9cXG4vKioqKiogVHJhbnNpdGlvbiBUaW1pbmdzICoqKioqL1xcbi8qKioqKiBTaGFkb3dzICoqKioqL1xcbi8qIHNvdXJjZTogaHR0cHM6Ly9icnVtbS5hZi9zaGFkb3dzICovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuTUlYSU5TIEZpbGVcXHJcXG5cXHJcXG5EZXNjcmlwdGlvbjpcXHRTdG9yZSBTQ1NTIG1peGlucyBoZXJlXFxyXFxuXFxyXFxuQ2FsbDogQGluY2x1ZGUgYmFja2dyb3VuZFN0YW5kYXJkO1xcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5IZWFkZXJfaGVhZGVyX18ydFhrMyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEMUQzRDQ7IH1cXG5cXG4uSGVhZGVyX2NvbnRhaW5lcl9fYjZVdXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLkhlYWRlcl9jb250ZW50TGVmdF9fSFBkUU8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5IZWFkZXJfY29udGVudExlZnRfX0hQZFFPIC5IZWFkZXJfbG9nb19fM1NiNTkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG4gIC5IZWFkZXJfY29udGVudExlZnRfX0hQZFFPIC5IZWFkZXJfdGl0bGVfXzFoRVU3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiA2NXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7IH1cXG5cXG4uSGVhZGVyX2NvbnRlbnRSaWdodF9fMUYzVlQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gJHN0YXRpY193aWR0aCk7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL3ZhcnMuc2Nzc1wiLFwid2VicGFjazovL0hlYWRlci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7O2tEQ01rRDtBREdsRCw0QkFBQTtBQVVDLHlCQUFBO0FBU0Qsa0JBQUE7QUFLQSx1QkFBQTtBQU1BLDJCQUFBO0FBSUEsMkJBQUE7QUFNQSwrQkFBQTtBQU1BLG9CQUFBO0FBRUMscUNBQUE7QUV6REQ7Ozs7Ozs7a0REdUJrRDtBQW5CbEQ7RUFDQyxXQUFXO0VBQ1gseUJEV21CLEVBQUE7O0FDUHBCO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBTS9CO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQVJrQixFQUFBO0VBRW5CO0lDVEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lEZ0JsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtFQVpkO0lDVEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lEdUJsQixrQkFBa0I7SUFDbEIsZURKdUI7SUNLdkIsZUFBZSxFQUFBOztBQUlqQjtFQUNDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUNBQXFDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuVkFSUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyB2YXJzIGhlcmVcXHJcXG5cXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG5cXHJcXG4vKioqKiogQ29sb3IgVmFyaWFibGVzICoqKioqL1xcclxcblxcdCRibGFjazogXFx0XFx0IzIxMjEyMTtcXHJcXG5cXHQkd2hpdGU6IFxcdFxcdCNmYWZhZmE7XFxyXFxuXFx0JGdyZXlfMTpcXHRcXHQjZWNlY2VjO1xcclxcblxcdCRncmV5XzI6XFx0XFx0IzNlM2UzZTtcXHJcXG5cXHJcXG5cXHQkcmVkOiBcXHRcXHRcXHQjZmIwMDAwO1xcclxcblxcdFxcclxcblxcdCRuYXNhX2dyZXk6XFx0I0QxRDNENDtcXHJcXG5cXHJcXG5cXHQvKioqKiogTmFtZWQgQ29sb3JzICoqKioqL1xcclxcblxcdFxcdCRwcmltYXJ5X2NvbG9yOlxcdFxcdCRibGFjaztcXHJcXG5cXHRcXHQkc2Vjb25kYXJ5X2NvbG9yOlxcdFxcdCR3aGl0ZTtcXHJcXG5cXHJcXG5cXHRcXHQkYmFja2dyb3VuZF9jb2xvcjpcXHQkd2hpdGU7XFxyXFxuXFx0XFx0JHRleHRfY29sb3I6XFx0XFx0XFx0JGJsYWNrO1xcclxcblxcdFxcdCRhY2NlbnRfY29sb3I6XFx0XFx0JGdyZXlfMTtcXHJcXG5cXHJcXG5cXHJcXG4vKioqKiogRm9udHMgKioqKiovXFxyXFxuXFx0JGZvbnRfYm9keTpcXHRcXHRcXFwiTXlVbmRlcndvb2RcXFwiO1xcclxcblxcdCRmb250X2Rpc3BsYXk6XFx0XFxcIkFuY2llbnRNZWRpdW1cXFwiO1xcclxcblxcdCRmb250X2FsdDpcXHRcXHRcXHRcXFwiSW1wYWN0TGFiZWxcXFwiO1xcclxcblxcclxcbi8qKioqKiBGb250IFNpemVzICoqKioqL1xcclxcblxcdCRmb250X3NpemVfaGVhZGluZzpcXHQ2NXB4O1xcclxcblxcdCRmb250X3NpemVfc3ViaGVhZDpcXHQzNnB4O1xcclxcblxcdCRmb250X3NpemVfYm9keTpcXHRcXHQyMHB4O1xcclxcblxcdCRmb250X3NpemVfZGV0YWlsOlxcdDE2cHg7XFxyXFxuXFxyXFxuLyoqKioqIExldHRlciBTcGFjaW5nICoqKioqL1xcclxcblxcdCRsZXR0ZXJTcGFjaW5nV2lkZTpcXHRcXHQwLjAzNWVtO1xcclxcblxcdCRsZXR0ZXJTcGFjaW5nTm9ybWFsOlxcdDAuMDM1ZW07XFxyXFxuXFxyXFxuLyoqKioqIENvbnRlbnQgV2lkdGhzICoqKioqL1xcclxcblxcdCRjb250ZW50X3dpZHRoX3M6IFxcdDY1MHB4O1xcclxcblxcdCRjb250ZW50X3dpZHRoX206IFxcdDkyMHB4O1xcclxcblxcdCRjb250ZW50X3dpZHRoX2w6IFxcdDE0NTBweDtcXHJcXG5cXHJcXG5cXHJcXG4vKioqKiogVHJhbnNpdGlvbiBUaW1pbmdzICoqKioqL1xcclxcblxcdCR0cmFuc2l0aW9uX2Zhc3Q6XFx0XFx0MC4xcyBlYXNlLWluLW91dDtcXHJcXG5cXHQkdHJhbnNpdGlvbl9tZWRpdW06XFx0MC4yNXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0JHRyYW5zaXRpb25fc2xvdzpcXHRcXHQwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcblxcclxcbi8qKioqKiBTaGFkb3dzICoqKioqL1xcclxcblxcclxcblxcdC8qIHNvdXJjZTogaHR0cHM6Ly9icnVtbS5hZi9zaGFkb3dzICovXFxyXFxuXFx0JG5pY2Vfc2hhZG93OlxcclxcblxcdFxcdDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAyKSxcXHJcXG5cXHRcXHQwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wMjgpLFxcclxcblxcdFxcdDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzNSksXFxyXFxuXFx0XFx0MCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLFxcclxcblxcdFxcdDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxcclxcblxcdFxcdDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xcclxcblxcclxcblxcclxcblxcdCR0ZXh0LXNoYWRvdy1yZWQ6XFxyXFxuXFx0XFx0MXB4IDFweCAkcmVkLCBcXHJcXG5cXHRcXHQycHggMnB4ICRyZWQsIFxcclxcblxcdFxcdDNweCAzcHggJHJlZCwgXFxyXFxuXFx0XFx0NHB4IDRweCAkcmVkLCBcXHJcXG5cXHRcXHQ1cHggNXB4ICRyZWQ7XFxyXFxuXFx0ICBcXHJcXG5cXHQkdGV4dC1nbG93LXJlZDpcXHJcXG5cXHRcXHQwIDAgMXZ3ICRyZWQsIFxcclxcblxcdFxcdDAgMCAzdncgJHJlZCwgXFxyXFxuXFx0XFx0MCAwIDEwdncgJHJlZCwgXFxyXFxuXFx0XFx0MCAwIDEwdncgJHJlZCwgXFxyXFxuXFx0XFx0MCAwIC40dncgJHJlZCwgXFxyXFxuXFx0XFx0LjI1dncgLjI1dncgLjF2dyAjODA2OTE0O1xcclxcblwiLFwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuVkFSUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyB2YXJzIGhlcmVcXHJcXG5cXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKiogQ29sb3IgVmFyaWFibGVzICoqKioqL1xcbi8qKioqKiBOYW1lZCBDb2xvcnMgKioqKiovXFxuLyoqKioqIEZvbnRzICoqKioqL1xcbi8qKioqKiBGb250IFNpemVzICoqKioqL1xcbi8qKioqKiBMZXR0ZXIgU3BhY2luZyAqKioqKi9cXG4vKioqKiogQ29udGVudCBXaWR0aHMgKioqKiovXFxuLyoqKioqIFRyYW5zaXRpb24gVGltaW5ncyAqKioqKi9cXG4vKioqKiogU2hhZG93cyAqKioqKi9cXG4vKiBzb3VyY2U6IGh0dHBzOi8vYnJ1bW0uYWYvc2hhZG93cyAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbk1JWElOUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyBtaXhpbnMgaGVyZVxcclxcblxcclxcbkNhbGw6IEBpbmNsdWRlIGJhY2tncm91bmRTdGFuZGFyZDtcXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDNENDsgfVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNvbnRlbnRMZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAuY29udGVudExlZnQgLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG4gIC5jb250ZW50TGVmdCAudGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDY1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDsgfVxcblxcbi5jb250ZW50UmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gJHN0YXRpY193aWR0aCk7IH1cXG5cIixcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbk1JWElOUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyBtaXhpbnMgaGVyZVxcclxcblxcclxcbkNhbGw6IEBpbmNsdWRlIGJhY2tncm91bmRTdGFuZGFyZDtcXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG5cXHJcXG5AbWl4aW4gZmxleF9jZW50ZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYmFja2dyb3VuZFN0YW5kYXJkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gc29saWRTaGFkb3dIb3ZlciB7XFxyXFxuXFx0Jjpob3ZlcntcXHJcXG5cXHRcXHR0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93LXJlZDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBtYXhXaWR0aCgkbWF4V2lkdGgpIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXgtd2lkdGg6ICRtYXhXaWR0aDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBwYXBlclRleHR1cmV7XFxyXFxuXFx0JjphZnRlcntcXHJcXG5cXHRcXHRjb250ZW50OicnO1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b3BhY2l0eTogLjU7XFxyXFxuXFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1nL3RleHR1cmVzL25hdHVyYWwtcGFwZXIucG5nJyk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG5cXHRcXHQvL21peC1ibGVuZC1tb2RlOiBsaWdodGVuO1xcclxcblxcdFxcdC8vZmlsdGVyOiBjb250cmFzdCgxLjUpO1xcclxcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18ydFhrM1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhlYWRlcl9jb250YWluZXJfX2I2VXV4XCIsXG5cdFwiY29udGVudExlZnRcIjogXCJIZWFkZXJfY29udGVudExlZnRfX0hQZFFPXCIsXG5cdFwibG9nb1wiOiBcIkhlYWRlcl9sb2dvX18zU2I1OVwiLFxuXHRcInRpdGxlXCI6IFwiSGVhZGVyX3RpdGxlX18xaEVVN1wiLFxuXHRcImNvbnRlbnRSaWdodFwiOiBcIkhlYWRlcl9jb250ZW50UmlnaHRfXzFGM1ZUXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuVkFSUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyB2YXJzIGhlcmVcXHJcXG5cXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKiogQ29sb3IgVmFyaWFibGVzICoqKioqL1xcbi8qKioqKiBOYW1lZCBDb2xvcnMgKioqKiovXFxuLyoqKioqIEZvbnRzICoqKioqL1xcbi8qKioqKiBGb250IFNpemVzICoqKioqL1xcbi8qKioqKiBMZXR0ZXIgU3BhY2luZyAqKioqKi9cXG4vKioqKiogQ29udGVudCBXaWR0aHMgKioqKiovXFxuLyoqKioqIFRyYW5zaXRpb24gVGltaW5ncyAqKioqKi9cXG4vKioqKiogU2hhZG93cyAqKioqKi9cXG4vKiBzb3VyY2U6IGh0dHBzOi8vYnJ1bW0uYWYvc2hhZG93cyAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbk1JWElOUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyBtaXhpbnMgaGVyZVxcclxcblxcclxcbkNhbGw6IEBpbmNsdWRlIGJhY2tncm91bmRTdGFuZGFyZDtcXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uU2FuZGJveF9zYW5kYm94X18xM1hCaCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMHB4IDA7IH1cXG4gIC5TYW5kYm94X3NhbmRib3hfXzEzWEJoIC5TYW5kYm94X2NvbnRlbnRfXzFTRXl5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDNENDtcXG4gICAgcGFkZGluZzogMjVweCAzNXB4IDM1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMiksIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjAyOCksIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzNSksIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwgMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMDcpOyB9XFxuICAuU2FuZGJveF9zYW5kYm94X18xM1hCaCAuU2FuZGJveF90aXRsZV9fUTg2YVYge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuU2FuZGJveF9zYW5kYm94X18xM1hCaCAuU2FuZGJveF9pbm5lcl9fMUZ5R3Mge1xcbiAgICBwYWRkaW5nOiAzNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgIzIxMjEyMTtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL3ZhcnMuc2Nzc1wiLFwid2VicGFjazovL1NhbmRib3gubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7OztrRENNa0Q7QURHbEQsNEJBQUE7QUFVQyx5QkFBQTtBQVNELGtCQUFBO0FBS0EsdUJBQUE7QUFNQSwyQkFBQTtBQUlBLDJCQUFBO0FBTUEsK0JBQUE7QUFNQSxvQkFBQTtBQUVDLHFDQUFBO0FFekREOzs7Ozs7O2tERHVCa0Q7QUFwQmxEO0VBQ0MsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjLEVBQUE7RUFIZjtJQU1FLHlCRFFrQjtJQ1BsQix1QkFBd0I7SUFDeEIsV0FBVztJQUVYLG1CQUFtQjtJQUNuQixrT0RrRGdDLEVBQUE7RUM3RGxDO0lBZUUsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7RUFqQmhCO0lBcUJFLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCRGpCZ0I7SUNrQmhCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuVkFSUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyB2YXJzIGhlcmVcXHJcXG5cXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG5cXHJcXG4vKioqKiogQ29sb3IgVmFyaWFibGVzICoqKioqL1xcclxcblxcdCRibGFjazogXFx0XFx0IzIxMjEyMTtcXHJcXG5cXHQkd2hpdGU6IFxcdFxcdCNmYWZhZmE7XFxyXFxuXFx0JGdyZXlfMTpcXHRcXHQjZWNlY2VjO1xcclxcblxcdCRncmV5XzI6XFx0XFx0IzNlM2UzZTtcXHJcXG5cXHJcXG5cXHQkcmVkOiBcXHRcXHRcXHQjZmIwMDAwO1xcclxcblxcdFxcclxcblxcdCRuYXNhX2dyZXk6XFx0I0QxRDNENDtcXHJcXG5cXHJcXG5cXHQvKioqKiogTmFtZWQgQ29sb3JzICoqKioqL1xcclxcblxcdFxcdCRwcmltYXJ5X2NvbG9yOlxcdFxcdCRibGFjaztcXHJcXG5cXHRcXHQkc2Vjb25kYXJ5X2NvbG9yOlxcdFxcdCR3aGl0ZTtcXHJcXG5cXHJcXG5cXHRcXHQkYmFja2dyb3VuZF9jb2xvcjpcXHQkd2hpdGU7XFxyXFxuXFx0XFx0JHRleHRfY29sb3I6XFx0XFx0XFx0JGJsYWNrO1xcclxcblxcdFxcdCRhY2NlbnRfY29sb3I6XFx0XFx0JGdyZXlfMTtcXHJcXG5cXHJcXG5cXHJcXG4vKioqKiogRm9udHMgKioqKiovXFxyXFxuXFx0JGZvbnRfYm9keTpcXHRcXHRcXFwiTXlVbmRlcndvb2RcXFwiO1xcclxcblxcdCRmb250X2Rpc3BsYXk6XFx0XFxcIkFuY2llbnRNZWRpdW1cXFwiO1xcclxcblxcdCRmb250X2FsdDpcXHRcXHRcXHRcXFwiSW1wYWN0TGFiZWxcXFwiO1xcclxcblxcclxcbi8qKioqKiBGb250IFNpemVzICoqKioqL1xcclxcblxcdCRmb250X3NpemVfaGVhZGluZzpcXHQ2NXB4O1xcclxcblxcdCRmb250X3NpemVfc3ViaGVhZDpcXHQzNnB4O1xcclxcblxcdCRmb250X3NpemVfYm9keTpcXHRcXHQyMHB4O1xcclxcblxcdCRmb250X3NpemVfZGV0YWlsOlxcdDE2cHg7XFxyXFxuXFxyXFxuLyoqKioqIExldHRlciBTcGFjaW5nICoqKioqL1xcclxcblxcdCRsZXR0ZXJTcGFjaW5nV2lkZTpcXHRcXHQwLjAzNWVtO1xcclxcblxcdCRsZXR0ZXJTcGFjaW5nTm9ybWFsOlxcdDAuMDM1ZW07XFxyXFxuXFxyXFxuLyoqKioqIENvbnRlbnQgV2lkdGhzICoqKioqL1xcclxcblxcdCRjb250ZW50X3dpZHRoX3M6IFxcdDY1MHB4O1xcclxcblxcdCRjb250ZW50X3dpZHRoX206IFxcdDkyMHB4O1xcclxcblxcdCRjb250ZW50X3dpZHRoX2w6IFxcdDE0NTBweDtcXHJcXG5cXHJcXG5cXHJcXG4vKioqKiogVHJhbnNpdGlvbiBUaW1pbmdzICoqKioqL1xcclxcblxcdCR0cmFuc2l0aW9uX2Zhc3Q6XFx0XFx0MC4xcyBlYXNlLWluLW91dDtcXHJcXG5cXHQkdHJhbnNpdGlvbl9tZWRpdW06XFx0MC4yNXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0JHRyYW5zaXRpb25fc2xvdzpcXHRcXHQwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcblxcclxcbi8qKioqKiBTaGFkb3dzICoqKioqL1xcclxcblxcclxcblxcdC8qIHNvdXJjZTogaHR0cHM6Ly9icnVtbS5hZi9zaGFkb3dzICovXFxyXFxuXFx0JG5pY2Vfc2hhZG93OlxcclxcblxcdFxcdDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAyKSxcXHJcXG5cXHRcXHQwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wMjgpLFxcclxcblxcdFxcdDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzNSksXFxyXFxuXFx0XFx0MCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLFxcclxcblxcdFxcdDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxcclxcblxcdFxcdDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xcclxcblxcclxcblxcclxcblxcdCR0ZXh0LXNoYWRvdy1yZWQ6XFxyXFxuXFx0XFx0MXB4IDFweCAkcmVkLCBcXHJcXG5cXHRcXHQycHggMnB4ICRyZWQsIFxcclxcblxcdFxcdDNweCAzcHggJHJlZCwgXFxyXFxuXFx0XFx0NHB4IDRweCAkcmVkLCBcXHJcXG5cXHRcXHQ1cHggNXB4ICRyZWQ7XFxyXFxuXFx0ICBcXHJcXG5cXHQkdGV4dC1nbG93LXJlZDpcXHJcXG5cXHRcXHQwIDAgMXZ3ICRyZWQsIFxcclxcblxcdFxcdDAgMCAzdncgJHJlZCwgXFxyXFxuXFx0XFx0MCAwIDEwdncgJHJlZCwgXFxyXFxuXFx0XFx0MCAwIDEwdncgJHJlZCwgXFxyXFxuXFx0XFx0MCAwIC40dncgJHJlZCwgXFxyXFxuXFx0XFx0LjI1dncgLjI1dncgLjF2dyAjODA2OTE0O1xcclxcblwiLFwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuVkFSUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyB2YXJzIGhlcmVcXHJcXG5cXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKiogQ29sb3IgVmFyaWFibGVzICoqKioqL1xcbi8qKioqKiBOYW1lZCBDb2xvcnMgKioqKiovXFxuLyoqKioqIEZvbnRzICoqKioqL1xcbi8qKioqKiBGb250IFNpemVzICoqKioqL1xcbi8qKioqKiBMZXR0ZXIgU3BhY2luZyAqKioqKi9cXG4vKioqKiogQ29udGVudCBXaWR0aHMgKioqKiovXFxuLyoqKioqIFRyYW5zaXRpb24gVGltaW5ncyAqKioqKi9cXG4vKioqKiogU2hhZG93cyAqKioqKi9cXG4vKiBzb3VyY2U6IGh0dHBzOi8vYnJ1bW0uYWYvc2hhZG93cyAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbk1JWElOUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyBtaXhpbnMgaGVyZVxcclxcblxcclxcbkNhbGw6IEBpbmNsdWRlIGJhY2tncm91bmRTdGFuZGFyZDtcXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uc2FuZGJveCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMHB4IDA7IH1cXG4gIC5zYW5kYm94IC5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDNENDtcXG4gICAgcGFkZGluZzogMjVweCAzNXB4IDM1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMiksIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjAyOCksIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzNSksIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwgMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMDcpOyB9XFxuICAuc2FuZGJveCAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuc2FuZGJveCAuaW5uZXIge1xcbiAgICBwYWRkaW5nOiAzNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgIzIxMjEyMTtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cIixcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbk1JWElOUyBGaWxlXFxyXFxuXFxyXFxuRGVzY3JpcHRpb246XFx0U3RvcmUgU0NTUyBtaXhpbnMgaGVyZVxcclxcblxcclxcbkNhbGw6IEBpbmNsdWRlIGJhY2tncm91bmRTdGFuZGFyZDtcXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG5cXHJcXG5AbWl4aW4gZmxleF9jZW50ZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYmFja2dyb3VuZFN0YW5kYXJkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gc29saWRTaGFkb3dIb3ZlciB7XFxyXFxuXFx0Jjpob3ZlcntcXHJcXG5cXHRcXHR0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93LXJlZDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBtYXhXaWR0aCgkbWF4V2lkdGgpIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXgtd2lkdGg6ICRtYXhXaWR0aDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBwYXBlclRleHR1cmV7XFxyXFxuXFx0JjphZnRlcntcXHJcXG5cXHRcXHRjb250ZW50OicnO1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b3BhY2l0eTogLjU7XFxyXFxuXFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1nL3RleHR1cmVzL25hdHVyYWwtcGFwZXIucG5nJyk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG5cXHRcXHQvL21peC1ibGVuZC1tb2RlOiBsaWdodGVuO1xcclxcblxcdFxcdC8vZmlsdGVyOiBjb250cmFzdCgxLjUpO1xcclxcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzYW5kYm94XCI6IFwiU2FuZGJveF9zYW5kYm94X18xM1hCaFwiLFxuXHRcImNvbnRlbnRcIjogXCJTYW5kYm94X2NvbnRlbnRfXzFTRXl5XCIsXG5cdFwidGl0bGVcIjogXCJTYW5kYm94X3RpdGxlX19RODZhVlwiLFxuXHRcImlubmVyXCI6IFwiU2FuZGJveF9pbm5lcl9fMUZ5R3NcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyA5MzE6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuLyoqKioqKi8gXHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX25jY3dwY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0fSBmaW5hbGx5IHtcbi8qKioqKiovIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCAqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0X19uY2N3cGNrX3JlcXVpcmVfXy5hYiA9IF9fZGlybmFtZSArIFwiL1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDkzMSk7XG4vKioqKioqLyB9KSgpXG47IiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gODgwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuLyoqKioqKi8gXHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX25jY3dwY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0fSBmaW5hbGx5IHtcbi8qKioqKiovIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCAqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0X19uY2N3cGNrX3JlcXVpcmVfXy5hYiA9IF9fZGlybmFtZSArIFwiL1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDg4MCk7XG4vKioqKioqLyB9KSgpXG47IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQW1wU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PGFueT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnQW1wU3RhdGVDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5BbXBNb2RlKHtcbiAgYW1wRmlyc3QgPSBmYWxzZSxcbiAgaHlicmlkID0gZmFsc2UsXG4gIGhhc1F1ZXJ5ID0gZmFsc2UsXG59ID0ge30pOiBib29sZWFuIHtcbiAgcmV0dXJuIGFtcEZpcnN0IHx8IChoeWJyaWQgJiYgaGFzUXVlcnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbXAoKTogYm9vbGVhbiB7XG4gIC8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbiAgcmV0dXJuIGlzSW5BbXBNb2RlKFJlYWN0LnVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEhlYWRNYW5hZ2VyQ29udGV4dDogUmVhY3QuQ29udGV4dDx7XG4gIHVwZGF0ZUhlYWQ/OiAoc3RhdGU6IGFueSkgPT4gdm9pZFxuICBtb3VudGVkSW5zdGFuY2VzPzogYW55XG4gIHVwZGF0ZVNjcmlwdHM/OiAoc3RhdGU6IGFueSkgPT4gdm9pZFxuICBzY3JpcHRzPzogYW55XG59PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEhlYWRNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdIZWFkTWFuYWdlckNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVmZmVjdCBmcm9tICcuL3NpZGUtZWZmZWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBpc0luQW1wTW9kZSB9IGZyb20gJy4vYW1wJ1xuXG50eXBlIFdpdGhJbkFtcE1vZGUgPSB7XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKTogSlNYLkVsZW1lbnRbXSB7XG4gIGNvbnN0IGhlYWQgPSBbPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5dXG4gIGlmICghaW5BbXBNb2RlKSB7XG4gICAgaGVhZC5wdXNoKDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPilcbiAgfVxuICByZXR1cm4gaGVhZFxufVxuXG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KFxuICBsaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4pOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4ge1xuICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICAvLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG4gIGlmIChjaGlsZC50eXBlID09PSBSZWFjdC5GcmFnbWVudCkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdChcbiAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZShcbiAgICAgICAgKFxuICAgICAgICAgIGZyYWdtZW50TGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgICAgICAgIGZyYWdtZW50Q2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbiAgICAgICAgKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+ID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKVxuICAgICAgICB9LFxuICAgICAgICBbXVxuICAgICAgKVxuICAgIClcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpXG59XG5cbmNvbnN0IE1FVEFUWVBFUyA9IFsnbmFtZScsICdodHRwRXF1aXYnLCAnY2hhclNldCcsICdpdGVtUHJvcCddXG5cbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL1xuZnVuY3Rpb24gdW5pcXVlKCkge1xuICBjb25zdCBrZXlzID0gbmV3IFNldCgpXG4gIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YVR5cGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFDYXRlZ29yaWVzOiB7IFttZXRhdHlwZTogc3RyaW5nXTogU2V0PHN0cmluZz4gfSA9IHt9XG5cbiAgcmV0dXJuIChoOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgIGxldCBpc1VuaXF1ZSA9IHRydWVcbiAgICBsZXQgaGFzS2V5ID0gZmFsc2VcblxuICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgIGhhc0tleSA9IHRydWVcbiAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpXG4gICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLmFkZChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgIHN3aXRjaCAoaC50eXBlKSB7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICBjYXNlICdiYXNlJzpcbiAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFncy5hZGQoaC50eXBlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1FVEFUWVBFUy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1ldGF0eXBlID0gTUVUQVRZUEVTW2ldXG4gICAgICAgICAgaWYgKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSkgY29udGludWVcblxuICAgICAgICAgIGlmIChtZXRhdHlwZSA9PT0gJ2NoYXJTZXQnKSB7XG4gICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXVxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KClcbiAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09ICduYW1lJyB8fCAhaGFzS2V5KSAmJiBjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSA9IGNhdGVnb3JpZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNVbmlxdWVcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovXG5mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKFxuICBoZWFkRWxlbWVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgcHJvcHM6IFdpdGhJbkFtcE1vZGVcbikge1xuICByZXR1cm4gaGVhZEVsZW1lbnRzXG4gICAgLnJlZHVjZShcbiAgICAgIChsaXN0OiBSZWFjdC5SZWFjdENoaWxkW10sIGhlYWRFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgICAgICBjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShcbiAgICAgICAgICBoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKVxuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKVxuICAgIC5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pXG4gICAgLnJldmVyc2UoKVxuICAgIC5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSlcbiAgICAuZmlsdGVyKHVuaXF1ZSgpKVxuICAgIC5yZXZlcnNlKClcbiAgICAubWFwKChjOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpXG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgICAhcHJvcHMuaW5BbXBNb2RlXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgICAgLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG4gICAgICAgICAgWydodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzcyddLnNvbWUoKHVybCkgPT5cbiAgICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybClcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0geyAuLi4oYy5wcm9wcyB8fCB7fSkgfVxuICAgICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ11cbiAgICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCB7IGtleSB9KVxuICAgIH0pXG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9cbmZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBhbXBTdGF0ZSA9IHVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KVxuICBjb25zdCBoZWFkTWFuYWdlciA9IHVzZUNvbnRleHQoSGVhZE1hbmFnZXJDb250ZXh0KVxuICByZXR1cm4gKFxuICAgIDxFZmZlY3RcbiAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlPXtyZWR1Y2VDb21wb25lbnRzfVxuICAgICAgaGVhZE1hbmFnZXI9e2hlYWRNYW5hZ2VyfVxuICAgICAgaW5BbXBNb2RlPXtpc0luQW1wTW9kZShhbXBTdGF0ZSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRWZmZWN0PlxuICApXG59XG5cbi8vIFRPRE86IFJlbW92ZSBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5IZWFkLnJld2luZCA9ICgpID0+IHt9XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG50eXBlIFN0YXRlID0gSlNYLkVsZW1lbnRbXSB8IHVuZGVmaW5lZFxuXG50eXBlIFNpZGVFZmZlY3RQcm9wcyA9IHtcbiAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6IDxUPihcbiAgICBjb21wb25lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgcHJvcHM6IFRcbiAgKSA9PiBTdGF0ZVxuICBoYW5kbGVTdGF0ZUNoYW5nZT86IChzdGF0ZTogU3RhdGUpID0+IHZvaWRcbiAgaGVhZE1hbmFnZXI6IGFueVxuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50PFNpZGVFZmZlY3RQcm9wcz4ge1xuICBwcml2YXRlIF9oYXNIZWFkTWFuYWdlcjogYm9vbGVhblxuXG4gIGVtaXRDaGFuZ2UgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQoXG4gICAgICAgIHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoXG4gICAgICAgICAgWy4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc10sXG4gICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuX2hhc0hlYWRNYW5hZ2VyID1cbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIgJiYgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXG5cbiAgICBpZiAoaXNTZXJ2ZXIgJiYgdGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsIi8qKlxuICogSXNvbW9ycGhpYyBiYXNlNjQgdGhhdCB3b3JrcyBvbiB0aGUgc2VydmVyIGFuZCBjbGllbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQmFzZTY0KHN0cjogc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKCdiYXNlNjQnKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB3aW5kb3cuYnRvYShzdHIpXG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaW1hZ2VDb25maWdEZWZhdWx0PWV4cG9ydHMuVkFMSURfTE9BREVSUz12b2lkIDA7Y29uc3QgVkFMSURfTE9BREVSUz1bJ2RlZmF1bHQnLCdpbWdpeCcsJ2Nsb3VkaW5hcnknLCdha2FtYWknXTtleHBvcnRzLlZBTElEX0xPQURFUlM9VkFMSURfTE9BREVSUztjb25zdCBpbWFnZUNvbmZpZ0RlZmF1bHQ9e2RldmljZVNpemVzOls2NDAsNzUwLDgyOCwxMDgwLDEyMDAsMTkyMCwyMDQ4LDM4NDBdLGltYWdlU2l6ZXM6WzE2LDMyLDQ4LDY0LDk2LDEyOCwyNTYsMzg0XSxwYXRoOicvX25leHQvaW1hZ2UnLGxvYWRlcjonZGVmYXVsdCcsZG9tYWluczpbXX07ZXhwb3J0cy5pbWFnZUNvbmZpZ0RlZmF1bHQ9aW1hZ2VDb25maWdEZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UtY29uZmlnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsImltcG9ydHt0eXBlT2YgYXMgZSxpc0VsZW1lbnQgYXMgdCxpc1ZhbGlkRWxlbWVudFR5cGUgYXMgbn1mcm9tXCJyZWFjdC1pc1wiO2ltcG9ydCByLHt1c2VTdGF0ZSBhcyBvLHVzZUNvbnRleHQgYXMgcyx1c2VNZW1vIGFzIGksdXNlRWZmZWN0IGFzIGEsdXNlUmVmIGFzIGMsY3JlYXRlRWxlbWVudCBhcyB1LHVzZURlYnVnVmFsdWUgYXMgbCx1c2VMYXlvdXRFZmZlY3QgYXMgZH1mcm9tXCJyZWFjdFwiO2ltcG9ydCBoIGZyb21cInNoYWxsb3dlcXVhbFwiO2ltcG9ydCBwIGZyb21cIkBlbW90aW9uL3N0eWxpc1wiO2ltcG9ydCBmIGZyb21cIkBlbW90aW9uL3VuaXRsZXNzXCI7aW1wb3J0IG0gZnJvbVwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiO2ltcG9ydCB5IGZyb21cImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI7ZnVuY3Rpb24gdigpe3JldHVybih2PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGc9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W2VbMF1dLHI9MCxvPXQubGVuZ3RoO3I8bztyKz0xKW4ucHVzaCh0W3JdLGVbcisxXSk7cmV0dXJuIG59LFM9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmXCJbb2JqZWN0IE9iamVjdF1cIj09PSh0LnRvU3RyaW5nP3QudG9TdHJpbmcoKTpPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpJiYhZSh0KX0sdz1PYmplY3QuZnJlZXplKFtdKSxFPU9iamVjdC5mcmVlemUoe30pO2Z1bmN0aW9uIGIoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1mdW5jdGlvbiBfKGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlfHxlLmRpc3BsYXlOYW1lfHxlLm5hbWV8fFwiQ29tcG9uZW50XCJ9ZnVuY3Rpb24gTihlKXtyZXR1cm4gZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUuc3R5bGVkQ29tcG9uZW50SWR9dmFyIEE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJihwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfQVRUUnx8cHJvY2Vzcy5lbnYuU0NfQVRUUil8fFwiZGF0YS1zdHlsZWRcIixDPVwiNS4yLjFcIixJPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiSFRNTEVsZW1lbnRcImluIHdpbmRvdyxQPUJvb2xlYW4oXCJib29sZWFuXCI9PXR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWT9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZP1wiZmFsc2VcIiE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSYmcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSYmXCJcIiE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZP1wiZmFsc2VcIiE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWTpcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKSxPPXt9LFI9XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj97MTpcIkNhbm5vdCBjcmVhdGUgc3R5bGVkLWNvbXBvbmVudCBmb3IgY29tcG9uZW50OiAlcy5cXG5cXG5cIiwyOlwiQ2FuJ3QgY29sbGVjdCBzdHlsZXMgb25jZSB5b3UndmUgY29uc3VtZWQgYSBgU2VydmVyU3R5bGVTaGVldGAncyBzdHlsZXMhIGBTZXJ2ZXJTdHlsZVNoZWV0YCBpcyBhIG9uZSBvZmYgaW5zdGFuY2UgZm9yIGVhY2ggc2VydmVyLXNpZGUgcmVuZGVyIGN5Y2xlLlxcblxcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcmV1c2UgaXQgYWNyb3NzIHJlbmRlcnM/XFxuLSBBcmUgeW91IGFjY2lkZW50YWxseSBjYWxsaW5nIGNvbGxlY3RTdHlsZXMgdHdpY2U/XFxuXFxuXCIsMzpcIlN0cmVhbWluZyBTU1IgaXMgb25seSBzdXBwb3J0ZWQgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50OyBQbGVhc2UgZG8gbm90IHRyeSB0byBjYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBicm93c2VyLlxcblxcblwiLDQ6XCJUaGUgYFN0eWxlU2hlZXRNYW5hZ2VyYCBleHBlY3RzIGEgdmFsaWQgdGFyZ2V0IG9yIHNoZWV0IHByb3AhXFxuXFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIGNsaWVudCBhbmQgaXMgeW91ciB0YXJnZXQgZmFsc3k/XFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIHNlcnZlciBhbmQgaXMgdGhlIHNoZWV0IGZhbHN5P1xcblxcblwiLDU6XCJUaGUgY2xvbmUgbWV0aG9kIGNhbm5vdCBiZSB1c2VkIG9uIHRoZSBjbGllbnQhXFxuXFxuLSBBcmUgeW91IHJ1bm5pbmcgaW4gYSBjbGllbnQtbGlrZSBlbnZpcm9ubWVudCBvbiB0aGUgc2VydmVyP1xcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcnVuIFNTUiBvbiB0aGUgY2xpZW50P1xcblxcblwiLDY6XCJUcnlpbmcgdG8gaW5zZXJ0IGEgbmV3IHN0eWxlIHRhZywgYnV0IHRoZSBnaXZlbiBOb2RlIGlzIHVubW91bnRlZCFcXG5cXG4tIEFyZSB5b3UgdXNpbmcgYSBjdXN0b20gdGFyZ2V0IHRoYXQgaXNuJ3QgbW91bnRlZD9cXG4tIERvZXMgeW91ciBkb2N1bWVudCBub3QgaGF2ZSBhIHZhbGlkIGhlYWQgZWxlbWVudD9cXG4tIEhhdmUgeW91IGFjY2lkZW50YWxseSByZW1vdmVkIGEgc3R5bGUgdGFnIG1hbnVhbGx5P1xcblxcblwiLDc6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciBcInRoZW1lXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuJyw4OidUaGVtZVByb3ZpZGVyOiBQbGVhc2UgbWFrZSB5b3VyIFwidGhlbWVcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG4nLDk6XCJNaXNzaW5nIGRvY3VtZW50IGA8aGVhZD5gXFxuXFxuXCIsMTA6XCJDYW5ub3QgZmluZCBhIFN0eWxlU2hlZXQgaW5zdGFuY2UuIFVzdWFsbHkgdGhpcyBoYXBwZW5zIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb3BpZXMgb2Ygc3R5bGVkLWNvbXBvbmVudHMgbG9hZGVkIGF0IG9uY2UuIENoZWNrIG91dCB0aGlzIGlzc3VlIGZvciBob3cgdG8gdHJvdWJsZXNob290IGFuZCBmaXggdGhlIGNvbW1vbiBjYXNlcyB3aGVyZSB0aGlzIHNpdHVhdGlvbiBjYW4gaGFwcGVuOiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvaXNzdWVzLzE5NDEjaXNzdWVjb21tZW50LTQxNzg2MjAyMVxcblxcblwiLDExOlwiX1RoaXMgZXJyb3Igd2FzIHJlcGxhY2VkIHdpdGggYSBkZXYtdGltZSB3YXJuaW5nLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZm9yIHY0IGZpbmFsLl8gW2NyZWF0ZUdsb2JhbFN0eWxlXSByZWNlaXZlZCBjaGlsZHJlbiB3aGljaCB3aWxsIG5vdCBiZSByZW5kZXJlZC4gUGxlYXNlIHVzZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgcGFzc2luZyBjaGlsZHJlbiBlbGVtZW50cy5cXG5cXG5cIiwxMjpcIkl0IHNlZW1zIHlvdSBhcmUgaW50ZXJwb2xhdGluZyBhIGtleWZyYW1lIGRlY2xhcmF0aW9uICglcykgaW50byBhbiB1bnRhZ2dlZCBzdHJpbmcuIFRoaXMgd2FzIHN1cHBvcnRlZCBpbiBzdHlsZWQtY29tcG9uZW50cyB2MywgYnV0IGlzIG5vdCBsb25nZXIgc3VwcG9ydGVkIGluIHY0IGFzIGtleWZyYW1lcyBhcmUgbm93IGluamVjdGVkIG9uLWRlbWFuZC4gUGxlYXNlIHdyYXAgeW91ciBzdHJpbmcgaW4gdGhlIGNzc1xcXFxgXFxcXGAgaGVscGVyIHdoaWNoIGVuc3VyZXMgdGhlIHN0eWxlcyBhcmUgaW5qZWN0ZWQgY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYXBpI2Nzc1xcblxcblwiLDEzOlwiJXMgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlxcblxcblwiLDE0OidUaGVtZVByb3ZpZGVyOiBcInRoZW1lXCIgcHJvcCBpcyByZXF1aXJlZC5cXG5cXG4nLDE1OlwiQSBzdHlsaXMgcGx1Z2luIGhhcyBiZWVuIHN1cHBsaWVkIHRoYXQgaXMgbm90IG5hbWVkLiBXZSBuZWVkIGEgbmFtZSBmb3IgZWFjaCBwbHVnaW4gdG8gYmUgYWJsZSB0byBwcmV2ZW50IHN0eWxpbmcgY29sbGlzaW9ucyBiZXR3ZWVuIGRpZmZlcmVudCBzdHlsaXMgY29uZmlndXJhdGlvbnMgd2l0aGluIHRoZSBzYW1lIGFwcC4gQmVmb3JlIHlvdSBwYXNzIHlvdXIgcGx1Z2luIHRvIGA8U3R5bGVTaGVldE1hbmFnZXIgc3R5bGlzUGx1Z2lucz17W119PmAsIHBsZWFzZSBtYWtlIHN1cmUgZWFjaCBwbHVnaW4gaXMgdW5pcXVlbHktbmFtZWQsIGUuZy5cXG5cXG5gYGBqc1xcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbXBvcnRlZFBsdWdpbiwgJ25hbWUnLCB7IHZhbHVlOiAnc29tZS11bmlxdWUtbmFtZScgfSk7XFxuYGBgXFxuXFxuXCIsMTY6XCJSZWFjaGVkIHRoZSBsaW1pdCBvZiBob3cgbWFueSBzdHlsZWQgY29tcG9uZW50cyBtYXkgYmUgY3JlYXRlZCBhdCBncm91cCAlcy5cXG5Zb3UgbWF5IG9ubHkgY3JlYXRlIHVwIHRvIDEsMDczLDc0MSw4MjQgY29tcG9uZW50cy4gSWYgeW91J3JlIGNyZWF0aW5nIGNvbXBvbmVudHMgZHluYW1pY2FsbHksXFxuYXMgZm9yIGluc3RhbmNlIGluIHlvdXIgcmVuZGVyIG1ldGhvZCB0aGVuIHlvdSBtYXkgYmUgcnVubmluZyBpbnRvIHRoaXMgbGltaXRhdGlvbi5cXG5cXG5cIiwxNzpcIkNTU1N0eWxlU2hlZXQgY291bGQgbm90IGJlIGZvdW5kIG9uIEhUTUxTdHlsZUVsZW1lbnQuXFxuSGFzIHN0eWxlZC1jb21wb25lbnRzJyBzdHlsZSB0YWcgYmVlbiB1bm1vdW50ZWQgb3IgYWx0ZXJlZCBieSBhbm90aGVyIHNjcmlwdD9cXG5cIn06e307ZnVuY3Rpb24gRCgpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wP3ZvaWQgMDphcmd1bWVudHNbMF0sdD1bXSxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKz0xKXQucHVzaChuPDB8fGFyZ3VtZW50cy5sZW5ndGg8PW4/dm9pZCAwOmFyZ3VtZW50c1tuXSk7cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZT1lLnJlcGxhY2UoLyVbYS16XS8sdCl9KSksZX1mdW5jdGlvbiBqKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt0aHJvd1wicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/bmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdC5pby9KVUlhRSNcIitlK1wiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKyhuLmxlbmd0aD4wP1wiIEFyZ3M6IFwiK24uam9pbihcIiwgXCIpOlwiXCIpKTpuZXcgRXJyb3IoRC5hcHBseSh2b2lkIDAsW1JbZV1dLmNvbmNhdChuKSkudHJpbSgpKX12YXIgVD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheSg1MTIpLHRoaXMubGVuZ3RoPTUxMix0aGlzLnRhZz1lfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmluZGV4T2ZHcm91cD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7bjxlO24rKyl0Kz10aGlzLmdyb3VwU2l6ZXNbbl07cmV0dXJuIHR9LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0KXtpZihlPj10aGlzLmdyb3VwU2l6ZXMubGVuZ3RoKXtmb3IodmFyIG49dGhpcy5ncm91cFNpemVzLHI9bi5sZW5ndGgsbz1yO2U+PW87KShvPDw9MSk8MCYmaigxNixcIlwiK2UpO3RoaXMuZ3JvdXBTaXplcz1uZXcgVWludDMyQXJyYXkobyksdGhpcy5ncm91cFNpemVzLnNldChuKSx0aGlzLmxlbmd0aD1vO2Zvcih2YXIgcz1yO3M8bztzKyspdGhpcy5ncm91cFNpemVzW3NdPTB9Zm9yKHZhciBpPXRoaXMuaW5kZXhPZkdyb3VwKGUrMSksYT0wLGM9dC5sZW5ndGg7YTxjO2ErKyl0aGlzLnRhZy5pbnNlcnRSdWxlKGksdFthXSkmJih0aGlzLmdyb3VwU2l6ZXNbZV0rKyxpKyspfSx0LmNsZWFyR3JvdXA9ZnVuY3Rpb24oZSl7aWYoZTx0aGlzLmxlbmd0aCl7dmFyIHQ9dGhpcy5ncm91cFNpemVzW2VdLG49dGhpcy5pbmRleE9mR3JvdXAoZSkscj1uK3Q7dGhpcy5ncm91cFNpemVzW2VdPTA7Zm9yKHZhciBvPW47bzxyO28rKyl0aGlzLnRhZy5kZWxldGVSdWxlKG4pfX0sdC5nZXRHcm91cD1mdW5jdGlvbihlKXt2YXIgdD1cIlwiO2lmKGU+PXRoaXMubGVuZ3RofHwwPT09dGhpcy5ncm91cFNpemVzW2VdKXJldHVybiB0O2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXNbZV0scj10aGlzLmluZGV4T2ZHcm91cChlKSxvPXIrbixzPXI7czxvO3MrKyl0Kz10aGlzLnRhZy5nZXRSdWxlKHMpK1wiLyohc2MqL1xcblwiO3JldHVybiB0fSxlfSgpLGs9bmV3IE1hcCx4PW5ldyBNYXAsVj0xLEI9ZnVuY3Rpb24oZSl7aWYoay5oYXMoZSkpcmV0dXJuIGsuZ2V0KGUpO2Zvcig7eC5oYXMoVik7KVYrKzt2YXIgdD1WKys7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKCgwfHQpPDB8fHQ+MTw8MzApJiZqKDE2LFwiXCIrdCksay5zZXQoZSx0KSx4LnNldCh0LGUpLHR9LE09ZnVuY3Rpb24oZSl7cmV0dXJuIHguZ2V0KGUpfSx6PWZ1bmN0aW9uKGUsdCl7ay5zZXQoZSx0KSx4LnNldCh0LGUpfSxMPVwic3R5bGVbXCIrQSsnXVtkYXRhLXN0eWxlZC12ZXJzaW9uPVwiNS4yLjFcIl0nLEc9bmV3IFJlZ0V4cChcIl5cIitBKydcXFxcLmcoXFxcXGQrKVxcXFxbaWQ9XCIoW1xcXFx3XFxcXGQtXSspXCJcXFxcXS4qP1wiKFteXCJdKiknKSxGPWZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHIsbz1uLnNwbGl0KFwiLFwiKSxzPTAsaT1vLmxlbmd0aDtzPGk7cysrKShyPW9bc10pJiZlLnJlZ2lzdGVyTmFtZSh0LHIpfSxZPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPXQuaW5uZXJIVE1MLnNwbGl0KFwiLyohc2MqL1xcblwiKSxyPVtdLG89MCxzPW4ubGVuZ3RoO288cztvKyspe3ZhciBpPW5bb10udHJpbSgpO2lmKGkpe3ZhciBhPWkubWF0Y2goRyk7aWYoYSl7dmFyIGM9MHxwYXJzZUludChhWzFdLDEwKSx1PWFbMl07MCE9PWMmJih6KHUsYyksRihlLHUsYVszXSksZS5nZXRUYWcoKS5pbnNlcnRSdWxlcyhjLHIpKSxyLmxlbmd0aD0wfWVsc2Ugci5wdXNoKGkpfX19LHE9ZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgX193ZWJwYWNrX25vbmNlX18/X193ZWJwYWNrX25vbmNlX186bnVsbH0sSD1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5oZWFkLG49ZXx8dCxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmNoaWxkTm9kZXMsbj10Lmxlbmd0aDtuPj0wO24tLSl7dmFyIHI9dFtuXTtpZihyJiYxPT09ci5ub2RlVHlwZSYmci5oYXNBdHRyaWJ1dGUoQSkpcmV0dXJuIHJ9fShuKSxzPXZvaWQgMCE9PW8/by5uZXh0U2libGluZzpudWxsO3Iuc2V0QXR0cmlidXRlKEEsXCJhY3RpdmVcIiksci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCIsXCI1LjIuMVwiKTt2YXIgaT1xKCk7cmV0dXJuIGkmJnIuc2V0QXR0cmlidXRlKFwibm9uY2VcIixpKSxuLmluc2VydEJlZm9yZShyLHMpLHJ9LCQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PXRoaXMuZWxlbWVudD1IKGUpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpLHRoaXMuc2hlZXQ9ZnVuY3Rpb24oZSl7aWYoZS5zaGVldClyZXR1cm4gZS5zaGVldDtmb3IodmFyIHQ9ZG9jdW1lbnQuc3R5bGVTaGVldHMsbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtpZihvLm93bmVyTm9kZT09PWUpcmV0dXJuIG99aigxNyl9KHQpLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe3RyeXtyZXR1cm4gdGhpcy5zaGVldC5pbnNlcnRSdWxlKHQsZSksdGhpcy5sZW5ndGgrKywhMH1jYXRjaChlKXtyZXR1cm4hMX19LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLnNoZWV0LmRlbGV0ZVJ1bGUoZSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuc2hlZXQuY3NzUnVsZXNbZV07cmV0dXJuIHZvaWQgMCE9PXQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmNzc1RleHQ/dC5jc3NUZXh0OlwiXCJ9LGV9KCksVz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dGhpcy5ub2Rlcz10LmNoaWxkTm9kZXMsdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7aWYoZTw9dGhpcy5sZW5ndGgmJmU+PTApe3ZhciBuPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpLHI9dGhpcy5ub2Rlc1tlXTtyZXR1cm4gdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShuLHJ8fG51bGwpLHRoaXMubGVuZ3RoKyssITB9cmV0dXJuITF9LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2Rlc1tlXSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMubm9kZXNbZV0udGV4dENvbnRlbnQ6XCJcIn0sZX0oKSxVPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLnJ1bGVzPVtdLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe3JldHVybiBlPD10aGlzLmxlbmd0aCYmKHRoaXMucnVsZXMuc3BsaWNlKGUsMCx0KSx0aGlzLmxlbmd0aCsrLCEwKX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMucnVsZXMuc3BsaWNlKGUsMSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMucnVsZXNbZV06XCJcIn0sZX0oKSxKPUksWD17aXNTZXJ2ZXI6IUksdXNlQ1NTT01JbmplY3Rpb246IVB9LFo9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt2b2lkIDA9PT1lJiYoZT1FKSx2b2lkIDA9PT10JiYodD17fSksdGhpcy5vcHRpb25zPXYoe30sWCx7fSxlKSx0aGlzLmdzPXQsdGhpcy5uYW1lcz1uZXcgTWFwKG4pLCF0aGlzLm9wdGlvbnMuaXNTZXJ2ZXImJkkmJkomJihKPSExLGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKEwpLG49MCxyPXQubGVuZ3RoO248cjtuKyspe3ZhciBvPXRbbl07byYmXCJhY3RpdmVcIiE9PW8uZ2V0QXR0cmlidXRlKEEpJiYoWShlLG8pLG8ucGFyZW50Tm9kZSYmby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pKX19KHRoaXMpKX1lLnJlZ2lzdGVySWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIEIoZSl9O3ZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LnJlY29uc3RydWN0V2l0aE9wdGlvbnM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49ITApLG5ldyBlKHYoe30sdGhpcy5vcHRpb25zLHt9LHQpLHRoaXMuZ3MsbiYmdGhpcy5uYW1lc3x8dm9pZCAwKX0sdC5hbGxvY2F0ZUdTSW5zdGFuY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZ3NbZV09KHRoaXMuZ3NbZV18fDApKzF9LHQuZ2V0VGFnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGFnfHwodGhpcy50YWc9KG49KHQ9dGhpcy5vcHRpb25zKS5pc1NlcnZlcixyPXQudXNlQ1NTT01JbmplY3Rpb24sbz10LnRhcmdldCxlPW4/bmV3IFUobyk6cj9uZXcgJChvKTpuZXcgVyhvKSxuZXcgVChlKSkpO3ZhciBlLHQsbixyLG99LHQuaGFzTmFtZUZvcklkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5oYXModCl9LHQucmVnaXN0ZXJOYW1lPWZ1bmN0aW9uKGUsdCl7aWYoQihlKSx0aGlzLm5hbWVzLmhhcyhlKSl0aGlzLm5hbWVzLmdldChlKS5hZGQodCk7ZWxzZXt2YXIgbj1uZXcgU2V0O24uYWRkKHQpLHRoaXMubmFtZXMuc2V0KGUsbil9fSx0Lmluc2VydFJ1bGVzPWZ1bmN0aW9uKGUsdCxuKXt0aGlzLnJlZ2lzdGVyTmFtZShlLHQpLHRoaXMuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMoQihlKSxuKX0sdC5jbGVhck5hbWVzPWZ1bmN0aW9uKGUpe3RoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5jbGVhcigpfSx0LmNsZWFyUnVsZXM9ZnVuY3Rpb24oZSl7dGhpcy5nZXRUYWcoKS5jbGVhckdyb3VwKEIoZSkpLHRoaXMuY2xlYXJOYW1lcyhlKX0sdC5jbGVhclRhZz1mdW5jdGlvbigpe3RoaXMudGFnPXZvaWQgMH0sdC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5nZXRUYWcoKSxuPXQubGVuZ3RoLHI9XCJcIixvPTA7bzxuO28rKyl7dmFyIHM9TShvKTtpZih2b2lkIDAhPT1zKXt2YXIgaT1lLm5hbWVzLmdldChzKSxhPXQuZ2V0R3JvdXAobyk7aWYodm9pZCAwIT09aSYmMCE9PWEubGVuZ3RoKXt2YXIgYz1BK1wiLmdcIitvKydbaWQ9XCInK3MrJ1wiXScsdT1cIlwiO3ZvaWQgMCE9PWkmJmkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5sZW5ndGg+MCYmKHUrPWUrXCIsXCIpfSkpLHIrPVwiXCIrYStjKyd7Y29udGVudDpcIicrdSsnXCJ9Lyohc2MqL1xcbid9fX1yZXR1cm4gcn0odGhpcyl9LGV9KCksSz0vKGEpKGQpL2dpLFE9ZnVuY3Rpb24oZSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSsoZT4yNT8zOTo5NykpfTtmdW5jdGlvbiBlZShlKXt2YXIgdCxuPVwiXCI7Zm9yKHQ9TWF0aC5hYnMoZSk7dD41Mjt0PXQvNTJ8MCluPVEodCU1MikrbjtyZXR1cm4oUSh0JTUyKStuKS5yZXBsYWNlKEssXCIkMS0kMlwiKX12YXIgdGU9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5sZW5ndGg7bjspZT0zMyplXnQuY2hhckNvZGVBdCgtLW4pO3JldHVybiBlfSxuZT1mdW5jdGlvbihlKXtyZXR1cm4gdGUoNTM4MSxlKX07ZnVuY3Rpb24gcmUoZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKXt2YXIgbj1lW3RdO2lmKGIobikmJiFOKG4pKXJldHVybiExfXJldHVybiEwfXZhciBvZT1uZShcIjUuMi4xXCIpLHNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbil7dGhpcy5ydWxlcz1lLHRoaXMuc3RhdGljUnVsZXNJZD1cIlwiLHRoaXMuaXNTdGF0aWM9XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHZvaWQgMD09PW58fG4uaXNTdGF0aWMpJiZyZShlKSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5iYXNlSGFzaD10ZShvZSx0KSx0aGlzLmJhc2VTdHlsZT1uLFoucmVnaXN0ZXJJZCh0KX1yZXR1cm4gZS5wcm90b3R5cGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXM9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMuY29tcG9uZW50SWQsbz1bXTtpZih0aGlzLmJhc2VTdHlsZSYmby5wdXNoKHRoaXMuYmFzZVN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGUsdCxuKSksdGhpcy5pc1N0YXRpYyYmIW4uaGFzaClpZih0aGlzLnN0YXRpY1J1bGVzSWQmJnQuaGFzTmFtZUZvcklkKHIsdGhpcy5zdGF0aWNSdWxlc0lkKSlvLnB1c2godGhpcy5zdGF0aWNSdWxlc0lkKTtlbHNle3ZhciBzPU5lKHRoaXMucnVsZXMsZSx0LG4pLmpvaW4oXCJcIiksaT1lZSh0ZSh0aGlzLmJhc2VIYXNoLHMubGVuZ3RoKT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLGkpKXt2YXIgYT1uKHMsXCIuXCIraSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLGksYSl9by5wdXNoKGkpLHRoaXMuc3RhdGljUnVsZXNJZD1pfWVsc2V7Zm9yKHZhciBjPXRoaXMucnVsZXMubGVuZ3RoLHU9dGUodGhpcy5iYXNlSGFzaCxuLmhhc2gpLGw9XCJcIixkPTA7ZDxjO2QrKyl7dmFyIGg9dGhpcy5ydWxlc1tkXTtpZihcInN0cmluZ1wiPT10eXBlb2YgaClsKz1oLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih1PXRlKHUsaCtkKSk7ZWxzZSBpZihoKXt2YXIgcD1OZShoLGUsdCxuKSxmPUFycmF5LmlzQXJyYXkocCk/cC5qb2luKFwiXCIpOnA7dT10ZSh1LGYrZCksbCs9Zn19aWYobCl7dmFyIG09ZWUodT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLG0pKXt2YXIgeT1uKGwsXCIuXCIrbSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLG0seSl9by5wdXNoKG0pfX1yZXR1cm4gby5qb2luKFwiIFwiKX0sZX0oKSxpZT0vXlxccypcXC9cXC8uKiQvZ20sYWU9W1wiOlwiLFwiW1wiLFwiLlwiLFwiI1wiXTtmdW5jdGlvbiBjZShlKXt2YXIgdCxuLHIsbyxzPXZvaWQgMD09PWU/RTplLGk9cy5vcHRpb25zLGE9dm9pZCAwPT09aT9FOmksYz1zLnBsdWdpbnMsdT12b2lkIDA9PT1jP3c6YyxsPW5ldyBwKGEpLGQ9W10saD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe2lmKHQpdHJ5e2UodCtcIn1cIil9Y2F0Y2goZSl7fX1yZXR1cm4gZnVuY3Rpb24obixyLG8scyxpLGEsYyx1LGwsZCl7c3dpdGNoKG4pe2Nhc2UgMTppZigwPT09bCYmNjQ9PT1yLmNoYXJDb2RlQXQoMCkpcmV0dXJuIGUocitcIjtcIiksXCJcIjticmVhaztjYXNlIDI6aWYoMD09PXUpcmV0dXJuIHIrXCIvKnwqL1wiO2JyZWFrO2Nhc2UgMzpzd2l0Y2godSl7Y2FzZSAxMDI6Y2FzZSAxMTI6cmV0dXJuIGUob1swXStyKSxcIlwiO2RlZmF1bHQ6cmV0dXJuIHIrKDA9PT1kP1wiLyp8Ki9cIjpcIlwiKX1jYXNlLTI6ci5zcGxpdChcIi8qfCovfVwiKS5mb3JFYWNoKHQpfX19KChmdW5jdGlvbihlKXtkLnB1c2goZSl9KSksZj1mdW5jdGlvbihlLHIscyl7cmV0dXJuIDA9PT1yJiZhZS5pbmNsdWRlcyhzW24ubGVuZ3RoXSl8fHMubWF0Y2gobyk/ZTpcIi5cIit0fTtmdW5jdGlvbiBtKGUscyxpLGEpe3ZvaWQgMD09PWEmJihhPVwiJlwiKTt2YXIgYz1lLnJlcGxhY2UoaWUsXCJcIiksdT1zJiZpP2krXCIgXCIrcytcIiB7IFwiK2MrXCIgfVwiOmM7cmV0dXJuIHQ9YSxuPXMscj1uZXcgUmVnRXhwKFwiXFxcXFwiK24rXCJcXFxcYlwiLFwiZ1wiKSxvPW5ldyBSZWdFeHAoXCIoXFxcXFwiK24rXCJcXFxcYil7Mix9XCIpLGwoaXx8IXM/XCJcIjpzLHUpfXJldHVybiBsLnVzZShbXS5jb25jYXQodSxbZnVuY3Rpb24oZSx0LG8pezI9PT1lJiZvLmxlbmd0aCYmb1swXS5sYXN0SW5kZXhPZihuKT4wJiYob1swXT1vWzBdLnJlcGxhY2UocixmKSl9LGgsZnVuY3Rpb24oZSl7aWYoLTI9PT1lKXt2YXIgdD1kO3JldHVybiBkPVtdLHR9fV0pKSxtLmhhc2g9dS5sZW5ndGg/dS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubmFtZXx8aigxNSksdGUoZSx0Lm5hbWUpfSksNTM4MSkudG9TdHJpbmcoKTpcIlwiLG19dmFyIHVlPXIuY3JlYXRlQ29udGV4dCgpLGxlPXVlLkNvbnN1bWVyLGRlPXIuY3JlYXRlQ29udGV4dCgpLGhlPShkZS5Db25zdW1lcixuZXcgWikscGU9Y2UoKTtmdW5jdGlvbiBmZSgpe3JldHVybiBzKHVlKXx8aGV9ZnVuY3Rpb24gbWUoKXtyZXR1cm4gcyhkZSl8fHBlfWZ1bmN0aW9uIHllKGUpe3ZhciB0PW8oZS5zdHlsaXNQbHVnaW5zKSxuPXRbMF0scz10WzFdLGM9ZmUoKSx1PWkoKGZ1bmN0aW9uKCl7dmFyIHQ9YztyZXR1cm4gZS5zaGVldD90PWUuc2hlZXQ6ZS50YXJnZXQmJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dGFyZ2V0OmUudGFyZ2V0fSwhMSkpLGUuZGlzYWJsZUNTU09NSW5qZWN0aW9uJiYodD10LnJlY29uc3RydWN0V2l0aE9wdGlvbnMoe3VzZUNTU09NSW5qZWN0aW9uOiExfSkpLHR9KSxbZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24sZS5zaGVldCxlLnRhcmdldF0pLGw9aSgoZnVuY3Rpb24oKXtyZXR1cm4gY2Uoe29wdGlvbnM6e3ByZWZpeDohZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXN9LHBsdWdpbnM6bn0pfSksW2UuZGlzYWJsZVZlbmRvclByZWZpeGVzLG5dKTtyZXR1cm4gYSgoZnVuY3Rpb24oKXtoKG4sZS5zdHlsaXNQbHVnaW5zKXx8cyhlLnN0eWxpc1BsdWdpbnMpfSksW2Uuc3R5bGlzUGx1Z2luc10pLHIuY3JlYXRlRWxlbWVudCh1ZS5Qcm92aWRlcix7dmFsdWU6dX0sci5jcmVhdGVFbGVtZW50KGRlLlByb3ZpZGVyLHt2YWx1ZTpsfSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3IuQ2hpbGRyZW4ub25seShlLmNoaWxkcmVuKTplLmNoaWxkcmVuKSl9dmFyIHZlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3ZhciBuPXRoaXM7dGhpcy5pbmplY3Q9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1wZSk7dmFyIHI9bi5uYW1lK3QuaGFzaDtlLmhhc05hbWVGb3JJZChuLmlkLHIpfHxlLmluc2VydFJ1bGVzKG4uaWQscix0KG4ucnVsZXMscixcIkBrZXlmcmFtZXNcIikpfSx0aGlzLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGooMTIsU3RyaW5nKG4ubmFtZSkpfSx0aGlzLm5hbWU9ZSx0aGlzLmlkPVwic2Mta2V5ZnJhbWVzLVwiK2UsdGhpcy5ydWxlcz10fXJldHVybiBlLnByb3RvdHlwZS5nZXROYW1lPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1wZSksdGhpcy5uYW1lK2UuaGFzaH0sZX0oKSxnZT0vKFtBLVpdKS8sU2U9LyhbQS1aXSkvZyx3ZT0vXm1zLS8sRWU9ZnVuY3Rpb24oZSl7cmV0dXJuXCItXCIrZS50b0xvd2VyQ2FzZSgpfTtmdW5jdGlvbiBiZShlKXtyZXR1cm4gZ2UudGVzdChlKT9lLnJlcGxhY2UoU2UsRWUpLnJlcGxhY2Uod2UsXCItbXMtXCIpOmV9dmFyIF9lPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lfHwhMT09PWV8fFwiXCI9PT1lfTtmdW5jdGlvbiBOZShlLG4scixvKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHMsaT1bXSxhPTAsYz1lLmxlbmd0aDthPGM7YSs9MSlcIlwiIT09KHM9TmUoZVthXSxuLHIsbykpJiYoQXJyYXkuaXNBcnJheShzKT9pLnB1c2guYXBwbHkoaSxzKTppLnB1c2gocykpO3JldHVybiBpfWlmKF9lKGUpKXJldHVyblwiXCI7aWYoTihlKSlyZXR1cm5cIi5cIitlLnN0eWxlZENvbXBvbmVudElkO2lmKGIoZSkpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mKGw9ZSl8fGwucHJvdG90eXBlJiZsLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fHwhbilyZXR1cm4gZTt2YXIgdT1lKG4pO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnQodSkmJmNvbnNvbGUud2FybihfKGUpK1wiIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cIiksTmUodSxuLHIsbyl9dmFyIGw7cmV0dXJuIGUgaW5zdGFuY2VvZiB2ZT9yPyhlLmluamVjdChyLG8pLGUuZ2V0TmFtZShvKSk6ZTpTKGUpP2Z1bmN0aW9uIGUodCxuKXt2YXIgcixvLHM9W107Zm9yKHZhciBpIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShpKSYmIV9lKHRbaV0pJiYoUyh0W2ldKT9zLnB1c2guYXBwbHkocyxlKHRbaV0saSkpOmIodFtpXSk/cy5wdXNoKGJlKGkpK1wiOlwiLHRbaV0sXCI7XCIpOnMucHVzaChiZShpKStcIjogXCIrKHI9aSxudWxsPT0obz10W2ldKXx8XCJib29sZWFuXCI9PXR5cGVvZiBvfHxcIlwiPT09bz9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiBvfHwwPT09b3x8ciBpbiBmP1N0cmluZyhvKS50cmltKCk6bytcInB4XCIpK1wiO1wiKSk7cmV0dXJuIG4/W24rXCIge1wiXS5jb25jYXQocyxbXCJ9XCJdKTpzfShlKTplLnRvU3RyaW5nKCl9ZnVuY3Rpb24gQWUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3JldHVybiBiKGUpfHxTKGUpP05lKGcodyxbZV0uY29uY2F0KG4pKSk6MD09PW4ubGVuZ3RoJiYxPT09ZS5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzBdP2U6TmUoZyhlLG4pKX12YXIgQ2U9L2ludmFsaWQgaG9vayBjYWxsL2ksSWU9bmV3IFNldCxQZT1mdW5jdGlvbihlLHQpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBuPVwiVGhlIGNvbXBvbmVudCBcIitlKyh0Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiKStcIiBoYXMgYmVlbiBjcmVhdGVkIGR5bmFtaWNhbGx5LlxcbllvdSBtYXkgc2VlIHRoaXMgd2FybmluZyBiZWNhdXNlIHlvdSd2ZSBjYWxsZWQgc3R5bGVkIGluc2lkZSBhbm90aGVyIGNvbXBvbmVudC5cXG5UbyByZXNvbHZlIHRoaXMgb25seSBjcmVhdGUgbmV3IFN0eWxlZENvbXBvbmVudHMgb3V0c2lkZSBvZiBhbnkgcmVuZGVyIG1ldGhvZCBhbmQgZnVuY3Rpb24gY29tcG9uZW50LlwiO3RyeXtjKCksSWUuaGFzKG4pfHwoY29uc29sZS53YXJuKG4pLEllLmFkZChuKSl9Y2F0Y2goZSl7Q2UudGVzdChlLm1lc3NhZ2UpJiZJZS5kZWxldGUobil9fX0sT2U9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj1FKSxlLnRoZW1lIT09bi50aGVtZSYmZS50aGVtZXx8dHx8bi50aGVtZX0sUmU9L1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZyxEZT0vKF4tfC0kKS9nO2Z1bmN0aW9uIGplKGUpe3JldHVybiBlLnJlcGxhY2UoUmUsXCItXCIpLnJlcGxhY2UoRGUsXCJcIil9dmFyIFRlPWZ1bmN0aW9uKGUpe3JldHVybiBlZShuZShlKT4+PjApfTtmdW5jdGlvbiBrZShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKFwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fGUuY2hhckF0KDApPT09ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSl9dmFyIHhlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmIUFycmF5LmlzQXJyYXkoZSl9LFZlPWZ1bmN0aW9uKGUpe3JldHVyblwiX19wcm90b19fXCIhPT1lJiZcImNvbnN0cnVjdG9yXCIhPT1lJiZcInByb3RvdHlwZVwiIT09ZX07ZnVuY3Rpb24gQmUoZSx0LG4pe3ZhciByPWVbbl07eGUodCkmJnhlKHIpP01lKHIsdCk6ZVtuXT10fWZ1bmN0aW9uIE1lKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtmb3IodmFyIG89MCxzPW47bzxzLmxlbmd0aDtvKyspe3ZhciBpPXNbb107aWYoeGUoaSkpZm9yKHZhciBhIGluIGkpVmUoYSkmJkJlKGUsaVthXSxhKX1yZXR1cm4gZX12YXIgemU9ci5jcmVhdGVDb250ZXh0KCksTGU9emUuQ29uc3VtZXI7ZnVuY3Rpb24gR2UoZSl7dmFyIHQ9cyh6ZSksbj1pKChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiBqKDE0KTtpZihiKGUpKXt2YXIgbj1lKHQpO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fG51bGwhPT1uJiYhQXJyYXkuaXNBcnJheShuKSYmXCJvYmplY3RcIj09dHlwZW9mIG4/bjpqKDcpfXJldHVybiBBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiIT10eXBlb2YgZT9qKDgpOnQ/dih7fSx0LHt9LGUpOmV9KGUudGhlbWUsdCl9KSxbZS50aGVtZSx0XSk7cmV0dXJuIGUuY2hpbGRyZW4/ci5jcmVhdGVFbGVtZW50KHplLlByb3ZpZGVyLHt2YWx1ZTpufSxlLmNoaWxkcmVuKTpudWxsfXZhciBGZT17fTtmdW5jdGlvbiBZZShlLHQsbil7dmFyIG89TihlKSxpPSFrZShlKSxhPXQuYXR0cnMsYz12b2lkIDA9PT1hP3c6YSxkPXQuY29tcG9uZW50SWQsaD12b2lkIDA9PT1kP2Z1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIiE9dHlwZW9mIGU/XCJzY1wiOmplKGUpO0ZlW25dPShGZVtuXXx8MCkrMTt2YXIgcj1uK1wiLVwiK1RlKFwiNS4yLjFcIituK0ZlW25dKTtyZXR1cm4gdD90K1wiLVwiK3I6cn0odC5kaXNwbGF5TmFtZSx0LnBhcmVudENvbXBvbmVudElkKTpkLHA9dC5kaXNwbGF5TmFtZSxmPXZvaWQgMD09PXA/ZnVuY3Rpb24oZSl7cmV0dXJuIGtlKGUpP1wic3R5bGVkLlwiK2U6XCJTdHlsZWQoXCIrXyhlKStcIilcIn0oZSk6cCxnPXQuZGlzcGxheU5hbWUmJnQuY29tcG9uZW50SWQ/amUodC5kaXNwbGF5TmFtZSkrXCItXCIrdC5jb21wb25lbnRJZDp0LmNvbXBvbmVudElkfHxoLFM9byYmZS5hdHRycz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuYXR0cnMsYykuZmlsdGVyKEJvb2xlYW4pOmMsQT10LnNob3VsZEZvcndhcmRQcm9wO28mJmUuc2hvdWxkRm9yd2FyZFByb3AmJihBPXQuc2hvdWxkRm9yd2FyZFByb3A/ZnVuY3Rpb24obixyKXtyZXR1cm4gZS5zaG91bGRGb3J3YXJkUHJvcChuLHIpJiZ0LnNob3VsZEZvcndhcmRQcm9wKG4scil9OmUuc2hvdWxkRm9yd2FyZFByb3ApO3ZhciBDLEk9bmV3IHNlKG4sZyxvP2UuY29tcG9uZW50U3R5bGU6dm9pZCAwKSxQPUkuaXNTdGF0aWMmJjA9PT1jLmxlbmd0aCxPPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWUuYXR0cnMsaT1lLmNvbXBvbmVudFN0eWxlLGE9ZS5kZWZhdWx0UHJvcHMsYz1lLmZvbGRlZENvbXBvbmVudElkcyxkPWUuc2hvdWxkRm9yd2FyZFByb3AsaD1lLnN0eWxlZENvbXBvbmVudElkLHA9ZS50YXJnZXQ7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChoKTt2YXIgZj1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09ZSYmKGU9RSk7dmFyIHI9dih7fSx0LHt0aGVtZTplfSksbz17fTtyZXR1cm4gbi5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdCxuLHMsaT1lO2Zvcih0IGluIGIoaSkmJihpPWkocikpLGkpclt0XT1vW3RdPVwiY2xhc3NOYW1lXCI9PT10PyhuPW9bdF0scz1pW3RdLG4mJnM/bitcIiBcIitzOm58fHMpOmlbdF19KSksW3Isb119KE9lKHQscyh6ZSksYSl8fEUsdCxvKSx5PWZbMF0sZz1mWzFdLFM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZmUoKSxzPW1lKCksaT10P2UuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRSxvLHMpOmUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMobixvLHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmwoaSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmIXQmJnImJnIoaSksaX0oaSxyLHksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9lLndhcm5Ub29NYW55Q2xhc3Nlczp2b2lkIDApLHc9bixfPWcuJGFzfHx0LiRhc3x8Zy5hc3x8dC5hc3x8cCxOPWtlKF8pLEE9ZyE9PXQ/dih7fSx0LHt9LGcpOnQsQz17fTtmb3IodmFyIEkgaW4gQSlcIiRcIiE9PUlbMF0mJlwiYXNcIiE9PUkmJihcImZvcndhcmRlZEFzXCI9PT1JP0MuYXM9QVtJXTooZD9kKEksbSk6IU58fG0oSSkpJiYoQ1tJXT1BW0ldKSk7cmV0dXJuIHQuc3R5bGUmJmcuc3R5bGUhPT10LnN0eWxlJiYoQy5zdHlsZT12KHt9LHQuc3R5bGUse30sZy5zdHlsZSkpLEMuY2xhc3NOYW1lPUFycmF5LnByb3RvdHlwZS5jb25jYXQoYyxoLFMhPT1oP1M6bnVsbCx0LmNsYXNzTmFtZSxnLmNsYXNzTmFtZSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLEMucmVmPXcsdShfLEMpfShDLGUsdCxQKX07cmV0dXJuIE8uZGlzcGxheU5hbWU9ZiwoQz1yLmZvcndhcmRSZWYoTykpLmF0dHJzPVMsQy5jb21wb25lbnRTdHlsZT1JLEMuZGlzcGxheU5hbWU9ZixDLnNob3VsZEZvcndhcmRQcm9wPUEsQy5mb2xkZWRDb21wb25lbnRJZHM9bz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuZm9sZGVkQ29tcG9uZW50SWRzLGUuc3R5bGVkQ29tcG9uZW50SWQpOncsQy5zdHlsZWRDb21wb25lbnRJZD1nLEMudGFyZ2V0PW8/ZS50YXJnZXQ6ZSxDLndpdGhDb21wb25lbnQ9ZnVuY3Rpb24oZSl7dmFyIHI9dC5jb21wb25lbnRJZCxvPWZ1bmN0aW9uKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgbixyLG89e30scz1PYmplY3Qua2V5cyhlKTtmb3Iocj0wO3I8cy5sZW5ndGg7cisrKW49c1tyXSx0LmluZGV4T2Yobik+PTB8fChvW25dPWVbbl0pO3JldHVybiBvfSh0LFtcImNvbXBvbmVudElkXCJdKSxzPXImJnIrXCItXCIrKGtlKGUpP2U6amUoXyhlKSkpO3JldHVybiBZZShlLHYoe30sbyx7YXR0cnM6Uyxjb21wb25lbnRJZDpzfSksbil9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDLFwiZGVmYXVsdFByb3BzXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHN9LHNldDpmdW5jdGlvbih0KXt0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHM9bz9NZSh7fSxlLmRlZmF1bHRQcm9wcyx0KTp0fX0pLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihQZShmLGcpLEMud2FyblRvb01hbnlDbGFzc2VzPWZ1bmN0aW9uKGUsdCl7dmFyIG49e30scj0hMTtyZXR1cm4gZnVuY3Rpb24obyl7aWYoIXImJihuW29dPSEwLE9iamVjdC5rZXlzKG4pLmxlbmd0aD49MjAwKSl7dmFyIHM9dD8nIHdpdGggdGhlIGlkIG9mIFwiJyt0KydcIic6XCJcIjtjb25zb2xlLndhcm4oXCJPdmVyIDIwMCBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgXCIrZStzK1wiLlxcbkNvbnNpZGVyIHVzaW5nIHRoZSBhdHRycyBtZXRob2QsIHRvZ2V0aGVyIHdpdGggYSBzdHlsZSBvYmplY3QgZm9yIGZyZXF1ZW50bHkgY2hhbmdlZCBzdHlsZXMuXFxuRXhhbXBsZTpcXG4gIGNvbnN0IENvbXBvbmVudCA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcXG4gICAgc3R5bGU6IHtcXG4gICAgICBiYWNrZ3JvdW5kOiBwcm9wcy5iYWNrZ3JvdW5kLFxcbiAgICB9LFxcbiAgfSkpYHdpZHRoOiAxMDAlO2BcXG5cXG4gIDxDb21wb25lbnQgLz5cIikscj0hMCxuPXt9fX19KGYsZykpLEMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIi5cIitDLnN0eWxlZENvbXBvbmVudElkfSxpJiZ5KEMsZSx7YXR0cnM6ITAsY29tcG9uZW50U3R5bGU6ITAsZGlzcGxheU5hbWU6ITAsZm9sZGVkQ29tcG9uZW50SWRzOiEwLHNob3VsZEZvcndhcmRQcm9wOiEwLHN0eWxlZENvbXBvbmVudElkOiEwLHRhcmdldDohMCx3aXRoQ29tcG9uZW50OiEwfSksQ312YXIgcWU9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIGUodCxyLG8pe2lmKHZvaWQgMD09PW8mJihvPUUpLCFuKHIpKXJldHVybiBqKDEsU3RyaW5nKHIpKTt2YXIgcz1mdW5jdGlvbigpe3JldHVybiB0KHIsbyxBZS5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSl9O3JldHVybiBzLndpdGhDb25maWc9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHYoe30sbyx7fSxuKSl9LHMuYXR0cnM9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHYoe30sbyx7YXR0cnM6QXJyYXkucHJvdG90eXBlLmNvbmNhdChvLmF0dHJzLG4pLmZpbHRlcihCb29sZWFuKX0pKX0sc30oWWUsZSl9O1tcImFcIixcImFiYnJcIixcImFkZHJlc3NcIixcImFyZWFcIixcImFydGljbGVcIixcImFzaWRlXCIsXCJhdWRpb1wiLFwiYlwiLFwiYmFzZVwiLFwiYmRpXCIsXCJiZG9cIixcImJpZ1wiLFwiYmxvY2txdW90ZVwiLFwiYm9keVwiLFwiYnJcIixcImJ1dHRvblwiLFwiY2FudmFzXCIsXCJjYXB0aW9uXCIsXCJjaXRlXCIsXCJjb2RlXCIsXCJjb2xcIixcImNvbGdyb3VwXCIsXCJkYXRhXCIsXCJkYXRhbGlzdFwiLFwiZGRcIixcImRlbFwiLFwiZGV0YWlsc1wiLFwiZGZuXCIsXCJkaWFsb2dcIixcImRpdlwiLFwiZGxcIixcImR0XCIsXCJlbVwiLFwiZW1iZWRcIixcImZpZWxkc2V0XCIsXCJmaWdjYXB0aW9uXCIsXCJmaWd1cmVcIixcImZvb3RlclwiLFwiZm9ybVwiLFwiaDFcIixcImgyXCIsXCJoM1wiLFwiaDRcIixcImg1XCIsXCJoNlwiLFwiaGVhZFwiLFwiaGVhZGVyXCIsXCJoZ3JvdXBcIixcImhyXCIsXCJodG1sXCIsXCJpXCIsXCJpZnJhbWVcIixcImltZ1wiLFwiaW5wdXRcIixcImluc1wiLFwia2JkXCIsXCJrZXlnZW5cIixcImxhYmVsXCIsXCJsZWdlbmRcIixcImxpXCIsXCJsaW5rXCIsXCJtYWluXCIsXCJtYXBcIixcIm1hcmtcIixcIm1hcnF1ZWVcIixcIm1lbnVcIixcIm1lbnVpdGVtXCIsXCJtZXRhXCIsXCJtZXRlclwiLFwibmF2XCIsXCJub3NjcmlwdFwiLFwib2JqZWN0XCIsXCJvbFwiLFwib3B0Z3JvdXBcIixcIm9wdGlvblwiLFwib3V0cHV0XCIsXCJwXCIsXCJwYXJhbVwiLFwicGljdHVyZVwiLFwicHJlXCIsXCJwcm9ncmVzc1wiLFwicVwiLFwicnBcIixcInJ0XCIsXCJydWJ5XCIsXCJzXCIsXCJzYW1wXCIsXCJzY3JpcHRcIixcInNlY3Rpb25cIixcInNlbGVjdFwiLFwic21hbGxcIixcInNvdXJjZVwiLFwic3BhblwiLFwic3Ryb25nXCIsXCJzdHlsZVwiLFwic3ViXCIsXCJzdW1tYXJ5XCIsXCJzdXBcIixcInRhYmxlXCIsXCJ0Ym9keVwiLFwidGRcIixcInRleHRhcmVhXCIsXCJ0Zm9vdFwiLFwidGhcIixcInRoZWFkXCIsXCJ0aW1lXCIsXCJ0aXRsZVwiLFwidHJcIixcInRyYWNrXCIsXCJ1XCIsXCJ1bFwiLFwidmFyXCIsXCJ2aWRlb1wiLFwid2JyXCIsXCJjaXJjbGVcIixcImNsaXBQYXRoXCIsXCJkZWZzXCIsXCJlbGxpcHNlXCIsXCJmb3JlaWduT2JqZWN0XCIsXCJnXCIsXCJpbWFnZVwiLFwibGluZVwiLFwibGluZWFyR3JhZGllbnRcIixcIm1hcmtlclwiLFwibWFza1wiLFwicGF0aFwiLFwicGF0dGVyblwiLFwicG9seWdvblwiLFwicG9seWxpbmVcIixcInJhZGlhbEdyYWRpZW50XCIsXCJyZWN0XCIsXCJzdG9wXCIsXCJzdmdcIixcInRleHRcIixcInRzcGFuXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3FlW2VdPXFlKGUpfSkpO3ZhciBIZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLnJ1bGVzPWUsdGhpcy5jb21wb25lbnRJZD10LHRoaXMuaXNTdGF0aWM9cmUoZSksWi5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrMSl9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuY3JlYXRlU3R5bGVzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPXIoTmUodGhpcy5ydWxlcyx0LG4scikuam9pbihcIlwiKSxcIlwiKSxzPXRoaXMuY29tcG9uZW50SWQrZTtuLmluc2VydFJ1bGVzKHMscyxvKX0sdC5yZW1vdmVTdHlsZXM9ZnVuY3Rpb24oZSx0KXt0LmNsZWFyUnVsZXModGhpcy5jb21wb25lbnRJZCtlKX0sdC5yZW5kZXJTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7ZT4yJiZaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCtlKSx0aGlzLnJlbW92ZVN0eWxlcyhlLG4pLHRoaXMuY3JlYXRlU3R5bGVzKGUsdCxuLHIpfSxlfSgpO2Z1bmN0aW9uICRlKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspbltvLTFdPWFyZ3VtZW50c1tvXTt2YXIgaT1BZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSksYT1cInNjLWdsb2JhbC1cIitUZShKU09OLnN0cmluZ2lmeShpKSksdT1uZXcgSGUoaSxhKTtmdW5jdGlvbiBsKGUpe3ZhciB0PWZlKCksbj1tZSgpLG89cyh6ZSksbD1jKHQuYWxsb2NhdGVHU0luc3RhbmNlKGEpKS5jdXJyZW50O3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnIuQ2hpbGRyZW4uY291bnQoZS5jaGlsZHJlbikmJmNvbnNvbGUud2FybihcIlRoZSBnbG9iYWwgc3R5bGUgY29tcG9uZW50IFwiK2ErXCIgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLlwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9PWUuaW5kZXhPZihcIkBpbXBvcnRcIil9KSkmJmNvbnNvbGUud2FybihcIlBsZWFzZSBkbyBub3QgdXNlIEBpbXBvcnQgQ1NTIHN5bnRheCBpbiBjcmVhdGVHbG9iYWxTdHlsZSBhdCB0aGlzIHRpbWUsIGFzIHRoZSBDU1NPTSBBUElzIHdlIHVzZSBpbiBwcm9kdWN0aW9uIGRvIG5vdCBoYW5kbGUgaXQgd2VsbC4gSW5zdGVhZCwgd2UgcmVjb21tZW5kIHVzaW5nIGEgbGlicmFyeSBzdWNoIGFzIHJlYWN0LWhlbG1ldCB0byBpbmplY3QgYSB0eXBpY2FsIDxsaW5rPiBtZXRhIHRhZyB0byB0aGUgc3R5bGVzaGVldCwgb3Igc2ltcGx5IGVtYmVkZGluZyBpdCBtYW51YWxseSBpbiB5b3VyIGluZGV4Lmh0bWwgPGhlYWQ+IHNlY3Rpb24gZm9yIGEgc2ltcGxlciBhcHAuXCIpLGQoKGZ1bmN0aW9uKCl7cmV0dXJuIGgobCxlLHQsbyxuKSxmdW5jdGlvbigpe3JldHVybiB1LnJlbW92ZVN0eWxlcyhsLHQpfX0pLFtsLGUsdCxvLG5dKSxudWxsfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtpZih1LmlzU3RhdGljKXUucmVuZGVyU3R5bGVzKGUsTyxuLG8pO2Vsc2V7dmFyIHM9dih7fSx0LHt0aGVtZTpPZSh0LHIsbC5kZWZhdWx0UHJvcHMpfSk7dS5yZW5kZXJTdHlsZXMoZSxzLG4sbyl9fXJldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlBlKGEpLHIubWVtbyhsKX1mdW5jdGlvbiBXZShlKXtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuXCIpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbz1BZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSkuam9pbihcIlwiKSxzPVRlKG8pO3JldHVybiBuZXcgdmUocyxvKX12YXIgVWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpczt0aGlzLl9lbWl0U2hlZXRDU1M9ZnVuY3Rpb24oKXt2YXIgdD1lLmluc3RhbmNlLnRvU3RyaW5nKCksbj1xKCk7cmV0dXJuXCI8c3R5bGUgXCIrW24mJidub25jZT1cIicrbisnXCInLEErJz1cInRydWVcIicsJ2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjIuMVwiJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpK1wiPlwiK3QrXCI8L3N0eWxlPlwifSx0aGlzLmdldFN0eWxlVGFncz1mdW5jdGlvbigpe3JldHVybiBlLnNlYWxlZD9qKDIpOmUuX2VtaXRTaGVldENTUygpfSx0aGlzLmdldFN0eWxlRWxlbWVudD1mdW5jdGlvbigpe3ZhciB0O2lmKGUuc2VhbGVkKXJldHVybiBqKDIpO3ZhciBuPSgodD17fSlbQV09XCJcIix0W1wiZGF0YS1zdHlsZWQtdmVyc2lvblwiXT1cIjUuMi4xXCIsdC5kYW5nZXJvdXNseVNldElubmVySFRNTD17X19odG1sOmUuaW5zdGFuY2UudG9TdHJpbmcoKX0sdCksbz1xKCk7cmV0dXJuIG8mJihuLm5vbmNlPW8pLFtyLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHYoe30sbix7a2V5Olwic2MtMC0wXCJ9KSldfSx0aGlzLnNlYWw9ZnVuY3Rpb24oKXtlLnNlYWxlZD0hMH0sdGhpcy5pbnN0YW5jZT1uZXcgWih7aXNTZXJ2ZXI6ITB9KSx0aGlzLnNlYWxlZD0hMX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNlYWxlZD9qKDIpOnIuY3JlYXRlRWxlbWVudCh5ZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQuaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiBqKDMpfSxlfSgpLEplPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZm9yd2FyZFJlZigoZnVuY3Rpb24odCxuKXt2YXIgbz1zKHplKSxpPWUuZGVmYXVsdFByb3BzLGE9T2UodCxvLGkpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PWEmJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInK18oZSkrJ1wiJyksci5jcmVhdGVFbGVtZW50KGUsdih7fSx0LHt0aGVtZTphLHJlZjpufSkpfSkpO3JldHVybiB5KHQsZSksdC5kaXNwbGF5TmFtZT1cIldpdGhUaGVtZShcIitfKGUpK1wiKVwiLHR9LFhlPWZ1bmN0aW9uKCl7cmV0dXJuIHMoemUpfSxaZT17U3R5bGVTaGVldDpaLG1hc3RlclNoZWV0OmhlfTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB5b3UndmUgaW1wb3J0ZWQgJ3N0eWxlZC1jb21wb25lbnRzJyBvbiBSZWFjdCBOYXRpdmUuXFxuUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZVwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYod2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl18fDAsMT09PXdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdJiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFRoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIHRvIG5vdCByZW5kZXIgcHJvcGVybHksIGVycm9ycyBkdXJpbmcgdGhlIHJlaHlkcmF0aW9uIHByb2Nlc3MsIGEgbWlzc2luZyB0aGVtZSBwcm9wLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBnb29kIHJlYXNvbi5cXG5cXG5TZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLlwiKSx3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXSs9MSk7ZXhwb3J0IGRlZmF1bHQgcWU7ZXhwb3J0e1VlIGFzIFNlcnZlclN0eWxlU2hlZXQsbGUgYXMgU3R5bGVTaGVldENvbnN1bWVyLHVlIGFzIFN0eWxlU2hlZXRDb250ZXh0LHllIGFzIFN0eWxlU2hlZXRNYW5hZ2VyLExlIGFzIFRoZW1lQ29uc3VtZXIsemUgYXMgVGhlbWVDb250ZXh0LEdlIGFzIFRoZW1lUHJvdmlkZXIsWmUgYXMgX19QUklWQVRFX18sJGUgYXMgY3JlYXRlR2xvYmFsU3R5bGUsQWUgYXMgY3NzLE4gYXMgaXNTdHlsZWRDb21wb25lbnQsV2UgYXMga2V5ZnJhbWVzLFhlIGFzIHVzZVRoZW1lLEMgYXMgdmVyc2lvbixKZSBhcyB3aXRoVGhlbWV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMubWFwXG4iLCIvL0lNUE9SVFNcclxuLy9pbXBvcnQgSGVhZCBmcm9tICdAY29tcG9uZW50cy9IZWFkL0hlYWQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICdAY29tcG9uZW50cy9UZW1wbGF0ZS9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0Bjb21wb25lbnRzL1RlbXBsYXRlL0NvbnRhaW5lci9Db250YWluZXInXHJcbmltcG9ydCBTYW5kYm94IGZyb20gJ0Bjb21wb25lbnRzL1RlbXBsYXRlL1NhbmRib3gvU2FuZGJveCdcclxuaW1wb3J0IENvbXBvbmVudE1ldGEgZnJvbSAnQGNvbXBvbmVudHMvVGVtcGxhdGUvQ29tcG9uZW50TWV0YS9Db21wb25lbnRNZXRhJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0Bjb21wb25lbnRzL1RlbXBsYXRlL0Zvb3Rlci9Gb290ZXInXHJcblxyXG5pbXBvcnQgQ2VsbEdyaWQgZnJvbSAnQGNvbXBvbmVudHMvQ2VsbEdyaWQvQ2VsbEdyaWQnXHJcblxyXG4vL1ZBUlNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIFxyXG4gIC8vR2VuZXJhbCBQYWdlIFZBUlNcclxuXHQgIGxldCB0aXRsZSA9IFwiQ2VsbEdyaWRcIlxyXG5cdCAgbGV0IGF1dGhvciA9IFwiQWxlYyBSZWltZWxcIlxyXG5cdCAgbGV0IGF1dGhvclRlYW0gPSBcIlBsYW5ldCBDYXJhdmFuIFN0dWRpb3NcIlxyXG5cdCAgbGV0IGRlc2NyaXB0aW9uID1cIlxcXHJcblx0XHRGbGV4Ym94LXBvd2VyZWQgY2VsbC9jYXJkIGxheW91dC4gIFxcXHJcblx0XHRVc2VmdWwgZm9yIGJvZHkgY29udGVudCBvciBsaXN0aW5ncy5cXFxyXG5cdFx0VmlzdWFsIGNvbnRlbnQgaXMgcG9zaXRpb25lZCBpbnNpZGUgdHJhbnNwYXJlbnQgY2VsbHMsXFxcclxuXHRcdHVzaW5nIG1heC13aWR0aCBhbmQgcGFkZGluZyB0byBjb250cm9sIHNwYWNpbmcgcmF0aGVyIHRoYW4gbWFyZ2lucy5cXFxyXG5cdCAgXCJcclxuXHQgIGxldCBjb250ZW50UHJvcHMgPSAnY29sdW1ucywgY2VsbElubmVyV2lkdGgnXHJcblx0ICBsZXQgbGlicmFyaWVzID0gXCJTdHlsZWQgQ29tcG9uZW50c1wiXHJcblx0ICBcclxuXHQgIGxldCBmb290ZXJNZXNzYWdlID0gXCJDcmVhdGVkIGJ5IFBsYW5ldCBDYXJhdmFuIFN0dWRpb3NcIlxyXG4gIFxyXG4gIC8vQ29tcG9uZW50IENvbnRlbnRcclxuICBcdFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgYXV0aG9yLFxyXG4gICAgICAgIGF1dGhvclRlYW0sXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29udGVudFByb3BzLFxyXG4gICAgICAgIGxpYnJhcmllcyxcclxuICAgICAgICBmb290ZXJNZXNzYWdlLFxyXG4gICAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5lY3JvIEN1bHQgWmluZSBDb21wb25lbnQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8SGVhZGVyIHRpdGxlPVwiSG9seSBNb3VudGFpbiBDb21wb25lbnQgRGVtb1wiIC8+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDb21wb25lbnRNZXRhXHJcbiAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cclxuICAgICAgICAgICAgYXV0aG9yPXtwcm9wcy5hdXRob3J9XHJcbiAgICAgICAgICAgIGF1dGhvclRlYW09e3Byb3BzLmF1dGhvclRlYW19XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgY29udGVudFByb3BzPXtwcm9wcy5jb250ZW50UHJvcHN9XHJcbiAgICAgICAgICAgIGxpYnJhcmllcz17cHJvcHMubGlicmFyaWVzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICBcclxuICAgICAgICA8U2FuZGJveD5cclxuICAgICAgICAgIDxDZWxsR3JpZFxyXG4gICAgICAgICAgICBjb2x1bW5zPVwiM1wiXHJcbiAgICAgICAgICAgIGNlbGxJbm5lcldpZHRoPVwiNDUwcHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NhbmRib3g+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxGb290ZXIgZm9vdGVyTWVzc2FnZT17cHJvcHMuZm9vdGVyTWVzc2FnZX0gLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9