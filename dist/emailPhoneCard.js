"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFeather = require("react-feather");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colourConvertor = _interopRequireWildcard(require("../utils/colourConvertor"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const EmailPhoneCard = _ref => {
  let {
    email,
    phone,
    color
  } = _ref;

  const handleClick = clicked => {
    const copyTextarea = document.querySelector("#".concat(clicked));
    const range = document.createRange();
    range.selectNode(copyTextarea);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };

  let backgroundColor = (0, _colourConvertor.default)(color.secondaryColor);
  backgroundColor = (0, _colourConvertor.addTransparencyToRgba)(backgroundColor, ".5");
  return /*#__PURE__*/_react.default.createElement(Container, {
    borderColor: color.textColor,
    textColor: color.textColor,
    backgroundColor: backgroundColor
  }, /*#__PURE__*/_react.default.createElement(EmailContainer, {
    id: "email",
    borderColor: color.textColor,
    onClick: () => handleClick("email"),
    hoverColor: color.primaryColor
  }, /*#__PURE__*/_react.default.createElement(_reactFeather.Mail, {
    color: color.textColor
  }), email), /*#__PURE__*/_react.default.createElement(PhoneContainer, {
    id: "phone",
    borderColor: color.textColor,
    onClick: () => handleClick("phone"),
    hoverColor: color.primaryColor
  }, /*#__PURE__*/_react.default.createElement(_reactFeather.Phone, {
    color: color.textColor
  }), phone));
};

var _default = EmailPhoneCard;
exports.default = _default;

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  border-top: solid 4px rgba(128, 128, 128, 0.2);\n  /* height: 15%; */\n  color: ", ";\n  background-color: ", ";\n  border-radius: 0px 0px 10px 10px;\n  font-weight: 600;\n"])), p => p.textColor ? p.textColor : "black", p => p.backgroundColor ? p.backgroundColor : "white");

const EmailContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n  border-right: solid 2px rgba(128, 128, 128, 0.2);\n  padding: 5px;\n  @media only screen and (max-width: 600px){\n    padding: 5px;\n    gap: 10px;\n  }\n  &:hover{\n    cursor: pointer;\n    color: ", ";\n  }\n"])), p => p.hoverColor ? p.hoverColor : "white");

const PhoneContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n  text-align: center;\n  border-left: solid 2px rgba(128, 128, 128, 0.2);\n  padding: 5px;\n  @media only screen and (max-width: 600px){\n    padding: 5px;\n    gap: 10px;\n  }\n  &:hover{\n    cursor: pointer;\n    color: ", "\n  }\n"])), p => p.hoverColor ? p.hoverColor : "white");