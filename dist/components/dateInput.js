"use strict"

Object.defineProperty(exports,`__esModule`,{ value: true })
exports.default = void 0

var _react = _interopRequireDefault(require(`react`))

require(`antd/dist/antd.min.css`)

var _antd2 = require(`antd`)

var _styledComponents = _interopRequireDefault(require(`styled-components`))

var _propTypes = _interopRequireDefault(require(`prop-types`))

var _templateObject

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _taggedTemplateLiteral(strings,raw) { if (!raw) raw = strings.slice(0); return Object.freeze(Object.defineProperties(strings,{ raw: { value: Object.freeze(raw) } })) }

const DateInput = /*#__PURE__*/_react.default.forwardRef((props,ref) => {
  const {
    value,
    css,
    handleChange,
    handleBlur,
    inputFormat = `MM/DD/YYYY`,
    size = `large`,
  } = props
  return /*#__PURE__*/_react.default.createElement(Container,{ css },/*#__PURE__*/_react.default.createElement(_antd2.DatePicker,{
    ref,
    value,
    format: inputFormat,
    size,
    onChange: handleChange,
    onBlur: handleBlur,
  }))
})

var _default = DateInput
exports.default = _default

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([`\n  cursor: pointer;\n  & > .ant-picker{\n    background-color: rgba(255,255,255,0.7);\n    color: black;\n    border-radius:6px;\n    border-width:2px;\n    border-right-width:2px !important;\n  }\n  & > .ant-picker:hover{\n    border-color: black;\n    border-right-width:2px !important;\n  }\n  & > .ant-picker-focused{\n    border-color: black;\n    box-shadow:none;\n    border-right-width:2px !important;\n  }\n  & > .ant-picker-input{\n    border-color: black;\n  }\n  & > a.ant-picker-now-btn{\n    color: black;\n  }\n  & > li.ant-picker-now{\n    color: black;\n  }\n  `,`\n`])),p => p.css ? p.css : ``)