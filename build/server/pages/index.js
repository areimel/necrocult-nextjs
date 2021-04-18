module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/BlogListing/BlogListing.js":
/*!***********************************************!*\
  !*** ./components/BlogListing/BlogListing.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogListing; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogListing.module.scss */ "./components/BlogListing/BlogListing.module.scss");
/* harmony import */ var _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Textures_Texture_Texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Textures/Texture/Texture */ "./components/Textures/Texture/Texture.js");

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\BlogListing\\BlogListing.js";



function BlogListing({
  //page vars
  postUrl,
  postImage,
  postAlbumCredit,
  postColumn,
  postHeadline,
  postSnippet,
  reverse
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
    className: _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.blogListing + " " + (reverse ? _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.reverse : " "),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: postUrl,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "",
          src: postImage,
          alt: postAlbumCredit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 4
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.imageCredit + " labelmaker",
        children: postAlbumCredit
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 4
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.copy + " ",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.columnName,
            children: postColumn
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.titleMain,
            href: postUrl,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Textures_Texture_Texture__WEBPACK_IMPORTED_MODULE_3__["default"], {
              option: "8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 7
            }, this), postHeadline]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.snippet,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Textures_Texture_Texture__WEBPACK_IMPORTED_MODULE_3__["default"], {
            option: "8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [postSnippet, "..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _BlogListing_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.readMore,
            href: postUrl,
            children: "Read More"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 2
  }, this);
}

/***/ }),

/***/ "./components/BlogListing/BlogListing.module.scss":
/*!********************************************************!*\
  !*** ./components/BlogListing/BlogListing.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blogListing": "BlogListing_blogListing__3OQGz",
	"image": "BlogListing_image__33_BZ",
	"imageCredit": "BlogListing_imageCredit__1zYjX",
	"copy": "BlogListing_copy__17wjo",
	"inner": "BlogListing_inner__3CmPI",
	"title": "BlogListing_title__7CMym",
	"titleMain": "BlogListing_titleMain__10HDv",
	"columnName": "BlogListing_columnName__1ZT0_",
	"snippet": "BlogListing_snippet__qw8Yk",
	"readMore": "BlogListing_readMore__16etq",
	"reverse": "BlogListing_reverse__3OZSS"
};


/***/ }),

/***/ "./components/Layout/MasterCSS/MasterCSS.js":
/*!**************************************************!*\
  !*** ./components/Layout/MasterCSS/MasterCSS.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MasterCSS; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Layout\\MasterCSS\\MasterCSS.js";

/************************************

MasterCSS 	
	
	-	Link all JS files in desired order, 
		then add this component to the end of 
		your global layout, so all JS is loaded last.

************************************/
function MasterCSS({//page vars
}) {
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

/***/ }),

/***/ "./components/Layout/MasterJS/MasterJS.js":
/*!************************************************!*\
  !*** ./components/Layout/MasterJS/MasterJS.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MasterJS; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Layout\\MasterJS\\MasterJS.js";

/************************************

MasterJS 	
	
	-	Link all JS files in desired order, 
		then add this component to the end of 
		your global layout, so all JS is loaded last.

************************************/
function MasterJS({//page vars
}) {
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

/***/ }),

/***/ "./components/Sliders/DefaultSlider/DefaultSlider.js":
/*!***********************************************************!*\
  !*** ./components/Sliders/DefaultSlider/DefaultSlider.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultSlider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DefaultSlider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultSlider.module.scss */ "./components/Sliders/DefaultSlider/DefaultSlider.module.scss");
/* harmony import */ var _DefaultSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DefaultSlider_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BlogListing_BlogListing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/BlogListing/BlogListing */ "./components/BlogListing/BlogListing.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Sliders\\DefaultSlider\\DefaultSlider.js";


 // import Swiper core and required modules


 // install Swiper modules

swiper__WEBPACK_IMPORTED_MODULE_4___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_4__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_4__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_4__["A11y"], swiper__WEBPACK_IMPORTED_MODULE_4__["Autoplay"]]);
function DefaultSlider({//page vars
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_5__["Swiper"], {
    spaceBetween: 100,
    slidesPerView: 1,
    loop: true,
    speed: 500,
    navigation: true,
    pagination: {
      clickable: true
    },
    onSwiper: swiper => console.log(swiper),
    onSlideChange: () => console.log('slide change'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_5__["SwiperSlide"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _DefaultSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.SlideInner,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BlogListing_BlogListing__WEBPACK_IMPORTED_MODULE_3__["default"], {
          postUrl: "#test",
          postImage: "/img/morbid.jpg",
          postAlbumCredit: "Morbid - Year of The Goat",
          postColumn: "Tales From The Basement",
          postHeadline: "Morbid - Year of The Goat",
          postSnippet: "It has only been a few hours since I've translated and spoke aloud the first of the demon resurrection passages from the Book of the Dead"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_5__["SwiperSlide"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _DefaultSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.SlideInner,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BlogListing_BlogListing__WEBPACK_IMPORTED_MODULE_3__["default"], {
          postUrl: "#test",
          postImage: "/img/morbid.jpg",
          postAlbumCredit: "Morbid - Year of The Goat",
          postColumn: "Tales From The Basement",
          postHeadline: "Morbid - Year of The Goat",
          postSnippet: "It has only been a few hours since I've translated and spoke aloud the first of the demon resurrection passages from the Book of the Dead"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_5__["SwiperSlide"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _DefaultSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.SlideInner,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BlogListing_BlogListing__WEBPACK_IMPORTED_MODULE_3__["default"], {
          postUrl: "#test",
          postImage: "/img/morbid.jpg",
          postAlbumCredit: "Morbid - Year of The Goat",
          postColumn: "Tales From The Basement",
          postHeadline: "Morbid - Year of The Goat",
          postSnippet: "It has only been a few hours since I've translated and spoke aloud the first of the demon resurrection passages from the Book of the Dead"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 2
  }, this);
}

/***/ }),

/***/ "./components/Sliders/DefaultSlider/DefaultSlider.module.scss":
/*!********************************************************************!*\
  !*** ./components/Sliders/DefaultSlider/DefaultSlider.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./components/Template/ComponentMeta/ComponentMeta.js":
/*!************************************************************!*\
  !*** ./components/Template/ComponentMeta/ComponentMeta.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComponentMeta; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentMeta.module.scss */ "./components/Template/ComponentMeta/ComponentMeta.module.scss");
/* harmony import */ var _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\ComponentMeta\\ComponentMeta.js";

function ComponentMeta({
  title,
  author,
  authorTeam,
  description,
  contentProps,
  libraries
}) {
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

/***/ }),

/***/ "./components/Template/ComponentMeta/ComponentMeta.module.scss":
/*!*********************************************************************!*\
  !*** ./components/Template/ComponentMeta/ComponentMeta.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"descriptionWrapper": "ComponentMeta_descriptionWrapper__3izpi",
	"row": "ComponentMeta_row__rfS4t",
	"cell": "ComponentMeta_cell__qqI37",
	"title": "ComponentMeta_title__10P9G",
	"description": "ComponentMeta_description__20_1D",
	"contentProps": "ComponentMeta_contentProps__3S06M",
	"libraries": "ComponentMeta_libraries__1Wbmg",
	"inner": "ComponentMeta_inner__3vcL5"
};


/***/ }),

/***/ "./components/Template/Container/Container.js":
/*!****************************************************!*\
  !*** ./components/Template/Container/Container.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.module.scss */ "./components/Template/Container/Container.module.scss");
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\Container\\Container.js";

function Container({
  children,
  containerSize,
  flex
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container + (flex ? ' ' + _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flex : ''),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./components/Template/Container/Container.module.scss":
/*!*************************************************************!*\
  !*** ./components/Template/Container/Container.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Container_container__2RQ73",
	"flex": "Container_flex__1Nqly"
};


/***/ }),

/***/ "./components/Template/Footer/Footer.js":
/*!**********************************************!*\
  !*** ./components/Template/Footer/Footer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ "./components/Template/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_MasterJS_MasterJS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layout/MasterJS/MasterJS */ "./components/Layout/MasterJS/MasterJS.js");


var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\Footer\\Footer.js";


function Footer({
  footerMessage
}) {
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

/***/ }),

/***/ "./components/Template/Footer/Footer.module.scss":
/*!*******************************************************!*\
  !*** ./components/Template/Footer/Footer.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__3aUwb",
	"footer_message": "Footer_footer_message__XsYhv"
};


/***/ }),

/***/ "./components/Template/Header/Header.js":
/*!**********************************************!*\
  !*** ./components/Template/Header/Header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Template/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Template/Container/Container */ "./components/Template/Container/Container.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_MasterCSS_MasterCSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Layout/MasterCSS/MasterCSS */ "./components/Layout/MasterCSS/MasterCSS.js");

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\Header\\Header.js";




function Header({
  title
}) {
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

/***/ }),

/***/ "./components/Template/Header/Header.module.scss":
/*!*******************************************************!*\
  !*** ./components/Template/Header/Header.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__2tXk3",
	"container": "Header_container__b6Uux",
	"contentLeft": "Header_contentLeft__HPdQO",
	"logo": "Header_logo__3Sb59",
	"title": "Header_title__1hEU7",
	"contentRight": "Header_contentRight__1F3VT"
};


/***/ }),

/***/ "./components/Template/Sandbox/Sandbox.js":
/*!************************************************!*\
  !*** ./components/Template/Sandbox/Sandbox.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sandbox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sandbox.module.scss */ "./components/Template/Sandbox/Sandbox.module.scss");
/* harmony import */ var _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Template/Container/Container */ "./components/Template/Container/Container.js");

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\Sandbox\\Sandbox.js";


function Sandbox({
  children
}) {
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

/***/ }),

/***/ "./components/Template/Sandbox/Sandbox.module.scss":
/*!*********************************************************!*\
  !*** ./components/Template/Sandbox/Sandbox.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sandbox": "Sandbox_sandbox__13XBh",
	"content": "Sandbox_content__1SEyy",
	"title": "Sandbox_title__Q86aV",
	"inner": "Sandbox_inner__1FyGs"
};


/***/ }),

/***/ "./components/Template/TestSquare/TestSquare.js":
/*!******************************************************!*\
  !*** ./components/Template/TestSquare/TestSquare.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestSquare; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TestSquare_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestSquare.module.scss */ "./components/Template/TestSquare/TestSquare.module.scss");
/* harmony import */ var _TestSquare_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TestSquare_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Template\\TestSquare\\TestSquare.js";

function TestSquare({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TestSquare_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestSquare,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TestSquare_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 6
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Template/TestSquare/TestSquare.module.scss":
/*!***************************************************************!*\
  !*** ./components/Template/TestSquare/TestSquare.module.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"TestSquare": "TestSquare_TestSquare__3oCcc",
	"inner": "TestSquare_inner__1KLq9"
};


/***/ }),

/***/ "./components/Textures/Texture/Texture.js":
/*!************************************************!*\
  !*** ./components/Textures/Texture/Texture.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Texture; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Texture_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Texture.module.scss */ "./components/Textures/Texture/Texture.module.scss");
/* harmony import */ var _Texture_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Texture_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\components\\Textures\\Texture\\Texture.js";


const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
	background-image: url('/img/textures/natural-paper.png');
	opacity: ${props => props.opacity || "1.0"};

	&[data-option="1"]{
		background-image: url('/img/textures/natural-paper.png');
	}
	&[data-option="2"]{
		background-image: url('/img/textures/paper-2.png');
	}
	&[data-option="3"]{
		background-image: url('/img/textures/light-paper-fibers.png');
	}
	&[data-option="4"]{
		background-image: url('/img/textures/clean-gray-paper.png');
	}
	&[data-option="5"]{
		background-image: url('/img/textures/cardboard.png');
	}
	&[data-option="6"]{
		background-image: url('/img/textures/green-dust-and-scratches.png');
	}
	&[data-option="7"]{
		background-image: url('/img/textures/groovepaper.png');
	}
	&[data-option="8"]{
		background-image: url('/img/textures/rice-paper-2.png');
	}
  }

`;
function Texture({
  //page vars
  option,
  opacity
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Overlay, {
    className: _Texture_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Texture,
    "data-option": option,
    opacity: opacity
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 4
  }, this);
}

/***/ }),

/***/ "./components/Textures/Texture/Texture.module.scss":
/*!*********************************************************!*\
  !*** ./components/Textures/Texture/Texture.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Texture": "Texture_Texture__-FUv3"
};


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

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
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

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
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
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

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
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
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
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

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
        paddingTop
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
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
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
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
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
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
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
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
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


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Template/Header/Header */ "./components/Template/Header/Header.js");
/* harmony import */ var _components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Template/Container/Container */ "./components/Template/Container/Container.js");
/* harmony import */ var _components_Template_Sandbox_Sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Template/Sandbox/Sandbox */ "./components/Template/Sandbox/Sandbox.js");
/* harmony import */ var _components_Template_ComponentMeta_ComponentMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Template/ComponentMeta/ComponentMeta */ "./components/Template/ComponentMeta/ComponentMeta.js");
/* harmony import */ var _components_Template_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Template/Footer/Footer */ "./components/Template/Footer/Footer.js");
/* harmony import */ var _components_Template_TestSquare_TestSquare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Template/TestSquare/TestSquare */ "./components/Template/TestSquare/TestSquare.js");
/* harmony import */ var _components_Sliders_DefaultSlider_DefaultSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Sliders/DefaultSlider/DefaultSlider */ "./components/Sliders/DefaultSlider/DefaultSlider.js");


var _jsxFileName = "D:\\Dev\\Personal Sites\\Necro Cult Zine React\\Git Folder 1\\necrocult-nextjs\\pages\\index.js";
//IMPORTS
//import Head from '@components/Head/Head'







 //VARS

async function getStaticProps() {
  //General Page VARS
  let title = "Initial Component Demo";
  let author = "Alec Reimel";
  let authorTeam = "Planet Caravan Studios";
  let description = "\
		This is the inital demo template for Holy Mountain frontend components.  \
		Clone this page out for demoing new components.\
	  					";
  let contentProps = 'none';
  let libraries = "none";
  let footerMessage = "Created by Planet Caravan Studios"; //Component Content

  return {
    props: {
      title,
      author,
      authorTeam,
      description,
      contentProps,
      libraries,
      footerMessage
    } // will be passed to the page component as props

  };
}
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
        title: "Necro Cult Zine Component Demo"
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
        children: "Components go here"
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
      lineNumber: 74,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2dMaXN0aW5nL0Jsb2dMaXN0aW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZ0xpc3RpbmcvQmxvZ0xpc3RpbmcubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTWFzdGVyQ1NTL01hc3RlckNTUy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9NYXN0ZXJKUy9NYXN0ZXJKUy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NsaWRlcnMvRGVmYXVsdFNsaWRlci9EZWZhdWx0U2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGVycy9EZWZhdWx0U2xpZGVyL0RlZmF1bHRTbGlkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9Db21wb25lbnRNZXRhL0NvbXBvbmVudE1ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9Db21wb25lbnRNZXRhL0NvbXBvbmVudE1ldGEubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9Db250YWluZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVtcGxhdGUvQ29udGFpbmVyL0NvbnRhaW5lci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlbXBsYXRlL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9Gb290ZXIvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVtcGxhdGUvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlbXBsYXRlL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9TYW5kYm94L1NhbmRib3guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9TYW5kYm94L1NhbmRib3gubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9UZXN0U3F1YXJlL1Rlc3RTcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9UZXN0U3F1YXJlL1Rlc3RTcXVhcmUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXh0dXJlcy9UZXh0dXJlL1RleHR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXh0dXJlcy9UZXh0dXJlL1RleHR1cmUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2lwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2lwZXIvcmVhY3RcIiJdLCJuYW1lcyI6WyJCbG9nTGlzdGluZyIsInBvc3RVcmwiLCJwb3N0SW1hZ2UiLCJwb3N0QWxidW1DcmVkaXQiLCJwb3N0Q29sdW1uIiwicG9zdEhlYWRsaW5lIiwicG9zdFNuaXBwZXQiLCJyZXZlcnNlIiwic3R5bGVzIiwiYmxvZ0xpc3RpbmciLCJpbWFnZSIsImltYWdlQ3JlZGl0IiwiY29weSIsImlubmVyIiwidGl0bGUiLCJjb2x1bW5OYW1lIiwidGl0bGVNYWluIiwic25pcHBldCIsInJlYWRNb3JlIiwiTWFzdGVyQ1NTIiwiTWFzdGVySlMiLCJTd2lwZXJDb3JlIiwidXNlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJBMTF5IiwiQXV0b3BsYXkiLCJEZWZhdWx0U2xpZGVyIiwiY2xpY2thYmxlIiwic3dpcGVyIiwiY29uc29sZSIsImxvZyIsIlNsaWRlSW5uZXIiLCJDb21wb25lbnRNZXRhIiwiYXV0aG9yIiwiYXV0aG9yVGVhbSIsImRlc2NyaXB0aW9uIiwiY29udGVudFByb3BzIiwibGlicmFyaWVzIiwiZGVzY3JpcHRpb25XcmFwcGVyIiwicm93IiwiY2VsbCIsInByb3BzIiwiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJjb250YWluZXJTaXplIiwiZmxleCIsImNvbnRhaW5lciIsIkZvb3RlciIsImZvb3Rlck1lc3NhZ2UiLCJmb290ZXIiLCJmb290ZXJfbWVzc2FnZSIsIkhlYWRlciIsImhlYWRlciIsImNvbnRlbnRMZWZ0IiwiY29udGVudFJpZ2h0IiwiU2FuZGJveCIsInNhbmRib3giLCJjb250ZW50IiwiVGVzdFNxdWFyZSIsIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJvcGFjaXR5IiwiVGV4dHVyZSIsIm9wdGlvbiIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwiaSIsInNyYyIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwic2V0UmVmIiwiZWwiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwib3B0aW9ucyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiY2FsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtR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Q0FBQ087QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBLGtCQURGO0FBOEJELEM7Ozs7Ozs7Ozs7O0FDNUVELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Jsb2dMaXN0aW5nLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgVGV4dHVyZSBmcm9tICdAY29tcG9uZW50cy9UZXh0dXJlcy9UZXh0dXJlL1RleHR1cmUnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dMaXN0aW5nKHsgXHJcbiAgLy9wYWdlIHZhcnNcclxuICBwb3N0VXJsLFxyXG4gIHBvc3RJbWFnZSxcclxuICBwb3N0QWxidW1DcmVkaXQsXHJcbiAgcG9zdENvbHVtbixcclxuICBwb3N0SGVhZGxpbmUsXHJcbiAgcG9zdFNuaXBwZXQsXHJcbiAgcmV2ZXJzZVxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuXHQ8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5ibG9nTGlzdGluZyArXCIgXCIrIChyZXZlcnNlID8gc3R5bGVzLnJldmVyc2UgOiBcIiBcIil9ID5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cclxuXHRcdFx0PGEgaHJlZj17cG9zdFVybH0+XHJcblx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPXtwb3N0SW1hZ2V9IGFsdD17cG9zdEFsYnVtQ3JlZGl0fSAvPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ3JlZGl0ICsgXCIgbGFiZWxtYWtlclwifT57cG9zdEFsYnVtQ3JlZGl0fTwvc3Bhbj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvcHkgKyBcIiBcIn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlIH0+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW5OYW1lfT5cclxuXHRcdFx0XHRcdFx0e3Bvc3RDb2x1bW59XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZU1haW59IGhyZWY9e3Bvc3RVcmx9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dHVyZSBvcHRpb249XCI4XCIvPlxyXG5cdFx0XHRcdFx0XHR7cG9zdEhlYWRsaW5lfVxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNuaXBwZXQgfT5cclxuXHRcdFx0XHRcdDxUZXh0dXJlIG9wdGlvbj1cIjhcIi8+XHJcblx0XHRcdFx0XHQ8cD57cG9zdFNuaXBwZXR9Li4uPC9wPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtzdHlsZXMucmVhZE1vcmV9IGhyZWY9e3Bvc3RVcmx9PlxyXG5cdFx0XHRcdFx0XHRSZWFkIE1vcmVcclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdDwvYXJ0aWNsZT5cclxuICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmxvZ0xpc3RpbmdcIjogXCJCbG9nTGlzdGluZ19ibG9nTGlzdGluZ19fM09RR3pcIixcblx0XCJpbWFnZVwiOiBcIkJsb2dMaXN0aW5nX2ltYWdlX18zM19CWlwiLFxuXHRcImltYWdlQ3JlZGl0XCI6IFwiQmxvZ0xpc3RpbmdfaW1hZ2VDcmVkaXRfXzF6WWpYXCIsXG5cdFwiY29weVwiOiBcIkJsb2dMaXN0aW5nX2NvcHlfXzE3d2pvXCIsXG5cdFwiaW5uZXJcIjogXCJCbG9nTGlzdGluZ19pbm5lcl9fM0NtUElcIixcblx0XCJ0aXRsZVwiOiBcIkJsb2dMaXN0aW5nX3RpdGxlX183Q015bVwiLFxuXHRcInRpdGxlTWFpblwiOiBcIkJsb2dMaXN0aW5nX3RpdGxlTWFpbl9fMTBIRHZcIixcblx0XCJjb2x1bW5OYW1lXCI6IFwiQmxvZ0xpc3RpbmdfY29sdW1uTmFtZV9fMVpUMF9cIixcblx0XCJzbmlwcGV0XCI6IFwiQmxvZ0xpc3Rpbmdfc25pcHBldF9fcXc4WWtcIixcblx0XCJyZWFkTW9yZVwiOiBcIkJsb2dMaXN0aW5nX3JlYWRNb3JlX18xNmV0cVwiLFxuXHRcInJldmVyc2VcIjogXCJCbG9nTGlzdGluZ19yZXZlcnNlX18zT1pTU1wiXG59O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuTWFzdGVyQ1NTIFx0XHJcblx0XHJcblx0LVx0TGluayBhbGwgSlMgZmlsZXMgaW4gZGVzaXJlZCBvcmRlciwgXHJcblx0XHR0aGVuIGFkZCB0aGlzIGNvbXBvbmVudCB0byB0aGUgZW5kIG9mIFxyXG5cdFx0eW91ciBnbG9iYWwgbGF5b3V0LCBzbyBhbGwgSlMgaXMgbG9hZGVkIGxhc3QuXHJcblxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXN0ZXJDU1MoeyBcclxuICAvL3BhZ2UgdmFyc1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICBcdDw+XHJcbiAgXHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMy9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItaUJCWG04Zlc5MCtudUxjU0tsYm1yUGNMYTBPVDkyeE8xQklzWit5d0RXWkN2cXNXZ2NjVjNnRm9SQnYweis4ZExKZ3lBSEloUjM1VlpjMm9NL2dJMXc9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICBcdDwvPlxyXG4gIClcclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5NYXN0ZXJKUyBcdFxyXG5cdFxyXG5cdC1cdExpbmsgYWxsIEpTIGZpbGVzIGluIGRlc2lyZWQgb3JkZXIsIFxyXG5cdFx0dGhlbiBhZGQgdGhpcyBjb21wb25lbnQgdG8gdGhlIGVuZCBvZiBcclxuXHRcdHlvdXIgZ2xvYmFsIGxheW91dCwgc28gYWxsIEpTIGlzIGxvYWRlZCBsYXN0LlxyXG5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFzdGVySlMoeyBcclxuICAvL3BhZ2UgdmFyc1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICBcdDw+XHJcbiAgXHRcdDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNi4wL2pxdWVyeS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGE1MTItODk0WUU2UVdENUk1OUhnWk9HUmVGWW00ZG5XYzFRdDVOdHZZU2FOY09QK3UxVDlxWWR2ZGloejBQUFNpaXFuLysvM2U3Sm80RWFHN1R1YmZXR1VyTVE9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcblxyXG4gIFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2hlYWRyb29tLzAuMTIuMC9oZWFkcm9vbS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGE1MTItOVVzcktUWXpTOXNtRG0yRTU4TUxzMEFDdE9raStVQzRiQnE0aUs1d2k3bEp5Y3dxY2FpSHhyMWJkRXNJVm9LMGw1U1RFekxVZFl5RGRGUTVPRWpjenc9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgXHRcdDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvaGVhZHJvb20vMC4xMi4wL2pRdWVyeS5oZWFkcm9vbS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGE1MTItM3p4TkltRWhRMnBuT1NIZHlHQ0NKaHBNclUzNWo3VWdubHljVS9zTG5ic2RtY0grcFhtOWJSOWh0dTZwNmdncXg2YjVWRUtlaW5haktEcFVXN0x1VFE9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcblxyXG4gIFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjMvanMvc29saWQubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhNTEyLVFjK2NCTXQvNC9LWEoxRjZuTlFhaFhJc2dQeWdITTRTMlhXQ2hvdW1WOHFrcFo5b08rZ0JEQkVwT3hnYmtRUS82RGxIeDZjVXhhNW5CaEVidWlSOHh3PT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG5cclxuICBcdFx0PHNjcmlwdCBzcmM9XCIvc2NyaXB0cy9tYWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgXHQ8Lz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RlZmF1bHRTbGlkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgQmxvZ0xpc3RpbmcgZnJvbSAnQGNvbXBvbmVudHMvQmxvZ0xpc3RpbmcvQmxvZ0xpc3RpbmcnXHJcblxyXG5cclxuLy8gaW1wb3J0IFN3aXBlciBjb3JlIGFuZCByZXF1aXJlZCBtb2R1bGVzXHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24sIEExMXksIEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcclxuXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuXHJcblxyXG4vLyBpbnN0YWxsIFN3aXBlciBtb2R1bGVzXHJcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBBMTF5LCBBdXRvcGxheV0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmF1bHRTbGlkZXIoeyBcclxuICAvL3BhZ2UgdmFyc1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuXHQ8U3dpcGVyXHJcblx0XHRzcGFjZUJldHdlZW49ezEwMH1cclxuXHRcdHNsaWRlc1BlclZpZXc9ezF9XHJcblx0XHRsb29wPXt0cnVlfVxyXG5cdFx0c3BlZWQ9ezUwMH1cclxuXHRcdFxyXG5cdFx0bmF2aWdhdGlvblxyXG5cdFx0cGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuXHJcblx0XHRvblN3aXBlcj17KHN3aXBlcikgPT4gY29uc29sZS5sb2coc3dpcGVyKX1cclxuXHRcdG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdzbGlkZSBjaGFuZ2UnKX1cclxuXHQ+XHJcblx0XHQ8U3dpcGVyU2xpZGU+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2xpZGVJbm5lcn0+XHJcblx0XHRcdFx0PEJsb2dMaXN0aW5nXHJcblx0XHQgICAgICAgIFx0XHRwb3N0VXJsID0gXCIjdGVzdFwiXHJcblx0XHQgICAgICAgIFx0XHRwb3N0SW1hZ2UgPSBcIi9pbWcvbW9yYmlkLmpwZ1wiXHJcblx0XHQgICAgICAgIFx0XHRwb3N0QWxidW1DcmVkaXQgPSBcIk1vcmJpZCAtIFllYXIgb2YgVGhlIEdvYXRcIlxyXG5cdFx0ICAgICAgICBcdFx0cG9zdENvbHVtbiA9IFwiVGFsZXMgRnJvbSBUaGUgQmFzZW1lbnRcIlxyXG5cdFx0ICAgICAgICBcdFx0cG9zdEhlYWRsaW5lID0gXCJNb3JiaWQgLSBZZWFyIG9mIFRoZSBHb2F0XCJcclxuXHRcdCAgICAgICAgXHRcdHBvc3RTbmlwcGV0ID0gXCJJdCBoYXMgb25seSBiZWVuIGEgZmV3IGhvdXJzIHNpbmNlIEkndmUgdHJhbnNsYXRlZCBhbmQgc3Bva2UgYWxvdWQgdGhlIGZpcnN0IG9mIHRoZSBkZW1vbiByZXN1cnJlY3Rpb24gcGFzc2FnZXMgZnJvbSB0aGUgQm9vayBvZiB0aGUgRGVhZFwiXHJcblx0XHQgICAgICAgIFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L1N3aXBlclNsaWRlPlxyXG5cclxuXHRcdDxTd2lwZXJTbGlkZT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TbGlkZUlubmVyfT5cclxuXHRcdFx0XHQ8QmxvZ0xpc3RpbmdcclxuXHRcdCAgICAgICAgXHRcdHBvc3RVcmwgPSBcIiN0ZXN0XCJcclxuXHRcdCAgICAgICAgXHRcdHBvc3RJbWFnZSA9IFwiL2ltZy9tb3JiaWQuanBnXCJcclxuXHRcdCAgICAgICAgXHRcdHBvc3RBbGJ1bUNyZWRpdCA9IFwiTW9yYmlkIC0gWWVhciBvZiBUaGUgR29hdFwiXHJcblx0XHQgICAgICAgIFx0XHRwb3N0Q29sdW1uID0gXCJUYWxlcyBGcm9tIFRoZSBCYXNlbWVudFwiXHJcblx0XHQgICAgICAgIFx0XHRwb3N0SGVhZGxpbmUgPSBcIk1vcmJpZCAtIFllYXIgb2YgVGhlIEdvYXRcIlxyXG5cdFx0ICAgICAgICBcdFx0cG9zdFNuaXBwZXQgPSBcIkl0IGhhcyBvbmx5IGJlZW4gYSBmZXcgaG91cnMgc2luY2UgSSd2ZSB0cmFuc2xhdGVkIGFuZCBzcG9rZSBhbG91ZCB0aGUgZmlyc3Qgb2YgdGhlIGRlbW9uIHJlc3VycmVjdGlvbiBwYXNzYWdlcyBmcm9tIHRoZSBCb29rIG9mIHRoZSBEZWFkXCJcclxuXHRcdCAgICAgICAgXHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvU3dpcGVyU2xpZGU+XHJcblxyXG5cdFx0PFN3aXBlclNsaWRlPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNsaWRlSW5uZXJ9PlxyXG5cdFx0XHRcdDxCbG9nTGlzdGluZ1xyXG5cdFx0ICAgICAgICBcdFx0cG9zdFVybCA9IFwiI3Rlc3RcIlxyXG5cdFx0ICAgICAgICBcdFx0cG9zdEltYWdlID0gXCIvaW1nL21vcmJpZC5qcGdcIlxyXG5cdFx0ICAgICAgICBcdFx0cG9zdEFsYnVtQ3JlZGl0ID0gXCJNb3JiaWQgLSBZZWFyIG9mIFRoZSBHb2F0XCJcclxuXHRcdCAgICAgICAgXHRcdHBvc3RDb2x1bW4gPSBcIlRhbGVzIEZyb20gVGhlIEJhc2VtZW50XCJcclxuXHRcdCAgICAgICAgXHRcdHBvc3RIZWFkbGluZSA9IFwiTW9yYmlkIC0gWWVhciBvZiBUaGUgR29hdFwiXHJcblx0XHQgICAgICAgIFx0XHRwb3N0U25pcHBldCA9IFwiSXQgaGFzIG9ubHkgYmVlbiBhIGZldyBob3VycyBzaW5jZSBJJ3ZlIHRyYW5zbGF0ZWQgYW5kIHNwb2tlIGFsb3VkIHRoZSBmaXJzdCBvZiB0aGUgZGVtb24gcmVzdXJyZWN0aW9uIHBhc3NhZ2VzIGZyb20gdGhlIEJvb2sgb2YgdGhlIERlYWRcIlxyXG5cdFx0ICAgICAgICBcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Td2lwZXJTbGlkZT5cclxuXHQ8L1N3aXBlcj5cclxuICBcdFxyXG4gIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21wb25lbnRNZXRhLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50TWV0YSh7IFxyXG4gIHRpdGxlLFxyXG4gIGF1dGhvcixcclxuICBhdXRob3JUZWFtLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGNvbnRlbnRQcm9wcyxcclxuICBsaWJyYXJpZXMsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb25XcmFwcGVyfT5cclxuICBcdFxyXG5cclxuXHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGwgKycgJysgc3R5bGVzLnRpdGxlfT5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17c3R5bGVzLmlubmVyfT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG5cdFx0XHRcdFx0PHNwYW4+Q29tcG9uZW50Ojwvc3Bhbj4gXHJcblx0XHRcdFx0XHR7dGl0bGV9XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT5cclxuXHRcdFx0XHRcdDxzcGFuPkRldmVsb3Blcjo8L3NwYW4+IFxyXG5cdFx0XHRcdFx0e2F1dGhvcn08YnIvPlxyXG5cdFx0XHRcdFx0e2F1dGhvclRlYW19XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsICsnICcrIHN0eWxlcy5kZXNjcmlwdGlvbn0+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuXHRcdFx0XHRcdDxzcGFuPkRlc2NyaXB0aW9uOjwvc3Bhbj4gXHJcblx0XHRcdFx0XHR7ZGVzY3JpcHRpb259XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGwgKycgJysgc3R5bGVzLmNvbnRlbnRQcm9wc30+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLnByb3BzfT5cclxuXHRcdFx0XHRcdDxzcGFuPkF2YWlsYWJsZSBQcm9wczo8L3NwYW4+IFxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0e2NvbnRlbnRQcm9wc31cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsICsnICcrIHN0eWxlcy5saWJyYXJpZXN9PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saWJyYXJpZXN9PlxyXG5cdFx0XHRcdFx0PHNwYW4+TGlicmFyaWVzIFVzZWQ6PC9zcGFuPiBcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdHtsaWJyYXJpZXN9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuICAgIFxyXG4gICAgXHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRlc2NyaXB0aW9uV3JhcHBlclwiOiBcIkNvbXBvbmVudE1ldGFfZGVzY3JpcHRpb25XcmFwcGVyX18zaXpwaVwiLFxuXHRcInJvd1wiOiBcIkNvbXBvbmVudE1ldGFfcm93X19yZlM0dFwiLFxuXHRcImNlbGxcIjogXCJDb21wb25lbnRNZXRhX2NlbGxfX3FxSTM3XCIsXG5cdFwidGl0bGVcIjogXCJDb21wb25lbnRNZXRhX3RpdGxlX18xMFA5R1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiQ29tcG9uZW50TWV0YV9kZXNjcmlwdGlvbl9fMjBfMURcIixcblx0XCJjb250ZW50UHJvcHNcIjogXCJDb21wb25lbnRNZXRhX2NvbnRlbnRQcm9wc19fM1MwNk1cIixcblx0XCJsaWJyYXJpZXNcIjogXCJDb21wb25lbnRNZXRhX2xpYnJhcmllc19fMVdibWdcIixcblx0XCJpbm5lclwiOiBcIkNvbXBvbmVudE1ldGFfaW5uZXJfXzN2Y0w1XCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFpbmVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHsgXHJcblx0Y2hpbGRyZW4sXHJcblx0Y29udGFpbmVyU2l6ZSwgXHJcblx0ZmxleCxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRhaW5lciArIChmbGV4ID8gJyAnK3N0eWxlcy5mbGV4OiAnJykgfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDb250YWluZXJfY29udGFpbmVyX18yUlE3M1wiLFxuXHRcImZsZXhcIjogXCJDb250YWluZXJfZmxleF9fMU5xbHlcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBNYXN0ZXJKUyBmcm9tICdAY29tcG9uZW50cy9MYXlvdXQvTWFzdGVySlMvTWFzdGVySlMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoeyBmb290ZXJNZXNzYWdlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyX21lc3NhZ2V9Pntmb290ZXJNZXNzYWdlfTwvcD5cclxuICAgICAgPC9mb290ZXI+XHJcblxyXG4gICAgICA8TWFzdGVySlMvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzNhVXdiXCIsXG5cdFwiZm9vdGVyX21lc3NhZ2VcIjogXCJGb290ZXJfZm9vdGVyX21lc3NhZ2VfX1hzWWh2XCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0Bjb21wb25lbnRzL1RlbXBsYXRlL0NvbnRhaW5lci9Db250YWluZXInXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuaW1wb3J0IE1hc3RlckNTUyBmcm9tICdAY29tcG9uZW50cy9MYXlvdXQvTWFzdGVyQ1NTL01hc3RlckNTUydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gIFx0PGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gIFx0ICA8TWFzdGVyQ1NTLz5cclxuICBcdCAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gIFx0ICAgIFxyXG4gIFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudExlZnR9PlxyXG4gICAgICAgICAgICAgIFxyXG4gIFx0ICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwib2xkX2VuZ2xpc2hcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcdCAgICA8L2Rpdj5cclxuICBcclxuICBcdCAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRSaWdodH0+XHJcbiAgXHQgICAgICBcclxuICBcdCAgICA8L2Rpdj5cclxuICBcdCAgICBcclxuICBcdCAgPC9Db250YWluZXI+XHJcbiAgXHQ8L2hlYWRlcj5cclxuICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fMnRYazNcIixcblx0XCJjb250YWluZXJcIjogXCJIZWFkZXJfY29udGFpbmVyX19iNlV1eFwiLFxuXHRcImNvbnRlbnRMZWZ0XCI6IFwiSGVhZGVyX2NvbnRlbnRMZWZ0X19IUGRRT1wiLFxuXHRcImxvZ29cIjogXCJIZWFkZXJfbG9nb19fM1NiNTlcIixcblx0XCJ0aXRsZVwiOiBcIkhlYWRlcl90aXRsZV9fMWhFVTdcIixcblx0XCJjb250ZW50UmlnaHRcIjogXCJIZWFkZXJfY29udGVudFJpZ2h0X18xRjNWVFwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NhbmRib3gubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQGNvbXBvbmVudHMvVGVtcGxhdGUvQ29udGFpbmVyL0NvbnRhaW5lcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhbmRib3goeyBcclxuXHRjaGlsZHJlbiwgXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gIGNsYXNzTmFtZT17c3R5bGVzLnNhbmRib3h9PlxyXG4gICAgICBcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Db21wb25lbnQgU2FuZGJveDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNhbmRib3hcIjogXCJTYW5kYm94X3NhbmRib3hfXzEzWEJoXCIsXG5cdFwiY29udGVudFwiOiBcIlNhbmRib3hfY29udGVudF9fMVNFeXlcIixcblx0XCJ0aXRsZVwiOiBcIlNhbmRib3hfdGl0bGVfX1E4NmFWXCIsXG5cdFwiaW5uZXJcIjogXCJTYW5kYm94X2lubmVyX18xRnlHc1wiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Rlc3RTcXVhcmUubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0U3F1YXJlKHsgXHJcblx0Y2hpbGRyZW4sIFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLlRlc3RTcXVhcmV9PlxyXG4gICAgXHQ8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XHJcbiAgICBcdFx0e2NoaWxkcmVufVxyXG4gICAgXHQ8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUZXN0U3F1YXJlXCI6IFwiVGVzdFNxdWFyZV9UZXN0U3F1YXJlX18zb0NjY1wiLFxuXHRcImlubmVyXCI6IFwiVGVzdFNxdWFyZV9pbm5lcl9fMUtMcTlcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0dXJlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1nL3RleHR1cmVzL25hdHVyYWwtcGFwZXIucG5nJyk7XHJcblx0b3BhY2l0eTogJHtwcm9wcyA9PiBwcm9wcy5vcGFjaXR5IHx8IFwiMS4wXCJ9O1xyXG5cclxuXHQmW2RhdGEtb3B0aW9uPVwiMVwiXXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZy90ZXh0dXJlcy9uYXR1cmFsLXBhcGVyLnBuZycpO1xyXG5cdH1cclxuXHQmW2RhdGEtb3B0aW9uPVwiMlwiXXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZy90ZXh0dXJlcy9wYXBlci0yLnBuZycpO1xyXG5cdH1cclxuXHQmW2RhdGEtb3B0aW9uPVwiM1wiXXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZy90ZXh0dXJlcy9saWdodC1wYXBlci1maWJlcnMucG5nJyk7XHJcblx0fVxyXG5cdCZbZGF0YS1vcHRpb249XCI0XCJde1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1nL3RleHR1cmVzL2NsZWFuLWdyYXktcGFwZXIucG5nJyk7XHJcblx0fVxyXG5cdCZbZGF0YS1vcHRpb249XCI1XCJde1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1nL3RleHR1cmVzL2NhcmRib2FyZC5wbmcnKTtcclxuXHR9XHJcblx0JltkYXRhLW9wdGlvbj1cIjZcIl17XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWcvdGV4dHVyZXMvZ3JlZW4tZHVzdC1hbmQtc2NyYXRjaGVzLnBuZycpO1xyXG5cdH1cclxuXHQmW2RhdGEtb3B0aW9uPVwiN1wiXXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZy90ZXh0dXJlcy9ncm9vdmVwYXBlci5wbmcnKTtcclxuXHR9XHJcblx0JltkYXRhLW9wdGlvbj1cIjhcIl17XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWcvdGV4dHVyZXMvcmljZS1wYXBlci0yLnBuZycpO1xyXG5cdH1cclxuICB9XHJcblxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHR1cmUoeyBcclxuICAvL3BhZ2UgdmFyc1xyXG4gIG9wdGlvbixcclxuICBvcGFjaXR5XHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gIFx0PE92ZXJsYXkgXHJcbiAgXHRcdGNsYXNzTmFtZT17c3R5bGVzLlRleHR1cmV9IFxyXG4gIFx0XHRkYXRhLW9wdGlvbj17b3B0aW9ufVxyXG4gIFx0XHRvcGFjaXR5PXtvcGFjaXR5fT5cclxuICBcdDwvT3ZlcmxheT5cclxuICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVGV4dHVyZVwiOiBcIlRleHR1cmVfVGV4dHVyZV9fLUZVdjNcIlxufTtcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBsb2FkZXI/OiBJbWFnZUxvYWRlclxuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbLi4uc2l6ZXMubWF0Y2hBbGwoLyhefFxccykoMT9cXGQ/XFxkKXZ3L2cpXS5tYXAoKG0pID0+XG4gICAgICBwYXJzZUludChtWzJdKVxuICAgIClcbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHZpc2liaWxpdHk6IGlzVmlzaWJsZSA/ICdpbmhlcml0JyA6ICdoaWRkZW4nLFxuXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwiLy9JTVBPUlRTXHJcbi8vaW1wb3J0IEhlYWQgZnJvbSAnQGNvbXBvbmVudHMvSGVhZC9IZWFkJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnQGNvbXBvbmVudHMvVGVtcGxhdGUvSGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAY29tcG9uZW50cy9UZW1wbGF0ZS9Db250YWluZXIvQ29udGFpbmVyJ1xyXG5pbXBvcnQgU2FuZGJveCBmcm9tICdAY29tcG9uZW50cy9UZW1wbGF0ZS9TYW5kYm94L1NhbmRib3gnXHJcbmltcG9ydCBDb21wb25lbnRNZXRhIGZyb20gJ0Bjb21wb25lbnRzL1RlbXBsYXRlL0NvbXBvbmVudE1ldGEvQ29tcG9uZW50TWV0YSdcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAY29tcG9uZW50cy9UZW1wbGF0ZS9Gb290ZXIvRm9vdGVyJ1xyXG5pbXBvcnQgVGVzdFNxdWFyZSBmcm9tICdAY29tcG9uZW50cy9UZW1wbGF0ZS9UZXN0U3F1YXJlL1Rlc3RTcXVhcmUnXHJcblxyXG5pbXBvcnQgRGVmYXVsdFNsaWRlciBmcm9tICdAY29tcG9uZW50cy9TbGlkZXJzL0RlZmF1bHRTbGlkZXIvRGVmYXVsdFNsaWRlcidcclxuXHJcblxyXG4vL1ZBUlNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIFxyXG4gIC8vR2VuZXJhbCBQYWdlIFZBUlNcclxuXHQgIGxldCB0aXRsZSA9IFwiSW5pdGlhbCBDb21wb25lbnQgRGVtb1wiXHJcblx0ICBsZXQgYXV0aG9yID0gXCJBbGVjIFJlaW1lbFwiXHJcblx0ICBsZXQgYXV0aG9yVGVhbSA9IFwiUGxhbmV0IENhcmF2YW4gU3R1ZGlvc1wiXHJcblx0ICBsZXQgZGVzY3JpcHRpb24gPVwiXFxcclxuXHRcdFRoaXMgaXMgdGhlIGluaXRhbCBkZW1vIHRlbXBsYXRlIGZvciBIb2x5IE1vdW50YWluIGZyb250ZW5kIGNvbXBvbmVudHMuICBcXFxyXG5cdFx0Q2xvbmUgdGhpcyBwYWdlIG91dCBmb3IgZGVtb2luZyBuZXcgY29tcG9uZW50cy5cXFxyXG5cdCAgXHRcdFx0XHRcdFwiXHJcblx0ICBsZXQgY29udGVudFByb3BzID0gJ25vbmUnXHJcblx0ICBsZXQgbGlicmFyaWVzID0gXCJub25lXCJcclxuXHQgIFxyXG5cdCAgbGV0IGZvb3Rlck1lc3NhZ2UgPSBcIkNyZWF0ZWQgYnkgUGxhbmV0IENhcmF2YW4gU3R1ZGlvc1wiXHJcbiAgXHJcbiAgLy9Db21wb25lbnQgQ29udGVudFxyXG4gIFx0XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBhdXRob3IsXHJcbiAgICAgICAgYXV0aG9yVGVhbSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBjb250ZW50UHJvcHMsXHJcbiAgICAgICAgbGlicmFyaWVzLFxyXG4gICAgICAgIGZvb3Rlck1lc3NhZ2UsXHJcbiAgICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TmVjcm8gQ3VsdCBaaW5lIENvbXBvbmVudDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxIZWFkZXIgdGl0bGU9XCJOZWNybyBDdWx0IFppbmUgQ29tcG9uZW50IERlbW9cIiAvPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29tcG9uZW50TWV0YVxyXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgIGF1dGhvcj17cHJvcHMuYXV0aG9yfVxyXG4gICAgICAgICAgICBhdXRob3JUZWFtPXtwcm9wcy5hdXRob3JUZWFtfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGNvbnRlbnRQcm9wcz17cHJvcHMuY29udGVudFByb3BzfVxyXG4gICAgICAgICAgICBsaWJyYXJpZXM9e3Byb3BzLmxpYnJhcmllc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFNhbmRib3g+XHJcblxyXG4gICAgICAgIFx0Q29tcG9uZW50cyBnbyBoZXJlXHJcblxyXG4gICAgICAgIDwvU2FuZGJveD5cclxuICAgICAgICBcclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPEZvb3RlciBmb290ZXJNZXNzYWdlPXtwcm9wcy5mb290ZXJNZXNzYWdlfSAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3aXBlci9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9