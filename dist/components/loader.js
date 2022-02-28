"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colourConvertor = _interopRequireWildcard(require("./utils/colourConvertor"));

var _colours = require("./utils/colours.js");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Loader = _ref => {
  let {
    image,
    color,
    css
  } = _ref;
  const colorArray = [];
  if (color) for (let i = 0; i < 7; i++) colorArray.push((0, _colourConvertor.addTransparencyToRgba)((0, _colourConvertor.default)(color), ".".concat(i + 3)));
  return /*#__PURE__*/_react.default.createElement(Container, {
    css: css
  }, /*#__PURE__*/_react.default.createElement(Img, {
    src: image
  }), /*#__PURE__*/_react.default.createElement(LoaderContainer, null, /*#__PURE__*/_react.default.createElement(LoadingBar, {
    color1: colorArray[0],
    color2: colorArray[1],
    color3: colorArray[2],
    color4: colorArray[3],
    color5: colorArray[4],
    color6: colorArray[5],
    color7: colorArray[6]
  })));
};

var _default = Loader;
exports.default = _default;
Loader.propTypes = {
  image: _propTypes.default.string,
  color: _propTypes.default.string,
  css: _propTypes.default.string
};

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  ", "\n"])), p => p.css ? p.css : "");

const Img = _styledComponents.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: 500px;\n  max-height: 200px;\n  padding: 10px;\n  @media only screen and (max-width: 600px){\n    width: 325px; \n  }\n"])));

const LoaderContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 500px; \n  margin: 0 auto;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  background: ", ";\n  position: relative;\n  padding: 4px;\n  @media only screen and (max-width: 600px){\n    width: 325px; \n  }\n  &:before {\n  content:'';\n  border:1px solid transparent; \n  border-radius:10px;\n  position:absolute;\n  top:-4px; \n  right:-4px; \n  bottom:-4px; \n  left:-4px;\n}\n"])), _colours.transparentBlack1);

const LoadingBar = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position:absolute;\n  border-radius:10px;\n  top:0;\n  right:100%;\n  bottom:0;\n  left:0;\n  background: ", "; \n  width:0;\n  animation:borealisBar 4s linear infinite;\n  @keyframes borealisBar {\n  0% {\n    left:0%;\n    right:100%;\n    width:0%;\n    background: ", ";\n  }\n  10% {\n    left:0%;\n    right:75%;\n    width:25%;\n    \n  }\n  16%{\n    background: ", ";\n  }\n  32%{\n    background: ", ";\n  }\n  48%{\n    background: ", ";\n  }\n  62%{\n    background: ", ";\n  }\n  78%{\n    background: ", ";\n  }\n  90% {\n    right:0%;\n    left:75%;\n    width:25%;\n    background: ", ";\n  }\n  100% {\n    left:100%;\n    right:0%;\n    width:0%;\n    background: ", ";\n  }\n}\n"])), p => p.color1 ? p.color1 : _colours.lightBlue, p => p.color1 ? p.color1 : _colours.lightBlue, p => p.color2 ? p.color2 : _colours.blue, p => p.color3 ? p.color3 : _colours.lightPurple, p => p.color4 ? p.color4 : _colours.purple, p => p.color5 ? p.color5 : _colours.lightPink, p => p.color6 ? p.color6 : _colours.pink, p => p.color7 ? p.color7 : _colours.salmon, p => p.color7 ? p.color7 : _colours.salmon);