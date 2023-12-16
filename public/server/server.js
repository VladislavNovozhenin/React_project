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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.textState = exports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/Content/CardsList */ \"./src/shared/Content/CardsList/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar actions_1 = __webpack_require__(/*! ./store/token/actions */ \"./src/store/token/actions.ts\");\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar Post_1 = __webpack_require__(/*! ./shared/Post */ \"./src/shared/Post/index.ts\");\r\nvar NotFound_1 = __webpack_require__(/*! ./shared/NotFound */ \"./src/shared/NotFound/index.ts\");\r\nvar recoil_1 = __webpack_require__(/*! recoil */ \"recoil\");\r\nvar store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    React.useEffect(function () {\r\n        dispatch((0, actions_1.saveToken)());\r\n    }, [token]);\r\n    (0, react_1.useEffect)(function () {\r\n        setMounted(true);\r\n    }, []);\r\n    if (!mounted)\r\n        return null;\r\n    return (React.createElement(react_router_dom_1.BrowserRouter, null,\r\n        React.createElement(Layout_1.Layout, null,\r\n            React.createElement(Header_1.Header, null),\r\n            React.createElement(Content_1.Content, null,\r\n                React.createElement(react_router_dom_1.Routes, null,\r\n                    React.createElement(react_router_dom_1.Route, { path: \"posts\", element: React.createElement(CardsList_1.CardsList, null) },\r\n                        React.createElement(react_router_dom_1.Route, { path: \":id\", element: React.createElement(Post_1.Post, null) })),\r\n                    React.createElement(react_router_dom_1.Route, { path: \"/\", element: React.createElement(react_router_dom_1.Navigate, { to: '/posts', replace: true }) }),\r\n                    React.createElement(react_router_dom_1.Route, { path: \"/auth\", element: React.createElement(react_router_dom_1.Navigate, { to: '/posts', replace: true }) }),\r\n                    React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement(NotFound_1.NotFound, null) }))))));\r\n}\r\nexports.App = (0, root_1.hot)(function () {\r\n    return React.createElement(react_redux_1.Provider, { store: store },\r\n        React.createElement(AppComponent, null));\r\n});\r\nexports.textState = (0, recoil_1.atom)({\r\n    key: 'textState',\r\n    default: 'e'\r\n});\r\n// export const charCountState = selector({\r\n//   key: 'charCountState', // unique ID (with respect to other atoms/selectors)\r\n//   get: ({get}) => {\r\n//     const text = get(textState);\r\n//     return text.length;\r\n//   },\r\n// });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useCommentsData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentsData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UseCommentsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction UseCommentsData(id) {\r\n    var _a = (0, react_1.useState)([]), comments = _a[0], setComments = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (token && token !== \"undefined\") {\r\n            axios_1.default.get(\"https://oauth.reddit.com/comments/\".concat(id), {\r\n                headers: { Authorization: \"bearer \".concat(token) }\r\n            })\r\n                .then(function (resp) {\r\n                var commentsData = (resp.data[1].data.children);\r\n                setComments(commentsData.map(function (el) {\r\n                    return {\r\n                        bodyComment: el.data.body,\r\n                        authorComment: el.data.author,\r\n                        createdComment: el.data.created_utc * 1000,\r\n                        idComment: el.data.id,\r\n                        answerComment: el.data.replies\r\n                    };\r\n                }));\r\n            })\r\n                .catch(console.log);\r\n        }\r\n    }, [token]);\r\n    return [comments];\r\n}\r\nexports.UseCommentsData = UseCommentsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar react_redux_2 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var dispatch = (0, react_redux_2.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (!token)\r\n            return;\r\n        if (token && token !== \"undefined\") {\r\n            dispatch((0, actions_1.MeRequestAsync)());\r\n        }\r\n    }, [token]);\r\n    return {\r\n        data: data,\r\n    };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\r\\n  --black:          #333333;\\r\\n  --orange:         #CC6633;\\r\\n  --green:          #A4CC33;\\r\\n  --whiteLightness: 100%;\\r\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\r\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\r\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\r\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\r\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\r\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\r\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\r\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: var(--grayF4);\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  font-family: 'Roboto', serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color: var(--black);\\r\\n  box-sizing: border-box;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__='\".concat(token, \"'\\n  </script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n  <div id=\\\"modal_root\\\"></div>\\n  <div id=\\\"dropdown_root\\\"></div>\\n  <div id=\\\"error_root\\\"></div>\\n</body>\\n\\n</html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar PORT = process.env.PORT || 3000;\r\nvar app = (0, express_1.default)();\r\napp.use(\"/static\", express_1.default.static(\"./public/client\"));\r\napp.get(\"/auth\", function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://react-project-git-main-vlads-projects-cde9d0a5.vercel.app/auth\"), {\r\n        auth: { username: 'nlayCzCHWqlnYP_-0IBMJQ', password: process.env.SECRET },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data['access_token']));\r\n        console.log(data);\r\n    })\r\n        .catch(function (err) {\r\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), ''));\r\n    });\r\n});\r\napp.get(\"*\", function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\r\n});\r\napp.listen(PORT, function () {\r\n    console.log(\"server started on port http://localhost:\".concat(PORT));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    return (react_1.default.createElement(\"div\", { className: (0, classnames_1.default)(break_css_1.default[\"s\".concat(size)], (_a = {}, _a[break_css_1.default[\"mobile_s\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"tablet_s\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"desktop_s\".concat(desktopSize)]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"mobile_s4\": \"break__mobile_s4--LrEFY\",\n\t\"mobile_s8\": \"break__mobile_s8--1Tmgm\",\n\t\"mobile_s12\": \"break__mobile_s12--2En9X\",\n\t\"mobile_s16\": \"break__mobile_s16--2KmPq\",\n\t\"mobile_s20\": \"break__mobile_s20--1j8g5\",\n\t\"tablet_s4\": \"break__tablet_s4--2nTnL\",\n\t\"tablet_s8\": \"break__tablet_s8--7zEhs\",\n\t\"tablet_s12\": \"break__tablet_s12--3Y-kT\",\n\t\"tablet_s16\": \"break__tablet_s16--2rsLQ\",\n\t\"tablet_s20\": \"break__tablet_s20--V1f92\",\n\t\"desktop_s4\": \"break__desktop_s4--3mFLY\",\n\t\"desktop_s8\": \"break__desktop_s8--2uQYJ\",\n\t\"desktop_s12\": \"break__desktop_s12--1-0wy\",\n\t\"desktop_s16\": \"break__desktop_s16--2k7qE\",\n\t\"desktop_s20\": \"break__desktop_s20--AjVsi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Card.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Card.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/Content/CardsList/Card/card.css\"));\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/Content/CardsList/Card/TextContent/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/Content/CardsList/Card/Preview/index.ts\");\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/Content/CardsList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/Content/CardsList/Card/Menu/index.ts\");\r\nfunction Card(props) {\r\n    var id = props.id, title = props.title, author = props.author, avatar = props.avatar, previewImg = props.previewImg, rating = props.rating, score = props.score, datePostUtc = props.datePostUtc;\r\n    return (react_1.default.createElement(\"li\", { key: id, className: card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { id: id, title: title, author: author, avatar: avatar, datePostUtc: datePostUtc, previewImg: previewImg, rating: rating, score: score }),\r\n        react_1.default.createElement(Preview_1.Preview, { previewImg: previewImg }),\r\n        react_1.default.createElement(Controls_1.Controls, { rating: rating, score: score }),\r\n        react_1.default.createElement(Menu_1.Menu, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/Actions/Actions.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/Actions/Actions.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Actions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actions_css_1 = __importDefault(__webpack_require__(/*! ./actions.css */ \"./src/shared/Content/CardsList/Card/Controls/Actions/actions.css\"));\r\nvar ShareButton_1 = __webpack_require__(/*! ./ShareButton */ \"./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/index.ts\");\r\nvar SaveButton_1 = __webpack_require__(/*! ./SaveButton */ \"./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/index.ts\");\r\nfunction Actions() {\r\n    return (react_1.default.createElement(\"div\", { className: actions_css_1.default.actions },\r\n        react_1.default.createElement(ShareButton_1.ShareButton, null),\r\n        react_1.default.createElement(SaveButton_1.SaveButton, null)));\r\n}\r\nexports.Actions = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/SaveButton.tsx":
/*!**************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/SaveButton.tsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar savebutton_css_1 = __importDefault(__webpack_require__(/*! ./savebutton.css */ \"./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/savebutton.css\"));\r\nfunction SaveButton() {\r\n    return (react_1.default.createElement(\"button\", { className: savebutton_css_1.default.saveButton },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))));\r\n}\r\nexports.SaveButton = SaveButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/index.ts":
/*!********************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/index.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SaveButton */ \"./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/SaveButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/savebutton.css":
/*!**************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/savebutton.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"saveButton\": \"savebutton__saveButton--1zK2m\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/Actions/SaveButton/savebutton.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/ShareButton.tsx":
/*!****************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/ShareButton.tsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ \"./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/sharebutton.css\"));\r\nfunction ShareButton() {\r\n    return (react_1.default.createElement(\"button\", { className: sharebutton_css_1.default.shareButton },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))));\r\n}\r\nexports.ShareButton = ShareButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/index.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ShareButton */ \"./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/ShareButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/sharebutton.css":
/*!****************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/sharebutton.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"sharebutton__shareButton--FCtei\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/Actions/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/Actions/actions.css":
/*!************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/Actions/actions.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"actions\": \"actions__actions--jSuAz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/Actions/actions.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/Actions/index.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/Actions/index.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Actions */ \"./src/shared/Content/CardsList/Card/Controls/Actions/Actions.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/ComentsButton/ComentsButton.tsx":
/*!************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/ComentsButton/ComentsButton.tsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ComentsButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar comentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./comentsbutton.css */ \"./src/shared/Content/CardsList/Card/Controls/ComentsButton/comentsbutton.css\"));\r\nfunction ComentsButton(_a) {\r\n    var score = _a.score;\r\n    return (react_1.default.createElement(\"button\", { className: comentsbutton_css_1.default.commentsButton },\r\n        react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n        react_1.default.createElement(\"span\", { className: comentsbutton_css_1.default.commentsNumber }, score)));\r\n}\r\nexports.ComentsButton = ComentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/ComentsButton/ComentsButton.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/ComentsButton/comentsbutton.css":
/*!************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/ComentsButton/comentsbutton.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"comentsbutton__commentsButton--2C4iQ\",\n\t\"commentsNumber\": \"comentsbutton__commentsNumber--jV8wB\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/ComentsButton/comentsbutton.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/ComentsButton/index.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/ComentsButton/index.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ComentsButton */ \"./src/shared/Content/CardsList/Card/Controls/ComentsButton/ComentsButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/ComentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/Controls.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/Controls.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/Content/CardsList/Card/Controls/controls.css\"));\r\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/index.ts\");\r\nvar ComentsButton_1 = __webpack_require__(/*! ./ComentsButton */ \"./src/shared/Content/CardsList/Card/Controls/ComentsButton/index.ts\");\r\nvar Actions_1 = __webpack_require__(/*! ./Actions */ \"./src/shared/Content/CardsList/Card/Controls/Actions/index.ts\");\r\nfunction Controls(_a) {\r\n    var rating = _a.rating, score = _a.score;\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { rating: rating }),\r\n        react_1.default.createElement(ComentsButton_1.ComentsButton, { score: score }),\r\n        react_1.default.createElement(Actions_1.Actions, null)));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/Down.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/Down.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Down = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar down_css_1 = __importDefault(__webpack_require__(/*! ./down.css */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/down.css\"));\r\nvar DownIcon_1 = __webpack_require__(/*! ../../../../../../Icons/DownIcon */ \"./src/shared/Icons/DownIcon.tsx\");\r\nfunction Down(_a) {\r\n    var downStyle = _a.downStyle;\r\n    return (react_1.default.createElement(\"button\", { className: down_css_1.default.down, style: downStyle },\r\n        react_1.default.createElement(DownIcon_1.DownIcon, null)));\r\n}\r\nexports.Down = Down;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/Down.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/down.css":
/*!*******************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/down.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"down\": \"down__down--15m-a\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/down.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/index.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Down */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/Down.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/karmacounter.css\"));\r\nvar Up_1 = __webpack_require__(/*! ./Up */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/index.ts\");\r\nvar Down_1 = __webpack_require__(/*! ./Down */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Down/index.ts\");\r\nfunction KarmaCounter(_a) {\r\n    var rating = _a.rating, spanStyle = _a.spanStyle, divStyle = _a.divStyle, downStyle = _a.downStyle;\r\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter, style: divStyle },\r\n        react_1.default.createElement(Up_1.Up, null),\r\n        react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue, style: spanStyle }, rating),\r\n        react_1.default.createElement(Down_1.Down, { downStyle: downStyle })));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/Up.tsx":
/*!***************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/Up.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Up = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar up_css_1 = __importDefault(__webpack_require__(/*! ./up.css */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/up.css\"));\r\nvar UpIcon_1 = __webpack_require__(/*! ../../../../../../Icons/UpIcon */ \"./src/shared/Icons/UpIcon.tsx\");\r\nfunction Up() {\r\n    return (react_1.default.createElement(\"button\", { className: up_css_1.default.up },\r\n        react_1.default.createElement(UpIcon_1.UpIcon, null)));\r\n}\r\nexports.Up = Up;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/Up.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/index.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Up */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/Up.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/up.css":
/*!***************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/up.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"up\": \"up__up--1XxaI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/KarmaCounter/Up/up.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/KarmaCounter/index.ts":
/*!**************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/KarmaCounter/index.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/KarmaCounter/karmacounter.css":
/*!**********************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/KarmaCounter/karmacounter.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounter__karmaCounter--1Tk9K\",\n\t\"karmaValue\": \"karmacounter__karmaValue--1c-b1\",\n\t\"down\": \"karmacounter__down--2fzxq\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/controls.css":
/*!*****************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/controls.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--esQvJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Controls/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Controls/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/Content/CardsList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Menu/Menu.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Menu/Menu.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/Content/CardsList/Card/Menu/menu.css\"));\r\nvar MenuButton_1 = __webpack_require__(/*! ./MenuButton */ \"./src/shared/Content/CardsList/Card/Menu/MenuButton/index.ts\");\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(MenuButton_1.MenuButton, null)));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuButton.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuButton.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menubutton_css_1 = __importDefault(__webpack_require__(/*! ./menubutton.css */ \"./src/shared/Content/CardsList/Card/Menu/MenuButton/menubutton.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../../Dropdown */ \"./src/shared/Content/Dropdown/index.ts\");\r\nvar MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../../Text */ \"./src/shared/Text/index.ts\");\r\nfunction MenuButton() {\r\n    return (react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menubutton_css_1.default.menuButton },\r\n            react_1.default.createElement(Icons_1.MenuIcon, null)) },\r\n        react_1.default.createElement(\"div\", { className: menubutton_css_1.default.dropdown },\r\n            react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: '1234', score: 0, answerLiHidden: { display: 'none' } }),\r\n            react_1.default.createElement(\"button\", { className: menubutton_css_1.default.closeButton },\r\n                react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_1.EColors.grey66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.MenuButton = MenuButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuButton.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/MenuItemsList.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/MenuItemsList.tsx ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ \"./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/menuitemslist.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar CommentAnswerForm_1 = __webpack_require__(/*! ../../../../../../Post/CommentAnswerForm */ \"./src/shared/Post/CommentAnswerForm/index.ts\");\r\nfunction MenuItemsList(_a) {\r\n    var _b;\r\n    var postId = _a.postId, score = _a.score, divHidden = _a.divHidden, liHidden = _a.liHidden, ul = _a.ul, li = _a.li, answerLiHidden = _a.answerLiHidden;\r\n    var ref = (0, react_1.useRef)(null);\r\n    var _c = (0, react_1.useState)(false), isCommentOpened = _c[0], setIsCommentOpened = _c[1];\r\n    var lastDigit2Str = String(score).slice(-2);\r\n    var lastDigit2Num = Number(lastDigit2Str);\r\n    var commentNumber = ((lastDigit2Num === 11) || (lastDigit2Num === 12) || (lastDigit2Num === 13) || (lastDigit2Num === 14))\r\n        ? \"\".concat(score, \" \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0435\\u0432\")\r\n        : score % 10 === 1\r\n            ? \"\".concat(score, \" \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\")\r\n            : (score % 10 === 2) || (score % 10 === 3) || (score % 10 === 4)\r\n                ? \"\".concat(score, \" \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u044F\")\r\n                : \"\".concat(score, \" \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0435\\u0432\");\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_css_1.default.menuItemsList, style: ul },\r\n        react_1.default.createElement(\"li\", { className: \"\".concat(menuitemslist_css_1.default.menuItem, \" \").concat(menuitemslist_css_1.default.hidden), style: __assign(__assign({}, li), liHidden) },\r\n            react_1.default.createElement(Icon_1.Icon, { name: 'comment', size: 14, mobileSize: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, score !== 0\r\n                ? \"\".concat(commentNumber)\r\n                : 'Комментарии')),\r\n        react_1.default.createElement(\"div\", { className: \"\".concat(menuitemslist_css_1.default.divider, \" \").concat(menuitemslist_css_1.default.hidden), style: divHidden }),\r\n        react_1.default.createElement(\"li\", { className: \"\".concat(menuitemslist_css_1.default.menuItem, \" \").concat(menuitemslist_css_1.default.hidden), style: __assign(__assign({}, li), answerLiHidden), onClick: function () { return console.log(postId); }, ref: ref },\r\n            react_1.default.createElement(Icon_1.Icon, { name: 'comment', size: 14, mobileSize: 12 }),\r\n            react_1.default.createElement(\"a\", { className: menuitemslist_css_1.default.menuItemLink, onClick: function () { setIsCommentOpened(true); } },\r\n                react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\"))),\r\n        isCommentOpened && (react_1.default.createElement(CommentAnswerForm_1.Commentanswerform, { modalForm: { top: (((_b = ref.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().y) || 0) + window.scrollY - 120, }, onClose: function () { setIsCommentOpened(false); } })),\r\n        react_1.default.createElement(\"li\", { className: \"\".concat(menuitemslist_css_1.default.menuItem, \" \").concat(menuitemslist_css_1.default.hidden), style: li },\r\n            react_1.default.createElement(Icon_1.Icon, { name: 'send', size: 14, mobileSize: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n        react_1.default.createElement(\"div\", { className: \"\".concat(menuitemslist_css_1.default.divider, \" \").concat(menuitemslist_css_1.default.hidden), style: divHidden }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, style: __assign(__assign({}, li), liHidden) },\r\n            react_1.default.createElement(Icon_1.Icon, { name: 'block', size: 14, mobileSize: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider, style: divHidden }),\r\n        react_1.default.createElement(\"li\", { className: \"\".concat(menuitemslist_css_1.default.menuItem, \" \").concat(menuitemslist_css_1.default.hidden), style: __assign(__assign({}, li), liHidden) },\r\n            react_1.default.createElement(Icon_1.Icon, { name: 'save', size: 14, mobileSize: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: \"\".concat(menuitemslist_css_1.default.divider, \" \").concat(menuitemslist_css_1.default.hidden), style: divHidden }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, style: li },\r\n            react_1.default.createElement(Icon_1.Icon, { name: 'warning', size: 14, mobileSize: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/index.ts":
/*!**********************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/index.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/MenuItemsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/menuitemslist.css":
/*!*******************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/menuitemslist.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menuitemslist__menuItemsList--c9r9N\",\n\t\"menuItem\": \"menuitemslist__menuItem--15lfa\",\n\t\"divider\": \"menuitemslist__divider--3XFuB\",\n\t\"hidden\": \"menuitemslist__hidden--2W7bj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/menuitemslist.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Menu/MenuButton/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Menu/MenuButton/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuButton */ \"./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Menu/MenuButton/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Menu/MenuButton/menubutton.css":
/*!**************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Menu/MenuButton/menubutton.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuButton\": \"menubutton__menuButton--1-N-_\",\n\t\"dropdown\": \"menubutton__dropdown--1pkCb\",\n\t\"closeButton\": \"menubutton__closeButton--MfH6m\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Menu/MenuButton/menubutton.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Menu/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Menu/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/Content/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Menu/menu.css":
/*!*********************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Menu/menu.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--2WV4Z\",\n\t\"dropdown\": \"menu__dropdown--37RRU\",\n\t\"closeButton\": \"menu__closeButton--20bkm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Preview/Preview.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Preview/Preview.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/Content/CardsList/Card/Preview/preview.css\"));\r\nfunction Preview(_a) {\r\n    var previewImg = _a.previewImg;\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: previewImg, alt: \"preview\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Preview/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Preview/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/Content/CardsList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/Preview/preview.css":
/*!***************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/Preview/preview.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--yXg13\",\n\t\"previewImg\": \"preview__previewImg--sYRZj\",\n\t\"post__content--2gFMc\": \"preview__post__content--2gFMc--3Mq1z\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/MetaData.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/MetaData.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar metadata_css_1 = __importDefault(__webpack_require__(/*! ./metadata.css */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/metadata.css\"));\r\nvar UserLink_1 = __webpack_require__(/*! ./UserLink */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/index.ts\");\r\nfunction MetaData(_a) {\r\n    var author = _a.author, avatar = _a.avatar, datePostUtc = _a.datePostUtc, divUserLinkStyle = _a.divUserLinkStyle, divMetaDataStyle = _a.divMetaDataStyle, spanMetaDataStyle = _a.spanMetaDataStyle;\r\n    var pastMilliseconds = new Date().getTime() - new Date(datePostUtc).getTime();\r\n    var oneDay = 1000 * 60 * 60 * 24;\r\n    var oneHour = 1000 * 60 * 60;\r\n    var oneMinutes = 1000 * 60;\r\n    var pastDay = Math.round(pastMilliseconds / oneDay);\r\n    var pastHour = Math.round(pastMilliseconds / oneHour);\r\n    var pastMinutes = Math.round(pastMilliseconds / oneMinutes);\r\n    var postTime = pastMinutes <= 59\r\n        ? ((pastMinutes) === 11) || ((pastMinutes) === 12) || ((pastMinutes) === 13) || ((pastMinutes) === 14)\r\n            ? \"\".concat(pastMinutes, \" \\u043C\\u0438\\u043D\\u0443\\u0442 \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n            : (pastMinutes) % 10 === 1\r\n                ? \"\".concat(pastMinutes, \" \\u043C\\u0438\\u043D\\u0443\\u0442\\u0443 \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n                : ((pastMinutes) % 10 === 2) || ((pastMinutes) % 10 === 3) || ((pastMinutes) % 10 === 4)\r\n                    ? \"\".concat(pastMinutes, \" \\u043C\\u0438\\u043D\\u0443\\u0442\\u044B \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n                    : \"\".concat(pastMinutes, \" \\u043C\\u0438\\u043D\\u0443\\u0442 \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n        : pastHour <= 23\r\n            ? ((pastHour) === 11) || ((pastHour) === 12) || ((pastHour) === 13) || ((pastHour) === 14)\r\n                ? \"\".concat(pastHour, \" \\u0447\\u0430\\u0441\\u043E\\u0432 \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n                : (pastHour) % 10 === 1\r\n                    ? \"\".concat(pastHour, \" \\u0447\\u0430\\u0441 \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n                    : ((pastHour) % 10 === 2) || ((pastHour) % 10 === 3) || ((pastHour) % 10 === 4)\r\n                        ? \"\".concat(pastHour, \" \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n                        : \"\".concat(pastHour, \" \\u0447\\u0430\\u0441\\u043E\\u0432 \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n            : (pastDay === 11) || (pastDay === 12) || (pastDay === 13) || (pastDay === 14)\r\n                ? \"\".concat(pastDay, \" \\u0434\\u043D\\u0435\\u0439 \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n                : (pastDay % 10) === 1\r\n                    ? \"\".concat(pastDay, \" \\u0434\\u0435\\u043D\\u044C \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n                    : (pastDay % 10 === 2) || (pastDay % 10 === 3) || (pastDay % 10 === 4)\r\n                        ? \"\".concat(pastDay, \" \\u0434\\u043D\\u044F \\u043D\\u0430\\u0437\\u0430\\u0434\")\r\n                        : \"\".concat(pastDay, \" \\u0434\\u043D\\u0435\\u0439 \\u043D\\u0430\\u0437\\u0430\\u0434\");\r\n    return (react_1.default.createElement(\"div\", { className: metadata_css_1.default.metaData, style: divMetaDataStyle },\r\n        react_1.default.createElement(UserLink_1.UserLink, { author: author, avatar: avatar, divUserLinkStyle: divUserLinkStyle }),\r\n        react_1.default.createElement(\"span\", { className: metadata_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: metadata_css_1.default.publishedLabel, style: spanMetaDataStyle }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n            postTime)));\r\n}\r\nexports.MetaData = MetaData;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/Avatar.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/Avatar.tsx ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Avatar = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar avatar_css_1 = __importDefault(__webpack_require__(/*! ./avatar.css */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/avatar.css\"));\r\nfunction Avatar(_a) {\r\n    var avatar = _a.avatar;\r\n    return (react_1.default.createElement(\"img\", { className: avatar_css_1.default.avatar, src: avatar, alt: \"avatar\" }));\r\n}\r\nexports.Avatar = Avatar;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/Avatar.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/avatar.css":
/*!*******************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/avatar.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"avatar\": \"avatar__avatar--2jEUU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/avatar.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/index.ts":
/*!*****************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/index.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Avatar */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/Avatar.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserLink.tsx":
/*!**************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserLink.tsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserLink = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userlink_css_1 = __importDefault(__webpack_require__(/*! ./userlink.css */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/userlink.css\"));\r\nvar Avatar_1 = __webpack_require__(/*! ./Avatar */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/Avatar/index.ts\");\r\nvar UserName_1 = __webpack_require__(/*! ./UserName */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/index.ts\");\r\nfunction UserLink(_a) {\r\n    var author = _a.author, avatar = _a.avatar, divUserLinkStyle = _a.divUserLinkStyle;\r\n    return (react_1.default.createElement(\"div\", { className: userlink_css_1.default.userLink, style: divUserLinkStyle },\r\n        react_1.default.createElement(Avatar_1.Avatar, { avatar: avatar }),\r\n        react_1.default.createElement(UserName_1.UserName, { author: author })));\r\n}\r\nexports.UserLink = UserLink;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserLink.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/UserName.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/UserName.tsx ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserName = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar username_css_1 = __importDefault(__webpack_require__(/*! ./username.css */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/username.css\"));\r\nfunction UserName(_a) {\r\n    var author = _a.author;\r\n    return (react_1.default.createElement(\"a\", { className: username_css_1.default.username, href: \"#user-url\" }, author));\r\n}\r\nexports.UserName = UserName;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/UserName.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/index.ts":
/*!*******************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/index.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserName */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/UserName.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/username.css":
/*!***********************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/username.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"username\": \"username__username--uZbQC\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserName/username.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/index.ts":
/*!**********************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/index.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserLink */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/UserLink.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/userlink.css":
/*!**************************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/userlink.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userLink\": \"userlink__userLink--i5eRv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/UserLink/userlink.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/index.ts":
/*!*************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/index.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MetaData */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/MetaData.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/MetaData/metadata.css":
/*!*****************************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/MetaData/metadata.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"metaData\": \"metadata__metaData---sSSl\",\n\t\"createdAt\": \"metadata__createdAt--1zSQc\",\n\t\"publishedLabel\": \"metadata__publishedLabel--2JeGW\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/MetaData/metadata.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/TextContent.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/TextContent.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/Content/CardsList/Card/TextContent/textcontent.css\"));\r\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/index.ts\");\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/Content/CardsList/Card/TextContent/Title/index.ts\");\r\nfunction TextContent(props) {\r\n    var title = props.title, author = props.author, avatar = props.avatar, datePostUtc = props.datePostUtc, rating = props.rating, score = props.score, previewImg = props.previewImg, id = props.id;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(MetaData_1.MetaData, { author: author, avatar: avatar, datePostUtc: datePostUtc }),\r\n        react_1.default.createElement(Title_1.Title, { author: author, avatar: avatar, datePostUtc: datePostUtc, title: title, rating: rating, score: score, previewImg: previewImg, id: id })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/Title/Title.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/Title/Title.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/Content/CardsList/Card/TextContent/Title/title.css\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Title(props) {\r\n    var title = props.title, id = props.id, author = props.author, avatar = props.avatar, datePostUtc = props.datePostUtc, previewImg = props.previewImg, score = props.score, rating = props.rating;\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/posts/\".concat(id), className: title_css_1.default.postLink, state: {\r\n                title: title,\r\n                rating: rating,\r\n                score: score,\r\n                previewImg: previewImg,\r\n                author: author,\r\n                avatar: avatar,\r\n                datePostUtc: datePostUtc,\r\n                id: id,\r\n            } }, title)));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/Title/index.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/Title/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/Content/CardsList/Card/TextContent/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/Title/title.css":
/*!***********************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/Title/title.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--1H-I1\",\n\t\"postLink\": \"title__postLink--2s_N5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/Content/CardsList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/TextContent/textcontent.css":
/*!***********************************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/TextContent/textcontent.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--3bJwW\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/card.css":
/*!****************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/card.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--2ABpE\",\n\t\"textContent\": \"card__textContent--2Q4AN\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/Card/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/Content/CardsList/Card/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/Content/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/Content/CardsList/CardsList.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Content/CardsList/CardsList.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/Content/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/Content/CardsList/Card/index.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar recoil_1 = __webpack_require__(/*! recoil */ \"recoil\");\r\nfunction CardsList() {\r\n    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];\r\n    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];\r\n    var _c = (0, react_1.useState)(''), errorLoading = _c[0], setErrorLoading = _c[1];\r\n    var _d = (0, react_1.useState)(''), nextAfter = _d[0], setNextAfter = _d[1];\r\n    var _e = (0, react_1.useState)(0), count = _e[0], setCount = _e[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var bottomOfList = (0, react_1.useRef)(null);\r\n    var showMore = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        if (!token)\r\n            return;\r\n        function load() {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var _a, after, children_1, error_1;\r\n                return __generator(this, function (_b) {\r\n                    switch (_b.label) {\r\n                        case 0:\r\n                            if (bottomOfList.current && showMore.current) {\r\n                                showMore.current.style.display = 'none';\r\n                            }\r\n                            setLoading(true);\r\n                            setErrorLoading('');\r\n                            _b.label = 1;\r\n                        case 1:\r\n                            _b.trys.push([1, 3, , 4]);\r\n                            return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {\r\n                                    headers: { Authorization: \"bearer \".concat(token) },\r\n                                    params: {\r\n                                        limit: 1,\r\n                                        after: nextAfter\r\n                                    }\r\n                                })];\r\n                        case 2:\r\n                            _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;\r\n                            setNextAfter(after);\r\n                            setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1.map(function (el) {\r\n                                var _a;\r\n                                return {\r\n                                    id: el.data.id,\r\n                                    title: el.data.title,\r\n                                    author: el.data.author,\r\n                                    rating: el.data.ups,\r\n                                    score: el.data.num_comments,\r\n                                    datePostUtc: el.data.created_utc * 1000,\r\n                                    avatar: el.data.sr_detail.icon_img\r\n                                        ? el.data.sr_detail.icon_img\r\n                                        : \"https://imageup.ru/img299/4554541/avatar.jpg\",\r\n                                    previewImg: el.data.previewImg\r\n                                        ? (_a = el.data.previewImg.images) === null || _a === void 0 ? void 0 : _a[0].source.url.replace(/(&amp\\;)/g, '&')\r\n                                        : \"https://imageup.ru/img62/4554540/prev.jpg\"\r\n                                };\r\n                            })); });\r\n                            return [3 /*break*/, 4];\r\n                        case 3:\r\n                            error_1 = _b.sent();\r\n                            setErrorLoading(String(error_1));\r\n                            return [3 /*break*/, 4];\r\n                        case 4:\r\n                            setLoading(false);\r\n                            return [2 /*return*/];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n        (_a = showMore.current) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleClick);\r\n        function handleClick() {\r\n            load();\r\n            setCount(count + 1);\r\n        }\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (entries[0].isIntersecting) {\r\n                if (count % 2 !== 0 || count === 0) {\r\n                    if (bottomOfList.current && showMore.current) {\r\n                        load();\r\n                        setCount(count + 1);\r\n                    }\r\n                }\r\n                else if (bottomOfList.current && showMore.current) {\r\n                    showMore.current.style.cssText = 'display: flex; margin: 0 auto';\r\n                }\r\n            }\r\n        }, {\r\n            rootMargin: '10px',\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (bottomOfList.current && showMore.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n                showMore.current.removeEventListener('click', handleClick);\r\n            }\r\n        };\r\n    }, [token, nextAfter]);\r\n    return (react_1.default.createElement(recoil_1.RecoilRoot, null,\r\n        react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n            posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n            posts.map(function (post) { return (react_1.default.createElement(Card_1.Card, { key: post.id, id: post.id, title: post.title, author: post.author, avatar: post.avatar, previewImg: post.previewImg, rating: post.rating, score: post.score, datePostUtc: post.datePostUtc })); }),\r\n            react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n            react_1.default.createElement(\"button\", { style: { display: 'none' }, ref: showMore }, \"\\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C \\u0435\\u0449\\u0435\"),\r\n            loading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\r\n            errorLoading && (react_1.default.createElement(\"div\", { role: 'alert', style: { textAlign: 'center' } }, errorLoading)),\r\n            react_1.default.createElement(react_router_dom_1.Outlet, null))));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/Content/CardsList/cardslist.css":
/*!****************************************************!*\
  !*** ./src/shared/Content/CardsList/cardslist.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--2RigV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/Content/CardsList/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Content/CardsList/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/Content/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/Dropdown/Dropdown.tsx":
/*!**************************************************!*\
  !*** ./src/shared/Content/Dropdown/Dropdown.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Content/Dropdown/dropdown.css\"));\r\nvar react_2 = __webpack_require__(/*! react */ \"react\");\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var _b, _c;\r\n    var left = _a.left, top = _a.top, button = _a.button, children = _a.children, isOpen = _a.isOpen, _d = _a.onClose, onClose = _d === void 0 ? NOOP : _d, _e = _a.onOpen, onOpen = _e === void 0 ? NOOP : _e;\r\n    var ref = (0, react_2.useRef)(null);\r\n    var _f = react_1.default.useState(isOpen), isDropdownOpen = _f[0], setIsDropdownOpen = _f[1];\r\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    var node = document.querySelector('#dropdown_root');\r\n    if (!node)\r\n        return null;\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen, ref: ref }, button),\r\n        isDropdownOpen &&\r\n            react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer, style: {\r\n                    top: (((_b = ref.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().y) || 0) + window.scrollY,\r\n                    left: (((_c = ref.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().x) || 0) + window.scrollX,\r\n                } },\r\n                react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)), node)));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Content/Dropdown/dropdown.css":
/*!**************************************************!*\
  !*** ./src/shared/Content/Dropdown/dropdown.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--2KiQv\",\n\t\"listContainer\": \"dropdown__listContainer--1_nuF\",\n\t\"list\": \"dropdown__list--31xkc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Content/Dropdown/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Content/Dropdown/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Content/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nfunction SearchBlock() {\r\n    var data = (0, useUserData_1.useUserData)().data;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=\".concat('nlayCzCHWqlnYP_-0IBMJQ', \"&response_type=code&state=RANDOM_STRING&redirect_uri=http://react-project-git-main-vlads-projects-cde9d0a5.vercel.app/auth&duration=permanent&scope=read submit identity\"), className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(Icons_1.IconAnon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColors.grey99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColors.black : Text_1.EColors.grey99 }, username || 'Аноним')))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Icon(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.name, name = _d === void 0 ? \"block\" : _d, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    var IconComponent = {\r\n        block: Icons_1.BlockIcon,\r\n        comment: Icons_1.CommentIcon,\r\n        save: Icons_1.SaveIcon,\r\n        send: Icons_1.SendIcon,\r\n        warning: Icons_1.WarningIcon,\r\n    }[name];\r\n    var classes = (0, classnames_1.default)(icon_css_1.default[\"s\".concat(size)], (_a = {}, _a[icon_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[icon_css_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[icon_css_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c));\r\n    if (!IconComponent) {\r\n        return react_1.default.createElement(\"div\", null, \"\\u041D\\u0435\\u0438\\u0437\\u0432\\u0435\\u0441\\u0442\\u043D\\u0430\\u044F \\u0438\\u043A\\u043E\\u043D\\u0430\");\r\n    }\r\n    return react_1.default.createElement(IconComponent, { className: classes });\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/icon.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"m20\": \"icon__m20--22ACs\",\n\t\"m18\": \"icon__m18--1yNvS\",\n\t\"m16\": \"icon__m16--1W2nF\",\n\t\"m14\": \"icon__m14--Pdbj_\",\n\t\"m12\": \"icon__m12--1-U0b\",\n\t\"m10\": \"icon__m10--2A792\",\n\t\"t20\": \"icon__t20--uj2iv\",\n\t\"t18\": \"icon__t18--EQmIs\",\n\t\"t16\": \"icon__t16--2OInr\",\n\t\"t14\": \"icon__t14--1aldr\",\n\t\"t12\": \"icon__t12--3KfvD\",\n\t\"t10\": \"icon__t10--1yy-4\",\n\t\"d20\": \"icon__d20--3J3ju\",\n\t\"d18\": \"icon__d18--6KSVR\",\n\t\"d16\": \"icon__d16--3Gdce\",\n\t\"d14\": \"icon__d14--2AAv4\",\n\t\"d12\": \"icon__d12--29ZTk\",\n\t\"d10\": \"icon__d10--3846z\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/AIcon.tsx":
/*!************************************!*\
  !*** ./src/shared/Icons/AIcon.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction AIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"16\", height: \"18\", viewBox: \"0 0 16 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z\", fill: \"#999999\" })));\r\n}\r\nexports.AIcon = AIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/AIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ArrowsIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/ArrowsIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ArrowsIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ArrowsIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"20\", height: \"12\", viewBox: \"0 0 20 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z\", fill: \"#999999\" })));\r\n}\r\nexports.ArrowsIcon = ArrowsIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ArrowsIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/AudioIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/AudioIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AudioIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction AudioIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"20\", height: \"18\", viewBox: \"0 0 20 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z\", fill: \"#999999\" })));\r\n}\r\nexports.AudioIcon = AudioIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/AudioIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/BlockIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BlockIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction BlockIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" })));\r\n}\r\nexports.BlockIcon = BlockIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/BookIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/BookIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BookIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction BookIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z\", fill: \"#999999\" })));\r\n}\r\nexports.BookIcon = BookIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/BookIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentIcon = CommentIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/DownIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/DownIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DownIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction DownIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.DownIcon = DownIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/DownIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/FileIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/FileIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FileIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction FileIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"16\", height: \"20\", viewBox: \"0 0 16 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z\", fill: \"#999999\" })));\r\n}\r\nexports.FileIcon = FileIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/FileIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconAnon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconAnon() {\r\n    return (react_1.default.createElement(\"svg\", { viewBox: \"-45 0 511 511.99976\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"m383.5 179.753906c.140625-.027344.292969-.058594.433594-.085937 18.910156-3.855469 31.164062-22.375 27.3125-41.285157-3.851563-18.898437-22.367188-31.152343-41.285156-27.316406-4.65625.949219-9.949219 1.902344-15.726563 2.839844l-16.585937-77.902344c-2.652344-12.457031-10.472657-23.300781-21.453126-29.75-10.984374-6.449218-24.265624-7.996094-36.4375-4.242187l-44.496093 13.722656c-15.703125 4.839844-32.300781 4.839844-48.003907 0l-44.496093-13.722656c-15.539063-4.792969-32.589844-.863281-44.488281 10.25-3.035157 2.835937-3.195313 7.589843-.363282 10.625 2.832032 3.03125 7.589844 3.195312 10.621094.363281 7.976562-7.453125 19.394531-10.082031 29.800781-6.875l44.5 13.722656c18.597657 5.734375 38.257813 5.734375 56.859375 0l44.496094-13.722656c8.269531-2.554688 16.933594-1.542969 24.398438 2.839844 7.460937 4.382812 12.5625 11.457031 14.363281 19.921875l8.804687 41.347656c-32.074218 4.675781-79.464844 9.046875-120.496094 9.046875-41.027343 0-88.417968-4.371094-120.488281-9.046875l6.355469-29.867187c.863281-4.058594-1.726562-8.050782-5.785156-8.914063-4.058594-.859375-8.050782 1.726563-8.914063 5.785156l-14.140625 66.417969c-5.78125-.9375-11.078125-1.890625-15.734375-2.839844-18.910156-3.835937-37.429687 8.417969-41.28125 27.316406-3.851562 18.914063 8.402344 37.433594 27.316407 41.285157.140624.03125.292968.058593.433593.085937-25.230469 35.632813-38.519531 77.433594-38.519531 121.488282 0 116.210937 94.546875 210.757812 210.757812 210.757812 116.214844 0 210.761719-94.546875 210.761719-210.757812 0-44.070313-13.289062-85.859376-38.519531-121.488282zm-295.867188-84.539062c32.671876 4.8125 81.449219 9.34375 123.625 9.34375 42.175782 0 90.957032-4.53125 123.628907-9.34375l4.453125 20.925781c-36.636719 5.082031-86.222656 9.253906-128.082032 9.253906-41.859374 0-91.445312-4.171875-128.082031-9.257812zm-61.632812 46.167968c1.925781-9.449218 10.28125-15.988281 19.578125-15.988281 1.3125 0 2.648437.128907 3.980469.398438 35.308594 7.195312 105.445312 14.632812 161.699218 14.632812 56.257813 0 126.394532-7.4375 161.699219-14.628906 10.796875-2.1875 21.367188 4.800781 23.5625 15.585937 2.199219 10.792969-4.792969 21.359376-15.585937 23.558594-43.203125 8.796875-116.148438 15.433594-169.675782 15.433594-53.53125 0-126.472656-6.636719-169.671874-15.433594-10.792969-2.199218-17.785157-12.765625-15.585938-23.558594zm328.875 159.859376c0 79.1875-64.425781 143.613281-143.617188 143.613281-79.1875 0-143.613281-64.425781-143.613281-143.613281 0-42.589844 18.738281-82.722657 51.410157-110.113282.140624-.121094.273437-.25.40625-.375 31.34375 2.898438 64.132812 4.652344 91.796874 4.652344 27.644532 0 60.414063-1.753906 91.746094-4.648438 32.972656 27.40625 51.871094 67.609376 51.871094 110.484376zm-143.617188 195.726562c-107.925781 0-195.726562-87.804688-195.726562-195.726562 0-43.277344 13.804688-84.199219 39.929688-118.484376 13.28125 2.207032 28.238281 4.21875 43.964843 5.960938-29.898437 29.695312-46.8125 70-46.8125 112.523438 0 87.476562 71.167969 158.644531 158.644531 158.644531 87.476563 0 158.644532-71.167969 158.644532-158.644531 0-42.613282-16.902344-82.832032-46.820313-112.519532 15.730469-1.742187 30.6875-3.757812 43.972657-5.964844 26.128906 34.28125 39.933593 75.195313 39.933593 118.484376 0 107.921874-87.804687 195.726562-195.730469 195.726562zm0 0\" }),\r\n        react_1.default.createElement(\"path\", { d: \"m145.367188 268.617188c-4.152344 0-7.515626 3.363281-7.515626 7.515624v10.9375c0 4.152344 3.363282 7.515626 7.515626 7.515626 4.148437 0 7.511718-3.363282 7.511718-7.515626v-10.9375c0-4.152343-3.363281-7.515624-7.511718-7.515624zm0 0\" }),\r\n        react_1.default.createElement(\"path\", { d: \"m277.152344 294.585938c4.152344 0 7.515625-3.363282 7.515625-7.515626v-10.9375c0-4.152343-3.363281-7.515624-7.515625-7.515624-4.148438 0-7.515625 3.363281-7.515625 7.515624v10.9375c0 4.152344 3.367187 7.515626 7.515625 7.515626zm0 0\" }),\r\n        react_1.default.createElement(\"path\", { d: \"m199.554688 282.617188c-2.730469-3.128907-7.476563-3.453126-10.605469-.726563-3.128907 2.726563-3.453125 7.472656-.726563 10.601563 5.808594 6.667968 14.207032 10.492187 23.035156 10.492187 8.828126 0 17.226563-3.824219 23.039063-10.492187 2.726563-3.128907 2.402344-7.875-.726563-10.601563-3.128906-2.726563-7.878906-2.402344-10.605468.726563-2.957032 3.394531-7.222656 5.335937-11.707032 5.335937-4.484374 0-8.75-1.945313-11.703124-5.335937zm0 0\" })));\r\n}\r\nexports.IconAnon = IconAnon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ImgIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/ImgIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ImgIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ImgIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.ImgIcon = ImgIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ImgIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/LoadIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/LoadIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LoadIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction LoadIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"14\", height: \"17\", viewBox: \"0 0 14 17\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z\", fill: \"#999999\" })));\r\n}\r\nexports.LoadIcon = LoadIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/LoadIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MessagesIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/MessagesIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MessagesIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MessagesIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z\", fill: \"#999999\" })));\r\n}\r\nexports.MessagesIcon = MessagesIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MessagesIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/OvalIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/OvalIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.OvalIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction OvalIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"20\", height: \"10\", viewBox: \"0 0 20 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z\", fill: \"#999999\" })));\r\n}\r\nexports.OvalIcon = OvalIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/OvalIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/PdfIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/PdfIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PdfIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PdfIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.PdfIcon = PdfIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/PdfIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/PencilIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/PencilIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PencilIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PencilIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 14.2501V18.0001H3.75L14.81 6.94006L11.06 3.19006L0 14.2501ZM17.71 4.04006C18.1 3.65006 18.1 3.02006 17.71 2.63006L15.37 0.290059C14.98 -0.0999414 14.35 -0.0999414 13.96 0.290059L12.13 2.12006L15.88 5.87006L17.71 4.04006Z\", fill: \"#999999\" })));\r\n}\r\nexports.PencilIcon = PencilIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/PencilIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SendIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/SendIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SendIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction SendIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.SendIcon = SendIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SendIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/UpIcon.tsx":
/*!*************************************!*\
  !*** ./src/shared/Icons/UpIcon.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UpIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction UpIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\" })));\r\n}\r\nexports.UpIcon = UpIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/UpIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/UpdateIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/UpdateIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UpdateIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction UpdateIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"22\", height: \"16\", viewBox: \"0 0 22 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z\", fill: \"#999999\" })));\r\n}\r\nexports.UpdateIcon = UpdateIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/UpdateIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/WarningIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WarningIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction WarningIcon(_a) {\r\n    var className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: className, width: \"14\", height: \"12\", viewBox: \"0 0 14 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"#999999\" })));\r\n}\r\nexports.WarningIcon = WarningIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/Icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/Icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/Icons/CommentIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SendIcon */ \"./src/shared/Icons/SendIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/Icons/IconAnon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/NotFound/NotFound.tsx":
/*!******************************************!*\
  !*** ./src/shared/NotFound/NotFound.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFound = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar notfound_css_1 = __importDefault(__webpack_require__(/*! ./notfound.css */ \"./src/shared/NotFound/notfound.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nfunction NotFound() {\r\n    var node = document.querySelector('#error_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: notfound_css_1.default.errorBlock },\r\n        react_1.default.createElement(\"div\", { className: notfound_css_1.default.error }, \"404 \\u2014 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\"))), node);\r\n}\r\nexports.NotFound = NotFound;\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/NotFound.tsx?");

/***/ }),

/***/ "./src/shared/NotFound/index.ts":
/*!**************************************!*\
  !*** ./src/shared/NotFound/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NotFound */ \"./src/shared/NotFound/NotFound.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/index.ts?");

/***/ }),

/***/ "./src/shared/NotFound/notfound.css":
/*!******************************************!*\
  !*** ./src/shared/NotFound/notfound.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"error\": \"notfound__error--2jhxx\",\n\t\"errorBlock\": \"notfound__errorBlock--1v05b\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/notfound.css?");

/***/ }),

/***/ "./src/shared/Post/CommentAnswerForm/CommentAnswerForm.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/Post/CommentAnswerForm/CommentAnswerForm.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Commentanswerform = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar commentanswerform_css_1 = __importDefault(__webpack_require__(/*! ./commentanswerform.css */ \"./src/shared/Post/CommentAnswerForm/commentanswerform.css\"));\r\nvar MenuComment_1 = __webpack_require__(/*! ../CommentForm/MenuComment */ \"./src/shared/Post/CommentForm/MenuComment/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar reducer_1 = __webpack_require__(/*! ../../../store/reducer */ \"./src/store/reducer.ts\");\r\nvar formik_1 = __webpack_require__(/*! formik */ \"formik\");\r\nfunction Commentanswerform(_a) {\r\n    var modalForm = _a.modalForm, onClose = _a.onClose;\r\n    var commentValue = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var refForm = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = refForm.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    return (react_1.default.createElement(formik_1.Formik, { initialValues: { message: commentValue }, onSubmit: function (values, _a) {\r\n            var setSubmitting = _a.setSubmitting;\r\n            setTimeout(function () {\r\n                alert('Форма отправлена ');\r\n                setSubmitting(false);\r\n                dispatch((0, reducer_1.updateComment)(values.message));\r\n            }, 400);\r\n        }, validate: function (values) {\r\n            var errors = {};\r\n            if (!values.message) {\r\n                errors.message = 'Заполните поле';\r\n            }\r\n            else if (values.message.length <= 3) {\r\n                errors.message = 'Введите больше 3-х символов';\r\n            }\r\n            return errors;\r\n        } }, function (_a) {\r\n        var errors = _a.errors, touched = _a.touched, isSubmitting = _a.isSubmitting;\r\n        return (react_1.default.createElement(formik_1.Form, { className: commentanswerform_css_1.default.form, style: modalForm, ref: refForm },\r\n            react_1.default.createElement(formik_1.ErrorMessage, { component: \"div\", name: \"message\", className: commentanswerform_css_1.default.inputError }),\r\n            react_1.default.createElement(formik_1.Field, { component: \"textarea\", type: 'message', name: 'message', className: commentanswerform_css_1.default.input, style: errors.message && touched.message && { borderColor: 'red' } }),\r\n            react_1.default.createElement(\"div\", { className: commentanswerform_css_1.default.content },\r\n                react_1.default.createElement(MenuComment_1.MenuComment, null),\r\n                react_1.default.createElement(\"button\", { type: 'submit', className: commentanswerform_css_1.default.button, disabled: isSubmitting }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\r\n    }));\r\n}\r\nexports.Commentanswerform = Commentanswerform;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentAnswerForm/CommentAnswerForm.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentAnswerForm/commentanswerform.css":
/*!*****************************************************************!*\
  !*** ./src/shared/Post/CommentAnswerForm/commentanswerform.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentanswerform__form--2RuAq\",\n\t\"input\": \"commentanswerform__input--39bqE\",\n\t\"inputError\": \"commentanswerform__inputError--3gy9d\",\n\t\"button\": \"commentanswerform__button--ysRwf\",\n\t\"placeholderName\": \"commentanswerform__placeholderName--5I7vW\",\n\t\"content\": \"commentanswerform__content--3lqUX\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentAnswerForm/commentanswerform.css?");

/***/ }),

/***/ "./src/shared/Post/CommentAnswerForm/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/Post/CommentAnswerForm/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentAnswerForm */ \"./src/shared/Post/CommentAnswerForm/CommentAnswerForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentAnswerForm/index.ts?");

/***/ }),

/***/ "./src/shared/Post/CommentForm/CommentForm.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentForm/CommentForm.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/Post/CommentForm/commentform.css\"));\r\nvar MenuComment_1 = __webpack_require__(/*! ./MenuComment */ \"./src/shared/Post/CommentForm/MenuComment/index.ts\");\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nvar recoil_1 = __webpack_require__(/*! recoil */ \"recoil\");\r\nvar App_1 = __webpack_require__(/*! ../../../App */ \"./src/App.tsx\");\r\nfunction CommentForm() {\r\n    // const text = useRecoilValue(textState)\r\n    var _a = (0, recoil_1.useRecoilState)(App_1.textState), text = _a[0], setText = _a[1];\r\n    var _b = (0, react_1.useState)(''), texts = _b[0], setTexts = _b[1];\r\n    console.log(text);\r\n    // const count = useRecoilValue(charCountState);\r\n    // const setText = useSetRecoilState(textState)\r\n    // const value = useSelector<RootState, string>(state => state.commentText)\r\n    // const dispatch = useDispatch();\r\n    var data = (0, useUserData_1.useUserData)().data;\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n    }\r\n    function handleChange(event) {\r\n        // dispatch(updateComment(event.target.value));\r\n        setText(event.target.value);\r\n        console.log(text);\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { required: true, className: commentform_css_1.default.input, value: text, onChange: handleChange }),\r\n        react_1.default.createElement(\"div\", { className: commentform_css_1.default.placeholderName },\r\n            data.name,\r\n            \",\",\r\n            react_1.default.createElement(\"span\", null, \" \\u043E\\u0441\\u0442\\u0430\\u0432\\u044C\\u0442\\u0435 \\u0432\\u0430\\u0448 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\")),\r\n        react_1.default.createElement(\"div\", { className: commentform_css_1.default.content },\r\n            react_1.default.createElement(MenuComment_1.MenuComment, null),\r\n            react_1.default.createElement(\"button\", { type: 'submit', onClick: function () { return setText('2323232'); }, className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentForm/MenuComment/MenuComment.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/Post/CommentForm/MenuComment/MenuComment.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuComment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menucomment_css_1 = __importDefault(__webpack_require__(/*! ./menucomment.css */ \"./src/shared/Post/CommentForm/MenuComment/menucomment.css\"));\r\nvar ArrowsIcon_1 = __webpack_require__(/*! ../../../Icons/ArrowsIcon */ \"./src/shared/Icons/ArrowsIcon.tsx\");\r\nvar ImgIcon_1 = __webpack_require__(/*! ../../../Icons/ImgIcon */ \"./src/shared/Icons/ImgIcon.tsx\");\r\nvar FileIcon_1 = __webpack_require__(/*! ../../../Icons/FileIcon */ \"./src/shared/Icons/FileIcon.tsx\");\r\nvar LoadIcon_1 = __webpack_require__(/*! ../../../Icons/LoadIcon */ \"./src/shared/Icons/LoadIcon.tsx\");\r\nvar BookIcon_1 = __webpack_require__(/*! ../../../Icons/BookIcon */ \"./src/shared/Icons/BookIcon.tsx\");\r\nvar UpdateIcon_1 = __webpack_require__(/*! ../../../Icons/UpdateIcon */ \"./src/shared/Icons/UpdateIcon.tsx\");\r\nvar OvalIcon_1 = __webpack_require__(/*! ../../../Icons/OvalIcon */ \"./src/shared/Icons/OvalIcon.tsx\");\r\nvar AudioIcon_1 = __webpack_require__(/*! ../../../Icons/AudioIcon */ \"./src/shared/Icons/AudioIcon.tsx\");\r\nvar MessagesIcon_1 = __webpack_require__(/*! ../../../Icons/MessagesIcon */ \"./src/shared/Icons/MessagesIcon.tsx\");\r\nvar PencilIcon_1 = __webpack_require__(/*! ../../../Icons/PencilIcon */ \"./src/shared/Icons/PencilIcon.tsx\");\r\nvar AIcon_1 = __webpack_require__(/*! ../../../Icons/AIcon */ \"./src/shared/Icons/AIcon.tsx\");\r\nvar PdfIcon_1 = __webpack_require__(/*! ../../../Icons/PdfIcon */ \"./src/shared/Icons/PdfIcon.tsx\");\r\nfunction MenuComment() {\r\n    return (react_1.default.createElement(\"ul\", { className: menucomment_css_1.default.menuItemsList },\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(ArrowsIcon_1.ArrowsIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(ImgIcon_1.ImgIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(FileIcon_1.FileIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(LoadIcon_1.LoadIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(BookIcon_1.BookIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(UpdateIcon_1.UpdateIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(OvalIcon_1.OvalIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(AudioIcon_1.AudioIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(MessagesIcon_1.MessagesIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(PencilIcon_1.PencilIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(AIcon_1.AIcon, null)),\r\n        react_1.default.createElement(\"li\", { className: menucomment_css_1.default.menuItem },\r\n            react_1.default.createElement(PdfIcon_1.PdfIcon, null))));\r\n}\r\nexports.MenuComment = MenuComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/MenuComment/MenuComment.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentForm/MenuComment/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Post/CommentForm/MenuComment/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuComment */ \"./src/shared/Post/CommentForm/MenuComment/MenuComment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/MenuComment/index.ts?");

/***/ }),

/***/ "./src/shared/Post/CommentForm/MenuComment/menucomment.css":
/*!*****************************************************************!*\
  !*** ./src/shared/Post/CommentForm/MenuComment/menucomment.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menucomment__menuItemsList--2Vnk_\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/MenuComment/menucomment.css?");

/***/ }),

/***/ "./src/shared/Post/CommentForm/commentform.css":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentForm/commentform.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--1oHDO\",\n\t\"modal\": \"commentform__modal--RMxU2\",\n\t\"input\": \"commentform__input--28J_p\",\n\t\"button\": \"commentform__button--2-2qT\",\n\t\"placeholderName\": \"commentform__placeholderName--cPmO1\",\n\t\"content\": \"commentform__content--2Ewnz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/Post/CommentForm/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Post/CommentForm/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/Post/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/Post/CommentList/CommentList.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentList/CommentList.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentlist_css_1 = __importDefault(__webpack_require__(/*! ./commentlist.css */ \"./src/shared/Post/CommentList/commentlist.css\"));\r\nvar KarmaCounter_1 = __webpack_require__(/*! ../../Content/CardsList/Card/Controls/KarmaCounter */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../Break */ \"./src/shared/Break/index.ts\");\r\nvar MetaData_1 = __webpack_require__(/*! ../../Content/CardsList/Card/TextContent/MetaData */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/index.ts\");\r\nvar MenuItemsList_1 = __webpack_require__(/*! ../../Content/CardsList/Card/Menu/MenuButton/MenuItemsList */ \"./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/index.ts\");\r\nfunction CommentList(_a) {\r\n    var answerComment = _a.answerComment, bodyComment = _a.bodyComment, authorComment = _a.authorComment, createdComment = _a.createdComment, idComment = _a.idComment;\r\n    return (react_1.default.createElement(\"li\", { key: idComment, className: commentlist_css_1.default.commentItem },\r\n        react_1.default.createElement(\"div\", { className: commentlist_css_1.default.commentItemLeft },\r\n            react_1.default.createElement(KarmaCounter_1.KarmaCounter, { divStyle: { display: 'flex', flexDirection: 'column' }, spanStyle: { display: 'none' }, downStyle: { paddingLeft: '0' } }),\r\n            react_1.default.createElement(Break_1.Break, { size: 8, top: true }),\r\n            react_1.default.createElement(\"div\", { className: commentlist_css_1.default.divider })),\r\n        react_1.default.createElement(\"div\", { className: commentlist_css_1.default.commentItemBody },\r\n            react_1.default.createElement(MetaData_1.MetaData, { avatar: 'https://styles.redditmedia.com/t5_9iiuta/styles/profileIcon_snooab331651-3a90-401c-b63d-b4f47b88aa33-headshot.png?width=256&height=256&crop=256:256,smart&s=0350d4236ca459faef433755268e2b4d77fe4db9', datePostUtc: createdComment, author: authorComment, divUserLinkStyle: { padding: '0 6px 0 0' }, spanMetaDataStyle: { display: 'none' }, divMetaDataStyle: { flexFlow: \"row nowrap\", justifyContent: 'flex-start' } }),\r\n            react_1.default.createElement(Break_1.Break, { size: 8, top: true }),\r\n            react_1.default.createElement(\"p\", { className: commentlist_css_1.default.commentItemDescr }, bodyComment),\r\n            react_1.default.createElement(Break_1.Break, { size: 8, top: true }),\r\n            react_1.default.createElement(MenuItemsList_1.MenuItemsList, { score: 0, liHidden: { display: 'none' }, divHidden: { display: 'none' }, ul: { paddingLeft: '0', padding: '0', flexDirection: 'row', width: '80%' }, li: { padding: '0', marginRight: '7px', display: 'flex' } }))));\r\n}\r\nexports.CommentList = CommentList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentList/CommentList.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentList/commentlist.css":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentList/commentlist.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentItem\": \"commentlist__commentItem--3zBsl\",\n\t\"commentItemLeft\": \"commentlist__commentItemLeft--2wPzg\",\n\t\"commentItemDescr\": \"commentlist__commentItemDescr--2L3Rd\",\n\t\"divider\": \"commentlist__divider--3Nr_7\",\n\t\"mediaBody\": \"commentlist__mediaBody--2d95N\",\n\t\"author\": \"commentlist__author--3KSu7\",\n\t\"metaData\": \"commentlist__metaData--p1ht4\",\n\t\"footerComment\": \"commentlist__footerComment--3nM_Z\",\n\t\"vote\": \"commentlist__vote--1rHSb\",\n\t\"plus\": \"commentlist__plus--2I0KF\",\n\t\"minus\": \"commentlist__minus--iQkb9\",\n\t\"commentReply\": \"commentlist__commentReply--FsHsn\",\n\t\"devide\": \"commentlist__devide--j2IKE\",\n\t\"mediaText\": \"commentlist__mediaText--CVJOE\",\n\t\"titleComments\": \"commentlist__titleComments--1ahH1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentList/commentlist.css?");

/***/ }),

/***/ "./src/shared/Post/CommentList/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Post/CommentList/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentList */ \"./src/shared/Post/CommentList/CommentList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentList/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar CommentForm_1 = __webpack_require__(/*! ./CommentForm */ \"./src/shared/Post/CommentForm/index.ts\");\r\nvar MetaData_1 = __webpack_require__(/*! ../Content/CardsList/Card/TextContent/MetaData */ \"./src/shared/Content/CardsList/Card/TextContent/MetaData/index.ts\");\r\nvar KarmaCounter_1 = __webpack_require__(/*! ../Content/CardsList/Card/Controls/KarmaCounter */ \"./src/shared/Content/CardsList/Card/Controls/KarmaCounter/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../Break */ \"./src/shared/Break/index.ts\");\r\nvar CommentList_1 = __webpack_require__(/*! ./CommentList */ \"./src/shared/Post/CommentList/index.ts\");\r\nvar MenuItemsList_1 = __webpack_require__(/*! ../Content/CardsList/Card/Menu/MenuButton/MenuItemsList */ \"./src/shared/Content/CardsList/Card/Menu/MenuButton/MenuItemsList/index.ts\");\r\nvar Text_2 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Post() {\r\n    var state = (0, react_router_dom_1.useLocation)().state;\r\n    var coments = (0, useCommentsData_1.UseCommentsData)(state.id)[0];\r\n    var ref = (0, react_1.useRef)(null);\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                navigate('/posts');\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.titleContainer },\r\n            react_1.default.createElement(KarmaCounter_1.KarmaCounter, { rating: state.rating, divStyle: { display: 'flex', flexDirection: 'column' }, spanStyle: { paddingLeft: '0' }, downStyle: { paddingLeft: '0' } }),\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(\"div\", { className: post_css_1.default.titleContainerRight },\r\n                react_1.default.createElement(\"h2\", { className: post_css_1.default.title }, state.title),\r\n                react_1.default.createElement(MetaData_1.MetaData, { author: state.author, avatar: state.avatar, datePostUtc: state.datePostUtc }))),\r\n        react_1.default.createElement(Break_1.Break, { size: 12, top: true }),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n            react_1.default.createElement(\"p\", { className: post_css_1.default.contentDescr }, \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione harum dolorum adipisci at perferendis, exercitationem quibusdam minima voluptatibus esse pariatur natus numquam corporis neque aperiam ipsum delectus. Reiciendis, et laost.\"),\r\n            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),\r\n            react_1.default.createElement(\"img\", { src: state.previewImg, className: post_css_1.default.previewImg, alt: \"preview\" }),\r\n            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),\r\n            react_1.default.createElement(\"div\", { className: post_css_1.default.divider }),\r\n            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),\r\n            react_1.default.createElement(\"div\", { className: post_css_1.default.menuContainer },\r\n                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { score: state.score, divHidden: { display: 'none' }, answerLiHidden: { display: 'none' }, ul: { paddingLeft: '0', justifyContent: 'space-between', padding: '0', flexDirection: 'row', width: '80%' }, li: { padding: '0' } }),\r\n                react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 12, desktopSize: 14, color: Text_2.EColors.grey99 }, \"---------\")),\r\n            react_1.default.createElement(Break_1.Break, { size: 20, top: true }),\r\n            react_1.default.createElement(CommentForm_1.CommentForm, null),\r\n            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),\r\n            react_1.default.createElement(\"div\", { className: post_css_1.default.divider }),\r\n            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),\r\n            react_1.default.createElement(\"ul\", null, coments.map(function (comment) { return (react_1.default.createElement(CommentList_1.CommentList, { key: comment.idComment, bodyComment: comment.bodyComment, authorComment: comment.authorComment, createdComment: comment.createdComment, idComment: comment.idComment, answerComment: comment.answerComment })); }))))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"content\": \"post__content--2gFMc\",\n\t\"close\": \"post__close--1HSqz\",\n\t\"previewImg\": \"post__previewImg--3Qw8z\",\n\t\"title\": \"post__title--xhpd2\",\n\t\"titleContainer\": \"post__titleContainer--35XWo\",\n\t\"titleContainerRight\": \"post__titleContainerRight--2h-OL\",\n\t\"contentDescr\": \"post__contentDescr--1xMSD\",\n\t\"divider\": \"post__divider--2etHm\",\n\t\"menuContainer\": \"post__menuContainer--MybIl\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColors = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColors;\r\n(function (EColors) {\r\n    EColors[\"black\"] = \"black\";\r\n    EColors[\"orange\"] = \"orange\";\r\n    EColors[\"green\"] = \"green\";\r\n    EColors[\"white\"] = \"white\";\r\n    EColors[\"grayF4\"] = \"grayF4\";\r\n    EColors[\"greyD9\"] = \"greyD9\";\r\n    EColors[\"greyC4\"] = \"greyC4\";\r\n    EColors[\"grey99\"] = \"grey99\";\r\n    EColors[\"grey66\"] = \"grey66\";\r\n    EColors[\"greyF3\"] = \"greyF3\";\r\n})(EColors = exports.EColors || (exports.EColors = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? EColors.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    var classes = (0, classnames_1.default)(text_css_1.default[\"s\".concat(size)], (_a = {}, _a[text_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_css_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c), text_css_1.default[color]);\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"white\": \"text__white--13JGE\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"greyEC\": \"text__greyEC--2krZR\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MeRequestAsync = exports.MeRequestError = exports.ME_REQUEST_ERROR = exports.MeRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.MeRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar MeRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.MeRequest = MeRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar MeRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.MeRequestSuccess = MeRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar MeRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.MeRequestError = MeRequestError;\r\nvar MeRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch((0, exports.MeRequest)());\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me?raw_json=1', {\r\n        headers: { Authorization: \"bearer \".concat(getState().token) }\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch((0, exports.MeRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch((0, exports.MeRequestError)(String(error)));\r\n    });\r\n}; };\r\nexports.MeRequestAsync = MeRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/reducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.updateComment = exports.setToken = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\r\nvar initialValue = {\r\n    commentText: 'Привет, Skillbox!',\r\n    token: '',\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {},\r\n    }\r\n};\r\nvar SET_TOKEN = 'SET_TOKEN';\r\nvar setToken = function (tokenValue) { return ({\r\n    type: SET_TOKEN,\r\n    tokenValue: tokenValue,\r\n}); };\r\nexports.setToken = setToken;\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialValue; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case SET_TOKEN:\r\n            return __assign(__assign({}, state), { token: action.tokenValue });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/store/token/actions.ts":
/*!************************************!*\
  !*** ./src/store/token/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = void 0;\r\nvar reducer_1 = __webpack_require__(/*! ../reducer */ \"./src/store/reducer.ts\");\r\nvar saveToken = function () { return function (dispatch) {\r\n    if (window.__token__) {\r\n        dispatch((0, reducer_1.setToken)(window.__token__));\r\n    }\r\n}; };\r\nexports.saveToken = saveToken;\r\n\n\n//# sourceURL=webpack:///./src/store/token/actions.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recoil\");\n\n//# sourceURL=webpack:///external_%22recoil%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });