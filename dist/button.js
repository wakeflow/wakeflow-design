"use strict"

Object.defineProperty(exports,`__esModule`,{ value: true })
exports.default = void 0

var _react = _interopRequireDefault(require(`react`))

var _styledComponents = _interopRequireDefault(require(`styled-components`))

var _templateObject

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _taggedTemplateLiteral(strings,raw) { if (!raw) raw = strings.slice(0); return Object.freeze(Object.defineProperties(strings,{ raw: { value: Object.freeze(raw) } })) }

const Button = _ref => {
  let { text = `5.12+` } = _ref
  return /*#__PURE__*/_react.default.createElement(Container,null,/*#__PURE__*/_react.default.createElement(`button`,null,text))
}

var _default = Button
exports.default = _default

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([`\n  display:flex;\n  color:green;\n  background-color: lightgreen;\n  border-radius:40px;\n  padding:4px 8px;\n  width:50px;\n  text-align:center;\n  vertical-align:center;\n  align-items:center;\n  justify-content:center;\n`])))