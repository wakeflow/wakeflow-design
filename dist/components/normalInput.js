"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import { StyledInput } from './input'
const NormalInput = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    handleChange,
    handleBlur,
    handleKeyUp,
    currentValue,
    type,
    hideIncrements
  } = props;
  return /*#__PURE__*/_react.default.createElement(StyledInput, {
    type: type,
    className: "input",
    ref: ref,
    value: currentValue,
    onChange: e => handleChange(e.target.value),
    onBlur: handleBlur,
    onKeyUp: handleKeyUp,
    hideIncrements: hideIncrements
  });
});

var _default = NormalInput;
exports.default = _default;

const StyledInput = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  border:none;\n  background:transparent;\n  flex:1 1;\n  padding:0;\n  font-size:1rem;\n  outline:none;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {  \n    -webkit-appearance: ", ";\n    margin: ", ";\n  }\n\n  /* Firefox */\n  &[type=number] {\n  -moz-appearance: ", ";\n  }\n"])), p => p.hideIncrements ? "none" : "", p => p.hideIncrements ? 0 : "", p => p.hideIncrements ? "textfield" : "");