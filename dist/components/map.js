"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _locationPin = _interopRequireDefault(require("./locationPin"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Map = _ref => {
  let {
    center = {
      lat: 51.525261,
      lng: -0.167490
    },
    zoom = 11,
    pin = {
      color: "black",
      lat: "",
      lng: "",
      size: ""
    },
    apiKey = ""
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(_googleMapReact.default, {
    bootstrapURLKeys: {
      key: apiKey
    },
    defaultCenter: center,
    defaultZoom: zoom
  }, (pin === null || pin === void 0 ? void 0 : pin.lat) && (pin === null || pin === void 0 ? void 0 : pin.lng) && /*#__PURE__*/_react.default.createElement(_locationPin.default, {
    lat: pin.lat,
    lng: pin.lng,
    color: pin.color,
    size: pin.size
  })));
};

var _default = Map;
exports.default = _default;

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"])));