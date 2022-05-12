"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _animated = _interopRequireDefault(require("react-select/animated"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const animatedComponents = (0, _animated.default)();

const DropdownInput = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  let {
    handleChange,
    handleBlur,
    options,
    currentValue
  } = props;
  return /*#__PURE__*/_react.default.createElement(Container, {
    ref: ref,
    className: "topLevel"
  }, /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    value: currentValue,
    options: options,
    components: {
      animatedComponents
    },
    onChange: handleChange,
    onBlur: handleBlur,
    menuPortalTarget: document.body,
    styles: {
      menuPortal: base => _objectSpread(_objectSpread({}, base), {}, {
        zIndex: 9999
      })
    }
  }));
});

var _default = DropdownInput;
exports.default = _default;

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  cursor: text;\n  & > div {\n    cursor: text;\n    & > div {\n    cursor: pointer;\n    border-color: transparent;\n    box-shadow: 0 0 0 1px transparent;\n    &:hover{\n      border-color: black;\n      box-shadow: 0 0 0 1px black;\n      }\n    }\n  }\n"])));