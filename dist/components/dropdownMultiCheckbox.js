"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireWildcard(require("react-select"));

var _animated = _interopRequireDefault(require("react-select/animated"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const animatedComponents = (0, _animated.default)();

const Option = props => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactSelect.components.Option, props, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: props.isSelected,
    onChange: () => null
  }), " ", /*#__PURE__*/_react.default.createElement("label", null, props.label)));
};

const DropdownMultiCheckbox = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    handleChange,
    handleBlur,
    currentValue,
    options
  } = props;
  return /*#__PURE__*/_react.default.createElement(Container, {
    ref: ref,
    className: "topLevel"
  }, /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    options: options,
    defaultValue: currentValue,
    components: {
      animatedComponents,
      Option
    },
    onChange: handleChange,
    onBlur: handleBlur,
    allowSelectAll: true,
    closeMenuOnSelect: false,
    hideSelectedOptions: false,
    isMulti: true,
    menuPortalTarget: document.body,
    styles: {
      menuPortal: base => _objectSpread(_objectSpread({}, base), {}, {
        zIndex: 9999
      })
    }
  }));
});

var _default = DropdownMultiCheckbox;
exports.default = _default;

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  & > div {\n    & > div {\n    cursor: pointer;\n    border-color: transparent;\n    box-shadow: 0 0 0 1px transparent;\n    &:hover{\n      border-color: black;\n      box-shadow: 0 0 0 1px black;\n      }\n    }\n  }\n  ", "\n"])), p => p.css ? p.css : "");