"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dateInput = _interopRequireDefault(require("./dateInput"));

var _timeInput = _interopRequireDefault(require("./timeInput"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const DateTimeInput = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    css,
    onChange,
    value
  } = props;
  return /*#__PURE__*/_react.default.createElement(Container, {
    css: css
  }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker, {
    showTime: true,
    ref: ref,
    value: value,
    size: "large",
    onChange: onChange
  }));
});

var _default = DateTimeInput;
exports.default = _default;

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 5px;\n  & > .ant-picker{\n    background-color: rgba(255,255,255,0.7);\n    color: black;\n    border-radius:6px;\n    border-width:2px;\n    border-right-width:2px !important;\n  }\n  & > .ant-picker:hover{\n    border-color: black;\n    border-right-width:2px !important;\n  }\n  & > .ant-picker-focused{\n    border-color: black;\n    box-shadow:none;\n    border-right-width:2px !important;\n  }\n  & > .ant-picker-input{\n    border-color: black;\n  }\n  & > a.ant-picker-now-btn{\n    color: black;\n  }\n  & > li.ant-picker-now{\n    color: black;\n  }\n  ", "\n"])), p => p.css ? p.css : "");