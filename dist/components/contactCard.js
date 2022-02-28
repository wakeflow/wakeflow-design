"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colourConvertor = _interopRequireWildcard(require("./utils/colourConvertor.js"));

var _biographyCard = _interopRequireDefault(require("./biographyCard"));

var _emailPhoneCard = _interopRequireDefault(require("./emailPhoneCard"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const ContactCard = (_ref, css) => {
  let {
    image = "",
    color = {
      primaryColor: "white",
      secondaryColor: "silver",
      textColor: "black"
    },
    bio = {
      name: "",
      additionalDetails: "",
      links: [{
        url: "",
        icon: {}
      }],
      email: "",
      phone: ""
    }
  } = _ref;
  const backgroundColorOneRgba = (0, _colourConvertor.default)(color.primaryColor);
  const backgroundColorTwoRgba = (0, _colourConvertor.default)(color.secondaryColor);
  let imageBorderColor = (0, _colourConvertor.default)(color.secondaryColor);
  imageBorderColor = (0, _colourConvertor.addTransparencyToRgba)(imageBorderColor, ".5");
  return /*#__PURE__*/_react.default.createElement(Container, {
    backgroundColor1: backgroundColorOneRgba,
    backgroundColor2: backgroundColorTwoRgba,
    css: css
  }, /*#__PURE__*/_react.default.createElement(FirstRow, null, image && /*#__PURE__*/_react.default.createElement(Image, {
    src: image,
    borderColor: imageBorderColor
  }), /*#__PURE__*/_react.default.createElement(_biographyCard.default, {
    name: bio.name,
    additionalDetails: bio.additionalDetails,
    links: bio.links,
    color: color
  })), /*#__PURE__*/_react.default.createElement(_emailPhoneCard.default, {
    email: bio.email,
    phone: bio.phone,
    color: color
  }));
};

ContactCard.propTypes = {
  image: _propTypes.default.string,
  color: _propTypes.default.shape({
    primaryColor: _propTypes.default.string,
    secondaryColor: _propTypes.default.string,
    textColor: _propTypes.default.string
  }),
  css: _propTypes.default.string,
  bio: _propTypes.default.shape({
    name: _propTypes.default.string,
    additionalDetails: _propTypes.default.string,
    links: _propTypes.default.arrayOf(_propTypes.default.shape({
      url: _propTypes.default.string,
      icon: _propTypes.default.object
    })),
    email: _propTypes.default.string,
    phone: _propTypes.default.string
  })
};
var _default = ContactCard;
exports.default = _default;

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  background-image: ", ";\n  width: clamp(20rem,25rem,35rem);\n  height: clamp(9rem,12rem,14rem);\n  border-radius: 10px;\n  box-shadow:\n  2.8px 2.8px 15.5px rgba(0, 0, 0, 0.031),\n  6.7px 6.7px 31.3px rgba(0, 0, 0, 0.04),\n  12.5px 12.5px 46.9px rgba(0, 0, 0, 0.047),\n  22.3px 22.3px 61.1px rgba(0, 0, 0, 0.053),\n  41.8px 41.8px 72.4px rgba(0, 0, 0, 0.06),\n  100px 100px 80px rgba(0, 0, 0, 0.07)\n;\n  transition: all 0.3s ease-in-out;\n  &:hover{\n    transform: scale(1.01);\n  }\n  margin: 20px;\n  ", "\n"])), p => p.backgroundColor1 && p.backgroundColor2 ? "linear-gradient(to right, ".concat(p.backgroundColor1, ", ").concat(p.backgroundColor2, ")") : "linear-gradient(to right, rgb(158, 83, 213,0.5), rgb(51, 213, 187,0.5))", p => p.css ? p.css : "");

const FirstRow = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  gap: 30px;\n  flex-grow: 1;\n"])));

const Image = _styledComponents.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 70%;\n  border: solid 4px ", ";\n  margin: 10px;\n  aspect-ratio: 1 / 1;\n  border-radius: 110px;\n  transition: all 0.3s ease-in-out;\n  &:hover{\n    transform: scale(1.05);\n  }\n  @media only screen and (max-width: 600px){\n    height: 60%;\n    margin-left: 10px; \n  }\n"])), p => p.borderColor ? p.borderColor : "rgb(227,119,195)");