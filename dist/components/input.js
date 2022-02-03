"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _validate = require("./utils/validate");

var _reactFeather = require("react-feather");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Input = _ref => {
  let {
    type,
    label,
    required,
    error,
    schema,
    placeholder,
    value,
    prefix = "",
    postfix = "",
    onChange,
    onBlur,
    onError,
    onEnter,
    copyable,
    deletable,
    style,
    backgroundColor,
    labelColor
  } = _ref;
  const ref = (0, _react.useRef)();
  const [currentValue, setCurrentValue] = (0, _react.useState)(value || "");
  const [visited, setVisited] = (0, _react.useState)(false);
  const [passwordToggle, setPasswordToggle] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => setCurrentValue(value || ""), [value]);
  if (schema && visited && currentValue) error = (0, _validate.validate)(currentValue, schema).join(", ");
  error = required && visited && !currentValue ? "This value is required" : error;

  const handleChange = e => {
    const {
      value
    } = e.target;
    setCurrentValue(value);
    if (onChange) onChange(value);
  };

  const handleBlur = () => {
    const value = type === "number" ? Number(currentValue) : currentValue;
    if (onBlur) onBlur(value);
    setVisited(true);
  };

  const handleKeyUp = e => {
    if (e.key === "Enter" && onEnter) onEnter();
  };

  if (onError) onError(error);

  const handlePasswordToggle = () => {
    const inputBox = document.querySelector("#passwordInput");
    const type = inputBox.getAttribute("type") === "password" ? "text" : "password";
    inputBox.setAttribute("type", type);
    setPasswordToggle(!passwordToggle);
  };

  return /*#__PURE__*/_react.default.createElement(Container, {
    backgroundColor: backgroundColor,
    onClick: () => ref.current.focus()
  }, /*#__PURE__*/_react.default.createElement(Label, {
    className: "input-label",
    value: currentValue,
    error: error,
    color: labelColor
  }, label, required && "*"), /*#__PURE__*/_react.default.createElement(InlineContainer, null, /*#__PURE__*/_react.default.createElement(Inline, {
    value: currentValue,
    error: error
  }, prefix && /*#__PURE__*/_react.default.createElement(Prefix, {
    value: currentValue
  }, prefix), /*#__PURE__*/_react.default.createElement(StyledInput, {
    id: type === "password" ? "passwordInput" : "",
    type: type,
    className: "input",
    ref: ref,
    error: error,
    placeholder: placeholder,
    value: currentValue,
    onChange: handleChange,
    onBlur: handleBlur,
    onKeyUp: handleKeyUp,
    style: style
  }), postfix && /*#__PURE__*/_react.default.createElement(Postfix, {
    value: currentValue
  }, postfix), copyable && currentValue && /*#__PURE__*/_react.default.createElement(StyledCopy, {
    onClick: () => navigator.clipboard.writeText(currentValue)
  }), deletable && currentValue && /*#__PURE__*/_react.default.createElement(StyledX, {
    onClick: () => setCurrentValue("")
  })), type === "password" && !passwordToggle && currentValue && /*#__PURE__*/_react.default.createElement(_reactFeather.Eye, {
    color: labelColor,
    cursor: "pointer",
    style: {
      marginLeft: "auto"
    },
    onClick: handlePasswordToggle
  }), type === "password" && passwordToggle && currentValue && /*#__PURE__*/_react.default.createElement(_reactFeather.EyeOff, {
    color: labelColor,
    cursor: "pointer",
    style: {
      marginLeft: "auto"
    },
    onClick: handlePasswordToggle
  })), error && /*#__PURE__*/_react.default.createElement(Error, {
    className: "input-error"
  }, error));
};

var _default = Input;
exports.default = _default;

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display:flex;\n  flex-direction:column;\n  background-color: ", ";\n  backdrop-filter: brightness(1.15);\n  border-radius: 4px;\n  padding:8px 10px;.2\n  cursor:text;\n  width: 100%;\n  &:focus-within > .input-label{\n    font-size:0.8rem;\n  }\n  &:focus-within > .input{\n    padding-top:4px;\n  }\n"])), p => p.backgroundColor ? p.backgroundColor : "");

const InlineContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"])));

const Label = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size:", ";\n  transition:font-size 0.2s;\n"])), p => p.color || (p.error ? "red" : "rgb(70,70,70)"), p => p.value ? "0.8rem" : "1rem");

const StyledInput = _styledComponents.default.input(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  border:none;\n  background:transparent;\n  flex:1 1;\n  padding:0;\n  font-size:1rem;\n  outline:none;\n"])));

const Error = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding-top:4px;\n  color:red;\n  font-size:0.6rem;\n"])));

const Inline = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display:flex;\n  justify-content:space-between\n  align-items:center;\n  padding-top:", ";\n  max-height:", ";\n  border-bottom:1px solid ", ";\n  &:focus-within{\n    max-height:unset;\n  }\n  &:focus-within > div{\n    opacity:1;\n  }\n"])), p => p.value || p.error ? "4px" : "", p => p.value ? "unset" : 0, p => p.error ? "red" : "transparent");

const Prefix = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size:1rem;\n  opacity:", ";\n"])), p => p.value ? "1" : "0");

const Postfix = (0, _styledComponents.default)(Prefix)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([""])));
const StyledCopy = (0, _styledComponents.default)(_reactFeather.Copy)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  cursor:pointer;\n  height:18px;\n  width:18px;\n  margin-right:10px;\n"])));
const StyledX = (0, _styledComponents.default)(_reactFeather.X)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  cursor:pointer;\n  height:20px;\n  width:20px;\n"])));