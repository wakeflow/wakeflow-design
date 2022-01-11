"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@iconify/react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const LocationPin = _ref => {
  let {
    size,
    color
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Container, {
    className: "pin",
    size: size
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    color: color,
    icon: "bx:bxs-map"
  }));
};

var _default = LocationPin;
exports.default = _default;

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n  display: flex;\n  align-items: center;\n  width: 180px;\n  color: blue;\n  font-size: ", ";\n  @media screen and (min-width: 799px) {\n    width: 15vw;\n  }\n"])), p => p.size ? p.size : "2rem");