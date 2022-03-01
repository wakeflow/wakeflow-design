"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledInput = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _validate = require("./utils/validate");

var _reactFeather = require("react-feather");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateInput = _interopRequireDefault(require("./dateInput"));

var _timeInput = _interopRequireDefault(require("./timeInput"));

var _dateTimeInput = _interopRequireDefault(require("./dateTimeInput"));

var _passwordInput = _interopRequireDefault(require("./passwordInput"));

var _normalInput = _interopRequireDefault(require("./normalInput"));

var _dropdownInput = _interopRequireDefault(require("./dropdownInput"));

var _dropdownMultiSelectBox = _interopRequireDefault(require("./dropdownMultiSelectBox"));

var _dropdownMultiCheckbox = _interopRequireDefault(require("./dropdownMultiCheckbox"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

const _excluded = ["type", "label", "required", "error", "schema", "value", "prefix", "postfix", "onChange", "onBlur", "onError", "onEnter", "copyable", "deletable", "backgroundColor", "css", "size", "highlightColor", "inputFormat"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Input = _ref => {
  let {
    type,
    label,
    required,
    error,
    schema,
    value,
    prefix = "",
    postfix = "",
    onChange,
    onBlur,
    onError,
    onEnter,
    copyable,
    deletable,
    backgroundColor,
    css,
    size,
    highlightColor,
    inputFormat
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const ref = (0, _react.useRef)();
  const [currentValue, setCurrentValue] = (0, _react.useState)(value || "");
  const [visited, setVisited] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => setCurrentValue(value || ""), [value]);
  if (schema && visited && currentValue) error = (0, _validate.validate)(currentValue, schema).join(", ");
  error = required && visited && !currentValue ? "This value is required" : error;

  const handleChange = e => {
    let value;
    if (e.target) value = e.target;else value = e;
    if (type === "number") value = Number(value);
    setCurrentValue(value);
    console.log(value);
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
  return /*#__PURE__*/_react.default.createElement(Container, {
    backgroundColor: backgroundColor,
    onClick: () => ref.current.focus(),
    css: css
  }, /*#__PURE__*/_react.default.createElement(Label, {
    className: "input-label",
    value: currentValue,
    error: error,
    color: highlightColor
  }, label, required && "*"), /*#__PURE__*/_react.default.createElement(InlineContainer, null, /*#__PURE__*/_react.default.createElement(Inline, {
    value: currentValue,
    error: error
  }, prefix && /*#__PURE__*/_react.default.createElement(Prefix, {
    value: currentValue
  }, prefix), type === "password" && /*#__PURE__*/_react.default.createElement(_passwordInput.default, _extends({
    highlightColor: highlightColor,
    currentValue: currentValue,
    ref: ref,
    handleBlur: handleBlur,
    handleKeyUp: handleKeyUp,
    handleChange: handleChange,
    type: type
  }, rest)), type === "time" && /*#__PURE__*/_react.default.createElement(_timeInput.default, {
    ref: ref,
    value: currentValue,
    label: label,
    onChange: v => setCurrentValue(v),
    css: css,
    inputFormat: inputFormat,
    size: size
  }), type === "date" && /*#__PURE__*/_react.default.createElement(_dateInput.default, {
    ref: ref,
    value: currentValue,
    label: label,
    onChange: v => setCurrentValue(v),
    css: css,
    inputFormat: inputFormat,
    size: size
  }), type === "dateTime" && /*#__PURE__*/_react.default.createElement(_dateTimeInput.default, {
    ref: ref,
    value: currentValue,
    onChange: v => setCurrentValue(v),
    css: css
  }), type === "dropdown" && /*#__PURE__*/_react.default.createElement(_dropdownInput.default, _extends({
    currentValue: currentValue,
    ref: ref,
    handleBlur: handleBlur,
    handleChange: handleChange
  }, rest)), type === "dropdownMultiSelectBox" && /*#__PURE__*/_react.default.createElement(_dropdownMultiSelectBox.default, _extends({
    currentValue: currentValue,
    ref: ref,
    handleBlur: handleBlur,
    handleChange: handleChange
  }, rest)), type === "dropdownMultiCheckbox" && /*#__PURE__*/_react.default.createElement(_dropdownMultiCheckbox.default, _extends({
    currentValue: currentValue,
    ref: ref,
    handleBlur: handleBlur,
    handleChange: handleChange
  }, rest)), (type === "text" || type === "number") && /*#__PURE__*/_react.default.createElement(_normalInput.default, _extends({
    currentValue: currentValue,
    ref: ref,
    handleBlur: handleBlur,
    handleKeyUp: handleKeyUp,
    handleChange: handleChange,
    type: type
  }, rest)), postfix && /*#__PURE__*/_react.default.createElement(Postfix, {
    value: currentValue
  }, postfix), copyable && currentValue && /*#__PURE__*/_react.default.createElement(StyledCopy, {
    onClick: () => navigator.clipboard.writeText(currentValue)
  }), deletable && currentValue && /*#__PURE__*/_react.default.createElement(StyledX, {
    onClick: () => setCurrentValue("")
  }))), error && /*#__PURE__*/_react.default.createElement(Error, {
    className: "input-error"
  }, error));
};

var _default = Input;
exports.default = _default;
Input.propTypes = {
  css: _propTypes.default.string,
  value: _propTypes.default.any,
  type: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  required: _propTypes.default.bool
};

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-start;\n  background-color: ", ";\n  backdrop-filter: brightness(1.15);\n  border-radius: 4px;\n  padding:8px 10px;\n  cursor: text;\n  width: 100%;\n  &:focus-within > .input-label{\n    font-size:0.8rem;\n  }\n  &:focus-within > .input{\n    padding-top:4px;\n  }\n  max-width: 250px;\n  border: 2px solid black;\n  ", "\n"])), p => p.backgroundColor ? p.backgroundColor : "", p => p.css ? p.css : "");

const InlineContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  cursor: text;\n"])));

const Label = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size:", ";\n  transition:font-size 0.2s;\n"])), p => p.color || (p.error ? "red" : "black"), p => p.value ? "0.8rem" : "1rem");

const StyledInput = _styledComponents.default.input(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  border:none;\n  background:transparent;\n  flex:1 1;\n  padding:0;\n  font-size:1rem;\n  outline:none;\n"])));

exports.StyledInput = StyledInput;

const Error = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding-top:4px;\n  color:red;\n  font-size:0.6rem;\n"])));

const Inline = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display:flex;\n  width: 100%;\n  justify-content:space-between;\n  align-items: center;\n  cursor: text;\n  padding-top:", ";\n  max-height:", ";\n  border-bottom:1px solid ", ";\n  &:focus-within{\n    max-height:unset;\n  }\n  & > div{\n    opacity: ", ";\n  }\n  &:focus-within > div{\n    opacity:1;\n  }\n"])), p => p.value || p.error ? "4px" : "", p => p.value || p.show ? "unset" : 0, p => p.error ? "red" : "transparent", p => p.show || p.value ? 1 : 0);

const Prefix = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size:1rem;\n  opacity:", ";\n"])), p => p.value ? "1" : "0");

const Postfix = (0, _styledComponents.default)(Prefix)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([""])));
const StyledCopy = (0, _styledComponents.default)(_reactFeather.Copy)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  cursor:pointer;\n  height:18px;\n  width:18px;\n  margin-right:10px;\n"])));
const StyledX = (0, _styledComponents.default)(_reactFeather.X)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  cursor:pointer;\n  height:20px;\n  width:20px;\n"])));