/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}

button:active {
  background-color: #3e8e41;
}

/* Dialog Style */
dialog {
  border: none;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  text-align: center;
}

dialog.game-setup {
  width: 400px;
}

.dialog-gameboard {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
  gap: 4px;
  margin: 20px 0;
}

/* Grid Styling */
.dialog-grid,
.player-grid,
.computer-grid {
  width: 30px;
  height: 30px;
  background-color: #b0c4de;
  border: 1px solid #4f5d75;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.dialog-grid:hover,
.player-grid:hover,
.computer-grid:hover {
  background-color: #8fbcd4;
  cursor: pointer;
}

/* Player & Computer Board */
.player-gameboard,
.computer-gameboard {
  display: grid;
  grid-template-columns: repeat(10, 40px);
  grid-template-rows: repeat(10, 40px);
  gap: 4px;
  margin-top: 10px;
}

.player-grid,
.computer-grid {
  width: 40px;
  height: 40px;
  background-color: #d3d3d3;
}

/* Gameboard Titles */
.gameboard-title {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
}

/* Layout for Top and Bottom Halves */
.top-half,
.bottom-half {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}

.left-quarter,
.right-quarter {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.new-game {
  background-color: #e74c3c;
}

.new-game:hover {
  background-color: #c0392b;
}

/* Game Over Dialog */
dialog .result {
  font-size: 18px;
  margin-top: 10px;
  color: #333;
}

.ship-grid {
  background-color: black;
}

.damaged-grid {
  background-color: red;
}

.missed-grid {
  background-color: blue;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gCAAgC;EAChC,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,iBAAiB;AACjB;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,wCAAwC;EACxC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;EACR,cAAc;AAChB;;AAEA,iBAAiB;AACjB;;;EAGE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;;;EAGE,yBAAyB;EACzB,eAAe;AACjB;;AAEA,4BAA4B;AAC5B;;EAEE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;EACR,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA,qBAAqB;AACrB;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA,qCAAqC;AACrC;;EAEE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,qBAAqB;AACrB;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["/* Global Styles */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Arial', sans-serif;\n  background-color: #f0f2f5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n\nbutton {\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 10px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nbutton:hover {\n  background-color: #45a049;\n}\n\nbutton:active {\n  background-color: #3e8e41;\n}\n\n/* Dialog Style */\ndialog {\n  border: none;\n  border-radius: 10px;\n  padding: 20px;\n  background-color: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n  text-align: center;\n}\n\ndialog.game-setup {\n  width: 400px;\n}\n\n.dialog-gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n  gap: 4px;\n  margin: 20px 0;\n}\n\n/* Grid Styling */\n.dialog-grid,\n.player-grid,\n.computer-grid {\n  width: 30px;\n  height: 30px;\n  background-color: #b0c4de;\n  border: 1px solid #4f5d75;\n  border-radius: 3px;\n  transition: background-color 0.3s ease;\n}\n\n.dialog-grid:hover,\n.player-grid:hover,\n.computer-grid:hover {\n  background-color: #8fbcd4;\n  cursor: pointer;\n}\n\n/* Player & Computer Board */\n.player-gameboard,\n.computer-gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 40px);\n  grid-template-rows: repeat(10, 40px);\n  gap: 4px;\n  margin-top: 10px;\n}\n\n.player-grid,\n.computer-grid {\n  width: 40px;\n  height: 40px;\n  background-color: #d3d3d3;\n}\n\n/* Gameboard Titles */\n.gameboard-title {\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n/* Layout for Top and Bottom Halves */\n.top-half,\n.bottom-half {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.left-quarter,\n.right-quarter {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.new-game {\n  background-color: #e74c3c;\n}\n\n.new-game:hover {\n  background-color: #c0392b;\n}\n\n/* Game Over Dialog */\ndialog .result {\n  font-size: 18px;\n  margin-top: 10px;\n  color: #333;\n}\n\n.ship-grid {\n  background-color: black;\n}\n\n.damaged-grid {\n  background-color: red;\n}\n\n.missed-grid {\n  background-color: blue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");


class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }

  hit() {
    this.timesHit++;
    this.isSunk();
  }

  isSunk() {
    if (this.length <= this.timesHit) {
      this.sunk = true;
    } else {
      this.sunk = false;
    }
  }
}

class Gameboard {
  constructor() {
    this.shipCoordinates = [];
    this.missedCoordinates = [];
    this.twoShip = {
      ship: new Ship(2),
    };
    this.twoShip.coordinates = this.getCoordinates(
      this.twoShip.ship,
      this.shipCoordinates,
    );

    this.firstThreeShip = {
      ship: new Ship(3),
    };
    this.firstThreeShip.coordinates = this.getCoordinates(
      this.firstThreeShip.ship,
      this.shipCoordinates,
    );

    this.secondThreeShip = {
      ship: new Ship(3),
    };
    this.secondThreeShip.coordinates = this.getCoordinates(
      this.secondThreeShip.ship,
      this.shipCoordinates,
    );

    this.fourShip = {
      ship: new Ship(4),
    };
    this.fourShip.coordinates = this.getCoordinates(
      this.fourShip.ship,
      this.shipCoordinates,
    );

    this.fiveShip = {
      ship: new Ship(5),
    };
    this.fiveShip.coordinates = this.getCoordinates(
      this.fiveShip.ship,
      this.shipCoordinates,
    );
  }

  getCoordinates(ship, takenCoordinatesArray) {
    let coordinatesArray;

    do {
      do {
        coordinatesArray = [];
        let xCoordinate = Math.round(Math.random() * 9);
        let yCoordinate = Math.round(Math.random() * 9);
        coordinatesArray.push([xCoordinate, yCoordinate]);

        let variableSelector = Math.round(Math.random());

        if (variableSelector === 0) {
          let directionSelector = Math.round(Math.random());

          if (directionSelector === 0) {
            let currentPosition = [...coordinatesArray[0]];
            for (let i = 1; i < ship.length; i++) {
              coordinatesArray.push([
                currentPosition[0] - 1,
                currentPosition[1],
              ]);
              currentPosition = [...coordinatesArray[i]];
            }
          } else {
            let currentPosition = [...coordinatesArray[0]];
            for (let i = 1; i < ship.length; i++) {
              coordinatesArray.push([
                currentPosition[0] + 1,
                currentPosition[1],
              ]);
              currentPosition = [...coordinatesArray[i]];
            }
          }
        } else {
          let directionSelector = Math.round(Math.random());

          if (directionSelector === 0) {
            let currentPosition = [...coordinatesArray[0]];
            for (let i = 1; i < ship.length; i++) {
              coordinatesArray.push([
                currentPosition[0],
                currentPosition[1] - 1,
              ]);
              currentPosition = [...coordinatesArray[i]];
            }
          } else {
            let currentPosition = [...coordinatesArray[0]];
            for (let i = 1; i < ship.length; i++) {
              coordinatesArray.push([
                currentPosition[0],
                currentPosition[1] + 1,
              ]);
              currentPosition = [...coordinatesArray[i]];
            }
          }
        }
      } while ((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkForDuplicates)(takenCoordinatesArray, coordinatesArray));
    } while ((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.outOfBorder)(coordinatesArray));

    for (let position of coordinatesArray) {
      this.shipCoordinates.push(position);
    }

    return coordinatesArray;
  }

  receiveAttack(coordinates) {
    if ((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkForDuplicates)(this.twoShip.coordinates, coordinates)) {
      this.twoShip.ship.hit();
      this.twoShip.ship.isSunk();
      return;
    } else if (
      (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkForDuplicates)(this.firstThreeShip.coordinates, coordinates)
    ) {
      this.firstThreeShip.ship.hit();
      this.firstThreeShip.ship.isSunk();
      return;
    } else if (
      (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkForDuplicates)(this.secondThreeShip.coordinates, coordinates)
    ) {
      this.secondThreeShip.ship.hit();
      this.secondThreeShip.ship.isSunk();
      return;
    } else if ((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkForDuplicates)(this.fourShip.coordinates, coordinates)) {
      this.fourShip.ship.hit();
      this.fourShip.ship.isSunk();
      return;
    } else if ((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkForDuplicates)(this.fiveShip.coordinates, coordinates)) {
      this.fiveShip.ship.hit();
      this.fiveShip.ship.isSunk();
      return;
    } else {
      this.missedCoordinates.push([...coordinates]);
      return;
    }
  }

  allShipsSunk() {
    if (
      this.twoShip.ship.sunk &&
      this.firstThreeShip.ship.sunk &&
      this.secondThreeShip.ship.sunk &&
      this.fourShip.ship.sunk &&
      this.fiveShip.ship.sunk
    ) {
      return true;
    }

    return false;
  }
}

class Player {
  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
  }
}




/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkForDuplicates: () => (/* binding */ checkForDuplicates),
/* harmony export */   extractCoordinates: () => (/* binding */ extractCoordinates),
/* harmony export */   outOfBorder: () => (/* binding */ outOfBorder),
/* harmony export */   populateGrid: () => (/* binding */ populateGrid),
/* harmony export */   randomCoordinate: () => (/* binding */ randomCoordinate),
/* harmony export */   resetGrid: () => (/* binding */ resetGrid)
/* harmony export */ });
function checkForDuplicates(baseArray, newArray) {
  for (let newElement of newArray) {
    for (let baseElement of baseArray) {
      if (
        newElement[0] === baseElement[0] &&
        newElement[1] === baseElement[1]
      ) {
        return true;
      }
    }
  }

  return false;
}

function extractCoordinates(string) {
  let returnArray = [];
  let insideArray = [];
  let array = string.slice(0, 6).split('');
  insideArray[0] = parseInt(array[1]);
  insideArray[1] = parseInt(array[4]);
  returnArray.push(insideArray);
  return returnArray;
}

function populateGrid(gridArray, shipArray) {
  for (let grid of gridArray) {
    if (checkForDuplicates(extractCoordinates(grid.className), shipArray)) {
      grid.className += ' ship-grid';
    }
  }
}

function outOfBorder(array) {
  for (let coordinate of array) {
    if (
      coordinate[0] > 9 ||
      coordinate[0] < 0 ||
      coordinate[1] > 9 ||
      coordinate[1] < 0
    ) {
      return true;
    }
  }
  return false;
}

function resetGrid(gridArray) {
  for (let grid of gridArray) {
    if (grid.className.includes('ship-grid')) {
      grid.className = grid.className.replace(' ship-grid', '');
    }
  }
}

function randomCoordinate(takenCoordinates) {
  let returnArray = [];
  do {
    let xCoordinate = Math.round(Math.random() * 9);
    let yCoordinate = Math.round(Math.random() * 9);
    returnArray[0] = xCoordinate;
    returnArray[1] = yCoordinate;
  } while (checkForDuplicates([returnArray], takenCoordinates));

  return [returnArray];
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




let startGameModal = document.querySelector('.game-setup');
let endGameModal = document.querySelector('.game-over');

document.querySelector('.new-game').addEventListener('click', function () {
  startGameModal.showModal();
  let realPlayer = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Player('real');
  let computerPlayer = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Player('cpu');
  let dialogGridArray = document.querySelectorAll('.dialog-grid');
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.populateGrid)(dialogGridArray, realPlayer.gameboard.shipCoordinates);

  document
    .querySelector('.change-layout')
    .addEventListener('click', function () {
      (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetGrid)(dialogGridArray);
      realPlayer.gameboard = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
      (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.populateGrid)(dialogGridArray, realPlayer.gameboard.shipCoordinates);
    });

  document.querySelector('.start-game').addEventListener('click', function () {
    startGameModal.close();
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetGrid)(dialogGridArray);
    let playerGridArray = document.querySelectorAll('.player-grid');
    let computerGridArray = document.querySelectorAll('.computer-grid');
    let playerTakenCoordinates = [];

    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.populateGrid)(playerGridArray, realPlayer.gameboard.shipCoordinates);

    for (let grid of computerGridArray) {
      grid.addEventListener('click', function () {
        computerPlayer.gameboard.receiveAttack(
          (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.extractCoordinates)(grid.className),
        );
        if (
          (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkForDuplicates)(
            computerPlayer.gameboard.shipCoordinates,
            (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.extractCoordinates)(grid.className),
          )
        ) {
          grid.className += ' damaged-grid';
        } else {
          grid.className += ' missed-grid';
        }

        if (computerPlayer.gameboard.allShipsSunk()) {
          // GAME OVER CODE
          endGameModal.showModal();
          document.querySelector('.result').textContent = 'You Win!';
          document
            .querySelector('.restart-game')
            .addEventListener('click', function () {
              location.reload();
            });
        }

        let attackCoordinates = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.randomCoordinate)(playerTakenCoordinates);
        playerTakenCoordinates.push(attackCoordinates[0]);
        realPlayer.gameboard.receiveAttack(attackCoordinates);
        if (
          (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkForDuplicates)(
            realPlayer.gameboard.shipCoordinates,
            attackCoordinates,
          )
        ) {
          for (let grid of playerGridArray) {
            if (
              (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkForDuplicates)(
                (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.extractCoordinates)(grid.className),
                attackCoordinates,
              )
            ) {
              grid.classList.add('damaged-grid');
            }
          }
        } else {
          for (let grid of playerGridArray) {
            if (
              (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkForDuplicates)(
                (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.extractCoordinates)(grid.className),
                attackCoordinates,
              )
            ) {
              grid.classList.add('missed-grid');
            }
          }
        }

        if (realPlayer.gameboard.allShipsSunk()) {
          // GAME OVER CODE
          endGameModal.showModal();
          document.querySelector('.result').textContent = 'Computer Wins!';
          document
            .querySelector('.restart-game')
            .addEventListener('click', function () {
              location.reload();
            });
        }
      });
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map