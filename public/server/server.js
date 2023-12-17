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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(42), exports);
__exportStar(__webpack_require__(43), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeRequestAsync = exports.MeRequestError = exports.ME_REQUEST_ERROR = exports.MeRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.MeRequest = exports.ME_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(3));
exports.ME_REQUEST = 'ME_REQUEST';
var MeRequest = function () { return ({
    type: exports.ME_REQUEST
}); };
exports.MeRequest = MeRequest;
exports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
var MeRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCESS,
    data: data,
}); };
exports.MeRequestSuccess = MeRequestSuccess;
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
var MeRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error,
}); };
exports.MeRequestError = MeRequestError;
var MeRequestAsync = function () { return function (dispatch, getState) {
    dispatch((0, exports.MeRequest)());
    axios_1.default.get('https://oauth.reddit.com/api/v1/me?raw_json=1', {
        headers: { Authorization: "bearer ".concat(getState().token) }
    })
        .then(function (resp) {
        var userData = resp.data;
        dispatch((0, exports.MeRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));
    })
        .catch(function (error) {
        console.log(error);
        dispatch((0, exports.MeRequestError)(String(error)));
    });
}; };
exports.MeRequestAsync = MeRequestAsync;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(86), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(117), exports);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.updateComment = exports.setToken = void 0;
var actions_1 = __webpack_require__(8);
var reducer_1 = __webpack_require__(139);
var initialValue = {
    commentText: 'Привет, Skillbox!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {},
    }
};
var SET_TOKEN = 'SET_TOKEN';
var setToken = function (tokenValue) { return ({
    type: SET_TOKEN,
    tokenValue: tokenValue,
}); };
exports.setToken = setToken;
var UPDATE_COMMENT = 'UPDATE_COMMENT';
var updateComment = function (text) { return ({
    type: UPDATE_COMMENT,
    text: text,
}); };
exports.updateComment = updateComment;
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialValue; }
    switch (action.type) {
        case UPDATE_COMMENT:
            return __assign(__assign({}, state), { commentText: action.text });
        case SET_TOKEN:
            return __assign(__assign({}, state), { token: action.tokenValue });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("recoil");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textState = exports.App = void 0;
var root_1 = __webpack_require__(22);
var React = __importStar(__webpack_require__(0));
var Layout_1 = __webpack_require__(23);
__webpack_require__(26);
var Header_1 = __webpack_require__(28);
var Content_1 = __webpack_require__(54);
var CardsList_1 = __webpack_require__(57);
var react_redux_1 = __webpack_require__(1);
var redux_1 = __webpack_require__(141);
var redux_devtools_extension_1 = __webpack_require__(142);
var reducer_1 = __webpack_require__(13);
var redux_thunk_1 = __importDefault(__webpack_require__(143));
var actions_1 = __webpack_require__(144);
var react_1 = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(4);
var Post_1 = __webpack_require__(145);
var NotFound_1 = __webpack_require__(155);
var recoil_1 = __webpack_require__(14);
var store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function AppComponent() {
    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    var dispatch = (0, react_redux_1.useDispatch)();
    React.useEffect(function () {
        dispatch((0, actions_1.saveToken)());
    }, [token]);
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    if (!mounted)
        return null;
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(Layout_1.Layout, null,
            React.createElement(Header_1.Header, null),
            React.createElement(Content_1.Content, null,
                React.createElement(react_router_dom_1.Routes, null,
                    React.createElement(react_router_dom_1.Route, { path: "posts", element: React.createElement(CardsList_1.CardsList, null) },
                        React.createElement(react_router_dom_1.Route, { path: ":id", element: React.createElement(Post_1.Post, null) })),
                    React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(react_router_dom_1.Navigate, { to: '/posts', replace: true }) }),
                    React.createElement(react_router_dom_1.Route, { path: "/auth", element: React.createElement(react_router_dom_1.Navigate, { to: '/posts', replace: true }) }),
                    React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement(NotFound_1.NotFound, null) }))))));
}
exports.App = (0, root_1.hot)(function () {
    return React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(AppComponent, null));
});
exports.textState = (0, recoil_1.atom)({
    key: 'textState',
    default: 'e'
});
// export const charCountState = selector({
//   key: 'charCountState', // unique ID (with respect to other atoms/selectors)
//   get: ({get}) => {
//     const text = get(textState);
//     return text.length;
//   },
// });


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(1);
var react_redux_2 = __webpack_require__(1);
var actions_1 = __webpack_require__(8);
function useUserData() {
    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    var dispatch = (0, react_redux_2.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (!token)
            return;
        if (token && token !== "undefined") {
            dispatch((0, actions_1.MeRequestAsync)());
        }
    }, [token]);
    return {
        data: data,
    };
}
exports.useUserData = useUserData;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(125), exports);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(19));
var server_1 = __importDefault(__webpack_require__(20));
var indexTemplate_1 = __webpack_require__(21);
var App_1 = __webpack_require__(15);
var axios_1 = __importDefault(__webpack_require__(3));
var PORT = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use("/static", express_1.default.static("./public/client"));
app.get("/auth", function (req, res) {
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=".concat(req.query.code, "&redirect_uri=http://react-project-git-main-vlads-projects-cde9d0a5.vercel.app/auth"), {
        auth: { username: 'YAABv9cZr02grvuNW3fkkA', password: process.env.SECRET },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    })
        .then(function (_a) {
        var data = _a.data;
        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data['access_token']));
        console.log(data);
    })
        .catch(function (err) {
        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), ''));
    });
});
app.get("*", function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));
});
app.listen(PORT, function () {
    console.log("server started on port http://localhost:".concat(PORT));
});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Reddit</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  <script>\n    window.__token__='".concat(token, "'\n  </script>\n</head>\n\n<body>\n  <div id=\"react_root\">").concat(content, "</div>\n  <div id=\"modal_root\"></div>\n  <div id=\"dropdown_root\"></div>\n  <div id=\"error_root\"></div>\n</body>\n\n</html>\n"); };
exports.indexTemplate = indexTemplate;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(24), exports);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(25));
function Layout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: layout_css_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, ":root {\r\n  --black:          #333333;\r\n  --orange:         #CC6633;\r\n  --green:          #A4CC33;\r\n  --whiteLightness: 100%;\r\n  --white:          hsl(0, 0%, var(--whiteLightness));\r\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\r\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\r\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\r\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\r\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\r\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\r\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--grayF4);\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  font-family: 'Roboto', serif;\r\n}\r\n\r\n* {\r\n  color: var(--black);\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n  border: 0;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(30));
var SearchBlock_1 = __webpack_require__(31);
var ThreadTitle_1 = __webpack_require__(48);
var SortBlock_1 = __webpack_require__(51);
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var searchblock_css_1 = __importDefault(__webpack_require__(33));
var UserBlock_1 = __webpack_require__(34);
var useUserData_1 = __webpack_require__(16);
function SearchBlock() {
    var data = (0, useUserData_1.useUserData)().data;
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--3aDPv"
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userblock_css_1 = __importDefault(__webpack_require__(36));
var Icons_1 = __webpack_require__(5);
var Break_1 = __webpack_require__(6);
var Text_1 = __webpack_require__(2);
var react_redux_1 = __webpack_require__(1);
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username;
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=".concat('YAABv9cZr02grvuNW3fkkA', "&response_type=code&state=RANDOM_STRING&redirect_uri=http://react-project-git-main-vlads-projects-cde9d0a5.vercel.app/auth&duration=permanent&scope=read submit identity"), className: userblock_css_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_css_1.default.avatarBox }, avatarSrc
            ? react_1.default.createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock_css_1.default.avatarImage })
            : react_1.default.createElement(Icons_1.IconAnon, null)),
        react_1.default.createElement("div", { className: userblock_css_1.default.username },
            react_1.default.createElement(Break_1.Break, { size: 12 }),
            loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColors.grey99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColors.black : Text_1.EColors.grey99 }, username || 'Аноним')))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--24rEF",
	"avatarBox": "userblock__avatarBox--2OTfi",
	"avatarImage": "userblock__avatarImage--2ryXC",
	"username": "userblock__username--3bLc0"
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MenuIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function WarningIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "14", height: "12", viewBox: "0 0 14 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z", fill: "#999999" })));
}
exports.WarningIcon = WarningIcon;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function BlockIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z", fill: "#999999" })));
}
exports.BlockIcon = BlockIcon;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function CommentIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}
exports.CommentIcon = CommentIcon;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function SendIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.SendIcon = SendIcon;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function SaveIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}
exports.SaveIcon = SaveIcon;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function IconAnon() {
    return (react_1.default.createElement("svg", { viewBox: "-45 0 511 511.99976", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "m383.5 179.753906c.140625-.027344.292969-.058594.433594-.085937 18.910156-3.855469 31.164062-22.375 27.3125-41.285157-3.851563-18.898437-22.367188-31.152343-41.285156-27.316406-4.65625.949219-9.949219 1.902344-15.726563 2.839844l-16.585937-77.902344c-2.652344-12.457031-10.472657-23.300781-21.453126-29.75-10.984374-6.449218-24.265624-7.996094-36.4375-4.242187l-44.496093 13.722656c-15.703125 4.839844-32.300781 4.839844-48.003907 0l-44.496093-13.722656c-15.539063-4.792969-32.589844-.863281-44.488281 10.25-3.035157 2.835937-3.195313 7.589843-.363282 10.625 2.832032 3.03125 7.589844 3.195312 10.621094.363281 7.976562-7.453125 19.394531-10.082031 29.800781-6.875l44.5 13.722656c18.597657 5.734375 38.257813 5.734375 56.859375 0l44.496094-13.722656c8.269531-2.554688 16.933594-1.542969 24.398438 2.839844 7.460937 4.382812 12.5625 11.457031 14.363281 19.921875l8.804687 41.347656c-32.074218 4.675781-79.464844 9.046875-120.496094 9.046875-41.027343 0-88.417968-4.371094-120.488281-9.046875l6.355469-29.867187c.863281-4.058594-1.726562-8.050782-5.785156-8.914063-4.058594-.859375-8.050782 1.726563-8.914063 5.785156l-14.140625 66.417969c-5.78125-.9375-11.078125-1.890625-15.734375-2.839844-18.910156-3.835937-37.429687 8.417969-41.28125 27.316406-3.851562 18.914063 8.402344 37.433594 27.316407 41.285157.140624.03125.292968.058593.433593.085937-25.230469 35.632813-38.519531 77.433594-38.519531 121.488282 0 116.210937 94.546875 210.757812 210.757812 210.757812 116.214844 0 210.761719-94.546875 210.761719-210.757812 0-44.070313-13.289062-85.859376-38.519531-121.488282zm-295.867188-84.539062c32.671876 4.8125 81.449219 9.34375 123.625 9.34375 42.175782 0 90.957032-4.53125 123.628907-9.34375l4.453125 20.925781c-36.636719 5.082031-86.222656 9.253906-128.082032 9.253906-41.859374 0-91.445312-4.171875-128.082031-9.257812zm-61.632812 46.167968c1.925781-9.449218 10.28125-15.988281 19.578125-15.988281 1.3125 0 2.648437.128907 3.980469.398438 35.308594 7.195312 105.445312 14.632812 161.699218 14.632812 56.257813 0 126.394532-7.4375 161.699219-14.628906 10.796875-2.1875 21.367188 4.800781 23.5625 15.585937 2.199219 10.792969-4.792969 21.359376-15.585937 23.558594-43.203125 8.796875-116.148438 15.433594-169.675782 15.433594-53.53125 0-126.472656-6.636719-169.671874-15.433594-10.792969-2.199218-17.785157-12.765625-15.585938-23.558594zm328.875 159.859376c0 79.1875-64.425781 143.613281-143.617188 143.613281-79.1875 0-143.613281-64.425781-143.613281-143.613281 0-42.589844 18.738281-82.722657 51.410157-110.113282.140624-.121094.273437-.25.40625-.375 31.34375 2.898438 64.132812 4.652344 91.796874 4.652344 27.644532 0 60.414063-1.753906 91.746094-4.648438 32.972656 27.40625 51.871094 67.609376 51.871094 110.484376zm-143.617188 195.726562c-107.925781 0-195.726562-87.804688-195.726562-195.726562 0-43.277344 13.804688-84.199219 39.929688-118.484376 13.28125 2.207032 28.238281 4.21875 43.964843 5.960938-29.898437 29.695312-46.8125 70-46.8125 112.523438 0 87.476562 71.167969 158.644531 158.644531 158.644531 87.476563 0 158.644532-71.167969 158.644532-158.644531 0-42.613282-16.902344-82.832032-46.820313-112.519532 15.730469-1.742187 30.6875-3.757812 43.972657-5.964844 26.128906 34.28125 39.933593 75.195313 39.933593 118.484376 0 107.921874-87.804687 195.726562-195.730469 195.726562zm0 0" }),
        react_1.default.createElement("path", { d: "m145.367188 268.617188c-4.152344 0-7.515626 3.363281-7.515626 7.515624v10.9375c0 4.152344 3.363282 7.515626 7.515626 7.515626 4.148437 0 7.511718-3.363282 7.511718-7.515626v-10.9375c0-4.152343-3.363281-7.515624-7.511718-7.515624zm0 0" }),
        react_1.default.createElement("path", { d: "m277.152344 294.585938c4.152344 0 7.515625-3.363282 7.515625-7.515626v-10.9375c0-4.152343-3.363281-7.515624-7.515625-7.515624-4.148438 0-7.515625 3.363281-7.515625 7.515624v10.9375c0 4.152344 3.367187 7.515626 7.515625 7.515626zm0 0" }),
        react_1.default.createElement("path", { d: "m199.554688 282.617188c-2.730469-3.128907-7.476563-3.453126-10.605469-.726563-3.128907 2.726563-3.453125 7.472656-.726563 10.601563 5.808594 6.667968 14.207032 10.492187 23.035156 10.492187 8.828126 0 17.226563-3.824219 23.039063-10.492187 2.726563-3.128907 2.402344-7.875-.726563-10.601563-3.128906-2.726563-7.878906-2.402344-10.605468.726563-2.957032 3.394531-7.222656 5.335937-11.707032 5.335937-4.484374 0-8.75-1.945313-11.703124-5.335937zm0 0" })));
}
exports.IconAnon = IconAnon;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var break_css_1 = __importDefault(__webpack_require__(45));
var classnames_1 = __importDefault(__webpack_require__(7));
function Break(props) {
    var _a, _b, _c, _d, _e;
    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(break_css_1.default["s".concat(size)], (_a = {}, _a[break_css_1.default["mobile_s".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[break_css_1.default["tablet_s".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[break_css_1.default["desktop_s".concat(desktopSize)]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));
}
exports.Break = Break;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s4": "break__s4--rnbuA",
	"s8": "break__s8--2ubV4",
	"s12": "break__s12--3dSW2",
	"s16": "break__s16--2bop2",
	"s20": "break__s20--PBhCB",
	"inline": "break__inline--22pcx",
	"top": "break__top--25ISJ",
	"mobile_s4": "break__mobile_s4--LrEFY",
	"mobile_s8": "break__mobile_s8--1Tmgm",
	"mobile_s12": "break__mobile_s12--2En9X",
	"mobile_s16": "break__mobile_s16--2KmPq",
	"mobile_s20": "break__mobile_s20--1j8g5",
	"tablet_s4": "break__tablet_s4--2nTnL",
	"tablet_s8": "break__tablet_s8--7zEhs",
	"tablet_s12": "break__tablet_s12--3Y-kT",
	"tablet_s16": "break__tablet_s16--2rsLQ",
	"tablet_s20": "break__tablet_s20--V1f92",
	"desktop_s4": "break__desktop_s4--3mFLY",
	"desktop_s8": "break__desktop_s8--2uQYJ",
	"desktop_s12": "break__desktop_s12--1-0wy",
	"desktop_s16": "break__desktop_s16--2k7qE",
	"desktop_s20": "break__desktop_s20--AjVsi"
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.EColors = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_css_1 = __importDefault(__webpack_require__(47));
var classnames_1 = __importDefault(__webpack_require__(7));
var EColors;
(function (EColors) {
    EColors["black"] = "black";
    EColors["orange"] = "orange";
    EColors["green"] = "green";
    EColors["white"] = "white";
    EColors["grayF4"] = "grayF4";
    EColors["greyD9"] = "greyD9";
    EColors["greyC4"] = "greyC4";
    EColors["grey99"] = "grey99";
    EColors["grey66"] = "grey66";
    EColors["greyF3"] = "greyF3";
})(EColors = exports.EColors || (exports.EColors = {}));
function Text(props) {
    var _a, _b, _c;
    var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? EColors.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    var classes = (0, classnames_1.default)(text_css_1.default["s".concat(size)], (_a = {}, _a[text_css_1.default["m".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_css_1.default["t".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_css_1.default["d".concat(desktopSize)]] = desktopSize, _c), text_css_1.default[color]);
    return (react_1.default.createElement(As, { className: classes }, children));
}
exports.Text = Text;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--Puvgs",
	"s20": "text__s20--3Xq66",
	"s16": "text__s16--G_lUr",
	"s14": "text__s14--jvCoO",
	"s12": "text__s12--2S2T2",
	"s10": "text__s10--DYLfy",
	"black": "text__black--1zchg",
	"orange": "text__orange--1RyAM",
	"white": "text__white--13JGE",
	"greyF3": "text__greyF3--2Lfsi",
	"greyEC": "text__greyEC--2krZR",
	"greyD9": "text__greyD9--7iRFr",
	"greyC4": "text__greyC4--3oiNM",
	"grey99": "text__grey99--35u3B",
	"grey66": "text__grey66--373uw",
	"m28": "text__m28--2u2zs",
	"m20": "text__m20--1gFlM",
	"m16": "text__m16--cSY4u",
	"m14": "text__m14--s6pnr",
	"m12": "text__m12--1W0av",
	"m10": "text__m10--UtIkW",
	"t28": "text__t28--A4rHF",
	"t20": "text__t20--78tCz",
	"t16": "text__t16--nkVMz",
	"t14": "text__t14--1Rj72",
	"t12": "text__t12--7txjW",
	"t10": "text__t10--n2R7f",
	"d28": "text__d28--3oIok",
	"d20": "text__d20--uwHxr",
	"d16": "text__d16--1Pwd1",
	"d14": "text__d14--3Futo",
	"d12": "text__d12--5X_qc",
	"d10": "text__d10--3pWnc"
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_css_1 = __importDefault(__webpack_require__(50));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadTitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--oxugx"
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_css_1 = __importDefault(__webpack_require__(53));
function SortBlock() {
    return (react_1.default.createElement("div", { className: sortblock_css_1.default.sortBlock }, "sorting dropdown"));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlock": "sortblock__sortBlock--141aZ"
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(56));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: content_css_1.default.content }, children));
}
exports.Content = Content;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var cardslist_css_1 = __importDefault(__webpack_require__(59));
var Card_1 = __webpack_require__(60);
var axios_1 = __importDefault(__webpack_require__(3));
var react_redux_1 = __webpack_require__(1);
var react_router_dom_1 = __webpack_require__(4);
var recoil_1 = __webpack_require__(14);
function CardsList() {
    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];
    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(''), errorLoading = _c[0], setErrorLoading = _c[1];
    var _d = (0, react_1.useState)(''), nextAfter = _d[0], setNextAfter = _d[1];
    var _e = (0, react_1.useState)(0), count = _e[0], setCount = _e[1];
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    var bottomOfList = (0, react_1.useRef)(null);
    var showMore = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        if (!token)
            return;
        function load() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, after, children_1, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (bottomOfList.current && showMore.current) {
                                showMore.current.style.display = 'none';
                            }
                            setLoading(true);
                            setErrorLoading('');
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {
                                    headers: { Authorization: "bearer ".concat(token) },
                                    params: {
                                        limit: 1,
                                        after: nextAfter
                                    }
                                })];
                        case 2:
                            _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;
                            setNextAfter(after);
                            setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1.map(function (el) {
                                var _a;
                                return {
                                    id: el.data.id,
                                    title: el.data.title,
                                    author: el.data.author,
                                    rating: el.data.ups,
                                    score: el.data.num_comments,
                                    datePostUtc: el.data.created_utc * 1000,
                                    avatar: el.data.sr_detail.icon_img
                                        ? el.data.sr_detail.icon_img
                                        : "https://imageup.ru/img299/4554541/avatar.jpg",
                                    previewImg: el.data.previewImg
                                        ? (_a = el.data.previewImg.images) === null || _a === void 0 ? void 0 : _a[0].source.url.replace(/(&amp\;)/g, '&')
                                        : "https://imageup.ru/img62/4554540/prev.jpg"
                                };
                            })); });
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            setErrorLoading(String(error_1));
                            return [3 /*break*/, 4];
                        case 4:
                            setLoading(false);
                            return [2 /*return*/];
                    }
                });
            });
        }
        (_a = showMore.current) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleClick);
        function handleClick() {
            load();
            setCount(count + 1);
        }
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                if (count % 2 !== 0 || count === 0) {
                    if (bottomOfList.current && showMore.current) {
                        load();
                        setCount(count + 1);
                    }
                }
                else if (bottomOfList.current && showMore.current) {
                    showMore.current.style.cssText = 'display: flex; margin: 0 auto';
                }
            }
        }, {
            rootMargin: '10px',
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current && showMore.current) {
                observer.unobserve(bottomOfList.current);
                showMore.current.removeEventListener('click', handleClick);
            }
        };
    }, [token, nextAfter]);
    return (react_1.default.createElement(recoil_1.RecoilRoot, null,
        react_1.default.createElement("ul", { className: cardslist_css_1.default.cardsList },
            posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
            posts.map(function (post) { return (react_1.default.createElement(Card_1.Card, { key: post.id, id: post.id, title: post.title, author: post.author, avatar: post.avatar, previewImg: post.previewImg, rating: post.rating, score: post.score, datePostUtc: post.datePostUtc })); }),
            react_1.default.createElement("div", { ref: bottomOfList }),
            react_1.default.createElement("button", { style: { display: 'none' }, ref: showMore }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435"),
            loading && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
            errorLoading && (react_1.default.createElement("div", { role: 'alert', style: { textAlign: 'center' } }, errorLoading)),
            react_1.default.createElement(react_router_dom_1.Outlet, null))));
}
exports.CardsList = CardsList;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardslist__cardsList--2RigV"
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_css_1 = __importDefault(__webpack_require__(62));
var TextContent_1 = __webpack_require__(63);
var Preview_1 = __webpack_require__(80);
var Controls_1 = __webpack_require__(83);
var Menu_1 = __webpack_require__(108);
function Card(props) {
    var id = props.id, title = props.title, author = props.author, avatar = props.avatar, previewImg = props.previewImg, rating = props.rating, score = props.score, datePostUtc = props.datePostUtc;
    return (react_1.default.createElement("li", { key: id, className: card_css_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { id: id, title: title, author: author, avatar: avatar, datePostUtc: datePostUtc, previewImg: previewImg, rating: rating, score: score }),
        react_1.default.createElement(Preview_1.Preview, { previewImg: previewImg }),
        react_1.default.createElement(Controls_1.Controls, { rating: rating, score: score }),
        react_1.default.createElement(Menu_1.Menu, null)));
}
exports.Card = Card;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--2ABpE",
	"textContent": "card__textContent--2Q4AN"
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_css_1 = __importDefault(__webpack_require__(65));
var MetaData_1 = __webpack_require__(9);
var Title_1 = __webpack_require__(77);
function TextContent(props) {
    var title = props.title, author = props.author, avatar = props.avatar, datePostUtc = props.datePostUtc, rating = props.rating, score = props.score, previewImg = props.previewImg, id = props.id;
    return (react_1.default.createElement("div", { className: textcontent_css_1.default.textContent },
        react_1.default.createElement(MetaData_1.MetaData, { author: author, avatar: avatar, datePostUtc: datePostUtc }),
        react_1.default.createElement(Title_1.Title, { author: author, avatar: avatar, datePostUtc: datePostUtc, title: title, rating: rating, score: score, previewImg: previewImg, id: id })));
}
exports.TextContent = TextContent;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--3bJwW"
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaData = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var metadata_css_1 = __importDefault(__webpack_require__(67));
var UserLink_1 = __webpack_require__(68);
function MetaData(_a) {
    var author = _a.author, avatar = _a.avatar, datePostUtc = _a.datePostUtc, divUserLinkStyle = _a.divUserLinkStyle, divMetaDataStyle = _a.divMetaDataStyle, spanMetaDataStyle = _a.spanMetaDataStyle;
    var pastMilliseconds = new Date().getTime() - new Date(datePostUtc).getTime();
    var oneDay = 1000 * 60 * 60 * 24;
    var oneHour = 1000 * 60 * 60;
    var oneMinutes = 1000 * 60;
    var pastDay = Math.round(pastMilliseconds / oneDay);
    var pastHour = Math.round(pastMilliseconds / oneHour);
    var pastMinutes = Math.round(pastMilliseconds / oneMinutes);
    var postTime = pastMinutes <= 59
        ? ((pastMinutes) === 11) || ((pastMinutes) === 12) || ((pastMinutes) === 13) || ((pastMinutes) === 14)
            ? "".concat(pastMinutes, " \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434")
            : (pastMinutes) % 10 === 1
                ? "".concat(pastMinutes, " \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434")
                : ((pastMinutes) % 10 === 2) || ((pastMinutes) % 10 === 3) || ((pastMinutes) % 10 === 4)
                    ? "".concat(pastMinutes, " \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434")
                    : "".concat(pastMinutes, " \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434")
        : pastHour <= 23
            ? ((pastHour) === 11) || ((pastHour) === 12) || ((pastHour) === 13) || ((pastHour) === 14)
                ? "".concat(pastHour, " \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434")
                : (pastHour) % 10 === 1
                    ? "".concat(pastHour, " \u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434")
                    : ((pastHour) % 10 === 2) || ((pastHour) % 10 === 3) || ((pastHour) % 10 === 4)
                        ? "".concat(pastHour, " \u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434")
                        : "".concat(pastHour, " \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434")
            : (pastDay === 11) || (pastDay === 12) || (pastDay === 13) || (pastDay === 14)
                ? "".concat(pastDay, " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434")
                : (pastDay % 10) === 1
                    ? "".concat(pastDay, " \u0434\u0435\u043D\u044C \u043D\u0430\u0437\u0430\u0434")
                    : (pastDay % 10 === 2) || (pastDay % 10 === 3) || (pastDay % 10 === 4)
                        ? "".concat(pastDay, " \u0434\u043D\u044F \u043D\u0430\u0437\u0430\u0434")
                        : "".concat(pastDay, " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");
    return (react_1.default.createElement("div", { className: metadata_css_1.default.metaData, style: divMetaDataStyle },
        react_1.default.createElement(UserLink_1.UserLink, { author: author, avatar: avatar, divUserLinkStyle: divUserLinkStyle }),
        react_1.default.createElement("span", { className: metadata_css_1.default.createdAt },
            react_1.default.createElement("span", { className: metadata_css_1.default.publishedLabel, style: spanMetaDataStyle }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
            postTime)));
}
exports.MetaData = MetaData;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"metaData": "metadata__metaData---sSSl",
	"createdAt": "metadata__createdAt--1zSQc",
	"publishedLabel": "metadata__publishedLabel--2JeGW"
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(69), exports);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLink = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userlink_css_1 = __importDefault(__webpack_require__(70));
var Avatar_1 = __webpack_require__(71);
var UserName_1 = __webpack_require__(74);
function UserLink(_a) {
    var author = _a.author, avatar = _a.avatar, divUserLinkStyle = _a.divUserLinkStyle;
    return (react_1.default.createElement("div", { className: userlink_css_1.default.userLink, style: divUserLinkStyle },
        react_1.default.createElement(Avatar_1.Avatar, { avatar: avatar }),
        react_1.default.createElement(UserName_1.UserName, { author: author })));
}
exports.UserLink = UserLink;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userLink": "userlink__userLink--i5eRv"
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(72), exports);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var avatar_css_1 = __importDefault(__webpack_require__(73));
function Avatar(_a) {
    var avatar = _a.avatar;
    return (react_1.default.createElement("img", { className: avatar_css_1.default.avatar, src: avatar, alt: "avatar" }));
}
exports.Avatar = Avatar;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"avatar": "avatar__avatar--2jEUU"
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(75), exports);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserName = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var username_css_1 = __importDefault(__webpack_require__(76));
function UserName(_a) {
    var author = _a.author;
    return (react_1.default.createElement("a", { className: username_css_1.default.username, href: "#user-url" }, author));
}
exports.UserName = UserName;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"username": "username__username--uZbQC"
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(78), exports);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var title_css_1 = __importDefault(__webpack_require__(79));
var react_router_dom_1 = __webpack_require__(4);
function Title(props) {
    var title = props.title, id = props.id, author = props.author, avatar = props.avatar, datePostUtc = props.datePostUtc, previewImg = props.previewImg, score = props.score, rating = props.rating;
    return (react_1.default.createElement("h2", { className: title_css_1.default.title },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/posts/".concat(id), className: title_css_1.default.postLink, state: {
                title: title,
                rating: rating,
                score: score,
                previewImg: previewImg,
                author: author,
                avatar: avatar,
                datePostUtc: datePostUtc,
                id: id,
            } }, title)));
}
exports.Title = Title;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title__title--1H-I1",
	"postLink": "title__postLink--2s_N5"
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(81), exports);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_css_1 = __importDefault(__webpack_require__(82));
function Preview(_a) {
    var previewImg = _a.previewImg;
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview },
        react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: previewImg, alt: "preview" })));
}
exports.Preview = Preview;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--yXg13",
	"previewImg": "preview__previewImg--sYRZj",
	"post__content--2gFMc": "preview__post__content--2gFMc--3Mq1z"
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(84), exports);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_css_1 = __importDefault(__webpack_require__(85));
var KarmaCounter_1 = __webpack_require__(10);
var ComentsButton_1 = __webpack_require__(96);
var Actions_1 = __webpack_require__(99);
function Controls(_a) {
    var rating = _a.rating, score = _a.score;
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { rating: rating }),
        react_1.default.createElement(ComentsButton_1.ComentsButton, { score: score }),
        react_1.default.createElement(Actions_1.Actions, null)));
}
exports.Controls = Controls;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--esQvJ"
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var karmacounter_css_1 = __importDefault(__webpack_require__(87));
var Up_1 = __webpack_require__(88);
var Down_1 = __webpack_require__(92);
function KarmaCounter(_a) {
    var rating = _a.rating, spanStyle = _a.spanStyle, divStyle = _a.divStyle, downStyle = _a.downStyle;
    return (react_1.default.createElement("div", { className: karmacounter_css_1.default.karmaCounter, style: divStyle },
        react_1.default.createElement(Up_1.Up, null),
        react_1.default.createElement("span", { className: karmacounter_css_1.default.karmaValue, style: spanStyle }, rating),
        react_1.default.createElement(Down_1.Down, { downStyle: downStyle })));
}
exports.KarmaCounter = KarmaCounter;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaCounter": "karmacounter__karmaCounter--1Tk9K",
	"karmaValue": "karmacounter__karmaValue--1c-b1",
	"down": "karmacounter__down--2fzxq"
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Up = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var up_css_1 = __importDefault(__webpack_require__(90));
var UpIcon_1 = __webpack_require__(91);
function Up() {
    return (react_1.default.createElement("button", { className: up_css_1.default.up },
        react_1.default.createElement(UpIcon_1.UpIcon, null)));
}
exports.Up = Up;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"up": "up__up--1XxaI"
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function UpIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z" })));
}
exports.UpIcon = UpIcon;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(93), exports);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Down = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var down_css_1 = __importDefault(__webpack_require__(94));
var DownIcon_1 = __webpack_require__(95);
function Down(_a) {
    var downStyle = _a.downStyle;
    return (react_1.default.createElement("button", { className: down_css_1.default.down, style: downStyle },
        react_1.default.createElement(DownIcon_1.DownIcon, null)));
}
exports.Down = Down;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"down": "down__down--15m-a"
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function DownIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#D9D9D9" })));
}
exports.DownIcon = DownIcon;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(97), exports);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentsButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var comentsbutton_css_1 = __importDefault(__webpack_require__(98));
function ComentsButton(_a) {
    var score = _a.score;
    return (react_1.default.createElement("button", { className: comentsbutton_css_1.default.commentsButton },
        react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
        react_1.default.createElement("span", { className: comentsbutton_css_1.default.commentsNumber }, score)));
}
exports.ComentsButton = ComentsButton;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "comentsbutton__commentsButton--2C4iQ",
	"commentsNumber": "comentsbutton__commentsNumber--jV8wB"
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(100), exports);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var actions_css_1 = __importDefault(__webpack_require__(101));
var ShareButton_1 = __webpack_require__(102);
var SaveButton_1 = __webpack_require__(105);
function Actions() {
    return (react_1.default.createElement("div", { className: actions_css_1.default.actions },
        react_1.default.createElement(ShareButton_1.ShareButton, null),
        react_1.default.createElement(SaveButton_1.SaveButton, null)));
}
exports.Actions = Actions;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"actions": "actions__actions--jSuAz"
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(103), exports);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sharebutton_css_1 = __importDefault(__webpack_require__(104));
function ShareButton() {
    return (react_1.default.createElement("button", { className: sharebutton_css_1.default.shareButton },
        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))));
}
exports.ShareButton = ShareButton;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"shareButton": "sharebutton__shareButton--FCtei"
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var savebutton_css_1 = __importDefault(__webpack_require__(107));
function SaveButton() {
    return (react_1.default.createElement("button", { className: savebutton_css_1.default.saveButton },
        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" }))));
}
exports.SaveButton = SaveButton;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"saveButton": "savebutton__saveButton--1zK2m"
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(109), exports);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menu_css_1 = __importDefault(__webpack_require__(110));
var MenuButton_1 = __webpack_require__(111);
function Menu() {
    return (react_1.default.createElement("div", { className: menu_css_1.default.menu },
        react_1.default.createElement(MenuButton_1.MenuButton, null)));
}
exports.Menu = Menu;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--2WV4Z",
	"dropdown": "menu__dropdown--37RRU",
	"closeButton": "menu__closeButton--20bkm"
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(112), exports);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menubutton_css_1 = __importDefault(__webpack_require__(113));
var Icons_1 = __webpack_require__(5);
var Dropdown_1 = __webpack_require__(114);
var MenuItemsList_1 = __webpack_require__(12);
var Text_1 = __webpack_require__(2);
function MenuButton() {
    return (react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: menubutton_css_1.default.menuButton },
            react_1.default.createElement(Icons_1.MenuIcon, null)) },
        react_1.default.createElement("div", { className: menubutton_css_1.default.dropdown },
            react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: '1234', score: 0, answerLiHidden: { display: 'none' } }),
            react_1.default.createElement("button", { className: menubutton_css_1.default.closeButton },
                react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_1.EColors.grey66 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))));
}
exports.MenuButton = MenuButton;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuButton": "menubutton__menuButton--1-N-_",
	"dropdown": "menubutton__dropdown--1pkCb",
	"closeButton": "menubutton__closeButton--MfH6m"
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(115), exports);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var dropdown_css_1 = __importDefault(__webpack_require__(116));
var react_2 = __webpack_require__(0);
var react_dom_1 = __importDefault(__webpack_require__(11));
var NOOP = function () { };
function Dropdown(_a) {
    var _b, _c;
    var left = _a.left, top = _a.top, button = _a.button, children = _a.children, isOpen = _a.isOpen, _d = _a.onClose, onClose = _d === void 0 ? NOOP : _d, _e = _a.onOpen, onOpen = _e === void 0 ? NOOP : _e;
    var ref = (0, react_2.useRef)(null);
    var _f = react_1.default.useState(isOpen), isDropdownOpen = _f[0], setIsDropdownOpen = _f[1];
    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);
    var handleOpen = function () {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    var node = document.querySelector('#dropdown_root');
    if (!node)
        return null;
    return (react_1.default.createElement("div", { className: dropdown_css_1.default.container },
        react_1.default.createElement("div", { onClick: handleOpen, ref: ref }, button),
        isDropdownOpen &&
            react_dom_1.default.createPortal(react_1.default.createElement("div", { className: dropdown_css_1.default.listContainer, style: {
                    top: (((_b = ref.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().y) || 0) + window.scrollY,
                    left: (((_c = ref.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().x) || 0) + window.scrollX,
                } },
                react_1.default.createElement("div", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)), node)));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--2KiQv",
	"listContainer": "dropdown__listContainer--1_nuF",
	"list": "dropdown__list--31xkc"
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var menuitemslist_css_1 = __importDefault(__webpack_require__(118));
var Text_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(119);
var CommentAnswerForm_1 = __webpack_require__(122);
function MenuItemsList(_a) {
    var _b;
    var postId = _a.postId, score = _a.score, divHidden = _a.divHidden, liHidden = _a.liHidden, ul = _a.ul, li = _a.li, answerLiHidden = _a.answerLiHidden;
    var ref = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(false), isCommentOpened = _c[0], setIsCommentOpened = _c[1];
    var lastDigit2Str = String(score).slice(-2);
    var lastDigit2Num = Number(lastDigit2Str);
    var commentNumber = ((lastDigit2Num === 11) || (lastDigit2Num === 12) || (lastDigit2Num === 13) || (lastDigit2Num === 14))
        ? "".concat(score, " \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432")
        : score % 10 === 1
            ? "".concat(score, " \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
            : (score % 10 === 2) || (score % 10 === 3) || (score % 10 === 4)
                ? "".concat(score, " \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F")
                : "".concat(score, " \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432");
    return (react_1.default.createElement("ul", { className: menuitemslist_css_1.default.menuItemsList, style: ul },
        react_1.default.createElement("li", { className: "".concat(menuitemslist_css_1.default.menuItem, " ").concat(menuitemslist_css_1.default.hidden), style: __assign(__assign({}, li), liHidden) },
            react_1.default.createElement(Icon_1.Icon, { name: 'comment', size: 14, mobileSize: 12 }),
            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, score !== 0
                ? "".concat(commentNumber)
                : 'Комментарии')),
        react_1.default.createElement("div", { className: "".concat(menuitemslist_css_1.default.divider, " ").concat(menuitemslist_css_1.default.hidden), style: divHidden }),
        react_1.default.createElement("li", { className: "".concat(menuitemslist_css_1.default.menuItem, " ").concat(menuitemslist_css_1.default.hidden), style: __assign(__assign({}, li), answerLiHidden), onClick: function () { return console.log(postId); }, ref: ref },
            react_1.default.createElement(Icon_1.Icon, { name: 'comment', size: 14, mobileSize: 12 }),
            react_1.default.createElement("a", { className: menuitemslist_css_1.default.menuItemLink, onClick: function () { setIsCommentOpened(true); } },
                react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C"))),
        isCommentOpened && (react_1.default.createElement(CommentAnswerForm_1.Commentanswerform, { modalForm: { top: (((_b = ref.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().y) || 0) + window.scrollY - 120, }, onClose: function () { setIsCommentOpened(false); } })),
        react_1.default.createElement("li", { className: "".concat(menuitemslist_css_1.default.menuItem, " ").concat(menuitemslist_css_1.default.hidden), style: li },
            react_1.default.createElement(Icon_1.Icon, { name: 'send', size: 14, mobileSize: 12 }),
            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
        react_1.default.createElement("div", { className: "".concat(menuitemslist_css_1.default.divider, " ").concat(menuitemslist_css_1.default.hidden), style: divHidden }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem, style: __assign(__assign({}, li), liHidden) },
            react_1.default.createElement(Icon_1.Icon, { name: 'block', size: 14, mobileSize: 12 }),
            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider, style: divHidden }),
        react_1.default.createElement("li", { className: "".concat(menuitemslist_css_1.default.menuItem, " ").concat(menuitemslist_css_1.default.hidden), style: __assign(__assign({}, li), liHidden) },
            react_1.default.createElement(Icon_1.Icon, { name: 'save', size: 14, mobileSize: 12 }),
            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")),
        react_1.default.createElement("div", { className: "".concat(menuitemslist_css_1.default.divider, " ").concat(menuitemslist_css_1.default.hidden), style: divHidden }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem, style: li },
            react_1.default.createElement(Icon_1.Icon, { name: 'warning', size: 14, mobileSize: 12 }),
            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.MenuItemsList = MenuItemsList;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menuitemslist__menuItemsList--c9r9N",
	"menuItem": "menuitemslist__menuItem--15lfa",
	"divider": "menuitemslist__divider--3XFuB",
	"hidden": "menuitemslist__hidden--2W7bj"
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(120), exports);


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icon_css_1 = __importDefault(__webpack_require__(121));
var Icons_1 = __webpack_require__(5);
var classnames_1 = __importDefault(__webpack_require__(7));
function Icon(props) {
    var _a, _b, _c;
    var _d = props.name, name = _d === void 0 ? "block" : _d, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    var IconComponent = {
        block: Icons_1.BlockIcon,
        comment: Icons_1.CommentIcon,
        save: Icons_1.SaveIcon,
        send: Icons_1.SendIcon,
        warning: Icons_1.WarningIcon,
    }[name];
    var classes = (0, classnames_1.default)(icon_css_1.default["s".concat(size)], (_a = {}, _a[icon_css_1.default["m".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[icon_css_1.default["t".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[icon_css_1.default["d".concat(desktopSize)]] = desktopSize, _c));
    if (!IconComponent) {
        return react_1.default.createElement("div", null, "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u0438\u043A\u043E\u043D\u0430");
    }
    return react_1.default.createElement(IconComponent, { className: classes });
}
exports.Icon = Icon;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"m20": "icon__m20--22ACs",
	"m18": "icon__m18--1yNvS",
	"m16": "icon__m16--1W2nF",
	"m14": "icon__m14--Pdbj_",
	"m12": "icon__m12--1-U0b",
	"m10": "icon__m10--2A792",
	"t20": "icon__t20--uj2iv",
	"t18": "icon__t18--EQmIs",
	"t16": "icon__t16--2OInr",
	"t14": "icon__t14--1aldr",
	"t12": "icon__t12--3KfvD",
	"t10": "icon__t10--1yy-4",
	"d20": "icon__d20--3J3ju",
	"d18": "icon__d18--6KSVR",
	"d16": "icon__d16--3Gdce",
	"d14": "icon__d14--2AAv4",
	"d12": "icon__d12--29ZTk",
	"d10": "icon__d10--3846z"
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(123), exports);


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commentanswerform = void 0;
var react_1 = __importStar(__webpack_require__(0));
var commentanswerform_css_1 = __importDefault(__webpack_require__(124));
var MenuComment_1 = __webpack_require__(17);
var react_redux_1 = __webpack_require__(1);
var reducer_1 = __webpack_require__(13);
var formik_1 = __webpack_require__(140);
function Commentanswerform(_a) {
    var modalForm = _a.modalForm, onClose = _a.onClose;
    var commentValue = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var refForm = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = refForm.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return (react_1.default.createElement(formik_1.Formik, { initialValues: { message: commentValue }, onSubmit: function (values, _a) {
            var setSubmitting = _a.setSubmitting;
            setTimeout(function () {
                alert('Форма отправлена ');
                setSubmitting(false);
                dispatch((0, reducer_1.updateComment)(values.message));
            }, 400);
        }, validate: function (values) {
            var errors = {};
            if (!values.message) {
                errors.message = 'Заполните поле';
            }
            else if (values.message.length <= 3) {
                errors.message = 'Введите больше 3-х символов';
            }
            return errors;
        } }, function (_a) {
        var errors = _a.errors, touched = _a.touched, isSubmitting = _a.isSubmitting;
        return (react_1.default.createElement(formik_1.Form, { className: commentanswerform_css_1.default.form, style: modalForm, ref: refForm },
            react_1.default.createElement(formik_1.ErrorMessage, { component: "div", name: "message", className: commentanswerform_css_1.default.inputError }),
            react_1.default.createElement(formik_1.Field, { component: "textarea", type: 'message', name: 'message', className: commentanswerform_css_1.default.input, style: errors.message && touched.message && { borderColor: 'red' } }),
            react_1.default.createElement("div", { className: commentanswerform_css_1.default.content },
                react_1.default.createElement(MenuComment_1.MenuComment, null),
                react_1.default.createElement("button", { type: 'submit', className: commentanswerform_css_1.default.button, disabled: isSubmitting }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
    }));
}
exports.Commentanswerform = Commentanswerform;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentanswerform__form--2RuAq",
	"input": "commentanswerform__input--39bqE",
	"inputError": "commentanswerform__inputError--3gy9d",
	"button": "commentanswerform__button--ysRwf",
	"placeholderName": "commentanswerform__placeholderName--5I7vW",
	"content": "commentanswerform__content--3lqUX"
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuComment = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menucomment_css_1 = __importDefault(__webpack_require__(126));
var ArrowsIcon_1 = __webpack_require__(127);
var ImgIcon_1 = __webpack_require__(128);
var FileIcon_1 = __webpack_require__(129);
var LoadIcon_1 = __webpack_require__(130);
var BookIcon_1 = __webpack_require__(131);
var UpdateIcon_1 = __webpack_require__(132);
var OvalIcon_1 = __webpack_require__(133);
var AudioIcon_1 = __webpack_require__(134);
var MessagesIcon_1 = __webpack_require__(135);
var PencilIcon_1 = __webpack_require__(136);
var AIcon_1 = __webpack_require__(137);
var PdfIcon_1 = __webpack_require__(138);
function MenuComment() {
    return (react_1.default.createElement("ul", { className: menucomment_css_1.default.menuItemsList },
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(ArrowsIcon_1.ArrowsIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(ImgIcon_1.ImgIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(FileIcon_1.FileIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(LoadIcon_1.LoadIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(BookIcon_1.BookIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(UpdateIcon_1.UpdateIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(OvalIcon_1.OvalIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(AudioIcon_1.AudioIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(MessagesIcon_1.MessagesIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(PencilIcon_1.PencilIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(AIcon_1.AIcon, null)),
        react_1.default.createElement("li", { className: menucomment_css_1.default.menuItem },
            react_1.default.createElement(PdfIcon_1.PdfIcon, null))));
}
exports.MenuComment = MenuComment;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menucomment__menuItemsList--2Vnk_"
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowsIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ArrowsIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "20", height: "12", viewBox: "0 0 20 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z", fill: "#999999" })));
}
exports.ArrowsIcon = ArrowsIcon;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ImgIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z", fill: "#999999" })));
}
exports.ImgIcon = ImgIcon;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function FileIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "16", height: "20", viewBox: "0 0 16 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z", fill: "#999999" })));
}
exports.FileIcon = FileIcon;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function LoadIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "14", height: "17", viewBox: "0 0 14 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z", fill: "#999999" })));
}
exports.LoadIcon = LoadIcon;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function BookIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z", fill: "#999999" })));
}
exports.BookIcon = BookIcon;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function UpdateIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "22", height: "16", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z", fill: "#999999" })));
}
exports.UpdateIcon = UpdateIcon;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OvalIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function OvalIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "20", height: "10", viewBox: "0 0 20 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z", fill: "#999999" })));
}
exports.OvalIcon = OvalIcon;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function AudioIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z", fill: "#999999" })));
}
exports.AudioIcon = AudioIcon;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MessagesIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z", fill: "#999999" })));
}
exports.MessagesIcon = MessagesIcon;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PencilIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function PencilIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M0 14.2501V18.0001H3.75L14.81 6.94006L11.06 3.19006L0 14.2501ZM17.71 4.04006C18.1 3.65006 18.1 3.02006 17.71 2.63006L15.37 0.290059C14.98 -0.0999414 14.35 -0.0999414 13.96 0.290059L12.13 2.12006L15.88 5.87006L17.71 4.04006Z", fill: "#999999" })));
}
exports.PencilIcon = PencilIcon;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function AIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "16", height: "18", viewBox: "0 0 16 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z", fill: "#999999" })));
}
exports.AIcon = AIcon;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function PdfIcon(_a) {
    var className = _a.className;
    return (react_1.default.createElement("svg", { className: className, width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z", fill: "#999999" })));
}
exports.PdfIcon = PdfIcon;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var actions_1 = __webpack_require__(8);
var meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        case actions_1.ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = void 0;
var reducer_1 = __webpack_require__(13);
var saveToken = function () { return function (dispatch) {
    if (window.__token__) {
        dispatch((0, reducer_1.setToken)(window.__token__));
    }
}; };
exports.saveToken = saveToken;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(146), exports);


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var post_css_1 = __importDefault(__webpack_require__(147));
var react_dom_1 = __importDefault(__webpack_require__(11));
var CommentForm_1 = __webpack_require__(148);
var MetaData_1 = __webpack_require__(9);
var KarmaCounter_1 = __webpack_require__(10);
var Text_1 = __webpack_require__(2);
var Break_1 = __webpack_require__(6);
var CommentList_1 = __webpack_require__(151);
var MenuItemsList_1 = __webpack_require__(12);
var Text_2 = __webpack_require__(2);
var useCommentsData_1 = __webpack_require__(154);
var react_router_dom_1 = __webpack_require__(4);
function Post() {
    var state = (0, react_router_dom_1.useLocation)().state;
    var coments = (0, useCommentsData_1.UseCommentsData)(state.id)[0];
    var ref = (0, react_1.useRef)(null);
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                navigate('/posts');
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    var node = document.querySelector('#modal_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: post_css_1.default.modal, ref: ref },
        react_1.default.createElement("div", { className: post_css_1.default.titleContainer },
            react_1.default.createElement(KarmaCounter_1.KarmaCounter, { rating: state.rating, divStyle: { display: 'flex', flexDirection: 'column' }, spanStyle: { paddingLeft: '0' }, downStyle: { paddingLeft: '0' } }),
            react_1.default.createElement(Break_1.Break, { size: 12 }),
            react_1.default.createElement("div", { className: post_css_1.default.titleContainerRight },
                react_1.default.createElement("h2", { className: post_css_1.default.title }, state.title),
                react_1.default.createElement(MetaData_1.MetaData, { author: state.author, avatar: state.avatar, datePostUtc: state.datePostUtc }))),
        react_1.default.createElement(Break_1.Break, { size: 12, top: true }),
        react_1.default.createElement("div", { className: post_css_1.default.content },
            react_1.default.createElement("p", { className: post_css_1.default.contentDescr }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione harum dolorum adipisci at perferendis, exercitationem quibusdam minima voluptatibus esse pariatur natus numquam corporis neque aperiam ipsum delectus. Reiciendis, et laost."),
            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),
            react_1.default.createElement("img", { src: state.previewImg, className: post_css_1.default.previewImg, alt: "preview" }),
            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),
            react_1.default.createElement("div", { className: post_css_1.default.divider }),
            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),
            react_1.default.createElement("div", { className: post_css_1.default.menuContainer },
                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { score: state.score, divHidden: { display: 'none' }, answerLiHidden: { display: 'none' }, ul: { paddingLeft: '0', justifyContent: 'space-between', padding: '0', flexDirection: 'row', width: '80%' }, li: { padding: '0' } }),
                react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 12, desktopSize: 14, color: Text_2.EColors.grey99 }, "---------")),
            react_1.default.createElement(Break_1.Break, { size: 20, top: true }),
            react_1.default.createElement(CommentForm_1.CommentForm, null),
            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),
            react_1.default.createElement("div", { className: post_css_1.default.divider }),
            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),
            react_1.default.createElement("ul", null, coments.map(function (comment) { return (react_1.default.createElement(CommentList_1.CommentList, { key: comment.idComment, bodyComment: comment.bodyComment, authorComment: comment.authorComment, createdComment: comment.createdComment, idComment: comment.idComment, answerComment: comment.answerComment })); }))))), node);
}
exports.Post = Post;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "post__modal--yRo-c",
	"content": "post__content--2gFMc",
	"close": "post__close--1HSqz",
	"previewImg": "post__previewImg--3Qw8z",
	"title": "post__title--xhpd2",
	"titleContainer": "post__titleContainer--35XWo",
	"titleContainerRight": "post__titleContainerRight--2h-OL",
	"contentDescr": "post__contentDescr--1xMSD",
	"divider": "post__divider--2etHm",
	"menuContainer": "post__menuContainer--MybIl"
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(149), exports);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var commentform_css_1 = __importDefault(__webpack_require__(150));
var MenuComment_1 = __webpack_require__(17);
var useUserData_1 = __webpack_require__(16);
var recoil_1 = __webpack_require__(14);
var App_1 = __webpack_require__(15);
function CommentForm() {
    // const text = useRecoilValue(textState)
    var _a = (0, recoil_1.useRecoilState)(App_1.textState), text = _a[0], setText = _a[1];
    var _b = (0, react_1.useState)(''), texts = _b[0], setTexts = _b[1];
    console.log(text);
    // const count = useRecoilValue(charCountState);
    // const setText = useSetRecoilState(textState)
    // const value = useSelector<RootState, string>(state => state.commentText)
    // const dispatch = useDispatch();
    var data = (0, useUserData_1.useUserData)().data;
    function handleSubmit(event) {
        event.preventDefault();
    }
    function handleChange(event) {
        // dispatch(updateComment(event.target.value));
        setText(event.target.value);
        console.log(text);
    }
    return (react_1.default.createElement("form", { className: commentform_css_1.default.form, onSubmit: handleSubmit },
        react_1.default.createElement("textarea", { required: true, className: commentform_css_1.default.input, value: text, onChange: handleChange }),
        react_1.default.createElement("div", { className: commentform_css_1.default.placeholderName },
            data.name,
            ",",
            react_1.default.createElement("span", null, " \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")),
        react_1.default.createElement("div", { className: commentform_css_1.default.content },
            react_1.default.createElement(MenuComment_1.MenuComment, null),
            react_1.default.createElement("button", { type: 'submit', onClick: function () { return setText('2323232'); }, className: commentform_css_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentform__form--1oHDO",
	"modal": "commentform__modal--RMxU2",
	"input": "commentform__input--28J_p",
	"button": "commentform__button--2-2qT",
	"placeholderName": "commentform__placeholderName--cPmO1",
	"content": "commentform__content--2Ewnz"
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(152), exports);


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentlist_css_1 = __importDefault(__webpack_require__(153));
var KarmaCounter_1 = __webpack_require__(10);
var Break_1 = __webpack_require__(6);
var MetaData_1 = __webpack_require__(9);
var MenuItemsList_1 = __webpack_require__(12);
function CommentList(_a) {
    var answerComment = _a.answerComment, bodyComment = _a.bodyComment, authorComment = _a.authorComment, createdComment = _a.createdComment, idComment = _a.idComment;
    return (react_1.default.createElement("li", { key: idComment, className: commentlist_css_1.default.commentItem },
        react_1.default.createElement("div", { className: commentlist_css_1.default.commentItemLeft },
            react_1.default.createElement(KarmaCounter_1.KarmaCounter, { divStyle: { display: 'flex', flexDirection: 'column' }, spanStyle: { display: 'none' }, downStyle: { paddingLeft: '0' } }),
            react_1.default.createElement(Break_1.Break, { size: 8, top: true }),
            react_1.default.createElement("div", { className: commentlist_css_1.default.divider })),
        react_1.default.createElement("div", { className: commentlist_css_1.default.commentItemBody },
            react_1.default.createElement(MetaData_1.MetaData, { avatar: 'https://styles.redditmedia.com/t5_9iiuta/styles/profileIcon_snooab331651-3a90-401c-b63d-b4f47b88aa33-headshot.png?width=256&height=256&crop=256:256,smart&s=0350d4236ca459faef433755268e2b4d77fe4db9', datePostUtc: createdComment, author: authorComment, divUserLinkStyle: { padding: '0 6px 0 0' }, spanMetaDataStyle: { display: 'none' }, divMetaDataStyle: { flexFlow: "row nowrap", justifyContent: 'flex-start' } }),
            react_1.default.createElement(Break_1.Break, { size: 8, top: true }),
            react_1.default.createElement("p", { className: commentlist_css_1.default.commentItemDescr }, bodyComment),
            react_1.default.createElement(Break_1.Break, { size: 8, top: true }),
            react_1.default.createElement(MenuItemsList_1.MenuItemsList, { score: 0, liHidden: { display: 'none' }, divHidden: { display: 'none' }, ul: { paddingLeft: '0', padding: '0', flexDirection: 'row', width: '80%' }, li: { padding: '0', marginRight: '7px', display: 'flex' } }))));
}
exports.CommentList = CommentList;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentItem": "commentlist__commentItem--3zBsl",
	"commentItemLeft": "commentlist__commentItemLeft--2wPzg",
	"commentItemDescr": "commentlist__commentItemDescr--2L3Rd",
	"divider": "commentlist__divider--3Nr_7",
	"mediaBody": "commentlist__mediaBody--2d95N",
	"author": "commentlist__author--3KSu7",
	"metaData": "commentlist__metaData--p1ht4",
	"footerComment": "commentlist__footerComment--3nM_Z",
	"vote": "commentlist__vote--1rHSb",
	"plus": "commentlist__plus--2I0KF",
	"minus": "commentlist__minus--iQkb9",
	"commentReply": "commentlist__commentReply--FsHsn",
	"devide": "commentlist__devide--j2IKE",
	"mediaText": "commentlist__mediaText--CVJOE",
	"titleComments": "commentlist__titleComments--1ahH1"
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCommentsData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(3));
var react_redux_1 = __webpack_require__(1);
function UseCommentsData(id) {
    var _a = (0, react_1.useState)([]), comments = _a[0], setComments = _a[1];
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    (0, react_1.useEffect)(function () {
        if (token && token !== "undefined") {
            axios_1.default.get("https://oauth.reddit.com/comments/".concat(id), {
                headers: { Authorization: "bearer ".concat(token) }
            })
                .then(function (resp) {
                var commentsData = (resp.data[1].data.children);
                setComments(commentsData.map(function (el) {
                    return {
                        bodyComment: el.data.body,
                        authorComment: el.data.author,
                        createdComment: el.data.created_utc * 1000,
                        idComment: el.data.id,
                        answerComment: el.data.replies
                    };
                }));
            })
                .catch(console.log);
        }
    }, [token]);
    return [comments];
}
exports.UseCommentsData = UseCommentsData;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(156), exports);


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var notfound_css_1 = __importDefault(__webpack_require__(157));
var react_dom_1 = __importDefault(__webpack_require__(11));
function NotFound() {
    var node = document.querySelector('#error_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: notfound_css_1.default.errorBlock },
        react_1.default.createElement("div", { className: notfound_css_1.default.error }, "404 \u2014 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"))), node);
}
exports.NotFound = NotFound;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"error": "notfound__error--2jhxx",
	"errorBlock": "notfound__errorBlock--1v05b"
};


/***/ })
/******/ ]);