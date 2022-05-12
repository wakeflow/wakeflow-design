"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _reactDateRange = require("react-date-range");

require("react-date-range/dist/styles.css");

require("react-date-range/dist/theme/default.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Calendar = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    handleChange,
    handleBlur,
    currentValue
  } = props;
  const selectionRange = {
    startDate: (currentValue === null || currentValue === void 0 ? void 0 : currentValue.startDate) || new Date(),
    endDate: (currentValue === null || currentValue === void 0 ? void 0 : currentValue.endDate) || new Date(),
    key: "selection"
  };

  const handleDateChange = e => {
    const newValue = {
      startDate: e.selection.startDate,
      endDate: e.selection.endDate
    };
    handleChange(newValue);
  };

  return /*#__PURE__*/_react.default.createElement(_reactDateRange.DateRangePicker, _extends({
    ranges: [selectionRange],
    onChange: handleDateChange,
    onBlur: handleBlur
  }, props));
});

var _default = Calendar;
exports.default = _default;