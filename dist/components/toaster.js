"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toast = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHotToast = require("react-hot-toast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Toaster = () => {
  return /*#__PURE__*/_react.default.createElement(_reactHotToast.Toaster, null);
};

const toast = {
  info: msg => (0, _reactHotToast.toast)(msg, infoStyle),
  success: msg => (0, _reactHotToast.toast)(msg, successStyle),
  error: msg => (0, _reactHotToast.toast)(msg, errorStyle)
};
exports.toast = toast;
var _default = Toaster;
exports.default = _default;
const errorStyle = {
  style: {
    color: "white",
    backgroundColor: "#f44336"
  }
};
const successStyle = {
  style: {
    color: "white",
    backgroundColor: "#4bb543"
  }
};
const infoStyle = {
  style: {
    color: "white",
    backgroundColor: "black"
  }
};