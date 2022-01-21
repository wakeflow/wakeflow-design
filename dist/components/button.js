"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

const _excluded = ["text", "onClick", "style", "disabled", "keyPress", "icon"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Button = _ref => {
  let {
    text,
    onClick,
    style,
    disabled,
    keyPress,
    icon
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const ref = (0, _react.useRef)();
  const [coords, setCoords] = (0, _react.useState)({
    x: -1,
    y: -1
  });
  const [isRippling, setIsRippling] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);
  (0, _react.useEffect)(() => {
    if (!isRippling) setCoords({
      x: -1,
      y: -1
    });
  }, [isRippling]);

  const materializeEffect = e => {
    const rect = e.target.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }); // onClick && onClick(e)
  };

  (0, _react.useEffect)(() => {
    if (ref) ref.current.addEventListener("click", materializeEffect);
  }, []);

  const handleKeyUp = e => {
    if (e.key === keyPress) {
      e.target.blur();
      ref.current.click();
    }
  };

  (0, _react.useEffect)(() => {
    if (keyPress) document.addEventListener("keydown", handleKeyUp, false);
    return () => {
      if (keyPress) document.removeEventListener("keydown", handleKeyUp, false);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    ref: ref
  }, rest, {
    disabled: disabled,
    style: style,
    onClick: onClick
  }), isRippling ? /*#__PURE__*/_react.default.createElement("span", {
    className: "ripple",
    style: {
      left: coords.x,
      top: coords.y
    }
  }) : "", icon && /*#__PURE__*/_react.default.createElement(ButtonIcon, {
    src: icon
  }), text);
};

var _default = Button;
exports.default = _default;

const Container = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  color:white;\n  background-color:", ";\n  padding: 10px 20px;\n  margin:10px;\n  font-size:1rem;\n  font-weight: 400;\n  border-radius:40px;\n  cursor:pointer;\n  box-shadow:none;\n  border:none;\n  white-space:nowrap;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap:5px;\n  &:hover{\n    transform: scale(1.1);\n  }\n  > span {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  background: white;\n  display: block;\n  content: \"\";\n  border-radius: 9999px;\n  opacity: 1;\n  animation: 0.9s ease 1 forwards ripple-effect;\n}\n\n@keyframes ripple-effect {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(5);\n    opacity: 0.375;\n  }\n  100% {\n    transform: scale(17);\n    opacity: 0;\n  }\n}\n"])), p => p.disabled ? "gray" : "black");

const ButtonIcon = _styledComponents.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 20px;\n  aspect-ratio: 1 / 1;\n"])));