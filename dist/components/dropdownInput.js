"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = require("./input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DropdownInput = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    handleChange,
    handleBlur,
    handleKeyUp,
    currentValue,
    type,
    list
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_input.StyledInput, {
    type: type,
    className: "input",
    ref: ref,
    value: currentValue,
    onChange: handleChange,
    onBlur: handleBlur,
    onKeyUp: handleKeyUp,
    list: "options"
  }), /*#__PURE__*/_react.default.createElement("datalist", {
    id: "options"
  }, list.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: index,
      value: item.value
    }, item.label);
  })));
});

var _default = DropdownInput;
exports.default = _default;