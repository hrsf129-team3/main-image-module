/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/maureenlee/Desktop/HR/main-image-module/client/src/index.jsx: Unexpected token (5:1)\\n\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mApp\\u001b[39m from \\u001b[32m'./components/app.jsx'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 5 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetDocumentById(\\u001b[32m'app'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m getDocumentById(\\u001b[32m'app'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:763:17)\\n    at Object.raiseWithData (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:756:17)\\n    at Object.raise (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:750:17)\\n    at Object.unexpected (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:8930:16)\\n    at Object.jsxParseIdentifier (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:4448:12)\\n    at Object.jsxParseNamespacedName (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:4458:23)\\n    at Object.jsxParseElementName (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:4469:21)\\n    at Object.jsxParseOpeningElementAt (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:4555:22)\\n    at Object.jsxParseElementAt (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:4588:33)\\n    at Object.jsxParseElement (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:4662:17)\\n    at Object.parseExprAtom (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:4669:19)\\n    at Object.parseExprSubscripts (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:9792:23)\\n    at Object.parseUpdate (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:9772:21)\\n    at Object.parseMaybeUnary (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:9761:17)\\n    at Object.parseExprOps (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:9631:23)\\n    at Object.parseMaybeConditional (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:9605:23)\\n    at Object.parseMaybeAssign (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:9568:21)\\n    at Object.parseExpression (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:9520:23)\\n    at Object.parseStatementContent (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:11479:23)\\n    at Object.parseStatement (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:11348:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:11930:25)\\n    at Object.parseBlockBody (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:11916:10)\\n    at Object.parseTopLevel (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:11279:10)\\n    at Object.parse (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:12984:10)\\n    at parse (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/parser/lib/index.js:13037:38)\\n    at parser (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/maureenlee/Desktop/HR/main-image-module/node_modules/@babel/core/lib/transformation/index.js:31:50)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });