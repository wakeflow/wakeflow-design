"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Badge = _ref => {
  let {
    text = "5.12+",
    css
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Container, {
    css: css
  }, /*#__PURE__*/_react.default.createElement(Text, null, text));
};

var _default = Badge;
exports.default = _default;
Badge.propTypes = {
  text: _propTypes.default.string,
  css: _propTypes.default.string
};

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display:flex;\n  color:green;\n  background-color: lightgreen;\n  border-radius:40px;\n  padding:4px 8px;\n  width:50px;\n  text-align:center;\n  vertical-align:center;\n  align-items:center;\n  justify-content:center;\n  ", "\n"])), p => p.css ? p.css : "");

const Text = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n"])));