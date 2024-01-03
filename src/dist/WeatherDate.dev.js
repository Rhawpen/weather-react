"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CurrentDate;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CurrentDate(_ref) {
  var datestamp = _ref.datestamp;
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
  var day = daysOfWeek[datestamp.getDay()];
  var hour = datestamp.getHours(); // if(hour )

  var minute = datestamp.getMinutes(); // console.log(day)

  return {
    day: day
  };
}
//# sourceMappingURL=WeatherDate.dev.js.map
