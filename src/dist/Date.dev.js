"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Date;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Date(_ref) {
  var date = _ref.date;
  // console.log(datetime)
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
  var day = daysOfWeek[date.getDay()];
  console.log(day);
  return 'Hello';
}
//# sourceMappingURL=Date.dev.js.map
