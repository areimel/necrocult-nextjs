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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0/CG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Template/Header/Header.js + 1 modules
var Header = __webpack_require__("ijwR");

// EXTERNAL MODULE: ./components/Template/Container/Container.js
var Container = __webpack_require__("k9Lz");

// EXTERNAL MODULE: ./components/Template/Sandbox/Sandbox.js
var Sandbox = __webpack_require__("UVKF");

// EXTERNAL MODULE: ./components/Template/ComponentMeta/ComponentMeta.js
var ComponentMeta = __webpack_require__("kY+5");

// EXTERNAL MODULE: ./components/Template/Footer/Footer.js + 1 modules
var Footer = __webpack_require__("BCsC");

// EXTERNAL MODULE: ./components/Navigation/NavMenu/NavMenu.module.scss
var NavMenu_module = __webpack_require__("2/4D");
var NavMenu_module_default = /*#__PURE__*/__webpack_require__.n(NavMenu_module);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./components/Navigation/NavMenu/NavMenu.js




function NavMenu({//props
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
    id: "NavMenu",
    className: NavMenu_module_default.a.NavMenu,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: NavMenu_module_default.a.inner,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: NavMenu_module_default.a.buttonSection,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: NavMenu_module_default.a.modalClose + " modal_close",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/img/graphics/x-1.png",
            alt: ""
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: NavMenu_module_default.a.logoSection,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: NavMenu_module_default.a.logoLink,
          href: "/",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/img/logo.png",
            alt: "Logo"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: NavMenu_module_default.a.linkSection,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          className: "nolist vertical",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: NavMenu_module_default.a.linkCell,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/",
              children: "Home"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: NavMenu_module_default.a.linkCell,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/",
              children: "Articles"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: NavMenu_module_default.a.linkCell,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/",
              children: "News"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: NavMenu_module_default.a.linkCell,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "",
              children: "About"
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: NavMenu_module_default.a.socialSection,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          className: "nolist",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: NavMenu_module_default.a.linkCell,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fab fa-facebook"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: NavMenu_module_default.a.linkCell,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fab fa-instagram"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: NavMenu_module_default.a.linkCell,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fas fa-code"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: NavMenu_module_default.a.linkCell,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fab fa-github"
              })
            })
          })]
        })
      })]
    })
  });
}
// CONCATENATED MODULE: ./pages/NavMenu.js



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
  let contentProps = 'N/A';
  let libraries = "N/A";
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
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Necro Cult Zine Component"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
        title: "Necro Cult Zine Component Demo"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ComponentMeta["a" /* default */], {
          title: props.title,
          author: props.author,
          authorTeam: props.authorTeam,
          description: props.description,
          contentProps: props.contentProps,
          libraries: props.libraries
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Sandbox["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavMenu, {})
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {
      footerMessage: props.footerMessage
    })]
  });
}

/***/ }),

/***/ "0G5g":
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0/CG");


/***/ }),

/***/ "2/4D":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"NavMenu": "NavMenu_NavMenu__3OB0s",
	"inner": "NavMenu_inner__3Q8Yl",
	"buttonSection": "NavMenu_buttonSection__VgtW2",
	"modalClose": "NavMenu_modalClose__3vJF2",
	"logoSection": "NavMenu_logoSection__3KF2n",
	"logoLink": "NavMenu_logoLink__3thF_",
	"linkSection": "NavMenu_linkSection__1qSiI",
	"linkCell": "NavMenu_linkCell__CDqLC",
	"socialSection": "NavMenu_socialSection__2kNfz"
};


/***/ }),

/***/ "47oO":
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

/***/ "6Eyo":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Container_container__2RQ73",
	"flex": "Container_flex__1Nqly"
};


/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
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

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "BCsC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Footer; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./components/Template/Footer/Footer.module.scss
var Footer_module = __webpack_require__("T6Lq");
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);

// CONCATENATED MODULE: ./components/Layout/MasterJS/MasterJS.js




/************************************

MasterJS 	
	
	-	Link all JS files in desired order, 
		then add this component to the end of 
		your global layout, so all JS is loaded last.

************************************/
function MasterJS({//page vars
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      integrity: "sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==",
      crossOrigin: "anonymous"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/headroom/0.12.0/headroom.min.js",
      integrity: "sha512-9UsrKTYzS9smDm2E58MLs0ACtOki+UC4bBq4iK5wi7lJycwqcaiHxr1bdEsIVoK0l5STEzLUdYyDdFQ5OEjczw==",
      crossOrigin: "anonymous"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/headroom/0.12.0/jQuery.headroom.min.js",
      integrity: "sha512-3zxNImEhQ2pnOSHdyGCCJhpMrU35j7UgnlycU/sLnbsdmcH+pXm9bR9htu6p6ggqx6b5VEKeinajKDpUW7LuTQ==",
      crossOrigin: "anonymous"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/solid.min.js",
      integrity: "sha512-Qc+cBMt/4/KXJ1F6nNQahXIsgPygHM4S2XWChoumV8qkpZ9oO+gBDBEpOxgbkQQ/6DlHx6cUxa5nBhEbuiR8xw==",
      crossOrigin: "anonymous"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      src: "/scripts/main.js"
    })]
  });
}
// CONCATENATED MODULE: ./components/Template/Footer/Footer.js





function Footer({
  footerMessage
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
      className: Footer_module_default.a.footer,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Footer_module_default.a.footer_message,
        children: footerMessage
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MasterJS, {})]
  });
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "T6Lq":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__3aUwb",
	"footer_message": "Footer_footer_message__XsYhv"
};


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UVKF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sandbox; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYvc");
/* harmony import */ var _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k9Lz");




function Sandbox({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    className: _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sandbox,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Template_Container_Container__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          className: _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "Component Sandbox"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: _Sandbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
          children: children
        })]
      })
    })
  });
}

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

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
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

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

  if (false) {}

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
    if (false) {}
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
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dYvc":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sandbox": "Sandbox_sandbox__13XBh",
	"content": "Sandbox_content__1SEyy",
	"title": "Sandbox_title__Q86aV",
	"inner": "Sandbox_inner__1FyGs"
};


/***/ }),

/***/ "ijwR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Header; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./components/Template/Header/Header.module.scss
var Header_module = __webpack_require__("47oO");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// EXTERNAL MODULE: ./components/Template/Container/Container.js
var Container = __webpack_require__("k9Lz");

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");

// CONCATENATED MODULE: ./components/Layout/MasterCSS/MasterCSS.js



/************************************

MasterCSS 	
	
	-	Link all JS files in desired order, 
		then add this component to the end of 
		your global layout, so all JS is loaded last.

************************************/
function MasterCSS({//page vars
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
      integrity: "sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==",
      crossOrigin: "anonymous"
    })
  });
}
// CONCATENATED MODULE: ./components/Template/Header/Header.js






function Header({
  title
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: Header_module_default.a.header,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MasterCSS, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
      className: Header_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Header_module_default.a.contentLeft,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Header_module_default.a.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "old_english",
            children: title
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Header_module_default.a.contentRight
      })]
    })]
  });
}

/***/ }),

/***/ "k9Lz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6Eyo");
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Container({
  children,
  containerSize,
  flex
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container + (flex ? ' ' + _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flex : ''),
    children: children
  });
}

/***/ }),

/***/ "kY+5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentMeta; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qr56");
/* harmony import */ var _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1__);



function ComponentMeta({
  title,
  author,
  authorTeam,
  description,
  contentProps,
  libraries
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptionWrapper,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cell + ' ' + _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
          className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
            className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Component:"
            }), title]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
            className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.author,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Developer:"
            }), author, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), authorTeam]
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cell + ' ' + _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
          className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
            className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Description:"
            }), description]
          })
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cell + ' ' + _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contentProps,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
          className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.props,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Available Props:"
            })
          }), contentProps]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cell + ' ' + _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.libraries,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
          className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            className: _ComponentMeta_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.libraries,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Libraries Used:"
            })
          }), libraries]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "pVnL":
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

/***/ "qr56":
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

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });