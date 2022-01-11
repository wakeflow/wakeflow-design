"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const BiographyCard = _ref => {
  var _additionalDetails, _additionalDetails2;

  let {
    name,
    additionalDetails,
    links,
    color
  } = _ref;
  if (additionalDetails) additionalDetails = (_additionalDetails = additionalDetails) === null || _additionalDetails === void 0 ? void 0 : _additionalDetails.split("\n");
  if (!name && additionalDetails === "" && links[0].url === "") return null;
  return /*#__PURE__*/_react.default.createElement(Container, {
    textColor: color.textColor
  }, name && /*#__PURE__*/_react.default.createElement(Name, null, name), additionalDetails != "" && /*#__PURE__*/_react.default.createElement(AdditionalDetails, null, (_additionalDetails2 = additionalDetails) === null || _additionalDetails2 === void 0 ? void 0 : _additionalDetails2.map((line, index) => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: index
    }, line, /*#__PURE__*/_react.default.createElement("br", null));
  })), links[0].url != "" && /*#__PURE__*/_react.default.createElement(Links, null, links.map((link, index) => {
    return /*#__PURE__*/_react.default.createElement(A, {
      key: index,
      href: "".concat(link.url),
      target: "_blank",
      hoverColor: color.primaryColor
    }, /*#__PURE__*/_react.default.createElement(link.icon, {
      color: color.textColor
    }));
  })));
};

var _default = BiographyCard;
exports.default = _default;

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  color: ", ";\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"])), p => p.textColor ? p.textColor : "black");

const Name = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 1.8rem;\n  font-weight: 600;\n  transition: all 0.3s ease-in-out;\n  &:hover{\n    transform: scale(1.1);\n  }\n  @media only screen and (max-width: 600px){\n    font-size: 1rem;\n  }\n"])));

const AdditionalDetails = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: .8rem;\n"])));

const Links = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n"])));

const A = _styledComponents.default.a(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  transition: all 0.3s ease-in-out;\n  &:hover{\n    transform: scale(1.1);\n    & > svg {\n        stroke: ", ";\n    }\n  }\n"])), p => p.hoverColor ? p.hoverColor : "white");