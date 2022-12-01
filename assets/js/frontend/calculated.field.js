/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/calculated.field/functions.js":
/*!************************************************!*\
  !*** ./frontend/calculated.field/functions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isCalculated\": () => (/* binding */ isCalculated)\n/* harmony export */ });\n/**\r\n * @param node {HTMLElement}\r\n * @returns {boolean}\r\n */\nfunction isCalculated(node) {\n  var _node$parentElement$d, _node$parentElement$d2, _node$parentElement$d3;\n\n  return !!((_node$parentElement$d = (_node$parentElement$d2 = node.parentElement.dataset) === null || _node$parentElement$d2 === void 0 ? void 0 : (_node$parentElement$d3 = _node$parentElement$d2.formula) === null || _node$parentElement$d3 === void 0 ? void 0 : _node$parentElement$d3.length) !== null && _node$parentElement$d !== void 0 ? _node$parentElement$d : '');\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL2Z1bmN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxZQUFULENBQXVCQyxJQUF2QixFQUE4QjtFQUFBOztFQUM3QixPQUFPLENBQUMscURBQ1BBLElBQUksQ0FBQ0MsYUFBTCxDQUFtQkMsT0FEWixxRkFDUCx1QkFBNEJDLE9BRHJCLDJEQUNQLHVCQUFxQ0MsTUFEOUIseUVBQ3dDLEVBRHhDLENBQVI7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvZnVuY3Rpb25zLmpzPzRmYTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0NhbGN1bGF0ZWQoIG5vZGUgKSB7XHJcblx0cmV0dXJuICEhKFxyXG5cdFx0bm9kZS5wYXJlbnRFbGVtZW50LmRhdGFzZXQ/LmZvcm11bGE/Lmxlbmd0aCA/PyAnJ1xyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGlzQ2FsY3VsYXRlZCB9OyJdLCJuYW1lcyI6WyJpc0NhbGN1bGF0ZWQiLCJub2RlIiwicGFyZW50RWxlbWVudCIsImRhdGFzZXQiLCJmb3JtdWxhIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/calculated.field/functions.js\n");

/***/ }),

/***/ "./frontend/calculated.field/input.js":
/*!********************************************!*\
  !*** ./frontend/calculated.field/input.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/calculated.field/functions.js\");\nvar _window$JetFormBuilde2, _window, _window$JetFormBuilde3;\n\n\nvar _window$JetFormBuilde = window.JetFormBuilderAbstract,\n    InputData = _window$JetFormBuilde.InputData,\n    CalculatedFormula = _window$JetFormBuilde.CalculatedFormula;\nvar applyFilters = wp.hooks.applyFilters;\n\nvar _ref = (_window$JetFormBuilde2 = (_window = window) === null || _window === void 0 ? void 0 : (_window$JetFormBuilde3 = _window.JetFormBuilderMain) === null || _window$JetFormBuilde3 === void 0 ? void 0 : _window$JetFormBuilde3.filters) !== null && _window$JetFormBuilde2 !== void 0 ? _window$JetFormBuilde2 : {},\n    _ref$applyFilters = _ref.applyFilters,\n    deprecatedApplyFilters = _ref$applyFilters === void 0 ? false : _ref$applyFilters;\n\nfunction CalculatedData() {\n  InputData.call(this);\n  this.formula = '';\n  this.precision = 0;\n  this.sepDecimal = '';\n  this.sepThousands = '';\n  this.visibleValNode = null;\n  this.valueTypeProp = 'number';\n\n  this.isSupported = function (node) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isCalculated)(node);\n  };\n\n  this.setValue = function () {\n    var _this = this;\n\n    var formula = new CalculatedFormula(this, {\n      forceFunction: true\n    });\n    formula.observe(this.formula);\n\n    formula.setResult = function () {\n      _this.value.current = formula.calculate();\n    };\n\n    formula.relatedCallback = function (input) {\n      var value = applyFilters('jet.fb.calculated.callback', false, input, _this);\n\n      if (false !== value) {\n        return value;\n      }\n\n      var response = 'number' === _this.valueTypeProp ? input.calcValue : input.value.current;\n\n      if (false === deprecatedApplyFilters) {\n        return response;\n      }\n\n      var filterResult = deprecatedApplyFilters('forms/calculated-field-value', input.value.current, jQuery(input.nodes[0]));\n      return filterResult === input.value.current ? response : filterResult;\n    };\n\n    formula.setResult();\n    this.onChange();\n    this.beforeSubmit(function (resolve) {\n      _this.value.silence();\n\n      _this.value.current = null;\n\n      _this.value.silence();\n\n      formula.setResult();\n      resolve();\n    });\n  };\n\n  this.makeReactive = function () {\n    InputData.prototype.makeReactive.call(this); // run signals\n\n    this.value.notify();\n  };\n\n  this.setNode = function (node) {\n    InputData.prototype.setNode.call(this, node);\n    var _node$parentElement$d = node.parentElement.dataset,\n        formula = _node$parentElement$d.formula,\n        precision = _node$parentElement$d.precision,\n        sepDecimal = _node$parentElement$d.sepDecimal,\n        valueType = _node$parentElement$d.valueType;\n    this.formula = formula;\n    this.precision = +precision;\n    this.sepDecimal = sepDecimal;\n    this.visibleValNode = node.nextElementSibling;\n    this.valueTypeProp = valueType;\n  };\n\n  this.addListeners = function () {// silence is golden\n  };\n}\n\nCalculatedData.prototype = Object.create(InputData.prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQWpDLENBQXVDLElBQXZDLEVBRCtCLENBRy9COztJQUNBLEtBQUthLEtBQUwsQ0FBV2dCLE1BQVg7RUFDQSxDQUxEOztFQU1BLEtBQUtDLE9BQUwsR0FBb0IsVUFBV3RCLElBQVgsRUFBa0I7SUFDckNqQixTQUFTLENBQUNxQyxTQUFWLENBQW9CRSxPQUFwQixDQUE0QjlCLElBQTVCLENBQWtDLElBQWxDLEVBQXdDUSxJQUF4QztJQUVBLDRCQUtVQSxJQUFJLENBQUN1QixhQUFMLENBQW1CQyxPQUw3QjtJQUFBLElBQ08vQixPQURQLHlCQUNPQSxPQURQO0lBQUEsSUFFT0MsU0FGUCx5QkFFT0EsU0FGUDtJQUFBLElBR09DLFVBSFAseUJBR09BLFVBSFA7SUFBQSxJQUlPOEIsU0FKUCx5QkFJT0EsU0FKUDtJQU9BLEtBQUtoQyxPQUFMLEdBQXNCQSxPQUF0QjtJQUNBLEtBQUtDLFNBQUwsR0FBc0IsQ0FBQ0EsU0FBdkI7SUFDQSxLQUFLQyxVQUFMLEdBQXNCQSxVQUF0QjtJQUNBLEtBQUtFLGNBQUwsR0FBc0JHLElBQUksQ0FBQzBCLGtCQUEzQjtJQUNBLEtBQUs1QixhQUFMLEdBQXNCMkIsU0FBdEI7RUFDQSxDQWZEOztFQWdCQSxLQUFLRSxZQUFMLEdBQW9CLFlBQVksQ0FDL0I7RUFDQSxDQUZEO0FBR0E7O0FBRURwQyxjQUFjLENBQUM2QixTQUFmLEdBQTJCUSxNQUFNLENBQUNDLE1BQVAsQ0FBZTlDLFNBQVMsQ0FBQ3FDLFNBQXpCLENBQTNCO0FBRUEsaUVBQWU3QixjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9pbnB1dC5qcz83ZDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQ2FsY3VsYXRlZCB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBJbnB1dERhdGEsXHJcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXHJcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuY29uc3Qge1xyXG5cdCAgICAgIGFwcGx5RmlsdGVycyxcclxuICAgICAgfSA9IHdwLmhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxyXG4gICAgICB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlck1haW4/LmZpbHRlcnMgPz8ge307XHJcblxyXG5mdW5jdGlvbiBDYWxjdWxhdGVkRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmZvcm11bGEgICAgICAgID0gJyc7XHJcblx0dGhpcy5wcmVjaXNpb24gICAgICA9IDA7XHJcblx0dGhpcy5zZXBEZWNpbWFsICAgICA9ICcnO1xyXG5cdHRoaXMuc2VwVGhvdXNhbmRzICAgPSAnJztcclxuXHR0aGlzLnZpc2libGVWYWxOb2RlID0gbnVsbDtcclxuXHR0aGlzLnZhbHVlVHlwZVByb3AgID0gJ251bWJlcic7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzQ2FsY3VsYXRlZCggbm9kZSApO1xyXG5cdH07XHJcblx0dGhpcy5zZXRWYWx1ZSAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzLCB7IGZvcmNlRnVuY3Rpb246IHRydWUgfSApO1xyXG5cclxuXHRcdGZvcm11bGEub2JzZXJ2ZSggdGhpcy5mb3JtdWxhICk7XHJcblx0XHRmb3JtdWxhLnNldFJlc3VsdCAgICAgICA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcclxuXHRcdH07XHJcblx0XHRmb3JtdWxhLnJlbGF0ZWRDYWxsYmFjayA9ICggaW5wdXQgKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gYXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHRcdCdqZXQuZmIuY2FsY3VsYXRlZC5jYWxsYmFjaycsXHJcblx0XHRcdFx0ZmFsc2UsXHJcblx0XHRcdFx0aW5wdXQsXHJcblx0XHRcdFx0dGhpcyxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGlmICggZmFsc2UgIT09IHZhbHVlICkge1xyXG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAnbnVtYmVyJyA9PT0gdGhpcy52YWx1ZVR5cGVQcm9wXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgPyBpbnB1dC5jYWxjVmFsdWVcclxuXHRcdFx0ICAgICAgICAgICAgICAgICA6IGlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0XHRpZiAoIGZhbHNlID09PSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzICkge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgZmlsdGVyUmVzdWx0ID0gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyhcclxuXHRcdFx0XHQnZm9ybXMvY2FsY3VsYXRlZC1maWVsZC12YWx1ZScsXHJcblx0XHRcdFx0aW5wdXQudmFsdWUuY3VycmVudCxcclxuXHRcdFx0XHRqUXVlcnkoIGlucHV0Lm5vZGVzWyAwIF0gKSxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybiBmaWx0ZXJSZXN1bHQgPT09IGlucHV0LnZhbHVlLmN1cnJlbnRcclxuXHRcdFx0ICAgICAgID8gcmVzcG9uc2VcclxuXHRcdFx0ICAgICAgIDogZmlsdGVyUmVzdWx0O1xyXG5cdFx0fTtcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlKCk7XHJcblxyXG5cdFx0dGhpcy5iZWZvcmVTdWJtaXQoICggcmVzb2x2ZSApID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5zaWxlbmNlKCk7XHJcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG51bGw7XHJcblx0XHRcdHRoaXMudmFsdWUuc2lsZW5jZSgpO1xyXG5cclxuXHRcdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0fSApO1xyXG5cdH07XHJcblx0dGhpcy5tYWtlUmVhY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLm1ha2VSZWFjdGl2ZS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdFx0Ly8gcnVuIHNpZ25hbHNcclxuXHRcdHRoaXMudmFsdWUubm90aWZ5KCk7XHJcblx0fTtcclxuXHR0aGlzLnNldE5vZGUgICAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHQgICAgICBmb3JtdWxhLFxyXG5cdFx0XHQgICAgICBwcmVjaXNpb24sXHJcblx0XHRcdCAgICAgIHNlcERlY2ltYWwsXHJcblx0XHRcdCAgICAgIHZhbHVlVHlwZSxcclxuXHRcdCAgICAgIH0gPSBub2RlLnBhcmVudEVsZW1lbnQuZGF0YXNldDtcclxuXHJcblx0XHR0aGlzLmZvcm11bGEgICAgICAgID0gZm9ybXVsYTtcclxuXHRcdHRoaXMucHJlY2lzaW9uICAgICAgPSArcHJlY2lzaW9uO1xyXG5cdFx0dGhpcy5zZXBEZWNpbWFsICAgICA9IHNlcERlY2ltYWw7XHJcblx0XHR0aGlzLnZpc2libGVWYWxOb2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0XHR0aGlzLnZhbHVlVHlwZVByb3AgID0gdmFsdWVUeXBlO1xyXG5cdH07XHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBzaWxlbmNlIGlzIGdvbGRlblxyXG5cdH07XHJcbn1cclxuXHJcbkNhbGN1bGF0ZWREYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWREYXRhOyJdLCJuYW1lcyI6WyJpc0NhbGN1bGF0ZWQiLCJ3aW5kb3ciLCJKZXRGb3JtQnVpbGRlckFic3RyYWN0IiwiSW5wdXREYXRhIiwiQ2FsY3VsYXRlZEZvcm11bGEiLCJhcHBseUZpbHRlcnMiLCJ3cCIsImhvb2tzIiwiSmV0Rm9ybUJ1aWxkZXJNYWluIiwiZmlsdGVycyIsImRlcHJlY2F0ZWRBcHBseUZpbHRlcnMiLCJDYWxjdWxhdGVkRGF0YSIsImNhbGwiLCJmb3JtdWxhIiwicHJlY2lzaW9uIiwic2VwRGVjaW1hbCIsInNlcFRob3VzYW5kcyIsInZpc2libGVWYWxOb2RlIiwidmFsdWVUeXBlUHJvcCIsImlzU3VwcG9ydGVkIiwibm9kZSIsInNldFZhbHVlIiwiZm9yY2VGdW5jdGlvbiIsIm9ic2VydmUiLCJzZXRSZXN1bHQiLCJ2YWx1ZSIsImN1cnJlbnQiLCJjYWxjdWxhdGUiLCJyZWxhdGVkQ2FsbGJhY2siLCJpbnB1dCIsInJlc3BvbnNlIiwiY2FsY1ZhbHVlIiwiZmlsdGVyUmVzdWx0IiwialF1ZXJ5Iiwibm9kZXMiLCJvbkNoYW5nZSIsImJlZm9yZVN1Ym1pdCIsInJlc29sdmUiLCJzaWxlbmNlIiwibWFrZVJlYWN0aXZlIiwicHJvdG90eXBlIiwibm90aWZ5Iiwic2V0Tm9kZSIsInBhcmVudEVsZW1lbnQiLCJkYXRhc2V0IiwidmFsdWVUeXBlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYWRkTGlzdGVuZXJzIiwiT2JqZWN0IiwiY3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/calculated.field/input.js\n");

/***/ }),

/***/ "./frontend/calculated.field/main.js":
/*!*******************************************!*\
  !*** ./frontend/calculated.field/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./frontend/calculated.field/input.js\");\n/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ \"./frontend/calculated.field/signal.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar addFilter = wp.hooks.addFilter;\naddFilter('jet.fb.inputs', 'jet-form-builder/calculated-field', function (inputs) {\n  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"]].concat(_toConsumableArray(inputs));\n  return inputs;\n});\naddFilter('jet.fb.signals', 'jet-form-builder/calculated-field', function (signals) {\n  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]].concat(_toConsumableArray(signals));\n  return signals;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL21haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQVFFLFNBQVIsR0FBc0JDLEVBQUUsQ0FBQ0MsS0FBekIsQ0FBUUYsU0FBUjtBQUVBQSxTQUFTLENBQ1IsZUFEUSxFQUVSLG1DQUZRLEVBR1IsVUFBV0csTUFBWCxFQUFvQjtFQUNuQkEsTUFBTSxJQUFLTCw4Q0FBTCw0QkFBd0JLLE1BQXhCLEVBQU47RUFFQSxPQUFPQSxNQUFQO0FBQ0EsQ0FQTyxDQUFUO0FBVUFILFNBQVMsQ0FDUixnQkFEUSxFQUVSLG1DQUZRLEVBR1IsVUFBV0ksT0FBWCxFQUFxQjtFQUNwQkEsT0FBTyxJQUFLTCwrQ0FBTCw0QkFBMEJLLE9BQTFCLEVBQVA7RUFFQSxPQUFPQSxPQUFQO0FBQ0EsQ0FQTyxDQUFUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9tYWluLmpzP2I3NjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0ZWREYXRhIGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgU2lnbmFsQ2FsY3VsYXRlZCBmcm9tICcuL3NpZ25hbCc7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gd3AuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xyXG5cdFx0aW5wdXRzID0gWyBDYWxjdWxhdGVkRGF0YSwgLi4uaW5wdXRzIF07XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0cztcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuc2lnbmFscycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2FsY3VsYXRlZC1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xyXG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsQ2FsY3VsYXRlZCwgLi4uc2lnbmFscyBdO1xyXG5cclxuXHRcdHJldHVybiBzaWduYWxzO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbIkNhbGN1bGF0ZWREYXRhIiwiU2lnbmFsQ2FsY3VsYXRlZCIsImFkZEZpbHRlciIsIndwIiwiaG9va3MiLCJpbnB1dHMiLCJzaWduYWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/calculated.field/main.js\n");

/***/ }),

/***/ "./frontend/calculated.field/signal.js":
/*!*********************************************!*\
  !*** ./frontend/calculated.field/signal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/calculated.field/functions.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar BaseSignal = window.JetFormBuilderAbstract.BaseSignal;\n/**\r\n * @property {CalculatedData} input\r\n */\n\nfunction SignalCalculated() {\n  BaseSignal.call(this);\n\n  this.isSupported = function (node, inputData) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isCalculated)(node);\n  };\n\n  this.runSignal = function () {\n    var _this$input$nodes = _slicedToArray(this.input.nodes, 1),\n        node = _this$input$nodes[0];\n\n    node.value = this.input.value.current;\n    this.input.visibleValNode.textContent = this.convertValue();\n  };\n\n  this.convertValue = function () {\n    var _this$input = this.input,\n        sepThousands = _this$input.sepThousands,\n        sepDecimal = _this$input.sepDecimal,\n        valueTypeProp = _this$input.valueTypeProp,\n        precision = _this$input.precision;\n    var current = this.input.value.current;\n\n    if ('number' !== valueTypeProp) {\n      return current;\n    }\n\n    if (Number.isNaN(Number(current))) {\n      return 0;\n    }\n\n    var parts = Number(current).toFixed(precision).toString().split('.');\n    parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, sepThousands);\n    return parts.join(sepDecimal);\n  };\n}\n\nSignalCalculated.prototype = Object.create(BaseSignal.prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalCalculated);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL3NpZ25hbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFDT0MsVUFEUCxHQUVVQyxNQUFNLENBQUNDLHNCQUZqQixDQUNPRixVQURQO0FBSUE7QUFDQTtBQUNBOztBQUNBLFNBQVNHLGdCQUFULEdBQTRCO0VBQzNCSCxVQUFVLENBQUNJLElBQVgsQ0FBaUIsSUFBakI7O0VBRUEsS0FBS0MsV0FBTCxHQUFvQixVQUFXQyxJQUFYLEVBQWlCQyxTQUFqQixFQUE2QjtJQUNoRCxPQUFPUix3REFBWSxDQUFFTyxJQUFGLENBQW5CO0VBQ0EsQ0FGRDs7RUFHQSxLQUFLRSxTQUFMLEdBQW9CLFlBQVk7SUFDL0IsdUNBQWlCLEtBQUtDLEtBQUwsQ0FBV0MsS0FBNUI7SUFBQSxJQUFRSixJQUFSOztJQUNBQSxJQUFJLENBQUNLLEtBQUwsR0FBaUIsS0FBS0YsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxPQUFsQztJQUVBLEtBQUtILEtBQUwsQ0FBV0ksY0FBWCxDQUEwQkMsV0FBMUIsR0FBd0MsS0FBS0MsWUFBTCxFQUF4QztFQUNBLENBTEQ7O0VBTUEsS0FBS0EsWUFBTCxHQUFvQixZQUFZO0lBQy9CLGtCQUtVLEtBQUtOLEtBTGY7SUFBQSxJQUNPTyxZQURQLGVBQ09BLFlBRFA7SUFBQSxJQUVPQyxVQUZQLGVBRU9BLFVBRlA7SUFBQSxJQUdPQyxhQUhQLGVBR09BLGFBSFA7SUFBQSxJQUlPQyxTQUpQLGVBSU9BLFNBSlA7SUFPQSxJQUFRUCxPQUFSLEdBQW9CLEtBQUtILEtBQUwsQ0FBV0UsS0FBL0IsQ0FBUUMsT0FBUjs7SUFFQSxJQUFLLGFBQWFNLGFBQWxCLEVBQWtDO01BQ2pDLE9BQU9OLE9BQVA7SUFDQTs7SUFFRCxJQUFLUSxNQUFNLENBQUNDLEtBQVAsQ0FBY0QsTUFBTSxDQUFFUixPQUFGLENBQXBCLENBQUwsRUFBeUM7TUFDeEMsT0FBTyxDQUFQO0lBQ0E7O0lBRUQsSUFBTVUsS0FBSyxHQUFHRixNQUFNLENBQUVSLE9BQUYsQ0FBTixDQUNiVyxPQURhLENBQ0pKLFNBREksRUFFYkssUUFGYSxHQUdiQyxLQUhhLENBR04sR0FITSxDQUFkO0lBS0FILEtBQUssQ0FBRSxDQUFGLENBQUwsR0FBYUEsS0FBSyxDQUFFLENBQUYsQ0FBTCxDQUFXSSxPQUFYLENBQ1osdUJBRFksRUFFWlYsWUFGWSxDQUFiO0lBS0EsT0FBT00sS0FBSyxDQUFDSyxJQUFOLENBQVlWLFVBQVosQ0FBUDtFQUNBLENBN0JEO0FBOEJBOztBQUVEZCxnQkFBZ0IsQ0FBQ3lCLFNBQWpCLEdBQTZCQyxNQUFNLENBQUNDLE1BQVAsQ0FBZTlCLFVBQVUsQ0FBQzRCLFNBQTFCLENBQTdCO0FBRUEsaUVBQWV6QixnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvc2lnbmFsLmpzP2E1MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNDYWxjdWxhdGVkIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEJhc2VTaWduYWwsXHJcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge0NhbGN1bGF0ZWREYXRhfSBpbnB1dFxyXG4gKi9cclxuZnVuY3Rpb24gU2lnbmFsQ2FsY3VsYXRlZCgpIHtcclxuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCAgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcclxuXHRcdHJldHVybiBpc0NhbGN1bGF0ZWQoIG5vZGUgKTtcclxuXHR9O1xyXG5cdHRoaXMucnVuU2lnbmFsICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cdFx0bm9kZS52YWx1ZSAgICAgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC52aXNpYmxlVmFsTm9kZS50ZXh0Q29udGVudCA9IHRoaXMuY29udmVydFZhbHVlKCk7XHJcblx0fTtcclxuXHR0aGlzLmNvbnZlcnRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ICAgICAgc2VwVGhvdXNhbmRzLFxyXG5cdFx0XHQgICAgICBzZXBEZWNpbWFsLFxyXG5cdFx0XHQgICAgICB2YWx1ZVR5cGVQcm9wLFxyXG5cdFx0XHQgICAgICBwcmVjaXNpb24sXHJcblx0XHQgICAgICB9ID0gdGhpcy5pbnB1dDtcclxuXHJcblx0XHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuaW5wdXQudmFsdWU7XHJcblxyXG5cdFx0aWYgKCAnbnVtYmVyJyAhPT0gdmFsdWVUeXBlUHJvcCApIHtcclxuXHRcdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIE51bWJlciggY3VycmVudCApICkgKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHBhcnRzID0gTnVtYmVyKCBjdXJyZW50ICkuXHJcblx0XHRcdHRvRml4ZWQoIHByZWNpc2lvbiApLlxyXG5cdFx0XHR0b1N0cmluZygpLlxyXG5cdFx0XHRzcGxpdCggJy4nICk7XHJcblxyXG5cdFx0cGFydHNbIDAgXSA9IHBhcnRzWyAwIF0ucmVwbGFjZShcclxuXHRcdFx0L1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csXHJcblx0XHRcdHNlcFRob3VzYW5kcyxcclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIHBhcnRzLmpvaW4oIHNlcERlY2ltYWwgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TaWduYWxDYWxjdWxhdGVkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduYWxDYWxjdWxhdGVkOyJdLCJuYW1lcyI6WyJpc0NhbGN1bGF0ZWQiLCJCYXNlU2lnbmFsIiwid2luZG93IiwiSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCIsIlNpZ25hbENhbGN1bGF0ZWQiLCJjYWxsIiwiaXNTdXBwb3J0ZWQiLCJub2RlIiwiaW5wdXREYXRhIiwicnVuU2lnbmFsIiwiaW5wdXQiLCJub2RlcyIsInZhbHVlIiwiY3VycmVudCIsInZpc2libGVWYWxOb2RlIiwidGV4dENvbnRlbnQiLCJjb252ZXJ0VmFsdWUiLCJzZXBUaG91c2FuZHMiLCJzZXBEZWNpbWFsIiwidmFsdWVUeXBlUHJvcCIsInByZWNpc2lvbiIsIk51bWJlciIsImlzTmFOIiwicGFydHMiLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJzcGxpdCIsInJlcGxhY2UiLCJqb2luIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/calculated.field/signal.js\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/calculated.field/main.js");
/******/ 	
/******/ })()
;