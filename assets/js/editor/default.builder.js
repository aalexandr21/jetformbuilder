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

/***/ "./editor/form-block.js":
/*!******************************!*\
  !*** ./editor/form-block.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blocks/form-block/block.json */ \"../blocks-src/form-block/block.json\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nvar _ref = wp.blockEditor ? wp.blockEditor : wp.editor,\n  InspectorControls = _ref.InspectorControls,\n  useBlockProps = _ref.useBlockProps;\nvar _wp$components = wp.components,\n  PanelBody = _wp$components.PanelBody,\n  SelectControl = _wp$components.SelectControl,\n  TextControl = _wp$components.TextControl,\n  ToggleControl = _wp$components.ToggleControl;\nvar _wp = wp,\n  ServerSideRender = _wp.serverSideRender;\nvar uniqKey = function uniqKey(suffix) {\n  return \"\".concat(_blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.name, \"/\").concat(suffix);\n};\nfunction FormEdit(_ref2) {\n  var attributes = _ref2.attributes,\n    setAttributes = _ref2.setAttributes,\n    isSelected = _ref2.isSelected;\n  var localize = window.JetFormData;\n  var blockProps = useBlockProps();\n  return [isSelected && wp.element.createElement(InspectorControls, {\n    key: uniqKey('InspectorControls')\n  }, wp.element.createElement(PanelBody, {\n    title: __('Form Settings'),\n    key: uniqKey('PanelBody')\n  }, wp.element.createElement(SelectControl, {\n    key: \"form_id\",\n    label: __('Choose Form'),\n    labelposition: \"top\",\n    value: attributes.form_id,\n    onChange: function onChange(newValue) {\n      setAttributes({\n        form_id: Number(newValue)\n      });\n    },\n    options: localize.forms_list\n  }), Boolean(attributes.form_id) && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {\n    label: __('Fields Layout', 'jet-form-builder'),\n    value: attributes.fields_layout,\n    options: localize.fields_layout,\n    onChange: function onChange(fields_layout) {\n      return setAttributes({\n        fields_layout: fields_layout\n      });\n    }\n  }), wp.element.createElement(TextControl, {\n    label: __('Required Mark', 'jet-form-builder'),\n    value: attributes.required_mark,\n    onChange: function onChange(required_mark) {\n      return setAttributes({\n        required_mark: required_mark\n      });\n    }\n  }), wp.element.createElement(SelectControl, {\n    label: __('Fields label HTML tag', 'jet-form-builder'),\n    value: attributes.fields_label_tag,\n    options: localize.fields_label_tag,\n    onChange: function onChange(fields_label_tag) {\n      return setAttributes({\n        fields_label_tag: fields_label_tag\n      });\n    }\n  }), wp.element.createElement(SelectControl, {\n    label: __('Submit Type', 'jet-form-builder'),\n    value: attributes.submit_type,\n    options: localize.submit_type,\n    onChange: function onChange(submit_type) {\n      return setAttributes({\n        submit_type: submit_type\n      });\n    }\n  }), wp.element.createElement(ToggleControl, {\n    key: 'enable_progress',\n    label: __('Enable form pages progress', 'jet-form-builder'),\n    checked: attributes.enable_progress,\n    onChange: function onChange(newVal) {\n      setAttributes({\n        enable_progress: Boolean(newVal)\n      });\n    }\n  })))), wp.element.createElement(\"div\", _extends({\n    key: uniqKey('viewBlock')\n  }, blockProps), wp.element.createElement(ServerSideRender, {\n    block: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.name,\n    attributes: attributes,\n    httpMethod: 'POST'\n  }))];\n}\nregisterBlockType(_blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.name, _objectSpread(_objectSpread({}, _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__), {}, {\n  title: __('JetForm'),\n  icon: wp.element.createElement(\"span\", {\n    dangerouslySetInnerHTML: {\n      __html: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.icon\n    }\n  }),\n  attributes: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,\n  edit: FormEdit\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDYm1CLEdBQUcsRUFBRyxpQkFBbUI7SUFDekJFLEtBQUssRUFBR2pDLEVBQUUsQ0FBRSw0QkFBNEIsRUFBRSxrQkFBbUIsQ0FBRztJQUNoRWlELE9BQU8sRUFBRzNCLFVBQVUsQ0FBQzRCLGVBQWlCO0lBQ3RDYixRQUFRLEVBQUcsU0FBQUEsU0FBQWMsTUFBTSxFQUFJO01BQ3BCNUIsYUFBYSxDQUFFO1FBQUUyQixlQUFlLEVBQUVSLE9BQU8sQ0FBRVMsTUFBTztNQUFFLENBQUUsQ0FBQztJQUN4RDtFQUFHLENBQ0gsQ0FDYyxDQUNOLENBQ08sQ0FBQyxFQUNwQnJELEVBQUEsQ0FBQStCLE9BQUEsQ0FBQUMsYUFBQSxRQUFBc0IsUUFBQTtJQUFLckIsR0FBRyxFQUFHZixPQUFPLENBQUUsV0FBWTtFQUFHLEdBQU1ZLFVBQVUsR0FDbEQ5QixFQUFBLENBQUErQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2hCLGdCQUFnQjtJQUNoQnVDLEtBQUssRUFBR3pELCtEQUFlO0lBQ3ZCMEIsVUFBVSxFQUFHQSxVQUFZO0lBQ3pCZ0MsVUFBVSxFQUFHO0VBQVEsQ0FDckIsQ0FDRyxDQUFDLENBQ047QUFDRjtBQUVBekQsaUJBQWlCLENBQ2hCRCwrREFBYSxFQUFBMkQsYUFBQSxDQUFBQSxhQUFBLEtBRVQzRCwwREFBUTtFQUNYb0MsS0FBSyxFQUFFaEMsRUFBRSxDQUFFLFNBQVUsQ0FBQztFQUN0QndELElBQUksRUFBRTFELEVBQUEsQ0FBQStCLE9BQUEsQ0FBQUMsYUFBQTtJQUFNMkIsdUJBQXVCLEVBQUc7TUFBRUMsTUFBTSxFQUFFOUQsK0RBQWE0RDtJQUFDO0VBQUcsQ0FBTyxDQUFDO0VBQ3pFbEMsVUFBVSxFQUFFMUIscUVBQW1CO0VBQy9CK0QsSUFBSSxFQUFFdkM7QUFBUSxFQUVoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZWRpdG9yL2Zvcm0tYmxvY2suanM/ZDY1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvZm9ybS1ibG9jay9ibG9jay5qc29uXCJcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgcmVnaXN0ZXJCbG9ja1R5cGUsXHJcblx0ICB9ID0gd3AuYmxvY2tzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgSW5zcGVjdG9yQ29udHJvbHMsXHJcblx0XHQgIHVzZUJsb2NrUHJvcHMsXHJcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgUGFuZWxCb2R5LFxyXG5cdFx0ICBTZWxlY3RDb250cm9sLFxyXG5cdFx0ICBUZXh0Q29udHJvbCxcclxuXHRcdCAgVG9nZ2xlQ29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBzZXJ2ZXJTaWRlUmVuZGVyOiBTZXJ2ZXJTaWRlUmVuZGVyLFxyXG5cdCAgfSA9IHdwO1xyXG5cclxuY29uc3QgdW5pcUtleSA9IHN1ZmZpeCA9PiBgJHsgbWV0YWRhdGEubmFtZSB9LyR7IHN1ZmZpeCB9YDtcclxuXHJcbmZ1bmN0aW9uIEZvcm1FZGl0KCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcclxuXHJcblx0Y29uc3QgbG9jYWxpemUgPSB3aW5kb3cuSmV0Rm9ybURhdGE7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxQYW5lbEJvZHlcclxuXHRcdFx0XHR0aXRsZT17IF9fKCAnRm9ybSBTZXR0aW5ncycgKSB9XHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BhbmVsQm9keScgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdmb3JtX2lkJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Nob29zZSBGb3JtJyApIH1cclxuXHRcdFx0XHRcdGxhYmVscG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mb3JtX2lkIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZvcm1faWQ6IE51bWJlciggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBsb2NhbGl6ZS5mb3Jtc19saXN0IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgQm9vbGVhbiggYXR0cmlidXRlcy5mb3JtX2lkICkgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0ZpZWxkcyBMYXlvdXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5maWVsZHNfbGF5b3V0IH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGxvY2FsaXplLmZpZWxkc19sYXlvdXQgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGZpZWxkc19sYXlvdXQgPT4gc2V0QXR0cmlidXRlcyggeyBmaWVsZHNfbGF5b3V0IH0gKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdSZXF1aXJlZCBNYXJrJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucmVxdWlyZWRfbWFyayB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgcmVxdWlyZWRfbWFyayA9PiBzZXRBdHRyaWJ1dGVzKCB7IHJlcXVpcmVkX21hcmsgfSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRmllbGRzIGxhYmVsIEhUTUwgdGFnJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmllbGRzX2xhYmVsX3RhZyB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBsb2NhbGl6ZS5maWVsZHNfbGFiZWxfdGFnIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBmaWVsZHNfbGFiZWxfdGFnID0+IHNldEF0dHJpYnV0ZXMoIHsgZmllbGRzX2xhYmVsX3RhZyB9ICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTdWJtaXQgVHlwZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnN1Ym1pdF90eXBlIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGxvY2FsaXplLnN1Ym1pdF90eXBlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzdWJtaXRfdHlwZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN1Ym1pdF90eXBlIH0gKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ2VuYWJsZV9wcm9ncmVzcycgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRW5hYmxlIGZvcm0gcGFnZXMgcHJvZ3Jlc3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmVuYWJsZV9wcm9ncmVzcyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGVuYWJsZV9wcm9ncmVzczogQm9vbGVhbiggbmV3VmFsICkgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0XHQ8L1BhbmVsQm9keT5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XHJcblx0XHRcdDxTZXJ2ZXJTaWRlUmVuZGVyXHJcblx0XHRcdFx0YmxvY2s9eyBtZXRhZGF0YS5uYW1lIH1cclxuXHRcdFx0XHRhdHRyaWJ1dGVzPXsgYXR0cmlidXRlcyB9XHJcblx0XHRcdFx0aHR0cE1ldGhvZD17ICdQT1NUJyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj4sXHJcblx0XTtcclxufVxyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoXHJcblx0bWV0YWRhdGEubmFtZSxcclxuXHR7XHJcblx0XHQuLi5tZXRhZGF0YSxcclxuXHRcdHRpdGxlOiBfXyggJ0pldEZvcm0nICksXHJcblx0XHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBtZXRhZGF0YS5pY29uIH0gfT48L3NwYW4+LFxyXG5cdFx0YXR0cmlidXRlczogbWV0YWRhdGEuYXR0cmlidXRlcyxcclxuXHRcdGVkaXQ6IEZvcm1FZGl0LFxyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbIm1ldGFkYXRhIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJ3cCIsImJsb2NrcyIsIl9fIiwiaTE4biIsIl9yZWYiLCJibG9ja0VkaXRvciIsImVkaXRvciIsIkluc3BlY3RvckNvbnRyb2xzIiwidXNlQmxvY2tQcm9wcyIsIl93cCRjb21wb25lbnRzIiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlNlbGVjdENvbnRyb2wiLCJUZXh0Q29udHJvbCIsIlRvZ2dsZUNvbnRyb2wiLCJfd3AiLCJTZXJ2ZXJTaWRlUmVuZGVyIiwic2VydmVyU2lkZVJlbmRlciIsInVuaXFLZXkiLCJzdWZmaXgiLCJjb25jYXQiLCJuYW1lIiwiRm9ybUVkaXQiLCJfcmVmMiIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGVzIiwiaXNTZWxlY3RlZCIsImxvY2FsaXplIiwid2luZG93IiwiSmV0Rm9ybURhdGEiLCJibG9ja1Byb3BzIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJ0aXRsZSIsImxhYmVsIiwibGFiZWxwb3NpdGlvbiIsInZhbHVlIiwiZm9ybV9pZCIsIm9uQ2hhbmdlIiwibmV3VmFsdWUiLCJOdW1iZXIiLCJvcHRpb25zIiwiZm9ybXNfbGlzdCIsIkJvb2xlYW4iLCJSZWFjdCIsIkZyYWdtZW50IiwiZmllbGRzX2xheW91dCIsInJlcXVpcmVkX21hcmsiLCJmaWVsZHNfbGFiZWxfdGFnIiwic3VibWl0X3R5cGUiLCJjaGVja2VkIiwiZW5hYmxlX3Byb2dyZXNzIiwibmV3VmFsIiwiX2V4dGVuZHMiLCJibG9jayIsImh0dHBNZXRob2QiLCJfb2JqZWN0U3ByZWFkIiwiaWNvbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZWRpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/form-block.js\n");

/***/ }),

/***/ "../blocks-src/form-block/block.json":
/*!*******************************************!*\
  !*** ../blocks-src/form-block/block.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"jet-forms/form-block","title":"JetForm","keywords":["jetform","form","builder","crocoblock"],"textdomain":"jet-form-builder","supports":{"html":false,"anchor":true},"editorScript":"jet-form-builder/form","editorStyle":"jet-form-builder-others","category":"layout","icon":"<svg width=\\"36\\" height=\\"48\\" viewBox=\\"0 0 36 48\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M9 10C7.34315 10 6 11.3431 6 13C6 14.6569 7.34315 16 9 16H27C28.6569 16 30 14.6569 30 13C30 11.3431 28.6569 10 27 10H9ZM8 13C8 12.4477 8.44772 12 9 12H27C27.5523 12 28 12.4477 28 13C28 13.5523 27.5523 14 27 14H9C8.44772 14 8 13.5523 8 13Z\\" fill=\\"black\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M27 24C28.6569 24 30 25.3431 30 27C30 28.6569 28.6569 30 27 30H9C7.34315 30 6 28.6569 6 27C6 25.3431 7.34315 24 9 24H27ZM9 26C8.44772 26 8 26.4477 8 27C8 27.5523 8.44772 28 9 28H27C27.5523 28 28 27.5523 28 27C28 26.4477 27.5523 26 27 26H9Z\\" fill=\\"black\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M17 34H9C7.34315 34 6 35.3431 6 37C6 38.6569 7.34315 40 9 40H17C18.6569 40 20 38.6569 20 37C20 35.3431 18.6569 34 17 34ZM8 37C8 36.4477 8.44772 36 9 36H17C17.5523 36 18 36.4477 18 37C18 37.5523 17.5523 38 17 38H9C8.44772 38 8 37.5523 8 37Z\\" fill=\\"black\\"/>\\n<path d=\\"M6.5 7C6.5 6.44772 6.94772 6 7.5 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H7.5C6.94772 8 6.5 7.55228 6.5 7Z\\" fill=\\"black\\"/>\\n<path d=\\"M7.5 20C6.94772 20 6.5 20.4477 6.5 21C6.5 21.5523 6.94772 22 7.5 22H17C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20H7.5Z\\" fill=\\"black\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 4C0 1.79086 1.79086 0 4 0H32C34.2091 0 36 1.79086 36 4V44C36 46.2091 34.2091 48 32 48H4C1.79086 48 0 46.2091 0 44V4ZM4 2H32C33.1046 2 34 2.89543 34 4V44C34 45.1046 33.1046 46 32 46H4C2.89543 46 2 45.1046 2 44V4C2 2.89543 2.89543 2 4 2Z\\" fill=\\"black\\"/>\\n</svg>","attributes":{"form_id":{"type":"number","default":0},"submit_type":{"type":"string","default":""},"required_mark":{"type":"string","default":""},"fields_layout":{"type":"string","default":""},"enable_progress":{"type":"boolean","default":false},"fields_label_tag":{"type":"string","default":""},"anchor":{"type":"string","default":""},"isPreview":{"type":"boolean","default":false}}}');

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
/******/ 	var __webpack_exports__ = __webpack_require__("./editor/form-block.js");
/******/ 	
/******/ })()
;