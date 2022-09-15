(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./classes/errors.ts":
/*!***************************!*\
  !*** ./classes/errors.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorCode": function() { return /* binding */ ErrorCode; }
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ErrorCode;

(function (ErrorCode) {
  ErrorCode[ErrorCode["OK"] = 0] = "OK";
  ErrorCode[ErrorCode["DATA_TYPE_ERROR"] = 1] = "DATA_TYPE_ERROR";
  ErrorCode[ErrorCode["STATE_ARRAY_EXPECTED"] = 2] = "STATE_ARRAY_EXPECTED";
  ErrorCode[ErrorCode["STATE_OBJECT_EXPECTED"] = 3] = "STATE_OBJECT_EXPECTED";
})(ErrorCode || (ErrorCode = {}));

class FormDataError extends Error {
  constructor(errorCode, extraData) {
    super(FormDataError.printMessage(errorCode, extraData ? extraData : []));
  }

  static printMessage(errorCode, extraData) {
    let errorMessage = "This's a new error";
    FormDataError.extraData = extraData;

    switch (errorCode) {
      case ErrorCode.OK:
        errorMessage = "All's okey";
        break;

      case ErrorCode.DATA_TYPE_ERROR:
        errorMessage = "Data type error. Expected % in value, but was receibed %";
        break;

      case ErrorCode.STATE_OBJECT_EXPECTED:
        errorMessage = "The state isn't an object";
        break;

      case ErrorCode.STATE_ARRAY_EXPECTED:
        errorMessage = "Expected Array as state, but receibed %";
        break;
    }

    errorMessage = FormDataError.formatMessage(errorMessage);
    return errorMessage;
  }

  static formatMessage(errorMessage) {
    let protoErrorMessage = errorMessage.split('%');
    let realMessage = '';
    protoErrorMessage.pop();

    for (let index = 0; index < protoErrorMessage.length; index++) {
      realMessage += protoErrorMessage[index] + this.extraData[index];
    }

    return realMessage;
  }

}

_defineProperty(FormDataError, "extraData", void 0);

/* harmony default export */ __webpack_exports__["default"] = (FormDataError);


/***/ }),

/***/ "./classes/form.ts":
/*!*************************!*\
  !*** ./classes/form.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormSchema; }
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class FormSchema {
  constructor() {
    _defineProperty(this, "title", 'New Form');

    _defineProperty(this, "description", 'This is a formulary');
  }

}

/***/ }),

/***/ "./components/forms/input-radio/index.tsx":
/*!************************************************!*\
  !*** ./components/forms/input-radio/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_icons_trash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/icons/trash */ "./public/icons/trash.tsx");
/* harmony import */ var _input_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-text */ "./components/forms/input-text/index.tsx");
/* harmony import */ var _input_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-radio */ "./components/forms/input-radio/input-radio.tsx");

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\components\\forms\\input-radio\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const InputRadio = props => {
  const {
    0: selected,
    1: setSelect
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.isSelected);
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.value);

  const handleRadioClick = event => {
    setSelect(!selected);
    props.onClickRadio(props.index, value, 'answer');
  };

  const updateValue = (value, name) => {
    setValue(value);
    props.onChangeValue(props.index, value, 'value');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input_radio__WEBPACK_IMPORTED_MODULE_4__.InputRadioContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input_radio__WEBPACK_IMPORTED_MODULE_4__.InputRadioDesign, _objectSpread(_objectSpread({}, props), {}, {
      onClick: handleRadioClick,
      isSelected: selected
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input_text__WEBPACK_IMPORTED_MODULE_3__.default, {
      name: props.name,
      placeholder: "Respuesta",
      value: value,
      onChangeValue: updateValue
    }, 'input', false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_trash__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (InputRadio);

/***/ }),

/***/ "./components/forms/input-radio/input-radio.tsx":
/*!******************************************************!*\
  !*** ./components/forms/input-radio/input-radio.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputRadioContainer": function() { return /* binding */ InputRadioContainer; },
/* harmony export */   "InputRadioDesign": function() { return /* binding */ InputRadioDesign; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/constants */ "./public/constants.ts");


const InputRadioDesign = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display : block;
    width : 40px;
    height : 40px;
    border-radius : 20px;
    background-color : ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.secondColor};
    border : 2px solid ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor};
    position : relative;
    &:after {
        content : '';
        position : absolute;
        width : 80%;
        height : 80%;
        background-color : ${props => props.isSelected ? _public_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor : 'transparent'};
        border-radius : 50%;
        top : 3.5px;
        left : 3.5px;
        transition : all 0.3s;
    }
`;
const InputRadioContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    margin : 5px;
    display : grid;
    grid-template-columns : 50px calc( 100% - 90px ) 50px;
`;


/***/ }),

/***/ "./components/forms/input-text/index.tsx":
/*!***********************************************!*\
  !*** ./components/forms/input-text/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-text */ "./components/forms/input-text/input-text.tsx");

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\components\\forms\\input-text\\index.tsx";



const InputText = props => {
  const {
    0: currentValue,
    1: setCurrentValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.value);

  const updateCurrentValue = event => {
    const value = event.currentTarget.value;
    setCurrentValue(value);
    props.onChangeValue(value, props.name);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input_text__WEBPACK_IMPORTED_MODULE_2__.InputTextLabelDesign, {
    htmlFor: props.name,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input_text__WEBPACK_IMPORTED_MODULE_2__.InputTextDesign, {
      name: props.name,
      id: props.name,
      placeholder: props.placeholder,
      multiple: props.multiple,
      bold: props.bold,
      value: currentValue,
      onInput: updateCurrentValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (InputText);

/***/ }),

/***/ "./components/forms/input-text/input-text.tsx":
/*!****************************************************!*\
  !*** ./components/forms/input-text/input-text.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputTextDesign": function() { return /* binding */ InputTextDesign; },
/* harmony export */   "InputTextLabelDesign": function() { return /* binding */ InputTextLabelDesign; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/constants */ "./public/constants.ts");


const InputTextDesign = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.attrs(props => ({
  type: 'text'
}))`
    position : absolute;
    display : block; 
    top: 0;
    left : 0;
    border : none;
    background-color : ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.secondColor};
    outline : none;
    height : 100%;
    width : 100%;
    font-size : 1.2em;
    font-weight :  ${props => props.bold ? 'bold' : 'normal'};
    color : ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor};
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor};
    }
`;
const InputTextLabelDesign = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().label)`
    position : relative;
    display : grid;
    width : 100%;
    height : 40px ;
    margin-bottom : 10px;
    background-color : ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.secondColor};
    &:after {
        content : '';
        position : absolute; 
        width : 100%;
        height : 2px;
        top : calc( 98% - 2px );
        left : 0;
        border-radius : 2px;
        background-color: ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor};
    }
`;


/***/ }),

/***/ "./components/forms/input-true-false/index.tsx":
/*!*****************************************************!*\
  !*** ./components/forms/input-true-false/index.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_icons_trash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/icons/trash */ "./public/icons/trash.tsx");
/* harmony import */ var _input_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-text */ "./components/forms/input-text/index.tsx");
/* harmony import */ var _input_true_false__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-true-false */ "./components/forms/input-true-false/input-true-false.tsx");

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\components\\forms\\input-true-false\\index.tsx";





const InputTrueFalse = () => {
  const {
    0: currentValue,
    1: setCurrentValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const updateCurrentValue = () => {
    setCurrentValue(!currentValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input_true_false__WEBPACK_IMPORTED_MODULE_4__.InputTrueFalseContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input_true_false__WEBPACK_IMPORTED_MODULE_4__.InputTrueFalseDesign, {
      className: currentValue ? 'selected' : '',
      onClick: updateCurrentValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input_text__WEBPACK_IMPORTED_MODULE_3__.default, {
      name: "Nombre",
      placeholder: "Respuesta",
      value: "",
      onChangeValue: (val, name) => {
        console.log(name, val);
      }
    }, 'input', false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_trash__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (InputTrueFalse);

/***/ }),

/***/ "./components/forms/input-true-false/input-true-false.tsx":
/*!****************************************************************!*\
  !*** ./components/forms/input-true-false/input-true-false.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputTrueFalseContainer": function() { return /* binding */ InputTrueFalseContainer; },
/* harmony export */   "InputTrueFalseDesign": function() { return /* binding */ InputTrueFalseDesign; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/constants */ "./public/constants.ts");


const InputTrueFalseDesign = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    width : 100px;
    height : 50px;
    background-color : ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.secondColor};
    border : 2px solid ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor};
    border-radius : 50px;
    position : relative;
    transition : all 0.5s;
    &:after {
        content : '';
        position : absolute;
        width : 36px;
        height : 36px;
        background-color : ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor};
        border-radius: 50%;
        top : 5px;
        left : 5px;
        transition : all 0.3s;
    }
    &.selected {
        background-color : ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor};
        border : 2px solid ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.secondColor};
        &:after{
            left : calc( 100% - 43px );
            background-color : ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.secondColor};
        }
    }
`;
const InputTrueFalseContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    margin : 5px;
    width : 100%;
    display : grid;
    grid-template-columns : 110px calc( 100% - 160px ) 50px;
`;


/***/ }),

/***/ "./components/questions/question-driver/index.tsx":
/*!********************************************************!*\
  !*** ./components/questions/question-driver/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/questions */ "./interfaces/questions.ts");
/* harmony import */ var _question_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question-radio */ "./components/questions/question-radio/index.tsx");
/* harmony import */ var _question_short__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question-short */ "./components/questions/question-short/index.tsx");
/* harmony import */ var _question_true_false__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question-true-false */ "./components/questions/question-true-false/index.tsx");

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\components\\questions\\question-driver\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const DrawQuestion = props => {
  let Component = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }, undefined);

  switch (props.type) {
    case _interfaces_questions__WEBPACK_IMPORTED_MODULE_2__.questionTypes.short:
      Component = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question_short__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }, undefined);
      break;

    case _interfaces_questions__WEBPACK_IMPORTED_MODULE_2__.questionTypes.radio:
      Component = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question_radio__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }, undefined);
      break;

    case _interfaces_questions__WEBPACK_IMPORTED_MODULE_2__.questionTypes.trueFalse:
      Component = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question_true_false__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }, undefined);
      break;
  }

  return Component;
};

/* harmony default export */ __webpack_exports__["default"] = (DrawQuestion);

/***/ }),

/***/ "./components/questions/question-radio/index.tsx":
/*!*******************************************************!*\
  !*** ./components/questions/question-radio/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_icons_plus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/icons/plus */ "./public/icons/plus.tsx");
/* harmony import */ var _forms_input_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/input-radio */ "./components/forms/input-radio/index.tsx");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question */ "./components/questions/question/index.tsx");
/* harmony import */ var _question_question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question/question */ "./components/questions/question/question.tsx");
/* harmony import */ var _hooks_useObjectState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useObjectState */ "./hooks/useObjectState.tsx");
/* harmony import */ var _hooks_useUpdateArrayObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useUpdateArrayObject */ "./hooks/useUpdateArrayObject.tsx");
/* harmony import */ var react_sortablejs_typescript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-sortablejs-typescript */ "react-sortablejs-typescript");
/* harmony import */ var react_sortablejs_typescript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_sortablejs_typescript__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\components\\questions\\question-radio\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const QuestionRadio = props => {
  const [state, updateState, setState] = (0,_hooks_useObjectState__WEBPACK_IMPORTED_MODULE_6__.default)({
    answer: '',
    title: '',
    options: [{
      isSelected: true,
      value: '',
      id: 'qri0'
    }, {
      isSelected: false,
      value: '',
      id: 'qri1'
    }]
  }, {
    onUpdate: props.onChangeQuestion,
    access: props.access,
    index: props.index
  });
  const {
    0: update,
    1: setUpdate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const changeInputValue = (index, value, name) => {
    let provisionalState = state;
    provisionalState.options = (0,_hooks_useUpdateArrayObject__WEBPACK_IMPORTED_MODULE_7__.default)(state.options, index, value, name);
    setState(provisionalState);
  };

  const changeAnswer = (index, value, name) => {
    changeInputValue(index, true, 'isSelected');
    updateState(value, name);
  };

  const appendRadio = () => {
    setUpdate(false);
    let provisionalState = state;
    provisionalState.options.push({
      isSelected: false,
      value: '',
      id: `qri${state.options.length}`
    });
    setState(provisionalState);
    setTimeout(() => {
      setUpdate(true);
    }, 100);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question__WEBPACK_IMPORTED_MODULE_4__.default, {
    onChangeTitle: updateState,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sortablejs_typescript__WEBPACK_IMPORTED_MODULE_8__.ReactSortable, {
      list: state.options,
      setList: newValue => {
        console.log(newValue);
      },
      children: state.options.map((radio, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forms_input_radio__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({
        name: "answer",
        onChangeValue: changeInputValue,
        onClickRadio: changeAnswer,
        index: index
      }, radio), `question-radio-${index}`, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question_question__WEBPACK_IMPORTED_MODULE_5__.PlusIconContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_plus__WEBPACK_IMPORTED_MODULE_2__.default, {
        onClick: appendRadio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionRadio);

/***/ }),

/***/ "./components/questions/question-short/index.tsx":
/*!*******************************************************!*\
  !*** ./components/questions/question-short/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useObjectState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useObjectState */ "./hooks/useObjectState.tsx");
/* harmony import */ var _forms_input_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/input-text */ "./components/forms/input-text/index.tsx");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question */ "./components/questions/question/index.tsx");

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\components\\questions\\question-short\\index.tsx";





const QuestionShort = props => {
  const [state, updateState] = (0,_hooks_useObjectState__WEBPACK_IMPORTED_MODULE_2__.default)({
    title: '',
    answer: '',
    keywords: []
  }, {
    onUpdate: props.onChangeQuestion,
    access: props.access,
    index: props.index
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question__WEBPACK_IMPORTED_MODULE_4__.default, {
    onChangeTitle: updateState,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forms_input_text__WEBPACK_IMPORTED_MODULE_3__.default, {
      name: "answer",
      placeholder: "Respuesta",
      value: state.answer,
      onChangeValue: updateState
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionShort);

/***/ }),

/***/ "./components/questions/question-true-false/index.tsx":
/*!************************************************************!*\
  !*** ./components/questions/question-true-false/index.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../question */ "./components/questions/question/index.tsx");
/* harmony import */ var _forms_input_true_false__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/input-true-false */ "./components/forms/input-true-false/index.tsx");
/* harmony import */ var _question_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question/question */ "./components/questions/question/question.tsx");
/* harmony import */ var _public_icons_plus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/icons/plus */ "./public/icons/plus.tsx");

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\components\\questions\\question-true-false\\index.tsx";





const QuestionTrueFalse = () => {
  const InputHandler = () => {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question__WEBPACK_IMPORTED_MODULE_1__.default, {
    onChangeTitle: InputHandler,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forms_input_true_false__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forms_input_true_false__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question_question__WEBPACK_IMPORTED_MODULE_3__.PlusIconContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_plus__WEBPACK_IMPORTED_MODULE_4__.default, {
        onClick: () => {}
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionTrueFalse);

/***/ }),

/***/ "./components/questions/question/index.tsx":
/*!*************************************************!*\
  !*** ./components/questions/question/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ "./components/questions/question/question.tsx");
/* harmony import */ var _forms_input_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/input-text */ "./components/forms/input-text/index.tsx");

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\components\\questions\\question\\index.tsx";




const Question = props => {
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const onChangeTitle = (value, name) => {
    setTitle(value);
    props.onChangeTitle(value, name);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question__WEBPACK_IMPORTED_MODULE_2__.QuestionDesign, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forms_input_text__WEBPACK_IMPORTED_MODULE_3__.default, {
      placeholder: props.placeholder ? props.placeholder : 'Titulo de pregunta',
      name: "title",
      bold: true,
      value: title,
      onChangeValue: onChangeTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./components/questions/question/question.tsx":
/*!****************************************************!*\
  !*** ./components/questions/question/question.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionDesign": function() { return /* binding */ QuestionDesign; },
/* harmony export */   "PlusIconContainer": function() { return /* binding */ PlusIconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/constants */ "./public/constants.ts");


const QuestionDesign = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.attrs(() => ({
  bgColor: _public_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor,
  bgSColor: _public_constants__WEBPACK_IMPORTED_MODULE_1__.secondColor
}))`
    background-color : ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.secondColor};
    border : none;
    border-radius : 10px;
    padding : 10px;
    margin : 10px 0;
    box-shadow : 3px 3px 6px ${_public_constants__WEBPACK_IMPORTED_MODULE_1__.shadowColor};
    min-height : 100px;
    width : 100%;
    @media ( min-width : 950px ){
        width : 900px;
    }
`;
const PlusIconContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display : flex;
    justify-content : center;
`;


/***/ }),

/***/ "./hooks/useArrayObjectState.tsx":
/*!***************************************!*\
  !*** ./hooks/useArrayObjectState.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdateArrayObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdateArrayObject */ "./hooks/useUpdateArrayObject.tsx");



function useArrayObjectState(initialValue) {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);

  const updateState = (index, value, name) => {
    setState((0,_useUpdateArrayObject__WEBPACK_IMPORTED_MODULE_1__.default)(state, index, value, name));
  };

  return [state, setState, updateState];
}

/* harmony default export */ __webpack_exports__["default"] = (useArrayObjectState);

/***/ }),

/***/ "./hooks/useObjectState.tsx":
/*!**********************************!*\
  !*** ./hooks/useObjectState.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/errors */ "./classes/errors.ts");



function useObjectState(initialValue, config) {
  const {
    0: state,
    1: changeState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);

  const updateState = (value, name) => {
    if (typeof state === 'object') {
      if (typeof value === typeof state[name]) {
        let provisionalState = state;
        provisionalState[name] = value;
        setState(provisionalState);
        executeOnUpdate(provisionalState);
      } else throw new _classes_errors__WEBPACK_IMPORTED_MODULE_1__.default(_classes_errors__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.DATA_TYPE_ERROR, [`${typeof state[name]}`, `${typeof value}`]);
    } else throw new _classes_errors__WEBPACK_IMPORTED_MODULE_1__.default(_classes_errors__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.STATE_OBJECT_EXPECTED);
  };

  const setState = newState => {
    changeState(newState);
    executeOnUpdate(newState);
  };

  const executeOnUpdate = state => {
    config ? config.onUpdate(config.index, state, config.access) : () => {};
  };

  return [state, updateState, setState];
}

/* harmony default export */ __webpack_exports__["default"] = (useObjectState);

/***/ }),

/***/ "./hooks/useUpdateArrayObject.tsx":
/*!****************************************!*\
  !*** ./hooks/useUpdateArrayObject.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/errors */ "./classes/errors.ts");


function useUpdateArrayObject(currentValue, index, value, name) {
  let updatedValue = currentValue;
  console.log(updatedValue, index, value, name);

  if (Array.isArray(currentValue)) {
    if (typeof value === typeof currentValue[index][name]) {
      updatedValue[index][name] = value;
      console.log(updatedValue);
    } else throw new _classes_errors__WEBPACK_IMPORTED_MODULE_0__.default(_classes_errors__WEBPACK_IMPORTED_MODULE_0__.ErrorCode.DATA_TYPE_ERROR, [`${typeof currentValue[index][name]}`, `${typeof value}`]);
  } else throw new _classes_errors__WEBPACK_IMPORTED_MODULE_0__.default(_classes_errors__WEBPACK_IMPORTED_MODULE_0__.ErrorCode.STATE_ARRAY_EXPECTED);

  return updatedValue;
}

/* harmony default export */ __webpack_exports__["default"] = (useUpdateArrayObject);

/***/ }),

/***/ "./interfaces/questions.ts":
/*!*********************************!*\
  !*** ./interfaces/questions.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "questionTypes": function() { return /* binding */ questionTypes; }
/* harmony export */ });
var questionTypes;

(function (questionTypes) {
  questionTypes[questionTypes["short"] = 0] = "short";
  questionTypes[questionTypes["radio"] = 1] = "radio";
  questionTypes[questionTypes["trueFalse"] = 2] = "trueFalse";
})(questionTypes || (questionTypes = {}));



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sortablejs_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sortablejs-typescript */ "react-sortablejs-typescript");
/* harmony import */ var react_sortablejs_typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sortablejs_typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/form */ "./classes/form.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useArrayObjectState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useArrayObjectState */ "./hooks/useArrayObjectState.tsx");
/* harmony import */ var _interfaces_questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interfaces/questions */ "./interfaces/questions.ts");
/* harmony import */ var _components_questions_question_driver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/questions/question-driver */ "./components/questions/question-driver/index.tsx");

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const formSchema = new _classes_form__WEBPACK_IMPORTED_MODULE_2__.default();
const FormBodyDesign = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().main)`
    display : block;   
    background-color: red;
    padding : 10px 2.5%; 
    @media ( min-width : 600px ) {
        padding : 10px 25px;
    }
    @media ( min-width : 950px ) { 
        padding : 10px calc( calc( 100% - 900px ) / 2 );
    }
`;
function Home() {
  const [state, setState, updateState] = (0,_hooks_useArrayObjectState__WEBPACK_IMPORTED_MODULE_4__.default)([{
    id: 'key',
    type: _interfaces_questions__WEBPACK_IMPORTED_MODULE_5__.questionTypes.short,
    name: 'sh1',
    details: {}
  }, {
    id: 'r1',
    type: _interfaces_questions__WEBPACK_IMPORTED_MODULE_5__.questionTypes.radio,
    name: 'r1',
    details: {}
  }, {
    id: 'tf1',
    type: _interfaces_questions__WEBPACK_IMPORTED_MODULE_5__.questionTypes.trueFalse,
    name: 'tf1',
    details: {}
  }]);

  const FormBody = props => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormBodyDesign, {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: formSchema.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormBody, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sortablejs_typescript__WEBPACK_IMPORTED_MODULE_1__.ReactSortable, {
        list: state,
        setList: setState,
        children: state.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_questions_question_driver__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread({
            index: index,
            access: "details",
            onChangeQuestion: updateState
          }, item), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 32
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./public/constants.ts":
/*!*****************************!*\
  !*** ./public/constants.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainColor": function() { return /* binding */ mainColor; },
/* harmony export */   "secondColor": function() { return /* binding */ secondColor; },
/* harmony export */   "lightColor": function() { return /* binding */ lightColor; },
/* harmony export */   "darkColor": function() { return /* binding */ darkColor; },
/* harmony export */   "shadowColor": function() { return /* binding */ shadowColor; },
/* harmony export */   "design": function() { return /* binding */ design; }
/* harmony export */ });
const mainColor = '#9D23C2';
const secondColor = '#F7DEFF';
const lightColor = '#FFFFFF';
const darkColor = '#2A2A2A';
const shadowColor = '#000000aa';

var design;

(function (design) {
  design[design["dark"] = 0] = "dark";
  design[design["light"] = 1] = "light";
})(design || (design = {}));



/***/ }),

/***/ "./public/icons/icon.tsx":
/*!*******************************!*\
  !*** ./public/icons/icon.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./public/constants.ts");


const Icon = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().i)`
    display : flex;
    width : 45px;
    height : 45px;
    align-items : center;
    justify-items : center;
    justify-content : center; 
    border-radius : 50px;
    &.border{
        border : 2px solid ${_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor};
    }
    &:hover{
        transition : all 0.3s;
        background-color : ${_constants__WEBPACK_IMPORTED_MODULE_1__.mainColor};
        & > .cts path {
            transition : all 0.3s;
            fill : ${_constants__WEBPACK_IMPORTED_MODULE_1__.secondColor};
        }
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./public/icons/plus.tsx":
/*!*******************************!*\
  !*** ./public/icons/plus.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./public/constants.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./public/icons/icon.tsx");

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\public\\icons\\plus.tsx";



const PlusIcon = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "border",
    onClick: props.onClick,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "plus",
      className: "svg-inline--fa fa-plus fa-w-14  cts",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      height: "30",
      width: "30",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        fill: _constants__WEBPACK_IMPORTED_MODULE_1__.mainColor,
        d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PlusIcon);

/***/ }),

/***/ "./public/icons/trash.tsx":
/*!********************************!*\
  !*** ./public/icons/trash.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./public/constants.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./public/icons/icon.tsx");

var _jsxFileName = "C:\\Users\\btell\\OneDrive\\Escritorio\\Archivos\\Programas\\forms-builder\\forms-builder\\public\\icons\\trash.tsx";



const TrashIcon = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "trash",
      className: "svg-inline--fa fa-trash fa-w-14 cts",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      height: "30",
      width: "30",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        fill: _constants__WEBPACK_IMPORTED_MODULE_1__.mainColor,
        d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TrashIcon);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-sortablejs-typescript":
/*!**********************************************!*\
  !*** external "react-sortablejs-typescript" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-sortablejs-typescript");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3Jtcy1idWlsZGVyLy4vY2xhc3Nlcy9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vZm9ybXMtYnVpbGRlci8uL2NsYXNzZXMvZm9ybS50cyIsIndlYnBhY2s6Ly9mb3Jtcy1idWlsZGVyLy4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dC1yYWRpby9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZm9ybXMtYnVpbGRlci8uL2NvbXBvbmVudHMvZm9ybXMvaW5wdXQtcmFkaW8vaW5wdXQtcmFkaW8udHN4Iiwid2VicGFjazovL2Zvcm1zLWJ1aWxkZXIvLi9jb21wb25lbnRzL2Zvcm1zL2lucHV0LXRleHQvaW5kZXgudHN4Iiwid2VicGFjazovL2Zvcm1zLWJ1aWxkZXIvLi9jb21wb25lbnRzL2Zvcm1zL2lucHV0LXRleHQvaW5wdXQtdGV4dC50c3giLCJ3ZWJwYWNrOi8vZm9ybXMtYnVpbGRlci8uL2NvbXBvbmVudHMvZm9ybXMvaW5wdXQtdHJ1ZS1mYWxzZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZm9ybXMtYnVpbGRlci8uL2NvbXBvbmVudHMvZm9ybXMvaW5wdXQtdHJ1ZS1mYWxzZS9pbnB1dC10cnVlLWZhbHNlLnRzeCIsIndlYnBhY2s6Ly9mb3Jtcy1idWlsZGVyLy4vY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb24tZHJpdmVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mb3Jtcy1idWlsZGVyLy4vY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb24tcmFkaW8vaW5kZXgudHN4Iiwid2VicGFjazovL2Zvcm1zLWJ1aWxkZXIvLi9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbi1zaG9ydC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZm9ybXMtYnVpbGRlci8uL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9uLXRydWUtZmFsc2UvaW5kZXgudHN4Iiwid2VicGFjazovL2Zvcm1zLWJ1aWxkZXIvLi9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZm9ybXMtYnVpbGRlci8uL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9uL3F1ZXN0aW9uLnRzeCIsIndlYnBhY2s6Ly9mb3Jtcy1idWlsZGVyLy4vaG9va3MvdXNlQXJyYXlPYmplY3RTdGF0ZS50c3giLCJ3ZWJwYWNrOi8vZm9ybXMtYnVpbGRlci8uL2hvb2tzL3VzZU9iamVjdFN0YXRlLnRzeCIsIndlYnBhY2s6Ly9mb3Jtcy1idWlsZGVyLy4vaG9va3MvdXNlVXBkYXRlQXJyYXlPYmplY3QudHN4Iiwid2VicGFjazovL2Zvcm1zLWJ1aWxkZXIvLi9pbnRlcmZhY2VzL3F1ZXN0aW9ucy50cyIsIndlYnBhY2s6Ly9mb3Jtcy1idWlsZGVyLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2Zvcm1zLWJ1aWxkZXIvLi9wdWJsaWMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2Zvcm1zLWJ1aWxkZXIvLi9wdWJsaWMvaWNvbnMvaWNvbi50c3giLCJ3ZWJwYWNrOi8vZm9ybXMtYnVpbGRlci8uL3B1YmxpYy9pY29ucy9wbHVzLnRzeCIsIndlYnBhY2s6Ly9mb3Jtcy1idWlsZGVyLy4vcHVibGljL2ljb25zL3RyYXNoLnRzeCIsIndlYnBhY2s6Ly9mb3Jtcy1idWlsZGVyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mb3Jtcy1idWlsZGVyL2V4dGVybmFsIFwicmVhY3Qtc29ydGFibGVqcy10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vZm9ybXMtYnVpbGRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zvcm1zLWJ1aWxkZXIvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkVycm9yQ29kZSIsIkZvcm1EYXRhRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwiZXJyb3JDb2RlIiwiZXh0cmFEYXRhIiwicHJpbnRNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiT0siLCJEQVRBX1RZUEVfRVJST1IiLCJTVEFURV9PQkpFQ1RfRVhQRUNURUQiLCJTVEFURV9BUlJBWV9FWFBFQ1RFRCIsImZvcm1hdE1lc3NhZ2UiLCJwcm90b0Vycm9yTWVzc2FnZSIsInNwbGl0IiwicmVhbE1lc3NhZ2UiLCJwb3AiLCJpbmRleCIsImxlbmd0aCIsIkZvcm1TY2hlbWEiLCJJbnB1dFJhZGlvIiwicHJvcHMiLCJzZWxlY3RlZCIsInNldFNlbGVjdCIsInVzZVN0YXRlIiwiaXNTZWxlY3RlZCIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVSYWRpb0NsaWNrIiwiZXZlbnQiLCJvbkNsaWNrUmFkaW8iLCJ1cGRhdGVWYWx1ZSIsIm5hbWUiLCJvbkNoYW5nZVZhbHVlIiwiSW5wdXRSYWRpb0Rlc2lnbiIsInN0eWxlZCIsInNlY29uZENvbG9yIiwibWFpbkNvbG9yIiwiSW5wdXRSYWRpb0NvbnRhaW5lciIsIklucHV0VGV4dCIsImN1cnJlbnRWYWx1ZSIsInNldEN1cnJlbnRWYWx1ZSIsInVwZGF0ZUN1cnJlbnRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJwbGFjZWhvbGRlciIsIm11bHRpcGxlIiwiYm9sZCIsIklucHV0VGV4dERlc2lnbiIsInR5cGUiLCJJbnB1dFRleHRMYWJlbERlc2lnbiIsIklucHV0VHJ1ZUZhbHNlIiwidmFsIiwiY29uc29sZSIsImxvZyIsIklucHV0VHJ1ZUZhbHNlRGVzaWduIiwiSW5wdXRUcnVlRmFsc2VDb250YWluZXIiLCJEcmF3UXVlc3Rpb24iLCJDb21wb25lbnQiLCJxdWVzdGlvblR5cGVzIiwiUXVlc3Rpb25SYWRpbyIsInN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRTdGF0ZSIsInVzZU9iamVjdFN0YXRlIiwiYW5zd2VyIiwidGl0bGUiLCJvcHRpb25zIiwiaWQiLCJvblVwZGF0ZSIsIm9uQ2hhbmdlUXVlc3Rpb24iLCJhY2Nlc3MiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJjaGFuZ2VJbnB1dFZhbHVlIiwicHJvdmlzaW9uYWxTdGF0ZSIsInVzZVVwZGF0ZUFycmF5T2JqZWN0IiwiY2hhbmdlQW5zd2VyIiwiYXBwZW5kUmFkaW8iLCJwdXNoIiwic2V0VGltZW91dCIsIm5ld1ZhbHVlIiwibWFwIiwicmFkaW8iLCJRdWVzdGlvblNob3J0Iiwia2V5d29yZHMiLCJRdWVzdGlvblRydWVGYWxzZSIsIklucHV0SGFuZGxlciIsIlF1ZXN0aW9uIiwic2V0VGl0bGUiLCJvbkNoYW5nZVRpdGxlIiwiY2hpbGRyZW4iLCJRdWVzdGlvbkRlc2lnbiIsImJnQ29sb3IiLCJiZ1NDb2xvciIsInNoYWRvd0NvbG9yIiwiUGx1c0ljb25Db250YWluZXIiLCJ1c2VBcnJheU9iamVjdFN0YXRlIiwiaW5pdGlhbFZhbHVlIiwiY29uZmlnIiwiY2hhbmdlU3RhdGUiLCJleGVjdXRlT25VcGRhdGUiLCJuZXdTdGF0ZSIsInVwZGF0ZWRWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImZvcm1TY2hlbWEiLCJGb3JtQm9keURlc2lnbiIsIkhvbWUiLCJkZXRhaWxzIiwiRm9ybUJvZHkiLCJpdGVtIiwibGlnaHRDb2xvciIsImRhcmtDb2xvciIsImRlc2lnbiIsIkljb24iLCJQbHVzSWNvbiIsIm9uQ2xpY2siLCJUcmFzaEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBS0EsUzs7V0FBQUEsUztBQUFBQSxXLENBQUFBLFM7QUFBQUEsVyxDQUFBQSxTO0FBQUFBLFcsQ0FBQUEsUztBQUFBQSxXLENBQUFBLFM7R0FBQUEsUyxLQUFBQSxTOztBQU9MLE1BQU1DLGFBQU4sU0FBNEJDLEtBQTVCLENBQWtDO0FBRzlCQyxhQUFXLENBQUVDLFNBQUYsRUFBeUJDLFNBQXpCLEVBQXFEO0FBQzVELFVBQU9KLGFBQWEsQ0FBQ0ssWUFBZCxDQUE0QkYsU0FBNUIsRUFBdUNDLFNBQVMsR0FBR0EsU0FBSCxHQUFlLEVBQS9ELENBQVA7QUFDSDs7QUFFRCxTQUFlQyxZQUFmLENBQTZCRixTQUE3QixFQUFvREMsU0FBcEQsRUFBeUY7QUFDckYsUUFBSUUsWUFBcUIsR0FBRyxvQkFB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REo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBcUJILENBdEJEOztBQXdCQSwrREFBZWdGLFNBQWYsRTs7Ozs7Ozs7Ozs7QUMzQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJlbnVtIEVycm9yQ29kZSB7XHJcbiAgICBPSyxcclxuICAgIERBVEFfVFlQRV9FUlJPUiwgXHJcbiAgICBTVEFURV9BUlJBWV9FWFBFQ1RFRCxcclxuICAgIFNUQVRFX09CSkVDVF9FWFBFQ1RFRFxyXG59XHJcblxyXG5jbGFzcyBGb3JtRGF0YUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFEYXRhIDogQXJyYXk8c3RyaW5nPlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBlcnJvckNvZGUgOiBFcnJvckNvZGUsIGV4dHJhRGF0YSA/OiBBcnJheTxzdHJpbmc+ICl7XHJcbiAgICAgICAgc3VwZXIoIEZvcm1EYXRhRXJyb3IucHJpbnRNZXNzYWdlKCBlcnJvckNvZGUsIGV4dHJhRGF0YSA/IGV4dHJhRGF0YSA6IFtdICkgKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHByaW50TWVzc2FnZSggZXJyb3JDb2RlIDogRXJyb3JDb2RlLCBleHRyYURhdGEgOiBBcnJheTxzdHJpbmc+ICkgOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgOiBzdHJpbmcgPSBcIlRoaXMncyBhIG5ldyBlcnJvclwiXHJcblxyXG4gICAgICAgIEZvcm1EYXRhRXJyb3IuZXh0cmFEYXRhID0gZXh0cmFEYXRhXHJcblxyXG4gICAgICAgIHN3aXRjaCggZXJyb3JDb2RlICl7XHJcbiAgICAgICAgICAgIGNhc2UgRXJyb3JDb2RlLk9LIDogXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBcIkFsbCdzIG9rZXlcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBFcnJvckNvZGUuREFUQV9UWVBFX0VSUk9SIDogXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBcIkRhdGEgdHlwZSBlcnJvci4gRXhwZWN0ZWQgJSBpbiB2YWx1ZSwgYnV0IHdhcyByZWNlaWJlZCAlXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgRXJyb3JDb2RlLlNUQVRFX09CSkVDVF9FWFBFQ1RFRCA6XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBcIlRoZSBzdGF0ZSBpc24ndCBhbiBvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBFcnJvckNvZGUuU1RBVEVfQVJSQVlfRVhQRUNURUQgOlxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gXCJFeHBlY3RlZCBBcnJheSBhcyBzdGF0ZSwgYnV0IHJlY2VpYmVkICVcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IEZvcm1EYXRhRXJyb3IuZm9ybWF0TWVzc2FnZSggZXJyb3JNZXNzYWdlIClcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZm9ybWF0TWVzc2FnZSggZXJyb3JNZXNzYWdlIDogc3RyaW5nICl7XHJcbiAgICAgICAgbGV0IHByb3RvRXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlLnNwbGl0KCAnJScgKVxyXG4gICAgICAgIGxldCByZWFsTWVzc2FnZSA9ICcnXHJcbiAgICAgICAgcHJvdG9FcnJvck1lc3NhZ2UucG9wKClcclxuICAgICAgICBmb3IoIGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvdG9FcnJvck1lc3NhZ2UubGVuZ3RoIDsgaW5kZXgrKyApe1xyXG4gICAgICAgICAgICByZWFsTWVzc2FnZSs9IHByb3RvRXJyb3JNZXNzYWdlWyBpbmRleCBdICsgdGhpcy5leHRyYURhdGFbIGluZGV4IF1cclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiByZWFsTWVzc2FnZVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybURhdGFFcnJvclxyXG5cclxuZXhwb3J0IHtcclxuICAgIEVycm9yQ29kZVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVNjaGVtYSB7XHJcbiAgICB0aXRsZSA6IHN0cmluZyA9ICdOZXcgRm9ybSdcclxuICAgIGRlc2NyaXB0aW9uIDogc3RyaW5nID0gJ1RoaXMgaXMgYSBmb3JtdWxhcnknXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBJbnB1dEhhbmRsZXIsIElucHV0UmFkaW9IYW5sZGVyIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvaGFuZGxlcnNcIlxyXG5pbXBvcnQgeyBJbnB1dFJhZGlvUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9pbnB1dHNcIlxyXG5pbXBvcnQgVHJhc2hJY29uIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaWNvbnMvdHJhc2hcIlxyXG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gXCIuLi9pbnB1dC10ZXh0XCJcclxuaW1wb3J0IHsgSW5wdXRSYWRpb0NvbnRhaW5lciwgSW5wdXRSYWRpb0Rlc2lnbiB9IGZyb20gXCIuL2lucHV0LXJhZGlvXCJcclxuXHJcbmNvbnN0IElucHV0UmFkaW8gPSAoIHByb3BzIDogSW5wdXRSYWRpb1Byb3BzICkgPT4ge1xyXG4gICAgY29uc3QgWyBzZWxlY3RlZCwgc2V0U2VsZWN0IF0gPSB1c2VTdGF0ZTxib29sZWFuPiggcHJvcHMuaXNTZWxlY3RlZCApXHJcbiAgICBjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGU8c3RyaW5nPiggcHJvcHMudmFsdWUgKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJhZGlvQ2xpY2sgOiBJbnB1dFJhZGlvSGFubGRlciA9ICggZXZlbnQgKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0KCAhc2VsZWN0ZWQgKVxyXG4gICAgICAgIHByb3BzLm9uQ2xpY2tSYWRpbyggcHJvcHMuaW5kZXgsIHZhbHVlICwnYW5zd2VyJyApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHVwZGF0ZVZhbHVlIDogSW5wdXRIYW5kbGVyID0gKCB2YWx1ZSA6IHN0cmluZywgbmFtZSA6IHN0cmluZyApID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSggdmFsdWUgKVxyXG4gICAgICAgIHByb3BzLm9uQ2hhbmdlVmFsdWUoIHByb3BzLmluZGV4LCB2YWx1ZSwgJ3ZhbHVlJyApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW5wdXRSYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPElucHV0UmFkaW9EZXNpZ24gey4uLnByb3BzfSBvbkNsaWNrPXsgaGFuZGxlUmFkaW9DbGljayB9IGlzU2VsZWN0ZWQgPSB7IHNlbGVjdGVkIH0gLz5cclxuICAgICAgICAgICAgPElucHV0VGV4dCBrZXk9J2lucHV0JyBuYW1lPXtwcm9wcy5uYW1lfSBwbGFjZWhvbGRlcj0nUmVzcHVlc3RhJyB2YWx1ZT17IHZhbHVlIH0gb25DaGFuZ2VWYWx1ZT17IHVwZGF0ZVZhbHVlIH0gLz5cclxuICAgICAgICAgICAgPFRyYXNoSWNvbi8+XHJcbiAgICAgICAgPC9JbnB1dFJhZGlvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFJhZGlvIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBtYWluQ29sb3IsIHNlY29uZENvbG9yIH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9jb25zdGFudHNcIlxyXG5cclxuY29uc3QgSW5wdXRSYWRpb0Rlc2lnbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5IDogYmxvY2s7XHJcbiAgICB3aWR0aCA6IDQwcHg7XHJcbiAgICBoZWlnaHQgOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogJHsgc2Vjb25kQ29sb3IgfTtcclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCAkeyBtYWluQ29sb3IgfTtcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50IDogJyc7XHJcbiAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aCA6IDgwJTtcclxuICAgICAgICBoZWlnaHQgOiA4MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICR7IHByb3BzID0+IHByb3BzLmlzU2VsZWN0ZWQgPyBtYWluQ29sb3IgOiAndHJhbnNwYXJlbnQnIH07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcclxuICAgICAgICB0b3AgOiAzLjVweDtcclxuICAgICAgICBsZWZ0IDogMy41cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbiA6IGFsbCAwLjNzO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IElucHV0UmFkaW9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luIDogNXB4O1xyXG4gICAgZGlzcGxheSA6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiA1MHB4IGNhbGMoIDEwMCUgLSA5MHB4ICkgNTBweDtcclxuYFxyXG5cclxuZXhwb3J0IHtcclxuICAgIElucHV0UmFkaW9Db250YWluZXIsXHJcbiAgICBJbnB1dFJhZGlvRGVzaWduXHJcbn0iLCJpbXBvcnQgeyBGb3JtRXZlbnRIYW5kbGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IElucHV0VGV4dFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvaW5wdXRzXCJcclxuaW1wb3J0IHsgSW5wdXRUZXh0RGVzaWduLCBJbnB1dFRleHRMYWJlbERlc2lnbiB9IGZyb20gXCIuL2lucHV0LXRleHRcIlxyXG5cclxuY29uc3QgSW5wdXRUZXh0ID0gKCBwcm9wcyA6IElucHV0VGV4dFByb3BzICkgPT4ge1xyXG4gICAgY29uc3QgWyBjdXJyZW50VmFsdWUsIHNldEN1cnJlbnRWYWx1ZSBdID0gdXNlU3RhdGU8c3RyaW5nPiggcHJvcHMudmFsdWUgKVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUN1cnJlbnRWYWx1ZSA6IEZvcm1FdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoIGV2ZW50ICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxyXG4gICAgICAgIHNldEN1cnJlbnRWYWx1ZSggdmFsdWUgKVxyXG4gICAgICAgIHByb3BzLm9uQ2hhbmdlVmFsdWUoIHZhbHVlICwgcHJvcHMubmFtZSApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxJbnB1dFRleHRMYWJlbERlc2lnbiBodG1sRm9yID0geyBwcm9wcy5uYW1lIH0gID5cclxuICAgICAgICAgICAgPElucHV0VGV4dERlc2lnbiBcclxuICAgICAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH0gXHJcbiAgICAgICAgICAgICAgICBpZD17IHByb3BzLm5hbWUgfSBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0geyBwcm9wcy5wbGFjZWhvbGRlciB9IFxyXG4gICAgICAgICAgICAgICAgbXVsdGlwbGUgPSB7IHByb3BzLm11bHRpcGxlIH0gXHJcbiAgICAgICAgICAgICAgICBib2xkID0geyBwcm9wcy5ib2xkIH0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9eyBjdXJyZW50VmFsdWUgfSBcclxuICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyB1cGRhdGVDdXJyZW50VmFsdWUgfSAvPlxyXG4gICAgICAgIDwvSW5wdXRUZXh0TGFiZWxEZXNpZ24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0VGV4dCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHNlY29uZENvbG9yLCBtYWluQ29sb3IgfSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBpbnB1dFRleHREZXNpZ25Qcm9wcyB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5wdXRzJ1xyXG5cclxuY29uc3QgSW5wdXRUZXh0RGVzaWduID0gc3R5bGVkLmlucHV0LmF0dHJzPGlucHV0VGV4dERlc2lnblByb3BzPiggcHJvcHMgPT4gKHtcclxuICAgIHR5cGUgOiAndGV4dCdcclxufSkgKWBcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5IDogYmxvY2s7IFxyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdCA6IDA7XHJcbiAgICBib3JkZXIgOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICR7IHNlY29uZENvbG9yIH07XHJcbiAgICBvdXRsaW5lIDogbm9uZTtcclxuICAgIGhlaWdodCA6IDEwMCU7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICBmb250LXNpemUgOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0IDogICR7ICggcHJvcHMgOiBpbnB1dFRleHREZXNpZ25Qcm9wcyApID0+IHByb3BzLmJvbGQgPyAnYm9sZCcgOiAnbm9ybWFsJyB9O1xyXG4gICAgY29sb3IgOiAkeyBtYWluQ29sb3IgfTtcclxuICAgIDo6cGxhY2Vob2xkZXIsXHJcbiAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAkeyBtYWluQ29sb3IgfTtcclxuICAgIH1cclxuYFxyXG5jb25zdCBJbnB1dFRleHRMYWJlbERlc2lnbiA9IHN0eWxlZC5sYWJlbGBcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5IDogZ3JpZDtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICAgIGhlaWdodCA6IDQwcHggO1xyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogJHsgc2Vjb25kQ29sb3IgfTtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQgOiAnJztcclxuICAgICAgICBwb3NpdGlvbiA6IGFic29sdXRlOyBcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0IDogMnB4O1xyXG4gICAgICAgIHRvcCA6IGNhbGMoIDk4JSAtIDJweCApO1xyXG4gICAgICAgIGxlZnQgOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbWFpbkNvbG9yIH07XHJcbiAgICB9XHJcbmBcclxuZXhwb3J0IHtcclxuICAgIElucHV0VGV4dERlc2lnbixcclxuICAgIElucHV0VGV4dExhYmVsRGVzaWduXHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBUcmFzaEljb24gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pY29ucy90cmFzaFwiXHJcbmltcG9ydCBJbnB1dFRleHQgZnJvbSBcIi4uL2lucHV0LXRleHRcIlxyXG5pbXBvcnQgeyBJbnB1dFRydWVGYWxzZUNvbnRhaW5lciwgSW5wdXRUcnVlRmFsc2VEZXNpZ24gfSBmcm9tIFwiLi9pbnB1dC10cnVlLWZhbHNlXCJcclxuXHJcbmNvbnN0IElucHV0VHJ1ZUZhbHNlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgWyBjdXJyZW50VmFsdWUsIHNldEN1cnJlbnRWYWx1ZSBdID0gdXNlU3RhdGU8Ym9vbGVhbj4oIGZhbHNlIClcclxuXHJcbiAgICBjb25zdCB1cGRhdGVDdXJyZW50VmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFZhbHVlKCAhY3VycmVudFZhbHVlIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJbnB1dFRydWVGYWxzZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPElucHV0VHJ1ZUZhbHNlRGVzaWduIGNsYXNzTmFtZSA9IHsgY3VycmVudFZhbHVlID8gJ3NlbGVjdGVkJyA6ICcnIH0gb25DbGljayA9IHsgdXBkYXRlQ3VycmVudFZhbHVlIH0gLz5cclxuICAgICAgICAgICAgPElucHV0VGV4dCBrZXk9J2lucHV0JyBuYW1lPSdOb21icmUnIHBsYWNlaG9sZGVyPSdSZXNwdWVzdGEnIHZhbHVlPScnIG9uQ2hhbmdlVmFsdWU9eyggdmFsIDogc3RyaW5nLCBuYW1lIDogc3RyaW5nICk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBuYW1lLCB2YWwgKVxyXG4gICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8VHJhc2hJY29uLz5cclxuICAgICAgICA8L0lucHV0VHJ1ZUZhbHNlQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFRydWVGYWxzZSIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgbWFpbkNvbG9yLCBzZWNvbmRDb2xvciB9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IElucHV0VHJ1ZUZhbHNlRGVzaWduID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogMTAwcHg7XHJcbiAgICBoZWlnaHQgOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICR7IHNlY29uZENvbG9yIH07XHJcbiAgICBib3JkZXIgOiAycHggc29saWQgJHsgbWFpbkNvbG9yIH07XHJcbiAgICBib3JkZXItcmFkaXVzIDogNTBweDtcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uIDogYWxsIDAuNXM7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50IDogJyc7XHJcbiAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aCA6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0IDogMzZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogJHsgbWFpbkNvbG9yIH07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHRvcCA6IDVweDtcclxuICAgICAgICBsZWZ0IDogNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb24gOiBhbGwgMC4zcztcclxuICAgIH1cclxuICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAkeyBtYWluQ29sb3IgfTtcclxuICAgICAgICBib3JkZXIgOiAycHggc29saWQgJHsgc2Vjb25kQ29sb3IgfTtcclxuICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICBsZWZ0IDogY2FsYyggMTAwJSAtIDQzcHggKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICR7IHNlY29uZENvbG9yIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBJbnB1dFRydWVGYWxzZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4gOiA1cHg7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICBkaXNwbGF5IDogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1ucyA6IDExMHB4IGNhbGMoIDEwMCUgLSAxNjBweCApIDUwcHg7XHJcbmBcclxuXHJcbmV4cG9ydHtcclxuICAgIElucHV0VHJ1ZUZhbHNlQ29udGFpbmVyLFxyXG4gICAgSW5wdXRUcnVlRmFsc2VEZXNpZ25cclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBRdWVzdGlvbkRhdGEsIHF1ZXN0aW9uVHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9xdWVzdGlvbnNcIlxyXG5pbXBvcnQgUXVlc3Rpb25SYWRpbyBmcm9tIFwiLi4vcXVlc3Rpb24tcmFkaW9cIlxyXG5pbXBvcnQgUXVlc3Rpb25TaG9ydCBmcm9tIFwiLi4vcXVlc3Rpb24tc2hvcnRcIlxyXG5pbXBvcnQgUXVlc3Rpb25UcnVlRmFsc2UgZnJvbSBcIi4uL3F1ZXN0aW9uLXRydWUtZmFsc2VcIlxyXG5cclxuY29uc3QgRHJhd1F1ZXN0aW9uID0gKCBwcm9wcyA6IFF1ZXN0aW9uRGF0YSApID0+IHtcclxuICAgIGxldCBDb21wb25lbnQgPSA8ZGl2Lz5cclxuICAgIHN3aXRjaCggcHJvcHMudHlwZSApe1xyXG4gICAgICAgIGNhc2UgcXVlc3Rpb25UeXBlcy5zaG9ydCA6IFxyXG4gICAgICAgICAgICBDb21wb25lbnQgPSA8UXVlc3Rpb25TaG9ydCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBxdWVzdGlvblR5cGVzLnJhZGlvIDogXHJcbiAgICAgICAgICAgIENvbXBvbmVudCA9IDxRdWVzdGlvblJhZGlvIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIHF1ZXN0aW9uVHlwZXMudHJ1ZUZhbHNlIDpcclxuICAgICAgICAgICAgQ29tcG9uZW50ID0gPFF1ZXN0aW9uVHJ1ZUZhbHNlIC8+XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ29tcG9uZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdRdWVzdGlvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUGx1c0ljb24gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pY29ucy9wbHVzXCJcclxuaW1wb3J0IElucHV0UmFkaW8gZnJvbSBcIi4uLy4uL2Zvcm1zL2lucHV0LXJhZGlvXCJcclxuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi9xdWVzdGlvblwiXHJcbmltcG9ydCB7IFBsdXNJY29uQ29udGFpbmVyIH0gZnJvbSAnLi4vcXVlc3Rpb24vcXVlc3Rpb24nXHJcbmltcG9ydCB1c2VPYmplY3RTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlT2JqZWN0U3RhdGVcIlxyXG5pbXBvcnQgeyBRdWVzdGlvbkRhdGEsIFF1ZXN0aW9uUmFkaW9TY2hlbWEgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9xdWVzdGlvbnNcIlxyXG5pbXBvcnQgeyBBcnJheURhdGFIYW5kbGVyLCBJbnB1dEhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9oYW5kbGVyc1wiXHJcbmltcG9ydCB1c2VVcGRhdGVBcnJheU9iamVjdCBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlVXBkYXRlQXJyYXlPYmplY3RcIlxyXG5pbXBvcnQgeyBSZWFjdFNvcnRhYmxlIH0gZnJvbSBcInJlYWN0LXNvcnRhYmxlanMtdHlwZXNjcmlwdFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IFF1ZXN0aW9uUmFkaW8gPSAoIHByb3BzIDogUXVlc3Rpb25EYXRhICkgPT4ge1xyXG4gICAgY29uc3QgWyBzdGF0ZSwgdXBkYXRlU3RhdGUsIHNldFN0YXRlIF0gPSB1c2VPYmplY3RTdGF0ZTxRdWVzdGlvblJhZGlvU2NoZW1hPih7XHJcbiAgICAgICAgYW5zd2VyIDogJycsXHJcbiAgICAgICAgdGl0bGUgOiAnJyxcclxuICAgICAgICBvcHRpb25zIDogW1xyXG4gICAgICAgICAgICB7IGlzU2VsZWN0ZWQgOiB0cnVlLCB2YWx1ZSA6ICcnLCBpZCA6ICdxcmkwJyB9LFxyXG4gICAgICAgICAgICB7IGlzU2VsZWN0ZWQgOiBmYWxzZSwgdmFsdWUgOiAnJywgaWQgOiAncXJpMScgfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHsgb25VcGRhdGUgOiBwcm9wcy5vbkNoYW5nZVF1ZXN0aW9uLCBhY2Nlc3MgOiBwcm9wcy5hY2Nlc3MsIGluZGV4IDogcHJvcHMuaW5kZXggfSApXHJcblxyXG4gICAgY29uc3QgWyB1cGRhdGUsIHNldFVwZGF0ZSBdID0gdXNlU3RhdGU8Ym9vbGVhbj4oIHRydWUgKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUlucHV0VmFsdWUgOiBBcnJheURhdGFIYW5kbGVyID0gKCBpbmRleCwgdmFsdWUsIG5hbWUgKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb3Zpc2lvbmFsU3RhdGUgPSBzdGF0ZVxyXG4gICAgICAgIHByb3Zpc2lvbmFsU3RhdGUub3B0aW9ucyA9IHVzZVVwZGF0ZUFycmF5T2JqZWN0KCBzdGF0ZS5vcHRpb25zLCBpbmRleCwgdmFsdWUsIG5hbWUgKVxyXG4gICAgICAgIHNldFN0YXRlKCBwcm92aXNpb25hbFN0YXRlIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VBbnN3ZXIgOiBBcnJheURhdGFIYW5kbGVyID0gKCBpbmRleCwgdmFsdWUsIG5hbWUgKSA9PiB7XHJcbiAgICAgICAgY2hhbmdlSW5wdXRWYWx1ZSggaW5kZXgsIHRydWUsICdpc1NlbGVjdGVkJyApXHJcbiAgICAgICAgdXBkYXRlU3RhdGUoIHZhbHVlLCBuYW1lIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRSYWRpbyA9ICgpID0+IHtcclxuICAgICAgICBzZXRVcGRhdGUoIGZhbHNlIClcclxuICAgICAgICBsZXQgcHJvdmlzaW9uYWxTdGF0ZSA9IHN0YXRlXHJcbiAgICAgICAgcHJvdmlzaW9uYWxTdGF0ZS5vcHRpb25zLnB1c2goIHtcclxuICAgICAgICAgICAgaXNTZWxlY3RlZCA6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZSA6ICcnLFxyXG4gICAgICAgICAgICBpZCA6IGBxcmkke3N0YXRlLm9wdGlvbnMubGVuZ3RofWBcclxuICAgICAgICB9IClcclxuICAgICAgICBzZXRTdGF0ZSggcHJvdmlzaW9uYWxTdGF0ZSApXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRVcGRhdGUoIHRydWUgKVxyXG4gICAgICAgIH0sIDEwMCApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxRdWVzdGlvbiBvbkNoYW5nZVRpdGxlID0geyB1cGRhdGVTdGF0ZSB9ID5cclxuICAgICAgICAgICAgICAgIDxSZWFjdFNvcnRhYmxlIGxpc3QgPSB7IHN0YXRlLm9wdGlvbnMgfSBzZXRMaXN0ID0geyAoIG5ld1ZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBuZXdWYWx1ZSApXHJcbiAgICAgICAgICAgICAgICB9IH0gPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUub3B0aW9ucy5tYXAoICggcmFkaW8sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFJhZGlvIGtleT17YHF1ZXN0aW9uLXJhZGlvLSR7aW5kZXh9YH0gbmFtZSA9ICdhbnN3ZXInIG9uQ2hhbmdlVmFsdWU9eyBjaGFuZ2VJbnB1dFZhbHVlIH0gb25DbGlja1JhZGlvPXsgY2hhbmdlQW5zd2VyIH0gaW5kZXggPSB7IGluZGV4IH0gey4uLnJhZGlvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdFNvcnRhYmxlPlxyXG4gICAgICAgICAgICA8UGx1c0ljb25Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UGx1c0ljb24gb25DbGljayA9eyBhcHBlbmRSYWRpbyB9IC8+XHJcbiAgICAgICAgICAgIDwvUGx1c0ljb25Db250YWluZXI+XHJcbiAgICAgICAgPC9RdWVzdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25SYWRpbyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgdXNlT2JqZWN0U3RhdGUgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZU9iamVjdFN0YXRlXCJcclxuaW1wb3J0IHsgUXVlc3Rpb25EYXRhLCBRdWVzdGlvblNob3J0U2NoZW1hIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvcXVlc3Rpb25zXCJcclxuaW1wb3J0IElucHV0VGV4dCBmcm9tIFwiLi4vLi4vZm9ybXMvaW5wdXQtdGV4dFwiXHJcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi4vcXVlc3Rpb25cIlxyXG5cclxuXHJcbmNvbnN0IFF1ZXN0aW9uU2hvcnQgPSAoIHByb3BzIDogUXVlc3Rpb25EYXRhICkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBbIHN0YXRlLCB1cGRhdGVTdGF0ZSBdID0gdXNlT2JqZWN0U3RhdGU8UXVlc3Rpb25TaG9ydFNjaGVtYT4oIHtcclxuICAgICAgICB0aXRsZSA6ICcnLFxyXG4gICAgICAgIGFuc3dlciA6ICcnLFxyXG4gICAgICAgIGtleXdvcmRzIDogW11cclxuICAgIH0sIHsgb25VcGRhdGUgOiBwcm9wcy5vbkNoYW5nZVF1ZXN0aW9uLCBhY2Nlc3MgOiBwcm9wcy5hY2Nlc3MsIGluZGV4IDogcHJvcHMuaW5kZXggfSApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UXVlc3Rpb24gb25DaGFuZ2VUaXRsZSA9IHsgdXBkYXRlU3RhdGUgfSA+XHJcbiAgICAgICAgICAgIDxJbnB1dFRleHQgbmFtZT0nYW5zd2VyJyBwbGFjZWhvbGRlcj0nUmVzcHVlc3RhJyB2YWx1ZT17c3RhdGUuYW5zd2VyfSBvbkNoYW5nZVZhbHVlPXsgdXBkYXRlU3RhdGUgfSAvPlxyXG4gICAgICAgIDwvUXVlc3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uU2hvcnQiLCJpbXBvcnQgeyBJbnB1dEhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9oYW5kbGVyc1wiXHJcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi4vcXVlc3Rpb25cIlxyXG5pbXBvcnQgSW5wdXRUcnVlRmFsc2UgZnJvbSBcIi4uLy4uL2Zvcm1zL2lucHV0LXRydWUtZmFsc2VcIlxyXG5pbXBvcnQgeyBQbHVzSWNvbkNvbnRhaW5lciB9IGZyb20gXCIuLi9xdWVzdGlvbi9xdWVzdGlvblwiXHJcbmltcG9ydCBQbHVzSWNvbiBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ljb25zL3BsdXNcIlxyXG5cclxuY29uc3QgUXVlc3Rpb25UcnVlRmFsc2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBJbnB1dEhhbmRsZXIgOiBJbnB1dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFF1ZXN0aW9uIG9uQ2hhbmdlVGl0bGUgPSB7IElucHV0SGFuZGxlciB9ID5cclxuICAgICAgICAgICAgPElucHV0VHJ1ZUZhbHNlLz5cclxuICAgICAgICAgICAgPElucHV0VHJ1ZUZhbHNlLz5cclxuICAgICAgICAgICAgPFBsdXNJY29uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFBsdXNJY29uIG9uQ2xpY2sgPSB7ICgpID0+e30gfSAvPlxyXG4gICAgICAgICAgICA8L1BsdXNJY29uQ29udGFpbmVyPlxyXG4gICAgICAgIDwvUXVlc3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uVHJ1ZUZhbHNlIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBRdWVzdGlvbkJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL3F1ZXN0aW9uc1wiXHJcbmltcG9ydCB7IFF1ZXN0aW9uRGVzaWduIH0gZnJvbSBcIi4vcXVlc3Rpb25cIlxyXG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gXCIuLi8uLi9mb3Jtcy9pbnB1dC10ZXh0XCJcclxuXHJcbmNvbnN0IFF1ZXN0aW9uID0gKCBwcm9wcyA6IFF1ZXN0aW9uQmFzZVByb3BzICkgPT4ge1xyXG4gICAgY29uc3QgWyB0aXRsZSwgc2V0VGl0bGUgXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VUaXRsZSA9ICggdmFsdWUgOiBzdHJpbmcsIG5hbWUgOiBzdHJpbmcgKSA9PiB7XHJcbiAgICAgICAgc2V0VGl0bGUoIHZhbHVlIClcclxuICAgICAgICBwcm9wcy5vbkNoYW5nZVRpdGxlKCB2YWx1ZSwgbmFtZSApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFF1ZXN0aW9uRGVzaWduPlxyXG4gICAgICAgICAgICA8SW5wdXRUZXh0IFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSB7IHByb3BzLnBsYWNlaG9sZGVyID8gcHJvcHMucGxhY2Vob2xkZXIgOiAnVGl0dWxvIGRlIHByZWd1bnRhJ30gXHJcbiAgICAgICAgICAgICAgICBuYW1lPSd0aXRsZSdcclxuICAgICAgICAgICAgICAgIGJvbGQgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHt0aXRsZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZVZhbHVlID0geyBvbkNoYW5nZVRpdGxlIH0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L1F1ZXN0aW9uRGVzaWduPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgbWFpbkNvbG9yLCBzZWNvbmRDb2xvciwgc2hhZG93Q29sb3IgfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2NvbnN0YW50c1wiXHJcblxyXG5cclxuY29uc3QgUXVlc3Rpb25EZXNpZ24gPSBzdHlsZWQuZGl2LmF0dHJzKCAoKSA9PiAoe1xyXG4gICAgYmdDb2xvcjogbWFpbkNvbG9yLFxyXG4gICAgYmdTQ29sb3I6IHNlY29uZENvbG9yXHJcbn0pIClgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogJHsgc2Vjb25kQ29sb3IgfTtcclxuICAgIGJvcmRlciA6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTBweDtcclxuICAgIHBhZGRpbmcgOiAxMHB4O1xyXG4gICAgbWFyZ2luIDogMTBweCAwO1xyXG4gICAgYm94LXNoYWRvdyA6IDNweCAzcHggNnB4ICR7IHNoYWRvd0NvbG9yIH07XHJcbiAgICBtaW4taGVpZ2h0IDogMTAwcHg7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICBAbWVkaWEgKCBtaW4td2lkdGggOiA5NTBweCApe1xyXG4gICAgICAgIHdpZHRoIDogOTAwcHg7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IFBsdXNJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQge1xyXG4gICAgUXVlc3Rpb25EZXNpZ24sXHJcbiAgICBQbHVzSWNvbkNvbnRhaW5lclxyXG59IiwiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBGb3JtRGF0YUVycm9yLCB7IEVycm9yQ29kZSB9IGZyb20gXCIuLi9jbGFzc2VzL2Vycm9yc1wiXHJcbmltcG9ydCB7IEFycmF5RGF0YUhhbmRsZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9oYW5kbGVyc1wiXHJcbmltcG9ydCB1c2VVcGRhdGVBcnJheU9iamVjdCBmcm9tIFwiLi91c2VVcGRhdGVBcnJheU9iamVjdFwiXHJcblxyXG5mdW5jdGlvbiB1c2VBcnJheU9iamVjdFN0YXRlPFQ+KCBpbml0aWFsVmFsdWUgOiBBcnJheTxUPiApIDogWyBzdGF0ZSA6IEFycmF5PFQ+LCBzZXRTdGF0ZSA6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEFycmF5PFQ+Pj4sIHVwZGF0ZVN0YXRlIDogQXJyYXlEYXRhSGFuZGxlciBdIHtcclxuICAgIGNvbnN0IFsgc3RhdGUsIHNldFN0YXRlIF0gPSB1c2VTdGF0ZTxBcnJheTxUPj4oIGluaXRpYWxWYWx1ZSApXHJcblxyXG4gICAgY29uc3QgdXBkYXRlU3RhdGUgOiBBcnJheURhdGFIYW5kbGVyID0gKCBpbmRleCwgdmFsdWUsIG5hbWUgOiBrZXlvZiBUICkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKCB1c2VVcGRhdGVBcnJheU9iamVjdCggc3RhdGUsIGluZGV4LCB2YWx1ZSwgbmFtZSApIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gWyBzdGF0ZSwgc2V0U3RhdGUsIHVwZGF0ZVN0YXRlIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQXJyYXlPYmplY3RTdGF0ZSIsImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgRm9ybURhdGFFcnJvciwgeyBFcnJvckNvZGUgfSBmcm9tIFwiLi4vY2xhc3Nlcy9lcnJvcnNcIlxyXG5pbXBvcnQgeyBBcnJheURhdGFIYW5kbGVyLCBJbnB1dEhhbmRsZXIsIFN0YXRlSGFuZGxlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hhbmRsZXJzXCJcclxuXHJcbmZ1bmN0aW9uIHVzZU9iamVjdFN0YXRlPFQ+KCBpbml0aWFsVmFsdWUgOiBULCBjb25maWcgPzogeyBvblVwZGF0ZSA6IEFycmF5RGF0YUhhbmRsZXIsIGluZGV4IDogbnVtYmVyLCBhY2Nlc3MgOiBzdHJpbmcgfSApIDogXHJcbiAgICBbIHN0YXRlIDogVCwgdXBkYXRlU3RhdGUgOiBJbnB1dEhhbmRsZXIsIHNldFN0YXRlOiBTdGF0ZUhhbmRsZXI8VD4gXSB7XHJcbiAgICBjb25zdCBbIHN0YXRlLCBjaGFuZ2VTdGF0ZSBdID0gdXNlU3RhdGU8VD4oIGluaXRpYWxWYWx1ZSApXHJcblxyXG4gICAgY29uc3QgdXBkYXRlU3RhdGUgOiBJbnB1dEhhbmRsZXIgPSAoIHZhbHVlIDogYW55LCBuYW1lIDoga2V5b2YgVCApID0+IHtcclxuICAgICAgICBpZiAoIHR5cGVvZiBzdGF0ZSA9PT0gJ29iamVjdCcgKXtcclxuICAgICAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZW9mIHN0YXRlWyBuYW1lIF0gKXtcclxuICAgICAgICAgICAgICAgIGxldCBwcm92aXNpb25hbFN0YXRlIDogVCA9IHN0YXRlXHJcbiAgICAgICAgICAgICAgICBwcm92aXNpb25hbFN0YXRlWyBuYW1lIF0gPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoIHByb3Zpc2lvbmFsU3RhdGUgKVxyXG4gICAgICAgICAgICAgICAgZXhlY3V0ZU9uVXBkYXRlKCBwcm92aXNpb25hbFN0YXRlIClcclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBGb3JtRGF0YUVycm9yKCBFcnJvckNvZGUuREFUQV9UWVBFX0VSUk9SLCBbYCR7IHR5cGVvZiBzdGF0ZVsgbmFtZSBdIH1gLGAkeyB0eXBlb2YgdmFsdWUgfWBdIClcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRm9ybURhdGFFcnJvciggRXJyb3JDb2RlLlNUQVRFX09CSkVDVF9FWFBFQ1RFRCApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0U3RhdGUgOiBTdGF0ZUhhbmRsZXI8VD4gPSAoIG5ld1N0YXRlICkgPT4ge1xyXG4gICAgICAgIGNoYW5nZVN0YXRlKCBuZXdTdGF0ZSApXHJcbiAgICAgICAgZXhlY3V0ZU9uVXBkYXRlKCBuZXdTdGF0ZSApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhlY3V0ZU9uVXBkYXRlID0gKCBzdGF0ZSA6IFQgKSA9PiB7XHJcbiAgICAgICAgY29uZmlnID8gY29uZmlnLm9uVXBkYXRlKCBjb25maWcuaW5kZXgsIHN0YXRlLCBjb25maWcuYWNjZXNzICkgOiAoKSA9PiB7fVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbIHN0YXRlLCB1cGRhdGVTdGF0ZSwgc2V0U3RhdGUgXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VPYmplY3RTdGF0ZSIsImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgRm9ybURhdGFFcnJvciwgeyBFcnJvckNvZGUgfSBmcm9tIFwiLi4vY2xhc3Nlcy9lcnJvcnNcIlxyXG5pbXBvcnQgeyBBcnJheURhdGFIYW5kbGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaGFuZGxlcnNcIlxyXG5cclxuZnVuY3Rpb24gdXNlVXBkYXRlQXJyYXlPYmplY3Q8VD4oIGN1cnJlbnRWYWx1ZSA6IEFycmF5PFQ+LCBpbmRleCA6IG51bWJlciwgdmFsdWUgOiBhbnksIG5hbWUgOiBrZXlvZiBUICApIDogQXJyYXk8VD4ge1xyXG4gICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IGN1cnJlbnRWYWx1ZVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCB1cGRhdGVkVmFsdWUsIGluZGV4LCB2YWx1ZSwgbmFtZSApXHJcblxyXG4gICAgaWYoIEFycmF5LmlzQXJyYXkoIGN1cnJlbnRWYWx1ZSApICl7XHJcbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZW9mIGN1cnJlbnRWYWx1ZVsgaW5kZXggXVsgbmFtZSBdICl7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZVsgaW5kZXggXVsgbmFtZSBdID0gdmFsdWVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIHVwZGF0ZWRWYWx1ZSApXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1EYXRhRXJyb3IoIEVycm9yQ29kZS5EQVRBX1RZUEVfRVJST1IsIFtgJHsgdHlwZW9mIGN1cnJlbnRWYWx1ZVsgaW5kZXggXVsgbmFtZSBdIH1gLGAkeyB0eXBlb2YgdmFsdWUgfWBdIClcclxuICAgIH1lbHNlXHJcbiAgICAgICAgdGhyb3cgbmV3IEZvcm1EYXRhRXJyb3IoIEVycm9yQ29kZS5TVEFURV9BUlJBWV9FWFBFQ1RFRCApXHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWRWYWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VVcGRhdGVBcnJheU9iamVjdCIsImltcG9ydCB7IEFycmF5RGF0YUhhbmRsZXIsIElucHV0SGFuZGxlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hhbmRsZXJzXCI7XHJcblxyXG5lbnVtIHF1ZXN0aW9uVHlwZXMge3Nob3J0LCByYWRpbywgdHJ1ZUZhbHNlIH1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvbkRhdGEge1xyXG4gICAgYWNjZXNzIDogc3RyaW5nLFxyXG4gICAgbmFtZSA6IHN0cmluZyxcclxuICAgIGlkIDogc3RyaW5nLFxyXG4gICAgdHlwZSA6IHF1ZXN0aW9uVHlwZXMsXHJcbiAgICBpbmRleCA6IG51bWJlcixcclxuICAgIG9uQ2hhbmdlUXVlc3Rpb24gOiBBcnJheURhdGFIYW5kbGVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvbkJhc2VQcm9wcyB7XHJcbiAgICBvbkNoYW5nZVRpdGxlIDogSW5wdXRIYW5kbGVyLFxyXG4gICAgY2hpbGRyZW4gPzogUmVhY3QuUmVhY3ROb2RlLFxyXG4gICAgcGxhY2Vob2xkZXIgPzogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvbnNTY2hlbWEge1xyXG4gICAgaWQgOiBzdHJpbmcsXHJcbiAgICB0eXBlIDogcXVlc3Rpb25UeXBlcyxcclxuICAgIG5hbWUgOiBzdHJpbmcsXHJcbiAgICBkZXRhaWxzIDogUXVlc3Rpb25TaG9ydFNjaGVtYSB8IFF1ZXN0aW9uUmFkaW9TY2hlbWEgfCBRdWVzdGlvblRydWVGYWxzZVNjaGVtYSB8IHt9XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvbkdsb2JhbFNjaGVtYSB7XHJcbiAgICB0aXRsZSA6IHN0cmluZyxcclxuICAgIGFuc3dlciA6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVlc3Rpb25TaG9ydFNjaGVtYSBleHRlbmRzIFF1ZXN0aW9uR2xvYmFsU2NoZW1he1xyXG4gICAga2V5d29yZHMgOiBBcnJheTxzdHJpbmc+XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvblJhZGlvU2NoZW1hIGV4dGVuZHMgUXVlc3Rpb25HbG9iYWxTY2hlbWF7XHJcbiAgICBvcHRpb25zIDogQXJyYXk8e1xyXG4gICAgICAgIGlkIDogc3RyaW5nLFxyXG4gICAgICAgIGlzU2VsZWN0ZWQgOiBib29sZWFuLFxyXG4gICAgICAgIHZhbHVlIDogc3RyaW5nXHJcbiAgICB9PlxyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVlc3Rpb25UcnVlRmFsc2VTY2hlbWEge1xyXG4gICAgdGl0bGUgOiBzdHJpbmcsXHJcbiAgICBjb3VwbGVzIDogQXJyYXk8e1xyXG4gICAgICAgIHBocmFzZSA6IHN0cmluZywgYW5zd2VyIDogYm9vbGVhblxyXG4gICAgfT5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHF1ZXN0aW9uVHlwZXNcclxufVxyXG5cclxuZXhwb3J0IHR5cGUge1xyXG4gICAgUXVlc3Rpb25CYXNlUHJvcHMsXHJcbiAgICBRdWVzdGlvbkRhdGEsXHJcbiAgICBRdWVzdGlvbnNTY2hlbWEsXHJcbiAgICBRdWVzdGlvbkdsb2JhbFNjaGVtYSxcclxuICAgIFF1ZXN0aW9uUmFkaW9TY2hlbWEsXHJcbiAgICBRdWVzdGlvblNob3J0U2NoZW1hLFxyXG4gICAgUXVlc3Rpb25UcnVlRmFsc2VTY2hlbWFcclxufSIsImltcG9ydCB7IFJlYWN0U29ydGFibGUgfSBmcm9tICdyZWFjdC1zb3J0YWJsZWpzLXR5cGVzY3JpcHQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBGb3JtU2NoZW1hIGZyb20gJy4uL2NsYXNzZXMvZm9ybSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgdXNlQXJyYXlPYmplY3RTdGF0ZSBmcm9tICcuLi9ob29rcy91c2VBcnJheU9iamVjdFN0YXRlJ1xuaW1wb3J0IHsgUXVlc3Rpb25zU2NoZW1hLCBxdWVzdGlvblR5cGVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9xdWVzdGlvbnMnXG5pbXBvcnQgRHJhd1F1ZXN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9uLWRyaXZlcidcbmltcG9ydCBGb3JtRGF0YUVycm9yLCB7IEVycm9yQ29kZSB9IGZyb20gJy4uL2NsYXNzZXMvZXJyb3JzJ1xuXG5jb25zdCBmb3JtU2NoZW1hID0gbmV3IEZvcm1TY2hlbWEoKVxuXG5jb25zdCBGb3JtQm9keURlc2lnbiA9IHN0eWxlZC5tYWluYFxuICAgIGRpc3BsYXkgOiBibG9jazsgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgcGFkZGluZyA6IDEwcHggMi41JTsgXG4gICAgQG1lZGlhICggbWluLXdpZHRoIDogNjAwcHggKSB7XG4gICAgICAgIHBhZGRpbmcgOiAxMHB4IDI1cHg7XG4gICAgfVxuICAgIEBtZWRpYSAoIG1pbi13aWR0aCA6IDk1MHB4ICkgeyBcbiAgICAgICAgcGFkZGluZyA6IDEwcHggY2FsYyggY2FsYyggMTAwJSAtIDkwMHB4ICkgLyAyICk7XG4gICAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFsgc3RhdGUsIHNldFN0YXRlLCB1cGRhdGVTdGF0ZSBdID0gdXNlQXJyYXlPYmplY3RTdGF0ZTxRdWVzdGlvbnNTY2hlbWE+KFtcbiAgICAgICAgeyBpZCA6ICdrZXknLCB0eXBlIDogcXVlc3Rpb25UeXBlcy5zaG9ydCwgbmFtZSA6ICdzaDEnLCBkZXRhaWxzIDoge30gfSwgXG4gICAgICAgIHsgaWQgOiAncjEnLCB0eXBlIDogcXVlc3Rpb25UeXBlcy5yYWRpbywgbmFtZSA6ICdyMScsIGRldGFpbHMgOiB7fSB9LCBcbiAgICAgICAgeyBpZCA6ICd0ZjEnLCB0eXBlIDogcXVlc3Rpb25UeXBlcy50cnVlRmFsc2UsIG5hbWUgOiAndGYxJywgZGV0YWlscyA6IHt9IH1cbiAgICBdKVxuICAgIFxuICAgIGNvbnN0IEZvcm1Cb2R5IDogRkMgPSAoIHByb3BzICkgPT4ge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Rm9ybUJvZHlEZXNpZ24+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Gb3JtQm9keURlc2lnbj5cbiAgICAgICAgKVxuICAgIH0gXG4gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj4gXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+e2Zvcm1TY2hlbWEudGl0bGV9PC9oMT5cbiAgICAgICAgPC9oZWFkZXI+IFxuICAgICAgICA8Rm9ybUJvZHk+XG4gICAgICAgICAgICA8UmVhY3RTb3J0YWJsZSBsaXN0ID0geyBzdGF0ZSB9IHNldExpc3QgPSB7IHNldFN0YXRlIH0gPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPERyYXdRdWVzdGlvbiBpbmRleCA9IHsgaW5kZXggfSBhY2Nlc3M9J2RldGFpbHMnIG9uQ2hhbmdlUXVlc3Rpb24gPSB7IHVwZGF0ZVN0YXRlIH0gey4uLml0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIDwvUmVhY3RTb3J0YWJsZT5cbiAgICAgICAgPC9Gb3JtQm9keT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsImNvbnN0IG1haW5Db2xvciA9ICcjOUQyM0MyJ1xyXG5jb25zdCBzZWNvbmRDb2xvciA9ICcjRjdERUZGJ1xyXG5jb25zdCBsaWdodENvbG9yID0gJyNGRkZGRkYnXHJcbmNvbnN0IGRhcmtDb2xvciA9ICcjMkEyQTJBJ1xyXG5jb25zdCBzaGFkb3dDb2xvciA9ICcjMDAwMDAwYWEnXHJcblxyXG5leHBvcnQge1xyXG4gICAgbWFpbkNvbG9yLFxyXG4gICAgc2Vjb25kQ29sb3IsXHJcbiAgICBsaWdodENvbG9yLFxyXG4gICAgZGFya0NvbG9yLFxyXG4gICAgc2hhZG93Q29sb3JcclxufVxyXG5cclxuZW51bSBkZXNpZ24ge1xyXG4gICAgZGFyaywgbGlnaHRcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGRlc2lnblxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgbWFpbkNvbG9yLCBzZWNvbmRDb2xvciB9IGZyb20gJy4uL2NvbnN0YW50cydcclxuXHJcbmNvbnN0IEljb24gPSBzdHlsZWQuaWBcclxuICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgd2lkdGggOiA0NXB4O1xyXG4gICAgaGVpZ2h0IDogNDVweDtcclxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtcyA6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjsgXHJcbiAgICBib3JkZXItcmFkaXVzIDogNTBweDtcclxuICAgICYuYm9yZGVye1xyXG4gICAgICAgIGJvcmRlciA6IDJweCBzb2xpZCAkeyBtYWluQ29sb3IgfTtcclxuICAgIH1cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNpdGlvbiA6IGFsbCAwLjNzO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAkeyBtYWluQ29sb3IgfTtcclxuICAgICAgICAmID4gLmN0cyBwYXRoIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbiA6IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICBmaWxsIDogJHsgc2Vjb25kQ29sb3IgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb24iLCJpbXBvcnQgeyBtYWluQ29sb3IgfSBmcm9tICcuLi9jb25zdGFudHMnXHJcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbidcclxuXHJcbmNvbnN0IFBsdXNJY29uID0gKCBwcm9wcyA6IHsgb25DbGljayA6ICgpID0+IHZvaWQgfSApID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8SWNvbiBjbGFzc05hbWUgPSAnYm9yZGVyJyBvbkNsaWNrID17IHByb3BzLm9uQ2xpY2sgfSA+XHJcbiAgICAgICAgICAgIDxzdmcgXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIiBcclxuICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiIFxyXG4gICAgICAgICAgICAgICAgZGF0YS1pY29uPVwicGx1c1wiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtcGx1cyBmYS13LTE0ICBjdHNcIiBcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIiBcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9eyBtYWluQ29sb3IgfVxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNDE2IDIwOEgyNzJWNjRjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMmgtMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MTQ0SDMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMTQ0djE0NGMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyYzE3LjY3IDAgMzItMTQuMzMgMzItMzJWMzA0aDE0NGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi0zMmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyelwiXHJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L0ljb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsdXNJY29uIiwiaW1wb3J0IHsgbWFpbkNvbG9yIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24nXHJcblxyXG5jb25zdCBUcmFzaEljb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEljb24+XHJcbiAgICAgICAgICAgIDxzdmcgXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIiBcclxuICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiIFxyXG4gICAgICAgICAgICAgICAgZGF0YS1pY29uPVwidHJhc2hcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXRyYXNoIGZhLXctMTQgY3RzXCIgXHJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCIgXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIiBcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPXsgbWFpbkNvbG9yIH1cclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQzMiAzMkgzMTJsLTkuNC0xOC43QTI0IDI0IDAgMCAwIDI4MS4xIDBIMTY2LjhhMjMuNzIgMjMuNzIgMCAwIDAtMjEuNCAxMy4zTDEzNiAzMkgxNkExNiAxNiAwIDAgMCAwIDQ4djMyYTE2IDE2IDAgMCAwIDE2IDE2aDQxNmExNiAxNiAwIDAgMCAxNi0xNlY0OGExNiAxNiAwIDAgMC0xNi0xNnpNNTMuMiA0NjdhNDggNDggMCAwIDAgNDcuOSA0NWgyNDUuOGE0OCA0OCAwIDAgMCA0Ny45LTQ1TDQxNiAxMjhIMzJ6XCJcclxuICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvSWNvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhc2hJY29uIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNvcnRhYmxlanMtdHlwZXNjcmlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==