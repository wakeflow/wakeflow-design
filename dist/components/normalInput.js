"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = require("./input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NormalInput = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    handleChange,
    handleBlur,
    handleKeyUp,
    currentValue,
    type
  } = props;
  return /*#__PURE__*/_react.default.createElement(_input.StyledInput, {
    type: type,
    className: "input",
    ref: ref,
    value: currentValue,
    onChange: e => handleChange(e.target.value),
    onBlur: handleBlur,
    onKeyUp: handleKeyUp
  });
});

var _default = NormalInput;
exports.default = _default;