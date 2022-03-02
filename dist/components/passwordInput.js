"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactFeather = require("react-feather");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _input = require("./input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PasswordInput = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    placeholder,
    handleChange,
    handleBlur,
    handleKeyUp,
    currentValue,
    type,
    highlightColor
  } = props;
  const [passwordToggle, setPasswordToggle] = (0, _react.useState)(false);

  const handlePasswordToggle = () => {
    const inputBox = document.querySelector("#passwordInput");
    const type = inputBox.getAttribute("type") === "password" ? "text" : "password";
    inputBox.setAttribute("type", type);
    setPasswordToggle(!passwordToggle);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_input.StyledInput, {
    id: "passwordInput",
    type: type,
    className: "input",
    ref: ref,
    placeholder: placeholder,
    value: currentValue,
    onChange: e => handleChange(e.target.value),
    onBlur: handleBlur,
    onKeyUp: handleKeyUp
  }), type === "password" && !passwordToggle && currentValue && /*#__PURE__*/_react.default.createElement(_reactFeather.Eye, {
    color: highlightColor,
    cursor: "pointer",
    style: {
      marginLeft: "auto"
    },
    onClick: handlePasswordToggle
  }), type === "password" && passwordToggle && currentValue && /*#__PURE__*/_react.default.createElement(_reactFeather.EyeOff, {
    color: highlightColor,
    cursor: "pointer",
    style: {
      marginLeft: "auto"
    },
    onClick: handlePasswordToggle
  }));
});

var _default = PasswordInput;
exports.default = _default;